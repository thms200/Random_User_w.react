import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <section>
        <div className="default_information">{this.props.selectIntro}</div>
        <div className="select_information">{this.props.selectValue}</div>
        <ul className="list_information"  onClick={this.props.makeInfo}>
        <li className="name">
          <img className="li" src={this.props.data.originalImg[0]} alt="name" />
        </li>
        <li className="phone">
          <img className="li" src={this.props.data.originalImg[1]} alt="phone"/>
        </li>
        <li className="location">
          <img className="li" src={this.props.data.originalImg[2]} alt="location"/>
        </li>
        <li className="mail">
          <img className="li" src={this.props.data.originalImg[3]} alt="mail"/>
        </li>
      </ul>
      </section>
    )
  }
}

export default Section;