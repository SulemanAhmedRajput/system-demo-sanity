import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the project',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the project',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'projectImage',
      type: 'image',
      title: 'Image of the project',
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
      name: 'smallProjectDescription',
      type: 'string',
      title: 'Title Small Description of the Single Project',
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
      description: 'List of technologies used in the project',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      description: 'Date and time when the project was created',
    }),
  ],
})
