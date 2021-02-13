<template>
  <div id="app">
    <el-menu class="el-menu-main" mode="horizontal">
      <div>
        <img class="logo" src="./assets/logo.png" />
      </div>

      <h1>
        <center class="my-text">
          Discover the World's best photos and videos
        </center>
      </h1>
      <h3><center class="my-text">Best Memories online</center></h3>
      <el-form class="search-form">
        <el-form-item>
          <el-input
            class="el-input"
            placeholder="Search photos, videos, artists"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger">Search</el-button>
        </el-form-item>
      </el-form>
    </el-menu>

    <div class="navigation-bar">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-options"
        mode="horizontal"
      >
        <el-menu-item index="1"
          ><router-link to="/">Photos</router-link>
        </el-menu-item>

        <el-menu-item index="2"
          ><router-link to="/about">Videos</router-link></el-menu-item
        >
        <el-menu-item style="float: right" class="menu-item-favorite" index="3"
          ><router-link to="/favorites">Favorite</router-link></el-menu-item
        >
      </el-menu>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      src:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      activeIndex: "1",
    };
  },
  components: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.el-menu-main {
  height: 20rem;
  background-image: url("https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200");
}
.el-input {
  width: 80rem;
}

.logo {
  padding-right: 70%;
  margin-top: 2%;
  margin-left: 2%;
}

.my-text {
  color: white;
}

.search-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.navigation-bar {
  margin: 0% 7%;
}
</style>
