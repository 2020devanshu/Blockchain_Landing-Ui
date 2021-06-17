<template>
  <v-container class="my-5">
    <h2 class="grey--text text--darken-3 my-5">Buy Transactions</h2>

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
import Crypto from "crypto-js";
import axios from "axios";
import Loader from "../components/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      headers: [
        {
          text: "S. NO.",
          value: "count",
        },
        {
          text: "Transaction ID",
          align: "start",
          sortable: false,
          value: "transaction_id",
        },
        { text: "USD", value: "usd" },

        { text: "Fizz", value: "fizz" },
        { text: "Status", value: "status" },
        { text: "Updated At", value: "updated_at" },
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
      //   console.log(data)
      let response = await axios.post(
        "http://payments.fizzcoin.org/api/payment/transactions",
        {
          userid: data.id,
        }
      );
      if (response.status === 200) {
        this.loader = false;
        let count = 1;
        response.data.payments.forEach((element) => {
          element.count = count++;
          element.status =
            element.status == 0
              ? "Initiated"
              : element.status == 1
              ? "Success"
              : "Fail";
          this.payments.push(element);
        });
      } else {
        this.loader = false;
      }
    },
  },
};
</script>

<style scoped>
.loader-img {
  width: 100px;
}
</style>