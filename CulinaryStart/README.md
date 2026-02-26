# CulinaryStart

Short technical documentation for the `CulinaryStart` frontend scaffold.

## Overview

CulinaryStart is a lightweight static frontend project organized into three main folders:

- `components/` — reusable UI building blocks (buttons, cards, nav, etc.).
- `pages/` — top-level pages composed from components.
- `public/` — static assets (images, fonts). `public/mypictures/` holds project images.

No build system is assumed by this documentation; the project can be served via any static file server or opened locally in a browser.

## Project structure

- `components/` — Each component should live in its own subfolder or file pair (HTML/CSS/JS). Keep names kebab-case, e.g. `recipe-card`.
- `pages/` — Page files (HTML, or framework-specific entry points) that assemble components into views.
- `public/mypictures/` — Store image assets here. Use descriptive filenames and prefer web-friendly formats (WebP/PNG/JPEG).

## Conventions

- HTML/CSS/JS: Keep component styles scoped using class prefixes (e.g., `.cs-` or `.recipe-`).
- Naming: use kebab-case for files and folders. Use descriptive names for images and assets.
- Accessibility: include alt attributes on images and semantic HTML where possible.

## Adding a component (example)

1. Create a folder under `components/` named `my-component`.
2. Add `my-component.html`, `my-component.css`, and `my-component.js` as needed.
3. Import or include the component in a page from `pages/`.

## Using public assets

- Reference images from `public/mypictures/` using relative paths from pages, e.g. `../public/mypictures/imagename.jpg` (adjust path depending on your server setup).
- Optimize images for web to reduce load time.

## Development / Run

For quick local testing, serve the `CulinaryStart` directory with a static server. Examples:

Windows PowerShell (simple):

```
python -m http.server 8000
```

Or use a modern static server like `live-server` or `http-server` from npm.

## Contributing

- Open an issue describing the change or improvement.
- Create a branch, add tests/examples if applicable, and submit a pull request.

## License

This repository does not include a license file. Add a `LICENSE` file to make licensing explicit.

## Contact

For questions or support, add an issue to the repository or reach the maintainer.
