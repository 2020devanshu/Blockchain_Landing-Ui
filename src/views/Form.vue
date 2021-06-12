<template>
  <v-container class="my-5">
    <div v-if="loader" class="loader d-flex flex-column">
        <v-progress-circular
          :size="100"
          color="amber"
          indeterminate
        ></v-progress-circular>
        <p class="mt-10 text-h5 font-weight-bold">Redirecting To PayU Money</p>
      </div>
      <form id="form1" method="POST" :action="actionUrl">
    <input type="hidden" :value="data.key" name="key" />
    <input type="hidden" :value="data.hash" name="hash" />
    <input type="hidden" :value="data.txnid" name="txnid" />
    <input type="hidden" :value="data.salt" name="salt" />
    <input type="hidden" :value="data.service_provider" name="service_provider" />
    <input type="hidden" :value="data.amount" name="amount" />
    <input type="hidden" :value="data.firstname" name="firstname" />
    <input type="hidden" :value="data.email" name="email" />
    <input type="hidden" :value="data.phone" name="phone" />
    <input type="hidden" :value="data.productinfo" name="productinfo" />
    <input type="hidden" :value="data.surl" name="surl" />
    <input type="hidden" :value="data.furl" name="furl" />
    <input type="hidden" :value="data.lastname" name="lastname" />
    <input type="hidden" :value="data.curl" name="curl" />
    <input type="hidden" :value="data.address1" name="address1" />
    <input type="hidden" :value="data.address2" name="address2" />
    <input type="hidden" :value="data.city" name="city" />
    <input type="hidden" :value="data.state" name="state" />
    <input type="hidden" :value="data.country" name="country" />
    <input type="hidden" :value="data.zipcode" name="zipcode" />
    <input type="hidden" :value="data.udf1" name="udf1" />
    <input type="hidden" :value="data.udf2" name="udf2" />
    <input type="hidden" :value="data.udf3" name="udf3" />
    <input type="hidden" :value="data.udf4" name="udf4" />
    <input type="hidden" :value="data.udf5" name="udf5" />
    <input type="hidden" :value="data.pg" name="pg" />
    <button type="submit" @submit.prevent="submit()"></button>
  </form>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
        actionUrl: "",
      data: {
        
      },
      loader: true
    };
  },
  methods: {
    async submit() {
        let response = await axios.post(this.actionUrl, this.data)
    },
  },

  mounted(){
    setTimeout(() => {
       document.getElementById('form1').submit()
    }, 3000)
     
  },

  created() {
    this.actionUrl = this.$route.params.data.actionUrl
    this.data = this.$route.params.data.formData;
    //this.data.surl = "http://fizzcoin.org/#/success"
    //this.data.key = "gtKFFx";
    //this.data.salt = 'eCwWELxi'
    //this.data.furl = "/success"
  },
};
</script>

<style scoped>

</style>