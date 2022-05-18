console.log("welcome to music player");

let audioElement = new Audio('song/1.mp3');
let songIndex=0;
let playBtn=document.getElementById('playBtn');
let progressBar = document.getElementById('progressBar');
let gif=document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('song'));

let songs = [
    {songName: "Bijlee-Bijlee", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Dream", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Pakistan", filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Judge", filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Mara Yaar", filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Shartan", filePath:"song/6.mp3", coverPath:"covers/6.jpg"}
]

songItems.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

playBtn.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add("fa-play");
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value= progress;

})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

const makeAllplays=()=>{ 
        Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        })
    }
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src =`song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play()
        gif.style.opacity=1;
        songPlay.classList.remove('fa-play');
        songPLay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>=5){
    songIndex +=0;}
    else{
        songIndex +=1;
    }
    audioElement.src =`song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        songPlay.classList.remove('fa-play');
        songPLay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
     songIndex =0;}
     else{
         songIndex -=1;
     }
     audioElement.src =`song/${songIndex+1}.mp3`;
         audioElement.currentTime=0;
         audioElement.play();
         songPlay.classList.remove('fa-play');
         songPLay.classList.add('fa-pause');
 })