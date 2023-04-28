const date = new Date();

const renderCalendar=()=>{

const months=[
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
//avem nevoie de array ul cu luni pentru a le accesa conform indexului redat de  months[date.getMonth()



document.querySelector('.date h1').innerHTML=months[date.getMonth()]+' '+date.getFullYear();
//am selectat ce parte din html va fi schimbata cu months[date.getMonth()]+' '+date.getFullYear()


//avem nevoie ca fiecare luna sa afiseze numarul de zile corespunzator+zilele din luna precednta pana luni+zilele din luna urmatoare pana duminica 

const monthDays= document.querySelector(".days") //am selectat zilele  din html

const lastDay= new Date(date.getFullYear(),date.getMonth()+1,0).getDate();//asta reda numarul de zile din luna curenta

const lastMonthWeekDayIndex= new Date(date.getFullYear(),date.getMonth(),0).getDay();//asta reda numarul ultimei zile a saptamanii din luna precedenta
const prevLastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate()//arata ultima zi din luna precedenta

const nextMonthDaysLeft=7-new Date(date.getFullYear(),date.getMonth()+1,0).getDay();//7-numarul ultimei zile a saptamanii din luna precedenta=numarul de zile ramase din urmatoarea luna

let days=''

for(let i=lastMonthWeekDayIndex;i>0;i--){
  days+=`<div class='prev-date'>${prevLastDay-i+1}</div>`
}

for(let i=1;i<=lastDay;i++){
  if(i===new Date().getDate() && date.getMonth()===new Date().getMonth()
  &&date.getFullYear()===new Date().getFullYear()){
    days+= `<div class='today'>${i}</div>`;
  }else{
    days+= `<div>${i}</div>`;
  }
}//bulina pentru ziua actuala

for(let i=1;i<=nextMonthDaysLeft;i++){
  days +=`<div class='next-date'>${i}</div>`
  monthDays.innerHTML=days;
}


}
//butoane de schimbat luna

document.querySelector('.prev').addEventListener('click',()=>{

  date.setMonth(date.getMonth()-1)
  renderCalendar()
})


document.querySelector('.next').addEventListener('click',()=>{

  date.setMonth(date.getMonth()+1)
  renderCalendar()
})
renderCalendar()

