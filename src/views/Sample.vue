<template>
	<div class="home-page">
		<div class="background">
			<div class="background-content">
				<div class="background-content-left">
					<p>MAG (Mutual Alliance Global) is a decentralized, blockchain-powered cryptocurrency designed to provide cutting-edge financial solutions with a vision to bring financial stability, liquidity & accessibility to the main stream.
MAG Token has come to offer an all-in-one service where use sell cryptocurrency with our secured escrow service and also pay for utility services using MAG ecosystem. These added services bring more significant advantage to MAG Token, giving the ecosystem an edge when compared to existing DeFi applications</p>
					<div class="mag-buttons">
						<v-btn class="mr-5 orange--text">BUY MAG</v-btn>
						<v-btn class="mx-5 orange--text">WHITEPAPER</v-btn>
					</div>
				</div>
				<div class="background-content-right">
					<img class="icon" src="../assets/image.png" alt="">
				</div>
			</div>


		</div>
		<section class="get-started">
			<div class="get-started-content">
				<h3 class="grey--text text--darken-3 my-5">HOW TO GET STARTED</h3>
				<v-layout row wrap>
					<v-flex xs12 md6 lg4>
						<v-card class="pa-5 ma-5 d-flex flex-column align-center">
							<v-img class="card-image" src="../assets/feature-1.svg"></v-img>
							<h3 class="grey--text text--darken-3 text-center my-3">CREATE AN ACCOUNT</h3>
							<p class="grey--text text--darken-2 text-center my-3">Click Log In, fill required details, get the documents registered and your account has been created</p>
						</v-card>
					</v-flex>
					<v-flex xs12 md6 lg4>
						<v-card class="pa-5 ma-5 d-flex flex-column align-center">
							<v-img class="card-image mt-6" src="../assets/feature-2.svg"></v-img>
							<h3 class="grey--text text--darken-3 text-center my-3">FILL YOUR KYC</h3>
							<p class="grey--text text--darken-2 text-center my-3">Click Log In, fill required details, get the documents registered and your account has been created</p>
						</v-card>
					</v-flex>
					<v-flex xs12 md6 lg4>
						<v-card class="pa-5 ma-5 d-flex flex-column align-center">
							<v-img class="card-image" src="../assets/feature-3.svg"></v-img>
							<h3 class="grey--text text--darken-3 text-center my-3">START BUYING & SELLING</h3>
							<p class="grey--text text--darken-2 text-center my-3">Click Log In, fill required details, get the documents registered and your account has been created</p>
						</v-card>
					</v-flex>
				</v-layout>
			</div>
		</section>

		<div class="table my-10">
			<v-simple-table>
				<template v-slot:default>
			
				<tbody>
					<tr
					v-for="item in items"
					:key="item.name"
					>
					<td>{{ item.name }}</td>
					<td>{{ item.calories }}</td>
					</tr>
				</tbody>
				</template>
			</v-simple-table>
		</div>

		<div class="table-2">
			<v-simple-table>
				<template>
					<thead class="orange darken-2 white--text">
						<tr>
						<th class="text-left white--text">
							Round
						</th>
						<th class="text-left white--text">
							Start-End Date
						</th>
						<th class="text-left white--text">
							Price
						</th>
						<th class="text-left white--text">
							Bonus
						</th>
						<th class="text-left white--text">
							Phase Launching
						</th>
						</tr>
					</thead>
				<tbody>
					<tr
					v-for="ite in desserts"
					:key="ite.name"
					>
						<td>{{ ite.name }}</td>
						<td>{{ ite.calories }}</td>
						<td>{{ ite.price }}</td>
						<td>{{ ite.bonus }}</td>
						<td>{{ ite.phase }}</td>
					</tr>
				</tbody>
				</template>
			</v-simple-table>
		</div>
		<div class="wrraper">
		<div class="roadmap">
			<v-container class="my-6 d-flex flex-column align-center justify-center">
				<h1 class="my-3 text-center grey--text text--darken-3">MAG Roadmap</h1>
				<p class="text-center grey--text text--darken-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, impedit explicabo ratione fuga delectus ab!</p>
				<div class="steppers">
					<div class="timeline-split">
                    <div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12">
                        <div class="timeline section-box-margin">
                            <div class="block block-left">
                               <h3>Q3 2020</h3>
                               <!-- <span>MARCH 12, 2021 to Novamber 19, 2017</span> -->
                               <p>Vision Conceptualized Proof of concept validated</p>
                            </div>

                            <div class="block block-right mt-30">
                               <h3> Q3 2021</h3>
                               <!-- <span>DECAMBER 3, 2017 to DECAMBER 23, 2017</span> -->
                               <p>Business Platforms development Creating a community of followers and members Launching of Casino Games</p>
                            </div>

                            <div class="block block-left mt-30">
                               <h3>Q1 2021</h3>
                               <!-- <span>JANUARY 02, 2021 to MARCH 17, 2021</span> -->
                               <p>Team aligned to execute financial industry disruption with DeFi Tools</p>
                            </div>

                            <div class="block block-right mt-30">
                               <h3> Q2 2021</h3>
                               <!-- <span>APRIL 28, 2021 to MAY 28, 2021</span> -->
                               <p>MAG BEP20 token creation MAG token International Token Launch</p>
                            </div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
				</div>
			</v-container>
			<section class="o-hidden">
			<div class="container-fluid">
				<div class="row">
					<div class="services-column col-lg-5 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
	                    <!--Services Block Four-->
	                    <div class="services-block-four">
	                        <div class="inner-box">
	                            <div class="icon-box">
	                                <span class="icon flaticon-target"></span>
	                            </div>
	                            <h3><a href="#">Initial coin offering dashboard</a></h3>
	                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repellat tempora ullam dolor, vel voluptas quo aut autem similique, voluptatum blanditiis. Hic vitae nostrum, quidem cupiditate, vero ullam excepturi dicta!</div>

	                        </div>
	                    </div>

	                    <!--Services Block Four-->
	                    <div class="services-block-four">
	                        <div class="inner-box">
	                            <div class="icon-box">
	                                <span class="icon flaticon-speedometer"></span>
	                            </div>
	                            <h3><a href="#">Real time prices and marketcap</a></h3>
	                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repellat tempora ullam dolor, vel voluptas quo aut autem similique, voluptatum blanditiis. Hic vitae nostrum, quidem cupiditate, vero ullam excepturi dicta!</div>
	                        </div>
	                    </div>

	                    <!--Services Block Four-->
	                    <div class="services-block-four">
	                        <div class="inner-box">
	                            <div class="icon-box">
	                                <span class="icon flaticon-cogwheel"></span>
	                            </div>
	                            <h3><a href="#">Super easy to adjust, edit or use</a></h3>
	                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repellat tempora ullam dolor, vel voluptas quo aut autem similique, voluptatum blanditiis. Hic vitae nostrum, quidem cupiditate, vero ullam excepturi dicta!</div>
	                        </div>
	                    </div>

                	</div>
                	<div class="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
                		<div class="image-box">
							<img src="../assets/laptop2(2)(1).png" class="" alt="">
						</div>
                	</div>
				</div>
			</div>
		</section>
		</div>
		</div>

