<template>
  <v-container class="my-5">
    <p class="pa-3 text-h5 font-weight-bold grey--text text--darken-2">
      Dashboard
    </p>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="
              blue-grey
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
                    <v-btn fab color="blue-grey lighten-2" elevation="0">
                      <v-img class="mog" src="../../assets/logo-fizz.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    {{ (msg) }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Total Fizz coins
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-flex>
            <v-flex xs6>
              <v-img src="../../assets/wallet.svg" class="image ml-7"></v-img>
            </v-flex>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs12 md6 lg4>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="
              light-blue
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
                    <v-btn fab color="teal lighten-2" elevation="0">
                      <v-img class="mog" src="../../assets/logo-fizz.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    ${{ soldMagDlr }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Sold Fizz coins(USD)
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-flex>
            <v-flex xs6>
              <v-img src="../../assets/wallet.svg" class="image ml-7"></v-img>
            </v-flex>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs12 md6 lg4>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="
              teal
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
                      <v-img class="mog" src="../../assets/logo-fizz.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    {{ soldMag }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Sold Fizz coins
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-flex>
            <v-flex xs6>
              <v-img src="../../assets/wallet.svg" class="image ml-7"></v-img>
            </v-flex>
          </v-card>
        </v-hover>
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
  </v-container>
</template>

<script>
import axios from "axios";
import PlanetChart from "../../components/PlanetChart.vue";
import planetChartData from "../../planet-data.js";
import Crypto from "crypto-js";
import NumAbbr from 'number-abbreviate';
var numAbbr = new NumAbbr();

export default {
  name: "Admin-Home",
  components: {
    PlanetChart,
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
    msg: "",
    soldMagInr: 0,
    soldMagDlr: 0,
    soldMag: 0,
  }),

  methods: {
    async getPaymentData() {
      let response = await axios.get(
        "https://api.fizzcoin.org/eth/getsoldtokens"
      );
      this.mag = +response.data.msg / Math.pow(10, 18);
     this.soldMagInr = numAbbr.abbreviate(parseInt(this.mag * 73.04 * 0.23 * 10000) / 10000, 2).toUpperCase()
     this.soldMagDlr = numAbbr.abbreviate(parseInt(this.mag * 0.23 * 10000) / 10000, 2).toUpperCase()
     this.soldMag = numAbbr.abbreviate(this.mag, 2).toUpperCase()
    },

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
      this.msg = numAbbr.abbreviate(+response.data.msg / Math.pow(10, 18),1).toUpperCase();
    },

    abbreviateNumber(value) {
      var newValue = value;
      if (value >= 1000) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = "";
        for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat(
            (suffixNum != 0
              ? value / Math.pow(1000, suffixNum)
              : value
            ).toPrecision(precision)
          );
          var dotLessShortValue = (shortValue + "").replace(
            /[^a-zA-Z 0-9]+/g,
            ""
          );
          if (dotLessShortValue.length <= 2) {
            break;
          }
        }
        if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
      }
      return newValue;
    },
  },
  mounted() {
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
    this.getPaymentData();
    this.get();
    console.log(this.abbreviateNumber(2791719));
  },
};
</script>

<style scoped>
.mog {
  width: 60px;
  height: 60px;
}
</style>