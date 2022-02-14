<template>
  <div class="container">
    <h3>Login</h3>
    <form @submit.prevent="handleSubmit">
      <input
        type="email"
        name="emailField"
        placeholder="Type Email"
        v-model="email"
      />
      <input
        type="password"
        name="passField"
        placeholder="Type Password"
        v-model="password"
      />
      <div class="error">
        {{ error }}
      </div>
      <button v-if="!isPending">Login</button>
      <button v-if="isPending" disabled>Logining...</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../../composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, login, isPending } = useLogin();
    const router = useRouter();

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
        router.push({ name: "Home" });
      }
      return res;
    };

    return { email, password, error, handleSubmit, isPending };
  },
};
</script>

<style></style>
