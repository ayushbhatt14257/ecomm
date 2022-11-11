import './services.css'
import React, { useEffect, useState } from 'react'
import IMG1 from '../../assests/services1.png'
import IMG2 from '../../assests/service2.jpg'
import IMG3 from '../../assests/service3.jpg'
import IMG4 from '../../assests/service4.png'
import IMG5 from '../../assests/service5.jpg'
import IMG6 from '../../assests/service6.jpg'
import IMG7 from '../../assests/service7.png'
import IMG8 from '../../assests/service8.png'
import IMG9 from '../../assests/service9.png'
import { useNavigate } from 'react-router-dom'


const Services = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState("");

  const callAboutPage =  async () => {
    try {
      const res = await fetch('/user', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 304) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(`token nahi hai`);
      navigate('/login');
    }
  }

 
  useEffect(() => {
    callAboutPage();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <>
      <section className='courses'>
        <h2>Our Products</h2>
        <div className="container courses_container">
          <article className='course'>
            <div className="course_image">
              <img src={IMG1} alt="img" />
            </div>
            <div className="course_info">
              <h4>Mobiles</h4>
              <p>Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG2} alt="img" />
            </div>
            <div className="course_info">
              <h4>Smart Watch</h4>
              <p> Key health monitoring features include Advanced Sleep Analysis, Health monitoring and enhanced Fitness Tracking. With WearOS, experience enriched App availability and connectivity (Only compatible with Android)
              </p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG3} alt="img" />
            </div>
            <div className="course_info">
              <h4>Accessories</h4>
              <p>Faux Leather Case Auto Push Magnet Pouch Closure Premium Quality Product which Offer Soft Touch & Easy to Insert & Easy to Remove Design. 360° Securely Keeps The Flip Wallet Cover Closed & Secures Your ID Cards & Cash.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG4} alt="img" />
            </div>
            <div className="course_info">
              <h4>Cash On Delivery</h4>
              <p>Available. Select Cash On Delivery (COD) payment option while placing the order and later, pay in cash at the time of actual delivery of the product. No advance payment needed</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG5} alt="img" />
            </div>
            <div className="course_info">
              <h4>7 Days Return</h4>
              <p>Returns and exchange policy gives you an option to return or exchange items purchased on our website for any reason within the specified return/exchange period (check product details page for the same).</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG6} alt="img" />
            </div>
            <div className="course_info">
              <h4>Contact-less Delivery</h4>
              <p>Need for maintaining social distancing - The new normal is here to stay and as long as we have a vaccine, social distancing norms are set to stay globally. This is particularly true as the spread of the virus hasn’t subsided so far in many parts of the world.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG7} alt="img" />
            </div>
            <div className="course_info">
              <h4>Grocery</h4>
              <p>Whether you work from home or office or other workplaces, daily grocery items are a requisite for everybody. Regardless of the size of the family or where you live, one can easily browse for the required food or other daily use products and have them brought to your home. Explore the variety of products, whether oils or foodgrains, from the online stock and choose the quantity required. </p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG8} alt="img" />
            </div>
            <div className="course_info">
              <h4>Grooming</h4>
              <p>Grooming Trimmer By Manhood, Support Wireless Charging, Waterproof Body Trimmer With LED. Featured with Power Status Display, 7000 RPM Motor With Quite Run Technology, Shop Now! Styles: Smart Sense Technology, Quick, Easy, & Pain-Free.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG9} alt="img" />
            </div>
            <div className="course_info">
              <h4>Footwear</h4>
              <p>If you want to stay on top of the fashion trends, then you need to shop for the latest and trendiest footwear from an e-commerce site. Check out the amazing collection of footwear for women online and select the ones that suit you the best</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Services;