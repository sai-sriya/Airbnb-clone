import React, { useState } from 'react'
import "./Card.css";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Change, setChange } from '../Filter/Filter';
import Cardlinks from './Cardlinks';
import Farms from '../folder/Farms';

const Card = () => {
    // const [Change, setChange] = useState(Cardlinks);

    return (
        <div className='card-container'>
            {Cardlinks.map((item) => (
                <div className='card-dynamic'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={false}
                        mousewheel={true}
                        cssMode={true}
                        pagination
                        modules={[Pagination, Navigation]}
                        className="swiper-container"
                    >
                        {item.images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img src={img} alt="hotel images" className="card-img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='card-box-info'>
                        <div className='card-flex'>
                            <div className='place'>Pune,India</div>
                            <div className='card-rating'>
                                <StarIcon className='star' />
                                <div className='rating'>{item.rating}</div>
                            </div>
                        </div>
                        <div className='desc'>{item.desc}</div>
                        <div className='date'>{item.date}</div>
                        <div className='price-flex'><span><CurrencyRupeeIcon className='rupee' /></span><span className='price'>{item.price}</span><span className='night'>night</span></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;