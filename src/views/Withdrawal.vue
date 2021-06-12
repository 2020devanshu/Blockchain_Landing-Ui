<template>
  <v-container class="my-5">
    <h2 class="grey--text text--darken-3 my-5">Withdrawal</h2>

    <v-layout row wrap>
      <v-flex xs12 md6 lg4>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="
              teal
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
                    <v-btn fab color="blue-grey lighten-2" elevation="0">
                      <v-img class="mog" src="../assets/login.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    {{ total * 73.04 }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Total Earnings(INR)
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
              light-blue
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
                      <v-img class="mog" src="../assets/login.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    ${{ total }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Total Earnings(USD)
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
                    <v-btn fab color="light-blue lighten-2" elevation="0">
                      <v-img class="mog" src="../assets/login.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    {{ mag }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Total MAG
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
        <v-card class="d-flex flex-column align-center pa-5 ma-5">
          <p
            class="
              text-h6
              font-weight-bold
              grey--text
              text--darken-3 text-center
              mx-auto
            "
          >
            Enter your bank details
          </p>
          <v-select
            class="mt-1"
            :items="items"
            label="Select Withdraw Type"
            v-model="value"
            v-on:change="getData($event)"
            item-text="itemName"
            item-value="value"
          ></v-select>
          <v-form v-if="withdrawType" class="my-7 form">
            <v-text-field dense label="Account Number" outlined></v-text-field>
            <v-text-field dense label="Name" outlined></v-text-field>
            <v-text-field dense label="IFSC Code" outlined></v-text-field>
            <v-text-field dense label="City" outlined></v-text-field>
            <v-text-field
              dense
              label="Your Earnings Amount"
              outlined
            ></v-text-field>
            <v-btn class="orange white--text">Submit</v-btn>
          </v-form>
          <v-form v-if="!withdrawType" class="my-7 form">
            <v-text-field dense label="Account Number" outlined></v-text-field>
            <v-text-field dense label="Name" outlined></v-text-field>
            <v-text-field dense label="IFSC Code" outlined></v-text-field>
            <v-text-field dense label="City" outlined></v-text-field>
            <v-text-field dense label="MAG Amount" outlined></v-text-field>
            <v-btn class="orange white--text">Submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";
export default {
  data() {
    return {
      withdrawType: false,
      items: [
        {
          itemName: "Withdraw MAG",
          value: 1,
        },
        {
          itemName: "Withdraw Earnings",
          value: 0,
        },
      ],
      value: "",
      hide: {
        aadhar: false,
        license: false,
      },
      earning: {
        magic: 0,
        royal: 0,
        rising: 0,
        smart: 0,
      },
      total: 0,
      mag: "",
    };
  },
  methods: {
    async get() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
      const response = await axios.post(
        `http://api.fizzcoin.org:5000/eth/gettokenbalance`,
        {
          usdtaddress: data.walladdress,
        }
      );
      this.mag = +response.data.msg / Math.pow(10, 18);
    },
    async getPaymentData() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
      const response = await axios.post(
        "http://api.fizzcoin.org/api/user/getEarnings",
        {
          userid: data.id,
        }
      );

      this.earning = response.data.earnings;
      this.total =
        this.earning.magic +
        this.earning.royal +
        this.earning.smart +
        this.earning.rising;
    },

    getData(e) {
      if (e == 0) {
        this.withdrawType = true;
      } else {
        this.withdrawType = false;
      }
    },
  },

  mounted() {
    this.get();
    this.getPaymentData();
  },
};
</script>

<style scoped>
.form {
  width: 500px;
}

.mog {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

@media screen and (max-width: 909px) {
  .form {
    width: 330px;
  }
}
</style>