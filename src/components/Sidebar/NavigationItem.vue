<script>
import Icon from '../globalComponents/Icon.vue';
import Text from '../globalComponents/Text.vue';

export default {
  components: {Text, Icon},
  name: 'NavigationItem',
  props: {
    text: {
      type: String,
      default: 'NOTIFICATIONS',
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
    isTitle: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    upperTitle() {
      return this.text.toUpperCase();
    },
    iconName() {
      const route = this.$route.name;
      if (route === this.text) return 'DefaultOn';
      return this.isExpanded ? this.text + 'On' : this.text;
    },
    expandIcon() {
      return this.isExpanded ? 'SeeLess' : 'SeeMore';
    },
    navigationItemContainerClass() {
      return this.isDisabled
        ? 'navigationItemContainer disabled'
        : this.isExpanded
        ? 'navigationItemContainer expanded'
        : 'navigationItemContainer';
    },
    textColor() {
      const route = this.$route.name;
      return route === this.text ? 'lightred' : 'white';
    },
  },
  methods: {
    setRoute() {
      if (!this.isTitle && !this.isDisabled) {
        this.$router.push(this.text.toLowerCase());
      }
    },
  },
};
</script>

<template>
  <div class="outerNavigationItemContainer" @click="setRoute">
    <p></p>
    <div :class="navigationItemContainerClass">
      <div class="iconContainer">
        <Icon :icon="iconName" class="icon" />
      </div>
      <div class="textContainer">
        <Text
          size="md"
          :color="textColor"
          :text="isTitle ? upperTitle : text"
          type="h1"
        />
      </div>
      <div class="expandContainer" v-if="isTitle">
        <Text
          size="sm"
          color="white"
          type="p"
          text="29"
          class="notificationText"
          v-if="text === 'Notifications'"
        />
        <Icon :icon="expandIcon" class="expandIcon" v-else />
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigationItemContainer {
  height: 50px;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 1fr;
  cursor: pointer;
}

.iconContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  transform: translateX(+5px);
}

.textContainer {
  display: flex;
  align-items: center;
}

.expandContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.expandIcon {
  transform: translateX(-5px);
}

.expanded {
  background-color: #f55661;
}

.expanded::after {
  content: '';
  position: absolute;
  height: 16px;
  width: 16px;
  background-color: #f55661;
  border-radius: 2px;
  transform-origin: center;
  transform: translateY(40px) translateX(22px) rotate(45deg);
}

.disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.notificationText {
  border: 1px solid #73d9c7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 17px;
  transform: translateX(-5px);
}
</style>
