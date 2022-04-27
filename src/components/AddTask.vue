<template>
  <div class="card mb-2 p-4">
    <form @submit="submitAddTask">
      <div class="mb-3">
        <label for="title" class="form-label">Task Title</label>
        <input class="form-control" v-model="task.title" type="text" name="title" />
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input class="form-control" v-model="task.date" type="text" name="date" />
      </div>
      <div class="mb-3">
        <label for="reminder" class="form-label">Reminder</label>
        <input class="ml-3" v-model="task.reminder" type="checkbox" name="reminder" />
      </div>

      <button type="submit">Save The Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data(){
    return {
      task: {
        id: Math.floor(Math.random()* 100000),
        title: '',
        date: '',
        reminder: false,
      }
      
    }
  },
  methods: {
    submitAddTask(e){
      e.preventDefault();
      this.$emit('add-task', this.task)
    }
  },
};
</script>

<style>
</style>