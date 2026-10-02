import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/data/posts";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/lib/constants";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Health Blog & Advice | BrightSmile Clinic Bengaluru",
  description:
    "Expert dental advice written by certified dentists. Learn about clear aligners, pain-free root canals, teeth whitening, implant care, and pediatric dentistry.",
  openGraph: {
    title: "Dental Health Blog & Articles | BrightSmile Clinic",
    description:
      "Dentist-authored guides and patient tips for healthier, brighter smiles.",
  },
};

export default function BlogPage() {
  const featuredPost = POSTS[0];
  const regularPosts = POSTS.slice(1);

  return (
    <>
      {/* Blog Hero Banner */}
      <section className="bg-gradient-to-b from-aqua-50 via-white to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-800 text-xs font-semibold shadow-sm mb-4">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span>Dentist-Authored Health Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-navy-950 tracking-tight leading-tight">
            Oral Health Blog & Guides
          </h1>

          <p className="text-base sm:text-lg text-navy-600 mt-4 leading-relaxed">
            Evidence-based advice, procedure comparisons, and hygiene tips written by our MDS dental specialists to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Featured Main Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] w-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-teal">
                  FEATURED ARTICLE
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-navy-500">
                  <span className="font-semibold text-primary uppercase">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 hover:text-primary transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm text-navy-600 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src={featuredPost.author.image}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-900">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-[11px] text-navy-500">
                        {featuredPost.publishedAt}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-700"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Remaining Posts */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Latest Dental Guides
            </h2>
            <p className="text-sm text-navy-600 mt-1">
              Explore recent articles across preventive care, cosmetic treatments, and pediatric dentistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-navy-800 shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-navy-500">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.publishedAt}</span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-navy-950 group-hover:text-primary transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-navy-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 pt-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-200 shrink-0">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-xs font-semibold text-navy-900 truncate">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-primary hover:text-primary-700 flex items-center gap-1 pt-3"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
