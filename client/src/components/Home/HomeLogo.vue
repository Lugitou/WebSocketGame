<template>
  <div class="wrapperLogo">
    <img alt="" src="../../assets/Logo.svg" class="homeLogo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeLogo',
});
</script>

<style lang="scss" scoped>
.wrapperLogo {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .homeLogo {
    width: 50%;
    height: 50%;
    animation: homeLogo 1.5s ease-in forwards;
    position: absolute;
    margin: auto;
  }
}
</style>
