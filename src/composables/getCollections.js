import { ref, watchEffect } from "vue";
import { pjFirestore } from "../firebase/config";

const getCollections = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionsRef = pjFirestore.collection(collection).orderBy("createdAt");

  const unsub = collectionsRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Couldn't Fetch Data";
    }
  );
  watchEffect((onValidate) => {
    onValidate(() => unsub());
  });
  return { documents, error };
};

export default getCollections;
