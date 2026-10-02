import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, doctor, date, time, message, honeypot } =
      body;

    // 1. Basic Honeypot Spam Protection
    // If hidden honeypot field is filled by a bot, silently succeed without processing
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Booking received successfully.",
        bookingId: `BS-SPAM-${Date.now().toString().slice(-4)}`,
      });
    }

    // 2. Server-side Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    // Validate 10-digit Indian phone format
    const cleanedPhone = phone.replace(/[\s\-\(\)\+]/g, "");
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

    if (!phoneRegex.test(cleanedPhone) && cleanedPhone.length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid 10-digit mobile number.",
        },
        { status: 400 }
      );
    }

    // Generate unique human-readable booking reference ID
    const bookingId = `BS-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    const bookingPayload = {
      bookingId,
      name: name.trim(),
      phone: cleanedPhone,
      email: email ? email.trim() : "Not provided",
      service: service || "General Checkup",
      doctor: doctor || "First Available Specialist",
      date: date || "Earliest Available",
      time: time || "Flexible",
      message: message ? message.trim() : "None",
      timestamp,
      status: "Confirmed_Pending_Review",
    };

    console.log("=== NEW PATIENT BOOKING RECEIVED ===", bookingPayload);

    // =========================================================================
    // INTEGRATION EXTENSION HOOKS (Ready for production connection):
    // =========================================================================

    // A. GOOGLE SHEETS INTEGRATION (via Google Apps Script / SheetDB / Zapier)
    // -------------------------------------------------------------------------
    // const googleSheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    // if (googleSheetWebhookUrl) {
    //   await fetch(googleSheetWebhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(bookingPayload),
    //   });
    // }

    // B. EMAIL NOTIFICATION TO CLINIC DESK (via Resend or Nodemailer)
    // -------------------------------------------------------------------------
    // const resendApiKey = process.env.RESEND_API_KEY;
    // if (resendApiKey) {
    //   const { Resend } = await import("resend");
    //   const resend = new Resend(resendApiKey);
    //   await resend.emails.send({
    //     from: "BrightSmile Dental <appointments@brightsmileclinic.in>",
    //     to: ["care@brightsmileclinic.in"],
    //     subject: `New Dental Appointment: ${name} (${bookingId})`,
    //     html: `
    //       <h2>New Appointment Request</h2>
    //       <p><strong>Booking Ref:</strong> ${bookingId}</p>
    //       <p><strong>Patient Name:</strong> ${name}</p>
    //       <p><strong>Phone:</strong> ${cleanedPhone}</p>
    //       <p><strong>Service:</strong> ${service}</p>
    //       <p><strong>Preferred Doctor:</strong> ${doctor}</p>
    //       <p><strong>Preferred Date & Time:</strong> ${date} at ${time}</p>
    //       <p><strong>Symptoms/Notes:</strong> ${message}</p>
    //     `,
    //   });
    // }

    // C. WHATSAPP NOTIFICATION TO PATIENT (via Twilio, Gupshup, or Wati)
    // -------------------------------------------------------------------------
    // const whatsappApiKey = process.env.WHATSAPP_API_KEY;
    // if (whatsappApiKey) {
    //   // Trigger WhatsApp template message: "Hi [name], your appointment request [bookingId] has been received..."
    // }

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request received successfully.",
        bookingId,
        data: bookingPayload,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your booking. Please call the clinic directly.",
      },
      { status: 500 }
    );
  }
}
