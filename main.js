// let previous = document.querySelector('#previous');

//Declaration of variable to make app
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recentVolume = document.querySelector('#volume');
let slider = document.querySelector('#durationSlider');
let show_duration = document.querySelector('#show_duration');
let trackImage = document.querySelector('#trackImage');


let now_playing = document.querySelector(".now-playing");
let artist = document.querySelector('#artist');


let updateTimer;

let indexNo = 0;
let playingSong = false;

let track = document.createElement('audio');


let sliderPosition;

//Declaring tracks

let allSong = [
    {
        name: "Ukulele",
        path: "music/Ukulele.mp3",
        singer: "Benjamin Tissot",
        img: "images/Ukulele.jpg",

    },
    {
        name: "Better Days",
        path: "music/Better Days.mp3",
        singer: "Benjamin Tissot",
        img: "images/Better Days.jpg",

    },
    {
        name: "Sunny",
        path: "music/Sunny.mp3",
        singer: "Benjamin Tissot",
        img: "images/Sunny.jpg",

    },
];

//loading tracks in DOM

function loadTrack(indexNo){

    //current.innerHTML = indexNo + 1;
    //total.innerHTML = allSong.length;
    trackImage.src = allSong[indexNo].img;
    track.src = allSong[indexNo].path;
    title.innerHTML = allSong[indexNo].name;
    artist.innerHTML = allSong[indexNo].singer;
    now_playing.textContent = "PLAYING " + (indexNo + 1) + " OF " + allSong.length;    
    track.load();
    updateTimer = setInterval(rangeSlider, 1000);
    bgColor();
}

loadTrack(indexNo);

//To check whether or not song is playing
function checkSong(){
    if (playingSong === false){
        playSong();
    }else{
        pauseSong();
    }
}

function playSong(){
    track.play();
    playingSong = true;
    play.innerHTML = "<i class='fa fa-pause-circle fa-4x'></i>";
    
}

function pauseSong(){
    track.pause();
    playingSong = false;
    play.innerHTML = "<i class='fa fa-play-circle fa-4x'></i>";
}

//To play next song.
function nextSong(){
    if(indexNo < allSong.length - 1) {
        // slider.value = 0;
        indexNo++;
        loadTrack(indexNo);
        playSong();
    }else{
        indexNo = 0;
        loadTrack(indexNo);
        playSong();
    }
}

//To play previous song.
function previousSong(){
    // slider.value = 0;
    if(indexNo > 0){        
        indexNo -= 1;
        loadTrack(indexNo);
        playSong();
    }else{
        indexNo = allSong.length - 1;
        loadTrack(indexNo);
        playSong();
    }
}

//Updating volume 
function volumeChange(){
    track.volume = recentVolume.value / 100;
}

function changeDuration(){
    sliderPosition = track.duration * (slider.value / 100);
    track.currentTime = sliderPosition;
}

//update slider position
function rangeSlider(){
    let position = 0;
    if(!isNaN(track.duration)){
        position = track.currentTime * (100/track.duration);
        slider.value = position;
    }
}

// updating background while changing track
function bgColor() {
    let bgColor;
    if(indexNo === 0) {
      bgColor = "rgb(255,182,193)";
    }else if(indexNo === 1) {
      bgColor = "rgb(255,105,180)";
    }else if(indexNo === 2 ){
      bgColor = "rgb(255,255,167)"
    }
    document.body.style.background = bgColor;
  }
