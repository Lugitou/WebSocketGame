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
</style>
