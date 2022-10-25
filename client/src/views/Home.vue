<template>
  <div class="home">
    <div class="mainMenu">
      <CardsGroup />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardsGroup from '@/components/Home/CardsGroup.vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      store: useStore(),
    };
  },
  mounted() {
    if (this.store.state.socket !== null) {
      this.store.state.socket.on('connect', () => {
        console.log('connected');
      });
    }
  },
  components: {
    CardsGroup,
  },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Baumans&family=Dangrek&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

.home {
  font-family: 'Inter';
  font-size: 140%;
  font-weight: 500;
  width: 100%;
  height: 85%;
  position: relative;

  .mainMenu {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
