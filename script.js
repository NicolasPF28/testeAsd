const numeros = document.querySelectorAll ('[id*=n]');
const body = document.getElementsByTagName ('body');
const container = document.getElementsByClassName ('container');
const mainNumber = document.getElementById ('nMain');
const audio = document.getElementById ('audio');
var floor;
var height = (window.innerHeight) / 3.05;
var width = (window.innerWidth) / 3.10;


console.log (height)

numeros.forEach ((e) => {

    height.toString();
    height.toString();


    e.style.width = width + 'px';
    e.style.fontSize = '180px'
    e.style.height = height + 'px';

});
let cronometroNum = 0;

const cronometro = (e) => {
    if (cronometroNum <= 21.65){
        cronometroNum++;
    } else {
        changeStyle ();
    }
}

var colour = 'red';

const changeStyle = (event) => {
    if (colour == 'red') {
        colour = 'lightgreen';

        numeros.forEach ((e) => {

            e.style.width = '0px';
            e.style.height = '0px';
    
            e.style.fontSize = '0px';
            e.style.backgroundColor = 'lightgreen';
            e.style.border = '0px';
    
        });

        mainNumber.style.width = '280px';
        mainNumber.style.height =  '500px';
        mainNumber.style.fontSize =  '370px';

        document.body.style.backgroundColor = 'lightgreen';


    } else {
        document.body.style.backgroundColor = 'red';

        numeros.forEach ((e) => {
            e.style.backgroundColor = 'red';   
        });

    }
}

const startSound = (e) => {
    setInterval (() => cronometro (1000), 1000);
    floor = e.target.textContent;
    console.log (floor);

    //Defines the style of the elements

    changeStyle (e);

    mainNumber.textContent = e.target.textContent;

    audio.play();

}

numeros.forEach ((e) => {
    e.addEventListener ('click', startSound);
})