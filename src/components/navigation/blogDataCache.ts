// Tina CMS blog data cache

import { client } from '../../../tina/__generated__/client';

let cachedBlogs: any[] | null = null;
let lastFetch: number | null = null;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export async function getBlogsCached() {
  const now = Date.now();
  if (cachedBlogs && lastFetch && now - lastFetch < CACHE_DURATION) {
    return cachedBlogs;
  }

  try {
    const res = await client.queries.blogConnection();
    const blogs = res.data.blogConnection.edges.map((edge: any) => {
      const blog = edge.node;
      return {
        id: blog._sys?.filename || blog.titel?.toLowerCase().replace(/\s+/g, '-') || '',
        titel: blog.titel || '',
        kurzbeschreibung: blog.kurzbeschreibung || '',
        datum: blog.datum || '',
        kategorie: blog.kategorie || '',
        autor: blog.autor || '',
        bild: blog.bild || '',
        featured: blog.featured || false,
        inhalt: blog.inhalt || '',
        _sys: blog._sys
      };
    });

    // Sort by date (newest first)
    blogs.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());

    cachedBlogs = blogs;
    lastFetch = now;
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogByIdCached(id: string) {
  const blogs = await getBlogsCached();
  return blogs.find(blog => blog.id === id) || null;
}

// Clear cache manually if needed
export function clearBlogCache() {
  cachedBlogs = null;
  lastFetch = null;
}
