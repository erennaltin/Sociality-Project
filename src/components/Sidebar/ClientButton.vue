<script>
export default {
  name: 'ClientButton',
  props: {
    clientName: {
      type: String,
      default: 'Logo1',
    },
  },
  computed: {
    imageURL() {
      const image = require(`../../../public/Logos/${this.clientName}.jpg`);
      return image;
    },
    isSelected() {
      const selectedClient = this.$store.state.client;
      return selectedClient === this.clientName ? true : false;
    },
  },
  methods: {
    makeSelected() {
      this.$store.commit('setClient', this.clientName);
    },
  },
};
</script>

<template>
  <div class="clientLogoContainer" @click="makeSelected">
    <div v-if="isSelected" class="pointer" />
    <img
      :src="imageURL"
      :alt="clientName"
      :class="isSelected ? 'imageContainer' : 'imageContainer disabled'"
    />
  </div>
</template>

<style scoped>
.clientLogoContainer {
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 4px 1fr;
  grid-template-areas: 'A B';
  justify-items: center;
  align-items: center;
  align-content: center;
  /* margin-top: 9px; */
  /* margin-bottom: 13px; */
}

.imageContainer {
  grid-area: B;
  width: 37px;
  height: 37px;
  border-radius: 8px;
  overflow: hidden;
  transform: translateX(-4px);
  transition: 0.3s;
}

.disabled:hover {
  opacity: 1;
}

.pointer {
  width: 8px;
  height: 37px;
  background-color: #f55661;
  align-self: flex-start;
  transform: translateX(-2px);
  border-radius: 8px;
}

.disabled {
  opacity: 0.2;
}
</style>
