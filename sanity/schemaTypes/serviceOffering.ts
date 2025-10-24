import { defineField, defineType } from "sanity";
import type { Rule } from "sanity";

const SERVICE_LOCATIONS = [
  { title: "Op afstand", value: "op afstand" },
  { title: "Aan huis", value: "aan huis" },
  { title: "Op kantoor", value: "op kantoor" },
  { title: "Hybride", value: "hybride" },
];

const SERVICE_CATEGORIES = [
  { title: "Particulier", value: "consumer" },
  { title: "Zakelijk", value: "business" },
  { title: "Beveiliging", value: "security" },
  { title: "Cyber APK", value: "cyberApk" },
  { title: "Extra diensten", value: "extraServices" },
];

export default defineType({
  name: "serviceOffering",
  title: "Service",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "pricing", title: "Pricing" },
  ],
  fields: [
    defineField({
      name: "serviceId",
      title: "Service ID",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description: "Machine readable identifier used in the application (e.g. consumer-remote).",
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "shortLabel",
      title: "Short label",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: SERVICE_CATEGORIES },
      validation: (rule: Rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "variant",
      title: "Variant key",
      type: "string",
      description: "Unique key per category (e.g. remote, onsite)",
      validation: (rule: Rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      options: { list: SERVICE_LOCATIONS },
      validation: (rule: Rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "bookingSummary",
      title: "Booking summary",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "object",
      group: "pricing",
      fields: [
        defineField({
          name: "amount",
          title: "Amount",
          type: "number",
      validation: (rule: Rule) => rule.min(0),
        }),
        defineField({
          name: "currency",
          title: "Currency",
          type: "string",
          initialValue: "EUR",
          validation: (rule: Rule) => rule.required(),
        }),
        defineField({
          name: "display",
          title: "Display",
          type: "string",
          validation: (rule: Rule) => rule.required(),
        }),
        defineField({
          name: "unit",
          title: "Unit",
          type: "string",
        }),
        defineField({
          name: "extra",
          title: "Additional info",
          type: "string",
        }),
        defineField({
          name: "exVat",
          title: "Price shown excl. VAT?",
          type: "boolean",
        }),
      ],
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordering",
      type: "number",
      description: "Lower numbers appear first within a category.",
      group: "content",
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "category",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Category: ${subtitle}` : undefined,
      };
    },
  },
});
