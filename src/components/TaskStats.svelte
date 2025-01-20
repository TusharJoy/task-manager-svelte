<script>
  export let tasks;

  $: totalTasks = tasks.length;
  $: completedTasks = tasks.filter((task) => task.completed).length;
  $: completionRate =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
</script>

<div class="grid grid-cols-3 gap-4 mb-8">
  <div class="bg-white p-4 rounded-lg shadow-sm text-center">
    <div class="text-2xl font-bold text-gray-800">{totalTasks}</div>
    <div class="text-sm text-gray-500">Total Tasks</div>
  </div>

  <div class="bg-white p-4 rounded-lg shadow-sm text-center">
    <div class="text-2xl font-bold text-gray-800">{completedTasks}</div>
    <div class="text-sm text-gray-500">Completed</div>
  </div>

  <div class="bg-white p-4 rounded-lg shadow-sm text-center">
    <div class="text-2xl font-bold text-gray-800">{completionRate}%</div>
    <div class="text-sm text-gray-500">Completion Rate</div>
  </div>
</div>
