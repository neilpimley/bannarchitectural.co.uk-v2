# bannarchitectural

## Local development

```bash
npm install
npm run dev
```

## Netlify deployment

This site is set up for Netlify with:

- build command: `npm run build`
- publish directory: `_site`
- Decap CMS available at `/admin/`

After connecting the repository to Netlify, enable:

1. Netlify Identity
2. Git Gateway

Then set the site URL in Netlify and use the `/admin/` panel for content editing.
