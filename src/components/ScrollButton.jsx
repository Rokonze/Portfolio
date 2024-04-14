import React, {useState} from 'react'; 
import { AiOutlineArrowUp } from "react-icons/ai";

  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <button className='fixed bottom-[20%] right-[1%] sm:bottom-[10%] sm:right-[5%] h-auto   z-10'> 
     <AiOutlineArrowUp onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} className='text-3xl  p-0.5 sm:p-1 box-content rounded-xl'/> 
    </button> 
  ); 
} 

export default ScrollButton