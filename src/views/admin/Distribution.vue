<template>
  <v-container class="my-5">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          KYC Approval
        </v-card-title>

        <v-card-content>
          <v-card elevation="0" max-width="300" class="mx-auto">
            <v-system-bar lights-out></v-system-bar>
            <v-carousel
              :continuous="false"
              :cycle="cycle"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="300"
            >
              <v-carousel-item v-for="(slide, i) in colors" :key="i">
                <v-img :src="colors[i]" height="100%" tile> </v-img>
              </v-carousel-item>
            </v-carousel>

            <div class="text-h6 text-center mx-auto">
              {{ kycType }}
            </div>

            <img height="300" width="300" class="mt-5" :src="photo" alt="" />

            <div class="text-h6 text-center mx-auto">Photo</div>
          </v-card>
        </v-card-content>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green lighten-1 white--text" @click="approve(1)"
            >Approve</v-btn
          >
          <v-btn color="red lighten-1 white--text" @click="approve(-1)">
            Reject
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      <v-data-table :headers="headers" :items="payments" :search="search">
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.count }}</td>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.email }}</td>
            <td>{{ row.item.walladdress }}</td>
            <td>
              <v-btn
                @click="kyc(row.item)"
                :disabled="row.item.kyc_type == -1"
                v-if="row.item.kyc_status != 1"
                class="indigo darken-4 ma-2 white--text d-flex align-center justify-center"
                depressed
                >Action</v-btn
              >
              <p v-if="row.item.kyc_status == 1" class="d-flex align-center justify-center green--text ml-n13 mt-3">Approved</p>
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
import Loader from "../../components/Loader";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      search: "",
      row: [],
      photo: "",
      kycType: "",
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
      dialog: false,
      colors: [],
      approvinguser: null
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    kyc(data) {
      console.log(data);
      if(data.kyc_type == 0){
        this.colors = [data.kyc1]
        this.kycType = "Driving License"
      }else if(data.kyc_type == 1){
        this.colors = [data.kyc1,data.kyc2]
        this.kycType = "Passport"
      }
      this.approvinguser = data.id
      this.photo = data.photo
      this.dialog = true;
    },
    async getData() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
      let response = await axios.post(
        "http://api.fizzcoin.org/api/admin/kycUsers",
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
        this.payments.push(element);
      });
      //   console.log(this.payments)
    },

    async approve(status){
      this.loader = true
       const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const data = JSON.parse(decrypted);
     // console.log(data);
      const apiData = {
        userId: this.approvinguser,
        status,
        adminId: data.id
      }
      console.log(apiData);
      const response = await axios.post('http://api.fizzcoin.org/api/admin/approveKYC', apiData)
      if(response.status === 200){
        this.dialog = false
        this.loader = false

      }
    },

    async reject(){

    }
  },
};
</script>

<style>
</style>