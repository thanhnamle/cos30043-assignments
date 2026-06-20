import jobs from '../data/jobs.js';

export default {
  template: `
    <div class="job-detail pe-xl-5" v-if="job">
      <small class="surtitle d-block mb-2">{{ job.job_id }}</small>
      <h2 class="section-title mb-4">{{ job.job_title }}</h2>
      
      <p class="fs-5 mb-5"><strong>Company:</strong> {{ job.company }}</p>
      
      <div class="row mb-5 g-4 border-top border-bottom py-4 border-opacity-25" style="border-color: var(--daylight-brown) !important;">
        <div class="col-sm-6">
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Location</span> <span class="fw-medium">{{ job.location }}</span></p>
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Category</span> <span class="badge-tag">{{ job.category }}</span></p>
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Type</span> <span class="fw-medium">{{ job.employment_type }}</span></p>
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Salary</span> <span class="fw-medium">{{ job.salary_range }}</span></p>
          <p class="mb-0"><span class="surtitle d-inline-block w-50">Level</span> <span class="fw-medium">{{ job.job_level }}</span></p>
        </div>
        <div class="col-sm-6">
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Deadline</span> <span class="fw-medium">{{ job.application_deadline }}</span></p>
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Posted</span> <span class="fw-medium">{{ job.posted_date }}</span></p>
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Supervisor</span> <span class="fw-medium">{{ job.supervisor }}</span></p>
          <p class="mb-3"><span class="surtitle d-inline-block w-50">Positions</span> <span class="fw-medium">{{ job.positions_available }}</span></p>
          <p class="mb-0"><span class="surtitle d-inline-block w-50">Start Date</span> <span class="fw-medium">{{ job.start_date }}</span></p>
        </div>
      </div>
      
      <div class="mb-5">
        <h4 class="h5 mb-3">Required Skills</h4>
        <div class="d-flex flex-wrap gap-2">
          <span v-for="skill in job.required_skills" :key="skill" class="badge-tag">{{ skill }}</span>
        </div>
      </div>
      
      <div class="mb-5">
        <h4 class="h5 mb-3">Preferred Qualifications</h4>
        <div class="d-flex flex-wrap gap-2">
          <span v-for="qual in job.preferred_qualifications" :key="qual" class="badge-tag bg-white">{{ qual }}</span>
        </div>
      </div>
      
      <div class="mb-2">
        <h4 class="h5 mb-3">Description</h4>
        <p class="fs-5 lh-lg">{{ job.job_description }}</p>
      </div>
    </div>
    <div v-else class="text-center py-5">
      <h2 class="section-title text-danger">Job not found.</h2>
    </div>
  `,
  computed: {
    job() {
      const jobId = this.$route.params.id;
      return jobs.find(j => j.job_id === jobId);
    }
  }
};
