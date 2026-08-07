# Jiaxin Zhang — GitHub Pages portfolio

This package is a fully static version of the portfolio. It generates a homepage, an archive, and one HTML page for every project. It does not require a server, database, Next.js runtime, or OpenAI Sites.

## Publish on GitHub Pages

1. Create a new empty GitHub repository.
2. Extract this ZIP and upload or push every file in this folder to the repository's `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.

The workflow automatically builds and deploys the `site` folder after every push to `main`.

## Replace project images

Open `src/projects.ts`. Every project has an `images` array containing three placeholder URLs:

- first image: homepage and project hero
- second image: campaign image 01
- third image: campaign image 02

Replace those URLs with your own hosted image URLs, then push the change. GitHub Actions will regenerate the site automatically.

To store images in the repository instead, place them in `src/media/`, use paths such as `media/lego-cover.jpg`, and run `npm run build` before previewing locally.

## Update project copy

Project titles, metadata, story sections, deliverables, source links, and image slots all live in `src/projects.ts`.

## Build locally

```bash
npm install
npm run build
```

The generated website appears in `site/`. Open `site/index.html` to inspect it, or serve the folder with any static web server.
