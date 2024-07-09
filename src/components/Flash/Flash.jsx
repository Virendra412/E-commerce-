import React, { useEffect, useState } from "react";
import './flash.css'
import { AnimatePresence, motion } from "framer-motion";

export const Flash = () => {
  const [change, setChange] = useState(true);
  let TEXT1 = "FREE SHIPPING FOR ALL ONLINE PAYMENTS";
  let TEXT2 = "FREE RETURNS AND FREE EXCHANGE";

 
  useEffect(() => {
    const interval = setInterval(() => {
      setChange(!change);
      
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [change]);

  return (
    <div
      className="flash_mes text-center py-2 fw-bold text-light"
      style={{ background: "#8A7350", fontSize: "14px" }}
      >
        
      {change ? (
        <motion.div key={1} initial={{opacity:0}} animate={{opacity:1}} > {TEXT1} </motion.div>
      ) : (
        <motion.div key={2} initial={{opacity:0}} animate={{opacity:1}}>{TEXT2}</motion.div>
        )}
        
              
    </div>
  );
};

// export const Flash2=()=>{
  
//   return (
//     <div className="flash_mes text-center py-4 text-light" style={{ background: "#C23B3C", fontSize: "14px" }} >
//       <h5 className="mb-1">FLAT 40% OFF | END OF SEASON SALE</h5>
//       <p className="mb-0">+ EXTRA 5% OFF ON ALL ONLINE PAYMENTS</p>
      
            
//   </div>
//   )
// }
