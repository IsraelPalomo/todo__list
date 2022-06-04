import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      activeTab: '',
    };
  },
  actions: {
    setTab(value: string) {
      this.activeTab = value;
    },
  },
  getters: {},
});
