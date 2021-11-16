//write your code here

const replaceWithYerr = (array, start = 0, count = array.length) => {
    let replace = [];
    for(let i = 0; i < array.length; i++){
        if(i >= start && i < start+count){
            replace.push("yerr");   
        }else {
            replace.push(array[i]);
        }
    }
    return replace;
};

const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

console.log(replaceWithYerr(months, 1, 3)); //['Jan', 'yerr', 'yerr, 'yerr', 'May', 'June']