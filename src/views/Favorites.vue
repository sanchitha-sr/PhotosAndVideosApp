<template>
  <div class="favorites">
    <h3 v-if="nullVideos">No favorites added</h3>
    <el-row :gutter="10" class="image-block">
      <el-col
        class="image-col"
        :span="5"
        v-for="image in favorites"
        :key="image.id"
      >
        <div class="image-card">
          <el-image
            @click="openTheImage(image.src.landscape)"
            class="image"
            :src="image.src.landscape"
          >
          </el-image>

          <div class="overlay">
            <span class="photographer"> {{ image.photographer }}</span>
          </div>
          <i
            @click="removeFromFavorite(image)"
            style="margin-left: 90%; margin-top: 3%; cursor: pointer"
            class="el-icon-collection-tag"
          ></i>
        </div>
      </el-col>
      <el-col
        class="image-col"
        :span="5"
        v-for="image in favoriteVideos"
        :key="image.id"
      >
        <div class="image-card">
          <div class="play-icon-container">
            <el-button
              circle
              class="play-icon"
              @click="openTheVideo(image)"
              icon="el-icon-video-play"
            ></el-button>
          </div>
          <el-image
            class="video-image"
            @click="openTheVideo(image.video_files[0].link)"
            :src="image.image"
          ></el-image>
          <div class="overlay">
            <span class="photographer">by {{ image.user.name }}</span>
          </div>
          <el-button
            style="margin-left: 86%"
            size="mini"
            @click="addToFavorite(image)"
            type="danger"
            circle
          >
            <i
              class="far fa-heart fa-1x"
              style="cursor: pointer"
              id="el-icon-collection-tag"
            ></i>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    favoriteVideos() {
      return this.$store.state.favoriteVideos;
    },
    nullVideos() {
      return (
        this.$store.state.favorites === 0 &&
        this.$store.state.favoriteVideos === 0
      );
    },
  },
  data() {
    return {
      favoriteItems: [],
    };
  },
  mounted() {
    console.log(this.favoriteItems);
  },
  methods: {
    removeFromFavorite(item) {
      this.$store.commit("removeFromFavorites", item);
    },
  },
  name: "Favorites",
};
</script>
<style  scoped>
.image-col {
  margin-bottom: 2%;
}
.overlay {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.photographer {
  line-height: 3;
  font-size: 9px;
  margin-left: 3px;
  color: grey;
}

.image-block {
  margin: 0.5% 0% 3% 0%;
  left: 90px;
}

.image-card {
  border-radius: 2px;
  padding: 1px;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.image:hover {
  cursor: pointer;
}

.play-icon-container {
  display: flex;
  justify-content: center;
}

.play-icon {
  position: absolute;
  z-index: 2;
  margin-top: 3%;
  opacity: 0.6;
}
</style>

