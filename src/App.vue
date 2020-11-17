<template>
  <router-view></router-view>
  <!-- <Logo /> -->
  <!-- <City @weather="weatherSet" />
  <Weather :weatherData="weather" /> -->
</template>

<script>
// @ is an alias to /src
// import Logo from "@/components/Logo";
// import City from "@/components/City";
// import Weather from "@/components/Weather";
export default {
  name: "Home",
  components: {
    // Logo,
    // City,
    // Weather,
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
</style>
