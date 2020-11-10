<template>
  <div class="wrapper">
    <!-- <div class="dayoftheWeek">{{ moment(pogoda.dt_txt).format("dddd") }}</div> -->
    <div
      class="carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <WeatherData
        v-for="(pogoda, index) in weatherData"
        :key="index"
        :weatherType="pogoda.weather[0].main"
        :weatherDegreec="pogoda.main.temp"
        :weatherTime="pogoda.dt_txt"
      />
    </div>
  </div>
  <button @click="prevSlide" class="prev">
    <img src="@\assets\002-left-arrow.svg" alt="prev" />
  </button>
  <button @click="nextSlide" class="next">
    <img src="@\assets\001-arrow-point-to-right.svg" alt="next" />
  </button>
</template>

<script>
import WeatherData from "@/components/WeatherData";
var moment = require("moment");
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
      visible: true,
      currentSlideIndex: 0,
      moment: moment,
      // degreec: [],
    };
  },
  computed: {
    // buttonShow: function(temp) {
    //   if (temp) return (this.visible = !this.visible);
    // },
  },
  methods: {
    weatherCalc(temp) {
      console.log(typeof temp);
      return (temp - 273.13).toFixed(2);
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex > 2) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
        console.log(this.currentSlideIndex);
      }
    },

    // weatherMain() {
    //   this.weather = weather.main;
    // },
  },
};
</script>
<style lang="scss">
.wrapper {
  max-width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  .carousel {
    display: flex;
    transition: all ease 0.5s;
  }
}
.prev {
  right: 600px;
}
.next {
  left: 600px;
}
button:active {
  border-style: none;
}
button {
  position: relative;
  right: 600px;
  top: -120px;
  background-color: rgb(46, 45, 45);
  border-style: none;
  img {
    width: 40px;
    background-color: rgb(46, 45, 45);
  }
}
</style>
