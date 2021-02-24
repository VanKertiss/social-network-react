export const required = (value) => {
    if (value) return undefined;
    return 'field is recuired!';
}

export const maxLength = (maxLength) => (value) => 
    value && value.length > maxLength ? `max length is ${maxLength} symbols`: undefined;

