import { ref } from "@vue/reactivity";
import { pjAuth } from "../firebase/config";

const error = ref(null);

const user = ref(pjAuth.currentUser);

pjAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user, error };
};

export default getUser;
