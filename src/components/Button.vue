<template>
  <button class="btn" :style="{ background: color }" @click="toggleAddTask">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
    title: String,
  },
  methods: {
    toggleAddTask() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>

<style>
.add {
  background-color: aqua;
}

.del {
  background-color: tomato;
}
</style>