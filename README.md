# Ogilvy Frontend

A minimal React + Vite + TypeScript setup for the Future Earth project—just clone, install, and go!

## 🚀 Prerequisites

- **Node.js** v14 or higher (we recommend v16+)
- **npm** (comes with Node) or **Yarn**

## ⚙️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/kasiliwachiye/Ogilvy.git
   cd Ogilvy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

## 🔥 Development

Start the Vite dev server with HMR:

```bash
npm run dev
# or
yarn dev
```

Then open your browser at <http://localhost:5173>.

## 📦 Production

**Build** the app:

```bash
npm run build
# or
yarn build
```

**Preview** the production build:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
├── public/           # Static assets (favicons, robots.txt, etc.)
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable React components
│   ├── pages/        # Page-level components (if using file-based routing)
│   ├── hooks/        # Hooks
│   ├── data/         # Dummy data
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point, mounts <App />
│   └── vite-env.d.ts # Vite TypeScript helpers
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔧 Environment Variables

Create a `.env` in the root and prefix keys with `VITE_`:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXX-X
```

Access in code via `import.meta.env.VITE_API_BASE_URL`.

## 🤝 Contributing

1. Fork it
2. Create a branch: `git checkout -b feature/YourFeature`
3. Commit your changes
4. Push and open a Pull Request

## 📝 License

MIT — see [LICENSE](LICENSE) for details.

