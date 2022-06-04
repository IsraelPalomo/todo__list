<template>
  <div class="dashboard">
    <section class="dashboard__sidebar">
      <SideBar />
    </section>
    <section class="dashboard__main"><TasksMain /></section>
    <section class="dashboard__user-info">
      <UserInfo />
    </section>
  </div>
</template>

<script setup lang="ts">
import SideBar from '../components/Sidebar.vue';
import UserInfo from '../components/UserInfo.vue';
import TasksMain from '../components/TasksMain.vue';
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';
.dashboard {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  .dashboard__main {
    padding: 2rem;
    background-color: $bg;
  }
}
</style>
