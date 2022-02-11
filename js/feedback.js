alert("js подключен");


const reviewsBar = document.querySelector('.feedback__list'); //список переключалок
const reviewsItems = document.querySelector('.feedback__item'); //одна из переключалок
const reviewWrapp = document.querySelector('.feedback__item__one');//одна из плашек больших
const link = document.querySelector('.feedback__link ');   //ссылка внутри переключалки
const one = document.querySelector('.feedback__spisok__one');  //список плашек больших




reviewsBar.addEventListener("click",function(event){
   //if(event.target.classList.contains('feedback__item'))
   if(event.target.classList.contains('feedback__link')){
        event.preventDefault();
        const worker =target.parentNode;  //родитель нашей кнопки
        const currentPeople=event.target;
        const currentPeopleId=currentPeople.id;

    for(const iterator of reviewsItems){
      if (iterator !==currentPeople){
          iterator.classlist.remove("feedback__item--activ");
      }  
    }

    if(!currentPeople.classList.contains("feedback__item--activ")){
        currentPeople.classList.add("feedback__item--activ");
    }


    reviewWrapp.forEach(function(wrapp){
        if(currentPeopleId===wrapp.id){
            wrapp.classList.add("feedback__item__one--activ");  
        }else{
            wrapp.classList.remove("feedback__item__one--activ"); 
        }
    });


   }


});

