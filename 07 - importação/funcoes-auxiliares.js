function gets(){
    return 10;
}
function print(text){
    console.log(text);
}

//module.exports.gets = gets;
module.exports = {gets,print
    //gets: gets,
    //print: print
};