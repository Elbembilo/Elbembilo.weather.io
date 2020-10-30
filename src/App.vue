<template>
  <Logo />
  <City @weather="weather" @degreec="degreec" />
  <Weather :weather="weather" :degreec="degreec" />
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo";
import City from "@/components/City";
import Weather from "@/components/Weather";
export default {
  name: "Home",
  components: {
    Logo,
    City,
    Weather,
  },
  data() {
    return {};
  },
  methods: {
    weather(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 45, 45);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
