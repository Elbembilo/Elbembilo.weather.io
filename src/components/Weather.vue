<template>
  <div class="ant-carousel">
    <div class="ant-carousel-hider">
      <ul class="ant-carousel-list">
        <li class="ant-carousel-element">
          <img src="images/img1.jpg" alt="1" />
          <p>Описание 1</p>
        </li>
        <li class="ant-carousel-element">
          <img src=" images /img2.jpg" alt="2" />
          <p>Описание2</p>
        </li>
        …
        <li class="ant-carousel-element">
          <img src=" images /imgN.jpg" alt="N" />
          <p>Описание N</p>
        </li>
      </ul>
    </div>
    <div class="ant-carousel-arrow-left"></div>
    <div class="ant-carousel-arrow-right"></div>
    <div class="ant-carousel-dots"></div>
  </div>
</template>
<script>
export default {
  name: "Weather",
  props: {
    coordinates: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },
  computed: {},
  methods: {
   
  },
};
</script>
<style lang="scss"></style>
