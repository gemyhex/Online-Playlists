<template>
  <div class="container">
    <h3>Sign Up</h3>
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
      <input
        type="text"
        name="userField"
        placeholder="Type Username"
        v-model="username"
      />
      <button v-if="!isPending">Sign Up</button>
      <button v-if="isPending" disabled>Registering...</button>
    </form>
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../../composables/useSignup";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const username = ref("");
    const { error, signup, isPending } = useSignup();
    const router = useRouter();

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, username.value);
      if (!error.value) {
        console.log("user signed up");
        router.push({ name: "Login" });
      }
      return res;
    };

    return { email, password, username, error, handleSubmit, isPending };
  },
};
</script>

<style></style>
