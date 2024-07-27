import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the blog',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the blog post',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Category of the blog post',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}], // Assuming you have an author schema defined
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Title Image of the blog post',
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
      name: 'titleSmallDescription',
      type: 'string',
      title: 'Title Small Description of the blog post',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      description: 'Date and time when the project was created',
    }),
  ],
})
