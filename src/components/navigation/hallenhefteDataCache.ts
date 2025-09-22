// Tina CMS hallenhefte data cache

import { client } from '../../../tina/__generated__/client';

let cachedHallenhefte: any[] | null = null;
let lastFetchHallenhefte: number | null = null;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export async function getHallenhefteCached() {
  const now = Date.now();
  if (cachedHallenhefte && lastFetchHallenhefte && now - lastFetchHallenhefte < CACHE_DURATION) {
    return cachedHallenhefte;
  }

  try {
    const res = await client.queries.hallenhefteConnection();
    const items = res.data.hallenhefteConnection.edges.map((edge: any) => {
      const node = edge.node;
      return {
        id: node._sys?.filename || node.titel?.toLowerCase().replace(/\s+/g, '-') || '',
        titel: node.titel || '',
        ausgabe: node.ausgabe || '',
        beschreibung: node.beschreibung || '',
        pdf: node.pdf || '',
        _sys: node._sys,
      };
    });

    // Sort by ausgabe (newest first)
    items.sort((a, b) => new Date(b.ausgabe).getTime() - new Date(a.ausgabe).getTime());

    cachedHallenhefte = items;
    lastFetchHallenhefte = now;
    return items;
  } catch (error) {
    console.error('Error fetching hallenhefte:', error);
    return [];
  }
}

export function clearHallenhefteCache() {
  cachedHallenhefte = null;
  lastFetchHallenhefte = null;
}