<div class="features">
		<v-container class="my-5">
      <h2 class="text-center pa-2 grey--text text--darken-3">Explore (Coming Soon)</h2>
      <v-layout row wrap>
          <v-flex x12 md4>
                <v-card class="d-flex flex-column align-center pa-8 ma-5">
                    <v-card-header>
                        <h3 class="grey--text text--darken-3 text-center">MAG E-commerce</h3>
                    </v-card-header>
                    <v-img src="../assets/remote.png"></v-img>
                    <v-card-content>
                        <p class="grey--text text--darken-3 text-center">MAG has integrated its eCommerce with blockchain offered by MAG Coin, the marketleaders in blockchain technology. MAG's solution illustrates how a blockchain technology can solve the existing problem of verifying the validity of digital assets such as a picture of certified part sold online. Using this solution, the online shopper is assured of a proof of the digital asset certified by an institution, such as MAG Coin, on the blockchain.</p>
                    </v-card-content>
                </v-card>
          </v-flex>
          <v-flex x12 md4>
                <v-card class="d-flex flex-column align-center pa-8 ma-5">
                    <v-card-header>
                        <h3 class="grey--text text--darken-3 text-center">MAG PLay</h3>
                    </v-card-header>
                    <v-img class="ma-3" src="../assets/e.png"></v-img>
                    <v-card-content>
                        <p class="grey--text text--darken-3 text-center">Mutual Alliance Global aims at Constantly pushing the boundaries & advancement ofTechnology, culture and entertainment to meet the ever-increasing demand.       Crypto traders and investors have the public address that they can use for transactions across       different MAG networks. If you create your games on the MAG, your players can take their  unique public addresses from one game to the other.</p>
                    </v-card-content>
                </v-card>
          </v-flex>
          <v-flex x12 md4>
                <v-card class="d-flex flex-column align-center pa-8 ma-5">
                    <v-card-header>
                        <h3 class="grey--text text--darken-3 text-center">MAG E-learning</h3>
                    </v-card-header>
                    <v-img src="../assets/d.png"></v-img>
                    <v-card-content>
                        <p class="grey--text text--darken-3 text-center">Mutual alliance Global bridges the GAP between business owner and Businesses to shore upthe skills in the particular area.the process starts as soon as a learner participates in a course. After finishing the course a newblock is created, which includes the result of the learner, the information about the course inwhich he participated, and the timestamp when the course was finished. The result could alsobe a certificate if the course was completed successfully.</p>
                    </v-card-content>
                </v-card>
          </v-flex>
      </v-layout>
      <v-layout row wrap>
          <v-flex x12 md4>
                <v-card class="d-flex flex-column align-center pa-8 ma-5">
                    <v-card-header>
                        <h3 class="grey--text text--darken-3 text-center">MAG Pay</h3>
                    </v-card-header>
                    <v-img src="../assets/f.png"></v-img>
                    <v-card-content>
                        <p class="grey--text text--darken-3 text-center">MAG BIS is a unique digital wallet that facilitates fast, smart, accessible & profitable financial services for storing, swapping, staking & lending of MAG while connecting you to a full transactional ecosystem. Our custom built dAPP also enables users to farm it native protocol token "EASY" by interacting with the protocol using the deep liquidity pools of binance smart chain</p>
                    </v-card-content>
                </v-card>
          </v-flex>
          <v-flex x12 md4>
                <v-card class="d-flex flex-column align-center pa-8 ma-5">
                    <v-card-header>
                        <h3 class="grey--text text--darken-3 text-center">XMagnet</h3>
                    </v-card-header>
                    <v-img src="../assets/2.png"></v-img>
                    <v-card-content>
                        <p class="grey--text text--darken-3 text-center">XMAGNET is a multi-functional crypto-exchange platform allowing users to trade/invest in multiple cryptocurrencies that maximize your profits in more reliable and secured way. MAG enables trading of a variety of liquid assets (Liquids) based on spot cryptocurrencies, commodities, and thematic indexes with nearly instant confirmation time and immediate finality..</p>
                    </v-card-content>
                </v-card>
          </v-flex>
          <v-flex x12 md4>
                <v-card class="d-flex flex-column align-center pa-8 ma-5">
                    <v-card-header>
                        <h3 class="grey--text text--darken-3 text-center">MAG Gate</h3>
                    </v-card-header>
                    <v-img src="../assets/3.png"></v-img>
                    <v-card-content>
                        <p class="grey--text text--darken-3 text-center">MAG GATE is an innovative global payment processor and platform that allows users to buy and sell products using cryptocurrencies with ease and confidence. It guarantees fast, safe and secure transactions with an integration of cryptocurrency payments infrastructure that allows to track orders and manage your cryptocurrency earnings in style</p>
                    </v-card-content>
                </v-card>
          </v-flex>
      </v-layout>
  		</v-container>
