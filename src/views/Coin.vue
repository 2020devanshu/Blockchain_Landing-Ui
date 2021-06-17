<template>
  <v-container class="my-5">
    <h2 class="grey--text text--darken-3 my-5">Coin Refferal History</h2>
    <Loader v-if="loader" />
    <v-data-table
    v-if="!loader"
      :headers="headers"
      :items="payments"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";
import Loader from '../components/Loader.vue'
export default {
    components:{
        Loader
    },
  data() {
    return {
      headers: [
        {
          text: "S. NO.",
          value: "count",
        },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Wallet Address", value: "walladdress" }, 
        { text: "Earning", value: "amount" }, 
        { text: "Level", value: "level" }, 
        { text: "Purchased", value: "boot_amount" }, 
      ],
      payments: [],
      loader: true,
    };
  },

  mounted() {
    this.getData();
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
        "http://payments.fizzcoin.org/api/user/getVFizz",
        {
          userId: data.id,
        }
      );
      console.log(response);
      if (response.status === 200) {
        this.loader = false;
      }
      let count = 1;
      response.data.records.forEach((element) => {
        element.count = count++;
        element.status =
          element.status == 0
            ? "Initiated"
            : element.status == 1
            ? "Success"
            : "Fail";
        this.payments.push(element);
      });
      //   console.log(this.payments)
    },
  },
};
</script>

<style>
</style>