<template>
  <div class="GameParameters"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameParameters',
});
</script>

<style lang="scss" scoped>
.GameParameters {
  margin-left: 8%;
  width: 85%;
  height: 65%;
  background: rgba(96, 115, 151, 0.4);
  box-shadow: inset 0 0 0 8px white;
  border-radius: 25px;
}
</style>
