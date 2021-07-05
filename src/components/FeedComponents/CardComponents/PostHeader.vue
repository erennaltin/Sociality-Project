<script>
import Icon from '../../globalComponents/Icon.vue';
import Text from '../../globalComponents/Text.vue';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
export default {
  components: {Icon, Text},
  name: 'PostHeader',
  props: {
    date: String,
    status: Number,
  },
  computed: {
    LongDate() {
      const timeList = this.date.split(' ');
      const longDate = new Date(timeList[0]).toLocaleDateString(
        undefined,
        options,
      );
      const clock = timeList[1].slice(0, 5);
      return `${longDate} - ${clock}`;
    },
  },
};
</script>

<template>
  <div class="header">
    <Text size="md" color="lightgrey" :text="LongDate" />
    <div class="postControls">
      <Icon icon="approve" v-if="status === 0" />
      <Icon icon="cancel" v-if="status !== 3 && status !== 0" />
      <Icon icon="remove" />
      <Icon icon="options" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  margin-top: 27px;
  justify-content: space-between;
  align-items: center;
}

.postControls {
  display: flex;
  align-items: center;
}

.postControls svg {
  margin-left: 20px;
  opacity: 0.5;
  transition: opacity 0.4s;
  cursor: pointer;
}

.postControls svg:hover {
  opacity: 1;
}
</style>
