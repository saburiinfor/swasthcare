import React, {Component} from "react";
//import classnames from "classnames";
import ImgWithOverlayText from "./ImgWithOverlayText";
import img1 from "../../assets/images/bannerImg1.jpg";
import img2 from "../../assets/images/bannerImg2.jpg";
import img3 from "../../assets/images/bannerImg3.jpg";

class ImgWithOverlayTextGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBanners: [
        {text: "10% discount on all lab tests", path: img1},
        {text: "20% discount on first consultation fee", path: img2},
        {text: "20% discount on first consultation fee", path: img3}
      ]
    };
  }
  
  render() {
    return (
      <div>
        {this.state.listOfBanners.map(function (record, index) {
          return (
            <div key={index}>
              <ImgWithOverlayText
                imagePath={record.path}
                text={record.text}
              
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImgWithOverlayTextGroup;
