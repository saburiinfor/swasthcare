import React, {Component} from "react";
import MediaElement from "./MediaElement";
import {Input} from "reactstrap";
import styles from "./MediaElement.module.css";

class NewMediaElementGroup extends Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: {name:"Shubha"},
            isLoaded: true,
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,

                    
                })
            }).catch((err) => {
                 console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

    
        return (
            <div className={styles.appointmentList}>
                {this.state.items.name}
            </div>
        );

    }

}

export default NewMediaElementGroup;