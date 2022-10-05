import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import Links from "./Links";
import logo from "../images/gificon1.gif";
import logoHead from "../images/headimg.png";
import facebook from "../images/fbookicon.svg";
import instagram from "../images/instaicon.svg";
import twitter from "../images/twittericon.svg";
import "../styles/ComingSoon.css";

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class ComingSoon extends Component {
  //
  handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  state = {
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow"
    },
    title: {
      text: "Coming Soon!"
    },
    description: {
      text:
        "Your EV deserves a Quality-Time",
      text2:
        "A HUB where EVs are spoiled"
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    },
    links: [
      {
        url: "",
        logo: facebook,
      },
      {
        url: "",
        logo: instagram,
      },
      {
        url: "",
        logo: twitter,
      }
    ],
  };

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    //

    const {
      title,
      description,
      logo,
      links,
    } = this.state;
    const { t } = this.props;

    return (
      <div className="background">

        <div className="headico">
          <img src={logoHead} />
        </div>

        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <Title text={t(title.text)} />
        <Description
          text={t(description.text)}
        />

        <Links links={links} />


        <nav style={{
          width: '100%',
          padding: '1rem',
        }}>
          <button
            onClick={() => this.handleClick('en')}
            style={{
              borderColor: '#1B7CEC',
              borderRadius: '5px',
              padding:'5px',
              background: '#ffffff',
              color:'black',
              fontWeight: 'bold'
            }}
          >
            English
          </button>&nbsp;
          <button 
          onClick={() => this.handleClick('ar')} 
          style={{
            borderColor: '#1B7CEC',
            borderRadius: '5px',
            padding:'5px',
            background: '#ffffff',
            color:'black',
            fontWeight: 'bold'
          }}
          >
            Arabic
          </button>

        </nav>

      </div>
    );
  }
}

export default withTranslation()(ComingSoon);
