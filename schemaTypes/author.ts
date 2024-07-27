import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'Short biography of the author',
    }),
    // You can add more fields like social media links, profile picture, etc.
  ],
})
