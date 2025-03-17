import React from 'react'
import './Footer.css'
import { Button } from "antd";
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons'
const Footer = () => {
  return (
    <footer className='Footer-Frame'>
      <div className='Footer'>
        <div className="Lower">
          <div className="Left-Box">
            <div className='Logo_mob'>
              <div className="Image"></div>
            </div>
            <div className="mob_middle">
              <div className='wrapper_left'>
                <div className="Title">
                  <div className="fixedImage">
                  </div>
                  Society of Information Technology,<br />IIEST, Shibpur
                </div>
                <div className='address'>
                  Botanical garden area,
                  Shibpur, Howrah-700013<br />
                  West bengal
                </div>
              </div>
              <div className="wrapper_right"></div>
            </div>
          </div>
          <div className="Mid-Box">
            <div className='Image'>
            </div>
            <div className="Text">
              <div className="Left">
                copyright ©2024 SoCIT. All rights reserved.
              </div>
              <div className="Right">
                <Button shape='circle' size='large' style={{margin: '0.2rem'}} icon={<LinkedinOutlined />}></Button>
                <Button shape='circle' size='large' style={{margin: '0.2rem'}} icon={<GithubOutlined />}></Button>
                <Button shape='circle' size='large' style={{margin: '0.2rem'}} icon={<InstagramOutlined />}></Button>
                <Button shape='circle' size='large' style={{margin: '0.2rem'}} icon={<MailOutlined />}></Button>
              </div>
            </div>
          </div>
          <div className="Right-Box">
            <div className="wrapper">
              <div className="Links">
                <div className='Title'>Quick Links</div>
                <div className="item">Home</div>
                <div className="item">Academics</div>
                <div className="item">Placement</div>
                <div className="item">Events</div>
              </div>
              <div className="Links" id='shift_right'>
                <div className='Title'>Developers</div>
                <div className="item">Asif</div>
                <div className="item">Asif</div>
                <div className="item">Asif</div>
                <div className="item">Asif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer