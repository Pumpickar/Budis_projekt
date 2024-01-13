<template>
  <v-app>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>Kontakt</v-card-title>
      <v-form ref="form" @submit.prevent="submitForm">
        <v-text-field
          label="Email"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-textarea label="Správa" v-model="message" required></v-textarea>
        <v-btn type="submit" color="primary">Odoslať</v-btn>
      </v-form>
      <v-list two-line>
        <v-list-item v-for="(contact, index) in contacts" :key="index">
          <v-list-item-title>{{ contact.message }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-app>
</template>

<script>
import { useContactStore } from '@/stores/contactStore';

export default {
  data() {
    return {
      email: '',
      message: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mailová adresa musí byť platná.',
      ],
    };
  },
  computed: {
    contacts() {
      return useContactStore().contacts;
    },
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        useContactStore().saveContact({ email: this.email, message: this.message });
        this.email = '';
        this.message = '';
      }
    },
  },
};
</script>
