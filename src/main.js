import "./app.css";
import App from "./App.svelte";
import { Router } from "svelte-routing";

const app = new App({
  target: document.body,
  props: {
    url: window.location.pathname,
  },
});

// Wrap the app in Router
new Router({
  target: document.body,
});

export default app;
