
import React, { Component } from "react";

import MediaElement from "./MediaElement";

import { Input} from "reactstrap";

import styles from "./MediaElement.module.css";

class MediaElementGroup extends Component {

  constructor(props) {

    super(props);

    this.state = {

      filter: "",   

      listOfPannels: [

        {

          name: "Saubri",

          expertiseIn: "Cardio, Physio",

          practicingSince: "2001",

          consultAt: "Saburi Clinic, Star clinic"

        },

        {

          name: "SaubriTwo",

          expertiseIn: "ortho, Physio",

          practicingSince: "2003",

          consultAt: "Saburi Clinic, Star clinic"

        },

        {

          name: "SaubriThree",

          expertiseIn: "ortho, Physio",

          practicingSince: "2003",

          consultAt: "Saburi Clinic, Star clinic"

        },

        {

          name: "SaubriFour",

          expertiseIn: "ortho, Physio",

          practicingSince: "2003",

          consultAt: "Saburi Clinic, Star clinic"

        },

        {

          name: "SaubriFive",

          expertiseIn: "ortho, Physio",

          practicingSince: "2003",

          consultAt: "Saburi Clinic, Star clinic"

        },

        {

          name: "SaubriSix",

          expertiseIn: "ortho, Physio",

          practicingSince: "2003",

          consultAt: "Saburi Clinic, Star clinic"

        }

      ]

    };

  }

   

  handleChange = event => {

    this.setState({ filter: event.target.value });

  };

 

  render() {

    const { filter, listOfPannels } = this.state;

    const lowercasedFilter = filter.toLowerCase();

    const filteredData = listOfPannels.filter(item => {

      return Object.keys(item).some(key =>

        item[key].toLowerCase().includes(lowercasedFilter)

      );

    }); 

      

    return (

      <div className={styles.appointmentList}>

        <h4>Select the doctor</h4>

        <Input

          type="search"

          name="search"

          id="searchDoctor"

          placeholder="Search by name, location or clinic"

          value={filter} onChange={this.handleChange}

        />

       

        {filteredData.map((item,index) => (

        <MediaElement

              noOfStars="5"

              record={item}

              key={index}

              className="styles.mediaElement"

            />

         

        ))}

 

 

 

       

      </div>

    );

  }

}

export default MediaElementGroup;

