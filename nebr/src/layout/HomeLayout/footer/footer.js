import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer_section pt-5">
            <div className="container footer_logo pt-5 pb-2 d-flex">
              <img src={"../images/supernebr_logo.png"} className="img-fluid mx-auto d-block" alt="SuperNebr_logo" />
            </div>
            <div className="container pb-5 pt-3">
              <div className="social-btns text-center">
                <a type="button" className="btn-floating btn-lg btn-insta"><i className="fa fa-instagram" /></a>
                <a type="button" className="btn-floating btn-lg btn-fb"><i className="fa fa-facebook" /></a>
                <a type="button" className="btn-floating btn-lg btn-tw"><i className="fa fa-twitter" /></a>
                <a type="button" className="btn-floating btn-lg btn-linkedin"><i className="fa fa-linkedin" /></a>
                <a type="button" className="btn-floating btn-lg btn-youtube"><i className="fa fa-youtube-play" /></a>
              </div>
            </div>
            <div className="container pb-5">  
              <div className="row footer_list pb-5">
                <div className="col-lg-6 footer_cmpny pr-5">
                  <h6><b>Our Company</b></h6>
                  <ul>
                    <li><Link to={'/aboutus'} href>About Us</Link></li>
                    <li><Link to={'/careers'} href>Careers</Link></li>
                    <li><Link to={'/investors'} href>Investors</Link></li>
                    <li><Link to={'/Blogs'} href>Blogs</Link></li>
                  </ul>
                </div>
                <div className="col-lg-6 footer_legal pl-5">
                  <h6><b>Legal</b></h6>
                  <ul>
                    <li><Link to={'/termsCondition'} href>Terms &amp; Condition</Link></li>
                    <li><Link to={'/privacyPolicy'} href>Privacy Policy</Link></li>
                    <li><Link to={'/licenseAgreement'} href>License Agreement</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid pt-3 footer_back">
              <p>Copyright <i className="fa fa-copyright" aria-hidden="true" /> 2020. All Right Reserved</p>
            </div>
          </footer>
          
        )
    }
}
