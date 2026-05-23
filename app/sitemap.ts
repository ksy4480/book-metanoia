import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://bookmetanoia.com', lastModified: new Date() },
    { url: 'https://bookmetanoia.com/about', lastModified: new Date() },
    { url: 'https://bookmetanoia.com/books', lastModified: new Date() },
    { url: 'https://bookmetanoia.com/proposal', lastModified: new Date() },
  ]
}