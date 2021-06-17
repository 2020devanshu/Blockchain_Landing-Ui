<template>
  <v-container class="my-5">
    <p class="ma-5 grey--text text--darken-3 text-h5 font-weight-bold">
      Notifications
    </p>
    <v-list dense>
      <v-list-item v-if="notification.length == 0">
        <Loader />
      </v-list-item>
      <div v-for="item in notification" :key="item.id" class="mt-3">
        <v-list-item class="my-n1" dense>
          <p class="list-item grey--text text--darken-2 ma-0">
            {{ item.msg }}
          </p>
        </v-list-item>
        <v-divider class="mt-2 mx-4"></v-divider>
      </div>
    </v-list>
  </v-container>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";
import Loader from "../components/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      notification: [],
      message: "Loading Notifications",
    };
  },

  mounted() {
    this.getNotification();
  },

  methods: {
    async getNotification() {
      this.notification = [];
      this.showLoader = true;
      this.message = "Loading Notifications";
      const name = localStorage.getItem("user");
      //    console.log(name)
      const decrypted = Crypto.AES.decrypt(
        name,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);
      //  console.log(decrypted)
      const data = JSON.parse(decrypted);
      const response = await axios.post(
        "http://payments.fizzcoin.org/api/user/getNotified",
        {
          userId: data.id,
        }
      );
      this.notification = response.data.notifications;
      if (this.notification.length == 0) {
        this.message = "Nothing to show";
      }
      this.showLoader = false;
    },
  },
};
</script>

<style scoped>
.logo {
  width: 50px;
}
</style>