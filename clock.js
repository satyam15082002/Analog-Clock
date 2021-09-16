function setRotation(Node,value){
    Node.style.setProperty("--rotation",`${value}`);

    }
    const SetClock= ()=>
    {
        const hourHand=document.querySelector(".hour");
        const minuteHand=document.querySelector(".minute");
        const secondHand=document.querySelector(".second");
        const date=new Date();
        const secondRatio=date.getSeconds()/60;
        const minuteRatio=(secondRatio+date.getMinutes())/60;
        const hourRatio=( minuteRatio+date.getHours())/12;
        setRotation(hourHand,hourRatio*360);
        setRotation(minuteHand,minuteRatio*360);
        setRotation(secondHand,secondRatio*360);
    }

setInterval(SetClock,1);    

