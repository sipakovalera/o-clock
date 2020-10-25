// DOM Elements
const time = document.getElementById('time'),
date = document.getElementById('date'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//Options

const showAmPm = true;



//Show time
function showTime(){

//  let today = new Date(2020, 05, 05, 12, 33,30),- for own Time    
    let today = new Date(),
    year = today.getFullYear();
    month = today.getMonth();
    day = today.getDate();
    week = today.getDay();
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

//Set AM or PM

const amPm = hour >= 12 ? ' PM' : ' AM';

//12Hour Format

hour = hour % 12 || 12;

//Output time
date.innerHTML = `${dayOfWeek(week)}<span>, </span>${(day)}<span> </span>${monthOfYear(month)}<span>, </span>${year}<span> year</span>`;
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showAmPm ? amPm : ''}`;

setTimeout(showTime, 1000);
}

//Add Zeros

function addZero(n){

    return (parseInt(n,10) < 10 ? '0' : '') + n;
}


//Day of the week

function dayOfWeek(w){
if(w === 0){
    return 'Sunday';
} else if(w == 1){
    return 'Monday';
}else if(w == 2){
    return 'Tuesday';
} else if(w == 3){
    return 'Wednesday'
} else if(w == 4){
    return 'Thursday'
} else if(w == 5){
    return 'Friday'
} else {return 'Saturday'};

};


//Month of the year
function monthOfYear(m){
if(m === 0){
    return 'January'
} else if(m === 1){
    return 'February'
} else if(m === 2){
    return 'March'
} else if(m === 3){
    return 'April'
} else if( m === 4){
    return 'May'
} else if(m === 5){
    return 'June'
} else if(m === 6){
    return 'July'
} else if(m === 7){
    return 'August'
} else if(m === 8){
    return 'September'
} else if(m === 9){
    return 'October'
} else if(m === 10){
    return 'November'
} else { return 'December'};

};

//Set Background and greeting
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    if(hour < 12){
        //Morning
        document.body.style.backgroundImage = "url('./img/morning1.jpg')";
        greeting.textContent = 'Good Morning,';
        document.body.style.color = '#120D03';

    } else if (hour < 18){
        // Aftermonn
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon,';
        document.body.style.color = '#273339';

    } else {
        // Evening

        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.textContent = 'Good Evening,';
        document.body.style.color = 'white';

    }

}

//Get Name

function getName(){
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else{
        name.textContent = localStorage.getItem('name');
    }
}


//Set Name

function setName(event){
 if(event.type === 'keypress'){
     // Make sure enter is pressed
     if(event.which == 13 || event.keyCode == 13){
        localStorage.setItem('name', event.target.innerText);
        name.blur();
    } 

}else{
    localStorage.setItem('name', event.target.innerText);
}
}

//Set Focus
function setFocus(event){
    if(event.type === 'keypress'){
        // Make sure enter is pressed
        if(event.which == 13 || event.keyCode == 13){
           localStorage.setItem('focus', event.target.innerText);
           focus.blur();
       } 
   
   }else{
       localStorage.setItem('focus', event.target.innerText);
   }
   }

//Change Focus 

function getFocus(){
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else{
        focus.textContent = localStorage.getItem('focus');
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//Run

showTime();
setBgGreet();
getName();
getFocus();