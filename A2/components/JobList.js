import jobs from '../data/jobs.js';

export default {
  template: `
    <div class="job-list-container h-100">
      <router-link to="/" class="job-link" exact-active-class="router-link-active">
        <span class="font-serif fs-5">Overview</span>
        <span class="job-link-arrow">&rarr;</span>
      </router-link>
      <div class="list-group list-group-flush">
        <router-link 
          v-for="job in jobs" 
          :key="job.job_id"
          :to="'/job/' + job.job_id"
          class="job-link"
        >
          <span class="font-mono text-uppercase small">{{ job.job_id }}</span>
          <span class="job-link-arrow">&rarr;</span>
        </router-link>
      </div>
    </div>
  `,
  data() {
    return {
      jobs: jobs
    }
  }
};
