import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      text: 'Hello Vue',
    };
  },
  actions: {},
  getters: {},
});
