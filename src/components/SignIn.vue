<template>
    <v-app>
    <div class="background-image grey lighten-4">
    </div>
    <div v-if="loader" class="sign-in">
      <v-container class="my-5">
      <v-layout row wrap>
        <v-flex x12 md6>
          <v-card color="grey lighten-4" class="d-flex flex-column align-center" elevation="0">
          <v-img class="logo-sign my-5" src="../assets/logo-fizz.png"></v-img>
          <p class="text-h4 font-weight-bold text-center grey--text text--darken-3">Welcome To Fizz Network</p>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 class="d-flex flex-column justify-center align-center">
          <v-card class="sign-in-card">
              <div class="card-logo">
                  <img src="../assets/logo-fizz.png" alt="">
              </div>
            <h3 class="sign-in-text">SIGN IN</h3>
            <p v-if="wrong" class="red--text text-center">Wrong Password</p>
            <v-form>
                <v-text-field
                  v-model="username"
                  label="Username"
                  dense
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="password"
                  dense
                  outlined
                ></v-text-field>

                <v-btn depressed @click="handleSubmit()" class="indigo darken-4 white--text">Log In</v-btn>
                <p>Forget Password</p>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
    <div class="loader" v-if="!loader">
      <Loader />
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'
import Crypto from 'crypto-js'
import Loader from '../components/Loader.vue'
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default {
  data() {
    return {
      username: "",
      password: "",
      data: false,
      loader: true,
      wrong: false
    }
  },
  components: {
    Loader
  },

  methods: {
    handleSubmit(){
      console.log(this.$store.state.user)
      this.loader = false
      this.$store.dispatch('login', {
        email: this.username,
        password: this.password,
      })
      .then(() => {
        if(this.$store.state.user.status_code == 200 && this.$store.state.user.is_admin == 0){
          this.$store.commit('setAuthentication', true);
   //       this.$store.commit('setAdminAuthentication', false);
           this.loader= true
           console.log('logged in as user')
        //  this.$router.push({name: 'Home'})
          window.location.replace('/')
        }
        if(this.$store.state.user.status_code == 200 && this.$store.state.user.is_admin === 1){
          this.$store.commit('setAdminAuthentication', true);
     //     this.$store.commit('setAuthentication', false);
           this.loader= true
           console.log('logged in as admin')
        //  this.$router.push({name: 'Home'})
          window.location.replace('/')
        }
      })
      .catch(err => {
        this.wrong = true
        this.loader = true
        console.log(err);
      })
    }
  },
}
</script>

<style>

.background-image{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(247, 247, 247);
}

.logo-sign{
  width: 50%;
}

.loader{
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.sign-in{
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}



.card-logo{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.sign-in-card img{
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.sign-in-card{
    border-radius: 5px;
}

.sign-in-text{
  text-align: center;
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.4rem;
}

form{
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

form .data{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}


form .data label{
  color: rgba(0, 0, 0, 0.7);
  padding-left: 10px;
  padding-bottom: 5px;
}
form .data input{
  width: 100%;
  padding: 5px 15px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  color: rgba(0, 0, 0, 0.7);
}

form .data input:focus{
  outline: none;
}

.btn a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: blue;
  padding: 10px 15px;
  border-radius: 40px;
  color: white;
}

.forget-password{
  text-align: end;
  padding-right: 10px;
  padding-top: 5px;
  color: blue;
}

.create-new-account{
  display: flex;
  
  justify-content: center;
  text-decoration: none;
}

.create-new-account p{
  color: rgba(0,0,0,0.7);
  font-size: 16px;
}
.create-new-account a{
  color: blue;
  text-decoration: none;
}

</style>