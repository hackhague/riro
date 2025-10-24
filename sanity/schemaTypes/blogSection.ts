import { defineArrayMember, defineField, defineType } from "sanity";
import type { Rule } from "sanity";

export default defineType({
  name: "blogSection",
  title: "Blog carousel",
  type: "document",
  fields: [
    defineField({
      name: "identifier",
      title: "Unieke ID",
      type: "string",
      description: "Wordt gebruikt als referentie in de website (bijv. cybersecurity-tips).",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitel",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "posts",
      title: "Blog berichten",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "blogPost" }],
        }),
      ],
      validation: (rule: Rule) => rule.min(1),
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "identifier",
      count: "posts.length",
    },
    prepare({ title, count, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle} • ${count ?? 0} posts` : count ? `${count} posts` : "Geen posts",
      };
    },
  },
});
