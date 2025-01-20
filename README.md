# TaskMaster

A modern task management application built with Svelte and TailwindCSS.

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:TusharJoy/task-manager-svelte.git
cd task-manager-svelte

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [localhost:8888](http://localhost:8888) to see your app.

## 🧰 Tech Stack

- [Svelte](https://svelte.dev) - Frontend framework
- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- [Svelte Routing](https://github.com/EmilTholin/svelte-routing) - Client-side routing

## ✨ Features

- Create, complete, and delete tasks
- Set priority levels (high, medium, low)
- Task completion statistics
- Persistent storage using localStorage
- Responsive design with mobile menu
- Client-side routing with multiple views
- Animated transitions

## 📦 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   │   ├── TaskForm.svelte
│   │   ├── TaskList.svelte
│   │   └── TaskStats.svelte
│   ├── routes/      # Page components
│   │   ├── Tasks.svelte
│   │   ├── About.svelte
│   │   └── Settings.svelte
│   ├── stores/      # State management
│   │   └── taskStore.js
│   └── App.svelte   # Root component
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

The development server is configured to run on port 8888 and allows access from other devices on the network. You can modify these settings in `vite.config.js`.

## 📱 Responsive Design

The application includes:

- Desktop navigation with underline indicators
- Mobile-friendly hamburger menu
- Responsive grid layout for statistics
- Adaptive padding and spacing

## 🔒 Data Persistence

Tasks are automatically saved to localStorage, ensuring your data persists between sessions. You can clear all data from the Settings page.

## 📝 License

[MIT](LICENSE)
