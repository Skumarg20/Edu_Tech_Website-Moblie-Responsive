import { useState } from 'react'
import './App.css'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import navbar from './navbar.jsx';


const App=()=>{
  return (
    <>
    <div class="contaniors">
    <nav class="navbar">
     
      <div class="logo col-md-3"><span class="cha">Cha</span>mpionJEE</div>
     
      <ul class="nav-links">
      
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      
        <div class="menu col-md-9">
        <li><a href="campionjee.html">Home</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li class="services">
          <a href="Mentorship.html">Mentorship</a>
         
          <ul class="dropdown">
            <li><a href="IITJEE.html">IIT JEE </a></li>
            <li><a href="NEET.html">NEET</a></li>

          </ul>
        </li>
          <li><a href="Counselling.html">Counselling</a></li>
          <li><a href="Contectus.html">Contact</a></li>
        </div>
      </ul>
    </nav>
  </div>
  <div class="firstdiv">
      <div class="main col-md-12 ">
        <h6>Welcome</h6>
        <h1>India's Best <span class="change_content"></span></h1>
       
        <h4>Mentorship & <Span class="change_content2">Counselling</Span></h4>
        <h2>Platform</h2>
        <p>Know More about</p>
        <a href="" class="btnone">Mentorship</a>
        <a href="Counselling"class="btnone" >Counselling</a>
      </div>
    </div>

  <section>
    
    <div class="row">
      <div class="about col-md-12"> 
        <h1>About us</h1>
      </div>
      
      <div class="divse col-md-6">
<img src="images/about us.png" alt="" class="image1">
      </div>
      <div class="divse col-md-6">
<p>ChampionJee  consists of a team of IITians who are from the top IITs who have secured top
   ranks in JEE Mains and Advanced  and we have already 
   faced every ups and downs during our JEE/NEET preparation and 
   always have made solutions to tackle the problems and want to share
    our experience and knowledge to the upcoming JEE/NEET aspirants and to
     guide them reach their dream destination . We will track each and 
     every step in their preparation guiding to give a proper path to their studies
      which can give maximum efficiency.
</p>
      </div>
    </div>
   <div class="whychampionjee"><h1>WHY CHAMPIONJEE</h1></div>
    <div class="row">
    
      <div class="divs1 col-md-6 ">
  <img src="images/championjee logo.png" alt="" class="image1">
      </div>
      <div class="divse col-md-6">
        <p>Here mentors are all IITians from the 
          top IITs and will be tracking and giving a 
          
        personal look on the student , personalized 
        mentorship and guidance. JEE/NEET is assumed to be the 
        most precious exam which needs a proper guidance to a 
        student throughout the journey…need of a mentor is
        so necessary as the journey student have to face
        lots of things like demotivation, depression or 
        excitation, students should not get affected due
        to any such distraction...So, a mentor is necessary having personal look on the studies… we have already held many 
        sessions motivating 1000+ of students till date .</p>
      </div>
    </div>
  </section>
  <div class="row">
    <h1 id="we">WE OFFERS</h1>
  <div class="container">
    <div class="card">
      <div class="card__header">
        <img src="images/iit jee mentorship.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h1>JEE MENTORSHIP</h1>
          <ul>
            <li>Personal mentor </li>
            <li> Daily/Weekly Timetable/Planner</li>
            <li>Weekly Live session</li>
            <li> Performance Analysis</li>
            <li>Materials & Notes</li>
            <li>Previous year Papers</li>
            <li> Parents mentors meet</li>
          </ul>
          <span><a class="button button12" href="IITJEE.html">Join JEE Mentorship</a></span>
      </div>
   
    </div>
    <div class="card">
      <div class="card__header">
        <img src="images/neetmentorship.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h1>NEET MENTORSHIP</h1>
          <ul>
            <li>Personal mentor </li>
            <li> Daily/Weekly Timetable/Planner</li>
            <li>Weekly Live session</li>
            <li> Performance Analysis</li>
            <li>Materials & Notes</li>
            <li>Previous year Papers</li>
            <li> Parents mentors meet</li>
          </ul>
          <span><a class="button" href="NEET.html">Join NEET Mentorship</a></span>
      </div>
   
    </div>
    <div class="card">
      <div class="card__header">
        <img src="images/conselling.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h1>Counselling</h1>
        <ul>
          <li>Personal mentor </li>
          <li> Daily/Weekly Timetable/Planner</li>
          <li>Weekly Live session</li>
          <li> Performance Analysis</li>
          <li>Materials & Notes</li>
          <li>Previous year Papers</li>
          <li> Parents mentors meet</li>
        </ul>
        <span><a class="button" href="Counselling.html">Join Counselling</a></span>
      </div>
   
    </div>
    
    
    
    
    </div>
  </div>
  <div class="col-md-12 feature2">
    <h1>Our Top Feature</h1>

  </div>
  
  <div class="row">
  <div class="container">
    <div class="card">
      <div class="card__header">
        <img src="images/personal mentor.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h2>One to one Mentorship</h2>
        <p>We are IITians and we know  
          every types of problems faced by an
          aspirants during JEE preparation as we ourselves have 
          gone through it. Your JEE mentor will mentor you regularly on 
          a personal level to help you in your preparation.</p>
      </div>
   
    </div>
    <div class="card">
      <div class="card__header">
        <img src="images/undraw_Online_organizer_re_156n.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h2>Daily /weekly planner</h2>
        <p>A personalized schedule will be 
          structured for individual student on
           the basis of their ongoing covered syllabus 
           and which will be updated accordingly with regular
           observation on students on their performance</p>
      </div>
   
    </div>
    <div class="card">
      <div class="card__header">
        <img src="images/meet.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h2>Weekly Live session</h2>
        <p>Regular live session will be 
          conducted to interact with the students clearing 
          some common doubts faced by students and a 
          dose of inspiration to boost their motivation</p>
      </div>
   
    </div>
    <div class="card">
      <div class="card__header">
        <img src="images/student analyasis.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h2> Performance Analysis</h2>
        <p>We will be checking your solving accuracy,
           time efficiency, concepts clarity. We will be 
           giving you the most detailed report and analysis
            after in-depth analysis of your  errors 
          and Topics during practice as well as Mock Exams.</p>
      </div>
   
    </div>
    <div class="card">
      <div class="card__header">
        <img src="images/study material.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h2> Materials & Notes</h2>
        <p>We will share our handwritten notes
           with you and we will regularly design
            and provide some quiz questions acc to
             ur syllabus for a personal 
          check of ur command on your completed topic</p>
      </div>
   
    </div>
    <div class="card">
      <div class="card__header">
        <img src="images/paper ananlysis.png" alt="card__image" class="card__image" width="600">
      </div>
      <div class="card__body">
        
        <h2>Previous year Papers </h2>
        <p>Previous year paper with detailed 
          analysis for 50+ years along
           with the topic wise distribution of papers.</p>
      </div>
   
    </div>
  </div>
  
  <div class="newcon">
    <div class="hello12">
      <p>  Don’t miss the precious opportunity to get <br>personal guidance for your preparation from the       
            iitians which can boost your studies to a great extent
      </p>
      <span><a class="button">Book Your session</a></span>
      
    </div>
  </div>
  <div class="aboutus bg-light text-center text-dark">
    <div class="row">
      <div class="Championjee1 col-md-4">
        <h1> ChampionJee</h1>
<q>"IITians Mentoring to the future IITians"</q>
<p>We at ChmapionJEE are here to make <br>your journey towards your dream 
 destination more <br>easier guiding you ot the exact path to be slelected in IIT </p>
      </div>
      <div class="col-md-4">
        <h1>Page</h1>
<ul>
<li> <a href="campionjee.html">Home</a> </li>
<li> <a href="pricing.html">Pricing</a> </li>
<li><a href="Mentorship.html">Mentorship</a></li>
<li><a href="Contactus.html">Contect us</a></li>
<li><a href=" ">Counselling</a></li>
</ul>
      </div>
      <div class="col-md-4">
        <h1>Contact Us</h1>
        <ul>
            <li><span>Mobile/Whatsapp Number:</span>+919696402486</li>
            <li><span> Email:</span> <a href=" ">championjee247@gmail.com</a> </li>
            <li><span> Telegram UserName: </span>t.me/championjee</li>
            <li><span> Instagram UserName:</span> Championjee</li>
        </ul>
      </div>
    </div>
  </div>
<footer class="bg-dark text-center text-white">

  <div class="container p-4 pb-0">
   
    <section class="mb-4">
    
      <a
         class="btn btn-outline-light btn-floating m-1"
         style="background-color: #3b5998;"
         href=" "
         role="button"
         ><i class="fa fa-facebook"></i
        ></a>

 
      <a
         class="btn btn-outline-light btn-floating m-1"
         style="background-color: #55acee;"
         href="#!"
         role="button"
         ><i class="fa fa-twitter"></i
        ></a>

     
      <a
         class="btn btn-outline-light btn-floating m-1"
         style="background-color: #dd4b39;"
         href="https://www.instagram.com/championjee/"
         role="button"
         ><i class="fa fa-instagram"></i
        ></a>

      
      <a
         class="btn btn-outline-light btn-floating m-1"
         style="background-color: #0082ca;"
         href="#!"
         role="button"
         ><i class="fa fa-linkedin-square"></i
        ></a>
     
    </section>
 
  </div>
 

  
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-white" href=" ">ChampionJee.com</a>
  </div>
  
</footer>

  </>
  )
}

export default App
