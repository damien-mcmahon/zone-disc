// This file should be somewhere better...
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const alphabetise = key => ({[key]:strA}, {[key]: strB}) => {
    return strA === strB ? 0 : strA < strB ?  -1 : 1;
};

export const optionise = (labelKey, valueKey) => 
    ({[labelKey]: label, [valueKey]: value}) => ({
        label,
        value
    });

export const has = val => val !== undefined && val.length > 0;