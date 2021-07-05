<script>
import Engage from '@/../public/icons/ENGAGE.svg';
import EngageOn from '@/../public/icons/ENGAGEON.svg';
import Listen from '@/../public/icons/LISTEN.svg';
import ListenOn from '@/../public/icons/LISTENON.svg';
import Notifications from '@/../public/icons/NOTIFICATIONS.svg';
import NotificationsOn from '@/../public/icons/NOTIFICATIONSON.svg';
import Publish from '@/../public/icons/PUBLISH.svg';
import PublishOn from '@/../public/icons/PUBLISHON.svg';
import Report from '@/../public/icons/REPORT.svg';
import ReportOn from '@/../public/icons/REPORTON.svg';
import Summary from '@/../public/icons/SUMMARY.svg';
import SummaryOn from '@/../public/icons/SUMMARYON.svg';
import SeeMore from '@/../public/icons/SeeMore.svg';
import SeeLess from '@/../public/icons/SeeLess.svg';
import Default from '@/../public/icons/Default.svg';
import DefaultOn from '@/../public/icons/DefaultOn.svg';
import Color1 from '@/../public/icons/Color1.svg';
import Color2 from '@/../public/icons/Color2.svg';
import Color3 from '@/../public/icons/Color3.svg';
import Color4 from '@/../public/icons/Color4.svg';
import Color5 from '@/../public/icons/Color5.svg';
import remove from '@/../public/icons/remove.svg';
import approve from '@/../public/icons/approve.svg';
import cancel from '@/../public/icons/cancel.svg';
import options from '@/../public/icons/options.svg';
import comments from '@/../public/icons/reactions/comments.svg';
import heart from '@/../public/icons/reactions/heart.svg';
import likes from '@/../public/icons/reactions/likes.svg';
import shares from '@/../public/icons/reactions/shares.svg';
import shares_tw from '@/../public/icons/reactions/shares_tw.svg';
import views from '@/../public/icons/reactions/views.svg';
import facebook from '@/../public/icons/facebook.svg';
import twitter from '@/../public/icons/twitter.svg';
import instagrambusiness from '@/../public/icons/instagram.svg';

export default {
  name: 'Icon',
  components: {
    Engage,
    EngageOn,
    Listen,
    ListenOn,
    Notifications,
    NotificationsOn,
    Publish,
    PublishOn,
    Report,
    ReportOn,
    Summary,
    SummaryOn,
    SeeMore,
    SeeLess,
    Default,
    DefaultOn,
    Color1,
    Color2,
    Color3,
    Color4,
    Color5,
    cancel,
    remove,
    options,
    approve,
    comments,
    heart,
    likes,
    shares,
    shares_tw,
    views,
    facebook,
    twitter,
    instagrambusiness,
  },
  props: {
    icon: {
      type: String,
      default: 'Notifications',
    },
  },
  computed: {
    iconName() {
      let iconList = Object.keys(this.$.components);
      let isInside = iconList.includes(this.icon);
      return isInside ? this.icon : 'Default';
    },
  },
};
</script>

<template>
  <component :is="iconName" />
</template>

<style scoped></style>
