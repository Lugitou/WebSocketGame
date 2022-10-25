<template>
  <div class="Lobby">
    <div class="leftSide"><SalonInfo /><GameParameters /></div>
    <div class="rightSide"><PlayersList /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SalonInfo from '@/components/Lobby/SalonInfo.vue';
import PlayersList from '@/components/Lobby/PlayersList.vue';
import GameParameters from '@/components/Lobby/GameParameters.vue';

export default defineComponent({
  name: 'Lobby',
  computed: {
    room() {
      return this.$route.params.id;
    },
  },
  mounted() {
    console.log(this.room);
  },
  components: { SalonInfo, PlayersList, GameParameters },
});
</script>

<style lang="scss" scoped>
.Lobby {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .leftSide {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
  }

  .rightSide {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
