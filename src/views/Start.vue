<template>
  <div class="full-page">
    <section class="home-page">
      <div class="home-page-content">
        <img src="./assets/img/iii.gif" alt="" />
        <div class="home-page-content-text d-flex flex-column align-center">
          <p class="white--text text-h4 font-weight-bold">
            Better Blockchain experience with FizzCoin
          </p>
          <p class="white--text text-center">
            Welcome to Fizznet We are a brand new blockchain network which is
            open to all developers and projects. Fizznet automaticlly pay
            exclusive royalties. Fizznet offers very low network as 3rd party
            API connection.. Fizznet offer our very own mining software for
            ecofriendly mining.
          </p>

          <router-link to="/sign-up"><v-btn class="indigo--text text--darken-3 mt-5 font-weight-bold pa-5" depressed>Buy FizzCoin</v-btn></router-link>
        </div>
      </div>
    </section>
    <section class="d-flex flex-column">
      <p class="token red--text mx-auto text-center text-h3 font-weight-bold">
        Token <span id="info">Info</span>
      </p>
      <p class="grey--text text--darken-2 text-center mx-auto text-h6">
        Fizznet is India's cheapest and fastest growing public chain
      </p>
      <v-container class="my-5">
        <p class="text-h5 font-weight-bold">Information of Token</p>
        <v-simple-table>
          <tbody>
            <tr>
              <td>Total Market Transition</td>
              <td>20 Billion</td>
            </tr>
            <tr>
              <td>Total Pre-sale</td>
              <td>500 M</td>
            </tr>
            <tr>
              <td>Market Value</td>
              <td>0.02$</td>
            </tr>
          </tbody>
        </v-simple-table>
        <p
          class="
            token
            mt-5
            red--text
            mx-auto
            text-center text-h3
            font-weight-bold
          "
        >
          Technical <span id="info">Roadmap</span>
        </p>
        <p class="grey--text text--darken-2 text-center mx-auto text-h6">
          The Technical road map of our business system
        </p>

        <img class="starting" src="./assets/img/kk.gif" alt="" />
        <v-card
          width="300"
          class="mt-5 text-center d-flex flex-column align-center pa-5 mx-auto"
        >
          <img src="../assets/team/feature-1.svg" alt="">
          <p class="my-2 text-h6 text-center">Instant Settlement</p>
          <p class="grey--text text-center text-darken-2">
            You can use the funds right away instead of waiting the typical two
            trading days
          </p>
        </v-card>
      </v-container>
    </section>
    <div class="card-section">
      <img class="web" src="./assets/img/kk.gif" alt="" />
      <v-card
        width="300"
        class="mt-5 text-center d-flex flex-column align-center pa-5 mx-auto"
      >
        <img src="../assets/team/feature-2.svg" alt="">
          <p class="my-2 text-h6 text-center">Flexibility</p>
          <p class="grey--text text-center text-darken-2">
            we offer Android + iOS pocket wallet for purchasing, exchanging & selling.
          </p>
      </v-card>
      <v-card
        width="300"
        class="mt-5 text-center d-flex flex-column align-center pa-5 mx-auto"
      >
         <img src="../assets/team/feature-3.svg" alt="">
          <p class="my-2 text-h6 text-center">Exchange</p>
          <p class="grey--text text-center text-darken-2">
           Users can exchange NFTs through the app and other platforms
          </p>
      </v-card>
    </div>
    <div class="card-section">
      <v-card
        width="300"
        class="mt-5 text-center d-flex flex-column align-center pa-5 mx-auto"
      >
         <img src="../assets/team/feature-4.svg" alt="">
          <p class="my-2 text-h6 text-center">NFT's</p>
          <p class="grey--text text-center text-darken-2">
            We offer NFTs in the form of audio with the concept of geo location
          </p>
      </v-card>
      <v-card
        width="300"
        class="mt-5 text-center d-flex flex-column align-center pa-5 mx-auto"
      >
         <img src="../assets/team/feature-5.svg" alt="">
          <p class="my-2 text-h6 text-center">High Profile</p>
          <p class="grey--text text-center text-darken-2">
            As per the extra ordinary concept of NFTs, one can have the high profit from our platform
          </p>
      </v-card>
    </div>
    <v-card
      width="300"
      class="my-7 text-center d-flex flex-column align-center pa-5 mx-auto"
    >
       <img src="../assets/team/feature-6.svg" alt="">
          <p class="my-2 text-h6 text-center">API Support</p>
          <p class="grey--text text-center text-darken-2">
            You can get the API from our platform for the integration in the custom platforms
          </p>
    </v-card>
    <section class="timer my-5">
      <p
        class="
          pa-5
          mt-15
          text-center
          mx-auto
          white--text
          text-h4
          font-weight-bold
        "
      >
        Time Left
      </p>
      <p width="300" class="white--text text-center mx-auto text-h6">
        Fizznet automaticlly pay exclusive royalties. Fizznet offers very low
        network as 3rd party API connection.
      </p>
      <div class="timer-content">
        <div class="time">
          <div class="time-content">
            <p class="white--text text-h5 font-weight-bold text-center">
              {{ days }} days
            </p>
          </div>
        </div>
        <div class="time">
          <div class="time-content">
            <p class="white--text text-h5 font-weight-bold text-center">
              {{ hours }} hours
            </p>
          </div>
        </div>
        <div class="time">
          <div class="time-content">
            <p class="white--text text-h5 font-weight-bold text-center">
              {{ minutes }} minutes
            </p>
          </div>
        </div>
        <div class="time">
          <div class="time-content">
            <p class="white--text text-h5 font-weight-bold text-center">
              {{ seconds }} seconds
            </p>
          </div>
        </div>
      </div>
      <div class="timer-card pa5 mt-15">
        <div class="timer-card-content">
          <p class="grey--text text--darken-3 font-weight-bold text-h5">
            Join Today & Buy a Fizznet
          </p>
          <p class="grey--text text--darken-2">Start a new dream</p>
        </div>
        <a class="buy-fizznet" href="#"
          >Buy Fizznet <i class="fas fa-arrow-right"></i></a>
      </div>
    </section>
    <footer class="bg-secondary-gradient">
      <div class="footer-sec pt-50">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 py-4">
              <div class="footer-widget">
                <a href="#" class="footer-logo mb-4 main-logo-styling">
                  <img src="./assets/img/logo-fizz.png" alt="" />
                </a>
                <p>
                  Welcome to Fizznet We are a brand new blockchain network which
                  is open to all developers and projects. Fizznet automaticlly
                  pay exclusive royalties. Fizznet offers very low network as
                  3rd party API connection.. Fizznet offer our very own mining
                  software for ecofriendly mining.
                </p>
                <div class="social-icons">
                  <a href="#">
                    <i id="icon" class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i id="icon" class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                   <i id="icon" class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i id="icon" class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 py-4">
              <div class="footer-widget">
                <h4
                  class="
                    white--text
                    text-h5
                    font-weight-bold
                    py-5
                    footer-widget-title
                  "
                >
                  Sitemap
                </h4>
                <ul class="footer-widget-menu column-2">
                  <li><a href="about.html">About</a></li>
                  <li><a href="#">fizznet</a></li>
                  <li><a href="#">Statistic</a></li>
                  <li><a href="roadmap.html">Roadmap</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="#">Error</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 py-4">
              <div class="footer-widget">
                <h4
                  class="
                    white--text
                    text-h5
                    font-weight-bold
                    py-5
                    footer-widget-title
                  "
                >
                  Link
                </h4>
                <ul class="footer-widget-menu mb-4">
                  <li><a href="#">Help & FAQ</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Privecy Policy</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 py-4 col-md-6">
              <div class="footer-widget">
                <h4
                  class="
                    white--text
                    text-h5
                    font-weight-bold
                    py-5
                    footer-widget-title
                  "
                >
                  Newsletter
                </h4>
                <p>Subscribe our newsletter for get Update</p>
                <div class="newsletter-widget my-7">
                  <input
                    class="input"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <input class="btn" type="submit" value="Send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright-sec border-top border-white">
        <div class="container">
          <div class="copyright-inner text-center white--text d-block">
            <p>Copyright © 2021 Fizznet All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
      desserts: [
        {
          name: "PRE-ICO",
          calories: "10/06/2021 - 10/07/2021",
          price: "20 Cents",
          bonus: "30%",
        },
        {
          name: "ICP Round 1",
          calories: "10/08/2021 - 10/08/2021",
          price: "35 Cents",
          bonus: "25%",
        },
        {
          name: "ICO Round 2",
          calories: "10/09/2021 - 10/09/2021",
          price: "45 Cents",
          bonus: "20%",
        },
        {
          name: "ICO Round 3",
          calories: "10/10/2021 - 10/10/2021",
          price: "55 Cents",
          bonus: "15%",
        },
        {
          name: "ICO Round 4",
          calories: "10/11/2021 - 10/11/2021",
          price: "20 Cents",
          bonus: "10%",
        },
      ],
      items: [
        {
          name: "Token Name",
          calories: "Mutual Alliance Group",
        },
        {
          name: "Token Platform",
          calories: "Magtoken24x7",
        },
        {
          name: "Token Standard",
          calories: "MAG",
        },
        {
          name: "Max. Supply (Hard Cap)",
          calories: "1,000,000,000",
        },
        {
          name: "Available for Purchase",
          calories: "20 Cents",
        },
      ],
    };
  },

  mounted() {
    var countDownDate = new Date("Jun 13, 2021 00:00:00");

    let x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.home-page {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url("./assets/img/demo-banner.png");
  background-position: center;
  background-size: cover;
}

.social-icons{
  color: white;
}

#icon{
  color: white;
  margin-right: 10px;
}

