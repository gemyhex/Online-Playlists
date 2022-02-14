<template>
  <div class="home">
    <Playlists></Playlists>
  </div>
</template>

<script>
import Playlists from "../components/Playlists.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Playlists },
};
</script>
