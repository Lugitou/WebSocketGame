<template>
  <div class="navBar">
    <IconMenu
      v-for="icon in iconMenu"
      :key="icon.alt"
      :alt="icon.alt"
      :path="icon.path"
      :text="icon.text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconMenu from '../Common/IconMenu.vue';

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      iconMenu: [
        {
          alt: 'iconPlay',
          path: 'book.svg',
          text: 'Règles',
        },
        {
          alt: 'iconLeader',
          path: 'ribbon.svg',
          text: 'Succès',
        },
      ],
    };
  },
  components: { IconMenu },
});
</script>

<style lang="scss" scoped>
.navBar {
  width: 30%;
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
  font-weight: bold;
  opacity: 0;
  animation: openTop 1s ease-in forwards;
  animation-delay: 1.5s;
}
</style>
