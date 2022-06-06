
const setcardstomain= function(cards){
    let row;
    row= cards.foreach(function(card){
                     `<div class="col-lg-4 col-sm-12 p-4">
                      <div class="scale-card">
                        <div class="scale-card card rounded-6 shadow-lg">
                          <div class="card-header p-3">
                            <i class="fa-solid fa-calendar-plus ms-2"></i>
                            <h5 class="d-inline">${card.cardTitle}</h5>
                          </div>
                          <img src="${card.cardImage}" alt="" class="mb-1" />
                          <div class="card-body">
                            <p class="card-text">
                              <i class="fa-solid fa-hotel ms-2"></i>
                              ${card.cardP1}
                            </p>
                            <p class="card-text">
                              <i class="fa-regular fa-calendar-check ms-2"></i>
                              ${card.cardP2}
                            </p>
                            <p class="card-text">
                              <i class="fa-solid fa-user-group ms-2"></i>
                              ${card.cardP3}
                            </p>
                            <p class="card-text">
                              <i class="fa-solid fa-user ms-2"></i>
                              ${card.cardP4}
                            </p>
                          </div>
                          <div class="card-footer text-center bg-success">
                            <p class="card-text p-2 text-white">${card.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>`
                  });
                  
                  document.getElementById('cards-main').innerHTML= row; 
                }
  




                
  const setActiveButton= function(targetbutton){
    const pagebuttons= document.querySelectorAll('.button-me');
    console.log(pagebuttons);
        for (let pagebutton of pagebuttons){
            pagebutton.classList.remove('.active-button-me');
        }
        targetbutton.classList.add('.active-button-me');
    }
    




    

document.getElementById('page-1').onclick= function(){
    document.getElementById('cards-main').innerHTML= '';
    setActiveButton(this);
      
    const xhttp= new XMLHttpRequest();
    xhttp.open('GET', '/data/cards.info.json' , true);
    xhttp.send();
    xhttp.onload= function(){
      if (this.status === 200){
        let allcards= JSON.parse(this.responseText);
        let page1cards= allcards.splice(3,6);
        setcardstomain(page1cards);
      }
    }
  }
  
  
  