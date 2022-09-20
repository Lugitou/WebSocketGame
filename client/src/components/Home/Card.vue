<template>
  <div :class="join ? 'card joinGame' : 'card hostGame'">
    <h2>{{ title }}</h2>
    <img :alt="alt" :src="require(`../../assets/${path}`)" />
    <div v-if="join" class="wrapperRoom">
      <label for="room">
        <input type="text" name="room" placeholder="Entrer le code du salon" />
        <button><img alt="caret" src="../../assets/caret-right.svg" /></button>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    title: String,
    alt: String,
    path: String,
    join: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.card {
  height: 60%;
  width: 30%;
  border: 8px solid white;
  border-radius: 25px;
  font-weight: bold;
  opacity: 0;
  animation: openBottom 1s ease-in forwards;
  animation-delay: 1.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  &:hover {
    box-shadow: rgba(255, 0, 0, 0.3) 0px 19px 38px, rgba(255, 0, 0, 0.22) 0px 15px 12px;
  }

  /*transition: width 0.5s ease-in-out, height 0.5s ease-in-out;

        &:hover {
          width: 32%;
          height: 62%;
        }*/

  img {
    width: 50%;
    height: 50%;
  }

  &.joinGame {
    position: relative;
    background: #e0267d;

    * {
      transition: transform 0.5s ease-in-out;
    }

    &:hover {
      h2 {
        transform: scale(1.1);
      }

      img {
        transform: scale(0.9);
      }

      .wrapperRoom {
        opacity: 1;
        bottom: 35px;
      }
    }

    .wrapperRoom {
      opacity: 0;
      position: absolute;
      bottom: 0px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      gap: 10px;
      transition: opacity 0.5s ease-in-out, bottom 0.5s ease-in-out;

      label {
        width: 75%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        input {
          height: 100%;
          width: 90%;
          border: 5px solid white;
          background: #e0267d;
          border-radius: 15px;
          color: white;
          font-size: 110%;
          padding: 5px;
          font-weight: bold;
          padding-left: 15px;

          &:focus {
            outline: 0;
          }
        }

        button {
          height: 100%;
          width: 10%;
          background: #e0267d;
          border: 5px solid white;
          border-radius: 15px;
          color: white;
          box-sizing: content-box;
          padding: 5px;
          transition: transform 0.5s ease-in-out;
          cursor: pointer;

          &:hover {
            img {
              transform: translateX(5px);
            }
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  &.hostGame {
    cursor: pointer;
    background: #62b5bd;
    * {
      transition: transform 0.5s ease-in-out;
    }

    &:hover {
      h2 {
        transform: scale(1.1);
      }

      img {
        transform: scale(0.9);
      }
    }
  }

  h2 {
    margin-top: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
