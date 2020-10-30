<template>
  <!-- <div id="app"> -->
  <v-app>

  <v-card
    class="overflow-hidden"
    style="margin-top:60px"
  >
    <v-app-bar
      color="white"
      light
      fixed
    >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Capture The Toyota</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
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
<!-- </div> -->
</v-app>
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
        name: 'Score',
        icon: 'mdi-counter',
        link: '/score'
      },
      {
        name: 'Help',
        icon: 'mdi-help-circle',
        link: '/help'
      },
      {
        name: 'Map',
        icon: 'mdi-map',
        link: '/map'
      },
      ],
    }),
};
</script>
