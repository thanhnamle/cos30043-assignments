export default {
  template: `
    <form class="application-form" method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" @submit="validateForm" novalidate>
      <fieldset class="mb-5">
        <legend class="pb-3 mb-4">Personal Information</legend>
        <div class="row g-4">
          <div class="col-md-6">
            <label class="form-label">First Name *</label>
            <input type="text" name="firstname" class="form-control" v-model="form.firstName" />
            <div v-if="errors.firstName" class="error-text">{{ errors.firstName }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">Last Name *</label>
            <input type="text" name="lastname" class="form-control" v-model="form.lastName" />
            <div v-if="errors.lastName" class="error-text">{{ errors.lastName }}</div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Date of Birth *</label>
            <input type="date" name="dob" class="form-control" v-model="form.dob" />
            <div v-if="errors.dob" class="error-text">{{ errors.dob }}</div>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Email *</label>
            <input type="email" name="email" class="form-control" v-model="form.email" />
            <div v-if="errors.email" class="error-text">{{ errors.email }}</div>
          </div>
        </div>
      </fieldset>

      <fieldset class="mb-5">
        <legend class="pb-3 mb-4">Account Details</legend>
        <div class="row g-4">
          <div class="col-md-12">
            <label class="form-label">Username *</label>
            <input type="text" name="username" class="form-control" v-model="form.username" />
            <div v-if="errors.username" class="error-text">{{ errors.username }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">Password *</label>
            <div class="input-group">
              <input :type="showPassword ? 'text' : 'password'" name="password" class="form-control" style="border-right: none; border-top-right-radius: 0; border-bottom-right-radius: 0;" v-model="form.password" />
              <button class="btn btn-outline-secondary bg-white d-flex align-items-center px-3" type="button" @click="showPassword = !showPassword" style="border-color: rgba(76, 40, 6, 0.2); border-left: none; border-top-right-radius: 12px; border-bottom-right-radius: 12px; color: var(--daylight-brown);">
                <span v-if="showPassword">🙈</span>
                <span v-else>👁️</span>
              </button>
            </div>
            <div v-if="errors.password" class="error-text">{{ errors.password }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">Confirm Password *</label>
            <div class="input-group">
              <input :type="showConfirmPassword ? 'text' : 'password'" name="confirmPassword" class="form-control" style="border-right: none; border-top-right-radius: 0; border-bottom-right-radius: 0;" v-model="form.confirmPassword" />
              <button class="btn btn-outline-secondary bg-white d-flex align-items-center px-3" type="button" @click="showConfirmPassword = !showConfirmPassword" style="border-color: rgba(76, 40, 6, 0.2); border-left: none; border-top-right-radius: 12px; border-bottom-right-radius: 12px; color: var(--daylight-brown);">
                <span v-if="showConfirmPassword">🙈</span>
                <span v-else>👁️</span>
              </button>
            </div>
            <div v-if="errors.confirmPassword" class="error-text">{{ errors.confirmPassword }}</div>
          </div>
        </div>
      </fieldset>

      <fieldset class="mb-5">
        <legend class="pb-3 mb-4">Contact Details</legend>
        <div class="row g-4">
          <div class="col-md-6">
            <label class="form-label">Street Address</label>
            <input type="text" name="street" class="form-control" v-model="form.street" />
            <div v-if="errors.street" class="error-text">{{ errors.street }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">Suburb</label>
            <input type="text" name="suburb" class="form-control" v-model="form.suburb" />
            <div v-if="errors.suburb" class="error-text">{{ errors.suburb }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">Postcode *</label>
            <input type="text" name="postcode" class="form-control" v-model="form.postcode" />
            <div v-if="errors.postcode" class="error-text">{{ errors.postcode }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">Mobile Number *</label>
            <input type="text" name="mobile" class="form-control" v-model="form.mobile" />
            <div v-if="errors.mobile" class="error-text">{{ errors.mobile }}</div>
          </div>
        </div>
      </fieldset>

      <fieldset class="mb-5">
        <legend class="pb-3 mb-4">Preferences</legend>
        <div class="row g-4">
          <div class="col-12">
            <label class="form-label">Preferred Job Category *</label>
            <select name="category" class="form-select" v-model="form.category">
              <option value="">-- Please select --</option>
              <option value="AI">AI</option>
              <option value="Data Science">Data Science</option>
              <option value="Software Development">Software Development</option>
              <option value="DevOps">DevOps</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
            <div v-if="errors.category" class="error-text">{{ errors.category }}</div>
          </div>
        </div>
      </fieldset>

      <div class="d-flex flex-column flex-sm-row align-items-sm-center gap-4 mt-5">
        <button type="submit" class="btn btn-primary py-3 px-5 fs-5">Submit Application</button>
        <button type="button" class="btn btn-link text-decoration-none p-0 text-start" @click="showTerms = !showTerms" style="color: var(--daylight-brown);">
          <span class="surtitle border-bottom border-dark pb-1">Terms and Conditions</span>
        </button>
      </div>
      
      <div v-if="showTerms" class="p-4 bg-white border mt-4 text-muted rounded-4">
        <p class="mb-0">By submitting this form, you agree to our Terms of Service and Privacy Policy. All information provided must be accurate. Insight Hire reserves the right to verify application details.</p>
      </div>

    </form>
  `,
  data() {
    return {
      showTerms: false,
      showPassword: false,
      showConfirmPassword: false,
      form: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        street: '',
        suburb: '',
        postcode: '',
        mobile: '',
        dob: '',
        category: ''
      },
      errors: {}
    };
  },
  methods: {
    validateForm(e) {
      this.errors = {};
      
      if (!this.form.firstName) this.errors.firstName = "First name is required.";
      else if (!/^[A-Za-z]+$/.test(this.form.firstName)) this.errors.firstName = "Letters only.";

      if (!this.form.lastName) this.errors.lastName = "Last name is required.";
      else if (!/^[A-Za-z]+$/.test(this.form.lastName)) this.errors.lastName = "Letters only.";

      if (!this.form.username) this.errors.username = "Username is required.";
      else if (this.form.username.length < 3) this.errors.username = "Minimum 3 characters.";

      if (!this.form.password) this.errors.password = "Password is required.";
      else {
        if (this.form.password.length < 8) this.errors.password = "Minimum 8 characters.";
        else if (!/[$%^&*@#!]/.test(this.form.password)) this.errors.password = "Must include at least one special character ($, %, ^, &, *, @, #, !).";
      }

      if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = "Passwords do not match.";
      }

      if (!this.form.email) this.errors.email = "Email is required.";
      else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.form.email)) this.errors.email = "Invalid email format.";

      if (this.form.street && this.form.street.length > 40) this.errors.street = "Maximum 40 characters.";

      if (this.form.suburb && this.form.suburb.length > 20) this.errors.suburb = "Maximum 20 characters.";

      if (!this.form.postcode) this.errors.postcode = "Postcode is required.";
      else if (!/^\d{4}$/.test(this.form.postcode)) this.errors.postcode = "Exactly 4 digits.";

      if (!this.form.mobile) this.errors.mobile = "Mobile is required.";
      else if (!/^04\d{8}$/.test(this.form.mobile)) this.errors.mobile = "Exactly 10 digits starting with 04.";

      if (!this.form.dob) this.errors.dob = "Date of Birth is required.";
      else {
        const dobDate = new Date(this.form.dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const m = today.getMonth() - dobDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
          age--;
        }
        if (age < 16) {
          this.errors.dob = "Must be at least 16 years old.";
        }
      }

      if (!this.form.category) this.errors.category = "Please select a category.";

      if (Object.keys(this.errors).length > 0) {
        e.preventDefault();
      }
    }
  }
};
