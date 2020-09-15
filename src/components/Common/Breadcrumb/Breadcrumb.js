import React, {Component} from "react";
import classnames from "classnames";
import tickImage from "../../../assets/images/tick.png";
import "./CustomBreadcrumb.scss";

class Breadcrumb extends Component {
  componentDidMount() {
  }
  
  stepsUI = () => {
    let stepsArray = [];
    for (let i = 1; i <= this.props.steps; i++) {
      stepsArray.push(i);
    }
    let stepHtml = stepsArray.map((i) => {
      let activeStep = parseInt(this.props.activeStep);
      return <li key={'step-' + i} ref={'step' + i} id={'step-' + i} className={(i === activeStep) ? 'active': (i < activeStep) ? 'confirmed' : '' }>
        <span className={'stepText'}>Step {i}</span>
        <span className={'stepDivider'}/>
        <img src={tickImage} alt={'Done'}/>
        </li>;
    });
    // console.log(stepHtml);
    return stepHtml;
  }
  
  render() {
    return (
      <ul className={classnames('customBreadcrumb', "p-0")}>
        {this.stepsUI()}
      </ul>
    );
  }
}

export default Breadcrumb;
