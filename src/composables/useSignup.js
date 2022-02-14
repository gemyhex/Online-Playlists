import { ref } from "@vue/reactivity";
import { pjAuth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password, displayName) => {
  error.value = null;
  isPending.value = true;
  try {
    const res = await pjAuth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw Error("Couldn't Sign Up");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSingup = () => {
  return { signup, error, isPending };
};

export default useSingup;
