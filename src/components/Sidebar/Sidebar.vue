<script>
import SocialityLogo from '@/../public/sociality-logo.svg';
import ClientButton from './ClientButton.vue';
import NavigationItem from './NavigationItem.vue';
import NavigationTitle from './NavigationTitle.vue';

export default {
  name: 'Sidebar',
  components: {
    SocialityLogo,
    ClientButton,
    NavigationItem,
    NavigationTitle,
  },
  data() {
    return {
      clients: ['Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5', 'Logo6'],
    };
  },
};
</script>

<template>
  <div class="SidebarContainer">
    <div class="titleContainer">
      <SocialityLogo />
    </div>
    <div class="navigationContainer">
      <div class="clientLogos">
        <ClientButton
          v-for="client in clients"
          :key="client"
          :clientName="client"
        />
      </div>
      <div class="navigationItems">
        <NavigationTitle text="Notifications" isTitle>
          <NavigationItem text="Item 1" isDisabled />
          <NavigationItem text="Item 2" isDisabled />
        </NavigationTitle>
        <NavigationTitle text="Summary" isTitle>
          <NavigationItem text="Compose" />
          <NavigationItem text="Feed" />
        </NavigationTitle>
        <NavigationTitle text="Publish" isTitle>
          <NavigationItem text="Item 1" isDisabled />
          <NavigationItem text="Item 2" isDisabled />
        </NavigationTitle>
        <NavigationTitle text="Engage" isTitle>
          <NavigationItem text="Item 1" isDisabled />
          <NavigationItem text="Item 2" isDisabled />
        </NavigationTitle>
        <NavigationTitle text="Listen" isTitle>
          <NavigationItem text="Item 1" isDisabled />
          <NavigationItem text="Item 2" isDisabled />
        </NavigationTitle>
        <NavigationTitle text="Report" isTitle>
          <NavigationItem text="Item 1" isDisabled />
          <NavigationItem text="Item 2" isDisabled />
        </NavigationTitle>
      </div>
    </div>
  </div>
</template>

<style scoped>
.SidebarContainer {
  width: 274px;
  height: 100%;
  background-color: #31363b;
}

.titleContainer {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #707070;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigationContainer {
  display: grid;
  height: 100%;
  grid-template-columns: 66px 1fr;
}

.clientLogos {
  border-right: 1px solid #707070;
}
</style>
