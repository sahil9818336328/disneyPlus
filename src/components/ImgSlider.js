import React from 'react'
import badag from '../assets/images/slider-badag.jpg'
import badging from '../assets/images/slider-badging.jpg'
import scale from '../assets/images/slider-scale.jpg'
import scales from '../assets/images/slider-scales.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Wrapper {...settings}>
      <Wrap>
        <img src={badag} alt='slider-img' />
      </Wrap>
      <Wrap>
        <img src={badging} alt='slider-img' />
      </Wrap>
      <Wrap>
        <img src={scale} alt='slider-img' />
      </Wrap>
      <Wrap>
        <img src={scales} alt='slider-img' />
      </Wrap>
    </Wrapper>
  )
}

const Wrapper = styled(Slider)`
  margin-top: 1.5rem;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`
const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    display: block;
    border: 5px solid transparent;

    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      padding: 0;
      border-color: rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`
export default ImgSlider
