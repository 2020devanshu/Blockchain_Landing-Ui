<template>
  <v-container class="my-5">
    <v-dialog v-model="paidFor" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
         Success
        </v-card-title>

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
          <div ref="paypal"></div>
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

          <v-text-field
            label="USD"
            dense
            v-model="amount_usd"
            @keyup="change1($event)"
            outlined
          ></v-text-field>
          <v-text-field
            label="Fizz"
            v-model="amount_mag"
            dense
            :value="amount_mag"
            @keyup="change2($event)"
            outlined
          ></v-text-field>
          <div class="caption grey--text">1 Fizz = 0.01 $</div>
          <div class="caption grey--text text-center mb-5">
            Note:- The payment you are about to proceed with will be transfered
            to stripe payment method.
          </div>
          <v-btn
            @click="passData()"
            depressed
            class="indigo darken-4 white--text"
            >Deposit</v-btn
          >
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
import moment from 'moment';
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
      id: ""
    };
  },

  mounted: {},

  methods: {
    change1(e) {
      this.amount_mag = e.target.value * 300;
    },
    change2(e) {
      this.amount_usd = e.target.value * 0.003;
    },

    onCopy() {
      this.snackbar = true;
    },
    passData() {
      this.dialog = true;
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AYZ0o5Co5ohn77T43iBDZSDjBcvYbE0hHJo18Rv8MAwOrCjnfE8rg-Qho2QICCfGQceBP7FF5SntunqK";
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    setLoaded() {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Hello",
                  amount: {
                    currency_code: "USD",
                    value: this.amount_usd,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            const post = {
              transactionId: order.id,
              currency: order.purchase_units[0].amount.currency_code,
              usd: order.purchase_units[0].amount.value,
              updated_at: moment(order.update_time).format('Y-M-D H-m-s'),
              created_at: moment(order.create_time).format('Y-M-D H-m-s'),
              fizz: this.amount_mag,
              userId: this.id
            }

            console.log(post)
            
            const response = await axios.post('http://api.fizzcoin.org/api/payment/recordTransaction', post);
            if(response.status === 200){
              const transaction = await axios.post('http://api.fizzcoin.org:5000/eth/transfertokenfromadmin', {
                inputvalue: parseFloat(this.amount_mag),
                recieveraddress: this.wallet
              })
              if(transaction.status === 200){
                const update = await axios.post('http://api.fizzcoin.org/api/payment/updateTransaction', {
                  transactionId: order.id
                })
                console.log(update);
              }

              console.log(transaction);
            }
            this.order = post
            console.log(this.order);
            this.dialog = false
            this.paidFor = true;
            console.log(data);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
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
    this.id = data.id
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