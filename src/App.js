import "./App.css"
import Product from "./Components/Product";
import Rooms from "./Components/Rooms";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useState,useEffect } from "react";


import {SplideTrack , Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';





function App() {

  
    const [statesRef, statesInView] = useInView({
      triggerOnce : false,
      threshold: 0.001,
      
    });

    const [statesH1Ref, statesH1InView] = useInView({
      triggerOnce : false,
      
    });


    const [contactH1Ref, contactH1InView] = useInView({
      triggerOnc : false,
    })



    const [contactPRef, contactPInView] = useInView({
      triggerOncetrue  : false,
    })


    const [roomsH1Ref,roomsH1InView] = useInView({
      triggerOnce  : false,

    })


    const [productsPRef, productsPInView] = useInView({
      triggerOnce : false,
      
    })

    const [productsH3Ref, productsH3InView] = useInView({
      triggerOnce : false,
      
    })

    

    const [productsDiv1Ref, productsDiv1InView] = useInView({
      triggerOnce : false,
      threshold : 0.001,
      
    })

    const [productsDiv2Ref, productsDiv2InView] = useInView({
      triggerOnce : false,
      threshold : 0.001,
      
    })

    const [productsDiv3Ref, productsDiv3InView] = useInView({
      triggerOnce : false,
      threshold : 0.001,
      
    })

    const [indexRef,indexInView] = useInView({
      triggerOnce: false,

    })





    const products = [{
      img : "./Products/Lether_chair.png",
      text: "chair",
      model : "chair",
      div : productsDiv1Ref,
      inview : productsDiv1InView,
    
    },{
      img : "./Products/couch.jpg",
      text: "Lether couch",
      model : "couch",
      div : productsDiv2Ref,
      inview : productsDiv2InView,
    
    }, {
      img : "./Products/Table.jpg",
      text: "Table",
      model : "table",
      div : productsDiv3Ref,
      inview : productsDiv3InView,
    
    
    }]
    
    
    const rooms = [
      {
        number : 1,
        img : "./rooms/living_room.jpg",
        name : "Living room",
        price : 500
    
      },
      {
        number : 2,
        img : "./rooms/room.jpg",
        name : "Living Room",
        price : 500
    
      },
      {
        number : 3,
        img : "./rooms/bedRoom.jpg",
        name : "Bed room",
        price : 500
    
      }
    ]


    



  const [current,setCurrent] = useState(2)

  
 
  const [options,setOptions] = useState({
         
    type   : 'loop',
    perPage: 2,
    focus  : 'center',
    
    rewind :true,
    pagination : false,
    breakpoints: {
      1090: {
          perPage: 1, 
      },
      800: {
          perPage: 1, 
      },
  },
    
    

})



const [currentImage,setCurrentImage] = useState()






useEffect(() => {

      const currentElement = document.querySelector(".is-active div img")

      currentElement && setCurrentImage(currentElement.getAttribute('src'))
  
     


      const nextButton = document.querySelector(".splide__arrow--next")

      document.querySelector(".splide__arrow--next").addEventListener('click', () => {

        const currentElement = document.querySelector(".is-next div img")

        currentElement && setCurrentImage(currentElement.getAttribute('src')) 
      

        nextButton.disabled = true;
      
       
        



    })

    
    const prevButton = document.querySelector(".splide__arrow--prev")

    document.querySelector(".splide__arrow--prev").addEventListener('click', () => {

      const currentElement = document.querySelector(".is-prev div img")

      currentElement && setCurrentImage(currentElement.getAttribute('src')) 
    
      prevButton.disabled = true;
      



  })



} ,[])


  

  return (
    <div>

      <div className="Index_section">
        <nav></nav>
        <h1 className={`${indexInView ? "animate" : ''}`} ref={indexRef} >Elevate Your Space.</h1>
        <p className={`${indexInView ? "animate" : ''}`} ref={indexRef}>Transform your space into a haven of style and comfort with our exquisite furniture collection  where every piece tells a story of luxury and sophistication, making your home a masterpiece of design</p>
        <a href="#con"><button className={`${indexInView ? "animate" : ''}`} ref={indexRef} type="button" >Contact us</button></a>
      </div>

      <div className="Products_section">
        <h1 className={`${productsPInView ? "animate" : ''}`} ref={productsPRef}>Endless Furniture Options.</h1>
        <p className={`${productsPInView ? "animate" : ''}`} ref={productsPRef}>Discover endless possibilities with our vast furniture library, curated for every style and space.</p>
        <div className="our_products">
        <h3 className={`${productsH3InView ? "animate" : ''}`} ref={productsH3Ref}>Our products</h3>
        <div className="Product">
        {
         products.map((p) => {

          return(
          <Product REF={p.div} INVIEW={p.inview} product_img={p.img} text={p.text} model={p.model} />
          )
         }) 
        }

        </div>
        </div>
      </div>

        <div style={{backgroundImage : `url(${currentImage})`,backgroundSize : 'cover'}} className="Rooms_section container">
          <div className="content">
          <h1   className={`${roomsH1InView ? "animate" : ''}`} ref={roomsH1Ref}>Full room setups</h1>



          <div className="room">
          <Splide  id="SPLIDE" options={options}  aria-label="My Favorite Images">
          
              
          {
           rooms.map((r) => {
            return(
              <SplideSlide className='Splide_slide'>

                  <Rooms number={r.number}  room_img={r.img} room_name={r.name} room_price={r.price} />

              </SplideSlide>

            )
           }) 
          }
         
         
          </Splide>
        </div>
        

        </div>
      </div>
      
      <div>

      <div className="Stats_section">
        <h1 className={`${statesH1InView ? 'animate' : ''}`} ref={statesH1Ref}>What sets us apart</h1>

        <div className="stats_container">
            <div>
                <h4 className={`${statesInView ? 'animate' : ''}`} ref={statesRef}>$200M+</h4>
                <p  className={`${statesInView ? 'animate' : ''}`} ref={statesRef}>Sales since 2001</p>
            </div>
            <div>
                <h4 className={`${statesInView ? 'animate' : ''}`} statesRef={statesRef}>50M</h4>
                <p className={`${statesInView ? 'animate' : ''}`} ref={statesRef}>furnitures sold</p>
            </div>
            <div>
                <h4 className={`${statesInView ? 'animate' : ''}`} ref={statesRef}>20M</h4>
                <p className={`${statesInView ? 'animate' : ''}`} ref={statesRef}>Clients since 2001</p>
            </div>
            <div>
                <h4 className={`${statesInView ? 'animate' : ''}`} ref={statesRef}>10</h4>
                <p className={`${statesInView ? 'animate' : ''}`} ref={statesRef}>selling centers</p>
            </div>
        </div>
      </div>
      </div>

      <div id="con" className="Contact_section">
        <img className="contact_img" width={"1000px"} height={"550px"} src="./Furniture-website/Background_images/contact_picture.png" alt="" />

        <div className="contact">
          <h1 className={`${contactH1InView ? "animate" : ''}`} ref={contactH1Ref}>Contact Us</h1>
          
          
          <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>123 Anywhere St.</p>
          <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>Any City, St 12345</p>
          <br />
          <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>(123) 456-7890</p>
          <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>hello@sitelink.com</p>

          <div className="business_socials">

            <div className="business " >
              <h3 className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>Business Hours</h3>

              <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>Monday to Friday</p>
              <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}> 9.00am to 6.00pm</p>

              <br />

              <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>Saturday</p>
              <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>9.00am to 12 noon</p>

              <br />

              <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>Sunday by</p>
              <p className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>appointement only.</p>
            </div>

            <div className="social">
              <h3 className={`${contactPInView ? "animate" : ''}`} ref={contactPRef}>Get Social</h3>
              <div className="social_links">
                <a href="#" className={`link1 ${contactPInView ? "animate" : ''}`} ref={contactPRef} >
                  <img  style={{marginTop:"41px",marginRight:"2px"}} width={"30px"} src="./social_media_logos/Facebook.png"/>

                </a>
                <a href="#" className={`link2 ${contactPInView ? "animate" : ''}`} ref={contactPRef}>
                  <img  width={"37px"} src="./social_media_logos/Instagram.png"/>

                </a>
                <a href="#" className={`link3 ${contactPInView ? "animate" : ''}`} ref={contactPRef}>
                  <img style={{marginLeft: "0px",marginTop:"42px"}} width={"41px"} src="./social_media_logos/X.png"/>

                </a>
              </div>
              <div className="logo">
                <img src="" alt="" />
                <h5></h5>

              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
