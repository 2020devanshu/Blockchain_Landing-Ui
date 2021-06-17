<template>
  <div>
    <div class="loader" v-if="loader">
      <v-progress-circular
        :size="50"
        color="amber"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-dialog v-model="sign" width="500">
      <v-card>
        <v-card-title
          class="text-h6 grey--text text--darken-3 font-weight-bold"
        >
          Please Enter Your Password
        </v-card-title>

        <v-card-text> Don't share your private key. </v-card-text>
        <p v-if="wrong" class="mx-auto text-center red--text">
          Please Enter Your Password
        </p>
        <p v-if="wrongPass" class="mx-auto text-center red--text">
          Wrong Password
        </p>
        <v-form class="mt-n5">
          <v-text-field
            v-model="password"
            required
            dense
            outlined
            type="password"
            label="Password"
          ></v-text-field>
          <v-btn
            @click="getPrivateKey()"
            depressed
            class="white--text indigo darken-4"
            >SUBMIT</v-btn
          >
        </v-form>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>

    <v-dialog v-model="errorDialog" width="600">
      <v-card class="d-flex flex-column align-center pa-5">
        <v-card-title class="text-h4"> Transfer Error </v-card-title>
        <p class="text-h6 caption grey--text text--darken-2 text-center">
          {{ errormsg }} Click <router-link to="/deposit">Here</router-link> to
          purchase tokens.
        </p>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="indigo darken-4" text @click="errorDialog = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="successDialog" width="600">
      <v-card class="d-flex flex-column align-center pa-5">
        <v-card-title class="text-h5"> Transfered Tokens </v-card-title>
        <p class="text-h6 caption grey--text text--darken-2 text-center">
          {{ successmsg }}
        </p>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="indigo darken-4"
            text
            @click="
              successDialog = false;
              location.reload();
            "
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container class="my-5" v-if="!loader">
      <v-layout row wrap>
        <v-flex x12 md6>
          <v-col cols="12">
            <v-card
              class="d-flex flex-column text-center align-center pa-9 ma-5"
            >
              <v-card-header>
                <v-img class="card-image" src="../assets/logo-fizz.png"></v-img>
                <h2 class="grey--text text--darken-3 text-center">
                  P2P Transfer
                </h2>

                <v-text-field
                  label="Reciever Wallet"
                  dense
                  :disabled="disabled.wallet"
                  v-model="reciever"
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Reciever Name"
                  dense
                  :value="name"
                  disabled
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Amount"
                  dense
                  v-model="amount_value"
                  :disabled="disabled.amount"
                  outlined
                ></v-text-field>

                <v-btn
                  :disabled="disabled.verify"
                  @click="verify()"
                  class="indigo darken-4 white--text"
                  >VERIFY</v-btn
                >
                <v-btn
                  :disabled="disabled.transfer"
                  @click="transfer()"
                  class="indigo darken-4 white--text"
                  >Transfer</v-btn
                >
              </v-card-header>
            </v-card>
          </v-col>
        </v-flex>

        <v-flex x12 md6>
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="
                light-blue
                darken-4
                d-flex
                align-center
                justify-space-between
                pa-5
                ma-5
              "
              :elevation="hover ? 16 : 2"
            >
              <v-flex xs6>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      <v-btn fab color="teal lighten-2" elevation="0">
                        <v-img class="mog" src="../assets/logo-fizz.png"></v-img>
                      </v-btn>
                    </div>
                    <v-list-item-title class="headline mb-1 white--text">
                      {{ parseInt(etharBalance * 10000) / 10000 }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">
                      Ether Balance
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-flex>
              <v-flex xs6>
                <v-img src="../assets/wallet.svg" class="image ml-7"></v-img>
              </v-flex>
            </v-card>
          </v-hover>
          <v-card class="pa-2 ma-5 d-flex align-center justify-center">
            <p class="grey--text text--darken-3 mt-5 pr-5">
              Click Here to get your private Key
            </p>
            <v-btn
              depressed
              class="white--text indigo darken-4"
              @click="sign = true"
              >Get Key</v-btn
            >
          </v-card>

          <v-card class="d-flex align-center pa-2 ma-5" v-if="showPrivateKey">
            <v-text-field
              :value="privKey"
              dense
              @change="getValue(e)"
              ref="getKey"
              outlined
              label="Private Key"
              disabled
              class="mt-6 private"
            ></v-text-field>
            <v-btn v-clipboard:copy="privKey" v-clipboard:success="onCopy"
              >COPY</v-btn
            >
          </v-card>
          <v-img class="gif" src="../assets/profile.gif"></v-img>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 md12 lg12>
          <v-card class="pa-5 ma-5">
            <p
              class="
                mx-auto
                text-center
                grey--text
                text--darken-3 text-h5
                font-weight-bold
                text-uppercase
              "
            >
              Steps to purchase Ether
            </p>

            <p class="text-center mx-auto">
              (In order to complete Peer 2 Peer transaction you need to have
              some ether in the above represented wallet)
            </p>
            <ol class="ma-5">
              <li class="my-2">
                <p>Install Metamask Extension on your browser.</p>
              </li>
              <li class="my-2">
                <p>Copy your private key and add your account to Metamask</p>
              </li>
              <li class="my-2"><p>Switch network to Ropsten testnet</p></li>
              <li class="my-2"><p>Click on buy ether</p></li>
              <li class="my-2"><p>Click on get test ethers</p></li>
              <li class="my-2"><p>Click on get 1 ether</p></li>
            </ol>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      You Copied Private Key

      <template v-slot:action="{ attrs }">
        <v-btn color="yellow" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import Crypto from "crypto-js";
export default {
  data() {
    return {
      amount: "",
      reciever: "",
      name: "Please Verify",
      disabled: {
        wallet: false,
        amount: true,
        verify: false,
        transfer: true,
      },
      amount_value: "",
      etharBalance: "",
      loader: false,
      errormsg: "",
      errorDialog: false,
      successDialog: false,
      successmsg: "",
      wallet: "",
      snackbar: false,
      text: "You Copied wallet Address",
      timeout: 2000,
      sign: false,
      password: "",
      showPrivateKey: false,
      privKey: "",
      key: "bjhgh",
      wrong: false,
      wrongPass: false,
    };
  },

  methods: {
    onCopy() {
      this.snackbar = true;
      this.showPrivateKey = false;
      this.sign = false;
    },
    async verify() {
      const verify = await axios.post(
        "http://payments.fizzcoin.org/api/wallet/verify",
        {
          wallet: this.reciever,
        }
      );
      if (verify.data.success === true) {
        this.name = verify.data.data.name;
        this.disabled.verify = true;
        this.disabled.amount = false;
        this.disabled.transfer = false;
        this.disabled.wallet = true;
      } else {
        this.name = "Invaild Address";
      }
    },

    async transfer() {
      this.loader = true;
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const wallet = JSON.parse(decrypted);
      const response = await axios.post(
        `http://api.fizzcoin.org/eth/gettokenbalance`,
        {
          usdtaddress: wallet.walladdress,
        }
      );

      if (+response.data.msg / Math.pow(10, 18) >= this.amount_value) {
        let apidata = {
          fromaddress: wallet.walladdress,
          privatekey: wallet.privatekey,
          recieveraddress: this.reciever,
          inputvalue: this.amount_value,
        };

        const post = await axios.post(
          "http://api.fizzcoin.org/eth/transfertoken",
          apidata
        );
        if (post.status === 200) {
          const status = await axios.post(
            "http://payments.fizzcoin.org/api/transfer/tokentransfer",
            {
              userid: wallet.id,
              recieveraddress: apidata.recieveraddress,
              token: apidata.inputvalue,
              hash: post.data.msg,
            }
          );

          if (status.data.statuscode === 200) {
            this.loader = false;
            this.successmsg =
              "Successfully Transfered " +
              apidata.inputvalue +
              " Fizz tokens to " +
              this.name;
            this.successDialog = true;
          }
        }
      } else {
        this.errormsg = "Insufficient tokens in Wallet";
        this.loader = false;
        this.errorDialog = true;
      }
    },

    async getEth() {
      const userInfo = localStorage.getItem("user");
      //  console.log(userInfo)
      const decrypted = Crypto.AES.decrypt(
        userInfo,
        "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
      ).toString(Crypto.enc.Utf8);

      const wallet = JSON.parse(decrypted);
      console.log(wallet);
      const response = await axios.post(
        `http://api.fizzcoin.org/eth/getuseretherbalance`,
        {
          usdtaddress: wallet.walladdress,
        }
      );
      console.log(response)
      this.etharBalance = +response.data.msg / Math.pow(10, 18);
    },

    async getPrivateKey() {
      if (this.password == "") {
        this.wrong = true;
        this.wrongPass = false;
      } else {
        const response = await axios
          .post("http://payments.fizzcoin.org/api/user/login", {
            email: this.wallet.email,
            password: this.password,
          })
          .catch((err) => {
            this.wrong = false;
            this.wrongPass = true;
          });
        if (response.status === 200) {
          this.showPrivateKey = true;
          this.privKey = this.wallet.privatekey;
          this.wrong = false;
          this.wrongPass = false;
          this.sign = false;
        }
      }
    },
  },

  created() {
    this.getEth();
    const userInfo = localStorage.getItem("user");
    //  console.log(userInfo)
    const decrypted = Crypto.AES.decrypt(
      userInfo,
      "Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451"
    ).toString(Crypto.enc.Utf8);

    const data = JSON.parse(decrypted);
    console.log(data);
    this.wallet = data;
  },
};
</script>

<style scoped>
input {
  color: black;
}
.gif {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.card-image {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.mog {
  width: 20px;
}

.image {
  width: 100px;
}

@media screen and(max-width: 909px) {
  .gif {
    width: 300px;
  }
}
</style>