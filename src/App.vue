<template>
  <v-app>
    <v-app-bar app fixed clipped-left outlined class=".nav-bar" color="white">
      <v-app-bar-nav-icon
        v-if="this.$store.state.authenticated"
        color="indigo darken-4"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-nav-icon
        v-if="this.$store.state.adminAuthentication"
        color="indigo darken-4"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-nav-icon
        v-if="
          !this.$store.state.authenticated &&
          !this.$store.state.adminAuthentication
        "
        class="indigo--text text--darken-4 d-block d-md-none d-lg-none"
        @click="menu = !menu"
      ></v-app-bar-nav-icon>
      <router-link to="/"
        ><v-toolbar-title class="grey--text text--darken-3"
          ><div class="title">
            <img class="logo" src="./assets/logo-fizz.png" alt="" />
            <h4>Fizzcoin</h4>
          </div></v-toolbar-title
        ></router-link
      >
      <v-spacer></v-spacer>
      <div v-if="this.$store.state.authenticated">
        <v-btn depressed class="indigo darken-4 white--text" @click="logOut()"
          >LOG OUT</v-btn
        >
      </div>
      <div v-if="this.$store.state.adminAuthentication">
        <v-btn depressed class="indigo darken-4 white--text" @click="logOut()"
          >LOG OUT</v-btn
        >
      </div>
      <div
        class="d-none d-md-flex d-lg-flex"
        v-if="
          !this.$store.state.authenticated &&
          !this.$store.state.adminAuthentication
        "
      >
        <router-link class="links" to="/about"
          ><v-btn depressed color="indigo--text text--darken-4"
            >About</v-btn
          ></router-link
        >
        <router-link class="links" to="/contact"
          ><v-btn depressed color="indigo--text text--darken-4"
            >Contact</v-btn
          ></router-link
        >
        <router-link class="links" to="/ico"
          ><v-btn depressed color="indigo--text text--darken-4"
            >ICO</v-btn
          ></router-link
        >
        <router-link class="links" to="/nfc"
          ><v-btn depressed color="indigo--text text--darken-4"
            >NFT</v-btn
          ></router-link
        >

        <router-link class="links" to="/sign-in">
          <v-btn depressed color="indigo--text text--darken-4"
            >Log In</v-btn
          ></router-link
        >
        <router-link class="links" to="/sign-up"
          ><v-btn depressed color="indigo--text text--darken-4"
            >Register</v-btn
          ></router-link
        >
      </div>
      <div
        v-if="!this.$store.state.adminAuthentication && !this.$store.state.authenticated"
        class="d-flex d-md-none d-lg-none"
      >
        <router-link class="links" to="/sign-in">
          <v-btn depressed color="indigo--text text--darken-4"
            >Log In</v-btn
          ></router-link
        >
        <router-link class="links" to="/sign-up"
          ><v-btn depressed color="indigo--text text--darken-4"
            >Register</v-btn
          ></router-link
        >
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-if="
        !this.$store.state.authenticated &&
        !this.$store.state.adminAuthentication
      "
      class="d-block d-md-none d-lg-none"
      v-model="menu"
      app
      clipped
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img v-if="!profile" src="./assets/logo-fizz.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Fizz</v-list-item-title>
            <v-list-item-subtitle>Welcome</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item-group>
          <v-list-item color="indigo" router to="/about">
            <v-list-item-icon>
              <v-icon color="indigo--text">fa fa-th-large</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="indigo" router to="/contact">
            <v-list-item-icon>
              <v-icon color="indigo--text">fa fa-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="indigo" router to="/ico">
            <v-list-item-icon>
              <v-icon color="indigo--text">fas fa-chart-line</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">ICO</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="indigo" router to="/">
            <v-list-item-icon>
              <v-icon color="indigo--text">fa fa-user</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">NFT</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-if="this.$store.state.adminAuthentication"
      v-model="drawer"
      app
      clipped
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img v-if="profile" :src="data.photo"></v-img>
            <v-img v-if="!profile" src="./assets/man.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ data.name }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
          <v-divider></v-divider>
        </v-list-item>
      </template>
      <v-list nav>
        <v-list-item color="indigo" router to="/admin-home">
          <v-list-item-icon>
            <v-icon color="indigo--text">fa fa-th-large</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title color="indigo">Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="indigo" router to="/users">
          <v-list-item-icon>
            <v-icon color="indigo--text">fa fa-user</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title color="indigo">Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="indigo" router to="/transactions">
          <v-list-item-icon>
            <v-icon color="indigo--text">fa fa-briefcase</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title color="indigo">Transactions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="indigo" router to="/distribution">
          <v-list-item-icon>
            <v-icon color="indigo--text">fas fa-chart-line</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title color="indigo">KYC</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-if="this.$store.state.authenticated"
      v-model="drawer"
      app
      clipped
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img v-if="profile" :src="data.photo"></v-img>
            <v-img v-if="!profile" src="./assets/man.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ data.name }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item-group>
          <v-list-item color="indigo" router to="/">
            <v-list-item-icon>
              <v-icon color="indigo--text">fa fa-th-large</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="indigo" router to="/deposit">
            <v-list-item-icon>
              <v-icon color="indigo--text">fa fa-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">Buy Fizz</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="indigo" router to="/transfer">
            <v-list-item-icon>
              <v-icon color="indigo--text">fas fa-chart-line</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">P2P Transfer</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon color="indigo--text">fa fa-credit-card</v-icon>
              </v-list-item-icon>
              <v-list-item-title color="indigo">History</v-list-item-title>
            </template>
            <v-list-item color="indigo" router to="/buy-transaction">
              <v-list-item-icon>
                <v-icon color="indigo--text">fa fa-credit-card</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title color="indigo"
                  >Buy History</v-list-item-title
                >
              </v-list-item-content>
              
            </v-list-item>
            <v-list-item color="indigo" router to="/withdrawal-transaction">
              <v-list-item-icon>
                <v-icon color="indigo--text">fa fa-credit-card</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title color="indigo"
                  >P2P History</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="indigo" router to="/coin">
              <v-list-item-icon>
                <v-icon color="indigo--text">fa fa-credit-card</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title color="indigo"
                  >Coin Refferal</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item color="indigo" router to="/profile">
            <v-list-item-icon>
              <v-icon color="indigo--text">fa fa-user</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">Refferal</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="indigo" router to="/refferal">
            <v-list-item-icon>
              <v-icon color="indigo--text">fa fa-user</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="indigo">Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <transition
        name="router-anim"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Crypto from "crypto-js";
