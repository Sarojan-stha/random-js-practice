// DOM             :Document object model   
//                  objects that represent the page you see in the web browwser and provides you 
//                  with an api to ineract with it.Web bowser constructs an dom when it loads and
//                  html document,and structres all the elements in tree like represenatation,
//                  js can access the dom dynamically to change content ,structure and style of a web page

// ELement selector        :methods to target and manipulate html elements,allows you to
//                          select one or multiple elements from the dom


//document.getElementById()         :HTML ELEMENT AND NULL
//documnet.getElementsByClassName() :HTML COLLECTION
//document.getElementByTagName()    :HTML COLLECTION
//document.querySelector()          :FIRST ELEMENT AND NULL
//document.querySelectorAll()       :NODE LISTS

//DOM navigation              :navigating through the structures in html document using javascript
// .firstElementChild 
// .lastElementChild 
// .nextElementSibling 
// .previousElementSibling 
// .parentElement 
// .children

/* 
const element = document.querySelectorAll("ul");

element.forEach( element =>{
    const firstChild = element.firstElementChild;
    firstChild.style.backgroundColor = "red";


}  ) */

const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement =>{
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "red";

})
