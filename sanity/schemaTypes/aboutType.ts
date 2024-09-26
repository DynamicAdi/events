import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";


export const  aboutType = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            type:'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
              hotspot: true,
            },  
          }),
        defineField({
            name: 'miniDescription',
            type: 'string',
        }),
        defineField({
            name: 'content',
            type: 'blockContent',
        }),
        defineField({
            name: 'socialMediaLinks',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            type: 'image',
                        }),
                        defineField({
                            name: 'link',
                            type:'string',
                        }),
                    ],
                }),
            ],
            title: 'Social Media Links',
            description: 'Add your social media icons and links here.',
        }),
        defineField({
            name: 'contactInformation',
            type: 'object',
            fields: [
                defineField({
                    name: 'address',
                    type:'string',
                }),
                defineField({
                    name: 'phone',
                    type:'string',
                }),
                defineField({
                    name: 'email',
                    type:'string',
                }),
            ],
            title: 'Contact Information',
            description: 'Add your contact information here.',
        }),
        defineField({
            name: 'ourPartners',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            type:'string',
                        }),
                        defineField({
                            name: 'image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }),
                    ],
                }),
            ],
            title: 'our Partnership',
            description: 'Add your partners members here.',
        })
    ]
});