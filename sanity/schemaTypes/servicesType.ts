import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const servicesType = defineType({
    name: 'services',
    description: 'List of all the services you provide',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name:'services',
            title: 'Services',
            type: 'array',
            of: [defineArrayMember({
                type: 'object',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        title: 'Title',
                        description: 'The title of the service'
                    }, 
                    {
                        type: 'string',
                        name: 'description',
                        title: 'Short description',
                        description: 'A short description of the service under 250 Characters',
                        validation: validate => (validate.min(10).max(250).warning("Only 250 Characters are allowed")) 
                    },
                    {
                        name: 'image',
                        type: 'image',
                        title: 'Image',
                        description: 'The image of the service',
                        options: {
                            hotspot: true,
                            format: 'jpg',
                        }
                    },
                    defineField({
                        name: 'body',
                        type: 'blockContent',
                      }),
                ]
            })
        ],
        validation: validationService => validationService.required().min(1).max(7)
        })]
})