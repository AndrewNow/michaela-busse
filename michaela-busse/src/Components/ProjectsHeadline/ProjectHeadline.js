import React, { useEffect } from "react";

 const ProjectHeadline = (props) => {

    const {
        selectedColor,
        data,
        index,
        setActivePostAndType
    } = props;

    const {
      date,
      keywords,
      location,
      title,
      type      
    } = data;

    let entryContainerId = `entry_container_${index}`
    let customStyleText = {color: selectedColor};
    let customStyleTextBackground = { backgroundColor: selectedColor};
    let customBorderBottom = { borderBottom: `42px solid ${selectedColor}`};

    let renderKeywordsMaped = () => {
      let mapKeywords = keywords
      .map((ele, index) => {
        return <span style={customStyleTextBackground}>{ele}</span>
      })
      return mapKeywords;
    }

    const handleCellOpen = () => {
      setActivePostAndType(data);
    };
  
    return (
      <div>
          <section 
          onClick={handleCellOpen}
          className='entry_container' id={entryContainerId}>
            <div className='title_container'>
              <span style={customStyleText}>{title}</span>
            </div>
            <div className='date_location_container' style={customBorderBottom}>
              <span>{date}</span>
              <span>◊</span>
              <span>{location}</span>
            </div>
            <div className='type_keywords'>
              <div className='type'>
                <span style={customStyleTextBackground}>{type}</span>
              </div>
              <div className='keywords'>
                {renderKeywordsMaped()}
              </div>
            </div>
          </section>
      </div>
    );
};

export default ProjectHeadline;