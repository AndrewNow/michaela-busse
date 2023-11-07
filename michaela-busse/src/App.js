import { useState, useEffect } from 'react';
import useKeypress from 'react-use-keypress';
import mockData from "./mock_data";
import blobData from "./blob_data"
import './App.css';

// Importing components here;
import Shape from './Components/Shape';
import ProjectTemplate from './Components/ProjectsTemplates/ProjectTemplate';
import ProjectsHeadline from './Components/ProjectsHeadline/ProjectHeadline';
import NewsParent from './Components/NewsTemplate/NewsParent';
import Bio from './Components/BioSection/Bio';
import Index from './Components/IndexSection/Index';

function App() {

  const [offset, setOffset] = useState(0);
  const [selectedColor, setColor] = useState("#79ff4d");
  const [activeSection, setActiveSection] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [activePostType, setActivePostType] = useState(null);

  let backgroundGreyColor = "black"

    useEffect(() => {
        // This is the color palette to change in case the website 
        // runs randomly selected color
        let colorPalette = ["#79ff4d"];
        let selectedColor = colorPalette[Math.floor(Math.random()*colorPalette.length)];
        setColor(selectedColor)

        // This is used to toggle the index (only appearing if pageY > 0)
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);

    }, []);


    const {
      entries,
      biography,
      mainSortingWords,
      mainSortingSections,
      news
    } = mockData;
    

    let changePageView = (arg) => {
      setActiveSection(arg);
    };

    // optimize soon
    let closeBioIndex = () => {
      setActiveSection(null);
    };


    let closeProjectTemplate = () => {
      setActivePost(null)
    };

    let setActivePostAndType = (post) => {
      const {type} = post;
      setActivePost(post);
      setActivePostType(type);
    } 


    useEffect(() => {
      // this blocks the page from scrolling when 
      // a secion is active
      if(activeSection !== null){
        document.body.style.overflow = "hidden";
      }else{
        document.body.style.overflow = "scroll";
      }
    },[activeSection]);


    useEffect(() => {
      console.log(activePost, "here");
      if(activePost !== null){
        document.body.style.overflow = "hidden";
      }else{
        document.body.style.overflow = "scroll";
      }
    }, [activePost])


    // getting the arrawOfBlobs to generate
    // the blobs on the view
    let returnBlobs = () => {
      return blobData.arrawOfBlobs
      .map((ele, index) => {

        const {
          blobIndex,
          speed,
          radius,
          scaleRect,
        } = ele;

        return (
          <Shape 
            scaleRec={scaleRect}
            speed={speed} 
            radius={radius} 
            color={selectedColor}
            blobIndex={blobIndex}
        />
        )
      })
    };


    let returnBlobsIndexBio = () => {
      return blobData.arrawOfBlobsIndexBio
      .map((ele, index) => {

        const {
          blobIndex,
          speed,
          radius,
          scaleRect,
        } = ele;

        return (
          <Shape 
            scaleRec={scaleRect}
            speed={speed} 
            radius={radius} 
            color={backgroundGreyColor}
            blobIndex={blobIndex}
        />
        )
      })
    };


    // subrender: blobs;
    let renderBlobs = () => {
      return (
        <section>
            {returnBlobs()}
        </section>
      )
    };


    let renderBlobsIndexBio = () => {
      // if only the bio 
      // or index is toggled
      return (
        <section className='blobs_index_bio'>
            {returnBlobsIndexBio()}
        </section>
      )
    };


    // Might: make header and footer a component;
    let renderHeader = () => {
      let styleHeader = { backgroundColor: selectedColor};
      return (
        <header className="main_header" style={styleHeader}>
          <span>Michaela Büsse</span>
          <span>Researching postnatural landscapes</span>
        </header>
      )
    };

    let renderFooter = () => {
      return (
        <footer>
          <span>Postdoc @tudresden</span>
          <span>Associated Investigator @mattersofactivity</span>
        </footer>
      )
    };

    let renderLinkSections = () => {
      if(offset > 0){
        return (
          <nav>
            <span onClick={() => changePageView("bio")}>Biography</span>
            <span onClick={() => changePageView("index")}>Index</span>
            <span>Email</span>
          </nav>
        )
      }
    };

    let renderSortingMenu = () => {

      let sortingMenuMapped = mainSortingSections
      .map((ele, index) => {
        return (
          <div className='sorting_menu_cells' index={index}>
            <div>
              <div style={{backgroundColor: selectedColor} }className='box_tickle'></div>
            </div>
            <div>
              <span>{ele}</span>
            </div>
          </div>
        )
      })
      return (
        <div className='sorting_menu'>
          {sortingMenuMapped}
        </div>
      );
    };


    let renderTextSection = () => {

      let entriesMapped = entries
      .map((ele, index) => {
        return (
          <ProjectsHeadline
            setActivePostAndType={setActivePostAndType}
            data={ele}
            mainSortingWords={mainSortingWords}
            index={index}
          />  
        )
      })

      return (
        <section className='entries_container'>
          {entriesMapped}
        </section> 
      )
    };

    let renderNewsSection = () => {

      if(activeSection !== null){
        return;
      };

      return (
       <NewsParent 
        selectedColor={selectedColor}
        news={news} 
      />
      )
    };

    let renderBioSection = () => {
      if(activeSection !== "bio"){return null };
  
      return (
        <Bio 
          biography={biography}
          selectedColor={selectedColor}
          closeBioIndex={closeBioIndex}
        />  
      )
    };


    // This will become a component;
    let renderIndexSection = () => {
      if(activeSection !== "index"){
        return null 
      };

      return (
        <Index 
          entries={entries}
          selectedColor={selectedColor}
          closeBioIndex={closeBioIndex}
        />  
      )
    };


    let renderProjectsSection = () => {
      return (
        <ProjectTemplate
          closeProjectTemplate={closeProjectTemplate}
          selectedColor={selectedColor}
          activePost={activePost}
          activePostType={activePostType}
          entries={entries}
        />  
      )
    }

  return (
    <main>
      {renderNewsSection()}
      {renderSortingMenu()}
      {renderBlobs()}
      {renderBlobsIndexBio()}
      {renderHeader()}
      {renderFooter()}
      {renderLinkSections()}
      {renderTextSection()}
      {renderIndexSection()}
      {renderBioSection()}
      {renderProjectsSection()}
    </main>
  );
}

export default App;



// return (
//   <main>
//     {renderNewsSection()}
//     {renderSortingMenu()}
//     {renderBlobs()}
//     {renderHeader()}
//     {renderFooter()}
//     {renderLinkSections()}
//     {renderTextSection()}
//     {renderIndexSection()}
//     {renderBioSection()}
//     {renderProjectsSection()}
//   </main>
// );
// }