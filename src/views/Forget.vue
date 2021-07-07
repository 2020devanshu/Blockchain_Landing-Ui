<template>
  <v-app>
    <div class="background-image grey lighten-4"></div>
    <div v-if="loader" class="sign-in">
      <v-container class="my-5">
        <v-dialog width="350" v-model="dialog">
          <v-card width="350" class="pa-5">
            <v-card-content>
              <div class="d-flex justify-center align-center flex-column">
                <img class="ok-gif" src="../assets/Ok.gif" alt="">
                <p class="grey--text text--darken-2 text-center mx-auto">Your Password has been Resetted</p>
              </div>
            </v-card-content>
            <v-divider></v-divider>
            <v-card-action class="d-flex justify-center align-center">
              <v-spacer></v-spacer>
              <router-link to="/sign-in"
                ><v-btn  class="white--text indigo darken-4 mt-3"
                  >LOGIN</v-btn
                ></router-link
              >
              <v-spacer></v-spacer>
            </v-card-action>
          </v-card>
        </v-dialog>
        <v-layout row wrap>
          <v-flex x12 md6>
            <div
              color="grey lighten-4"
              class="d-flex flex-column align-center"
              elevation="0"
            >
              <v-img class="logo-sign my-5" src="../assets/logo-fizz.png"></v-img>
              <p
                style="z-index: 3"
                class="text-h4 font-weight-bold text-center white--text"
              >
                Welcome To Fizz network
              </p>
            </div>
          </v-flex>
          <v-flex
            xs12
            md6
            class="d-flex flex-column justify-center align-center"
          >
            <v-card class="sign-up-card">
              <v-stepper elevation="0" v-model="e6" horizontal>
                <v-stepper-header>
                  <v-stepper-step :complete="e6 > 1" step="1">
                    E-Mail Verify
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step :complete="e6 > 2" step="2">
                    Change Password
                  </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                  <v-stepper-content step="1">
                    <div class="card-logo">
                      <img src="../assets/logo-fizz.png" alt="" />
                    </div>
                    <h3 class="sign-in-text">Verify Email</h3>
                    <div>
                      <form v-if="!otp">
                        <v-text-field
                          v-model="email"
                          required
                          label="Email"
                          dense
                          outlined
                        ></v-text-field>
                        <v-btn
                          depressed
                          :disabled="disabled_otp"
                          @click="sendOTP()"
                          class="mb-5 indigo darken-4 white--text"
                          >Send OTP</v-btn
                        >
                        <p class="red--text text-center mx-auto">
                          {{ invalid }}
                        </p>
                      </form>
                      <form v-if="otp">
                        <v-text-field
                          v-model="email"
                          required
                          label="Email"
                          disabled
                          dense
                          outlined
                        ></v-text-field>
                        <v-text-field
                          v-model="otp_value"
                          required
                          label="OTP"
                          dense
                          outlined
                        ></v-text-field>
                        <v-btn
                          depressed
                          @click="verify()"
                          class="indigo darken-4 white--text"
                          >Verify</v-btn
                        >
                        <p class="red--text text-center mx-auto">
                          {{ invalid }}
                        </p>
                      </form>
                    </div>
                  </v-stepper-content>
                  <v-stepper-content step="2">
                    <div class="card-logo">
                      <img src="../assets/logo-fizz.png" alt="" />
                    </div>
                    <h3 class="sign-in-text">Change Password</h3>
                    <form>
                      <v-text-field
                        v-model="password1"
                        required
                        label="New Password"
                        dense
                        outlined
                      ></v-text-field>
                      <v-text-field
                        required
                        label="Confirm Password"
                        v-model="password2"
                        dense
                        outlined
                      ></v-text-field>

                      <v-btn
                        depressed
                        @click="change()"
                        class="indigo darken-4 white--text"
                        >Change Password</v-btn
                      >
                    </form>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="loader" v-if="!loader">
      <v-progress-circular
        :size="50"
        color="amber"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";
export default {
  data() {
    return {
      e6: 1,
      full_name: "",
      phone_number: "",
      email: "",
      password: "",
      walladdress: "",
      privKey: "",
      loader: true,
      data: null,
      refferal: this.$route.params.id,
      otp: false,
      disabled_otp: false,
      otp_value: "",
      password1: "",
      password2: "",
      invalid: "",
      dialog: false
    };
  },

  methods: {
    async sendOTP() {
      this.invalid = "";
      this.disabled_otp = true;
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/user/resetEmail",
        {
          email: this.email,
        }
      );
      if (response.data.status === 200) {
        this.otp = true;
      }
      this.invalid = response.data.msg;

      this.disabled_otp = false;
    },

    async verify() {
      this.disabled_otp = true;
      this.invalid = "";
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/user/verifyOTP",
        {
          email: this.email,
          otp: this.otp_value,
          type: 1,
        }
      );

      if (response.data.status === 200) {
        this.e6 = 2;
      }
      this.invalid = response.data.msg;
      this.disabled_otp = false;
    },

    async change() {
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/user/resetPassword",
        {
          email: this.email,
          password: this.password1,
          confirm: this.password2,
        }
      );

      if (response.data.status === 200) {
        this.dialog = true;
      }
    },
  },
};
</script>

<style>
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.ok-gif{
  width: 200px;
}
.sign-in {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-logo {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.sign-up-card img {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.sign-in-card {
  border-radius: 5px;
  height: 500px;
}

.sign-in-text {
  text-align: center;
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.4rem;
}

form {
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

form .data {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

form .data label {
  color: rgba(0, 0, 0, 0.7);
  padding-left: 10px;
  padding-bottom: 5px;
}
form .data input {
  width: 100%;
  padding: 5px 15px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  color: rgba(0, 0, 0, 0.7);
}

form .data input:focus {
  outline: none;
}

.btn a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: blue;
  padding: 10px 15px;
  border-radius: 40px;
  color: white;
}

.forget-password {
  text-align: end;
  padding-right: 10px;
  padding-top: 5px;
  color: blue;
}

.create-new-account {
  display: flex;

  justify-content: center;
  text-decoration: none;
}

.create-new-account p {
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
}
.create-new-account a {
  color: blue;
  text-decoration: none;
}
</style>