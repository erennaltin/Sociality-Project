<script>
import Icon from '../globalComponents/Icon.vue';
import Text from '../globalComponents/Text.vue';
export default {
  components: {Icon, Text},
  name: 'StatusMeaningItem',
  props: {
    color: String,
    text: String,
  },
  computed: {
    iconColor() {
      return 'Color' + this.color;
    },
  },
};
</script>

<template>
  <div class="statusMeaningItemContainer">
    <Icon :icon="iconColor" class="icon" />
    <Text size="md" color="black" :text="text" type="h2" />
  </div>
</template>

<style scoped>
.statusMeaningItemContainer {
  display: flex;
  align-items: center;
  width: fit-content;
  margin-right: 20px;
}

.icon {
  margin-right: 10px;
}
</style>
