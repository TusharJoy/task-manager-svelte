<script>
  import { Router, Link, Route } from "svelte-routing";
  import { fade } from "svelte/transition";
  import Tasks from "./routes/Tasks.svelte";
  import About from "./routes/About.svelte";
  import Settings from "./routes/Settings.svelte";

  export let url = "";
  let isMenuOpen = false;
  let currentPath = window.location.pathname;

  // Update path when URL changes
  $: {
    if (typeof window !== "undefined") {
      currentPath = window.location.pathname;
    }
  }
</script>

<Router {url}>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex justify-between w-full">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-2xl font-bold text-blue-600">TaskMaster</span>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden sm:flex sm:space-x-8">
              <span
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                class:border-blue-500={currentPath === "/"}
                class:text-gray-900={currentPath === "/"}
                class:border-transparent={currentPath !== "/"}
                class:text-gray-500={currentPath !== "/"}
                class:hover:border-gray-300={currentPath !== "/"}
                class:hover:text-gray-700={currentPath !== "/"}
              >
                <Link to="/">Tasks</Link>
              </span>

              <span
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                class:border-blue-500={currentPath === "/about"}
                class:text-gray-900={currentPath === "/about"}
                class:border-transparent={currentPath !== "/about"}
                class:text-gray-500={currentPath !== "/about"}
                class:hover:border-gray-300={currentPath !== "/about"}
                class:hover:text-gray-700={currentPath !== "/about"}
              >
                <Link to="/about">About</Link>
              </span>

              <span
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                class:border-blue-500={currentPath === "/settings"}
                class:text-gray-900={currentPath === "/settings"}
                class:border-transparent={currentPath !== "/settings"}
                class:text-gray-500={currentPath !== "/settings"}
                class:hover:border-gray-300={currentPath !== "/settings"}
                class:hover:text-gray-700={currentPath !== "/settings"}
              >
                <Link to="/settings">Settings</Link>
              </span>
            </div>

            <!-- Mobile menu button -->
            <div class="sm:hidden flex items-center">
              <button
                on:click={() => (isMenuOpen = !isMenuOpen)}
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed -->
                {#if !isMenuOpen}
                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                {:else}
                  <!-- Icon when menu is open -->
                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                {/if}
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu -->
        {#if isMenuOpen}
          <div class="sm:hidden" transition:fade>
            <div class="pt-2 pb-3 space-y-1">
              <span
                class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                class:border-blue-500={currentPath === "/"}
                class:text-blue-700={currentPath === "/"}
                class:bg-blue-50={currentPath === "/"}
                class:border-transparent={currentPath !== "/"}
                class:text-gray-500={currentPath !== "/"}
                class:hover:bg-gray-50={currentPath !== "/"}
                class:hover:border-gray-300={currentPath !== "/"}
                class:hover:text-gray-700={currentPath !== "/"}
              >
                <Link to="/" on:click={() => (isMenuOpen = false)}>Tasks</Link>
              </span>

              <span
                class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                class:border-blue-500={currentPath === "/about"}
                class:text-blue-700={currentPath === "/about"}
                class:bg-blue-50={currentPath === "/about"}
                class:border-transparent={currentPath !== "/about"}
                class:text-gray-500={currentPath !== "/about"}
                class:hover:bg-gray-50={currentPath !== "/about"}
                class:hover:border-gray-300={currentPath !== "/about"}
                class:hover:text-gray-700={currentPath !== "/about"}
              >
                <Link to="/about" on:click={() => (isMenuOpen = false)}
                  >About</Link
                >
              </span>

              <span
                class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                class:border-blue-500={currentPath === "/settings"}
                class:text-blue-700={currentPath === "/settings"}
                class:bg-blue-50={currentPath === "/settings"}
                class:border-transparent={currentPath !== "/settings"}
                class:text-gray-500={currentPath !== "/settings"}
                class:hover:bg-gray-50={currentPath !== "/settings"}
                class:hover:border-gray-300={currentPath !== "/settings"}
                class:hover:text-gray-700={currentPath !== "/settings"}
              >
                <Link to="/settings" on:click={() => (isMenuOpen = false)}
                  >Settings</Link
                >
              </span>
            </div>
          </div>
        {/if}
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" in:fade>
      <div class="px-4 py-6 sm:px-0">
        <Route path="/" component={Tasks} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
      </div>
    </main>

    <footer class="bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 text-sm">
          TaskMaster © {new Date().getFullYear()} - Built with Svelte
        </p>
      </div>
    </footer>
  </div>
</Router>

<style>
  /* All styles can be removed since they're redundant with Tailwind classes */
</style>
