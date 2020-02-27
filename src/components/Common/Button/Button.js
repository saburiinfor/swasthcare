import React from 'react';
import { Button } from "reactstrap";
import styles from './Button.module.css';
const CustButton = (props) => (
    <Button
        block
        color={props.color}
        disabled={props.disabled}
        className={styles[props.btnType]}
        onClick={props.clicked}>{props.children}</Button>
);
export default CustButton;