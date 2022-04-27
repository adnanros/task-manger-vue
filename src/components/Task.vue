<template>
  <div class="card" :style="{background: task.reminder ? 'green' : 'yellow'}"
  @dblclick="this.$emit('toggle-reminder', task.id)">
    <h3>{{ task.title }} <i @click="deleteTask(task.id)" class="fas fa-clock"></i></h3>
    
    <p>{{ task.date }}</p>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    deleteTask(id) { this.$emit('delete-task', id)}
  },
  
};
</script>


<style>
</style>