
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/VueExcelEditorPage.vue') },
      { path: 'vueexcel', component: () => import('pages/VueExcelEditorPage.vue') },
      { path: '/vueedtgrid', component: () => import('pages/VueEdtGridPage.vue') },
      { path: '/revogrid', component: () => import('pages/RevoGridPage.vue') },
      { path: '/revogridvue', component: () => import('pages/RevoGridVuePage.vue') }
    ]
  },
  // { path: '/1', component: () => import('pages/IndexPage.vue') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
