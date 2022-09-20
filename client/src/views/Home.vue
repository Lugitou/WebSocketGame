<template>
  <div class="home">
    <HomeLogo />
    <div class="mainMenu">
      <div class="header">
        <Logo />
        <NavBar />
        <SignIn />
      </div>
      <CardsGroup />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/Home/NavBar.vue';
import CardsGroup from '@/components/Home/CardsGroup.vue';
import SignIn from '@/components/Home/SignIn.vue';
import HomeLogo from '../components/Home/HomeLogo.vue';
import Logo from '../components/Home/Logo.vue';
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
    Logo,
    NavBar,
    CardsGroup,
    SignIn,
    HomeLogo,
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
  height: 100%;
  position: relative;

  .mainMenu {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      color: white;
      width: 95%;
      height: 15%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
