import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'

function Home() {

   const [uploadStatusRecipe,setUploadStatusRecipe] = useState({})

   
  return (
    <>
      <div className=' align-items-center' style={{padding:'20px'}}>
          <div className='container mt-5'  style={{ backgroundColor: 'black', width: '100%',padding:'30px' }}>
              <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-6  text-center">
                      <img width={'250px'} height={'300px'} src="https://m.media-amazon.com/images/I/71nIiJO1uQL._AC_UF1000,1000_QL80_.jpg" alt="" />
                  </div>
                  <div className="col-md-6 " >
  
                      <p className='text-light fs-5 fw-bolder'>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
                     
                          <Add setUploadStatusRecipe={setUploadStatusRecipe}/>
  
                      </div>
  
                  </div>
  
               
              </div>
              <div className='container-fluid w-100  p-5 d-flex justify-content-center'>
                 <div className='all-videos col-lg-12'>
                    <h2 className='text-center mb-5 mt-5 text-dark fw-bolder '>ALL RECEPIES</h2>
                      <View  uploadStatusRecipe={uploadStatusRecipe}/>
                 </div>
              </div>
              </div>
           
     
  
              
    </>
           
  )
}

export default Home