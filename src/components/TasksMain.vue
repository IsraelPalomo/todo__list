<template>
  <div class="tasks__main">
    <header class="header">
      <h2 class="title">{{ useStore().activeTab }}</h2>
      <button class="btn">
        <Pencil :color="colors.black" :size="15" />Edit
      </button>
    </header>
    <section class="list__tab">
      <TabSet defaultTabSelect="Marketing"
        ><Tab title="Marketing"></Tab><Tab title="Develop"></Tab
        ><Tab title="Design"></Tab
      ></TabSet>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Pencil } from 'lucide-vue-next';
import { colors } from '../assets/ts/colors';
import TabSet from './UI/TabSet.vue';
import Tab from './UI/Tab.vue';
import { Ref, ref } from 'vue';
import { useStore } from '../store/index';

let TabSelected: Ref<string> = ref('');
const titleTabActive = (title: string) => {
  TabSelected.value = title;
};
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';

.tasks__main {
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    .btn {
      height: fit-content;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: none;
      padding: 0.4rem;
      background-color: $white--hv;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: $white;
      }
    }
  }
}
</style>
