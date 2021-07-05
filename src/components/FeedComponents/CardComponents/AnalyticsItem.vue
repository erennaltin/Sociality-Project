<script>
import Icon from '../../globalComponents/Icon.vue';
import Text from '../../globalComponents/Text.vue';
export default {
  components: {Icon, Text},
  name: 'AnalyticsItem',
  props: {
    name: {
      type: String,
      default: 'heart',
    },
  },
};
</script>

<template>
  <div class="AnalyticsItemContainer">
    <Icon :icon="name" />
    <Text size="sm" color="black" text="0" type="p" />
  </div>
</template>

<style scoped>
.AnalyticsItemContainer {
  display: flex;
  align-items: flex-end;
}
.AnalyticsItemContainer p {
  margin-left: 10px;
  margin-right: 20px;
}
</style>
