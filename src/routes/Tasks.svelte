<script>
  import { onMount } from "svelte";
  import TaskList from "../components/TaskList.svelte";
  import TaskForm from "../components/TaskForm.svelte";
  import TaskStats from "../components/TaskStats.svelte";
  import { taskStore } from "../stores/taskStore";

  let tasks = [];

  // Subscribe to the store
  taskStore.subscribe((value) => {
    tasks = value;
  });

  // Lifecycle method
  onMount(() => {
    // Load tasks from localStorage on component mount
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      taskStore.set(JSON.parse(savedTasks));
    }
  });

  // Save tasks to localStorage whenever they change
  $: {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
</script>

<div class="space-y-6">
  <h1 class="text-3xl font-bold text-center text-gray-800">Task Management</h1>
  <div class="bg-white rounded-lg shadow-sm p-6">
    <TaskStats {tasks} />
    <TaskForm />
    <TaskList {tasks} />
  </div>
</div>
