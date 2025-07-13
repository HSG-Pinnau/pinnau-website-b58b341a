// Tina CMS news data cache

import { client } from '../../../tina/__generated__/client';

let cachedNews: any[] | null = null;
let lastFetch: number | null = null;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export async function getNewsCached() {
  const now = Date.now();
  if (cachedNews && lastFetch && now - lastFetch < CACHE_DURATION) {
    return cachedNews;
  }

  try {
    const res = await client.queries.newsConnection();
    const news = res.data.newsConnection.edges.map((edge: any) => {
      const newsArticle = edge.node;
      return {
        id: newsArticle._sys?.filename || newsArticle.titel?.toLowerCase().replace(/\s+/g, '-') || '',
        titel: newsArticle.titel || '',
        kurzbeschreibung: newsArticle.kurzbeschreibung || '',
        datum: newsArticle.datum || '',
        kategorie: newsArticle.kategorie || '',
        autor: newsArticle.autor || '',
        bild: newsArticle.bild || '',
        featured: newsArticle.featured || false,
        inhalt: newsArticle.inhalt || '',
        _sys: newsArticle._sys
      };
    });

    // Sort by date (newest first)
    news.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());

    cachedNews = news;
    lastFetch = now;
    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function getNewsArticleByIdCached(id: string) {
  const news = await getNewsCached();
  return news.find(newsArticle => newsArticle.id === id) || null;
}

// Clear cache manually if needed
export function clearNewsCache() {
  cachedNews = null;
  lastFetch = null;
}
