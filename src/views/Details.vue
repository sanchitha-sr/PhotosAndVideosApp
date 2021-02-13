<template>
  <div class="details">
    <el-card>
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      photographer: this.$route.query.photographer,
      favoriteFlag: false,
      detailedImage: this.$route.query.image.large,
    };
  },
  methods: {
    addToFavorite() {
      this.favoriteFlag = true;
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

.details {
  text-align: center;
}

.photographer {
  display: flex;
  flex-direction: row;
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

