<template>
  <div class="cards">
    <Card
      v-for="card in listCard"
      :key="card.title"
      :title="card.title"
      :alt="card.alt"
      :path="card.path"
      :join="card.join"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue';

export default defineComponent({
  name: 'CardsGroup',
  data() {
    return {
      listCard: [
        {
          title: 'Rejoindre une partie',
          alt: 'cheers',
          path: 'cheers.svg',
          join: true,
        },
        {
          title: 'Créer une partie',
          alt: 'bottle',
          path: 'champagne2.svg',
          join: false,
        },
      ],
    };
  },
  components: { Card },
});
</script>

<style lang="scss" scoped>
.cards {
  width: 95%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 75px;
}
</style>
