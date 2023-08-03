function Test(){
    console.log('This is Function');
}

Test();

const test2 = function(){
    console.log('This Function 2');
}

test2();

const test3 = (a,b,c) => {
    console.log(a + b + c);
}

test3(2,2,2);

export const add = (a, b) => {
    
    return a + b;

}

console.log(add(20,10));

