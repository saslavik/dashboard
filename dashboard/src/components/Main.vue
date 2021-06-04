<template>
    <v-card>
      <v-tabs
        center-active
        dark
      >
        <v-tab>Active auctions</v-tab>
        <v-tab>Closed auctions</v-tab>
        <v-tab>Listings</v-tab>
      </v-tabs>
    </v-card>
</template>

<script>
  export default {
    name: 'Main',

    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
