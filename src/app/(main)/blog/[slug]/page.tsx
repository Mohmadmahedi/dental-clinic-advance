import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, BlogPost } from "@/data/posts";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Clock,
  Calendar,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | BrightSmile Dental Clinic`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/70 py-3 text-xs text-navy-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-navy-400" />
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-navy-400" />
          <span className="text-navy-900 font-semibold truncate">
            {post.title}
          </span>
        </div>
      </div>

      {/* Article Header & Main Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Dental Articles</span>
          </Link>

          {/* Category Tag */}
          <div className="inline-block px-3 py-1 rounded-full bg-aqua text-primary-800 text-xs font-bold mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 mb-8 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 ring-2 ring-primary/20">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-bold text-navy-900">{post.author.name}</p>
                <p className="text-xs text-primary font-medium">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-navy-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-soft-xl mb-10 bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-slate prose-lg max-w-none text-navy-800 leading-relaxed space-y-6">
            <div className="text-base sm:text-lg leading-relaxed text-navy-700 whitespace-pre-line font-sans">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-8 mt-10 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-navy-600 mr-2 uppercase tracking-wider">
              Tags:
            </span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-slate-100 text-navy-700 text-xs font-medium hover:bg-aqua transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* In-Article Booking Box */}
          <div className="my-12 rounded-3xl bg-gradient-to-r from-aqua-50 via-white to-aqua-50 border border-primary-200 p-8 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-amber text-navy-950 text-xs font-bold shadow-amber">
                Special Checkup Offer
              </span>
              <h3 className="text-xl font-bold font-heading text-navy-950">
                Concerned About Your Oral Health?
              </h3>
              <p className="text-xs sm:text-sm text-navy-600 max-w-md">
                Book a comprehensive consultation + intraoral 3D scan with our specialist doctors today for just ₹499.
              </p>
            </div>

            <Button
              href="/book-appointment"
              variant="amber"
              size="md"
              className="shrink-0 font-bold shadow-amber"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Book ₹499 Checkup
            </Button>
          </div>

          {/* Author Bio Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-200 shrink-0">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-navy-950">
                Written by {post.author.name}
              </h4>
              <p className="text-xs font-semibold text-primary">
                {post.author.role} • BrightSmile Dental Clinic Bengaluru
              </p>
              <p className="text-xs text-navy-600 leading-relaxed pt-1">
                Passionate about public dental awareness, gentle preventive dentistry, and helping patients make evidence-based oral health decisions.
              </p>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-bold font-heading text-navy-950 mb-8">
                Related Articles You May Like
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 mb-4">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-primary uppercase">
                        {related.category}
                      </span>
                      <h4 className="text-base font-bold font-heading text-navy-950 group-hover:text-primary transition-colors mt-1">
                        {related.title}
                      </h4>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-navy-500">
                      <span>{related.readTime}</span>
                      <span className="font-semibold text-primary group-hover:underline flex items-center gap-1">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTABanner />
    </>
  );
}
