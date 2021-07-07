<template>
  <v-container class="my-5">
    <h2 class="grey--text text--darken-3 my-5">P2P Send</h2>
    <Loader v-if="loader" />
    <v-data-table
    v-if="!loader"
      :headers="sheaders"
      :items="payments"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>

    <h2 class="grey--text text--darken-3 my-5">P2P Receive</h2>
    <v-data-table
    v-if="!loader"
      :headers="rheaders"
      :items="receive"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import Crypto from "crypto-js";
import axios from "axios";
import Loader from '../components/Loader.vue';
export default {
  components: { Loader },
  data() {
    return {
      sheaders: [
        {
          text: "S. NO.",
          value: "count",
        },
        {
          text: "Hash",
          align: "start",
          sortable: false,
          value: "hash",
        },
        { text: "Name", value: "receiverName" },

        //  { text: 'Wallet Address', value: 'receiverAddress' },
        { text: "Tokens", value: "amount" },
        { text: "Transfered At", value: "transferTime" },
      ],
      rheaders: [
        {
          text: "S. NO.",
          value: "count",
        },
        {
          text: "Hash",
          align: "start",
          sortable: false,
          value: "hash",
        },
        { text: "Name", value: "senderName" },

        //     { text: 'Wallet Address', value: 'senderAddress' },
        { text: "Tokens", value: "amount" },
        { text: "Transfered At", value: "transferTime" },
      ],
      payments: [],

      receive: [],
      loader: true,
    };
  },

  mounted() {
    this.getData();
    this.setData();
  },

  methods: {
    async getData() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
      let response = await axios.post(
        "https://payments.fizzcoin.org/api/transfer/sent",
        {
          userid: data.id,
        }
      );
   //   console.log(response);
      if (response.status === 200) {
        this.loader = false;
      }
      let count = 1;
      response.data.transactions.forEach((element) => {
        element.count = count++;
        this.payments.push(element);
      });
    },

    async setData() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
      let response = await axios.post(
        "https://payments.fizzcoin.org/api/transfer/received",
        {
          userid: data.id,
        }
      );
      if (response.status === 200) {
        this.loader = false;
      }
      let count = 1;
      response.data.transactions.forEach((element) => {
        element.count = count++;
        this.receive.push(element);
      });
    },
  },
};
</script>

<style>
</style>