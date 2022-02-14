<template>
  <div class="content">
    <div class="preview" v-if="playlist">
      <div class="add" v-if="user.displayName == playlist.userName">
        <button>add song</button>
      </div>
      <div class="single">
        <div class="logo">
          <img :src="playlist.coverUrl" :alt="playlist.title" />
          <div class="info">
            <h2>{{ playlist.title }}</h2>
            <p>{{ playlist.description }}</p>
            <span>add by : {{ playlist.userName }}</span>
          </div>
        </div>
        <div class="songs">
          <h2>Playlist songs</h2>
          <ul>
            <li v-for="song in playlist.songs" :key="song.id">
              {{ song }}
            </li>
          </ul>
        </div>
        <div class="delete" v-if="user.displayName == playlist.userName">
          <button @click="handleDelete" v-if="!isPending">
            delete playlist
          </button>
          <button v-if="isPending">deleting...</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getPlaylist from "../../composables/getPlaylist";
import getUser from "../../composables/getUser";
import deletePlaylist from "../../composables/deleteCollection";
import useStorage from "../../composables/useStorage";
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  setup(props) {
    const { document: playlist, error } = getPlaylist("playlists", props.id);
    const { user } = getUser();
    const { isPending, deleteDoc } = deletePlaylist("playlists", props.id);
    const router = useRouter();
    const { deleteImage } = useStorage();
    const handleDelete = async () => {
      await deleteImage(playlist.value.filePath);
      await deleteDoc();
      router.push({ name: "Home" });
    };

    return { playlist, error, user, isPending, handleDelete };
  },
};
</script>

<style lang="scss" scoped>
.single {
  width: 100%;
  padding: 15px;
  background: white;
  border-radius: 8px;
  margin: 10px 0;
  margin: 5px 10px;
  display: flex;
  .add {
    width: 100%;
  }
  .logo {
    width: 40%;
    img {
      width: 100%;
      height: 400px;
      margin-right: 15px;
      border: 2px solid var(--primary);
      border-radius: 50%;
    }
    .info {
      text-align: center;
      a {
        font-size: 1.1rem;
        text-transform: capitalize;
        font-weight: 600;
      }
      span {
        display: block;
        font-weight: 500;
      }
    }
  }

  .songs {
    width: 60%;
    padding: 0 20px;
    ul {
      padding: 20px 20px;
      li {
        list-style: decimal;
        font-weight: 600;
        text-transform: capitalize;
        padding: 7px;
      }
    }
  }
}
</style>
