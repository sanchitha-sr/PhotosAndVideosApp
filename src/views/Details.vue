<template>
  <div class="details">
    <el-image :src="this.$route.query.image"> </el-image>
  </div>
</template>


<script>
export default {
  data() {
    return {
      favoriteItems: [],
    };
  },
  mounted() {
    console.log(this.$route);
  },
  name: "Details",
};
</script>

