<template>
  <v-container class="my-5">
    <v-dialog v-model="paidFor" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Success </v-card-title>

        <v-card-content>
          Success
          {{ JSON.stringify(order) }}
        </v-card-content>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Pay Using Paypal
        </v-card-title>

        <v-card-content>
          <div id="payment-request-button">
            <!-- A Stripe Element will be inserted here. -->
          </div>
        </v-card-content>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Cancel Payment
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout row wrap>
      <v-flex x12 md6>
        <v-card class="d-flex flex-column align-center pa-8 ma-5">
          <v-img class="card-image" src="../assets/logo-fizz.png"></v-img>
          <v-card-title class="grey--text text--darken-3 text-center"
            >Deposit</v-card-title
          >
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="USD"
              dense
              v-model="amount_usd"
              :rules="nameRules"
              @keyup="change1($event)"
              outlined
              required
            ></v-text-field>
            <v-text-field
              label="Fizz"
              v-model="amount_mag"
              dense
              :rules="fizz_validate"
              :value="amount_mag"
              @keyup="change2($event)"
              required
              outlined
            ></v-text-field>
            <div class="caption grey--text">1 Fizz = 0.001 $</div>
            <div class="caption grey--text text-center mb-5">
              Note:- The payment you are about to proceed with will be
              transfered to stripe payment method.
            </div>
            <v-btn
              @click="passData()"
              depressed
              class="indigo darken-4 white--text"
              >Deposit</v-btn
            >
          </v-form>
        </v-card>
      </v-flex>

      <v-flex x12 md6>
        <v-card class="d-flex flex-column align-center pa-12 ma-5">
          <v-img src="../assets/qr-code.jpg"></v-img>

          <v-text-field
            dense
            label="Wallet Address"
            placeholder="Wallet Address"
            outlined
            disabled
            :value="wallet"
          ></v-text-field>
          <v-btn
            v-clipboard:copy="wallet"
            v-clipboard:success="onCopy"
            class="indigo darken-4 white--text"
            >COPY</v-btn
          >
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

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
import moment from "moment";
var stripe = Stripe(
  "pk_test_51J1rkVCDTwpG4GpKK8ThGfMLNGBsNPTRD34XoV4JJcqGYgwzvPM2jQ4waREne0ZGxdmGgEGWbuulNkGS8HdOdOeB00Ey1jNZnL"
);
export default {
  data() {
    return {
      res: [],
      response: null,
      data: null,
      amount_inr: "",
      amount_usd: "",
      amount_mag: "",
      value: "",
      wallet: "",
      snackbar: false,
      text: "You Copied wallet Address",
      timeout: 2000,
      mag: "",
      dialog: false,
      paidFor: false,
      order: "",
      id: "",
      fizz_validate: [v => !!v || 'Fizz is required',],
      nameRules: [
        v => !!v || 'USD is required',
        v => (v && v >= 0.50) || 'USD must be greater than $0.50',
      ],
    };
  },

  mounted: {},

  methods: {
    change1(e) {
      this.amount_mag = e.target.value * 1000;
    },
    change2(e) {
      this.amount_usd = e.target.value * 0.001;
    },

    onCopy() {
      this.snackbar = true;
    },
    async passData() {
      this.$refs.form.validate()
      const response = await axios
        .post("http://payments.fizzcoin.org/api/payment/params", {
          usd: this.amount_usd,
          fizz: this.amount_mag,
          wallet: this.wallet,
        })
        .then(function (response) {
          return response.data;
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          // If redirectToCheckout fails due to a browser or network
          // error, you should display the localized error message to your
          // customer using error.message.
          if (result.error) {
            alert(result.error.message);
          }
        });
      //  console.log(response);
    },
  },

  created() {
    const userInfo = localStorage.getItem("user");
    //  console.log(userInfo)
    const decrypted = Crypto.AES.decrypt(
      userInfo,
      "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
    ).toString(Crypto.enc.Utf8);

    const data = JSON.parse(decrypted);
    // console.log(data)
    this.id = data.id;
    this.wallet = data.walladdress;
  },

  mounted() {},
};
</script>

<style scoped>
.card-image {
  width: 300px;
  object-fit: cover;
}
</style>