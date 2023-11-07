import React, { useEffect } from "react";
import NewsChild from "./NewsChild";
import Slider from "react-slick";

 const NewsTemplate = (props) => {

    const {
        selectedColor,
        news
    } = props;

    // use react slick slider?

    var settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      draggable: false,
      fade: true
    };

    let renderNewsComponentsFirst = () => {

      const slicedNewsArray = news.slice(0, 2);
      let newsChildElements = slicedNewsArray
      .map((ele, index) => {
        return (
          <NewsChild 
            key={index}
            data={ele}
            index={index}
            selectedColor={selectedColor}
          />  
        )
      })

      return (
        <div>
          <Slider {...settings}>
              {newsChildElements}
          </Slider>  
        </div>
      )

    };

    return (
        <section 
          className='news_outer'>
            <section className='news_header'>
              <span>news/upcoming</span>
            </section>
            <section className='news_cell_outer'>
                {renderNewsComponentsFirst()}
            </section>
        </section>
    )
};

export default NewsTemplate;


// {renderNewsComponents()}

