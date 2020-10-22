<template>
  <Logo />
  <City />
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo";
import City from "@/components/City";
export default {
  name: "Home",
  components: {
    Logo,
    City,
  },
};
</script>

<style lang="scss">
body {
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
