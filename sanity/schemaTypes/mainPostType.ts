import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const mainPost = defineType({
    name: "mainpost",
    title: "Main 3D Posts",
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
            name: "model",
            type: "file",
            title: "3D Model",
            description: "Upload your 3D model file (.glb only!)"
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
            type: "image",
            title: "PNG Image",
            description: "A png image which can be used to display on effects",
            options: {
                hotspot: true
            }
        }),
    ]
})