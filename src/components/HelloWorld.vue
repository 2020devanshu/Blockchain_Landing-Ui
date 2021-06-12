<template>
  <form >
          <v-text-field
            v-model="full_name"
            required
            label="Full Name"
            dense
            outlined
          ></v-text-field>
          <v-text-field
              required
              label="Phone Number"
              v-model="phone_number"
              dense
              outlined
          ></v-text-field>
          <v-text-field
              required
              label="Email"
              v-model="email"
              dense
              outlined
          ></v-text-field>
          <v-text-field
              required
              label="Password"
              dense
              outlined
              v-model="password"
          ></v-text-field>

          <v-btn depressed @click="handleSubmit()" class="orange darken-2 white--text">SIGN UP</v-btn>
      </form>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
