<template>
  <div class="contact-page">
    <div class="contact-page-svg"></div>
    <section class="contact-page-content">
      <v-container class="mt-10">
        <p class="token red--text mx-auto text-center text-h3 font-weight-bold">
          Contact Us
        </p>
        <p class="grey--text text--darken-2 text-center mx-auto text-h6">
          If any query just contact us
        </p>
        <v-layout row wrap class="mt-10">
          <v-flex x12 md6>
            <v-img src="./assets/img/contact.png"></v-img>
          </v-flex>
          <v-flex x12 md6>
            <v-form class="">
              <v-text-field dense outlined label="Name"></v-text-field>
              <v-text-field dense outlined label="Your E-Mail"></v-text-field>
              <v-textarea dense outlined label="Your Message"></v-textarea>
              <v-btn depressed class="indigo darken-4 white--text"
                >Submit</v-btn
              >
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
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
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube-play"></i>
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
export default {};
</script>

<style scoped>
*{
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.contact-page {
  width: 100%;
}

.contact-page-svg {
  width: 100%;
  height: 250px;
  background: url("./assets/img/bg-1.svg") no-repeat scroll left bottom/cover;
}

footer{
  background: linear-gradient(90deg, #000349 0%, #005B8E 100%);
}

.footer-logo img{
  width: 70px;
  padding: 20px 0;
}

.footer-widget p{
  color: white;
}

.footer-widget-menu{
  padding: 0;
  margin: 0;
}

.footer-widget-menu li{
  margin-bottom: 10px;
}

.footer-widget-menu li a{
  color: white;
}

.input{
  border: solid 2px white;
  padding: 10px 15px;
  color: white;
}
.btn{
  padding: 12px 15px;
  color: white;
  background: crimson;
}

.copyright-sec{
  border-top: solid 2px white;
}

.fa{
  color: white;
  border: solid 2px white;
  border-radius: 50%;
  padding: 15px;
  margin-right: 15px;
}
</style>