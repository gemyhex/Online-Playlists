import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import CreatePlaylist from "../views/playlists/Create.vue";
import PlaylistPreview from "../views/playlists/PlaylistPreview.vue";
import NotFound from "../views/NotFound.vue";
import { pjAuth } from "../firebase/config";

const reqAuth = (to, from, next) => {
  let user = pjAuth.currentUser;
  console.log(user);
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const reqNoAuth = (to, from, next) => {
  let user = pjAuth.currentUser;
  console.log(user);
  if (user) {
    next({ name: "Home", path: "/playlists/create" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: reqAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: reqNoAuth,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: reqNoAuth,
  },
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
    beforeEnter: reqAuth,
  },
  {
    path: "/playlists/:id",
    name: "PlaylistPreview",
    component: PlaylistPreview,
    beforeEnter: reqAuth,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
