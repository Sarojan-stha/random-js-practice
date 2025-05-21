/*  this is a module , a module refers to a way of sharing code between two files
    an external file that contains reusable code that can be imported into another file
    */

const Pi = 3.147;

function circumference(radius){
    return 2*Pi*radius;
}

function area(radius){
    return Pi*radius**2;
}

function volume(){
    return 4/3 * Pi *radius**3;
}
