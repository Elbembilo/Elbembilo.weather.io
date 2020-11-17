<template>
  <div class="wrapper">
    <div class="dayoftheWeek">
      <p>
        Сейчас
        {{ moment().format("LT") }}
      </p>
    </div>
    <div
      class="carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <WeatherData
        v-for="(pogoda, index) in weatherData"
        :key="index"
        :weatherType="pogoda.weather[0].main"
        :weatherDegreec="pogoda.temp.day"
        :weatherTime="pogoda.dt"
      />
    </div>
  </div>
  <button @click="prevSlide" class="prev">
    <img
      src="@\assets\002-left-arrow.svg"
      alt="prev"
      v-if="weatherData.length !== 0"
    />
  </button>
  <button @click="nextSlide" class="next">
    <img
      src="@\assets\001-arrow-point-to-right.svg"
      alt="next"
      v-if="weatherData.length !== 0"
    />
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
  computed: {},
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
      if (this.currentSlideIndex >= 1) {
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
  max-width: 1300px;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 50px;
  .carousel {
    display: flex;
    transition: all ease 0.5s;
  }
}
.prev {
  right: 620px;
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
