<script>
import Text from '../globalComponents/Text.vue';
import CardContainer from './CardComponents/CardContainer.vue';
export default {
  components: {Text, CardContainer},
  name: 'CardContainerByDate',
  props: {
    date: String,
    posts: Array,
  },
  computed: {
    LongDate() {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const d = new Date(this.date);
      return d.toLocaleDateString(undefined, options);
    },
  },
};
</script>

<template>
  <div class="dateContainer">
    <Text :text="LongDate" size="lr" color="grey" font="date" />
    <div class="cardsContainer">
      <CardContainer v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<style scoped>
.dateContainer {
  width: fit-content;
  height: fit-content;
  margin-bottom: 10px !important;
}
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;
}
</style>
