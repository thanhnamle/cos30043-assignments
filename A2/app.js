import JobList from './components/JobList.js';
import ApplicationForm from './components/ApplicationForm.js';
import ToDoList from './components/ToDoList.js';
import router from './router.js';

const app = Vue.createApp({
  components: {
    JobList,
    ApplicationForm,
    ToDoList
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});

app.use(router);
app.mount('#app');
