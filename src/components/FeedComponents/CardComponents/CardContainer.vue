<script>
import Text from '../../globalComponents/Text.vue';
import PostAnalytics from './PostAnalytics.vue';
import PostHeader from './PostHeader.vue';
import StatusAndLogoItem from './StatusAndLogoItem.vue';
import defaultImage from '@/assets/no-post-image.png';

export default {
  components: {
    Text,
    StatusAndLogoItem,
    PostHeader,
    PostAnalytics,
  },
  name: 'CardContainer',
  props: {
    post: Object,
  },
  methods: {
    checkImage(e) {
      e.target.src = defaultImage;
    },
  },
};
</script>

<template>
  <div class="cardContainer">
    <StatusAndLogoItem
      :status="post.status"
      :channel="post.account.channel"
      :link="post.link"
    />
    <div class="outerPostContainer">
      <div class="postContainer">
        <PostHeader :date="post.published_at" :status="post.status" />
        <div class="postInformationContainer">
          <Text size="md" color="grey" :text="post.entry.message" type="p" />
          <img :src="post.entry.image" @error="checkImage" />
        </div>
        <PostAnalytics :channel="post.account.channel" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardContainer {
  width: 368px;
  min-height: 426px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  margin-right: 30px;
  margin-bottom: 30px;
}

.outerPostContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.postContainer {
  width: 287px;
  height: 100%;
}

.postInformationContainer {
  width: 100%;
  margin-top: 22px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.postInformationContainer img {
  width: 283px;
  height: 239px;
  margin-top: 16px;
}
</style>
