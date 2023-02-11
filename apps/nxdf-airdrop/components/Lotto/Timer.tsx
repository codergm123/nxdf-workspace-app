import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useIsMobile } from '../../hooks/useIsMobile';
import styled from 'styled-components';





function Timer(){
  const isMobile = useIsMobile();

   const TimerDiv = styled.div<{isMobile:boolean}>` 
    font-size: ${({isMobile}) => isMobile ? "2rem"  :  "2rem"  }  ;
    font-weight: bold;
    text-align: center;
    color: white;
    @media(max-height: 1280px){
      font-size: ${({isMobile}) => isMobile ? "2rem"  :  "1.5rem"  }  ;
    }
  `;



  const TimeLeft=()=>{
    let drawtime=new Date("Aprill 2, 2022 14:00:00 UTC").getTime()/1000;
    let now=new Date().getTime()/1000;
    let lefttime=drawtime-now;
    let duration=moment.duration(lefttime,'seconds');
    let interval=1000;
    if (duration.asSeconds()<=0){
      clearInterval(interval);
    }
    duration=moment.duration(duration.asSeconds()-1,'seconds');
    return (duration.days()+' Days '+duration.hours()+' Hours '+duration.minutes()+' Min '+duration.seconds()+' Sec ')
  }

  const [timeLeft, setTimeleft] = useState(TimeLeft());
  
  useEffect(()=>{
    setTimeout(()=>{
      setTimeleft(TimeLeft());
    },1000)
  })

 

  return (
    <TimerDiv isMobile={isMobile} >
      {timeLeft}
    </TimerDiv>
  );
}

export default Timer;
