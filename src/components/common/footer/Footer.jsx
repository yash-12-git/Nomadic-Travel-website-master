import React from "react"
import "./footer.css"

const Footer = () => {
return (
  <>
    <footer>
      <div className='container'>
        <div className='box'>
          <div className='logo'>
          <img src='./images/logo-bg.png' alt='' />
            <p>Receive Updates, Hot deals, Discounts sent straignt in your inbox every month</p>
            <div className='input flex'>
              <input type='text' placeholder='Email Address' />
              <button style={{backgroundColor: "#fff4e4", color:"#1d2636"}}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className='legal'>
      <span>Nomadic... Spreading the travel bug since © 2022.</span>
    </div>
  </>
)
}

export default Footer
