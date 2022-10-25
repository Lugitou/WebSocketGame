<template>
  <div class="signIn">
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
  name: 'SignIn',
  data() {
    return {
      iconMenu: [
        {
          alt: 'iconLogin',
          path: 'login.svg',
          text: 'Profil',
        },
      ],
    };
  },
  components: { IconMenu },
});
</script>

<style lang="scss" scoped>
.signIn {
  width: 30%;
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
}
</style>
