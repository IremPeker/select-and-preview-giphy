import React from "react";
import { Img } from "react-image";
import LoaderContainer from "./LoaderContainer";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    autoplaySpeed: 0,
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.1,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(0, 0, 0, 0.9)',
    slideAnimationType: 'slide',
    slideSpringValues: [100, 900],
    slideTransitionSpeed: 0.2,
    slideTransitionTimingFunction: 'linear'
  },
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '5px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  thumbnails: {
    showThumbnails: false
  }
}

class GiphyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };  
  }

  render() {
    const allGiphies = this.props.giphies;
    const value = this.props.value;
    
    const allResults = allGiphies.map(el => {
      return (
        <SRLWrapper key={el.id} options={options}>
          <a href={el.images.original.url} key={el.id} data-attribute="SRL">
          <Img 
          className="giphy-image"
          loader={<LoaderContainer></LoaderContainer>} 
          src={el.images.fixed_height_still.url} 
          alt={el.title} title={el.title}
          />
          </a>
        </SRLWrapper>
      );
    });
    
    return <div className="images-container">{allResults}</div>;
  }
}

export default GiphyContainer;