<script>
  import { fade } from "svelte/transition";
  import { taskStore } from "../stores/taskStore";

  function clearAllTasks() {
    if (
      confirm(
        "Are you sure you want to delete all tasks? This cannot be undone."
      )
    ) {
      taskStore.set([]);
      localStorage.removeItem("tasks");
    }
  }
</script>

<div class="bg-white rounded-lg shadow-sm p-8" in:fade>
  <h1 class="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

  <div class="border border-red-500 rounded-lg p-6">
    <h2 class="text-xl font-semibold text-red-500 mb-4">Danger Zone</h2>
    <p class="text-gray-600 mb-4">
      These actions cannot be undone. Please proceed with caution.
    </p>
    <button
      class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      on:click={clearAllTasks}
    >
      Clear All Tasks
    </button>
  </div>
</div>
