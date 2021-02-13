<template>
  <div class="favorites">
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
  },
  data() {
    return {
      favoriteItems: [],
    };
  },
  mounted() {},
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
</style>

