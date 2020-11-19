<template>
  <div class="header">
    <h1>Погода</h1>
    <City @weather="weatherSet" :latlonUrl="latlon" :cityUrl="city" />
    <Weather
      :weatherData="weather"
      :idUrl="id"
      :latlonUrl="latlon"
      :cityUrl="city"
    />
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
  beforeMount() {
    let latlon = this.$route.query.latlon;
    let city = this.$route.query.city;
    let id = this.$route.query.id;
    console.log(latlon);
    console.log(city);
    console.log(id);
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
