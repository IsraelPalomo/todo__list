<template>
  <div
    class="tab"
    :class="useStore().activeTab == title ? 'tab--active' : ''"
    @click="useStore().setTab(title)"
  >
    <slot>
      <p>{{ title }}</p>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useStore } from '../../store/index';

const props = defineProps({
  title: { type: String, default: 'Tab', required: true },
});
</script>

<style scoped lang="scss">
@import '../../assets/scss/main.scss';
.tab {
  cursor: pointer;
  color: $black__hv;
}
.tab--active {
  color: $orange;
  border-bottom: 1px solid $orange;
}
</style>
