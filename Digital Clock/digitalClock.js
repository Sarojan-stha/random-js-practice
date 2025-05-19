function updateTime(){
    const now = new Date();
    let hour = now.getHours();
    const meridiam = hour>=12? "PM" : "AM";
    hour = hour%12 || 12;
    hour = hour.toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");;
    const seconds = now.getSeconds().toString().padStart(2,"0");;
    const timeString = `${hour}:${minutes}:${seconds}.${meridiam}`;
    document.getElementById("clock").textContent = timeString;
}
updateTime();
setInterval(updateTime,1000);

//padStart() a string method in js which pads the string until a it reaches specified  length
//OR operator || : it returns the truthy value
//                 a||b if a is truthy retunrs a,if b is truthy returns b ,if none of them truthy also returns b