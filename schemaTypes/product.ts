import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the product',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the product',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'productImage',
      type: 'image',
      title: 'Image of the product',
      options: {
        // Add alt text for the image
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
      name: 'smallProductDescription',
      type: 'string',
      title: 'Title Small Description of the Single Product',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      description: 'List of technologies used in the product',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      description: 'Date and time when the product was created',
    }),
  ],
})
