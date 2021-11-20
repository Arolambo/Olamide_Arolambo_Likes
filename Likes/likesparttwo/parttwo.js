
var countone = 9;
var countoneElement = document.querySelector("#countone");

console.log(countoneElement);


function likeone() {
    countone++;
    countoneElement.innerText = countone + " Like(s)";
    console.log(countone);
}

var counttwo = 12;
var counttwoElement = document.querySelector("#counttwo");

console.log(counttwoElement);


function liketwo() {
    counttwo++;
    counttwoElement.innerText = counttwo + " Like(s)";
    console.log(counttwo);
}

var countthree = 9;
var countthreeElement = document.querySelector("#countthree");

console.log(countthreeElement);


function likethree() {
    countthree++;
    countthreeElement.innerText = countthree + " Like(s)";
    console.log(countthree);
}