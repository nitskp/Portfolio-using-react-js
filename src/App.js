import React, {Component, Container} from "react";
import Projects from "./Projects.js"
import SocialMedia from "./SocialMedia.js";
import profilePhoto from "./assets/profile.jpeg"
import "./app.css"

class App extends Component{
    state = {
        displayBio : false
    }
   

    toggleDisplay = () => {
        this.setState({displayBio : !this.state.displayBio});
    }

    render(){
        let bio = this.state.displayBio ? (<div>
            <p>I love working and designing various templates. Other than that, I love to listen to music and read novels.
              I aslo write on the side as a hobby. You can visit them on royalroad and webnovel.
            </p>
            <button onClick={this.toggleDisplay} className="btn btn-info">Show Less</button>
          </div>): <button onClick={this.toggleDisplay} className="btn btn-info">Show More</button>;
        return(
            <div>
            <img src={profilePhoto} alt="ProfilePhoto" className="profile-photo" />
            <h1>Hello!!!</h1>
            <p>My name is Nitin Kumar Pandey</p>
            <p>I am a Software Engineer, interested in Front-End Development.</p>
            {bio}
            
            <Projects/>
            
            <SocialMedia />
        </div>
        );
        
    }

}

export default App;
