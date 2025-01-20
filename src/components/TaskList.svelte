<script>
  import { taskStore } from "../stores/taskStore";
  import { slide } from "svelte/transition";

  export let tasks;

  function deleteTask(id) {
    taskStore.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    taskStore.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const priorityColors = {
    high: "border-red-500",
    medium: "border-yellow-500",
    low: "border-green-500",
  };
</script>

<ul class="space-y-2">
  {#each tasks as task (task.id)}
    <li
      transition:slide
      class={`flex items-center p-4 bg-white border-l-4 rounded-md shadow-sm ${priorityColors[task.priority]} ${
        task.completed ? "opacity-75" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        on:change={() => toggleComplete(task.id)}
        class="h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
      />
      <span
        class={`ml-3 flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-700"}`}
      >
        {task.title}
      </span>
      <button
        on:click={() => deleteTask(task.id)}
        class="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Delete
      </button>
    </li>
  {:else}
    <p class="text-center text-gray-500 py-4">
      No tasks yet! Add some tasks to get started.
    </p>
  {/each}
</ul>
