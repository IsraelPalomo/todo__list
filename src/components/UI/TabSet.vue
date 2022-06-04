<template>
  <div class="tab__set">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../../store/index';
import Tab from './Tab.vue';
const props = defineProps({
  defaultTabSelect: { type: String, required: true, default: '' },
});

useStore().setTab(props.defaultTabSelect);
</script>

<style scoped lang="scss">
.tab__set {
  display: flex;
  gap: 1.5rem;
}
</style>
