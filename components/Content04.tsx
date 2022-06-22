import { useState, useEffect } from "react";
import Item from "./portfolio/Item";
import Link from "next/link";

import {gsap} from 'gsap'

const Content04 = (props:any) => {
  const [focusItem, setFocusItem] = useState({
      'title':'3D NFT Web', 
      'url':'assets/images/portfolio/desolate.png',
      'link':'https://www.desolate.space/',
      'details':'React, Next.js, TypeScript, Three.js, Tailwind CSS, Solana, Web3.js',
      'id':0
  })

  const changeItem = (value:any) =>{
    const focusContainer = document.getElementById('focus-item')
    gsap.fromTo(focusContainer, 0.3, {x:0}, {x:-1500})
    gsap.fromTo(focusContainer, 0.3, {x:1500}, {x:0, delay:0.4, ease:"expo.out"})
    setTimeout(()=>{
      setFocusItem(value)
    },300)
  }

  return (
    <div id="content04" 
      className="absolute -z-10 top-0 left-0 w-screen h-screen pointer-events-auto opacity-0 text-[#FFFAFA]
        bg-gradient-to-b from-indigo-500 to-[#52ddf5] bg-fixed"
      style={{backgroundImage:"url('assets/images/back4.jpg')", backgroundRepeat: 'no-repeat'}}
    >
      <div className="w-screen h-screen overflow-hidden bg-gray-900 bg-opacity-80 p-8">
        <div className="h-[10%] md:h-[15%] flex justify-center items-end">
          <div className="text-center text-[35px] md:text-[50px] text-light-shadow mb-4 md:mb-0">MY Portfolio</div>
        </div>

        <div className="h-[90%] flex justify-center items-center">
          <div className="main_box ">
              <div className="img img1">
                <div className="alink">
                  <Link href={' https://www.brandnooz.de/'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Gift platform</p>
                      React, Ruby On Rails, TypeScript, Tailwind CSS<br/>
                      https://www.brandnooz.de/
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img2">
                <div className="alink">
                  <Link href={'https://www.tripsomnia.com/en'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Booking Website</p>
                      React, Styled Component, Javascript, Bootstrap<br/>
                      https://www.tripsomnia.com/en
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img3">
                <div className="alink">
                  <Link href={'https://trackdprofile.web.app/ '}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Music Sharing paltform form</p>
                      Vue.js, Bootstrap Vue, MongoDB, Node JS, Typescript<br/>
                      https://trackdprofile.web.app/ 
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img10">
                <div className="alink">
                  <Link href={'https://www.redminote11.de/play/lobby'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">WebVR</p>
                      React, Next.js, Tailwind CSS, WebGL, Three.js<br/>
                      https://www.redminote11.de/play/lobby 
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img6">
                <div className="alink">
                  <Link href={'https://www.jimmyjazz.com/'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Shopify</p>
                      React, Shopify, Styled Components<br/>
                      https://www.jimmyjazz.com/
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img7">
                <div className="alink">
                  <Link href={'https://www.stridehealth.com/'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Health Care</p>
                      Laravel, Vue, Tailwind CSS<br/>
                      https://www.stridehealth.com/                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img8">
                <div className="alink">
                  <Link href={'https://northwest.agency/'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">MERN Stack</p>
                      React, Redux, Express.js, MongoDB, GSAP<br/>
                      https://northwest.agency/
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img4">
                <div className="alink">
                  <Link href={'https://fitara.in/'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Yoga traning</p>
                      Express, GraphQL, SocketIO<br/>
                      https://fitara.in/
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img11">
                <div className="alink">
                  <Link href={'https://wulus.com/ '}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Electric devices sale</p>
                      Wordpress CMS ACF<br/>
                      https://wulus.com/ 
                    </a>
                  </Link>
                </div>
              </div>

              <div className="img img12">
                <div className="alink">
                  <Link href={'https://at.cafe/'}>
                    <a target={'_blank'}>
                      <p className="text-[30px]">Theme Provider</p>
                      Gatsby, React, SASS, SCSS<br/>
                      https://at.cafe/
                    </a>
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content04