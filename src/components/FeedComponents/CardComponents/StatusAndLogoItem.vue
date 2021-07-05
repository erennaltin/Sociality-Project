<script>
import Icon from '../../globalComponents/Icon.vue';
export default {
  components: {Icon},
  name: 'StatusAndLogoItem',
  props: {
    status: Number,
    channel: String,
    link: String,
  },
  methods: {
    openURL() {
      this.link === undefined
        ? window.alert('Link could not be found!')
        : window.open(this.link, '_blank').focus();
    },
  },
  computed: {
    statusCode() {
      switch (this.status) {
        case 0:
          return 'background-color: #F7BF38;';
        case 1:
          return 'background-color: #3ac183;';
        case 2:
          // There is no example of "Publishing" in sketch file!
          return 'background-color: #ccc;';
        case 3:
          return 'background-color: #ACACAC;';
        case 4:
          return 'background-color: #FB6450;';
        default:
          return 'background-color: #FB6450;';
      }
    },
  },
};
</script>

<template>
  <div class="statusAndLogoContainer" :style="statusCode">
    <Icon class="icon" :icon="channel" @click="openURL" />
  </div>
</template>

<style scoped>
.statusAndLogoContainer {
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 18px;
  color: white;
  transition: width 0.3s;
  cursor: pointer;
}

.icon:hover {
  width: 22px;
}
</style>
