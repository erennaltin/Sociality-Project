<script>
export default {
  name: 'Text',
  props: {
    size: {
      type: String,
      default: 'md',
    },
    text: {
      type: String,
      default: 'Hello!',
    },
    color: {
      type: String,
      default: 'grey',
    },
    type: {
      type: String,
      default: 'p',
    },
    font: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    className() {
      return `${this.font} ${this.size} ${this.color}`;
    },
  },
};
</script>
<template>
  <component :is="type" :class="className">{{ text }}</component>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed&display=swap');
.default {
  font-family: 'Raleway', sans-serif;
}

.date {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 100 !important;
}

.sm {
  font-size: 12px;
}

.md {
  font-size: 14px;
}

.lr {
  font-size: 22px;
}

.white {
  color: white;
}

.grey {
  color: #959595;
  font-weight: bold;
}

.lightgrey {
  color: #acacac;
}

.black {
  color: #444444;
}

.lightred {
  color: #f55661;
}
</style>
