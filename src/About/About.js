import React from "react";
import "./About.scss";




import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const About = () => {
  return (
    <div>
      <Header />
      <div className="about-description" style={{fontWeight: '300', color: '#4e342e'}}>
     
      <h3 style={{marginBottom: 0, fontWeight: 400}}>Overview:</h3>   
      <p >Beer App is a simple counter-app builded on React.js</p>
      <h3 style={{marginBottom: 0, fontWeight: 400}}>Motivation:</h3>
      <p>  It was built to understand how to use props to create reusable and composable react components, how to work with state and hooks</p>
      <h3 style={{marginBottom: 0, fontWeight: 400}}>Built with</h3>
    
      <p>  React.js, Material-UI</p>
      <h3 style={{marginBottom: 0, fontWeight: 400}}>Features:</h3>
      <p>  Responsive design</p>

      </div>
    





      <Footer />
    </div>
  );
};
export default About;
