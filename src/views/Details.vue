<template>
  <div class="details">
    <el-card v-if="this.$route.query.image">
      <div slot="header" class="clearfix">
        <div class="text-block">
          <span class="icons">
            <el-button
              @click="addToFavorite(image)"
              :disabled="favoriteFlag"
              type="danger"
            >
              <i class="far fa-heart fa-1x"></i
            ></el-button>

            <span class="zoom-icons">
              <el-button-group style="margin-left: 1%">
                <el-button @click="zoomIn" type="primary">
                  <i class="fas fa-search-plus fa-1x"></i
                ></el-button>
                <el-button @click="zoomOut" type="primary">
                  <i class="fas fa-search-minus fa-1x"></i>
                </el-button>
              </el-button-group>
            </span>
          </span>
          <span class="photographer">
            <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
            <span style="padding-left: 6px; line-height: 2">{{
              photographer
            }}</span>
          </span>
        </div>
      </div>
      <div v-loading="loading" class="container">
        <el-image :src="detailedImage"> </el-image>
      </div>
    </el-card>
    <el-card v-if="this.$route.query.video">
      <div slot="header" class="clearfix">
        <div class="text-block">
          <span class="icons">
            <el-button :disabled="favoriteFlag" type="danger">
              <i class="far fa-heart fa-1x"></i
            ></el-button>

            <span class="zoom-icons"> </span>
          </span>
          <span class="photographer">
            <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
            <span style="padding-left: 6px; line-height: 2">{{
              videoGragher
            }}</span>
          </span>
        </div>
      </div>
      <video v-loading="loading" width="70%" controls>
        <source :src="detailedVideo" type="video/mp4" />
        <source :src="detailedVideo" type="video/ogg" />
        Your browser does not support HTML video.
      </video>
    </el-card>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      photographer: "",
      favoriteFlag: false,
      detailedImage: "",
      detailedVideo: this.$route.query.video.video_files[1].link,
      videoGragher: this.$route.query.photographer,
      imageObj: Object,
      videoObj: Object,
      loading: true,
    };
  },
  methods: {
    addToFavorite() {
      this.favoriteFlag = true;
      // this.$store.commit("addToFavorites", item);
    },
    zoomIn() {
      this.detailedImage = this.imageObj.src.original;
    },
    zoomOut() {
      this.detailedImage = this.imageObj.src.medium;
    },
    getThePhoto() {
      const url = "https://api.pexels.com/v1/photos/" + this.$route.query.image;
      const access_token = this.$store.state.accessToken;

      axios
        .get(url, {
          headers: {
            Authorization: `${access_token}`,
          },
        })
        .then((res) => {
          this.imageObj = res.data;
          this.photographer = this.imageObj.photographer;
          console.log(res.data);

          this.detailedImage = this.imageObj.src.large;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
    getTheVideo() {
      const url =
        "https://api.pexels.com/videos/videos/" + this.$route.query.video;
      const access_token = this.$store.state.accessToken;

      axios
        .get(url, {
          headers: {
            Authorization: `${access_token}`,
          },
        })
        .then((res) => {
          this.videoObj = res.data;
          this.photographer = this.videoObj.photographer;

          this.detailedVideo = res.data.video_files[1].link;
          console.log(this.detailedVideo.toString());
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
  },
  computed: {},
  mounted() {
    console.log(this.$route);
    console.log(this.$route.query.video);
    if (this.$route.query.image) {
      this.getThePhoto();
    }
    // else if (this.$route.query.video) {
    //   this.getTheVideo();
    // }
  },
  name: "Details",
};
</script>
<style scoped>
.text-block {
  z-index: 1;
}

.clearfix {
  height: 20px;
}

.details {
  text-align: center;
}

.photographer {
  display: flex;
  flex-direction: row;
  padding-top: 2%;
}

.zoom-icons {
}

.zoom-icons:hover {
  cursor: pointer;
}

.icons {
  padding-left: 0rem;
}
</style>

