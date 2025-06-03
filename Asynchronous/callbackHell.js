function task1(callback){
    setTimeout(() =>{
        console.log("task 1 completed");
        callback();
    }, 5000)
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 3000);
}

function task3(callback){
    setTimeout(() => {
        console.log("task 3 completed");   
        callback();
    }, 2000);
}
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1500);
}

function task4(callback){
    setTimeout(() => {
        console.log("task 4 completed");
        callback();

    }, 2000);
}


function task5(callback){
    setTimeout(() => {
        console.log("task 5 completed");
        callback();

    }, 1000);
}

task1(()=>{
    task2(() =>{
        task3(() =>{
            task4(() =>{
                task5(() =>{
                    console.log("all tasks completed");
                })
            })
        })
    })
}) 

/*     task1(task2(task3(task4(task5(() =>{
        console.log("all tasks completed");

    }))))) 
        
we use arrow functions while using callbacks because 
when we pass another function as argument directly
i.e. task1(task2()) this will call the task2 function instead of 
passing as a callback to execute only after task1 

in short, you're calling the functions immediately instead of passing them as callbacks.

    
*/