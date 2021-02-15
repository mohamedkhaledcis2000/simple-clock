function setDate(){
const secondHand = document.querySelector('.second-hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360+90);
    console.log(secondsDegree);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;


    const minsHand = document.querySelector('.minutes-hand');
    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360+90);
    console.log(minsDegrees);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;



    const hourHand = document.querySelector('.hours-hand');
    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360+90);
    console.log(hoursDegrees);
    minsHand.style.transform = `rotate(${hoursDegrees}deg)`;

}
setInterval(setDate,1000);


