var cardImage=["as.jpg","colorfool.jpg","fool.png","flower5.jpg","yellow.jpg","green.png","as.jpg","colorfool.jpg","fool.png","flower5.jpg","yellow.jpg","green.png" ]


var cardState=["Initial","Initial","Initial","Initial","Initial","Initial","Initial","Initial","Initial","Initial","Initial","Initial"];

var click=0;
var position1=-1,position2=-1;
var counter=2;
function showImage(currentCard,pos){
  click++; 
   if(cardState[pos]=="Found"){
     for(i=1; i<=cardImage.length; i++)
     {
      if(cardState[i]!="Found"){
            document.getElementById("c" + i).style.backgroundImage = "url('download.jpg')";
            cardState[i]="Initial";
            click=0;
            position1=-1;
            position2=-1;
            }  
     }
    
   }
else{cardState[pos]="Show";}
currentCard.style.backgroundImage= "url("+cardImage[pos]+")";
if(click==2&&counter!=cardImage.length)
setTimeout(resetBackImage,800);
else if(counter!=cardImage.length)
resetBackImage();
else
{
  startDestruction();
}


}

function startDestruction()
{
for(i=0;i<cardImage.length;i++)
{
  document.getElementById("c"+i).setAttribute('display:none');
}
alert("you won! Now get lost");


}
function resetBackImage() {

  matched();
//   for (i=1; i<=cardImage.length; i++) {
//     if(click>=2&&cardState[i]=="Show"){
//     document.getElementById("c" + i).style.backgroundImage = "url('download.jpg')";
//     cardState[i]="Initial";
//     click=0;
//     }
// }
}

function matched()
{
  for (i=0; i<cardImage.length; i++) {
    if(cardState[i]=="Show"){
      if(position1==-1)
      {position1=i;break;}
      else if(position1!=i){position2=i;break;}
    }
}

if(position1!=-1&&position2!=-1&&position1!=position2&&cardImage[position1]==cardImage[position2])
{
  cardState[position1]="Found";
  cardState[position2]="Found";
  position1=-1;
  position2=-1;
  click=0;
  counter+=2;
}
else{
  if(click>=2){
  cardState[position1]="Initial";
  cardState[position2]="Initial";
  document.getElementById("c" + position1).style.backgroundImage = "url('download.jpg')";
  document.getElementById("c" + position2).style.backgroundImage = "url('download.jpg')";
  position1=-1;
  position2=-1;
  click=0;
  }
  
}
}

// function cardOpen() {
//   openedCards.push(this);

//     var len = openedCards.length;

//     if(len === 2){

//         moveCounter();

//         if(openedCards[0].type === openedCards[1].type){

//             matched();

//         } else {

//             unmatched();

//         }

//     }

// };

