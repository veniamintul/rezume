const item = document.querySelectorAll('.paginator__item');
const ellips = document.querySelectorAll('.paginator__ellips');



ellips.forEach(function(elementone){            
  elementone.addEventListener('click',elementtwo);  
});

function elementtwo(){
  item.classList.toggle("activ");
};

















//ellips.addEventListener('click',elementtwo);


//item.addEventListener('click',function(event){ 
  //item.classList.add('activ');
  //ellips.classList.add('activ'); 
  //paginator__ellips.style.color='red';
//});



//forEach выполняет указанную функцию один раз для каждого елемента NodeList