import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the service',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the service',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Service Description',
      description: 'A brief description of the service offered',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Service Image',
      options: {
        metadata: ['lqip'],
        storeOriginalFilename: false,
        accept: 'image/*',
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Describe the image for accessibility purposes',
          options: {
            isHighlighted: true, // <-- make this field prominent in the studio UI
          },
        },
      ],
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              type: 'string',
              title: 'Section Heading',
            }),
            defineField({
              name: 'content',
              type: 'text',
              title: 'Section Content',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Section Image',
              options: {
                metadata: ['lqip'],
                storeOriginalFilename: false,
                accept: 'image/*',
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            }),
            defineField({
              name: 'explainer',
              type: 'text',
              title: 'Explainer Text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'whatsIncluded',
      type: 'array',
      title: 'What’s Included',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'faqs',
      type: 'array',
      title: 'FAQs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              title: 'FAQ Question',
            }),
            defineField({
              name: 'answer',
              type: 'text',
              title: 'FAQ Answer',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      description: 'Date and time when the service was created',
    }),
  ],
})
