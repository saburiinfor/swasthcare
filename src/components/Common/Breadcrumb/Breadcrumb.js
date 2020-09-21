import React, {Component} from "react";
import classnames from "classnames";
import tickImage from "../../../assets/images/tick.png";
import "./CustomBreadcrumb.scss";

class Breadcrumb extends Component {
  componentDidMount() {
    const activeSteps = parseInt(this.props.activeStep);
    for (const key in this.refs) {
      if (key.replace('step', '') < activeSteps) {
        this.refs[key].className += ' confirmed';
      }
    }
    this.refs['step' + activeSteps].className += ' active';
  }
  
  render() {
    return (
      <ul className={classnames('customBreadcrumb', "p-0")}>
        <li ref={'step1'} id={'step-1'}>
          <span className={'stepText'}>Step 1</span>
          <span className={'stepDivider'}/>
          <img src={tickImage} alt={'Done'}/>
        </li>
        <li ref={'step2'} id={'step-2'}>
          <span className={'stepText'}>Step 2</span>
          <span className={'stepDivider'}/>
          <img src={tickImage} alt={'Done'}/>
        </li>
        <li ref={'step3'} id={'step-3'}>
          <span className={'stepText'}>Step 3</span>
          <span className={'stepDivider'}/>
          <img src={tickImage} alt={'Done'}/>
        </li>
        <li ref={'step4'} id={'step-4'}>
          <span className={'stepText'}>Step 4</span>
          <span className={'stepDivider'}/>
          <img src={tickImage} alt={'Done'}/>
        </li>
        <li ref={'step5'} id={'step-5'}>
          <span className={'stepText'}>Step 5</span>
          <span className={'stepDivider'}/>
          <img src={tickImage} alt={'Done'}/>
        </li>
        <li ref={'step6'} id={'step-6'}>
          <span className={'stepText'}>Step 6</span>
          <span className={'stepDivider'}/>
          <img src={tickImage} alt={'Done'}/>
        </li>
        <li ref={'step7'} id={'step-7'}>
          <span className={'stepText'}>Step 7</span>
          <span className={'stepDivider'}/>
          <img src={tickImage} alt={'Done'}/>
        </li>
      </ul>
    );
  }
}

export default Breadcrumb;