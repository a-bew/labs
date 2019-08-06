
function stringSplosion(str) {
    //Provice your solution
    var hold = ""
    var outer = 0;
    store = [];
    while(outer<str.length){
        var inner = outer;
        while(inner>=0){
            hold+=str[inner] 
            inner--;
        }
        hold = hold.split('');
        hold= hold.reverse().join('')
        store.push(hold)
        hold="";
        outer++;
    }
    return store.join('');
}

module.exports = stringSplosion;