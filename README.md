This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Despliegue

La web exporta HTML estático (`output: "export"`) a la carpeta `out/`.

**Prueba en GitHub Pages (ahora)**

1. Sube el proyecto a un repositorio en GitHub.
2. En **Settings → Pages → Build and deployment**, elige **Source: GitHub Actions**.
3. Haz push a la rama `main`. El workflow de `.github/workflows/deploy.yml` compila y publica automáticamente.

La URL queda como `https://TU-USUARIO.github.io/TU-REPO/`. No hace falta tocar nada: la URL base y el `basePath` se calculan solos a partir del nombre del repositorio.

**Dominio definitivo (más adelante)**

Cuando pases al dominio real, cambia en `.github/workflows/deploy.yml` (o en el `env` del build) la variable:

```
NEXT_PUBLIC_SITE_URL=https://www.doctorbolao.com
```

El `basePath` queda vacío automáticamente al ser una URL en la raíz.

> Si en vez de GitHub Pages despliegas en un hosting con dominio propio (cPanel, Apache…), simplemente sube el contenido de `out/` y define `NEXT_PUBLIC_SITE_URL` con tu dominio al compilar. El `canonical`, `sitemap.xml` y `robots.txt` ya apuntan a esa URL.
