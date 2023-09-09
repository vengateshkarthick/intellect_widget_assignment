import React from 'react';
import Meditation from '../assests/meditation.svg';

const Intro = () => {
   return (
    <>
     <div className="d-flex justify-content-evenly align-items-center intro my-2 ">
        <div className='intro-img'>
           <img src={Meditation} alt="meditation" className="meditation-img"/>
        </div>
        <div className="intro-motivate">
            <p className='text-start m-0 self-motivate'>
                <span className="topic"><strong className="mx-1">Keep yourself calm with <span className='fs-3' style={{ color: "rebeccapurple"}}>&nbsp;4</span>&nbsp;steps</strong></span>
                <ul className="four-steps m-0 p-1 fw-bolder">
                    <li className="my-1">1.<strong >&nbsp;Diaphragmatic breathing&nbsp;</strong> is a technique that induces relaxation, slows the heartbeat, and lowers or stabilizes blood pressure. </li>
                    <li className="my-1">2.<strong>&nbsp;Visualization&nbsp;</strong>, or guided imagery, that mentally conjures soothing scenes can also relax and calm you. Find a quiet place to sit and get comfortable.</li>
                    <li className="my-1">3.<strong>&nbsp;Meditation&nbsp;</strong> is the practice of focusing attention on what is happening in the present and accepting it without judgment</li>
                     <li className="my-1">4.<strong>&nbsp;Good Sleep&nbsp;</strong>, a better sleep will help your neurons to function proerly</li>
                </ul>
            </p>
        </div>
     </div>
     <div className="m-atuo quest fs-2 fw-bolder">Let us find how do you feel today !!</div>
     </>
   )    
}

export default Intro;