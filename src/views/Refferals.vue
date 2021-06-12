<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 md6 lg4>
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="cyan d-flex align-center justify-space-between pa-5 ma-5"
            :elevation="hover ? 16 : 2"
          >
            <v-flex xs6>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    <v-btn fab color="cyan lighten-2" elevation="0">
                      <v-img class="mog" src="../assets/login.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    ${{ earning.smart }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Smart Club
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
              pink
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
                    <v-btn fab color="pink lighten-2 lighten-2" elevation="0">
                      <v-img class="mog" src="../assets/login.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    ${{ earning.rising }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Rising Club
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
              orange
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
                    <v-btn fab color="orange lighten-2" elevation="0">
                      <v-img class="mog" src="../assets/login.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    ${{ earning.royal }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Royal Club
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
            class="teal d-flex align-center justify-space-between pa-5 ma-5"
            :elevation="hover ? 16 : 2"
          >
            <v-flex xs6>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    <v-btn fab color="teal lighten-2" elevation="0">
                      <v-img class="mog" src="../assets/login.png"></v-img>
                    </v-btn>
                  </div>
                  <v-list-item-title class="headline mb-1 white--text">
                    ${{ earning.magic }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">
                    Magic Club
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
    </v-layout>
    <v-card class="pa-6 d-flex align-center justify-center mx-auto">
      <v-layout wrap row class="d-flex align-center justify-center mx-auto">
        <v-flex x12 md6 class="d-flex align-center mt-6">
          <v-text-field
            half-width
            :value="refferal"
            dense
            label="Refferal Code"
            placeholder="Refferal Code"
            outlined
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex x12 md6 class="d-flex align-center">
          <v-btn v-clipboard:copy="copy" v-clipboard:success="onCopy">
            COPY</v-btn
          >
        </v-flex>
      </v-layout>
    </v-card>

    <v-layout wrap row class="my-5 pa-6">
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$5</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(5)"
              @click="buyPlan(5)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(5)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Basic</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$10</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(10)"
              @click="buyPlan(10)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(10)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Starter</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$15</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(15)"
              @click="buyPlan(15)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(15)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Minimal</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$25</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(25)"
              @click="buyPlan(25)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(25)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Standard</p>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout wrap row class="my-5 pa-6">
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$50</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(50)"
              @click="buyPlan(50)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(50)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Intermidiate</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$100</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(100)"
              @click="buyPlan(100)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(100)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Elite</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$200</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(200)"
              @click="buyPlan(200)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(200)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Recommeded</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$400</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(400)"
              @click="buyPlan(400)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(400)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Pro</p>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout wrap row class="my-5 pa-6">
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$800</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(800)"
              @click="buyPlan(800)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(800)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Super</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$1500</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(1500)"
              @click="buyPlan(1500)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(1500)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Premium</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$2500</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(2500)"
              @click="buyPlan(2500)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(2500)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Ultra</p>
        </v-card>
      </v-flex>
      <v-flex x12 md6 lg3>
        <v-card
          color="teal"
          class="d-flex flex-column align-center justify-center pa-12 ma-3"
        >
          <h3 class="white--text">$5000</h3>
          <v-card-actions>
            <v-btn
              v-if="!activePlans.includes(5000)"
              @click="buyPlan(5000)"
              depressed
              class="deep-purple--text"
              >Buy Now</v-btn
            >
            <v-btn depressed v-if="activePlans.includes(5000)" class="grey--text text--darken-3 text-h6 font-weight-bold">
              Active
            </v-btn>
          </v-card-actions>
          <p class="white--text text-h6 font-weight-bold">Advanced</p>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      You Copied Refferal Code

      <template v-slot:action="{ attrs }">
        <v-btn color="yellow" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";

export default {
  data() {
    return {
      refferal: "",
      snackbar: false,
      timeout: 2000,
      copy: "",
      earning: {
        magic: 0,
        royal: 0,
        rising: 0,
        smart: 0,
      },
      total: 0,
      activePlans: [],
    };
  },

  methods: {
    onCopy() {
      this.snackbar = true;
    },

    async getPlans() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);

      const response = await axios.post(
        "http://api.fizzcoin.org/api/user/activeplans",
        {
          userId: data.id,
        }
      );
      this.activePlans = response.data.activePlans;
      console.log(this.activePlans);
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

    async buyPlan(amount) {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
      let pay = {
        inr: parseInt(amount * 73.04 * 10000) / 10000,
        plan: amount,
        wallet: data.walladdress,
      };
      const response = await axios.post(
        "http://api.fizzcoin.org:80/api/payment/plan",
        pay
      );
      this.$router.push({ name: "Form", params: { data: response.data } });
    },
  },

  mounted() {
    this.getPaymentData();
  },

  created() {
    this.getPlans();
    const userInfo = localStorage.getItem("user");
    //  console.log(userInfo)
    const decrypted = Crypto.AES.decrypt(
      userInfo,
      "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
    ).toString(Crypto.enc.Utf8);

    const data = JSON.parse(decrypted);
    this.refferal = data.referal;
    this.copy = "http://fizzcoin.org/#/sign-up/" + data.referal;
  },
};
</script>

<style>
.mog {
  width: 60px;
}
</style>