</div>


  <section class="main-footer footer-style-two text-center" id="contact">
        <!--Widgets Section-->
        <div class="widgets-section">
            <div class="container">

                <div class="row clearfix">
                   <!--Footer Column-->
                   <div class="footer-column col-md-4 col-sm-6 col-xs-12">
                      <div class="footer-widget about-widget">
                         <h3 class="has-line-center">About Mag</h3>
                         <div class="widget-content">
                            <div class="text">Mag is Powerful and Complete Solution for your Crypto Currencies ICO start up business.Now you can Easily Start an ICO website in just a few adjustmets </div>
                               <ul class="social-links">
                                  <li><a href="https://www.facebook.com/MAG-Token-100738462127760"><span class="fa fa-facebook-f"></span></a></li>
                                  <li><a href="https://twitter.com/mag_token"><span class="fa fa-twitter"></span></a></li>
                                  <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                                  <li><a href="https://t.me/joinchat/4LlBXtMY1WU2YTll"><span class="fa fa-telegram"></span></a></li>
                                  <li><a href="https://www.instagram.com/mag_token/"><span class="fa fa-instagram"></span></a></li>
                               </ul>
                             </div>
                         </div>
                     </div><!--End Footer Column-->

                     <!--Footer Column-->
                     <div class="footer-column col-md-4 col-sm-6 col-xs-12">
                         <div class="footer-widget contact-widget">
                             <h3 class="has-line-center">Contact Us</h3>
                             <div class="widget-content">
                                 <ul class="contact-info">
                                     <li><div class="icon"><span class="ui-computer-screen-2"></span></div></li>
                                     <li>Mutual Alliance Global (MAG) is a New Generation, Decentralized cryptocurrency designed for everyday seamless life transactions and accessing financial services in the MAG ecosystem.</li>
                                     <li>082801 09685</li>
                                     <li>mag.guidance@gmail.com</li>
                                 </ul>
                             </div>
                         </div>
                     </div><!--End Footer Column-->

                     <!--Footer Column-->
                     <div class="footer-column col-md-4 col-sm-12 col-xs-12">
                         <div class="footer-widget newsletter-widget">
                             <h3 class="has-line-center">Newsletter</h3>
                             <div class="widget-content">
                               <div class="text">Stay Updated with our latest news. We promise not to spam</div>
                                 <div class="newsletter-form">
                                     <form method="post">
                                         <div class="form-group">
                                             <input type="email" name="field-name" value="" placeholder="Your Email" required="">
                                             <button type="submit" class="send-btn"><span class="fa fa-paper-plane-o"></span></button>
                                         </div>
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div><!--End Footer Column-->

                 </div>
             </div>
         </div>

        </section>

		
	</div>
