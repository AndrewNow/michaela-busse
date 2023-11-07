import React, { useEffect } from "react";

 const NewsChild = (props) => {

    const {
        selectedColor,
        data
    } = props;


    useEffect(() => {

    }, []);

    let renderNewsComponents = () => {
      const {
        date,
        img,
        title
      } = data;

      return (
        <div className='news_cell'>
            <div 
            style={{backgroundColor: selectedColor}}
              className='news_cell_date'>
              <span>{date}</span>
            </div>
            <div 
              style={{backgroundColor: selectedColor}}
              className='img_background'>
              <img src={img} />
            </div>
            <div className='news_cell_text'>
              <span>{title}</span>
            </div>
         </div> 
      )
    };

    return (
        <section >
                {renderNewsComponents()}
        </section>
    )
};

export default NewsChild;


// return (
//   <section 
//     className='news_outer'>
//       <section className='news_cell_outer'>
//           {renderNewsComponents()}
//       </section>
//   </section>
// )
