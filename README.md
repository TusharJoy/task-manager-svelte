# This repo is no longer maintained. Consider using `npm init vite` and selecting the `svelte` option or — if you want a full-fledged app framework — use [SvelteKit](https://kit.svelte.dev), the official application framework for Svelte.

---

# Svelte App

A modern web application built with [Svelte](https://svelte.dev).

## 🚀 Quick Start

```bash
# Clone the repository
git clone [your-repo-url]
cd [your-project-name]

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [localhost:8080](http://localhost:8080) to see your app.

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🧰 Tech Stack

- [Svelte](https://svelte.dev) - Frontend framework
- [Rollup](https://rollupjs.org) - Module bundler
- [Sirv](https://github.com/lukeed/sirv) - Static file server

## 📦 Project Structure

```
├── public/          # Static assets
├── src/             # Source files
│   ├── components/  # Svelte components
│   └── App.svelte  # Root component
└── scripts/        # Build/setup scripts
```

## 🔧 Configuration

### Development Mode

The development server will only respond to requests from localhost by default. To allow connections from other computers, edit the `sirv` commands in package.json:

```js
"dev": "sirv public --host 0.0.0.0 --dev"
```

### Single-page App Mode

For SPAs with multiple routes, update the start command in package.json:

```js
"start": "sirv public --single"
```

## 🔍 TypeScript Support

Initialize TypeScript support:

```bash
node scripts/setupTypeScript.js
```

## 📤 Deployment

### Vercel

```bash
npm install -g vercel
cd public
vercel deploy --name my-project
```

### Surge

```bash
npm install -g surge
npm run build
surge public my-project.surge.sh
```

## 📝 License

[MIT](LICENSE)
