
import React from 'react'

function About() {

  return (
    <div className='my-3 container'>

      <div className='container'>

        <section id="about">
          <h2>About Us</h2>
          <p>Welcome to Your Notebook App, your go-to platform for organizing and managing your notes effortlessly.</p>
          
          <h2>Features</h2>
          <ul>
            <li>User-friendly sign-up and login process</li>
            <li>Create and store notes with ease</li>
            <li>You can Update your Notes at anytime </li>
            <li>You dont have to carry book from now , you can simply store your notes in this RNotebook app and can acess at anytime around the globe </li>
            <li>This is 100% secure platform No one can acess your Notes</li>
          </ul>

          <h2>Mission Statement</h2>
          <p>Our mission is to provide a simple and intuitive platform for users to capture and organize their thoughts, ideas, and tasks efficiently.</p>

          <h2>Creators</h2>
          <p>RNotebook App was created by a Rakesh  <a href='www.github.com/guntarakesh'>Github</a> , dedicated to enhancing your note-taking experience.</p>

          <h2>Technologies Used</h2>
          <p>Built with React Js and Node Js other modern web technologies to ensure a seamless and responsive user experience.</p>

          <h2>Contact Information</h2>
          <p>For inquiries, please contact at <a href="mailto:guntarakesh123@gmail.com">Mail</a>.</p>

          <h2>Version Information</h2>
          <p>Current Version: 1.0.0</p>

          <h2>Acknowledgments</h2>
          <p>I would like to express our gratitude to the open-source community for the tools and libraries that made this app possible.</p>


          <p>Feel to contact me for New Projects , Requesting Additional Features.  </p>
        </section>

        <p style={{marginBottom:'100px'}}>{
            localStorage.getItem('token') === null ? 
            <p> You are Reading the About Page without Login in , please <a href='/login'>login</a> and Enjoy the seemless experience. </p>
            : 
            <p> Thank You for Using My Notebook App , Have Nice Day </p> 
}</p>
      </div>
    </div>
  )
}

export default About