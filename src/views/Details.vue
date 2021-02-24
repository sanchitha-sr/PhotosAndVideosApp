<template>
  <div class="details">
    <el-card v-if="this.$route.query.image">
      <div slot="header" class="clearfix">
        <span class="photographer">
          <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
          <span style="padding-left: 6px; line-height: 2">{{
            photographer
          }}</span>
        </span>

        <div class="icon-block">
          <span class="icons">
            <el-button
              @click="addToFavorite(imageObj)"
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
        </div>
      </div>
      <div v-loading="loading" class="image-container">
        <el-image class="image" :src="detailedImage"> </el-image>
      </div>
    </el-card>
    <el-card v-else>
      <div slot="header" class="clearfix">
        <span class="photographer">
          <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
          <span style="padding-left: 6px; line-height: 2">{{
            photographer
          }}</span>
        </span>

        <div class="icon-block">
          <span class="icons">
            <el-button
              @click="addToFavorite(videoObj)"
              :disabled="favoriteFlag"
              type="danger"
            >
              <i class="far fa-heart fa-1x"></i
            ></el-button>
          </span>
        </div>
      </div>
      <div v-loading="loading" class="image-container">
        <video
          ref="videoRef"
          :src="detailedVideo"
          id="video-container"
          width="60%"
          controls
        ></video>
      </div>
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
      detailedVideo: "",
      // videoGragher: this.$route.query.photographer,
      imageObj: Object,
      videoObj: Object,
      loading: true,
    };
  },
  methods: {
    addToFavorite(item) {
      this.favoriteFlag = true;
      console.log(item);
      this.$store.commit("addToFavorites", item);
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
          this.photographer = this.videoObj.user.name;

          this.detailedVideo = res.data.video_files[2].link;
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
    // console.log(this.$route.query.video);
    if (this.$route.query.image) {
      this.getThePhoto();
    } else {
      this.getTheVideo();
    }
  },
  name: "Details",
};
</script>
<style scoped>
.clearfix {
  height: 65px;
}

.photographer {
  line-height: 1;
}

.icons {
}

.image-container {
  text-align: center;
}

.icon-block {
  text-align: right;
}

.zoom-icons {
}

.image {
}
</style>

