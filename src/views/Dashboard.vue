<template>
  <div class="dashboard">
    <section class="dashboard__sidebar">
      <SideBar />
    </section>
    <section class="dashboard__main">
      <header class="header">
        <h2 class="title">Marketing</h2>
        <button class="btn">
          <Pencil :color="colors.black" :size="15" />Edit
        </button>
      </header>
    </section>
    <section class="dashboard__user-info"></section>
  </div>
</template>

<script setup lang="ts">
import SideBar from '../components/Sidebar.vue';
import { Pencil } from 'lucide-vue-next';
import { colors } from '../assets/ts/colors';
</script>

<style scoped lang="scss">
@import '../assets/scss/main.scss';
.dashboard {
  display: grid;
  grid-template-columns: min-content 1fr 1fr;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  .dashboard__main {
    padding: 2rem;
    background-color: $bg;
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
        background-color: $white;
      }
    }
  }
}
</style>
