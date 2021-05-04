'use strict';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive}
}

getRandomInt();

Donation.arrayAll=[];
function Donation (donorName,donorAge,amount) {
  this.donorName=donorName;
  this.donorAge= donorAge;
  this.amount= amount;
  this.newArray=[donorName,donorAge,amount];
  this.getRandomInt=getRandomInt;
  Donation.arrayAll.push(this);
}

console.log(getRandomInt(18,30));


let sarah= new Donation('sarah',getRandomInt(18,30),100);
let mariam= new Donation ('mariam',getRandomInt(18,30),500);
let reem= new Donation ('reem',getRandomInt(18,30),1000);

// console.log(this.Donation);
let container = document.getElementById('newTable');
let table = document.createElement('table');
container.appendChild(table);

let head = ['Donor Name', 'Donor Age', 'Amount'];

function header (){
  let tr1=document.createElement('tr');
  table.appendChild(tr1);
  for ( let i=0; i<head.length;i++){
    let th1 =document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent=head[i];
  }
}

header();

Donation.prototype.render = function(){
  let tr2=document.createElement('tr');
  table.appendChild(tr2);
  tr2.textContent=this.donorName;
  for (let i=0;i<3;i++){
    let th2=document.createElement('th');
    tr2.appendChild(th2);
    th2.textContent=this.newArray[i];
  }
};



sarah.render();
mariam.render();
reem.render();

let click=document.getElementById('newForm');
click.addEventListener('Submit',submissoin);

function submissoin (event){
  event.preventDefault();
  let donorsName=event.target.nameing.value;
  let amounts=event.target.amounts.value;

  let donor = new Donation (donorsName,amounts);
  donor.render();

}



