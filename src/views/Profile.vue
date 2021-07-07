<template>
  <v-container class="my-5">
    <v-dialog class="pa-6" v-model="change" width="600">
      <v-card class="pa-6">
        <p class="mx-auto text-center text-h5 my-5">Your Password is changed</p>
        <p class="mx-auto text-center text-h6">You will be log out shortly</p>
      </v-card>
    </v-dialog>
    <Loader v-if="loader" />

    <div class="profile-section">
      <div class="background-image-profile">
        <img
          v-if="profile"
          class="profile-image rounded-circle"
          :src="'https://payments.fizzcoin.org/' + data.photo"
        />
        <img
          v-if="!profile"
          class="profile-image rounded-circle"
          src="../assets/man.png"
        />
      </div>

      <p class="profile-name text-h6 font-weight-bold white--text">
        {{ data.name }}
      </p>
    </div>
    <div class="profile-info">
      <p class="text-h6 text-center mx-auto grey--text text--darken-2">
        {{ data.name }}
      </p>
      <div class="divider"></div>
      <p class="my-3 mx-2 grey--text text--darken-1">
        <i class="fas fa-phone"></i> {{ data.mobile }}
      </p>
      <p class="my-3 mx-2 grey--text text--darken-1">
        <i class="fas fa-envelope"></i> {{ data.email }}
      </p>
      <!-- <div class="card-credit">
        <img class="credit" src="../assets/card.png" alt="" />
        <p class="name grey--text">{{ data.name }}</p>
      </div> -->
    </div>

    <div class="profile-content d-flex justify-space-between align-center">
      <div>
        <p class="my-3 mx-2 grey--text text--darken-1">
          <i class="fas fa-phone"></i> {{ data.mobile }}
        </p>
        <p class="my-3 mx-2 grey--text text--darken-1">
          <i class="fas fa-envelope"></i> {{ data.email }}
        </p>
      </div>

      <!-- <div class="card-credit">
        <img class="credit" src="../assets/card.png" alt="" />
        <p class="name grey--text">{{ data.name }}</p>
      </div> -->
    </div>

    <div class="divider"></div>

    <v-tabs centered center-active>
      <v-tab href="#kyc"> KYC </v-tab>
      <v-tab-item id="kyc" key="kyc">
        <v-card
          v-if="!kyc_completed"
          class="d-flex flex-column align-center pa-16 ma-5"
          elevation="0"
        >
          <v-card-header>
            <h2 class="grey--text text--darken-3 text-center">KYC Details</h2>
            <v-select
              class="mt-5"
              outlined
              dense
              :items="items"
              label="Select KYC Document"
              v-model="value"
              v-on:change="getData($event)"
              item-text="itemName"
              item-value="value"
            ></v-select>
            <v-form
              class="form mt-n5"
              ref="kyc"
              v-model="kyc_valid"
              lazy-validation
            >
              <v-file-input
                class="mb-2"
                dense
                accept="image/*"
                show-size
                v-model="fileUpload[0]"
                counter
                v-if="hide.aadhar"
                v-on:change="image($event, 0)"
                required
                :rules="front"
                filled
                outlined
                truncate-length="15"
                label="Upload Aadhar Front"
              ></v-file-input>
              <v-file-input
                class="mb-2"
                dense
                show-size
                accept="image/*"
                v-on:change="image($event, 1)"
                v-model="fileUpload[1]"
                counter
                filled
                :rules="back"
                v-if="hide.aadhar"
                required
                outlined
                truncate-length="15"
                label="Upload Adhar Back"
              ></v-file-input>
              <v-file-input
                class="mb-2"
                dense
                show-size
                required
                counter
                accept="image/*"
                v-on:change="image($event, 2)"
                v-model="fileUpload[2]"
                filled
                :rules="driving"
                v-if="hide.license"
                outlined
                truncate-length="15"
                label="Upload Driving License"
              ></v-file-input>
              <v-file-input
                class="mb-2"
                dense
                show-size
                counter
                filled
                accept="image/*"
                v-on:change="image($event, 3)"
                required
                v-model="fileUpload[3]"
                :rules="photo"
                outlined
                truncate-length="15"
                label="Upload Photo"
              ></v-file-input>
              <v-btn @click="upload()" class="button sign-up-button white--text"
                >upload</v-btn
              >
            </v-form>
          </v-card-header>
        </v-card>
        <v-card v-else class="d-flex flex-column align-center pa-5 ma-5">
          <h2 class="grey--text text--darken-3 text-center">KYC Details</h2>
          <Loader v-if="loader" />
          <v-card v-if="!loader" elevation="0" max-width="300" class="mx-auto">
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
                <v-img
                  :src="'https://payments.fizzcoin.org/' + colors[i]"
                  height="100%"
                  tile
                >
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-list two-line>
              <v-list-item>
                <div class="text-h6 mx-auto">
                  {{ data.kyc_type == 0 ? "Driving License" : "Aaadhar Card" }}
                </div>
              </v-list-item>
            </v-list>
          </v-card>
        </v-card>
      </v-tab-item>
      <v-tab href="#change"> Change Password </v-tab>
      <v-tab-item id="change" key="change">
        <p class="my-5 text-center mx-auto text-h6 grey--text text--darken-2">
          Change Password
        </p>
        <v-card class="d-flex align-center flex-column" elevation="0">
          <v-form ref="form" class="form-width" v-model="valid" lazy-validation>
            <v-text-field
              v-model="old_password"
              label="Old Password"
              dense
              :rules="nameRules"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="new_password"
              label="New Password"
              dense
              :rules="newPass"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="confirm_password"
              label="Confirm Password"
              dense
              :rules="confirm"
              outlined
              required
            ></v-text-field>
            <v-btn @click="changePassword()" class="indigo darken-4 white--text"
              >Change Password</v-btn
            >
          </v-form>
        </v-card>
      </v-tab-item>

      <v-tab href="#bank"> Bank Account </v-tab>
      <v-tab-item id="bank" key="bank">
        <v-card class="ma-5 d-flex flex-column align-center" elevation="0">
          <v-card-title
            class="
              grey--text
              text--darken-2 text-h6
              font-weight-bold
              text-uppercase
            "
          >
            Enter Your Bank Details
          </v-card-title>
          <v-form lazy-validation v-model="bank_valid" ref="bankForm">
            <v-layout row wrap>
              <v-flex x12 md6>
                <v-text-field
                  outlined
                  dense
                  class="ma-3"
                  required
                  :rules="account"
                  label="Account Number"
                  v-model="account_number"
                ></v-text-field>
              </v-flex>
              <v-flex x12 md6>
                <v-text-field
                  outlined
                  dense
                  required
                  :rules="ifsc"
                  label="IFSC Code"
                  class="ma-3"
                  v-model="ifsc_code"
                ></v-text-field>
              </v-flex>
              <v-flex x12 md6>
                <v-text-field
                  outlined
                  dense
                  required
                  :rules="city_name"
                  class="ma-3"
                  label="City"
                  v-model="city"
                ></v-text-field>
              </v-flex>
              <v-flex x12 md6>
                <v-text-field
                  outlined
                  dense
                  required
                  :rules="pin"
                  class="ma-3"
                  label="Pincode"
                  v-model="pincode"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn
              @click="enterBankDetails()"
              class="indigo darken-4 white--text"
              >Submit</v-btn
            >
          </v-form>
        </v-card>
      </v-tab-item>
    </v-tabs>

    <!-- <v-layout row wrap v-if="!loader">
      <v-flex xs12 md6>
        <v-card class="d-flex flex-column align-center pa-8 ma-5">
          <img
            v-if="profile"
            class="profile rounded-circle"
            :src="'https://payments,fizzcoin.org/'+data.photo"
          />
          <img
            v-if="!profile"
            class="profile rounded-circle"
            src="../assets/man.png"
          />
          <h2 class="grey--text my-5 text--darken-3">{{ data.name }}</h2>
          <h4 class="grey--text mb-2 text--darken-3">{{ data.mobile }}</h4>
          <h4 class="grey--text mb-2 text--darken-3">{{ data.email }}</h4>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="old_password"
              label="Old Password"
              dense
              :rules="nameRules"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="new_password"
              label="New Password"
              dense
              :rules="newPass"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="confirm_password"
              label="Confirm Password"
              dense
              :rules="confirm"
              outlined
              required
            ></v-text-field>
            <v-btn @click="changePassword()" class="sign-up-button white--text"
              >Change Password</v-btn
            >
          </v-form>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <div class="card-credit">
          <img class="credit" src="../assets/card.png" alt="" />
          <p class="name text-h6 white--text">{{ data.name }}</p>
        </div>
        <v-card
          v-if="!kyc_completed"
          class="d-flex flex-column align-center pa-16 ma-5"
        >
          <v-card-header>
            <h2 class="grey--text text--darken-3 text-center">KYC Details</h2>
            <v-select
              class="mt-5"
              outlined
              dense
              :items="items"
              label="Select KYC Document"
              v-model="value"
              v-on:change="getData($event)"
              item-text="itemName"
              item-value="value"
            ></v-select>
            <v-form
              class="form mt-n5"
              ref="kyc"
              v-model="kyc_valid"
              lazy-validation
            >
              <v-file-input
                class="mb-2"
                dense
                accept="image/*"
                show-size
                v-model="fileUpload[0]"
                counter
                v-if="hide.aadhar"
                v-on:change="image($event, 0)"
                required
                :rules="front"
                filled
                outlined
                truncate-length="15"
                label="Upload Aadhar Front"
              ></v-file-input>
              <v-file-input
                class="mb-2"
                dense
                show-size
                accept="image/*"
                v-on:change="image($event, 1)"
                v-model="fileUpload[1]"
                counter
                filled
                :rules="back"
                v-if="hide.aadhar"
                required
                outlined
                truncate-length="15"
                label="Upload Adhar Back"
              ></v-file-input>
              <v-file-input
                class="mb-2"
                dense
                show-size
                required
                counter
                accept="image/*"
                v-on:change="image($event, 2)"
                v-model="fileUpload[2]"
                filled
                :rules="driving"
                v-if="hide.license"
                outlined
                truncate-length="15"
                label="Upload Driving License"
              ></v-file-input>
              <v-file-input
                class="mb-2"
                dense
                show-size
                counter
                filled
                accept="image/*"
                v-on:change="image($event, 3)"
                required
                v-model="fileUpload[3]"
                :rules="photo"
                outlined
                truncate-length="15"
                label="Upload Photo"
              ></v-file-input>
              <v-btn @click="upload()" class="button sign-up-button white--text"
                >upload</v-btn
              >
            </v-form>
          </v-card-header>
        </v-card>
        <v-card v-else class="d-flex flex-column align-center pa-5 ma-5">
          <h2 class="grey--text text--darken-3 text-center">KYC Details</h2>
          <Loader v-if="loader" />
          <v-card v-if="!loader" elevation="0" max-width="300" class="mx-auto">
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
                <v-img :src="'https://payments,fizzcoin.org/'+colors[i]" height="100%" tile> </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-list two-line>
              <v-list-item>
                <div class="text-h6 mx-auto">
                  {{ data.kyc_type == 0 ? "Driving License" : "Aaadhar Card" }}
                </div>
              </v-list-item>
            </v-list>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout> -->
    <!-- <v-card class="pa-5 ma-5 d-flex flex-column align-center">
      <v-card-title class="grey--text text--darken-3 text-h5 font-weight-bold text-uppercase">
        Enter Your Bank Details
      </v-card-title>
      <v-form lazy-validation v-model="bank_valid" ref="bankForm">
        <v-layout row wrap>
          <v-flex x12 md6>
            <v-text-field
              outlined
              dense
              class="ma-3"
              required
              :rules="account"
              label="Account Number"
              v-model="account_number"
            ></v-text-field>
          </v-flex>
          <v-flex x12 md6>
            <v-text-field
              outlined
              dense
              required
              :rules="ifsc"
              label="IFSC Code"
              class="ma-3"
              v-model="ifsc_code"
            ></v-text-field>
          </v-flex>
          <v-flex x12 md6>
            <v-text-field
              outlined
              dense
              required
              :rules="city_name"
              class="ma-3"
              label="City"
              v-model="city"
            ></v-text-field>
          </v-flex>
          <v-flex x12 md6>
            <v-text-field
              outlined
              dense
              required
              :rules="pin"
              class="ma-3"
              label="Pincode"
              v-model="pincode"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-btn @click="enterBankDetails()" class="sign-up-button white--text">Submit</v-btn>
      </v-form>
    </v-card> -->
  </v-container>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";

