<template>
  <div class="search">
    <form>
      <input
        type="text"
        placeholder="Введите город"
        v-model="value"
        @keyup="mySearchFunction()"
      />
      <ul id="example-1">
        <li
          v-for="(result, index) in results"
          :key="index"
          v-on:click="setType(result)"
          v-show="Visable"
        >
          {{ result.GeoObject.metaDataProperty.GeocoderMetaData.text }}
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",

  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      results: [],
      value: undefined,
      loading: true,
      errored: false,
      Visable: true,
      dataWeather: [],
      currentSlideIndex: 0,
    };
  },
  computed: {},
  watch: {
    $route(to) {
      this.value = to.query.city;
      this.mySearchFunction();
      this.latlon = to.query.latlon;
      // this.lon = to.query.lon;
      console.log(this.latlon);
    },
    // setType() {
    //   this.Visable = !this.Visable;
    //   let location = result.GeoObject.Point;
    //   this.axios
    //     .get("https://api.openweathermap.org/data/2.5/onecall", {
    //       params: {
    //         lat: lat,
    //         lon: lon,
    //         exclude: "current",
    //         appid: "828beab3d73557dad05ad548fcded3ac",
    //       },
    //     })

    //     .then((response) => {
    //       this.$emit("weather", response.data.daily);
    //     });
    // },
  },
  mounted() {
    console.log(this.lat, this.lon);
    // if (!Object.keys(this.$route.query).length) {
    //   return;
    // }
    // console.log(this.$route.query.latlon);
    // this.value = this.$route.query.latlon;
    // this.coordinatesSplit = this.$route.query.latlon;
    // this.mySearchFunction();
    // this.setType();
  },
  beforeMount() {
    console.log(this.lat, this.lon);
  },
  methods: {
    async mySearchFunction() {
      if (this.value && this.value?.length <= 2) return false;
      else {
        this.Visable = !this.Visable;

        // console.log(this.value, "value");

        // this.axios
        //   .get("https://geocode-maps.yandex.ru/1.x/", {
        //     params: {
        //       format: "json",
        //       apikey: "7d284bac-c91d-4a46-ae48-aba35ba0080e",
        //       geocode: this.value,
        //     },
        //   })
        const response = await this.axios.get(
          "https://geocode-maps.yandex.ru/1.x/",
          {
            params: {
              format: "json",
              apikey: "7d284bac-c91d-4a46-ae48-aba35ba0080e",
              geocode: this.value,
            },
          }
        );
        return response;
        // .then((response) => {
        //   this.results =
        //     response.data.response.GeoObjectCollection.featureMember;
        //   // console.log(this.results);
        // })
        // .catch((error) => {
        //   console.log(error);
        //   this.errored = true;
        // });
      }
    },

    setType(result) {
      this.value =
        result.GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AddressLine;
      this.Visable = !this.Visable;
      let location = result.GeoObject.Point;
      console.log(location);
      let coordinatesSplit = location.pos.split(" ");
      this.$router.push({
        query: {
          city: this.value,
          latlon: coordinatesSplit[1] + " " + coordinatesSplit[0],
          // lon: coordinatesSplit[0],
        },
      });
      this.axios
        .get("https://api.openweathermap.org/data/2.5/onecall", {
          params: {
            lat: coordinatesSplit[1],
            lon: coordinatesSplit[0],
            exclude: "current",
            appid: "828beab3d73557dad05ad548fcded3ac",
          },
        })

        .then((response) => {
          this.$emit("weather", response.data.daily);
        });
    },
  },

  // beforeCreate() {
  //   console.log(this.$route.query);
  //   // this.value = this.$route.query.city;

  //   // this.mySearchFunction();
  // },
};
</script>
<style lang="scss">
.search {
  form {
    form:focus {
      border: 0px solid;
    }
    input {
      width: 800px;
      font-size: 21px;
      border-radius: 5px;
      margin: 10px auto;
      display: block;
      margin-bottom: 0px;
      padding: 10px 13px;
    }
    input:focus {
      outline: none;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 0px;
      padding-left: 0px;
      background-color: #fff;
      border-radius: 5px;
      li {
        width: 100%;
        list-style-type: none;
        font-size: 21px;
        text-align: start;
        color: black;
        padding: 10px 13px;
      }
      li:hover {
        background-color: rgba(1, 155, 1, 0.945);
      }
    }
  }
}
</style>
