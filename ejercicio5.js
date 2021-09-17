function CapitaliseFirstWord(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
    return text;
}

function CapitaliseFirstLetter(text) {
    text =  text.toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ');
    return text;
} 

function MinimaliseText(text) {
    text = text.toLowerCase();
    return text;
}

function RemoveExtraSpaces(text) {

    text = text.replace(/\s+/g,' ').trim();
    return text;
}

function Capitalise(text){
    text = RemoveExtraSpaces(
           CapitaliseFirstWord(text)
           );
    return text;
}

function Minimalise(text) {
    text = RemoveExtraSpaces(
           MinimaliseText(text)
           );
    return text;    
}

function WordCasealise(text) {
    text = RemoveExtraSpaces(
           CapitaliseFirstLetter(text)
           );
    return text;
}

export { RemoveExtraSpaces, Capitalise, Minimalise, WordCasealise }