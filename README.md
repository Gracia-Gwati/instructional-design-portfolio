# Tinotenda Gracia Gwati | Learning Design & Project Delivery

A responsive portfolio showcasing learning design, instructional design and
project delivery experience. The case studies use fictional content and
original demonstration artefacts.

## Run locally

Install [Node.js 22](https://nodejs.org/) and run:

```sh
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Checks

```sh
npm run lint
npm run build
```

The production site is generated in `dist/`.

## Deploy with Netlify

The repository includes a `netlify.toml` build configuration. Connect the
GitHub repository to Netlify and it will build with `npm run build`, publish
`dist/`, and redeploy whenever changes are pushed to the connected branch.
