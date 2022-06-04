<template>
  <div class="dashboard">
    <section class="dashboard__sidebar">
      <SideBar />
    </section>
    <section class="dashboard__main"></section>
    <section class="dashboard__user-info"></section>
  </div>
</template>

<script setup lang="ts">
import SideBar from '../components/Sidebar.vue';
</script>

<style scoped lang="scss">
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
