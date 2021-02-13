<template>
  <div class="home">
    <el-row :gutter="20" class="image-block">
      <el-col class="image" :span="5" v-for="image in myImages" :key="image.id">
        <el-image :src="image.src.medium"> </el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      myImages: [
        {
          id: 2014421,
          width: 3024,
          height: 3024,
          url:
            "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
        },
        {
          id: 2014423,
          width: 3024,
          height: 3024,
          url:
            "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
        },
        {
          id: 2014424,
          width: 3024,
          height: 3024,
          url:
            "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
        },
        {
          id: 2014426,
          width: 3024,
          height: 3024,
          url:
            "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
        },
        {
          id: 2014427,
          width: 3024,
          height: 3024,
          url:
            "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
        },
        {
          id: 2014422,
          width: 3024,
          height: 3024,
          url:
            "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
        },
        {
          id: 2014428,
          width: 3024,
          height: 3024,
          url:
            "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
          photographer: "Joey Farina",
          photographer_url: "https://www.pexels.com/@joey",
          photographer_id: 680589,
          avg_color: "#978E82",
          src: {
            original:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            large2x:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            large:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            medium:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            small:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            portrait:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            landscape:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            tiny:
              "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          },
        },
      ],
    };
  },
  name: "Home",
  components: {},
  methods: {
    printMyImages() {},
  },
};
</script>
<style scoped >
.image {
  margin-bottom: 2%;
}

.image-block {
  margin: 3% 0% 3% 0%;
  left: 90px;
}
</style>
