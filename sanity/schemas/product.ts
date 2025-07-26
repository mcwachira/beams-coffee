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
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "SEO Title" },
        { name: "description", type: "text", title: "SEO Description" },
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
        subtitle: price != null ? `$${price}` : "No price"
        media,
      };
    },
  },
});
