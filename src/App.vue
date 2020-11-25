<template>
  <h1>Погода</h1>
  <Search @weather="weatherSet" />
  <Carousel :weatherData="weather" />
</template>

<script>
// @ is an alias to /src

import Search from "@/components/Search";
import Carousel from "@/components/Carousel";
export default {
  name: "Home",
  components: {
    Search,
    Carousel,
  },
  data() {
    return {
      weather: [],
    };
  },
  methods: {
    weatherSet(weatherArray) {
      this.weather = weatherArray;
      console.log(weatherArray);
    },
  },
  // beforeMount() {

  //   console.log(this.$route.query);
  // },
};
</script>

<style lang="scss">
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 45, 45);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

h1 {
  margin-top: 250px;
  color: #fff;
  font-weight: 100;
  font-size: 60px;
}
</style>
