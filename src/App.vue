<template>
  <div id="app">
    <el-menu
      v-if="!navigationBarSelect"
      class="el-menu-main"
      :style="{
        'background-image': `url(${image})`,
      }"
      mode="horizontal"
    >
      <div>
        <img class="logo" src="./assets/logo.png" />
      </div>

      <span v-if="this.$route.name !== 'Details'"
        ><h1>
          <center class="my-text">
            Discover the World's best photos and videos
          </center>
        </h1>
        <h3><center class="my-text">Best Memories online</center></h3></span
      >
      <el-form class="search-form">
        <el-form-item>
          <el-input
            v-model="searchedString"
            class="el-input"
            placeholder="Search photos, videos, artists"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="searchForTheImages()" type="danger"
            >Search</el-button
          >
        </el-form-item>
      </el-form>
    </el-menu>

    <el-menu
      v-if="navigationBarSelect"
      style="height: 150px; background-color: #f3f3f3"
      mode="horizontal"
    >
      <div>
        <img class="logo" src="./assets/Logo-scroll.png" />
      </div>

      <el-form class="search-form">
        <el-form-item>
          <el-input
            v-model="searchedString"
            class="el-input"
            placeholder="Search photos, videos, artists"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="searchForTheImages()" type="danger"
            >Search</el-button
          >
        </el-form-item>
      </el-form>
    </el-menu>

    <div class="navigation-bar" v-if="this.$route.name !== 'Details'">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-options"
        mode="horizontal"
      >
        <el-menu-item index="1"
          ><router-link to="/">Photos</router-link>
        </el-menu-item>

        <el-menu-item index="2"
          ><router-link to="/Videos">Videos</router-link></el-menu-item
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
import axios from "axios";

export default {
  data() {
    return {
      image:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      activeIndex: "1",
      searchedString: "",
    };
  },
  components: {},
  computed: {
    navigationBarSelect() {
      return this.$route.name === "Details";
    },
  },
  methods: {
    searchForTheImages() {
      this.$store.state.searchString = this.searchedString;
      console.log();
      this.$root.$emit("fireMethod");
    },
    getTheCuratedImage() {
      const access_token =
        "563492ad6f91700001000001c3a04a4f60c34d5da52f1b4a9caf7c21";
      axios
        .get("https://api.pexels.com/v1/curated", {
          headers: {
            Authorization: `${access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.image = res.data.photos[0].src.landscape;
        });
    },
  },
  mounted() {
    setInterval(this.getTheCuratedImage(), 1000 * 60 * 60);
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.el-menu-main {
  height: 20rem;
}

.logo {
  padding-right: 70%;
  margin-top: 2%;
  margin-left: 2%;
}

.search-form {
  display: flex;
  justify-content: center;
}

.el-input {
  padding-right: 20em;
}

.my-text {
  color: white;
}

.navigation-bar {
  margin: 0% 7%;
}
</style>
