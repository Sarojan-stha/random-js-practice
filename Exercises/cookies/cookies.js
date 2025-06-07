function setCookie(key, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`;
}

function delCookie(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

function selectCookie(key){
    const cookies = document.cookie.split("; ");
    for(let element of cookies){
        const [k,v] = element.split("=");
        if(k === key)
            return v;
    }
}

setCookie("fname", "sarojan", 7);
setCookie("lname", "shrestha", 8);
setCookie("oops", "wrong", 5);

console.log(selectCookie("fname"));