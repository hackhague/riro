import { defineField, defineType } from "sanity";
import type { Rule } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beschrijving",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Leestijd",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "url",
      validation: (rule: Rule) => rule.uri({ allowRelative: true }).required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicatiedatum",
      type: "date",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Inhoud",
      type: "text",
      rows: 12,
      validation: (rule: Rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
});
