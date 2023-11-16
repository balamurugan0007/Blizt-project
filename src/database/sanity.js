import {createClient} from '@sanity/client'

import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: '6m5ogi8b',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03',
  token:
  'skM5Lpfax7C6X2SYTF8LwRrgcLTAaC1lModJ1jjoA4vewAJ0BwDqOwxSIlVGIt183Qiwghb4NDGwswmoWiQaCV3uAuRMzkeO8VlVTNDUs1k0ud6hCvOnYHsSHibKqZ13v2OAiQ0p7wP2iYc08wlVh9DjIA6k4wVnJMCM3i9Hiy0MNsc2jcSd', 
  ignoreBrowserTokenWarning: true,
})



const builder = imageUrlBuilder(client)

export const UrlFor=(source)=>{
  
  return builder.image(source)
  
}