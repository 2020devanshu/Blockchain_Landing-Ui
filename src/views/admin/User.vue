<template>
  <v-container class="my-5">
    <h2 class="grey--text text--darken-3 my-5">User List</h2>
    <Loader v-if="loader" />
      
    <v-card v-if="!loader">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="payments"
        :search="search"
      >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.count }}</td>
          <td>{{ row.item.name}}</td>
          <td>{{ row.item.email }}</td>
          <td>{{ row.item.walladdress }}</td>
          <td>
            <v-btn class="indigo darken-4 ma-2 white--text" depressed>Block</v-btn>
            <v-btn class="indigo darken-4 white--text" depressed>Unblock</v-btn>
          </td>
        </tr>
      </template>
      </v-data-table>
    </v-card>
    <!-- <table class="data-table">
      <thead>
        <tr>
          <td>S No.</td>
          <td>Name</td>
          <td>E-Mail</td>
          <td>Wallet</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payment in payments" :key="payment.walladdress">
          <td>{{ payment.count }}</td>
          <td>{{ payment.name }}</td>
          <td>{{ payment.email }}</td>
          <td>{{ payment.walladdress }}</td>
          <td><v-btn></v-btn></td>
        </tr>
      </tbody>
    </table> -->
  </v-container>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";
import Loader from '../../components/Loader'
export default {
  components: {
    Loader
  },
  data() {
    return {
      search: "",
      row: [],
      headers: [
        {
          text: "S. NO.",
          value: "count",
        },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Wallet Address", value: "walladdress" },
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
        "http://payments.fizzcoin.org/api/admin/users",
        {
          userId: data.id,
        }
      );
      console.log(response);
      if (response.status === 200) {
        this.loader = false;
      }

      let count = 1;
      response.data.users.forEach((element) => {
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