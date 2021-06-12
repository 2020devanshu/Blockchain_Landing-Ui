<template>
  <v-container class="my-5">
      <h2 class="grey--text text--darken-3 my-5">Refferal History</h2>
      <div v-if="loader" class="loader">
     <!--   <v-progress-circular
          :size="50"
          color="amber"
          indeterminate
        ></v-progress-circular> -->

        <img src="../assets/logo-fizz.png" alt="">
      </div>
      <v-data-table
      :headers="headers"
    :items="payments"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios'
import Crypto from 'crypto-js'
export default {
    data () {
      return {
        headers: [
          {
            text: "S. NO.",
          value: "count"
          },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Wallet Address', value: 'walladdress' },
        ],
        payments: [
          
        ],
        loader: true
      }
    },

    mounted(){
      this.getData()
    },

    methods: {
      async getData(){
        const userInfo = localStorage.getItem("user");
  //  console.log(userInfo)
    const decrypted = Crypto.AES.decrypt(userInfo, 'Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451').toString(Crypto.enc.Utf8)
    
    const data = JSON.parse(decrypted);
        let response = await axios.post('http://api.fizzcoin.org/api/referal/ref', {
          refCode: data.referal
        })
      //  console.log(response)
        if(response.status === 200){
          this.loader = false
        }
        let count = 1;
        response.data.referals.forEach(element => {
          element.count = count++;
          element.status = (element.status == 0 ? "Initiated" : (element.status == 1 ? "Success" : "Fail"))
          this.payments.push(element)
        });
     //   console.log(this.payments)
      }
    }
}
</script>

<style>

</style>