</template>

<script>
export default {
	 data () {
      return {
        desserts: [
          {
            name: 'PRE-ICO',
            calories: '1/04/2021 - 15/04/2021',
			price: '20 Cents',
			bonus: '30%',
			phase: 'India',
          },
          {
            name: 'ICP Round 1',
            calories: '16/04/2021 - 30/04/2021',
			price: '35 Cents',
			bonus: '25%',
			phase: 'India',
          },
          {
            name: 'ICO Round 2',
            calories: "01/05/2021 - 20/04/2021",
			price: '45 Cents',
			bonus: '20%',
			phase: 'Dubai',
          },
          {
            name: 'ICO Round 3',
            calories: "16/5/2021 - 30/5/2021",
			price: '55 Cents',
			bonus: '15%',
			phase: 'Thailand',
          },
          {
            name: 'ICO Round 4',
            calories: "60 Cents",
			price: '20 Cents',
			bonus: '10%',
			phase: 'Singapore',
          },
          
        ],
		items: [
          {
            name: 'Token Name',
            calories: 'Mutual Alliance Group',
          },
          {
            name: 'Token Platform',
            calories: 'Magtoken24x7',
          },
          {
            name: 'Token Standard',
            calories: "MAG",
          },
          {
            name: 'Max. Supply (Hard Cap)',
            calories: "1,000,000,000",
          },
          {
            name: 'Available for Purchase',
            calories: "20 Cents",
          },
        ],
      }
	 }

}
</script>

<style scoped>

.roadmap{
	background: url('../assets/elements/shape-3.png') top center no-repeat;
	background-size: cover;
	background-position: center;
}

.background{
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('../assets/header-bg/intro.png');
	background-position: center;
	background-size: cover;
}

.background-content{
	margin: auto;
	width: 70%;
	display: flex;
	justify-content: space-between;
	background: url('../assets/buble.gif');
	align-items: center;
}

.background-content-left{

	width: 50%;
}
.icon{
	width: 400px;
}
.background-content-left h3{
	margin: 10px 0;
	color: white;
	letter-spacing: 2px;
	font-size: 2.2rem;
}

.mag-buttons{
	display: flex;
}

.background-content-left p{
	color: white;
	font-size: 22px;
}

.wave{
	position: absolute;
	bottom: 0;
	left: 0;
	
}

.card-image{
	object-fit: cover;
	width: 200px;
}

.svg{
	width: 500px;
}

.get-started{
	width: 100%;
}

.get-started-content{
	width: 90%;
	margin: auto;
}
.get-started-content h3{
	font-size: 1.6rem;
	text-align: center;
}

.table{
	margin-top: 30px;
	width: 90%;
	margin: auto;
}

.table-2{
	margin-top: 30px;
	width: 90%;
	margin: auto;
}

