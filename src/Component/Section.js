import React, { Component } from 'react';
import Name_after from "./name2.jpg";
import Location_after from './location2.jpg';
import Mail_after from './mail2.jpg';
import Phone_after from './phone2.jpg';
import Name from './name.jpg';
import Phone from './phone.jpg';
import Location from './location.jpg';
import Mail from './mail.jpg';
import axios from 'axios'

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClick: -1,
      url: "https://randomuser.me/api/portraits/men/28.jpg",
      user: ["Brad Gibson", "011-962-7516", "9278 new road, kilcoole", "brad.gibson@example.com"],
      default: ["My name is", "My phone number is", "My address is", "My mail address is"],
      intro: ["Brad Gibson", "My name is"],
      originalImg: [Name, Phone, Location, Mail],
      changeImg: [Name_after, Phone_after, Location_after, Mail_after]
    }
  }

  makeDefault() {
   if(this.state.isClick === -1) {
     return this.state.intro[1];
   } else if (this.state.isClick === 0) { //name
     return this.state.default[0];
   } else if (this.state.isClick === 1) { //phone
    return this.state.default[1];
   } else if (this.state.isClick === 2) { //address
    return this.state.default[2];
   } else if (this.state.isClick === 3) { //mail
    return this.state.default[3];
   } 
  }

  makeSelect() {
    if(this.state.isClick === -1) {
      return this.state.intro[0];
    } else if (this.state.isClick === 0) { //name
      return this.state.user[0];
    } else if (this.state.isClick === 1) { //phone
     return this.state.user[1];
    } else if (this.state.isClick === 2) { //address
     return this.state.user[2];
    } else if (this.state.isClick === 3) { //mail
     return this.state.user[3];
    }
  }

  makeClick(event) {
    const clickAlt = event.target.alt; 
    if(clickAlt === "name") {
      this.setState({
        isClick: 0
      })
    } else if(clickAlt === "phone") {
      this.setState({
        isClick: 1
      })
    } else if(clickAlt === "location") {
      this.setState({
        isClick: 2
      })
    } else if(clickAlt === "mail") {
      this.setState({
        isClick: 3
      })
    }
  }

  makeNew() { //axios 사용
		axios.get("https://randomuser.me/api/?results=1")
		.then(function(response){
      const data = response.data.results[0]
      const url = data.picture.large;
      const name = data.name.first +  " " + data.name.last;
      const phone = data.phone;
      const address = data.location.street.number + " " + data.location.street.name + data.location.city;
      const mail = data.email;
      const intro = [name, "My name is"];
      const arr = [[name, phone, address, mail], intro, url];
      return arr;
    })
    .then((arr) => {
      this.setState({
        user: arr[0],
        intro: arr[1],
        url: arr[2]
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="people">
            <div 
              className="photo" 
              style={ {backgroundImage: "url(" + this.state.url + ")"} }
            >
            </div>
          </div>
        </header>
        <section>
          <div className="default_information">{this.makeDefault()}</div>
          <div className="select_information">{this.makeSelect()}</div>
          <ul className="list_information"  onClick={this.makeClick.bind(this)}>
            <li className="name">
              <img 
                className="li" 
                src={this.state.isClick === 0 ? this.state.changeImg[0] : this.state.originalImg[0]}
                alt="name"
              />
            </li>
            <li className="phone">
              <img 
                className="li" 
                src={this.state.isClick === 1 ? this.state.changeImg[1] : this.state.originalImg[1]} 
                alt="phone"
              />
            </li>
            <li className="location">
              <img 
                className="li" 
                src={this.state.isClick === 2 ? this.state.changeImg[2] : this.state.originalImg[2]} 
                alt="location"
              />
            </li>
            <li className="mail">
              <img 
                className="li" 
                src={this.state.isClick === 3 ? this.state.changeImg[3] : this.state.originalImg[3]}
                alt="mail"
              />
            </li>
          </ul>
          <button onClick={this.makeNew.bind(this)}>
            Click
          </button>
        </section>
      </div>
    )
  }
}

export default Section;
