<script>
import AnalyticsItem from './AnalyticsItem.vue';
export default {
  components: {AnalyticsItem},
  name: 'PostAnalytics',
  props: {
    channel: String,
  },
};
</script>

<template>
  <div>
    <div class="postAnalyticsContainer" v-if="channel === 'twitter'">
      <AnalyticsItem name="heart" />
      <AnalyticsItem name="shares_tw" />
      <AnalyticsItem name="comments" />
      <AnalyticsItem name="views" />
    </div>
    <div class="postAnalyticsContainer" v-else>
      <AnalyticsItem name="likes" />
      <AnalyticsItem name="comments" />
      <AnalyticsItem name="shares" />
      <AnalyticsItem name="views" />
    </div>
  </div>
</template>

<style scoped>
.postAnalyticsContainer {
  display: flex;
  margin-top: 18px;
  margin-bottom: 30px;
}
</style>
