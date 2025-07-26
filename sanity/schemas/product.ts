import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "stock",
      title: "Stock Quantity",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "roastLevel",
      title: "Roast Level",
      type: "string",
      options: {
        list: ["Light", "Medium", "Dark"],
      },
    }),
    defineField({
      name: "origin",
      title: "Coffee Origin",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),

    // ✅ NEW: Tags
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    // ✅ NEW: Specifications
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [
        defineField({
          name: "spec",
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        }),
      ],
    }),

    // ✅ Updated SEO block
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          type: "string",
          title: "Meta Title",
          validation: (rule) => rule.max(60),
        },
        {
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          rows: 2,
          validation: (rule) => rule.max(160),
        },
        {
          name: "metaImage",
          type: "image",
          title: "Meta Image",
          options: { hotspot: true },
        },
        {
          name: "openGraph",
          type: "object",
          title: "Open Graph",
          fields: [
            { name: "ogTitle", title: "OG Title", type: "string" },
            { name: "ogDescription", title: "OG Description", type: "text" },
            {
              name: "ogImage",
              title: "OG Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare({ title, media, price }) {
      return {
        title,
        subtitle: price != null ? `$${price}` : "No price",
        media,
      };
    },
  },
});