.steppers{
	width: 100%;
	display: flex;
	align-items: center;
}
@media screen and (max-width: 909px) {
	.background-content{
		flex-direction: column;
		width: 90%;
	}

	.background{
		background-size: cover;
	}

	.wave{
		display: none;
	}

	.background-content-left{
		text-align: start;
		width: 100%;
	}
	.icon{
		width: 200px;
	}

	.background-content-left p{
	color: white;
	font-size: 20px;
}
		
}

.o-hidden, .text-truncate {
  overflow: hidden
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px
}

.services-block-four {
  position: relative;
  margin-bottom: 55px
}

.services-block-four .inner-box {
  position: relative;
  padding-left: 130px
}

.services-block-four .inner-box .icon-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  font-size: 40px;
  line-height: 98px;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 20px !important;
  background-color: #fff;
  transition: .3s ease
}

.services-block-four .inner-box .icon-box span {
  position: relative;
  z-index: 99
}

.services-block-four .inner-box:hover .icon-box, .services-block-four .inner-box:hover .icon-box span {
  color: #fff;
  transition: .5s ease
}

.services-block-four .inner-box .icon-box:after {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(0);
  transition: .7s ease
}

.services-block-four .inner-box:hover .icon-box:after {
  transform: scale(1);
  transition: .7s ease
}

.services-block-four .inner-box .icon-box:before {
  position: absolute;
  content: '';
  left: 50%;
  top: 100%;
  width: 1px;
  height: 100%
}

.services-block-four:last-child .inner-box .icon-box:before {
  display: none
}

.services-block-four .inner-box h3 {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize
}

.services-block-four .inner-box h3 a {
  color: #253267;
  transition: all .3s ease;
  -moz-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease
}

.services-block-four .inner-box .text {
  font-size: 14px;
  color: #777;
  margin-top: 8px;
  margin-bottom: 10px
}

.services-block-four .inner-box .read-more {
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  transition: all .3s ease;
  -moz-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease
}

.services-block-four .inner-box .read-more:hover {
  color: #253267
}


.timeline-split {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-split .timeline {
  position: relative;
  padding: 50px
}

.timeline-split .timeline::after, .timeline-split .timeline::before {
  display: block;
  position: absolute;
  content: "";
  background: #ff693a
}

.timeline-split .timeline h3 {
  font-size: 22px;
  color: #253267
}

.timeline-split .timeline span {
  color: #666;
  display: block;
  margin-bottom: 10px
}

.timeline-split .timeline::before {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0;
  left: calc(50% - 10px)
}

.timeline-split .timeline::after {
  width: 2px;
  height: 450px;
  top: 10px;
  left: 50%;
  left: calc(50% - 1px)
}

.timeline-split .timeline .block {
  width: 50%;
  width: calc(50% - 30px);
  text-align: left;
  position: relative
}

.timeline-split .timeline .block::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  background: #ff693a;
  top: 10px
}

.timeline-split .timeline .block.block-left {
  text-align: right
}

.timeline-split .timeline .block.block-left::before {
  right: -35px
}

.timeline-split .timeline .block.block-right {
  text-align: left;
  margin-left: 50%;
  margin-left: calc(50% + 30px)
}

.timeline-split .timeline .block.block-right::before {
  left: -35px
}

@media (max-width:768px) {
  .timeline-split .timeline {
    padding: 50px 20px
  }

  .timeline-split .timeline h3 {
    font-size: 19px
  }
}

@media (max-width:767px) {
  .timeline-split .timeline::after {
    left: 9px
  }

  .timeline-split .timeline::before {
    left: 0
  }

  .timeline-split .timeline .circle {
    left: 2px
  }

  .timeline-split .timeline .block.block-right::before, .timeline-split .timeline .block::before {
    left: -15px
  }

  .timeline-split .timeline .block {
    width: 100% !important;
    text-align: left;
    padding-left: 20px
  }

  .timeline-split .timeline .block.block-left {
    text-align: left
  }

  .timeline-split .timeline .block.block-right {
    margin-left: 0
  }

}

.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%
}

.container-fluid {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between
}

@media (max-width:575px) {
  .container-fluid {
    padding-right: 0;
    padding-left: 0
  }

  .container-fluid {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
  }
}

@media (max-width:767px) {
  .container-fluid {
    padding-right: 0;
    padding-left: 0
  }
}

@media (min-width:768px) {
	.container-fluid {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap
  }
}

