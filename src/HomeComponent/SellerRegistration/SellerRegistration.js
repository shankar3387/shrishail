import React, { Component, Fragment } from 'react';
import { Row, Col, Divider, Form, Input } from 'antd';
import * as $ from 'jquery';
// import 'jquery.payment'
// import 'bootstrap/dist/css/bootstrap.css'
import './sellerRegistration.css';
import FormSeller from './formSeller';

const style = { background: '#0092ff', padding: '8px 0' };

const SellerRegistration = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="section supplier-hero">
            <div className="container">
              <div className="description">
                <div className="heading cover">Sell through India's Largest Reseller Platform</div>
                <div className="sub-heading">
                  {/* react-text: 20 */}Our {/* /react-text */}
                  {/* react-text: 21 */}1{/* /react-text */}
                  {/* react-text: 22 */} Crore+ Resellers can boost your business through 7,00,00,000+ customers
                  {/* /react-text */}
                </div>
                <div className="become-supplier-link">
                  <a href="#Register" className="button w-button smoothscroll">
                    Become a Meesho Supplier
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="section why-sell-through-us">
        <Row className="container">
          <Col>
            <div className="about-us-title">Why Sell through Meesho?</div>
          </Col>
        </Row>
        <div className="why-sell-through-us-content container">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="column" span={8}>
              <div className="number-heading">7,00,00,000+ Customers</div>
              <div className="number-description">
                {/* react-text: 35 */}Meesho is the largest distribution network of {/* /react-text */}
                {/* react-text: 36 */}1{/* /react-text */}
                {/* react-text: 37 */} Crore+ Resellers, selling to 7,00,00,000+ customers{/* /react-text */}
              </div>
              <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
            </Col>
            <Col span={8}>
              <div className="number-heading">Quick &amp; Secure Payments</div>
              <div className="number-description">
                Meesho charges commission only ‘after’ you make a sale and ensures timely payments
              </div>
              <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
            </Col>
            <Col span={8}>
              <div className="number-heading">Lowest Returns</div>
              <div className="number-description">
                Meesho has the lowest returns in the industry so you get maximum profit on your products
              </div>
              <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
            </Col>
            <Col className="second-row column" offset={8} span={8}>
              <div className="number-heading">Delivery Support</div>
              <div className="number-description">
                Meesho takes care of shipping and delivery so you can focus on your core business
              </div>
              <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
            </Col>
            <Col className="second-row column" span={8}>
              <div className="number-heading">Account Manager</div>
              <div className="number-description">
                Meesho provides you a dedicated account manager to grow your sales exponentially
              </div>
              <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="section supplier-how-to-works">
        <div className="container">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="column" span={24}>
              <div className="about-us-title">How it Works?</div>
            </Col>
          </Row>
        </div>
        <div className="why-sell-through-us-content container">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="column" span={12}>
              <div>
                <div className="number-heading">List Products on Meesho</div>
                <div className="number-description">
                  Our team helps you list your products on Meesho. We give them priority space for maximum visibility as
                  they become popular
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
            </Col>
            <Col className="column" span={12}>
              <div>
                <div className="number-heading">Start Receiving Orders</div>
                <div className="number-description">
                  As your products go Live on the app and our Resellers share them with their WhatsApp, Facebook and
                  Instagram contacts, you will start receiving orders immediately
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
            </Col>
            <Col className="second-row column" span={12}>
              <div>
                <div className="number-heading">Delivery Handled by Meesho</div>
                <div className="number-description">
                  We offer quick and convenient pick-up and delivery across India through our logistics partners! All
                  you need to do is pack the product and we do the rest
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
            </Col>
            <Col className="second-row column" span={12}>
              <div>
                <div className="number-heading">Receive Earnings</div>
                <div className="number-description">
                  Payments are directly deposited to your bank account within a few days of shipping the orders
                </div>
                <img src="https://static.meeshosupply.com/web/images/highlight.png" className="highlight" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div id="Register" className="section seller-form-fill-up">
        <div className="container">
          <Row>
            <Col className="seller-stats column" span={12}>
              <div>
                <div className="seller-form-header">More than 22,000 Suppliers Sell on Meesho</div>
                <div className="seller-form-text">
                  Become a Meesho Supplier by filling in the registration form below. Once you submit the form, our
                  onboarding team will get in touch with you.
                </div>
                <div className="seller-form-text2">To be a Meesho Supplier, you need:</div>
                <div className="seller-form-list">
                  <div>
                    <img src="https://static.meeshosupply.com/web/images/bullet-tick.png" />
                    <div>GST Identification Number (GSTIN)</div>
                  </div>
                  <div>
                    <img src="https://static.meeshosupply.com/web/images/bullet-tick.png" />
                    <div>PAN Card</div>
                  </div>
                  <div>
                    <img src="https://static.meeshosupply.com/web/images/bullet-tick.png" />
                    <div>Bank Account</div>
                  </div>
                </div>
                <div className="seller-form-text3">Register using the form and we will get in touch with you soon!</div>
              </div>
            </Col>
            <Col className="seller-contact-us column" span={12}>
              <FormSeller />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SellerRegistration;
