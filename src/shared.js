export const convertHeaderToLink = (header) => {
    if(typeof header === 'string'){
        return header.split(' ').join('-')
    }
    return header;
}