@media (max-width:991px) {
  .container-fluid {
    padding-right: 0;
    padding-left: 0
  }
}
.amazing-features .green-card i, .article__icon, .btn-login:focus, .btn-login:hover, .main-footer .contact-info li .icon, .main-footer .newsletter-widget .send-btn:hover, .service-text h4 a:hover, .services-block-four .inner-box .icon-box, .services-block-four .inner-box .read-more, .services-block-four .inner-box h3 a:hover, .testimonial .testimonial-item .author p, .testimonial .testimonial-item .content span, .video-play {
    color: #ff693a !important;
}

.services-block-four .inner-box .icon-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    font-size: 40px;
    line-height: 98px;
    text-align: center;
    border-radius: 50%;
    margin-bottom: 20px !important;
    background-color: #fff;
    transition: .3s ease;
}


.services-block-four .inner-box .icon-box:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(0);
    transition: .7s ease;
}

.services-block-four .inner-box h3 a {
    color: #253267;
    transition: all .3s ease;
    -moz-transition: all .3s ease;
    -webkit-transition: all .3s ease;
	text-decoration: none;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
}

.services-block-four .inner-box .text {
    font-size: 14px;
    color: #777;
    margin-top: 8px;
    margin-bottom: 10px;
}

.features {
	width: 100%;
    position: relative;
    background: url(../assets/elements/shape2.jpg) top right no-repeat;
    background-size: cover;
    padding-bottom: 70px;
}

@-webkit-keyframes round-1 {
  0% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(360deg)
  }
}

@keyframes round-1 {
  0% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(360deg)
  }
}

@-webkit-keyframes round-2 {
  0% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(360deg)
  }
}

@keyframes round-2 {
  0% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(360deg)
  }
}

@-webkit-keyframes round-3 {
  0% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(360deg)
  }
}

@keyframes round-3 {
  0% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(360deg)
  }
}

@keyframes floating1 {
  0%, 100% {
    -webkit-transform: rotateX(0) translateY(0);
    -moz-transform: rotateX(0) translateY(0);
    -ms-transform: rotateX(0) translateY(0);
    -o-transform: rotateX(0) translateY(0);
    transform: rotateX(0) translateY(0)
  }

  50% {
    -webkit-transform: rotateX(0) translateY(-20px);
    -moz-transform: rotateX(0) translateY(-20px);
    -ms-transform: rotateX(0) translateY(-20px);
    -o-transform: rotateX(0) translateY(-20px);
    transform: rotateX(0) translateY(-20px)
  }
}

@-webkit-keyframes floating1 {
  0%, 100% {
    -webkit-transform: rotateX(0) translateY(0);
    -moz-transform: rotateX(0) translateY(0);
    -ms-transform: rotateX(0) translateY(0);
    -o-transform: rotateX(0) translateY(0);
    transform: rotateX(0) translateY(0)
  }

  50% {
    -webkit-transform: rotateX(0) translateY(-20px);
    -moz-transform: rotateX(0) translateY(-20px);
    -ms-transform: rotateX(0) translateY(-20px);
    -o-transform: rotateX(0) translateY(-20px);
    transform: rotateX(0) translateY(-20px)
  }
}

@keyframes floating2 {
  0%, 100% {
    -webkit-transform: rotateX(0) translateY(0);
    -moz-transform: rotateX(0) translateY(0);
    -ms-transform: rotateX(0) translateY(0);
    -o-transform: rotateX(0) translateY(0);
    transform: rotateX(0) translateY(0)
  }

  50% {
    -webkit-transform: rotateX(0) translateY(15px);
    -moz-transform: rotateX(0) translateY(15px);
    -ms-transform: rotateX(0) translateY(15px);
    -o-transform: rotateX(0) translateY(15px);
    transform: rotateX(0) translateY(15px)
  }
}

@-webkit-keyframes floating2 {
  0%, 100% {
    -webkit-transform: rotateX(0) translateY(0);
    -moz-transform: rotateX(0) translateY(0);
    -ms-transform: rotateX(0) translateY(0);
    -o-transform: rotateX(0) translateY(0);
    transform: rotateX(0) translateY(0)
  }

  50% {
    -webkit-transform: rotateX(0) translateY(15px);
    -moz-transform: rotateX(0) translateY(15px);
    -ms-transform: rotateX(0) translateY(15px);
    -o-transform: rotateX(0) translateY(15px);
    transform: rotateX(0) translateY(15px)
  }
}

