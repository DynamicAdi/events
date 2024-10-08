import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const mainPost = defineType({
    name: "mainpost",
    title: "Projects",
    type: "document",
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "description",
            type: "blockContent",
            title: "Description"
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            description: "A representative image for the post",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "pngimage",
            type: "array",
            of: [{type: 'image', options: {
                hotspot: true,
                format: 'png'  // this ensures the image is saved as a PNG file
            }}],
            title: "PNG Image",
            description: "set of png image which can be used to display.",
        }),
    ]
})