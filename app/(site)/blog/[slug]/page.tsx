"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CalendarDays, User, Clock, BookOpen } from "lucide-react";
import { useBlogPost } from "@/hooks/useSanity";
import { urlFor } from "@/sanity/lib/image";

const BlogPost = () => {
  const { slug } = useParams();
  const { blog, loading, error } = useBlogPost(slug as string);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const estimateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(" ").length;
    return Math.ceil(words / wordsPerMinute);
  };

  const renderBody = (body: any) => {
    if (typeof body === "string") return <p>{body}</p>;
    if (Array.isArray(body)) {
      return body.map((block, index) => {
        if (block._type === "block") {
          const text =
            block.children?.map((child: any) => child.text).join("") || "";
          return (
            <p key={index} className="mb-4 leading-relaxed">
              {text}
            </p>
          );
        }
        return null;
      });
    }
    return <p>Content not available</p>;
  };

  const bodyText =
    typeof blog?.content === "string"
      ? blog.content
      : JSON.stringify(blog?.content ?? "");

  const readTime = estimateReadTime(bodyText);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-12 container mx-auto px-4">
        <div className="animate-pulse max-w-4xl mx-auto">
          <div className="h-8 w-32 bg-muted rounded mb-8"></div>
          <div className="space-y-6">
            <div className="h-12 bg-muted rounded"></div>
            <div className="flex gap-4">
              <div className="h-4 w-24 bg-muted rounded"></div>
              <div className="h-4 w-20 bg-muted rounded"></div>
              <div className="h-4 w-16 bg-muted rounded"></div>
            </div>
            <div className="aspect-video bg-muted rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 w-3/4 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen pt-20 pb-12 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          {error || "The blog post you're looking for doesn't exist."}
        </p>
        <Link href="/blog">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>
                  {blog.publishedAt
                    ? formatDate(blog.publishedAt)
                    : "Unpublished"}
                </span>
              </div>

              {blog.author && (
                <div className="flex items-center gap-2">
                  {blog.author.image?.asset?.url && (
                    <Image
                      src={blog.author.image.asset.url}
                      alt={blog.author.name || "Author"}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  )}

                  <User className="h-4 w-4" />
                  <span>{blog.author.name}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime} min read</span>
              </div>
            </div>

            {blog.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-coffee-green pl-6 py-2 bg-coffee-cream/30 rounded-r-lg">
                {blog.excerpt}
              </p>
            )}
          </header>

          {blog.mainImage?.asset?.url && (
            <div className="aspect-video overflow-hidden rounded-lg mb-8 bg-coffee-cream">
              <Image
                src={blog.mainImage.asset.url}
                alt={blog.mainImage.alt || blog.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <Separator className="my-8" />

          <article className="prose prose-lg max-w-none">
            <div className="text-lg leading-relaxed text-foreground">
              {blog.content ? (
                renderBody(blog.content)
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-coffee-green mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Content will be displayed here once configured in your
                    Sanity CMS.
                  </p>
                </div>
              )}
            </div>
          </article>

          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                More Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
