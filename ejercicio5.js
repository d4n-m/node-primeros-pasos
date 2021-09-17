function CapitaliseFirstWord(string) {
    string = RemoveExtraSpaces(string);
    string = string.charAt(0).toUpperCase() + string.slice(1);
    
    return string;
}

function CapitaliseFirstLetter(string) {

    string =  string.toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ');
        
    return string;
} 

function MinimaliseText(string) {

    string = string.toLowerCase();

    return string;
}

function RemoveExtraSpaces(string) {

    let newString = string.replace(/\s+/g,' ').trim();

    return newString;
}

export { CapitaliseFirstWord, CapitaliseFirstLetter, MinimaliseText }