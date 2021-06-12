<template>
  <v-container class="my-5">
      <form id="form1" action="/success" method="POST">
    <input type="text" :value="data.key" name="key" />
    <input type="text" :value="data.hash" name="hash" />
    <button type="submit" @click="submit(e)">Submit</button>
  </form>
  </v-container>
</template>

<script>
export default {

  data() {
    return {
        actionUrl: "",
      data: {

      }
    };
  },
  methods: {
    submit(e) {
        e.preventDefault();
        let data = document.forms.form1;
        console.log(data)

    },
  },

  mounted(){
    
  },

  created() {
    this.actionUrl = this.$route.params.data.actionUrl
    this.data = this.$route.params.data.formData;
    this.data.surl = "http://fizzcoin.org/#/success"
    //this.data.key = "gtKFFx";
    //this.data.salt = 'eCwWELxi'
    //this.data.furl = "/success"
  },
};
</script>

<style scoped>

input{
    border: 2px solid rgba(0,0,0,0.8);
}
</style>