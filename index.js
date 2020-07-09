var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimg1="dice"+randomNumber1+".png";
var randomimagesource1="images/"+randomdiceimg1;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1);


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomdiceimg2="dice"+randomNumber2+".png";
var randomimagesource2="images/"+randomdiceimg2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);



if(randomNumber1>randomNumber2)
{
  document.querySelector(".win").innerHTML="Player1 Won!";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector(".win").innerHTML="Player2 Won!"
}
else
{
  document.querySelector(".win").innerHTML="Its Draw!"
}
