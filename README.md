<!-- coderabbit-ai-generated:v1 -->

<!-- coderabbit-ai-generated-section:v1:8a58edcc01da9ae28ce87a144ee5a304c1ed8ad04d5a0024be7c308c1980ce77 -->

# A Little World Made For You

Chapter II — The Magical World of Love. Standalone static application built with Vite and vanilla JavaScript. No login, database, or backend.

## Run

Requires Node.js 22.12+ (verified with Node 24.21.0) and npm.

```sh
npm ci
npm run dev -- --port 5173
npm test
npm run build
```

Open the address printed by Vite. The first visit opens the Welcome Portal. All pages use hash routes; deploy the `dist` directory to any static hosting, or use Vercel with build command `npm run build` and output directory `dist`. No rewrite rules are required.

## Structure

- `src/main.js`: application shell and route views.
- `src/style.css`: responsive room themes, illustration, animation, reduced-motion support.
- `src/data.js`, `src/story-plots.js`: rooms, games, library stories, interactive story themes.
- `src/messages.json`: 1,000 message entries in 25 categories (200 opening passages combined with five substantial closing passages; these are not 1,000 independently authored letters).
- `src/games.js`: 20 playable game modes, levels, scores, rewards and timer cleanup.
- `src/audio.js`: persistent MP3 playback, local file uploads and browser speech synthesis.
- `src/music.json`: 50 MP3 recommendations with official sources, duration, mood and attribution; recommendations.json additionally lists six verified official YouTube recommendations. Fifteen category filters are available; categories without verified MP3 entries show a clear empty state and support local uploads.
- `src/config.js`: chapter links. Set the first chapter's `url` to your actual Chapter I address. `REPLACE_WITH_CHAPTER_I_URL` documents the placeholder; no relationship to an existing Chapter I is assumed.
- `public/audio`: three MP3 files by Kevin MacLeod, licensed CC BY 4.0; see MUSIC-SOURCES.md.

## Routes

`#/welcome`, `#/home`, `#/garden`, `#/library`, `#/poetry`, `#/happiness`, `#/comfort`, `#/playground`, `#/kingdom`, `#/magical`, `#/storyland`, `#/music`, `#/daily`, `#/secret`, `#/surprise`, `#/castle`, `#/final`, `#/chapters`.

Individual reader routes are `#/read/0` through `#/read/59`. Game routes are `#/game/0` through `#/game/19`. Interactive adventures are `#/storyland/0` through `#/storyland/9`.

## Browser storage and media

Favorites, scores, settings, daily tasks, wishes and reward progress use localStorage. Deleting site data resets progress. MP3 file contents are never uploaded or stored; object URLs work for the current page session, and local files need to be selected again after reload. The mini-player persists across internal navigation. Reloading or closing the tab stops playback. Remote tracks require internet; no copyrighted YouTube audio is downloaded or converted.

Speech uses the browser's installed voices, not a hosted AI service. Voice support differs by device. When no voice is available, controls are disabled and an explanation is shown. The current sentence appears under the reader. Indonesian pronunciation must be tested on a device with an Indonesian voice installed.

## Scope and remaining editorial work

The library contains 50 complete short narratives with distinct premises and resolutions, plus 10 letter readings. The interactive adventures share a branching engine. The message collection contains substantial repeated closing passages, and would benefit from a full editorial pass before being described as 1,000 independently written messages. Long-form fiction, more deeply individualized adventure branches, and game-specific visual assets remain expansion areas. The implementation does not claim an exhaustive human playthrough or Android hardware test.

## Credits

Music: Kevin MacLeod (incompetech.com), CC BY 4.0, with individual credits in MUSIC-SOURCES.md and the Music Room. Icons: Lucide (ISC license, distributed through npm). Fonts: DM Sans and DM Serif Display from Google Fonts. Original website text and CSS illustrations were created for this project with CodeRabbit assistance.


<!-- /coderabbit-ai-generated:v1 -->