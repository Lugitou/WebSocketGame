<template>
  <div class="full">
    <div class="header">
      <Logo />
      <NavBar />
      <SignIn />
    </div>
    <div class="bodyRouter">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import io from 'socket.io-client';
import { useStore } from './store';
import Logo from './components/Home/Logo.vue';
import NavBar from './components/Home/NavBar.vue';
import SignIn from './components/Home/SignIn.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      store: useStore(),
    };
  },
  methods: {
    initSocket() {
      this.store.state.socket = io('http://localhost:7001');
    },
  },
  mounted() {
    this.initSocket();
  },
  components: { Logo, NavBar, SignIn },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baumans&family=Dangrek&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

html {
  margin: 0;
  padding: 0;
  height: 100vh;

  body {
    margin: 0;
    padding: 0;
    height: 100vh;

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      width: 100%;
      background: url('./assets/background.png') repeat;
    }
  }
}

.full {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    font-family: 'Inter';
    font-size: 140%;
    color: white;
    margin-left: 2.5%;
    width: 95%;
    height: 15%;
    display: flex;
    justify-content: space-between;
  }

  .bodyRouter {
    width: 100%;
    height: 80%;
  }
}
</style>
