// ────────────────────────────────────────────────────────────────
//  site.js — the ONE file that lists your content and your profile.
//  Add a new write-up:  drop a .md file in content/posts (or
//  content/projects), then add its slug to the list below.
// ────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: 'Eitan Gonensky',
  initials: 'EG',
  role: 'Cybersecurity & Applied Mathematics',
  school: 'University of Arkansas',
  tagline:
    "I'm a Cybersecurity and Applied Mathematics student at the University of Arkansas. I work on agentic AI for network defense, industrial control system forensics, and the kind of proof-driven reasoning that makes an attack path legible.",
  seeking: 'Seeking Summer 2027 cybersecurity internships',
  email: 'gonensky@uark.edu',
  linkedin: 'https://www.linkedin.com/in/eitan-gonensky-003340350/',
  github: 'https://github.com/EiGeGo',
  resume: 'eitan-gonensky-resume.pdf', // your PDF, in the project root
  photo: 'images/eitan-professional.jpg'
};

export const EDUCATION = {
  degree: 'B.S. Cybersecurity, B.S. Applied Mathematics',
  school: 'University of Arkansas',
  detail: 'Fayetteville, AR',
  // Edit these freely — they show up on the Home page.
  coursework: [
    'Discrete Mathematics',
    'Linear Algebra',
    'Combinatorics',
    'Digital Design'
  ],
  tools: [
    'Python',
    'TShark / Wireshark',
    'LaTeX',
    'Linux',
    'Git',
    'Multi-agent LLM systems'
  ]
};

export const POSTS = ['summer-reu', 'graph-theory'];
export const PROJECTS = ['openai-build-week'];

// ── plumbing below; you shouldn't need to touch it ──────────────

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return { meta, body: raw.slice(m[0].length) };
}

function inline(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
}

export function markdownToHtml(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let list = null;
  const closeList = () => { if (list) { out.push(`</${list}>`); list = null; } };
  for (const line of lines) {
    const t = line.trim();
    if (!t) { closeList(); continue; }
    const h = t.match(/^(#{1,4})\s+(.*)$/);
    if (h) { closeList(); out.push(`<h${h[1].length + 1}>${inline(h[2])}</h${h[1].length + 1}>`); continue; }
    const ul = t.match(/^[-*]\s+(.*)$/);
    if (ul) { if (list !== 'ul') { closeList(); out.push('<ul>'); list = 'ul'; } out.push(`<li>${inline(ul[1])}</li>`); continue; }
    const ol = t.match(/^\d+\.\s+(.*)$/);
    if (ol) { if (list !== 'ol') { closeList(); out.push('<ol>'); list = 'ol'; } out.push(`<li>${inline(ol[1])}</li>`); continue; }
    closeList();
    out.push(`<p>${inline(t)}</p>`);
  }
  closeList();
  return out.join('\n');
}

const cache = {};
export async function loadEntry(kind, slug) {
  const key = kind + '/' + slug;
  if (cache[key]) return cache[key];
  const res = await fetch(`content/${kind}/${slug}.md`);
  if (!res.ok) throw new Error('Missing content/' + key + '.md');
  const { meta, body } = parseFrontmatter(await res.text());
  const entry = {
    ...meta,
    slug,
    kind,
    href: `Entry.dc.html?kind=${kind}&slug=${slug}`,
    image: (meta.image || '').replace(/^\//, ''),
    tagList: (meta.tags || '').split(',').map(s => s.trim()).filter(Boolean),
    body
  };
  cache[key] = entry;
  return entry;
}

export async function loadAll(kind) {
  const slugs = kind === 'posts' ? POSTS : PROJECTS;
  const entries = await Promise.all(slugs.map(s => loadEntry(kind, s)));
  return entries.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
