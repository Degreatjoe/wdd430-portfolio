# Great Joseph — Developer Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It introduces my work and showcases selected projects.

**Live site:** [wdd430-portfolio-zeta-brown.vercel.app](https://wdd430-portfolio-zeta-brown.vercel.app/)

## Features

- Home page with project cards and technology summaries
- About page
- Links to LinkedIn and GitHub
- Responsive layout

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Run Locally

Install [Node.js](https://nodejs.org/) and npm, then clone the repository and install dependencies:

```bash
git clone https://github.com/Degreatjoe/wdd430-portfolio.git
cd wdd430-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
app/
  about/       About page
  page.tsx     Home page and project data
components/    Shared header, footer, and project/social cards
public/        Static assets
```

## Deployment

The site is deployed on [Vercel](https://vercel.com/). See the [live portfolio](https://wdd430-portfolio-zeta-brown.vercel.app/).
