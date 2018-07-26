
function reverse(string){
    return rev = string.replace(/[a-z]+/gi, function (s) {
         return s.split('').reverse().join('')



});
}

console.log(reverse("We are at Ignite Solutions! Their email-id is careers@ignitesol.com"));
