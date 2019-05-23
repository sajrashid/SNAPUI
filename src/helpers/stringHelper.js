export default class StringHelper {
   
     // tests if a string is in URL format
    static MatchURL(str){
            // test if URL with regex
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/gi;
            var regex = new RegExp(expression);

            if (str.match(regex)) {
                return true;
            } 
        return false;

    }

     // tests if a string contains any string from an array of strings
    static TestUrl(searchStr,arrStrings) {
        for (var i = 0; i < arrStrings.length; i++) {
            if (searchStr.toLowerCase().includes(arrStrings[i].toLowerCase())) {
                return { isValid: true, foundString: arrStrings[i].toLowerCase() };
            }
        }
        return { isValid: false, foundString: '' };
    };

}



