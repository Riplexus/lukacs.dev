import { defineStore } from 'pinia';

export const useActiveSectionStore = defineStore('activeSection', {
  state: () => ({
    activeSections: [],
  }),
  actions: {
    addActiveSection(section) {
      if (this.activeSections.indexOf(section) !== -1) { return; }
      this.activeSections.push(section);
    },
    removeActiveSection(section) {
      const index = this.activeSections.indexOf(section);
      if (index === -1) { return; }
      this.activeSections.splice(index, 1);
    },
  },
});
