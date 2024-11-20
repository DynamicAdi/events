import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const servicesType = defineType({
  name: "services",
  description: "List of all the services you provide",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "The image of the service",
      options: {
        hotspot: true,
      },
    })
  ],
});
