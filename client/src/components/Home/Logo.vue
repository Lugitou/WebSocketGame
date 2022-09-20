<template>
  <div class="title">
    <img class="logo" src="../../assets/Logo.svg" alt="" />
    <h1>GROS POULET</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
});
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Baumans';
  font-size: 125%;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  opacity: 0;
  animation: openLeft 1s ease-in forwards;
  animation-delay: 1.5s;

  .logo {
    width: 75px;
    height: 75px;
  }
}
</style>
