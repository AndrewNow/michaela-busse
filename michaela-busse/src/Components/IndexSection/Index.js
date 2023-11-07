import React, { useEffect } from "react";

const Index = (props) => {

  const {
    entries,
    closeBioIndex,
    selectedColor
  } = props;

  let mapedEntriesList = entries
  .sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  })
  .map((ele, index) => {

    const {
      title,
      type,
      keywords,
      date,
      location
    } = ele;

    return (
      <div className="list_inner" key={index}> 
        <div>
        <p>
            {title}
          </p>
        </div>
        <div className='last_cell_list_inner'>
        <p>
            {location}
            <br/>
            {date}
          </p>
        </div>
      </div>
    )
  })

  // The repetition of the mapedEntriesList
  // is just to show the content here;
  return (
    <section 
      style={{backgroundColor: selectedColor}}
      className='index_section'>
        <div className='background_closer' onClick={() => closeBioIndex(null)}/>
        <header onClick={() => closeBioIndex(null)}>
          x 
        </header>
        <div className='index_outer'>
          <div className='index_keywords'>
            <span className='index_keywords_span'>Publications</span>
          </div>
          {mapedEntriesList}
          <div className='index_keywords'>
          <span className='index_keywords_span'>Teachings</span>
          </div>
          {mapedEntriesList}
          <div className='index_keywords'>
          <span className='index_keywords_span'>Works</span>
          </div>
          {mapedEntriesList}
          <div className='index_keywords'>
          <span className='index_keywords_span'>Research</span>
          </div>
          {mapedEntriesList}
        </div> 
    </section>
  );
};

export default Index;