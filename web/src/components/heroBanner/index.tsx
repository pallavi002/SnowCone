

//////
import { useState } from 'react';
import BannerImage from '../../images/MainBanner.png';
import Header from '../header';


export default function HeroBanner() {

  return (
    <div>
    <div className="bg-white" style={{position:'relative'}}>

      <div
        className="relative bg-cover"
        style={{
          backgroundImage: `url(${BannerImage})`,
          height:"1000px"
        }}
      >
        
        <div className="mx-auto max-w-2xl  py-32 sm:py-48 lg:py-48">
          <div className="text-center bg-opacity-25 p-5 rounded-2xl">
            <span className="my-32 rounded-6xl text-xl font-bold font-serif tracking-tight text-neutral-200 sm:text-3xl">
              Create your own snow story !!
            </span>
            <p className=' text-neutral-300'>I scream, You Scream, We all Scream for Ice Cream.</p>
          </div>
        </div>

      </div>
    </div>

    {/* overlap this with upper background */}
    <svg style={{position:"absolute", top:"75%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,53.3C160,43,320,21,480,58.7C640,96,800,192,960,197.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
}

