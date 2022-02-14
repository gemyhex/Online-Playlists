<template>
  <div class="content">
    <form @submit.prevent="handleSubmit">
      <label>Playlist title</label>
      <input
        type="text"
        placeholder="Playlist title"
        required
        v-model="title"
      />
      <label>Playlist description</label>
      <textarea
        placeholder="Playlist description ..."
        required
        v-model="description"
      ></textarea>
      <label>Upload playlist cover</label>
      <input type="file" @change="handleChange" />
      <div class="error">
        {{ fileError }}
      </div>
      <button v-if="!isPending">Create</button>
      <button v-if="isPending">Saving...</button>
      <div class="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useStorage from "../../composables/useStorage";
import useCollections from "../../composables/useCollections";
import { timestamp } from "../../firebase/config";
import getUser from "../../composables/getUser";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { filePath, url, uploadImage, isPending } = useStorage();
    const { error, addDoc } = useCollections("playlists");
    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const types = ["image/png", "image/jpeg"];
    const { user } = getUser();
    const router = useRouter();

    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value);
        const res = await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp(),
        });
        if (!error.value) {
          console.log("playlist added", res.id);
          router.push({
            name: "PlaylistPreview",
            params: { id: res.id },
          });
        }
      }
    };
    const handleChange = (e) => {
      const selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Select an image file with correct type (png / jpeg)";
      }
    };
    return {
      title,
      description,
      handleSubmit,
      handleChange,
      fileError,
      isPending,
      error,
    };
  },
};
</script>

<style></style>
