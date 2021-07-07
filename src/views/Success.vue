<template>
  <v-container class="my-5">
    <Loader v-if="loader" />
    <div v-if="!error && !loader" class="content mx-auto text-center text-h5">
      <v-img class="image" src="../assets/success.gif"></v-img>
      {{ content }} Fizz coins added to your wallet. Click
      <a href="/"> here </a> to see your updated balance
    </div>
    <div v-if="error" class="content mx-auto text-center text-h5">
      <v-img class="image" src="../assets/fail.gif"></v-img>
      {{ content }}
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";
import Loader from "../components/Loader";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      id: this.$route.params.id,
      loader: true,
      content: "",
      error: false,
    };
  },

  methods: {
    
    async get() {
      this.error = false;
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/payment/details",
        {
          transactionId: this.id,
        }
      );

      console.log(response);
      if (response.data.status === 400) {
        this.content = response.data.msg;
        this.loader = false;
        this.error = true;
      }
      if (response.data.status === 200) {
        if (response.data.transaction.status === 1) {
          const userInfo = localStorage.getItem("user");
          //  console.log(userInfo)
          const decrypted = Crypto.AES.decrypt(
            userInfo,
            "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
          ).toString(Crypto.enc.Utf8);

          const wallet = JSON.parse(decrypted);
          let data = {
            recieveraddress: wallet.walladdress,
            inputvalue: response.data.transaction.fizz,
          };
          const post = await axios.post(
            "https://api.fizzcoin.org/eth/transfertokenfromadmin",
            data
          );

          if (post.status === 200) {
            this.content = data.inputvalue + "";

            this.loader = false;
          }
        }
      }
    },
  },

  created() {
    this.get();
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.image {
  width: 300px;
  object-fit: cover;
}
</style>