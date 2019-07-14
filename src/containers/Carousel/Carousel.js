import React, {Component} from "react";
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
//import styles from "./Carousel.module.css";
const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeIndex: 0,
      nextIcon: <span className="glyphicon glyphicon-glass"></span>,
      prevIcon: <span className="glyphicon glyphicon-glass"></span>,
      autoPlay: false
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  
  onExiting() {
    this.animating = true;
  }
  
  onExited() {
    this.animating = false;
  }
  
  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }
  
  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  }
  
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({activeIndex: newIndex});
  }
  
  render() {
    const {activeIndex} = this.state;
    
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText}/>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
    
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default HomeCarousel;
