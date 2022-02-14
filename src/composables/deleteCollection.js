import { ref } from "vue";
import { pjFirestore } from "../firebase/config";

const deletePlaylist = (collection, id) => {
  const isPending = ref(false);
  const error = ref(null);

  let playlistRef = pjFirestore.collection(collection).doc(id);
  const deleteDoc = async () => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await playlistRef.delete();
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      isPending.value = false;
      error.value = "Can't delete this playlist";
    }
  };
  return { deleteDoc, error, isPending };
};

export default deletePlaylist;
