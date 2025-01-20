<script>
  import { fade } from "svelte/transition";
</script>

<div class="bg-white rounded-lg shadow-sm p-8" in:fade>
  <h1 class="text-3xl font-bold text-gray-800 mb-4">About Task Manager</h1>
  <p class="text-gray-600 mb-6">
    This is a simple task management application built with Svelte to
    demonstrate various features and capabilities.
  </p>

  <h2 class="text-xl font-semibold text-gray-800 mb-4">Features</h2>
  <ul class="space-y-2">
    {#each ["Create, complete, and delete tasks", "Set priority levels for tasks", "Track task completion statistics", "Persistent storage using localStorage", "Responsive design", "Client-side routing"] as feature}
      <li class="flex items-center text-gray-600">
        <span class="text-blue-500 mr-2">→</span>
        {feature}
      </li>
    {/each}
  </ul>
</div>
