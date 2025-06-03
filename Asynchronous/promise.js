function task1(){
 
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        const completed = true;

        if(completed === true){
            resolve("You have completed task1");
        }else{
            reject("You haven't completed task 1");
        }
    }, 3000);
        
    })
}

function task2(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
             const completed = true;
        if(completed === true){
            resolve("You have completed task2");
        }else{
            reject("You haven't completed task2");
        }
        }, 2000);
       
    })
}

function task3(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
             const completed = true;
        if(completed === true){
            resolve("You have completed task3");
        }else{
            reject("You haven't completed task3");
        }
        }, 1000);
       
    })
}

function task4(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
             const completed = true;
        if(completed === true){
            resolve("You have completed task4");
        }else{
            reject("You haven't completed task4");
        }
        }, 1500);
       
    })
}

function task5(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
             const completed = true;
        if(completed === true){
            resolve("You have completed task5");
        }else{
            reject("You haven't completed task5");
        }
        }, 2000);
       
    })
}

task1().then(msg => {console.log(msg); return task2();})
        .then(msg =>{console.log(msg); return task3()})
        .then(msg =>{console.log(msg); return task4()})
        .then(msg =>{console.log(msg); return task5()})
        .then(msg =>{console.log(msg); console.log("You have completed all tasks")});