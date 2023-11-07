import React, { useEffect } from "react";

 const Bio = (props) => {

    const {
      biography,
      selectedColor,
      closeBioIndex
    } = props; 

    const {
      mainText
    } = biography;

    let mainTexMapped = mainText
    .map((ele, index) => {
      return (
        <div key={index}> 
          <p>{ele}</p>
        </div>
      )
    })


    return (
      <section className='bio_section'>
        <div className='background_closer'/>
          <header onClick={closeBioIndex}>x</header>
        <div 
          style={{backgroundColor: selectedColor}}
          className='bio_text_outer'>
          {mainTexMapped}
        </div> 
      </section>
    )
};

export default Bio;
