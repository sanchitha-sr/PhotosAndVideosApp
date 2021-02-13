<template>
  <div class="home">
    {{ string }}
    <el-row :gutter="10" class="image-block">
      <el-col
        class="image-col"
        :span="5"
        v-for="image in myImages"
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
import axios from "axios";

export default {
  props: ["string"],
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
      searchString:
        this.getTheSearchString === undefined
          ? "animals"
          : this.getTheSearchString,
    };
  },
  name: "Home",

  methods: {
    searchTheImages() {
      const url =
        "https://api.pexels.com/v1/search?query=" +
        this.searchString +
        "&per_page=" +
        20;
      const access_token =
        "563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692";
      axios
        .get(url, {
          headers: {
            Authorization: `${access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.myImages = res.data.photos;
        });
    },
    openTheImage(image) {
      console.log(image);
      this.$router.push({ path: "/details", query: { image: image } });
    },
  },
  computed: {
    getTheSearchString() {
      return this.$route.query.string;
    },
  },
  mounted() {
    this.searchTheImages();
    console.log(this.$route);
  },
};
</script>



<style scoped >
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
