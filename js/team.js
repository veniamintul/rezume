
alert("js подключен");

function accordionTeam(){     //задаем область действия функции
    const workers=document.querySelector(".team__item");
    const teamAccord=document.querySelector(".team__list");

    const teamAccord=document.querySelector(".team__box__one");
    const triangle=document.querySelector(".team__triangle");

    ///нужно ли здесь кнопку искать?????

    teamAccord.addEventListener("click",function(event){
        event.preventDefault();
        const target=event.target;  //то на что мы кликнули


          if(target.classList.contains("team__vipad")){
              const worker =target.parentNode;  //родитель нашей кнопки
              const content =target.nextElementSibling; //элемент который находится следом кнопки (это наш контентный блок)
              const contebtHeight =content.firstElementChild.clientHeight;  //содержание контентного блока


                  for(const iterator of workers) {
                      if (iterator!==worker){
                        //iterator.classList.remove("team__item--activ");
                        iterator.classList.remove("team__box__one--activ");
                        iterator.lastElementChild.style.height=0; 
                      }
                  }

                  //if(worker.classlist.contains("team__item--activ")){
                    if(worker.classlist.contains("team__box__one--activ")){
                    //worker.classList.remove("team__item--activ");
                    worker.classList.remove("team__box__one--activ");
                    content.style.height=0;

                    //triangle.classList.toggle("activ");

                   }
                    else{
                        //worker.classList.add("team__item--activ");
                        worker.classList.add("team__box__one--activ");
                        content.style.height= contentHeight +"px";
                        triangle.classList.toggle("activ");
                        
                    }

        }

    });

}

accordionTeam();