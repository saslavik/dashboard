<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app dark dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>