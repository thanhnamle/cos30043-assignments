const { createApp } = Vue;

createApp({
  data() {
    return {
      whyChooseUs: [
        {
          icon: "01",
          title: "Expert Planning",
          description: "Structured event support from discovery through registration.",
        },
        {
          icon: "02",
          title: "Curated Categories",
          description: "Browse focused events across technology, business, marketing, and finance.",
        },
        {
          icon: "03",
          title: "Fast Search",
          description: "Find events quickly by ID, name, duration, or category.",
        },
        {
          icon: "04",
          title: "Clear Details",
          description: "Compare event duration and topics in a simple responsive table.",
        },
        {
          icon: "05",
          title: "Easy Registration",
          description: "Choose a category and see matching events instantly.",
        },
        {
          icon: "06",
          title: "Responsive Access",
          description: "Use the app comfortably on mobile, tablet, and desktop screens.",
        },
      ],
      events: [
        { eventid: "EVT10001", eventname: "Tech Innovations Conference", category: "Technology", durationhour: 8 },
        { eventid: "EVT10002", eventname: "Startup Pitch Day", category: "Business", durationhour: 6 },
        { eventid: "EVT10003", eventname: "AI & Machine Learning Summit", category: "Technology", durationhour: 10 },
        { eventid: "EVT10004", eventname: "Cybersecurity Workshop", category: "Technology", durationhour: 4 },
        { eventid: "EVT10005", eventname: "Digital Marketing Bootcamp", category: "Marketing", durationhour: 6 },
        { eventid: "EVT10006", eventname: "Blockchain and Cryptocurrency", category: "Finance", durationhour: 5 },
        { eventid: "EVT10007", eventname: "Entrepreneurship Forum", category: "Business", durationhour: 7 },
        { eventid: "EVT10008", eventname: "Data Science Hackathon", category: "Technology", durationhour: 12 },
        { eventid: "EVT10009", eventname: "Leadership and Management Summit", category: "Business", durationhour: 9 },
        { eventid: "EVT10010", eventname: "E-commerce Strategies", category: "Marketing", durationhour: 6 },
        { eventid: "EVT10011", eventname: "AI for Business", category: "Business", durationhour: 8 },
        { eventid: "EVT10012", eventname: "IoT & Smart Devices Expo", category: "Technology", durationhour: 7 },
        { eventid: "EVT10013", eventname: "Brand Strategy and Growth", category: "Marketing", durationhour: 5 },
        { eventid: "EVT10014", eventname: "Investment and Wealth Management", category: "Finance", durationhour: 6 },
        { eventid: "EVT10015", eventname: "Financial Technology (FinTech) Summit", category: "Finance", durationhour: 8 },
        { eventid: "EVT10016", eventname: "AI Ethics and Regulations", category: "Technology", durationhour: 4 },
        { eventid: "EVT10017", eventname: "Business Analytics Workshop", category: "Business", durationhour: 6 },
        { eventid: "EVT10018", eventname: "SEO and Content Marketing", category: "Marketing", durationhour: 7 },
        { eventid: "EVT10019", eventname: "Cryptocurrency Investment Strategies", category: "Finance", durationhour: 9 },
        { eventid: "EVT10020", eventname: "Social Media Marketing Trends", category: "Marketing", durationhour: 5 },
      ],
      filters: {
        id: "",
        name: "",
        duration: "",
        category: "All",
      },
      registration: {
        username: "",
        password: "",
        confirmPassword: "",
        category: "Business",
        eventid: "EVT10002",
      },
      submittedRegistration: null,
      formError: "",
    };
  },
  computed: {
    categories() {
      return [...new Set(this.events.map((event) => event.category))];
    },
    tableCategories() {
      return ["All", ...this.categories];
    },
    filteredEvents() {
      const idQuery = this.filters.id.toLowerCase();
      const nameQuery = this.filters.name.toLowerCase();
      const durationQuery = this.filters.duration.toLowerCase();

      return this.events.filter((event) => {
        const matchesId = event.eventid.toLowerCase().includes(idQuery);
        const matchesName = event.eventname.toLowerCase().includes(nameQuery);
        const matchesDuration = String(event.durationhour).toLowerCase().includes(durationQuery);
        const matchesCategory =
          this.filters.category === "All" || event.category === this.filters.category;

        return matchesId && matchesName && matchesDuration && matchesCategory;
      });
    },
    eventsForRegistration() {
      return this.events.filter((event) => event.category === this.registration.category);
    },
    selectedRegistrationEvent() {
      return this.events.find((event) => event.eventid === this.registration.eventid);
    },
    passwordsMatch() {
      return this.registration.password === this.registration.confirmPassword;
    },
    showPasswordMismatch() {
      return this.registration.confirmPassword.length > 0 && !this.passwordsMatch;
    },
  },
  watch: {
    "registration.category"() {
      const firstEvent = this.eventsForRegistration[0];
      this.registration.eventid = firstEvent ? firstEvent.eventid : "";
      this.submittedRegistration = null;
      this.formError = "";
    },
  },
  methods: {
    submitRegistration() {
      this.formError = "";
      this.submittedRegistration = null;

      if (!this.registration.username || !this.registration.password || !this.registration.confirmPassword) {
        this.formError = "Please complete all registration fields.";
        return;
      }

      if (!this.passwordsMatch) {
        this.formError = "Please make sure both passwords match.";
        return;
      }

      if (!this.selectedRegistrationEvent) {
        this.formError = "Please select an event name.";
        return;
      }

      this.submittedRegistration = {
        username: this.registration.username,
        category: this.registration.category,
        eventName: this.selectedRegistrationEvent.eventname,
      };
    },
  },
}).mount("#app");
