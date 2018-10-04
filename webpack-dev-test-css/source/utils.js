
/*
This function add for example jumbotoron jumbotoron 
for -fluid
*/
export function classify(key, value) {
    if(value[0]==='-') value = key + value;
    value = value.split(' -').join(` ${key}-`)
    return `${key} ${value}`;
}

export function addPrefix(prefix, value){
    if(value[0]==='-') value = prefix + value;
    return value
}