<template>
  <!-- <div>
    <p v-for="(degreec, index) in weather" :key="index">
      {{ weatherDegreec(degreec.main.temp) }}
    </p>
    
  </div> -->
  <div class="carousel">
    <!-- <WeatherData /> -->
    <p class="temp" v-for="(degreec, index) in weatherData" :key="index">
      {{ weatherDegreec(degreec.main.temp) }}
    </p>
  </div>
</template>

<script>
// import WeatherData from "@/components/WeatherData";
export default {
  name: "Weather",
  components: {
    // WeatherData,
  },
  props: {
    weatherData: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      // degreec: [],
    };
  },
  computed: {},
  methods: {
    weatherDegreec(temp) {
      console.log(typeof temp);
      return (temp - 273.13).toFixed(2);
    },
    // weatherMain() {
    //   this.weather = weather.main;
    // },
  },
};
</script>
<style lang="scss"></style>
