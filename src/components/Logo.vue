<template>
  <div class="header">
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
  // beforeMount() {
  //   const { latlon, city, id } = this.$route.query;
  //    this.$router.push(Object.assign({
  //       query: {
  //         latlon: coordinatesSplit[1] + "," + coordinatesSplit[0],
  //         id: this.currentSlideIndex,
  //         city: this.value,
  //       },
  //     });
  //   console.log(latlon);
  //   console.log(city);
  //   console.log(id);
  //   this.axios.get("https://geocode-maps.yandex.ru/1.x/", {
  //     params: {
  //       format: "json",
  //       apikey: "7d284bac-c91d-4a46-ae48-aba35ba0080e",
  //       geocode: this.city,
  //     },
  //   });
  //   // .then((response) => {
  //   //         this.results =
  //   //           response.data.response.GeoObjectCollection.featureMember;
  //   //         console.log(this.results);
  //   //       })
  // },
  // mounted() {
  //  if ( !Object.keys(this.$route.query).length ) {
  //   return;
  // }
  // const{ latlon, city, id}=this .$route.query;
  // await this.$route.push(Object.assing({
  //   latlon: latlon,
  //   city: city,
  //   id:id    },
  //   ));
  // },
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
