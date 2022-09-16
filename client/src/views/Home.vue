<template>
  <div class="home">
    <div class="wrapperLogo">
      <img alt="" src="../assets/Logo.svg" class="homeLogo" />
    </div>
    <div class="mainMenu">
      <div class="header">
        <div class="title">
          <img class="logo" src="../assets/Logo.svg" alt="" />
          <h1>GROS POULET</h1>
        </div>
        <div class="navBar">
          <a class="iconMenu">
            <img alt="iconPlay" src="../assets/book.svg" />
            <p>Règles</p></a
          >
          <a class="iconMenu">
            <img class="ribbon" alt="iconLeader" src="../assets/ribbon.svg" />
            <p>Succès</p>
          </a>
        </div>
        <div class="signIn">
          <a class="iconMenu">
            <img alt="iconLogin" src="../assets/login.svg" />
            <p>Profil</p></a
          >
        </div>
      </div>
      <div class="cards">
        <div class="joinGame card">
          <h2>Rejoindre une partie</h2>
          <img alt="cheers" src="../assets/cheers.svg" />
          <div class="wrapperRoom">
            <label for="room">
              <input type="text" name="room" placeholder="Entrer le code du salon" />
              <button><img alt="caret" src="../assets/caret-right.svg" /></button>
            </label>
          </div>
        </div>
        <div class="hostGame card">
          <h2>Créer une partie</h2>
          <img alt="bottle" src="../assets/champagne2.svg" />
        </div>
      </div>
      <footer>Copyright 2022</footer>
    </div>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Baumans&family=Dangrek&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
.iconMenu {
  position: relative;
  width: 100px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(0) saturate(100%) invert(76%) sepia(10%) saturate(2463%) hue-rotate(338deg)
      brightness(113%) contrast(104%);
    p {
      animation: popFromIcon 0.25s ease-in-out forwards;
    }
  }

  img {
    position: absolute;
    width: 55px;
    height: 55px;
  }

  p {
    font-size: 75%;
    padding-top: 50px;
    position: absolute;
    animation: hideFromIcon 0.25s ease-in-out forwards;
  }
}

@keyframes popFromIcon {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(25px);
  }
}

@keyframes hideFromIcon {
  0% {
    opacity: 1;
    transform: translateY(25px);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}

.home {
  font-family: 'Inter';
  font-size: 140%;
  font-weight: 500;
  width: 100%;
  height: 100%;
  position: relative;

  .wrapperLogo {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .homeLogo {
      width: 50%;
      height: 50%;
      animation: homeLogo 0.2s ease-in forwards;
      position: absolute;
      margin: auto;
    }
  }

  .mainMenu {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cards {
      width: 95%;
      height: 85%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 75px;

      .card {
        height: 60%;
        width: 30%;
        border: 8px solid white;
        border-radius: 25px;
        font-weight: bold;
        opacity: 0;
        animation: openBottom 1s ease-in forwards;
        animation-delay: 0.2s;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

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
    }

    .header {
      color: white;
      width: 95%;
      height: 15%;
      display: flex;
      justify-content: space-between;

      .title {
        font-family: 'Baumans';
        font-size: 125%;
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        opacity: 0;
        animation: openLeft 1s ease-in forwards;
        animation-delay: 0.2s;

        .logo {
          width: 75px;
          height: 75px;
        }
      }

      .navBar {
        width: 30%;
        display: flex;
        align-items: center;
        gap: 50px;
        justify-content: center;
        font-weight: bold;
        opacity: 0;
        animation: openTop 1s ease-in forwards;
        animation-delay: 0.2s;
      }

      .signIn {
        width: 30%;
        display: flex;
        gap: 35px;
        align-items: center;
        justify-content: flex-end;
        font-weight: bold;
        opacity: 0;
        animation: openRight 1s ease-in forwards;
        animation-delay: 0.2s;
      }
    }

    footer {
      color: #2e2653;
      font-size: 75%;
    }
  }
}

@keyframes homeLogo {
  0% {
    opcatity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  75% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(0);
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
