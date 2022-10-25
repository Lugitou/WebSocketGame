<template>
  <div class="PlayersList"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayersList',
});
</script>

<style lang="scss" scoped>
.PlayersList {
  margin-right: 8%;
  width: 85%;
  height: 90%;
  background: rgba(96, 115, 151, 0.4);
  box-shadow: inset 0 0 0 8px white;
  border-radius: 25px;
}
</style>
