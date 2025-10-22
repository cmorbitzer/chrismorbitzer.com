# chrismorbitzer.com

Personal website built with 11ty (Eleventy).

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

The site will be generated in the `_site` directory.

## Deployment

This site is configured to deploy on Netlify.

### Netlify Setup

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will automatically detect the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
6. Click "Deploy site"

Netlify will automatically deploy your site on every push to your repository's main branch.

### Manual Deployment

You can also drag and drop the contents of the `_site` directory directly to Netlify's web interface, or upload to any static web host.
