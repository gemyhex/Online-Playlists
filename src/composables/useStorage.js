import { ref } from "vue";
import { pjStorage } from "../firebase/config";
import getUser from "./getUser";

const { user } = getUser();
const isPending = ref(false);
const useStoreage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    isPending.value = true;
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const sRef = pjStorage.ref(filePath.value);

    try {
      const res = await sRef.put(file);
      url.value = await res.ref.getDownloadURL();
      isPending.value = false;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    }
  };

  const deleteImage = async (path) => {
    const storageRef = pjStorage.ref(path);
    try {
      await storageRef.delete();
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { error, url, filePath, uploadImage, isPending, deleteImage };
};

export default useStoreage;
