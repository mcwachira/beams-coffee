import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "../env";
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  // useCdn,
  token: process.env.SANITY_API_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
// GROQ queries

export const queries = {
  // 🛍 All Products (with pagination support)
  products: (
    start = 0,
    end = 20,
  ) => `*[_type == "product"] | order(_createdAt desc) [${start}...${end}]{
    _id,
    name,
    slug,
    image {
      asset->,
      alt
    },
    images[]{
      asset->,
      alt
    },
    description,
    price,
    stock,
    roastLevel,
    origin,
    featured,
    tags,
    specifications,
    seo {
      metaTitle,
      metaDescription,
      metaImage {
        asset->,
        alt
      },
      openGraph {
        ogTitle,
        ogDescription,
        ogImage {
          asset->,
          alt
        }
      }
    },
    "category": category->{
      _id,
      name,
      slug
    }
  }`,

  // 🛍 Featured Products
  featuredProducts: `*[_type == "product" && featured == true] | order(_createdAt desc){
    _id,
    name,
    slug,
    image {
      asset->,
      alt
    },
    images[]{
      asset->,
      alt
    },
    description,
    price,
    stock,
      inStock,
    roastLevel,
    origin,
    featured,
    tags,
    specifications,
    seo {
      metaTitle,
      metaDescription,
      metaImage {
        asset->,
        alt
      },
      openGraph {
        ogTitle,
        ogDescription,
        ogImage {
          asset->,
          alt
        }
      }
    },
    "category": category->{
      _id,
      name,
      slug
    }
  }`,

  // 🛍 Product by Slug
  productBySlug: (
    slug: string,
  ) => `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
    name,
    slug,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    images[] {
      asset-> {
        _id,
        url
      },
      alt
    },
    description,
    price,
    stock,
    inStock,
    roastLevel,
    origin,
    featured,
    tags,
    specifications,
    seo {
      metaTitle,
      metaDescription,
      metaImage {
        asset->,
        alt
      },
      openGraph {
        ogTitle,
        ogDescription,
        ogImage {
          asset->,
          alt
        }
      }
    },
    "category": category->{
      _id,
      name,
      slug
    }
  }`,

  // 🛍 Products by Category Slug
  productsByCategory: (
    categorySlug: string,
    start = 0,
    end = 20,
  ) => `*[_type == "product" && category->slug.current == "${categorySlug}"] | order(_createdAt desc) [${start}...${end}]{
    _id,
    name,
    slug,
    image {
      asset->,
      alt
    },
    images[]{
      asset->,
      alt
    },
    description,
    price,
    stock,
      inStock,
    roastLevel,
    origin,
    featured,
    tags,
    specifications,
    seo {
      metaTitle,
      metaDescription,
      metaImage {
        asset->,
        alt
      },
      openGraph {
        ogTitle,
        ogDescription,
        ogImage {
          asset->,
          alt
        }
      }
    },
    "category": category->{
      _id,
      name,
      slug
    }
  }`,

  // 🏷️ Products by Tag
  productsByTag: (
    tag: string,
    start = 0,
    end = 20,
  ) => `*[_type == "product" && "${tag}" in tags] | order(_createdAt desc) [${start}...${end}]{
    _id,
    name,
    slug,
    image {
      asset->,
      alt
    },
    images[]{
      asset->,
      alt
    },
    description,
    price,
    stock,
      inStock,
    roastLevel,
    origin,
    featured,
    tags,
    specifications,
    seo {
      metaTitle,
      metaDescription,
      metaImage {
        asset->,
        alt
      },
      openGraph {
        ogTitle,
        ogDescription,
        ogImage {
          asset->,
          alt
        }
      }
    },
    "category": category->{
      _id,
      name,
      slug
    }
  }`,

  // 🏷 All Categories
  categories: `*[_type == "category"]{
    _id,
    name,
    slug,
    description
  }`,

  // 📰 All Blog Posts
  blogPosts: `*[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    tags,
    metaTitle,
    metaDescription,
    ogImage,
    "author": author->{
      name,
      slug,
      image
    }
  }`,

  // 📰 Blog Post by Slug
  blogPostBySlug: (
    slug: string,
  ) => `*[_type == "blogPost" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    tags,
    metaTitle,
    metaDescription,
    ogImage,
    content,
    "author": author->{
      name,
      slug,
      image {
        asset->,
        alt
      },
      bio
    }
  }`,

  // 👤 Author by Slug
  authorBySlug: (
    slug: string,
  ) => `*[_type == "author" && slug.current == "${slug}"][0]{
    _id,
    name,
    slug,
    image {
      asset->,
      alt
    },
    bio
  }`,

  // 📸 All Galleries
  galleries: `*[_type == "gallery"]{
    images[]{
      asset->{
        _id,
        url
      },
      alt
    }
  }`,
};
