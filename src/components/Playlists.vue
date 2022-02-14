<template>
  <div class="content">
    <h2>Playlists</h2>
    <div class="playlists" v-if="documents">
      <div class="single" v-for="doc in documents" :key="doc.id">
        <div class="logo">
          <div class="show">
            <img :src="doc.coverUrl" :alt="doc.title" />
          </div>
          <div class="info">
            <router-link
              :to="{ name: 'PlaylistPreview', params: { id: doc.id } }"
              >{{ doc.title }}</router-link
            >
            <p>{{ doc.description }}</p>
            <span>add by : {{ doc.userName }}</span>
          </div>
        </div>
        <div class="songs">
          <span>{{ doc.songs.length }}</span>
        </div>
      </div>
    </div>
    <div class="load" v-else>
      <Spinner></Spinner>
    </div>
    <div class="error" v-if="error">
      <p>Couldn't fetch playlists</p>
    </div>
  </div>
</template>

<script>
import getCollections from "../composables/getCollections";
import getUser from "../composables/getUser";
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    Spinner,
  },
  setup() {
    const { documents, error } = getCollections("playlists");
    const { user } = getUser();

    return { error, documents, user };
  },
};
</script>

<style lang="scss" scoped>
.playlists {
  width: 100%;
  .single {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: white;
    border-radius: 8px;
    margin: 10px 0;
    span {
      display: block;
      font-weight: 700;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.05, 1.05);
      transition: all 1s ease;
    }
    .logo {
      margin: 5px 10px;
      display: flex;
      img {
        width: 75px;
        height: 75px;
        margin-right: 15px;
        border: 2px solid var(--primary);
        border-radius: 50%;
      }
      .info {
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
  }
}
</style>