.home-page-content {
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
}

.home-page-content img {
  width: 500px;
}

.home-page-content-text {
  width: 50%;
}

.token {
  background: -webkit-linear-gradient(
    45deg,
    rgb(255, 11, 42),
    rgb(255, 117, 2)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#info {
  color: rgb(0, 3, 73);
}

.card-section {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.timer {
  width: 100%;
  background: url("./assets/img/curve-bg.png");
  background-position: center;
  background-size: cover;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.timer-content {
  display: flex;
  width: 90%;
  padding: 20px 0;
  justify-content: space-around;
}

.time {
  margin-bottom: 30px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: dotted 2px white;
}

.time-content {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px white;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.timer-card {
  width: 80%;
  background: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
}

.buy-fizznet {
  padding: 10px 15px;
  background: linear-gradient(180deg, #ff7a00 -12.44%, #ff002e 100%);
  color: white;
}

.starting {
  width: 300px;
  margin: auto;
  text-align: center;
  display: none;
  justify-content: center;
  align-items: center;
}
footer {
  background: linear-gradient(90deg, #000349 0%, #005b8e 100%);
}

.footer-logo img {
  width: 70px;
  padding: 20px 0;
}

.footer-widget p {
  color: white;
}

.footer-widget-menu {
  padding: 0;
  margin: 0;
}

.footer-widget-menu li {
  margin-bottom: 10px;
}

.footer-widget-menu li a {
  color: white;
}

.input {
  border: solid 2px white;
  padding: 10px 15px;
  color: white;
}
.btn {
  padding: 12px 15px;
  color: white;
  background: crimson;
}

.copyright-sec {
  border-top: solid 2px white;
}

.web {
  width: 350px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fa {
  color: white;
  border: solid 2px white;
  border-radius: 50%;
  padding: 15px;
  margin-right: 15px;
}
@media screen and (max-width: 909px) {
  .home-page-content {
    flex-direction: column;
  }

  .web {
    display: none;
  }

  .home-page-content img {
    display: none;
  }
  .home-page-content-text {
    width: 100%;
  }

  .starting {
    display: flex;
  }

  .card-section {
    flex-direction: column;
  }

  .timer-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .timer {
    height: 2000px;
    justify-content: center;
    align-items: center;
  }

  .timer-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>