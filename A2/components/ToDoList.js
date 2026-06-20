export default {
  template: `
    <div class="todo-list">
      <div class="d-flex mb-5 gap-2">
        <input 
          type="text" 
          class="form-control bg-white flex-grow-1" 
          placeholder="Enter a new task..." 
          v-model.trim="newTask"
          @keyup.enter="addTask"
          style="border-radius: 100px; padding: 0.8rem 1.5rem;"
        >
        <button class="btn btn-primary rounded-pill px-4 m-0 flex-shrink-0" @click="addTask" style="background-color: var(--daylight-orange);">Add Task</button>
      </div>

      <div class="tasks-container">
        <div v-for="(task, index) in tasks" :key="index" class="task-item d-flex justify-content-between align-items-center gap-3">
          <div class="task-content pe-3">
            <p class="mb-2 fw-medium fs-5" style="color: var(--daylight-brown); line-height: 1.3;">
              {{ task.text }} 
            </p>
            <span class="badge-priority d-inline-block" :class="task.priority === 'High' ? 'badge-high' : 'badge-low'">
              {{ task.priority === 'High' ? 'High Priority' : 'Low Priority' }}
            </span>
          </div>
          <div class="task-actions d-flex flex-column flex-sm-row align-items-center gap-2 shrink-0">
            <button 
              class="btn btn-sm rounded-pill fw-medium" 
              :style="task.priority === 'High' ? 'background-color: rgba(246, 111, 0, 0.1); color: var(--daylight-orange); border: 1px solid rgba(246, 111, 0, 0.2);' : 'background-color: rgba(255, 255, 255, 0.5); color: var(--daylight-brown); border: 1px solid rgba(76, 40, 6, 0.15);'"
              @click="togglePriority(index)"
            >
              Toggle
            </button>
            <button 
              class="btn btn-sm rounded-circle d-flex align-items-center justify-content-center p-0" 
              @click="removeTask(index)" 
              style="width: 32px; height: 32px; background-color: rgba(217, 48, 37, 0.1); color: #D93025; border: 1px solid rgba(217, 48, 37, 0.2);"
              title="Remove task"
            >
              <span aria-hidden="true" class="fs-5 fw-light">&times;</span>
            </button>
          </div>
        </div>
        <div v-if="tasks.length === 0" class="text-center text-muted py-5">
          <p class="fs-5">No tasks yet. Start planning!</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      newTask: '',
      tasks: [
        { text: 'Update resume and LinkedIn profile', priority: 'High' },
        { text: 'Review AI Research Assistant job description', priority: 'Low' },
        { text: 'Submit job application form for Insight Hire', priority: 'High' }
      ]
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.unshift({
          text: this.newTask,
          priority: 'Low'
        });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    togglePriority(index) {
      const task = this.tasks[index];
      task.priority = task.priority === 'High' ? 'Low' : 'High';
    }
  }
};
