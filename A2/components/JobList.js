import jobs from '../data/jobs.js';

export default {
  template: `
    <div class="job-list-container h-100 p-3 d-flex flex-column gap-2">
      <router-link to="/" class="job-item" exact-active-class="active">
        <div class="d-flex align-items-center justify-content-between">
          <span class="font-serif fs-5 fw-medium">Overview</span>
          <span class="job-item-arrow">&rarr;</span>
        </div>
      </router-link>
      
      <div class="mt-3 mb-2 px-2">
        <small class="surtitle text-muted">Available Positions</small>
      </div>

      <router-link 
        v-for="job in jobs" 
        :key="job.job_id"
        :to="'/job/' + job.job_id"
        class="job-item"
        active-class="active"
      >
        <div class="d-flex flex-column">
          <span class="font-mono text-uppercase small text-muted mb-1" style="font-size: 0.75rem;">{{ job.job_id }}</span>
          <span class="fw-medium font-sans" style="line-height: 1.2;">{{ job.job_title }}</span>
        </div>
        <span class="job-item-arrow">&rarr;</span>
      </router-link>
    </div>
  `,
  data() {
    return {
      jobs: jobs
    }
  }
};
