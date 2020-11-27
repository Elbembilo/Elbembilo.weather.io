<template>
  <div class="search">
    <form>
      <input
        type="text"
        placeholder="Введите город"
        v-model="value"
        @keyup="setResaults()"
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
      // currentSlideIndexProps: {
      //   type: Number,
      // },
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
      id: 0,
    };
  },
  computed: {},
  watch: {
    $route(to) {
      if (Object.keys(to.query).length > 0) {
        this.value = to.query.city;
        this.id = to.query.id;
        this.mySearchFunction().then((res) => {
          this.setType(res.data.response.GeoObjectCollection.featureMember[0]);
        });
      }
    },
    //   if (to.query.lenght > 0) {
    //     this.value = to.query.city;
    //     this.mySearchFunction().then((res) => {
    //       this.setType(res.data.response.GeoObjectCollection.featureMember[0]);
    //     });
    //   }
    // },
  },
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     console.log(vm.$route.query);
  //     if (Object.keys(vm.route.query).lenght > 0) {
  //       this.value = vm.query.city;
  //       this.mySearchFunction().then((res) => {
  //         this.setType(res.data.response.GeoObjectCollection.featureMember[0]);
  //       });
  //     }
  //   });
  // },

  methods: {
    setResaults() {
      this.mySearchFunction().then((res) => {
        this.results = res?.data?.response.GeoObjectCollection.featureMember;
      });
    },
    async mySearchFunction() {
      if (this.value && this.value?.length <= 3) return false;
      else {
        this.Visable = !this.Visable;
        const res = await this.axios.get(
          "https://geocode-maps.yandex.ru/1.x/",
          {
            params: {
              format: "json",
              apikey: "7d284bac-c91d-4a46-ae48-aba35ba0080e",
              geocode: this.value,
            },
          }
        );
        return res;
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
      // console.log(location);
      let coordinatesSplit = location.pos.split(" ");
      // let id = this.currentSlideIndexProps;
      // console.log(this.id);
      this.$router.push({
        query: {
          city: this.value,
          // latlon: coordinatesSplit[1] + " " + coordinatesSplit[0],
          id: this.$route.query.id,
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
