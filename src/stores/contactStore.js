import { defineStore } from 'pinia';

export const useContactStore = defineStore({
  id: 'contact',
  state: () => ({
    contacts: [],
  }),
  actions: {
    saveContact(contact) {
      this.contacts.push(contact);
    },
  },
});
