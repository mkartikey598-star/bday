# Birthday surprise 🎁
**Run on your Mac** (needs Node 20+, from nodejs.org): `cd birthday-site && npm install && npm run dev` → open http://localhost:3000

**Photos:** copy them into `public/images/`. Hero photo is `her-1.jpg`; the story uses `her-2.jpg` … `her-5.jpg`. Any name works — just match it in `src/data/birthday.ts`. Add a photo = add one `{ src, alt, chapter, caption, tilt }` line to `photos`. Missing files show a placeholder.

**Messages:** every name, letter, card, caption and final message is in `src/data/birthday.ts`. Replace `[HER NAME]` / `[YOUR NAME]` (or set `herName` / `yourName`).

**Deploy:** push to GitHub → vercel.com → Import project → Deploy. Vercel gives you a public link. (Tip: the photos become public to anyone with the link.)

**Sound & music:** everything is silent until she taps "Sound off" (top right). Chimes are generated in the browser — no files needed. For background music, put an mp3 you have rights to in `public/audio/` and set `sound.musicFile` in `src/data/birthday.ts`.
**Hidden surprise:** a faint ⭐ near the top right of the final night-sky section opens a secret message (`easterEgg` in the config).
