import { ref } from "vue";
import { pjFirestore } from "../firebase/config";

const useCollections = (collection) => {
  const error = ref(null);
  const isPending = ref(false);

  const addDoc = async (doc) => {
    error.value = null;
    isPending.value = true;
    try {
      const res = await pjFirestore.collection(collection).add(doc);
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    }
  };
  return { error, addDoc, isPending };
};

export default useCollections;
