<template>
  <div>
    <AdminHome v-if="this.$store.state.adminAuthentication" />
    <v-container v-if="!this.$store.state.adminAuthentication" class="my-5">
      <v-dialog v-model="dialog" width="600">
        <v-card class="d-flex flex-column align-center pa-5">
          <v-card-title class=""> You Need To Add Your KYC </v-card-title>
          <p class="caption grey--text text--darken-2 text-center">
            KYC Details are nessacary for desposit and withdrawal. Your account
            will be banned if you don't add the details
          </p>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="page()" flat color="indigo darken-4 white--text">
              Add Now
            </v-btn>
            <v-btn color="indigo darken-4" text @click="dialog = false">
              Skip For Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <p class="pa-3 text-h5 font-weight-bold grey--text text--darken-4">
        Dashboard
      </p>
      <v-layout row wrap>
        <v-flex xs12 md6 lg4>
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="
                purple
                accent-2
                d-flex
                align-center
                justify-space-between
                pa-5
                ma-5
              "
              :elevation="hover ? 16 : 2"
            >
              <v-flex xs6>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      <v-btn fab color="amber darken-4" elevation="0">
                        <v-img
                          class="mog"
                          src="./assets/img/logo-fizz.png"
                        ></v-img>
                      </v-btn>
                    </div>
                    <v-list-item-title class="headline mb-1 white--text">
                      {{ mag }} Fizz
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">
                      Fizz Balance
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-flex>
              <v-flex xs6>
                <v-img src="../assets/wallet.svg" class="image ml-7"></v-img>
              </v-flex>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="
                cyan
                darken-4
                d-flex
                align-center
                justify-space-between
                pa-5
                ma-5
              "
              :elevation="hover ? 16 : 2"
            >
              <v-flex xs6>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      <v-btn fab color="light-blue lighten-2" elevation="0">
                        <v-img
                          class="mog"
                          src="./assets/img/logo-fizz.png"
                        ></v-img>
                      </v-btn>
                    </div>
                    <v-list-item-title class="headline mb-1 white--text">
                      ${{ parseInt(mag * 0.001 * 10000) / 10000 }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">
                      Fizz(USD)
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-flex>
              <v-flex xs6>
                <v-img src="../assets/wallet.svg" class="image ml-7"></v-img>
              </v-flex>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="
                cyan
                darken-1
                d-flex
                align-center
                justify-space-between
                pa-5
                ma-5
              "
              :elevation="hover ? 16 : 2"
            >
              <v-flex xs6>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      <v-btn fab color="light-blue lighten-2" elevation="0">
                        <v-img
                          class="mog"
                          src="./assets/img/logo-fizz.png"
                        ></v-img>
                      </v-btn>
                    </div>
                    <v-list-item-title class="headline mb-1 white--text">
                      $0
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">
                      Refferal Coins
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-flex>
              <v-flex xs6>
                <v-img src="../assets/wallet.svg" class="image ml-7"></v-img>
              </v-flex>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 md12 lg12>
          <v-card class="pa-5 ma-5 d-flex align-center justify-center">
            <v-text-field
              dense
              outlined
              class="mt-6 mx-5"
              label="Refferal Code"
              disabled
              :value="code"
            ></v-text-field>
            <v-btn
              class="indigo darken-4 white--text"
              depressed
              v-clipboard:copy="referal"
              @click="snackbar = true"
              >Copy</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 md12>
          <v-card>
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-toolbar-title class="title black--text pl-0 ml-2">
                Market Analysis
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="indigo darken-4" class="white--text mr-2"
                >Weekly</v-btn
              >
            </v-app-bar>
            <PlanetChart />
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        You Copied Refferal Code

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import Crypto from "crypto-js";
import axios from "axios";
import PlanetChart from "../components/PlanetChart.vue";
import planetChartData from "../planet-data.js";
import AdminHome from "./admin/AdminHome.vue";
export default {
  name: "Home",
  components: {
    PlanetChart,
    AdminHome,
  },
  data: () => ({
    planetChartData: planetChartData,

    chartdata: {
      labels: ["January", "February"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 20],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },

    tab: null,
    text: "start",
    fill: false,
    padding: 8,
    radius: 10,
    labels: ["25 Apr", "5 May", "15 May", "25 May", "6 Jun"],
    value: [0, 2, 5, 9, 5],
    width: 1,
    lineCap: "round",
    type: "trend",
    autoLineWidth: false,
    fills: false,
    mag: "",
    dialog: true,
    referal: "",
    snackbar: false,
    timeout: 2000,
    code: ""
  }),

  methods: {
    async get() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
      // console.log(data)
      // console.log(wallet);
      const response = await axios.post(
        `https://api.fizzcoin.org/eth/gettokenbalance`, //getsoldtokens
        {
          usdtaddress: data.walladdress,
        }
      );
      this.mag = +response.data.msg / Math.pow(10, 18);
    },

    page() {
      this.dialog = false;
      this.$router.push("/profile");
    },
    popUp() {},
  },

  mounted() {
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
  },
  created() {
    this.get();
    const userInfo = localStorage.getItem("user");
    //  console.log(userInfo)
    const decrypted = Crypto.AES.decrypt(
      userInfo,
      "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
    ).toString(Crypto.enc.Utf8);

    const data = JSON.parse(decrypted);
    this.code = data.referal
    this.referal = "http://fizzcoin.org/#/sign-up/"+ data.referal
    this.dialog = !(data.kyc_type > -1);
  },
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
>.v-card__text
  color: #000
</style>
<style scoped>
.border {
  border-right: 1px solid grey;
}

.mog {
  width: 20px;
}

.image {
  width: 100px;
}

@media screen and (max-width: 909px) {
  /* .image{
        display: none;
    }*/
}
</style>