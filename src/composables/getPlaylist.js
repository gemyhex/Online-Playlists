import { ref, watchEffect } from "vue";
import { pjFirestore } from "../firebase/config";

const getPlaylist = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  let playlistRef = pjFirestore.collection(collection).doc(id);

  const unsub = playlistRef.onSnapshot(
    (playlist) => {
      if (playlist.data()) {
        document.value = { ...playlist.data(), id: playlist.id };
        error.value = null;
      } else {
        error.value = "Playlist does't exist";
      }
    },
    (err) => {
      console.log(err.message);
      document.value = null;
      error.value = "Couldn't fetch that playlist";
    }
  );
  watchEffect((onValidate) => {
    onValidate(() => unsub());
  });
  return { document, error };
};

export default getPlaylist;
