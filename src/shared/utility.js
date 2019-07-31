export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const checkValidity = (value, rules) => {
    let isValid = true, error = "";
    if (!rules) {
        return { "isValid": true, "error": "" };
    }
    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
        if (isValid === false) {
            error = "Field is Required";
            return { "isValid": isValid, "error": error };
        }
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
        if (isValid === false) {
            error = "MinLength 6 characters required";
            return { "isValid": isValid, "error": error };
        }
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
        //const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        isValid = pattern.test(value) && isValid;
        if (isValid === false) {
            error = "Please Enter Valid Email";
            return { "isValid": isValid, "error": error };
        }
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }
    return { "isValid": isValid, "error": error };
};
