import React from 'react'
import './OurCompany.css'

const OurCompany = () => {
    return (
        <div className="our-company">
            <div className="our-company-left">
                <div className="box-primary"></div>
                <div className="box-second"></div>
            </div>
            <div className="our-company-right">
                <h2>Our company</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sunt animi esse laudantium, optio, ut odio quae hic, quod error quis rem possimus exercitationem explicabo placeat fugit. Adipisci inventore asperiores accusantium, dignissimos cum incidunt obcaecati, voluptate voluptates, praesentium atque odio modi assumenda tenetur velit. Reprehenderit et necessitatibus illo nulla minus ratione ducimus sed at sapiente enim suscipit, voluptas dicta facere?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis repudiandae consequatur impedit magnam aperiam architecto tempora tempore culpa excepturi nobis provident temporibus, hic sequi iure nostrum dicta voluptates facere.</p>
                <button className="learn-more">LEARN MORE</button>
                <button className="our-people">OUR PEOPLE</button>
            </div>
        </div>
    )
}

export default OurCompany