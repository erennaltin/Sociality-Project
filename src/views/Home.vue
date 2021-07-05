<script>
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue';

export default {
  name: 'Home',
  components: {
    LottieAnimation,
  },
};
</script>

<template>
  <div class="homeContainer">
    <LottieAnimation
      class="Lottie"
      path="welcome.json"
      :width="512"
      :height="512"
    />
  </div>
</template>

<style scoped>
.homeContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.Lottie {
  border-radius: 64px;
  -webkit-box-shadow: 5px 5px 15px 5px #a973ff, -9px 5px 15px 5px #51fbde,
    -7px -5px 15px 5px #a36eff, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #a973ff,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 15px 5px #a973ff, -9px 5px 15px 5px #51fbde,
    -7px -5px 15px 5px #a36eff, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #51fbde,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
}
</style>
