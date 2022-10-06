/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import logo from "../images/gificon1.gif";
import logoHead from "../images/headimg.png";
import "../styles/ComingSoon.css";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import DropdoenLang from '../components/DropdoenLang'
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
        "Join Sha7en Family !"
    },
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
    } = this.state;
    const { t } = this.props;

    return (
      <div className="background">
        <div className="">
          <div class="row">
            <div class="column" >
              <img
                className="mainlogo"
                src={logoHead}
                style={{
                  width: '150px',
                  height: '150'
                }}

              />
            </div>
            <div class="column" >
              <DropdoenLang />

            </div>
          </div>
        </div>
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <Title text={t(title.text)} />
        <Description
          text={t(description.text)}
          text2={t(description.text2)}

        />

        <div className="linksSocial">
          <a
            href="https://instagram.com/sha7en.ae?igshid=YmMyMTA2M2Y="
          >
            <AiOutlineInstagram className="iconsocial"

            />
          </a>
          <a
            href="https://twitter.com/Sha7enAe?t=Mg5KrWiHZUNBMM2vDZK5dg&s=09"
          >
            <AiOutlineTwitter className="iconsocial" />
          </a>
          <a
            class="mailto"
            href="mailto:sha7en.ae"
            mail
          >
            <AiOutlineMail className="iconsocial" />
          </a>
        </div>
      </div>
    );
  }
}

export default withTranslation()(ComingSoon);
