import React, { useEffect } from "react";
import Slider from "react-slick";

 const ProjectTemplate = (props) => {

    const {
        activePost,
        activePostType,
        selectedColor,
        closeProjectTemplate,
        entries
    } = props;

    var settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      draggable: false
    };


    // all the projects list rendered her, 
    // potentially with their own components;
    let renderProjectList = () => {
      let entriesMapedProjectList = entries
      .map((ele, index) => {

        const {
          title, 
          type,
          keywords
        } = ele;

        return (
          <div key={index} className="project_list_inner">
            {title}
          </div>
        )
      });

      return (
        <div className="project_list_outer">
          {entriesMapedProjectList}
        </div>
      )
    }

    let renderProjectListArrow = () => {
      return (
        <div className="project_list_arrow">
          <span className="project_list_arrow_left">
            <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1683134232/caroline_monnet/CM_Arrow__Arrow_Left.svg" />
          </span>
          <span className="project_list_arrow_right">
            <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1683134233/caroline_monnet/CM_Arrow__Right_Arrow.svg" />
          </span>
        </div>
      )
    }


    let renderProjectsSection = () => {      
        const {
          title,
          date,
          keywords,
          location,
          type
        } = activePost;
  
        let renderkeywordsMapped = () => {
          return keywords
          .map((ele, index) => {
            return (
              <span key={index}>
                {ele}
              </span>
            )
          })
        }
        switch (activePostType) {
          case "Research":
            return (
                <div>
                  <div className='index_outer'>
                    <div className='project_opened_title'>
                      <h1>{title}</h1>
                    </div>

                    <div className='teaching_publication_infos'>
                      <div>
                        <span>{date}</span>
                      </div>
                      <div>
                        <span>{location}</span>
                      </div>
                    </div>
                    
                    <div className='teaching_publication_img'>

                    <Slider {...settings}>

                    <div className="teaching_publication_img_inner">
                          <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1694440988/fig2_gp5jfz.jpg" />
                          <div className="teaching_publication_credits">
                            <span>Image 1/3 : credit</span>
                          </div>
                        </div>
                        <div className="teaching_publication_img_inner">
                          <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1694440988/fig1_ublgeg.jpg" />
                          <div className="teaching_publication_credits">
                          <span>Image 2/3 : credit</span>
                          </div>
                        </div>
                        <div className="teaching_publication_img_inner">
                          <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1694440992/fig3_sfyfnr.jpg" />
                          <div className="teaching_publication_credits">
                            <span>Image 3/3 : credit</span>
                          </div>
                        </div>
                    </Slider>

                    </div>
                    <div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='project_keywords'>
                      {renderkeywordsMapped()}
                    </div>
                  </div> 
              </div>
            );
            break;
            case "Publication":
              return (
                <div>
                    <div className='index_outer'>
                      <div className='project_publication_body'>

                      <div className='publication_body_child'>
                        <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1690173561/281443094_416886736645420_4872338811143085664_n_qkuw00.jpg" />
                        <div>
                          <span className="publication_body_child_credits">Access the PDF here</span>
                        </div>
                      </div>
  
                      <div className='publication_body_child'>

                      <div className='project_opened_title'>
                        <h1>{title}</h1>
                      </div>
                      <div className='project_infos'>
                        <div>
                          <span>{date}</span>
                        </div>
                        <div>
                          <span>{location}</span>
                        </div>
                      </div>
                        <p>Lorem Ipsum is simply dummy text of the printing <span className="body_child_link">and typesetting industry</span>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <div className='project_keywords'>
                        {renderkeywordsMapped()}
                      </div>

                      </div>
                      </div>
                    </div> 
                </div>
              );
              break;
            case "Works":
              return (
                <div>
                  <div className='index_outer'>
                    <div className='project_opened_title'>
                      <h1>{title}</h1>
                    </div>

                    <div className='teaching_publication_infos'>
                      <div>
                        <span>{date}</span>
                      </div>
                      <div>
                        <span>{location}</span>
                      </div>
                    </div>
                    
                    <div className='teaching_publication_img'>

            
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='project_keywords'>
                      {renderkeywordsMapped()}
                    </div>
                  </div> 
                  <div className="credits_exhibition_outer">
                    <div className="credits_exhibition_inner">
                        <div>
                            <span className="credits_exhibition_span">Credits</span>
                        </div>
                        <div className="credits_list">
                            <div className="credit_list_inner">
                                <span>UK research assistant: </span>
                                <span>Henry Bradley</span>
                            </div>
                            <div className="credit_list_inner">
                                <span>UK research assistant: </span>
                                <span>Henry Bradley</span>
                            </div>
                            <div className="credit_list_inner">
                                <span>UK research assistant: </span>
                                <span>Henry Bradley</span>
                            </div>
                            <div className="credit_list_inner">
                                <span>UK research assistant: </span>
                                <span>Henry Bradley</span>
                            </div>
                        </div>
                    </div>
                    <div className="credits_exhibition_inner">
                        <div>
                            <span className="credits_exhibition_span">Exhibitions</span>
                        </div>
                        <div className="credits_list">
                            <div className="credit_list_inner">
                                <span>Kochi-Muziris Biennale, India</span>
                                <span>2022</span>
                            </div>
                            <div className="credit_list_inner">
                                <span>Stiftung Kunst und Natur, Museum Sinclair-Haus, Bad Homburg</span>
                                <span>2022</span>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              );
              break;
              case "Teaching":
                return (
                    <div>
                      <div className='index_outer'>
                        <div className='project_opened_title'>
                          <h1>{title}</h1>
                        </div>
    
                        <div className='teaching_publication_infos'>
                          <div>
                            <span>{date}</span>
                          </div>
                          <div>
                            <span>{location}</span>
                          </div>
                        </div>
                        
                        <div className='teaching_publication_img'>
    
                            <div className="teaching_publication_img_inner">
                              <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1690173561/281443094_416886736645420_4872338811143085664_n_qkuw00.jpg" />
                              <div className="teaching_publication_credits">
                                <span>credit here</span>
                              </div>
                            </div>
                            <div className="teaching_publication_img_inner">
                              <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1689065843/MB/53905812_135498047505361_5119221577615986423_n.jpg" />
                              <div className="teaching_publication_credits">
                                <span>credit here</span>
                              </div>
                            </div>
                            <div className="teaching_publication_img_inner">
                              <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1690173561/281443094_416886736645420_4872338811143085664_n_qkuw00.jpg" />
                              <div className="teaching_publication_credits">
                                <span>credit here</span>
                              </div>
                            </div>
                            <div className="teaching_publication_img_inner">
                              <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1690173566/280762875_1090894818435981_1714461128781020116_n_frqmxk.jpg" />
                            </div>
                        </div>
                        <div>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className='project_keywords'>
                          {renderkeywordsMapped()}
                        </div>
                      </div> 
                 </div>
                )
          default:
            break;
        }
    };

    if(activePost == null){
      return null;
    }

    return (
        <section className='project_section'>
          <div className='background_closer' onClick={() => closeProjectTemplate(null)}/>
          <header onClick={() => closeProjectTemplate(null)}>x</header>
          {renderProjectsSection()}
          {renderProjectList()}
          {renderProjectListArrow()}
        </section>
    )
};

export default ProjectTemplate;