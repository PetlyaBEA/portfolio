# Portfolio

A dark, responsive developer portfolio built with TypeScript + Vite and prepared for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Personalize it

Open `src/main.ts` and edit the `profile` object near the top:

```ts
const profile = {
  name: 'CRIS',
  role: 'Developer · Cybersecurity',
  intro: '...',
  location: 'Kazakhstan',
  github: 'https://github.com/YOUR_USERNAME',
  telegram: 'https://t.me/YOUR_USERNAME',
  email: 'you@example.com',
}
```

You can also edit the `projects` and `skills` arrays in the same file.

## Production build

```bash
npm run build
```

The static site is generated into `dist/`.

## GitHub Pages

This repo includes `.github/workflows/deploy.yml`.

1. Push the project to GitHub on the `main` branch.
2. On GitHub open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push any new commit if the workflow did not start automatically.
5. Open the URL shown by the `Deploy to GitHub Pages` workflow.

No VPS or backend is required.
