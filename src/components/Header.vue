<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <Button :color="showAddTask ? 'red' : 'green'" :title="showAddTask ? 'Close' : 'Add A Task'" @toggle-add-task="toggleAddTask" />
    <hr />
  </div>
  <hr />
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  components: {
    Button,
  },
  data() {
    return {};
  },
  props: {
    title: String,
    showAddTask: Boolean,
  },
  methods: {
    toggleAddTask() {
            console.log('toggle-add-task');

      this.$emit("toggle-add-task");
    },
  },
  emits: ['toggle-add-task'],
};
</script>

<style>
.header {
  padding: 5px;
  margin-bottom: 3px;
}
/* h1 {
  float: left;
}
button {
  float: right; */
/* } */
</style>