<template>
  <div class="content">
    <div class="logo">
      <router-link to="/">O-Muso</router-link>
    </div>
    <div class="list">
      <div v-if="user">
        <a>{{ user.displayName }}</a>
        <router-link :to="{ name: 'CreatePlaylist' }"
          >Create Playlist</router-link
        >
        <a @click="handleLogout">Logout</a>
      </div>
      <div v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">SignUp</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user } = getUser();
    const { error, logout } = useLogout();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
        router.push("/login");
      }
    };

    return { user, handleLogout };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  .logo {
    a {
      font-size: 2rem;
    }
  }
  .list {
    a {
      font-size: 1.1rem;
      padding: 3px 5px;
      margin-right: 5px;
      cursor: pointer;
    }
  }
}
</style>
