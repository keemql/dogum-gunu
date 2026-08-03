const giftBox = document.getElementById("giftBox");
const giftScreen = document.getElementById("giftScreen");
const messageScreen = document.getElementById("messageScreen");
const typingText = document.getElementById("typingText");


giftBox.onclick = () => {


    giftBox.style.animation="none";


    setTimeout(()=>{


        giftScreen.style.display="none";
        messageScreen.style.display="flex";


        konfeti();


        yazdir(
        "🎉 İyiki Doğdun Yarenn 🎉\n\nİyiki Varsın ❤️\n\n-Kemal"
        );


    },500);


};



function yazdir(metin){

    let i=0;

    let yazma=setInterval(()=>{


        typingText.innerHTML += metin[i] === "\n" ? "<br>" : metin[i];

        i++;


        if(i>=metin.length){

            clearInterval(yazma);

        }


    },100);

}





function konfeti(){


    for(let i=0;i<150;i++){


        let parca=document.createElement("div");

        parca.className="confetti";


        parca.style.left=Math.random()*100+"vw";

        parca.style.backgroundColor=
        "hsl("+Math.random()*360+",100%,50%)";


        parca.style.animationDuration=
        (Math.random()*2+2)+"s";


        document.body.appendChild(parca);


        setTimeout(()=>{

            parca.remove();

        },4000);


    }

}