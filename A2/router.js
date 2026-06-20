import JobOverview from './components/JobOverview.js';
import JobDetail from './components/JobDetail.js';

const routes = [
  { path: '/', component: JobOverview },
  { path: '/job/:id', component: JobDetail }
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});
