<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
});
</script>
