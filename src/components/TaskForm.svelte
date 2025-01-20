<script>
  import { taskStore } from "../stores/taskStore";
  import { slide } from "svelte/transition";

  let title = "";
  let priority = "medium";
  let showForm = false;

  function handleSubmit() {
    if (title.trim().length === 0) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      completed: false,
      createdAt: new Date(),
    };

    taskStore.update((tasks) => [newTask, ...tasks]);
    title = "";
    priority = "medium";
  }
</script>

<div class="mb-8">
  <button
    on:click={() => (showForm = !showForm)}
    class="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  >
    {showForm ? "Close Form" : "+ Add New Task"}
  </button>

  {#if showForm}
    <form
      on:submit|preventDefault={handleSubmit}
      class="mt-4 bg-white shadow-sm rounded-lg p-6"
      transition:slide
    >
      <div class="space-y-4">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            bind:value={title}
            placeholder="Enter your task..."
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label for="priority" class="block text-sm font-medium text-gray-700">
            Priority Level
          </label>
          <select
            id="priority"
            bind:value={priority}
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </div>
    </form>
  {/if}
</div>
