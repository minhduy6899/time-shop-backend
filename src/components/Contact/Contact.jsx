import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

import './contact.scss';

function Contact() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <div id='google_map'>
            <div className='map_container'>
              <div id='map'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.970740658176!2d106.70725711180619!3d10.813550989292995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752919592bb033%3A0x5c96ad2008bbfb95!2zVG_DoCBuaMOgIEhvbWV0YWxr!5e0!3m2!1svi!2s!4v1723689807436!5m2!1svi!2s'
                  title='map'
                  width='600'
                  height='450'
                  style={{ border: '0' }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 contact_col'>
          <div className='contact_contents'>
            <h1>Contact Us</h1>
            <p>
              There are many ways to contact us. You may drop us a line, give us
              a call or send an email, choose what suits you the most.
            </p>
            <div>
              <p>(800) 686-6688</p>
              <p>info.deercreative@gmail.com</p>
            </div>
            <div>
              <p>mm</p>
            </div>
            <div>
              <p>Open hours: 8.00-18.00 Mon-Fri</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className='follow_us_contents'>
            <h1>Follow Us</h1>
            <ul className='social d-flex flex-row'>
              <li>
                <a href='/#' style={{ backgroundColor: '#3a61c9' }}>
                  <FacebookOutlinedIcon className='social-icon' />
                </a>
              </li>
              <li>
                <a href='/#' style={{ backgroundColor: '#41a1f6' }}>
                  <TwitterIcon className='social-icon' />
                </a>
              </li>
              <li>
                <a href='/#' style={{ backgroundColor: '#fb4343' }}>
                  <GoogleIcon className='social-icon' />
                </a>
              </li>
              <li>
                <a href='/#' style={{ backgroundColor: '#8f6247' }}>
                  <InstagramIcon className='social-icon' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='col-lg-6 get_in_touch_col'>
          <div className='get_in_touch_contents'>
            <h1>Get In Touch With Us!</h1>
            <p>Fill out the form below to recieve a free and confidential.</p>
            <form action='post'>
              <div>
                <input
                  id='input_name'
                  className='form_input input_name input_ph'
                  type='text'
                  name='name'
                  placeholder='Name'
                  required='required'
                  data-error='Name is required.'
                />
                <input
                  id='input_email'
                  className='form_input input_email input_ph'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required='required'
                  data-error='Valid email is required.'
                />
                <input
                  id='input_website'
                  className='form_input input_website input_ph'
                  type='url'
                  name='name'
                  placeholder='Website'
                  required='required'
                  data-error='Name is required.'
                />
                <textarea
                  id='input_message'
                  className='input_ph input_message'
                  name='message'
                  placeholder='Message'
                  rows='3'
                  required
                  data-error='Please, write us a message.'
                ></textarea>
              </div>
              <div>
                <button
                  id='review_submit'
                  type='submit'
                  className='red_button message_submit_btn trans_300'
                  value='Submit'
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='newsletter'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center'>
                <h4>Newsletter</h4>
                <p>
                  Subscribe to our newsletter and get 20% off your first
                  purchase
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <form action='post'>
                <div className='newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center'>
                  <input
                    id='newsletter_email'
                    type='email'
                    placeholder='Your email'
                    required='required'
                    data-error='Valid email is required.'
                  />
                  <button
                    id='newsletter_submit'
                    type='submit'
                    className='newsletter_submit_btn trans_300'
                    value='Submit'
                  >
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
