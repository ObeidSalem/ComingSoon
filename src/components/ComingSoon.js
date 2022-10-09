/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import logo from "../images/gificon1.gif";
import "../styles/ComingSoon.css";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import Locals from '../components/locals'
import { AiOutlineGlobal } from "react-icons/ai";
import Footer from "./Footer";
import logoHead from "../images/headimg.png";
import logoHeadtwo from "../images/arShahen.svg";

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
                src={localStorage.getItem('i18nextLng') === "ar" 
                ? logoHeadtwo : logoHead}
                alt="logo"
                style={{
                  width: '150px',
                  height: '150'
                }}

              />
            </div>
            <div class="column" >
              <div className="iconglo">
                <AiOutlineGlobal className="global"
                />
                <Locals />
              </div>
            </div>
          </div>
        </div>
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <Title text={t(title.text)} />


        <div className="description">
          <div clas>
            <p className="description-text">
              { t('Your')} <b style={{color:'#1B7CEC'}}> {t ('EV')}</b> { t('deserves a Quality-Time')}
            </p>
            <br></br>

          </div>

          <div className="descriptiontw">
            <a href="https://forms.zohopublic.com/ezcharge/form/ComingSoonSha7en/formperma/WTst-oOOOPFSL4r1ZNPqiWlvV0r9J4o2rtRsT-dmfo4?zf_rszfm=1">
              <button className="joinbutton">
                {t('Be a Part of Sha7en Family!')}
              </button>
            </a>
          </div>
        </div>

        <div className="linksSocial">
          <a
            href="https://instagram.com/sha7en.ae?igshid=YmMyMTA2M2Y=">
            <AiOutlineInstagram className="iconsocial" />
          </a>
          <a href="https://twitter.com/Sha7enAe?t=Mg5KrWiHZUNBMM2vDZK5dg&s=09">
            <AiOutlineTwitter className="iconsocial" />
          </a>
          <a class="mailto"
            href="mailto:info@sha7en.ae"
            mail>
            <AiOutlineMail className="iconsocial" />
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withTranslation()(ComingSoon);
