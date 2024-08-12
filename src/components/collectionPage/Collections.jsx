import React from 'react'
import './collection.css'
import Button  from '../Button/Button'
import { Link } from 'react-router-dom'
    
 const Collections = () => {
  return (
      <div className='collections'>
          <h3 className='text-center'>RUN TOGETHER. RUN FOREVER</h3>
          <div className="coll_images d-flex  gap-4">
              <div className="left  overflow-hidden">
                  <img src="https://cdn.sanity.io/images/qa41whrn/prod/880dde1a7b742eac37c07ed386db1c45d320114b-1000x1300.jpg?w=2160&q=80&auto=format" alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>PUMA NITRO <sup>TM</sup> COLLECTION</h4>
                      <p>YOUR PERFECT RUNNING PARTNER </p>
                      <Link to='/search?q=nitro'><Button bg="black" color="white" width="300px">SHOP NOW</Button></Link>
                     
                    </div>
              </div>
              <div className="right overflow-hidden">
                  <img src="https://cdn.sanity.io/images/qa41whrn/prod/506bff8a0acef29108a11e793ef9fb45efa5cd8f-1536x1536.gif" alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>PUMA NITRO <sup>TM</sup> COLLECTION</h4>
                      <p>YOUR PERFECT RUNNING PARTNER </p>
                      <Link to='/search?q=nitro'><Button bg="black" color="white" width="300px">SHOP NOW</Button></Link>
                     
                    </div>
              </div>
          </div>
         
    </div>
  )
}
const Collections2 = () => {
  return (
      <div className='collections'>
          {/* <h3 className='text-center'>RUN TOGETHER. RUN FOREVER</h3> */}
          <div className="coll_images d-flex  gap-4">
              <div className="left  overflow-hidden">
                  <img src="https://cdn.sanity.io/images/qa41whrn/prod/b8fd857124b97fe075eddd3d6506546f21da4711-3938x3938.jpg?w=2160&q=80&auto=format" alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>BLKTOP RIDER</h4>
                      <p>A CONTEMPORARY CLASSIC </p>
                      <Link to='/search?q=men'><Button bg="black" color="white" width="300px">SHOP NOW</Button></Link>
                     
                    </div>
              </div>
              <div className="right overflow-hidden">
                  <img src="https://cdn.sanity.io/images/qa41whrn/prod/cc76d7fd7844709e9bed83e90e4ae3dfe78320b2-1300x1000.jpg?w=2160&q=80&auto=format" alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>TERRACE SHOES</h4>
                      <p>STRAIGHT FROM THE ARCHIVES </p>
                      <Link to='/search?q=men'><Button bg="black" color="white" width="300px">SHOP NOW</Button></Link>
                     
                    </div>
              </div>
          </div>
         
    </div>
  )
}

export { Collections,Collections2 };