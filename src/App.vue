<template>
  <div class="container">
    <Header
      title="Task Management"
      :showAddTask="showAddTask"
      @toggle-add-task="toggleAddTask"
    />
    <div :class="[showAddTask ? '' : 'hidden']">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      :tasks="tasks"
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
    />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AddTask from "./components/AddTask.vue";
import Tasks from "./components/Tasks.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    AddTask,
    Tasks,
  },
  data() {
    return {
      showAddTask: false,
      tasks: [],
    };
  },
  methods: {
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      console.log("data", data);
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm("Are you sure to delete this task?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } else {
          alert("ERROR IN DELETING");
        }
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = {...taskToToggle , reminder : !taskToToggle.reminder}
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === data.id ? { ...task, reminder: !task.reminder } : task
      );
    },
    toggleAddTask() {
      console.log("toggle-add-task");
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },

  async created() {
    this.tasks = await this.fetchTasks();
  },
  emits: ["toggle-reminder", "delete-task"],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  border: 1px solid;
  /* width: 500px; */
}

.hidden {
  display: none;
}
</style>