export default {
  name: "App",

  data() {
    return {
      data: "",
      profile: false,
    };
  },

  mounted() {},
  components: {},

  data: () => ({
    selectedItem: 0,
    drawer: true,
    items: [
      { icon: "fa fa-th-large", text: "Dashboard", route: "/" },
      { icon: "fa fa-briefcase", text: "Buy MAG", route: "/deposit" },
      { icon: "fas fa-chart-line", text: "P2P Transfer", route: "/transfer" },
      {
        icon: "fa fa-credit-card",
        text: "Buy History",
        route: "/buy-transaction",
      },
      {
        icon: "fa fa-credit-card",
        text: "P2P History",
        route: "/withdrawal-transaction",
      },
      {
        icon: "fa fa-credit-card",
        text: "Refferal History",
        route: "/refferal-transaction",
      },
      { icon: "fas fa-coins", text: "MAG Ecosystem", route: "/mog" },
      { icon: "fas fa-share-square", text: "MAG Smart", route: "/refferals" },

      {
        icon: "fas fa-file-invoice-dollar",
        text: "Recharge",
        route: "/reacharge",
      },
      {
        icon: "fas fa-file-invoice-dollar",
        text: "Profile",
        route: "/profile",
      },
    ],
    menu: false,
  }),
  methods: {
    logOut() {
      this.$store.dispatch("logout");
    },
    image() {
      const name = localStorage.getItem("user");
      //    console.log(name)
      const decrypted = Crypto.AES.decrypt(
        name,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);
      //  console.log(decrypted)
      const data = JSON.parse(decrypted);
      this.data = data;
      //    console.log(this.data);
      if (this.data.kyc_type > -1) {
        this.profile = true;
      }
    },
  },

  created() {
    this.image();
  },
};
</script>


<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
* {
  text-decoration: none;
}

a {
  text-decoration: none;
}

.class-drawer {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
}

.drawer-image {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
}

.nav-bar {
  position: fixed;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.title {
  display: flex;
  align-items: center;
}

.links {
  display: block;
  text-decoration: none;
  color: #fff;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url("./assets/drawer.gif");
  background-position: center;
  background-size: cover;
}

.sign-in-card {
  width: 350px;
  height: 400px;
  background: white;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);

  flex-direction: column;
}

.sign-up-card {
  width: 350px;
  height: 600px;
  background: white;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);

  flex-direction: column;
}

.sign-in-card::-webkit-scrollbar {
  display: none;
}

.sign-in-text {
  text-align: center;
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.4rem;
}

form {
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

form .data {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

form .data label {
  color: rgba(0, 0, 0, 0.7);
  padding-left: 10px;
  padding-bottom: 5px;
}
form .data input {
  width: 100%;
  padding: 5px 15px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  color: rgba(0, 0, 0, 0.7);
}

form .data input:focus {
  outline: none;
}

.btn a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: blue;
  padding: 10px 15px;
  border-radius: 40px;
  color: white;
}

.forget-password {
  text-align: end;
  padding-right: 10px;
  padding-top: 5px;
  color: blue;
}

.create-new-account {
  display: flex;

  justify-content: center;
  text-decoration: none;
}

.create-new-account p {
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
}
.create-new-account a {
  color: blue;
  text-decoration: none;
}

@media screen and (max-width: 909px) {
  .sign-in-card {
    width: 300px;
  }

  .title h4 {
    display: none;
  }
  .title .logo {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .appbar {
    display: none;
  }
}
</style>