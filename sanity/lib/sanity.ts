import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from "../env";
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
// GROQ queries
export const queries = {
  products: `*[_type == "product"] | order(_createdAt desc) {
_id,
name,
slug,
images,
price,
category->,
stock,
roastLevel,
origin,
featured
}`,
  productBySlug: `*[_type == "product" && slug.current == $slug][0] {
_id,
name,
slug,
images,
description,
price,
category->,
stock,
roastLevel,
origin,
seo}`,
  blogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
_id,
title,
slug,
author,
publishedAt,
featuredImage,
excerpt,
tags
}`,
  categories: `*[_type == "category"] {
_id,
name,
slug,
description
}`,
};
