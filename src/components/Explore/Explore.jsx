import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const Explore = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Heyy!!' title='Explore By Destination' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Explore
