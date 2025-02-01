import React from 'react'
import './Footer.css'
import { Button } from "antd";
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined} from '@ant-design/icons'
const Footer = () => {
  return (
    // <footer>foot</footer>
    <div className='Footer-Frame'>
      <div className='Footer'>
        {/* <div className="Upper">
          <div className="Left-Box">
            <div className="Text">
              CONTACT US
            </div>

          </div>

          <div className="Right-Box">
            <div className="Mail"></div>
            <div className="Lucky"></div>
            <div className="Spacer"></div>


          </div>
        </div> */}
        <div className="Lower">
          <div className="Left-Box">
            <div className="Title">
              IIEST, Shibpur

            </div>
            Botanical garden area, Shibpur, 700013
          </div>
          <div className="Mid-Box">
            <div className='Image'>
            </div>
            <div className="Text">
              <div className="Left">
                copyright 2024 SoCIT
              </div>
              <div className="Right">
                <Button type='primary' icon={<LinkedinOutlined/>}></Button>
                <Button type='primary' icon={<GithubOutlined />}></Button>
                <Button type='primary' icon={<InstagramOutlined />}></Button>
                <Button type='primary' icon={<MailOutlined />}></Button>

              </div>
            </div>
          </div>
          <div className="Right-Box">
            <div className="Links">
              <div className='Title'>Quick Links</div>
              <div className="item">Home</div>
              <div className="item">Home</div>
              <div className="item">Home</div>
              <div className="item">Home</div>
            </div>
            <div className="Devs">
              <div className='Title'>Developers</div>
              <div className="item">Asif</div>
              <div className="item">Asif</div>
              <div className="item">Asif</div>
              <div className="item">Asif</div>
            </div>
          </div>
        </div>
        {/* <div className='Left-Box'>
        <div className="Text-Area">
        IIEST, Shibpur
        Botanical garden area, Shibpur, 700013
        </div>
        </div>
        <div className='Mid-Box'>

        </div>
        <div className='Right-Box'>

        </div> */}
      </div>




    </div>
  )
}

export default Footer