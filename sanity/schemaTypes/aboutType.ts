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
            title: 'Mini Description',
            description: 'Add short description for home page section.',
        }),
        defineField({
            name: 'mainDescription',
            type: 'string',
            title: 'Description',
            description: 'Add a brief description of your about section.',
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
            //
            title: 'Social Media Links',
            description: 'Add your social media icons and links here.',
        }),
        defineField({
            name: 'TeamMember',
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
                            name: 'name',
                            type:'string',
                        }),
                        defineField({
                            name: 'Position',
                            type:'string',
                        }),
                    ],
                }),
            ],
/////
title: 'Our Team Members',
description: 'Our valuable partners are members of our team.'
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