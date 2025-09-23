// Tina CMS team data cache for navigation dropdowns

import { client } from '../../../tina/__generated__/client';

let cachedTeams: any | null = null;
let lastFetch: number | null = null;
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

// Returns the same structure as teamStructure
export async function getTeamsCached() {
  const now = Date.now();
  if (cachedTeams && lastFetch && now - lastFetch < CACHE_DURATION) {
    return cachedTeams;
  }
  const res = await client.queries.mannschaftenConnection();
  const teams = res.data.mannschaftenConnection.edges.map((edge: any) => edge.node);

  // Grouping logic
  const structure = {
    erwachsene: {
      damen: [],
      herren: [],
    },
    jugend: {
      maennlich: [],
      weiblich: [],
    },
    minis: [],
    toppis: [],
    extra: [],
  };

  teams.forEach((team: any) => {
    const name = team.name || '';
    const kurzname = team.kurzname || '';
    const geschlecht = (team.geschlecht || '').toLowerCase();
    const jugend = (team.jugend || '').toLowerCase();
    // Build href: try to match the hardcoded pattern
        let teamId = team._sys && team._sys.filename ? team._sys.filename : (team.name || '').toLowerCase().replace(/\s+/g, '');
        let href= `/teams/${teamId}`;
    if (jugend === 'erwachsene') {
      if (geschlecht === 'weiblich') {
        structure.erwachsene.damen.push({ name, kurzname, href });
      } else if (geschlecht === 'männlich' || geschlecht === 'maennlich') {
        structure.erwachsene.herren.push({ name, kurzname, href });
      }
    } else if ([
      'a-jugend', 'b-jugend', 'c-jugend', 'd-jugend', 'e-jugend'
    ].includes(jugend)) {
      // Jugend
      let genderKey = (geschlecht === 'weiblich') ? 'weiblich' : 'maennlich';
      structure.jugend[genderKey].push({ name, kurzname, href });
    } else if (jugend === 'minis') {
      structure.minis.push({ name: name, kurzname, href });
    } else if (jugend === 'toppis') {
      structure.toppis.push({ name: 'Toppis', kurzname, href });
    } else if (jugend === 'jugend') {
      structure.extra.push({ name: name, kurzname, href });
    }
  });

  // Sort arrays by name for consistency
  structure.erwachsene.damen.sort((a, b) => a.name.localeCompare(b.name));
  structure.erwachsene.herren.sort((a, b) => a.name.localeCompare(b.name));
  structure.jugend.maennlich.sort((a, b) => a.name.localeCompare(b.name));
  structure.jugend.weiblich.sort((a, b) => a.name.localeCompare(b.name));

  cachedTeams = structure;
  lastFetch = now;
  return structure;
}
