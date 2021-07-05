<script>
import NavigationItem from './NavigationItem.vue';
import {useStore} from 'vuex';
import {computed, ref, watch} from '@vue/runtime-core';

export default {
  components: {NavigationItem},
  name: 'NavigationTitle',
  props: {
    text: String,
    isTitle: Boolean,
  },
  setup(props) {
    const store = useStore();
    const navigation = computed(() => store.state.navigation);
    const isExpanded = ref(false);
    const underItemClass = ref('navigationTextContainer invisible');
    watch(navigation, newValue => {
      isExpanded.value = newValue === props.text ? true : false;
      setUnderItemVisible();
    });
    isExpanded.value = false;
    const makeSelectedNavigationItem = () => {
      !isExpanded.value && props.isTitle
        ? store.commit('setNavigation', props.text)
        : store.commit('setNavigation', '');
    };

    const setUnderItemVisible = () => {
      underItemClass.value = isExpanded.value
        ? 'navigationTextContainer visible'
        : 'navigationTextContainer';
    };

    return {isExpanded, makeSelectedNavigationItem, underItemClass};
  },
};
</script>
<template>
  <div :class="underItemClass">
    <NavigationItem
      :text="text"
      :isExpanded="isExpanded"
      :isTitle="isTitle"
      @click="makeSelectedNavigationItem"
    />
    <slot />
  </div>
</template>

<style scoped>
.navigationTextContainer {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 1.5s linear;
  max-height: 50px;
  background-color: transparent;
}

.visible {
  transition: max-height 3s linear !important;
  max-height: 999px;
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