export default {
  data() {
    return {
      name: "",
      mobile: "",
      data: "",
      email: "",
      items: [
        {
          itemName: "Passport",
          value: 1,
        },
        {
          itemName: "Driving License",
          value: 0,
        },
      ],
      value: "",
      hide: {
        aadhar: false,
        license: false,
      },
      files: "",
      base64: ["", "", "", ""],
      fileUpload: [null, null, null, null],
      kyc_completed: false,
      image1: "",
      image2: "",
      photo: "",
      colors: [],
      valid: true,
      profileImage: "",
      profile: false,
      new_pass: "",
      old_pass: "",
      valid: true,
       nameRules: [(v) => !!v || "Old Password is required"],
      confirm: [(v) => !!v || "Confirm Password is required"],
      newPass: [(v) => !!v || "New Password is required"],
      front: [(v) => !!v || "Front Picture of aadhar is required"],
      back: [(v) => !!v || "back Picture of aadhar is required"],
      driving: [(v) => !!v || "Picture of Driving License is required"],
      photo: [(v) => !!v || "Photo is required"],
      account: [(v) => !!v || "Account Number is required"],
      ifsc: [(v) => !!v || "IFSC Code is required"],
      city_name: [(v) => !!v || "City Name is required"],
      pin: [(v) => !!v || "Pincode is required"],
      bank_valid: true,
      account_number: "",
      ifsc_code: "",
      city: "",
      pincode: "",
    };
  },

  created() {
    const userInfo = localStorage.getItem("user");
    //  console.log(userInfo)
    const decrypted = Crypto.AES.decrypt(
      userInfo,
      "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
    ).toString(Crypto.enc.Utf8);

    const data = JSON.parse(decrypted);
    //  console.log(decrypted)
    this.data = data;

    console.log(data.photo);

    console.log(this.data);
    this.kyc_completed = data.kyc_type > -1;
    console.log(this.kyc_completed);
    if (data.kyc_type > -1) {
      this.profile = true;
      if (data.kyc_type == 0) {
        this.colors.push(data.kyc1);
        //   this.slides.push("Driving License")
      } else if (data.kyc_type == 1) {
        this.colors.push(data.kyc1);
        this.colors.push(data.kyc2);
        console.log(this.colors);
        //this.slides.push("Driving License")
      }
    }
  },

  methods: {
    getData(e) {
      if (e == 0) {
        this.hide.license = true;
        this.hide.aadhar = false;
      } else if (e == 1) {
        this.hide.license = false;
        this.hide.aadhar = true;
      } else {
        this.hide.license = false;
        this.hide.aadhar = false;
      }
      this.base64 = ["", "", "", ""];

      this.fileUpload = [null, null, null, null];
    },
    async upload() {
      let flag = false;
      if (this.value == 0) {
        if (this.base64[2] != "" && this.base64[3] != "") {
          flag = true;
        }
      } else if (this.value == 1) {
        if (
          this.base64[0] != "" &&
          this.base64[1] != "" &&
          this.base64[3] != ""
        ) {
          flag = true;
        }
      }

      if (flag == true) {
        const userInfo = localStorage.getItem("user");
        //  console.log(userInfo)
        const decrypted = Crypto.AES.decrypt(
          userInfo,
          "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
        ).toString(Crypto.enc.Utf8);

        const user = JSON.parse(decrypted);

        let data = {
          userid: user.id,
          kycType: this.value,
          photo: this.base64[3],
        };
        if (this.value == 0) {
          data.kyc1 = this.base64[2];
        } else if (this.value == 1) {
          data.kyc1 = this.base64[0];
          data.kyc2 = this.base64[1];
        }
        const imageUpload = await axios.post(
          "https://payments.fizzcoin.org/api/user/uploadKYC",
          data
        );
        user.kyc_type = this.value;
        user.kyc1 = imageUpload.data.kyc1;
        user.kyc2 = imageUpload.data.kyc2;
        user.photo = imageUpload.data.photo;
        localStorage.setItem("user", JSON.stringify(user));
        //console.log(imageUpload)
        window.location.reload();
      } else {
        console.log("Upload picture");
      }
    },

    async image(e, img) {
      await this.imageToBase64(e, img);

      //   console.log(this.base64);
      //console.log(await this.imageToBase64(e, img))
    },
    imageToBase64(file, img) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64[img] = reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };

      return reader.result;
    },

    async changePassword() {
      this.$refs.form.validate();
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const user = JSON.parse(decrypted);
      const response = await axios.post(
        "https://payments.fizzcoin.org/api/user/changePassword",
        {
          email: user.email,
          password: this.old_password,
          new: this.new_password,
          confirm: this.confirm_password,
        }
      );

      if (response.status === 200) {
        this.change = true;
        setInterval(() => {
          this.$store.dispatch("logout");
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
.profile-section {
  width: 100%;
  height: 200px;
  background: url("../assets/xyz.png");
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 5px;
}

.profile-section .profile-image {
  width: 150px;
  height: 150px;
  position: absolute;
  border: solid 5px #fff;
  bottom: -30%;
  left: 5%;
  border-radius: 50%;
  padding: 0;
  margin: 0;
}

.profile-section .profile-name {
  position: absolute;
  left: 20%;
  bottom: 0;
}

.profile-info {
  display: none;
}

.profile-content {
  margin-top: 70px;
  width: 80%;
}

.credit {
  margin: auto;
  width: 350px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.card-credit {
  position: relative;
  width: 350px;
  height: auto;
  margin: auto;
}
.profile {
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.name {
  position: absolute;
  z-index: 2000;
  bottom: 10px;
  left: 10%;
}

.form {
  width: 400px;
}

.form-width {
  width: 40%;
}

@media screen and (max-width: 909px) {
  .form {
    width: 300px;
  }

  .profile-section .profile-image {
    bottom: -30%;
    left: 50%;
    transform: translateX(-50%);
  }

  .profile-section .profile-name {
    display: none;
  }

  .profile-section .profile-email {
    display: none;
  }

  .profile-info {
    display: block;
    margin-top: 70px;
  }

  .profile-content {
    display: none !important;
  }

  .form-width {
    width: 100%;
  }
}
.divider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
}
</style>