@keyframes floating {
  from {
    -webkit-transform: rotate(0) translate(-10px) rotate(0);
    -moz-transform: rotate(0) translate(-10px) rotate(0);
    -ms-transform: rotate(0) translate(-10px) rotate(0);
    -o-transform: rotate(0) translate(-10px) rotate(0);
    transform: rotate(0) translate(-10px) rotate(0)
  }

  to {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    -moz-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    -o-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg)
  }
}

@-webkit-keyframes floating {
  from {
    -webkit-transform: rotate(0) translate(-10px) rotate(0);
    -moz-transform: rotate(0) translate(-10px) rotate(0);
    -ms-transform: rotate(0) translate(-10px) rotate(0);
    -o-transform: rotate(0) translate(-10px) rotate(0);
    transform: rotate(0) translate(-10px) rotate(0)
  }

  to {
    -webkit-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    -moz-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    -ms-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    -o-transform: rotate(360deg) translate(-10px) rotate(-360deg);
    transform: rotate(360deg) translate(-10px) rotate(-360deg)
  }
}

.more-about-us .image-box {
  position: absolute;
  top: 90px;
  left: -85px;
  z-index: 1
}

@media (max-width:1200px) {
  .more-about-us .image-box {
    left: -245px
  }
}

@media (max-width:992px) {
  .more-about-us .image-box {
    position: relative;
    left: auto;
    top: 10px
  }
}

@media (max-width:767px) {
  .more-about-us .image-box {
    display: none
  }
}

.more-about-us .image-box .image-shape {
  animation: floating2 7s infinite;
  -webkit-animation: floating2 7s infinite
}


.main-footer {
    position: relative;
    background: #1c1c1c;
    padding: 70px;
}

.text-center {
    text-align: center !important;
}

.main-footer .widgets-section {
    position: relative;
    color: #bbb;
    background: url(../assets/elements/map-pattern-footer.png) center 75% no-repeat;
}

.container, .container-fluid {
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
}

.clearfix {
    clear: both;
}

.main-footer .footer-widget {
    position: relative;
}

.main-footer h3 {
    color: #fff;
    margin: 25px 0;
}

@media (max-width: 575px){
	h1, h3 {
		font-size: 18px;
	}
}

@media (max-width: 767px){
h3 {
    font-size: 18px;
}
}

.main-footer .about-widget .text, .main-footer .newsletter-widget .text {
    margin-bottom: 25px;
    line-height: 1.9em;
    position: relative;
}

.main-footer .about-widget .social-links {
    position: relative;
}
ol, ul {
    list-style: none;
    padding: 0;
}
dl, ol, p, pre, ul {
    margin-top: 0;
}
address, dl, ol, ul {
    margin-bottom: 1rem;
}

.main-footer .about-widget .social-links li {
    position: relative;
    display: inline-block;
    margin: 0 2px;
}

.main-footer .about-widget .social-links li a {
    position: relative;
    display: block;
    line-height: 38px;
    width: 38px;
    height: 38px;
    text-align: center;
    font-size: 13px;
    background: rgba(255, 255, 255, .05);
    color: #bbb;
    -webkit-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
}
a, a:focus {
    text-decoration: none;
    outline: 0;
}
[role=button], a, area, button, input, label, select, summary, textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
a {
    color: #007bff;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

.main-footer .newsletter-widget .form-group {
    position: relative;
    margin: 0;
}
.form-group {
    margin-bottom: 1rem;
}

.main-footer .newsletter-widget input[type=email] {
    display: block;
    width: 100%;
    line-height: 24px;
    padding: 10px 40px 10px 25px;
    height: 48px;
    font-size: 14px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, .2);
    background: 0 0;
    border-radius: 24px;
    -webkit-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.main-footer .newsletter-widget .send-btn {
    position: absolute;
    right: 10px;
    top: 0;
    width: 50px;
    border: none;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: rgba(255, 255, 255, .5);
    font-size: 16px;
    background: 0 0;
    cursor: pointer;
}


@media (min-width: 992px){
.row {
    margin-right: -15px;
    margin-left: -15px;
}
}
@media (min-width: 768px){
.row {
    margin-right: -15px;
    margin-left: -15px;
}

}
@media (min-width: 576px){
.row {
    margin-right: -15px;
    margin-left: -15px;
}
}
.row {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
	align-items: center;
}


@media screen and (max-width: 909px) {
	.row{
		flex-direction: column;
	}

	.image-box img{
		width: 300px;
	}
	
}
</style>