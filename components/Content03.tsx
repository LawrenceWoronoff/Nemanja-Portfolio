import { useState, useEffect } from "react";
import {gsap} from 'gsap'

const Content03 = (props:any) => {

  return (
    <div id="content03" className="absolute -z-10 top-0 left-0 w-screen h-screen pointer-events-auto opacity-0 text-[#FFFAFA]">
      <div className="w-screen h-screen flex justify-center items-center bg-black bg-opacity-20">
        <div className="text-shadow1 px-4">
            <div className="mb-16 text-[30px] md:text-[50px] md:leading-[30px] text-center">
              Skill Sets
            </div>
            <div className="text-[16px] leading-[20px] md:text-[24px] md:leading-[30px]">
              <div className='py-2'>React, Vue, Next, Nuxt, Angular</div>
              <div className='py-2'>Laravel, JS, TS, Solidity, C/C++, C#</div>
              <div className='py-2'>Rust, Node.js, React Native, Ionic, Flutter</div>
              <div className='py-2'>GraphQL, SCSS, Ethereum, Truffle, Hardhat, Web3js, Etherjs</div>
              <div className='py-2'>Solana-web3, DAO, Uniswap, Terra, Olympus Dao, Curve Dao</div>
              <div className='py-2'>AWS, Heroku, MySQL, MongoDB, PostgreSQL, Firebase, etc</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Content03