<template>
  <div id="app">
    <!-- <v-app-bar
      app
      color="gray"
      dark
    > -->
      <!-- <div class="d-flex align-center"> -->
        <!-- <h1>Capture The Toyota</h1> -->
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
    <!-- </v-app-bar> -->

    <!-- <v-main> -->
      <!-- <router-link to="/">home</router-link> -->
      <!-- <router-view /> -->
      <!-- <router-link to="/catalog">catalog</router-link>,<router-view /> -->
      <!-- <router-link to="/question">question</router-link> -->
      <!-- <router-link :to="{name: 'Catalog', query: {id: 1}}">catalog</router-link>, -->
      <!-- <router-link :to="{name: 'Question', query: {id: 1}}">question</router-link>
      <router-view /> -->
    <!-- </v-main> -->




  <v-card
    class="mx-auto overflow-hidden"
    style="margin-top:60px"
  >
    <v-app-bar
      color="deep-purple"
      light
      fixed
    >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Capture The Toyota</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item v-for="list in lists" :key="list.name" :to="list.link">
            <v-list-item-icon>
              <v-icon>{{ list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ list.name }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
  </v-card>
</div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
      drawer: false,
      group: null,
      lists:[
        {
        name: 'Home',
        icon: 'mdi-home',
        link:'/'
      },
      {
        name: 'Catalog',
        icon: 'mdi-file-question',
        link:'/catalog'
      },
      {
        name: 'Help',
        icon: 'mdi-help-circle',
        link: '/help'
      },
      ],
    }),
};
</script>
