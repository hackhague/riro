import { defineField, defineType } from "sanity";
import type { Rule } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site settings & pricing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naam",
      type: "string",
      initialValue: "instantIT",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "contact",
      title: "Contact gegevens",
      type: "object",
      fields: [
        defineField({ name: "phoneNumber", title: "Telefoonnummer", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "phoneHref", title: "Telefoon link", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "phoneLabel", title: "Telefoon label", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "phoneAriaLabel", title: "Telefoon aria label", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "shortCallLabel", title: "Korte bel CTA", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "whatsappHref", title: "WhatsApp link", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "whatsappLabel", title: "WhatsApp label", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "whatsappCta", title: "WhatsApp CTA", type: "string", validation: (rule: Rule) => rule.required() }),
      ],
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "object",
      fields: [
        defineField({ name: "planAppointment", title: "Plan afspraak", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "callNow", title: "Bel nu", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "callWithNumber", title: "Bel met nummer", type: "string", validation: (rule: Rule) => rule.required() }),
        defineField({ name: "whatsapp", title: "WhatsApp CTA", type: "string", validation: (rule: Rule) => rule.required() }),
      ],
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "floatingCallButton",
      title: "Zwevende belknop",
      type: "object",
      fields: [
        defineField({
          name: "hideOnRoutes",
          title: "Verberg op routes",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "pricingHero",
      title: "Prijs hero",
      type: "text",
      rows: 3,
      description: "Optionele aanvullende copy voor de tarieven pagina.",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
