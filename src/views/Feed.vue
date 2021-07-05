<script>
import CardContainerByDate from '../components/FeedComponents/CardContainerByDate.vue';
import StatusMeaningItem from '../components/FeedComponents/StatusMeaningItem.vue';
import Text from '../components/globalComponents/Text.vue';
const posts_by_date = require('../../public/data.json').posts_by_date;
const dates = Object.keys(posts_by_date);

export default {
  components: {StatusMeaningItem, CardContainerByDate, Text},
  name: 'Feed',
  data() {
    return {
      posts_by_date: posts_by_date,
      dates: dates,
    };
  },
};
</script>

<template>
  <div class="feedViewContainer">
    <div class="statics">
      <div class="descriptions">
        <StatusMeaningItem color="1" text="Published" />
        <StatusMeaningItem color="2" text="Scheduled" />
        <StatusMeaningItem color="3" text="Need Approval" />
        <StatusMeaningItem color="4" text="Error" />
        <StatusMeaningItem color="5" text="Notes" />
      </div>
      <div class="profilePictureContainer">
        <img src="@/../public/Picture.jpg" />
      </div>
    </div>
    <div class="cardsByDates">
      <CardContainerByDate
        v-for="date in dates"
        :key="date"
        :date="date"
        :posts="posts_by_date[date]"
      />
      <div class="expander">
        <Text
          size="md"
          type="h1"
          text="Made by Eren Altın with ♪ ♫"
          color="grey"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.feedViewContainer {
  min-width: 675px;
  width: 100%;
  height: 100%;
  background-color: #f5f7f8;
  overflow: hidden;
}

.statics {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.descriptions {
  display: flex;
  margin-top: 38px;
  margin-left: 45px;
  width: fit-content;
}

.profilePictureContainer {
  /* position: absolute; */
  height: 63px;
  width: 63px;
  border-radius: 999px;
  overflow: hidden;
  right: 0;
  top: 0;
  margin-right: 51px;
  margin-top: 30px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.cardsByDates {
  margin-left: 45px;
  margin-top: 28px;
  max-width: 1200px;
  overflow-y: scroll;
  height: 100%;
}

.cardsByDates .expander {
  width: 100%;
  height: 100px;
}

.cardsByDates::-webkit-scrollbar {
  display: none;
}
</style>
