import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {defineDocuments, defineLocations, presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:4200'

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl,
      resolve: {
        // Opening /post/my-slug in Presentation opens that post in the sidebar.
        mainDocuments: defineDocuments([
          {
            route: '/post/:slug',
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
        // Shows where each post is used, with links to open it in Presentation.
        locations: {
          post: defineLocations({
            select: {title: 'title', slug: 'slug.current'},
            resolve: (doc) => ({
              locations: [
                ...(doc?.slug ? [{title: doc.title || 'Untitled', href: `/post/${doc.slug}`}] : []),
                {title: 'Home', href: '/'},
              ],
            }),
          }),
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
