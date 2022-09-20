<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import io from 'socket.io-client';
import { useStore } from './store';

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

@keyframes homeLogo {
  0% {
    opcatity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
    opacity: 0;
  }
}

@keyframes openLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes openTop {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes openRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes openBottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
