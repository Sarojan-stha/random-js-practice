
//closures :    A function defined inside a function is closure
//              when a scope of a function ends the local variables are destroyed 
//              Inner function has access to the local variable of outer function 
//              so to acess the loacl variable outside the oouter function we access
//              it using closure property i.e. inner function
//              An object is returned by outer function having reference to it methods

//example 1 counter
function createCounter(start){
    let count = start;

    function counter(){
        console.log(count);
        count++;
    }

    return {counter};
}

const startCount = createCounter(10);
startCount.counter();
startCount.counter();
startCount.counter();
startCount.counter();
