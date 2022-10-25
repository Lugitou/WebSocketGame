<template>
  <div class="salonInfo">
    <h2>SALON</h2>
    <div class="link">
      <div class="linkText">
        {{ roomName }}
      </div>
      <div class="linkImageWrapper">
        <button @click="copyToClipboard">
          <img src="../../assets/link.svg" alt="link" class="imgLink" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SalonInfo',
  computed: {
    roomName() {
      return this.$route.params.id;
    },
  },
  methods: {
    fetchRoomData() {
      console.log(this.$route.params.id);
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.roomName.toString());
    },
  },
  mounted() {
    this.fetchRoomData();
  },
});
</script>

<style lang="scss" scoped>
.salonInfo {
  margin-left: 8%;
  width: 85%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(96, 115, 151, 0.4);
  box-shadow: inset 0 0 0 8px white;
  border-radius: 25px;

  h2 {
    font-size: 150%;
    margin-top: 0;
  }

  .link {
    display: flex;
    justify-content: center;
    width: 80%;
    font-size: 250%;
    font-weight: bolder;
    letter-spacing: 8px;

    .linkText {
      padding-top: 5px;
    }

    .linkImageWrapper {
      margin-left: 25px;
      display: flex;
      align-items: center;

      button {
        background: none;
        border: none;
        .imgLink {
          position: relative;
          height: 30px;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
            filter: brightness(0) saturate(100%) invert(76%) sepia(10%) saturate(2463%)
              hue-rotate(338deg) brightness(113%) contrast(104%);
          }
        }
      }
    }
  }
}
</style>
