import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from "react-scroll"
import HamburgerMenu from 'react-hamburger-menu';
import logo from "../assets/DISCOTREE_LOGO_FINAL1_1x.png"
import logo2 from "../assets/disco-transparent.png"
import ig from "../assets/ig-icon.png"
import '../App.css';

class Nav extends React.Component {
  state = {
    open: false,
    hideOrShowHambugerDropDown: 'hamburgerDropDown'
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={22}
                    height={18}
                    strokeWidth={2}
                    rotate={0}
                    color='#999999'
                    borderRadius={0}
                    animationDuration={0.5}
                />
        )
  }

  mobileNav = () => {
    return (
      <nav className='hamburgerDropDown nav-mobile'>
        <Link className="nav-elem" activeClass="active" onClick={this.handleClick.bind(this)} to="home" spy={true} smooth={true} offset={-16} duration={250}>HOME</Link>
        <Link className="nav-elem" activeClass="active" onClick={this.handleClick.bind(this)} to="whatwedo" spy={true} smooth={true} offset={-16} duration={250}>WHAT WE DO</Link>
        <Link className="nav-elem" activeClass="active" onClick={this.handleClick.bind(this)} to="about" spy={true} smooth={true} offset={-16} duration={250}>PRESS</Link>
        <Link className="nav-elem" activeClass="active" onClick={this.handleClick.bind(this)} to="events" spy={true} smooth={true} offset={-16} duration={250}>EVENTS</Link>
        <Link className="nav-elem" activeClass="active" onClick={this.handleClick.bind(this)} to="whyus" spy={true} smooth={true} offset={-16} duration={250}>WHY US</Link>
        <Link className="nav-elem" activeClass="active" onClick={this.handleClick.bind(this)} to="gallery" spy={true} smooth={true} offset={-16} duration={250}>GALLERY</Link>
        <Link className="nav-elem" activeClass="active" onClick={this.handleClick.bind(this)} to="contact" spy={true} smooth={true} offset={-16} duration={250}>CONTACT</Link>
      </nav>
    )
  }

  render(){
    return(
      <div className="nav-bar">
        <nav className="nav">
          <Link className="nav-elem nav-logos" activeClass="active" to="home" spy={true} smooth={true} offset={-128} duration={250}><img className="nav-logo" src={logo2}/></Link>
          <Link className="nav-elem" activeClass="active" to="home" spy={true} smooth={true} offset={-128} duration={250}>HOME</Link>
          <Link className="nav-elem" activeClass="active" to="whatwedo" spy={true} smooth={true} offset={-128} duration={250}>WHAT WE DO</Link>
          <Link className="nav-elem" activeClass="active" to="about" spy={true} smooth={true} offset={-128} duration={250}>PRESS</Link>
          <Link className="nav-elem" activeClass="active" to="events" spy={true} smooth={true} offset={-128} duration={250}>EVENTS</Link>
          <Link className="nav-elem" activeClass="active" to="whyus" spy={true} smooth={true} offset={-128} duration={250}>WHY US</Link>
          <Link className="nav-elem" activeClass="active" to="gallery" spy={true} smooth={true} offset={-128} duration={250}>GALLERY</Link>
          <Link className="nav-elem" activeClass="active" to="contact" spy={true} smooth={true} offset={-128} duration={250}>CONTACT</Link>
          <img className="nav-elem nav-logos" src={ig}/>
        </nav>
        { this.state.open ?  this.mobileNav() : this.displayHamburgerMenu()}
      </div>
    )
  }

}

export default Nav;
