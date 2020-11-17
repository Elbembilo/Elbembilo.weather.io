<template>
  <div class="header">
    <H1>Погода</H1>
    <City @weather="weatherSet" />
    <Weather :weatherData="weather" />
  </div>
</template>
<script>
import City from "@/components/City";
import Weather from "@/components/Weather";
export default {
  name: "logo",
  components: {
    // Logo,
    City,
    Weather,
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
.header {
  margin-top: 250px;
  h1 {
    color: #fff;
    font-weight: 100;
    font-size: 60px;
  }
}
</style>
