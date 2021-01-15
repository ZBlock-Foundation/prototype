import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <div className="row">
            <img src="resources/img/logo-white.png" alt="Omnifood logo" className="logo-white" />
            <img src="resources/img/logo.png" alt="Omnifood logo" className="logo-black" />
            <ul className="main-nav">
              <li>
                <a href="#features">Food delivery</a>
              </li>
              <li>
                <a href="#steps">How it Works</a>
              </li>
              <li>
                <a href="#cities">Our cities</a>
              </li>
              <li>
                <a href="#plans">Sign up</a>
              </li>
              <li>
                <a className="btn btn-full js--scroll-to-start" style={{ fontWeight: 700 }} href="#">
                  Connect Metamask
                </a>
              </li>
            </ul>
            <a className="mobile-nav-icon">
              <ion-icon name="menu" className="nav-mobile-menu"></ion-icon>
            </a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>
            Welcome To ZBlock!
            <br />
            Create or Invest Communities on Blockchain
          </h1>
          <Link to="/app" className="btn btn-full">
            Go To App{" "}
          </Link>
          <a className="btn btn-ghost js--scroll-to-start" href="#">
            Show me more
          </a>
        </div>
      </header>
      <section className=" section-features js--section-features" id="features">
        <div className="row">
          <h2>Get food fast &mdash; not fast food</h2>
          <p className="long-copy">Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
        </div>

        <div className="row js--waypoint-1">
          <div className="col span-1-of-4 box">
            <ion-icon name="ios-calendar" className="icon-big"></ion-icon>
            <h3>Up to 365 days/year</h3>
            <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
          </div>

          <div className="col span-1-of-4 box">
            <ion-icon name="ios-clock" className="icon-big"></ion-icon>
            <h3>Ready in 20 minutes</h3>
            <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
          </div>

          <div className="col span-1-of-4 box">
            <ion-icon name="ios-nutrition" className="icon-big"></ion-icon>
            <h3>100% organic</h3>
            <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
          </div>

          <div className="col span-1-of-4 box">
            <ion-icon name="ios-infinite" className="icon-big"></ion-icon>
            <h3>Order anything</h3>
            <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
          </div>
        </div>
      </section>

      <section className=" section-meals">
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meal-photo">
              <img src="resources/img/1.jpg" alt="Korean bibimbap with egg and vegetables" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src="resources/img/2.jpg" alt="Simple italian pizza with cherry tomatoes" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src="resources/img/3.jpg" alt="Chicken breast steak with vegetables" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src="resources/img/4.jpg" alt="Autumn pumpkin soup" />
            </figure>
          </li>
        </ul>

        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meal-photo">
              <img src="resources/img/5.jpg" alt="Paleo beef steak with vegetables" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src="resources/img/6.jpg" alt="Healthy baguette with egg and vegetables" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src="resources/img/7.jpg" alt="Burger with cheddar and bacon" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src="resources/img/8.jpg" alt="Granola with cherries and strawberries" />
            </figure>
          </li>
        </ul>
      </section>

      <section className=" section-steps" id="steps">
        <div className="row">
          <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-2 steps-box">
            <img src="resources/img/app-iPhone.png" alt="Omnifood app on iPhone" className="app-screen js--waypoint-2" />
          </div>
          <div className="col span-1-of-2 steps-box">
            <div className="works-step">
              <div>1</div>
              <p>Choose the subscription plan that best fits your needs and sign up today.</p>
            </div>
            <div className="works-step">
              <div>2</div>
              <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
            </div>
            <div className="works-step">
              <div>3</div>
              <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
            </div>

            <a href="#" className="btn-app">
              <img src="resources/img/download-app.svg" alt="App Store Button" />
            </a>
            <a href="#" className="btn-app">
              <img src="resources/img/download-app-android.png" alt="Play Store Button" />
            </a>
          </div>
        </div>
      </section>

      <section className=" section-cities" id="cities">
        <div className="row">
          <h2>We're currently in these cities</h2>
        </div>

        <div className="row">
          <div className="col span-1-of-4 box">
            <img src="resources/img/lisbon-3.jpg" alt="City of Lisbon" className="js--waypoint-3" />
            <h3>Lisbon</h3>
            <div className="city-feature">
              <ion-icon name="ios-person" className="small-icon"></ion-icon>
              1600+ happy eaters
            </div>
            <div className="city-feature">
              <ion-icon name="ios-restaurant" className="small-icon"></ion-icon>
              60+ top chefs
            </div>
            <div className="city-feature">
              <ion-icon name="logo-twitter" className="small-icon"></ion-icon>
              <a href="#">@zblock</a>
            </div>
          </div>

          <div className="col span-1-of-4 box">
            <img src="resources/img/san-francisco.jpg" alt="City of San Francisco" className="js--waypoint-3" />
            <h3>San Francisco</h3>
            <div className="city-feature">
              <ion-icon name="ios-person" className="small-icon"></ion-icon>
              2300+ happy eaters
            </div>
            <div className="city-feature">
              <ion-icon name="ios-restaurant" className="small-icon"></ion-icon>
              110+ top chefs
            </div>
            <div className="city-feature">
              <ion-icon name="logo-twitter" className="small-icon"></ion-icon>
              <a href="#">@omnifood_berlin</a>
            </div>
          </div>

          <div className="col span-1-of-4 box">
            <img src="resources/img/berlin.jpg" alt="City of Berlin" className="js--waypoint-3" />
            <h3>Berlin</h3>
            <div className="city-feature">
              <ion-icon name="ios-person" className="small-icon"></ion-icon>
              3700+ happy eaters
            </div>
            <div className="city-feature">
              <ion-icon name="ios-restaurant" className="small-icon"></ion-icon>
              160+ top chefs
            </div>
            <div className="city-feature">
              <ion-icon name="logo-twitter" className="small-icon"></ion-icon>
              <a href="#">@omnifood_sf</a>
            </div>
          </div>

          <div className="col span-1-of-4 box">
            <img src="resources/img/london.jpg" alt="City of London" className="js--waypoint-3" />
            <h3>London</h3>
            <div className="city-feature">
              <ion-icon name="ios-person" className="small-icon"></ion-icon>
              1200+ happy eaters
            </div>
            <div className="city-feature">
              <ion-icon name="ios-restaurant" className="small-icon"></ion-icon>
              50+ top chefs
            </div>
            <div className="city-feature">
              <ion-icon name="logo-twitter" className="small-icon"></ion-icon>
              <a href="#">@omnifood_london</a>
            </div>
          </div>
        </div>
      </section>

      <section className=" section-testimonials">
        <div className="row">
          <h2>Our customers can't live without us</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-3">
            <blockquote>
              Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
              <cite>
                <img src="resources/img/customer-1.jpg" alt="Customer 1 photo" />
                Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-3">
            <blockquote>
              Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
              <cite>
                <img src="resources/img/customer-2.jpg" alt="Customer 2 photo" />
                Joana Silva
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-3">
            <blockquote>
              I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
              <cite>
                <img src="resources/img/customer-3.jpg" alt="Customer 3 photo" />
                Milton Chapman
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className=" section-plans js--section-plans" id="plans">
        <div className="row">
          <h2>Start eating healthy today</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-3">
            <div className="plan-box js--waypoint-4">
              <div>
                <h3>Premium</h3>
                <p className="plan-price">
                  $399 <span>/ month</span>
                </p>
                <p className="plan-price-meal">That’s only 13.30$ per meal</p>
              </div>
              <div>
                <ul>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>1 meal every day
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Order 24/7
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Access to newest creations
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Free delivery
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="btn btn-full">
                  Sign up now
                </a>
              </div>
            </div>
          </div>

          <div className="col span-1-of-3">
            <div className="plan-box">
              <div>
                <h3>Pro</h3>
                <p className="plan-price">
                  $149 <span>/ month</span>
                </p>
                <p className="plan-price-meal">That’s only 14.90$ per meal</p>
              </div>
              <div>
                <ul>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>1 meal 10 days/month
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Order 24/7
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Access to newest creations
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Free delivery
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="btn btn-ghost">
                  Sign up now
                </a>
              </div>
            </div>
          </div>

          <div className="col span-1-of-3">
            <div className="plan-box">
              <div>
                <h3>Starter</h3>
                <p className="plan-price">
                  19$ <span>/ meal</span>
                </p>
                <p className="plan-price-meal">&nbsp;</p>
              </div>
              <div>
                <ul>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>1 meal
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Order from 8 am to 12 pm
                  </li>
                  <li>
                    <ion-icon name="ios-close" className="small-icon"></ion-icon>
                  </li>
                  <li>
                    <ion-icon name="ios-checkmark" className="small-icon"></ion-icon>Free delivery
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="btn btn-ghost">
                  Sign up now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" section-form">
        <div className="row">
          <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
          <form method="POST" action="#" className="contact-form">
            <div className="row">
              <div className="col span-1-of-3">
                <label for="name">Name</label>
              </div>
              <div className="col span-2-of-3">
                <input type="text" name="name" id="name" placeholder="Enter your name" required />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label for="email">Email</label>
              </div>
              <div className="col span-2-of-3">
                <input type="email" name="email" id="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label for="find-us">How did you find us?</label>
              </div>
              <div className="col span-2-of-3">
                <select name="find-us" id="find-us">
                  <option value="friends" selected>
                    Friends
                  </option>
                  <option value="search">Search engines</option>
                  <option value="ad">Ads</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label for="newsletter">Newsletter</label>
              </div>
              <div className="col span-2-of-3">
                <input type="checkbox" name="newsletter" id="newsletter" checked /> Yes, I want to subscribe to the newsletter.
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label for="message">Drop us a line</label>
              </div>
              <div className="col span-2-of-3">
                <textarea name="message" placeholder="Message" id="message"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label>&nbsp;</label>
              </div>
              <div className="col span-2-of-3">
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
