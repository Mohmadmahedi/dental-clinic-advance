import React from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function OfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Intentionally NO main site navigation to maximize landing page conversions */}
      <main className="flex-1">{children}</main>
      <WhatsAppButton />
    </div>
  );
}
