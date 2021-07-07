<template>
  <v-app>
    <div class="background-image grey lighten-4"></div>
    <div v-if="loader" class="sign-in">
      <v-container class="my-5">
         <!-- <marquee class="red--text marque text-h5  text-uppercase" width="60%" direction="left" height="100px">
          New Features are about to be launched. Stay calm and relax (Maintanence Going On!)
        </marquee> -->
        <v-dialog v-model="success" width="550">
          <v-card
            width="550"
            class="pa-5 d-flex flex-column justify-center align-center"
          >
            <div>
              <img src="../assets/success.gif" alt="" />
              <p
                class="
                  text-h6
                  grey--text
                  text--darken-3
                  font-weight-bold
                  text-center
                  mx-auto
                "
              >
                SignUp Successfully
              </p>
            </div>
            <div class="line"></div>
            <v-card-actions>
              <router-link to="/sign-in"
                ><v-btn class="indigo darken-4 white--text" depressed
                  >LOGIN</v-btn
                ></router-link
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-layout row wrap class="hello">
          <v-flex x12 md6>
            <div
              color="grey lighten-4"
              class="d-flex flex-column align-center"
              elevation="0"
            >
              <v-img class="logo-sign my-5" src="../assets/logo-fizz.png"></v-img>
              <p
                style="z-index: 4"
                class="
                  text-h4
                  font-weight-bold
                  text-center
                  grey--text
                  text--darken-3
                "
              >
                Welcome To FizzCoin
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
                    Enter Details
                  </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                  <v-stepper-content step="1">
                    <div class="card-logo">
                      <img src="../assets/logo-fizz.png" alt="" />
                    </div>
                    <h3 class="sign-in-text">E-Mail Verification</h3>
                    <div>
                      <v-form
                        ref="send"
                        v-model="valid"
                        lazy-validation
                        v-if="!otp"
                      >
                        <v-text-field
                          v-model="email"
                          required
                          label="Email"
                          :rules="[
                            (v) => !!v || 'E-mail is required',
                            (v) =>
                              /.+@.+\..+/.test(v) || 'E-mail must be valid',
                          ]"
                          dense
                          outlined
                        ></v-text-field>
                        <v-btn
                          depressed
                          @click="sendOTP()"
                          
                          :disabled="disabled_otp"
                          class="mb-5 indigo darken-4 white--text"
                          >Send OTP</v-btn
                        >
                        <div v-if="loaders" class="d-flex flex-column align-center justify-center">
                          <img
                            class="mag-image"
                            src="../assets/logo-fizz.png"
                            alt=""
                          />
                          <p class="grey--text text--darken-3 py-3">Sending OTP</p>
                        </div>
                        <p class="red--text text-center mx-auto">
                          {{ invalid }}
                        </p>
                      </v-form>
                      <v-form
                        ref="otp"
                        v-model="valid"
                        lazy-validation
                        v-if="otp"
                      >
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
                          :rules="[
                            (v) => !!v || 'OTP is required',
                            (v) =>
                              (v && v.length >= 6) ||
                              'OTP must be greater than 6 characters',
                          ]"
                          outlined
                        ></v-text-field>
                        <v-btn
                          depressed
                          @click="verify()"
                          :disabled="disabled_otp"
                          class="indigo darken-4 white--text"
                          >Verify</v-btn
                        >
                        <p class="red--text text-center mx-auto">
                          {{ invalid }}
                        </p>
                      </v-form>
                    </div>
                  </v-stepper-content>
                  <v-stepper-content step="2">
                    <div class="card-logo">
                      <img src="../assets/logo-fizz.png" alt="" />
                    </div>
                    <h3 class="sign-in-text">Enter Your Details</h3>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model="full_name"
                        :rules="[(v) => !!v || 'Name is required']"
                        required
                        label="Full Name"
                        dense
                        outlined
                      ></v-text-field>
                      <v-text-field
                        required
                        label="Phone Number"
                        v-model="phone_number"
                        :counter="10"
                        :rules="[
                          (v) => !!v || 'Phone Number is required',
                          (v) =>
                            (v && v.length >= 10) ||
                            'Phone Number must be 10 characters',
                        ]"
                        dense
                        outlined
                      ></v-text-field>
                      <v-text-field
                        required
                        label="Email"
                        v-model="email"
                        :rules="[
                          (v) => !!v || 'E-mail is required',
                          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                        ]"
                        disabled
                        dense
                        outlined
                      ></v-text-field>
                      <v-text-field
                        required
                        label="Password"
                        :rules="[
                          (v) => !!v || 'Password is required',
                          (v) =>
                            (v && v.length >= 6) ||
                            'Password must be greater than 6 characters',
                        ]"
                        dense
                        outlined
                        v-model="password"
                      ></v-text-field>
                      <v-text-field
                        disabled
                        label="Refferal Code"
                        dense
                        outlined
                        :value="refferal"
                      ></v-text-field>

                      <v-btn
                        depressed
                        @click="handleSubmit()"
                        class="indigo darken-4 white--text"
                        >SIGN UP</v-btn
                      >
                    </v-form>
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
      loaders: false,
      refferal: this.$route.params.id,
      otp: false,
      otp_value: "",
      invalid: "",
      disabled_otp: false,
      success: false,
      valid: true,
    };
  },
  methods: {
    async sendOTP() {
      this.$refs.send.validate();
      this.invalid = "";
      this.disabled_otp = true;
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/user/registerEmail",
        {
          email: this.email,
        }
      );
      if (response.data.status === 200) {
        this.otp = true;
        this.loaders = true
      }
      this.invalid = response.data.msg;

      this.disabled_otp = false;
    },

    async verify() {
      this.$refs.otp.validate();
      this.disabled_otp = true;
      this.invalid = "";
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/user/verifyOTP",
        {
          email: this.email,
          otp: this.otp_value,
          type: 0,
        }
      );

      if (response.data.status === 200) {
        this.e6 = 2;
      }
      this.invalid = response.data.msg;
      this.disabled_otp = false;
    },
    async handleSubmit() {
      this.$refs.form.validate();
      this.loader = false;
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/user/register",
        {
          email: this.email,
          name: this.full_name,
          mobile: this.phone_number,
          password: this.password,

          referal: this.$route.params.id,
        }
      );
      if (response.status === 200) {
        this.loader = true;
        this.success = true;
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
  display: flex;
  justify-content: center;
  align-items: center;
}


@media screen and (max-width: 909px){
  .background-image{
    height: 150vh;
  }  
  .hello{
    margin-top:300px;
  }
}

/* .hello{
  margin-top: 100px;
} */

.mag-image {
  width: 80px;
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.sign-in {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  width: 100%;
  height: 1px;
  background: rgb(204, 204, 204);
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