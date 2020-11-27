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
      <WeatherIcon
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
import WeatherIcon from "@/components/WeatherIcon";
var moment = require("moment");
export default {
  name: "Weather",
  components: {
    WeatherIcon,
  },
  props: {
    weatherData: {
      type: Array,
      required: true,
    },
  },

  computed: {},

  watch: {
    $route(to) {
      console.log(typeof parseInt(to.query.id) == Number);
      if (to.query.id && typeof parseInt(to.query.id) === Number) {
        this.currentSlideIndex = to.query.id;
      }
    },
  },
  methods: {
    weatherCalc(temp) {
      return (temp - 273.13).toFixed(2);
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        // this.$emit("current-slide-index-emit", this.currentSlideIndex);
        this.changeId();
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= 1) {
        this.currentSlideIndex = 0;
        // this.$emit("current-slide-index-emit", this.currentSlideIndex);
        this.changeId();
      } else {
        this.currentSlideIndex++;
        // this.$emit("current-slide-index-emit", this.currentSlideIndex);
        this.changeId();
      }
    },
    async changeId() {
      // console.log(this.currentSlideIndex);
      const { id, ...routerParams } = this.$route.query;
      await this.$router.push({
        query: Object.assign(routerParams, {
          id: this.currentSlideIndex,
        }),
      });
      id;
    },
  },
  data() {
    return {
      visible: true,
      moment: moment,
      degreec: [],
      currentSlideIndex: 0,
    };
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
