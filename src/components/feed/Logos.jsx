import React from 'react';
import {FaReact, FaCss3Alt} from 'react-icons/fa';
import {RiHtml5Line} from 'react-icons/ri';
import {IoLogoJavascript} from 'react-icons/io';
import {GrNode} from 'react-icons/gr';
import {SiMaterialui, SiRedux} from 'react-icons/si';
import Slider from 'react-slick/lib/slider';
import styled from 'styled-components';

const Logos = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows : false,
        autoplay : true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
        ]
      };
  return (
    <Contents>
        <Slider {...settings} style={{marginTop: "4rem"}}>
            <><RiHtml5Line className='icons' style={{color : "#da4722a9"}}/></>
            <><FaCss3Alt className='icons' style={{color : "#164fee90"}}/></>
            <><IoLogoJavascript className='icons' style={{color : "#e7e30086"}}/></>
            <><FaReact className='icons' style={{color : "#1dcde490"}}/></>
            <><GrNode className='icons' style={{color : "#14d6026f"}}/></>
            <><SiMaterialui className='icons' style={{color : "#360ccc86"}}/></>
            <><SiRedux className='icons' style={{color : "#e41db290"}}/></>
        </Slider>
    </Contents>
  )
}

export default Logos;

const Contents = styled.div`
    .icons{
        font-size: 3rem;
        opacity: 0.7;
        :hover{
            opacity: 1;
        }
    }
    @media(max-width : 970px){
        margin-bottom: 2rem;
    }
    .slick-track{
        text-align: center;
    }
`