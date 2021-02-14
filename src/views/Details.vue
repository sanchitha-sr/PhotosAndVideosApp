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
      <div class="container">
        <el-image :src="detailedImage"> </el-image>
      </div>
    </el-card>
    <el-card v-if="detailedVideo">
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
      <video width="70%" controls>
        <source :src="detailedVideo" type="video/mp4" />
        <source :src="detailedVideo" type="video/ogg" />
        Your browser does not support HTML video.
      </video>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      photographer: this.$route.query.photographer,
      favoriteFlag: false,
      detailedImage: this.$route.query.image
        ? this.$route.query.image.large
        : "",
      detailedVideo: this.$route.query.videoURL,
      videoGragher: this.$route.query.photographer,
    };
  },
  methods: {
    addToFavorite() {
      this.favoriteFlag = true;
      // this.$store.commit("addToFavorites", item);
    },
    zoomIn() {
      this.detailedImage = this.$route.query.image.original;
    },
    zoomOut() {
      this.detailedImage = this.$route.query.image.medium;
    },
  },
  computed: {},
  mounted() {
    console.log(this.$route);
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
  padding-left: 50rem;
}
</style>

