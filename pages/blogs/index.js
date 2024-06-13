import React from 'react'

import Header from "../../components/Header"
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
        
      <div className="home-page-header">
        <Header />
      </div>
      <div className="pt-5 pb-4"></div>
      <div className="about-us justify-content-center px-5 d-flex flex-column ">
        <h1 className="mx-5 ps-4 purple text-lg-start text-center fw-semibold mt-4">Blogs</h1>
        <p className="mx-5 ps-4 purple text-lg-start text-center fw-semibold ">
          Home {" >  "}
          <span className="pink">Blogs</span>
        </p>
      </div>
      <div className='my-5 py-5 coming-soon-page'>
<h3 className='h1 purple' style={{marginBottom:150}}>COMING SOON ...</h3>
      </div>
      <Footer/>
    </div>
  )
}

export default index