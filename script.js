
///////////////1

const string='привет как дЕла';
const vowels=['а', 'у',' о',' ы', 'и', 'э', 'я',' ю', 'ё','е']
const getVowels= function(anystring)
{
  let extractedVowels='';
for (let i=0; i<anystring.length;i++){
 const currentLetter =anystring[i].toLowerCase();

if(vowels.includes(currentLetter)){
  extractedVowels+=currentLetter
}
}

return extractedVowels;
}
console.log(getVowels(string))



///////////2
const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];


    getWorthyWorkers=function(workersArr){

      const worthWorkers = [];


      workersArr.forEach(currentWorker => {
        
       if(currentWorker.salary>1000)
       {
        worthWorkers.push(currentWorker.name);
       }



      });
      return  worthWorkers;

    //  for( let i=0; i<workersArr.length;i++)
    //  {
    //    const currentWorker=workersArr[i];
     //   if( currentWorker.salary>1000 ){
     //       worthWorkers.push(currentWorker.name);
     //     }
        
     // }


     // return  worthWorkers;
      

    }
    console.log(getWorthyWorkers(workers))

    ///////////3
    const path = "script/index.html"


     const isHtml = function (path){
     const requiredExt='.html';
     const pathExt=path.slice(-5);

     if(pathExt==requiredExt){
       return true
     }
     else{
       return false
     }

     }
    console.log(isHtml (path))

    /////////////4
    const mixedArray = [3,13,74,14,66,15,22,4];
    const isEven =function(num){
       return num%2==0;
    }

    const filterArray=function(arrayToFilter,filterFn){
      const filteredArray=[];
       arrayToFilter.forEach(num =>{
       if(filterFn(num)){
        filteredArray.push(num);
       }
       }    )
       return filteredArray;

    }
console.log(filterArray(mixedArray, isEven));


////////////////////////
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

const computedStyles=getComputedStyle(items);



rightBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight=parseInt(computedStyles.right)
 
  
if(currentRight<500){

 // currentRight+=100;
  
items.style.right=`${currentRight+100}px`;
}  
});

leftBtn.addEventListener("click", function(e) {
  e.preventDefault();
  
  let currentRight=parseInt(computedStyles.right)
 
  
if(currentRight>0){
 
 // currentRight+=100;
  
items.style.right=`${currentRight-100}px`;

}
});

/////////////////////////
const openButton = document.querySelector("#openOverlay");
const wrap=document.querySelector(".wrapper");

openButton.addEventListener ('click' , function(e) {

  const overlayElement=document.createElement("div");
  overlayElement.classList.add('overlay');

  overlayElement.addEventListener('click', function(e){

    if(e.target==overlayElement){
closeElement.click();
    }
  })

  const containerElement=document.createElement('div');
  containerElement.classList.add('modal-container');
  

  const contentElement=document.createElement('div');
  contentElement.classList.add('content');

  contentElement.innerHTML='Привет';

  const closeElement=document.createElement('a');
  closeElement.classList.add('close');

  closeElement.textContent='x';
  closeElement.href='#';
 
closeElement.addEventListener('click' ,function(e){
e.preventDefault();
wrap.removeChild(overlayElement);

}
)
  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);
  wrap.appendChild(overlayElement);

}
 )

////////////////////////////

const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

quantitySelector.addEventListener('change' , function(e){
  const quantity=e.target.value;

  let markup="";

  for (let i=0;i<quantity;i++ ){
const block=document.createElement("div")
block.className="item1";
block.innerText=i+1;

markup+=block.outerHTML;

  }

blocksContainer.innerHTML=markup;
}
)
const colorTheBlock=function(block,color) {
  block.style.backgroundColor=color;
}

let changed=false;



colorSelector.addEventListener('change' ,function(e) {

  const color=e.target.value
  const items=blocksContainer.querySelectorAll('.item1');

  changed=!changed;

  for (let i=0; i<items.length; i++){
const currentBlock=items[i];
const blockNumber=i+1;


if(changed){
if(blockNumber%2!==0){
  
colorTheBlock(currentBlock,color);
}
else{
  colorTheBlock(currentBlock,'#fff');
}

}
else{
  if(blockNumber%2==0){
  
    colorTheBlock(currentBlock,color);
    }
    else{
      colorTheBlock(currentBlock,'#fff');
    }
    
}



}
}
)