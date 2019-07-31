import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import classes from './Input.module.css';
const CustInput = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case ('input'):
            inputElement =
                <FormGroup>
                    <Label className={classes.Label}>{props.label}</Label>
                    <Input
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        invalid={props.invalid && props.touched}
                        onChange={props.changed}
                        onBlur={props.blured} />
                    <FormFeedback>{props.errorMessage}</FormFeedback>
                </FormGroup>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ('checkbox'):
            inputElement = (
                <FormGroup check>
                    <Label checked={props.elementConfig.checked} className={classes.Label}>
                        <Input
                            className={inputClasses.join(' ')}
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} />
                        {props.elementConfig.label}
                    </Label>
                </FormGroup>
            );
            break;
        default:
            inputElement =
                <FormGroup>
                    <Label className={classes.Label}>{props.label}</Label>
                    <Input
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        invalid={props.invalid && props.touched}
                        onChange={props.changed}
                        onBlur={props.blured} />
                    <FormFeedback>Please write at least 3 characters.</FormFeedback>
                </FormGroup>;
    }
    return (
        <div className={classes.Input}>
            {inputElement}
        </div>
    );
};
export default CustInput;

