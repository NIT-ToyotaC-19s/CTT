<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <div class="d-flex align-center"> -->
        <h1>Capture The Toyota</h1>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      <!-- </div> -->

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-link to="/">home</router-link>
      <router-view />
      <!-- <router-link to="/catalog">catalog</router-link>, -->
      <!-- <router-link to="/question">question</router-link> -->
      <!-- <router-link :to="{name: 'Catalog', query: {id: 1}}">catalog</router-link>, -->
      <!-- <router-link :to="{name: 'Question', query: {id: 1}}">question</router-link>
      <router-view /> -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
