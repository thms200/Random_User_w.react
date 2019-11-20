import React, { Component } from 'react';
import Name_after from "./Component/name2.jpg";
import Location_after from './Component/location2.jpg';
import Mail_after from './Component/mail2.jpg';
import Phone_after from './Component/phone2.jpg';
import Name from './Component/name.jpg';
import Phone from './Component/phone.jpg';
import Location from './Component/location.jpg';
import Mail from './Component/mail.jpg';
import Header from "./Component/Header";
import Section from "./Component/Section";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ["Brad Gibson", "My name is", Name_after],
      location: ["9278 new road, kilcoole", "My Address is", Location_after],
      mail: ["brad.gibson@example.com", "My mail address is", Mail_after],
      phone: ["011-962-7516", "My phone number is", Phone_after],
      key: ["Brad Gibson", "My name is"],
      originalImg: [Name, Phone, Location, Mail]
    }
  }

  makeImg(event) {
    let li = document.querySelectorAll(".li");
    for(let i = 0; i < li.length; i++) {
      li[i].src = this.state.originalImg[i];
    }
  }
  
  render() {
    return (
      <div>
        <Header></Header>
        <Section
          data={this.state}
          selectValue={this.state.key[0]}
          selectIntro={this.state.key[1]}
          makeInfo={function(event){
            if(event.target.alt === "location"){
              this.makeImg(event)
              this.setState({key:[this.state.location[0], this.state.location[1]]});
              event.target.src = this.state.location[2];          
            } else if(event.target.alt === "name"){
              this.makeImg(event)
              this.setState({key:[this.state.name[0], this.state.name[1]]});
              event.target.src = this.state.name[2];
            } else if(event.target.alt === "phone"){
              this.makeImg(event)
              this.setState({key:[this.state.phone[0], this.state.phone[1]]});
              event.target.src = this.state.phone[2];
            } else if(event.target.alt === "mail"){
              this.makeImg(event)
              this.setState({key:[this.state.mail[0], this.state.mail[1]]});
              event.target.src = this.state.mail[2];
            }
          }.bind(this)}
        >
        </Section>
      </div>
    )
  }
}

export default App;
