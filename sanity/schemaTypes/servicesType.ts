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
                        name: 'image',
                        type: 'image',
                        title: 'Image',
                        description: 'The image of the service',
                        options: {
                            hotspot: true,
                            format: 'jpg',
                        }
                    }
                ]
            })
        ],
        validation: validationService => validationService.required().min(1).max(7)
        })]
})