<template>
  <div :key="task.id" v-for="task in tasks" class="card">
    <Task :task="task" 
    @toggle-reminder ="this.$emit('toggle-reminder', task.id)"
    @delete-task="deleteTask" />
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  components: {
    Task,
  },
  data() {
    return {};
  },
  props: {
    tasks: Array,
  },
  methods: {
    deleteTask(id){
      this.$emit('delete-task', id)
    }
  },
  
  emits: ['toggle-reminder', 'delete-task']
};
</script>

<style>
</style>