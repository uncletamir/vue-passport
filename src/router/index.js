//import vue router
import { createRouter, createWebHistory } from 'vue-router';

//define a routes
const routes = [
  {
    path: '/login',
    name: 'LoginUser',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/auth/LoginUser.vue'),
  },
  {
    path: '/register',
    name: 'RegisterUser',
    component: () =>
      import(
        /* webpackChunkName: "register" */ '@/views/auth/RegisterUser.vue'
      ),
  },
  {
    path: '/dashboard',
    name: 'DashboardApp',
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '@/views/dashboard/IndexApp.vue'
      ),
  },
  {
    path: '/posts',
    name: 'IndexPost',
    component: () =>
      import(/* webpackChunkName: "post.index" */ '@/views/post/IndexPost.vue'),
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: () =>
      import(
        /* webpackChunkName: "post.create" */ '@/views/post/CreatePost.vue'
      ),
  },
  {
    path: '/edit-post/:id',
    name: 'EditPost',
    component: () =>
      import(/* webpackChunkName: "post.edit" */ '@/views/post/EditPost.vue'),
  },
  {
    path: '/kategori',
    name: 'IndexKategori',
    component: () =>
      import(
        /* webpackChunkName: "kategori.index" */ '@/views/kategori/IndexKategori.vue'
      ),
  },
  {
    path: '/create-kategori',
    name: 'CreateKategori',
    component: () =>
      import(
        /* webpackChunkName: "post.kategori" */ '@/views/kategori/CreateKategori.vue'
      ),
  },
  {
    path: '/edit-kategori/:id',
    name: 'EditKategori',
    component: () =>
      import(
        /* webpackChunkName: "post.kategori" */ '@/views/kategori/EditKategori.vue'
      ),
  },
  {
    path: '/barang',
    name: 'IndexBarang',
    component: () =>
      import(
        /* webpackChunkName: "barang.index" */ '@/views/barang/IndexBarang.vue'
      ),
  },
  {
    path: '/create-barang',
    name: 'CreateBarang',
    component: () =>
      import(
        /* webpackChunkName: "post.kategori" */ '@/views/barang/CreateBarang.vue'
      ),
  },
  {
    path: '/edit-barang/:id',
    name: 'EditBarang',
    component: () =>
      import(
        /* webpackChunkName: "post.kategori" */ '@/views/barang/EditBarang.vue'
      ),
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
