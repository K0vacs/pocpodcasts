import React from "react"
import Swiper from 'react-id-swiper';
import baked from "../static/images/baked-the-podcast.jpg"
import lesser from "../static/images/lesser-known.jpg"
import pod from "../static/images/pod-off-the-press.jpg"
import son from "../static/images/son-of-a-son.jpg"

// This component renders the header section for desktop view
const CoverflowEffect = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',
    renderPagination: false,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  }
  return (
    <Swiper {...params}>
      <div className="swiper-slide">
        <img className="mt-5" src={lesser} alt="Lesser Known" width="100%" />
      </div>
      <div className="swiper-slide">
        <img className="mt-5" src={son} alt="Son of a son" width="100%" />
      </div>
      <div className="swiper-slide">
        <img className="mt-5" src={pod} alt="Pod off the press" width="100%" />
      </div>
      <div className="swiper-slide">
        <img className="mt-5" src={baked} alt="Baked the podcast" width="100%" />
      </div>
    </Swiper>
  )
};
export default CoverflowEffect;