const projectList = `*[_type == 'project'] {
  title,
  "slug": slug.current,
  "imageURL": projectImage,
  "date": createdAt
}
`

const singleProject = `*[_type == "project" && _id == 'fbdce9af-0a43-4d57-82f6-d88a0e9ac2b3'][0]`
