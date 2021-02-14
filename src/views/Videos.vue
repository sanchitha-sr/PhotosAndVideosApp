<template>
  <div class="Videos">
    <el-row :gutter="10" v-loading="loading" class="image-block">
      <el-col
        class="image-col"
        :span="5"
        v-for="image in myVideos"
        :key="image.id"
      >
        <div class="image-card">
          <el-image
            class="video-image"
            @click="openTheVideo(image)"
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
import axios from "axios";

export default {
  name: "Videos",
  data() {
    return {
      myVideos: [],
      loading: true,
      searchString: "animals",
    };
  },
  methods: {
    searchTheVideos() {
      this.searchString = this.$store.state.searchString;

      const access_token = this.$store.state.accessToken;
      axios
        .get(
          "https://api.pexels.com/videos/search?query=" +
            this.searchString +
            "&per_page=" +
            "20",
          {
            headers: {
              Authorization: `${access_token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.myVideos = res.data.videos;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
    addToFavorite(item) {
      // this.$store.state.favorites.push(item);
      // console.log(this.$store.state);
      this.$store.commit("addToFavoriteVideos", item);
      console.log(this.$store.state.favoriteVideos);
    },
    openTheVideo(video) {
      this.$router.push({
        path: "/details",
        query: {
          videoURL: video.video_files[1].link,
          photographer: video.user.name,
        },
      });

      // console.log(video);
    },
  },
  mounted() {
    this.searchTheVideos();
  },
  created() {
    this.$root.$on("fireMethod", () => {
      this.searchTheVideos();
    });
  },
};
</script>
<style  scoped>
.image-col {
  margin-bottom: 2%;
}

.image-block {
  margin: 3% 0% 3% 0%;
  left: 90px;
}
.image-card {
  border-radius: 2px;
  padding: 1px;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
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
.video-image {
  cursor: pointer;
}
</style>