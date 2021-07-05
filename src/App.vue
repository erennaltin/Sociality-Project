<script>
import Sidebar from '@/components/Sidebar/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<template>
  <div class="appContainer">
    <Sidebar />
    <router-view />
  </div>
</template>

<style>
.appContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 274px 1fr;
}
</style>
