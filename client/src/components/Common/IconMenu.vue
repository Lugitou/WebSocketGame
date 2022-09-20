<template>
  <a class="iconMenu">
    <img :alt="alt" :src="require(`../../assets/${path}`)" />
    <p>{{ text }}</p>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconMenu',
  props: {
    alt: String,
    path: String,
    text: String,
  },
});
</script>

<style lang="scss" scoped>
.iconMenu {
  position: relative;
  width: 100px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(0) saturate(100%) invert(76%) sepia(10%) saturate(2463%) hue-rotate(338deg)
      brightness(113%) contrast(104%);
    p {
      animation: popFromIcon 0.25s ease-in-out forwards;
    }
  }

  img {
    position: absolute;
    width: 55px;
    height: 55px;
  }

  p {
    font-size: 75%;
    padding-top: 50px;
    position: absolute;
    animation: hideFromIcon 0.25s ease-in-out forwards;
  }
}

@keyframes popFromIcon {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(25px);
  }
}

@keyframes hideFromIcon {
  0% {
    opacity: 1;
    transform: translateY(25px);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}
</style>
