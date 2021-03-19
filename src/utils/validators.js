export const required = value => value ? undefined : "Field is required";

//Замикання

export const maxLength = maxLength => (value) => {
        if (value && value.length >= maxLength) {
            return `Max length is ${ maxLength } symbols`
        }
        return undefined;
};
