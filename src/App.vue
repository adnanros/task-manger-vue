<template>
  <div class="container">
      <Header title='Task Management'
      :showAddTask = 'showAddTask'
      @toggle-add-task = "toggleAddTask"
      />
      <div :class="[showAddTask ? '' : 'hidden']">
        <AddTask @add-task="addTask" />
      </div>
      <Tasks :tasks = "tasks" 
      @toggle-reminder="toggleReminder"
      @delete-task = "deleteTask" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AddTask from './components/AddTask.vue'
import Tasks from './components/Tasks.vue';

export default {
  name: 'App',
  components: {
    Header,
    AddTask,
    Tasks,
  },
  data(){
    return {
      showAddTask: false,
      tasks: [
        {
          id: '1',
          title: 'Task1',
          date: 'Septemper 21st',
          reminder: false,
        },
        {
          id: '2',
          title: 'Task2',
          date: 'October 21st',
          reminder: false,
        },
      ]
      
    }
  },
  methods: {
    addTask(task){
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id){
      console.log('App',id);
      this.tasks = this.tasks.filter((task)=> task.id !== id);
      console.log(this.tasks);
    },
    toggleReminder(id){
      console.log(id);
      this.tasks = this.tasks.map((task)=>
        task.id === id ? {...task , reminder: !task.reminder} : task
     );
    },
    toggleAddTask(){
      console.log('toggle-add-task')
        this.showAddTask = !this.showAddTask;
    }
  },
  emits: ['toggle-reminder', 'delete-task' ]
}
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
