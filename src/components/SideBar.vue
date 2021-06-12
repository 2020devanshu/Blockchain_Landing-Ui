<template>

<v-navigation-drawer v-if="this.$store.state.authenticated" v-model="drawer" app clipped>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="./assets/man.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ data }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item-group >
          <v-list-item color="orange" v-for="(item, i) in items" :key="i" router :to="item.route">
            <v-list-item-icon>
              <v-icon color="orange--text" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="orange" v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
</template>

<script>
export default {
    data:() => ({
        selectedItem: 0,
        drawer: true,
        items: [
            {icon: 'fa fa-th-large', text:'Dashboard', route: '/'},
            {icon: 'fa fa-briefcase', text:'Buy MAG', route: '/deposit'},
            {icon: 'fas fa-chart-line', text:'P2P Transfer', route: '/transfer'},
            {icon: 'fa fa-credit-card', text:'Buy Transactions', route: '/buy-transaction'},
            {icon: 'fa fa-credit-card', text:'P2P Transactions', route: '/withdrawal-transaction'},
            {icon: 'fa fa-credit-card', text:'Refferal Transactions', route: '/refferal-transaction'},
            {icon: 'fas fa-coins', text:'MAG Ecosystem', route: '/mog'},
            {icon: 'fas fa-share-square', text:'MAG Smart', route: '/refferals'},
            {icon: 'fas fa-file-invoice-dollar', text:'Recharge', route: '/reacharge'},
            {icon: 'fas fa-user', text:'Profile', route: '/profile'},
            
        ]
    }),
}
</script>

<style>

</style>