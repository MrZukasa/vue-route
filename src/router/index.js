import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetails from '../views/Jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',    
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',                    /*cosi è come si aggiunge una Route all'interno di un altra*/ 
    name: 'JobsDetails',                  /*si usa l'id per richiamare la pagina sottogruppo reltiva all'ID */
    component: JobsDetails,
    props: true                           /* cosi facendo possiamo accettare ogni route parameter come props */ 
  },
  //redirect
  {
    path: '/all-jobs',                    /* se scrivi questo */
    redirect: '/jobs'                     /* vieni reindirizzato */
  },
  //404
  {
    path: '/:catchall(.*)',               /* questa è una regex che intercetta tutto quello che non viene trovato come percorso */
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
