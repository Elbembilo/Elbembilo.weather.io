<template>
  <div class="wrapper">
    <div
      class="carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <WeatherData
        v-for="(pogoda, index) in weatherData"
        :key="index"
        :weatherType="pogoda.weather[0].main"
      />
      <p class="temp" v-for="(degreec, index) in weatherData" :key="index">
        {{ weatherDegreec(degreec.main.temp) }}
      </p>
    </div>
    <button @click="prevSlide">
      <img src="@\assets\002-left-arrow.svg" alt="prev" />
    </button>
    <button @click="nextSlide">
      <img src="@\assets\001-arrow-point-to-right.svg" alt="next" />
    </button>
  </div>
</template>

<script>
import WeatherData from "@/components/WeatherData";
export default {
  name: "Weather",
  components: {
    WeatherData,
  },
  props: {
    weatherData: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentSlideIndex: 0,
      // degreec: [],
    };
  },
  computed: {},
  methods: {
    weatherDegreec(temp) {
      console.log(typeof temp);
      return (temp - 273.13).toFixed(2);
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      // if (this.currentSlideIndex > this.carousel.lenght - 1) {
      //   this.currentSlideIndex = 0;
      // } else {
      this.currentSlide++;
      console.log(this.currentSlideIndex);
      // }
    },

    // weatherMain() {
    //   this.weather = weather.main;
    // },
  },
};
</script>
<style lang="scss">
.wrapper {
  max-width: 300px;
  overflow: hidden;
  margin: 0 auto;
  .carousel {
    display: flex;
    transition: all ease 0.5s;
  }
  button {
    background-color: rgb(46, 45, 45);
    img {
      width: 40px;
      background-color: rgb(46, 45, 45);
    }
  }
}
</style>
