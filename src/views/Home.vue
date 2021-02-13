<template>
  <div class="home">
    <el-menu class="el-menu-main" mode="horizontal">
      <img alt="App logo" class="logo" src="../assets/logo.png" />

      <h1><center>Discover the World's best photos and videos</center></h1>
      <h3><center>Best Memories online</center></h3>
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="Search photos, videos, artists"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger">Search</el-button>
        </el-form-item>
      </el-form>
    </el-menu>

    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-options"
        mode="horizontal"
      >
        <el-menu-item index="1">Photos</el-menu-item>

        <el-menu-item index="2">Videos</el-menu-item>
        <el-menu-item style="float: right" class="menu-item-favorite" index="3"
          ><a>Favorite</a></el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      src:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      activeIndex: "1",
    };
  },
  name: "Home",
  components: {},
};
</script>
<style scoped>
.el-menu-main {
  height: 20rem;
}
.el-input {
  width: 35rem;
}

.logo {
  align-content: left;
}

.menu-item-favorite {
  float: right;
}

.el-menu-options {
  margin: 0% 8%;
}
</style>
