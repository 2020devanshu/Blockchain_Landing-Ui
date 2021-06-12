<template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="d-flex flex-column align-center pa-8 ma-5">
          <img
            v-if="profile"
            class="profile rounded-circle"
            :src="data.photo"
          />
          <img
            v-if="!profile"
            class="profile rounded-circle"
            src="../assets/man.png"
          />
          <h2 class="grey--text my-5 text--darken-3">{{ data.name }}</h2>
          <h4 class="grey--text mb-2 text--darken-3">{{ data.mobile }}</h4>
          <h4 class="grey--text mb-2 text--darken-3">{{ data.email }}</h4>
          <v-form>
            <v-text-field label="Change Password" dense outlined></v-text-field>
            <v-text-field
              label="Confirm Password"
              dense
              outlined
            ></v-text-field>
            <v-btn class="indigo darken-4 white--text">Change Password</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card
          v-if="!kyc_completed"
          class="d-flex flex-column align-center pa-16 ma-5"
        >
          <v-card-header>
            <h2 class="grey--text text--darken-3 text-center">KYC Details</h2>
            <v-select
              class="mt-5"
              :items="items"
              label="Select KYC Document"
              v-model="value"
              v-on:change="getData($event)"
              item-text="itemName"
              item-value="value"
            ></v-select>
            <v-form class="form">
              <v-file-input
                class="mb-2"
                dense
                accept="image/*"
                show-size
                v-model="fileUpload[0]"
                counter
                v-if="hide.aadhar"
                v-on:change="image($event, 0)"
                filled
                outlined
                truncate-length="15"
                label="Upload Passport Front"
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
                v-if="hide.aadhar"
                outlined
                truncate-length="15"
                label="Upload Passport Back"
              ></v-file-input>
              <v-file-input
                class="mb-2"
                dense
                show-size
                counter
                accept="image/*"
                v-on:change="image($event, 2)"
                v-model="fileUpload[2]"
                filled
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
                v-model="fileUpload[3]"
                outlined
                truncate-length="15"
                label="Upload Photo"
              ></v-file-input>
              <v-btn
                @click="upload()"
                class="button indigo darken-4 white--text"
                >upload</v-btn
              >
            </v-form>
          </v-card-header>
        </v-card>
        <v-card v-else class="d-flex flex-column align-center pa-5 ma-5">
          <h2 class="grey--text text--darken-3 text-center">KYC Details</h2>
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
    </v-layout>
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
      profileImage: "",
      profile: false,
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
          "http://api.fizzcoin.org/api/user/uploadKYC",
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
  },
};
</script>

<style scoped>
.profile {
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.form {
  width: 400px;
}

@media screen and (max-width: 909px) {
  .form {
    width: 300px;
  }
}
</style>