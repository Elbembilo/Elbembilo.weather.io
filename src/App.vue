<template>
  <Logo />
  <City options="options" />
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo";
import City from "@/components/City";
// import data from "@/components/data";
export default {
  name: "Home",
  components: {
    Logo,
    City,
  },
  data() {
    return {
      options: [
        { name: "weather", value: "degrees" },
        { name: "weather", value: "degrees 10" },
      ],
    };
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
