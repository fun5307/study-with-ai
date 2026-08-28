let player; let currentSong; let timer; let selectedMood = "focus";
const $ = (selector) => document.querySelector(selector);
const record = $("#record"), play = $("#play"), progress = $("#progress"), history = $("#history-list");
window.onYouTubeIframeAPIReady = () => { player = new YT.Player("youtube-player", { width:"100%", height:"100%", playerVars:{playsinline:1,rel:0}, events:{onStateChange:onPlayerStateChange} }); };
document.querySelectorAll(".mood").forEach((button) => button.addEventListener("click", () => { selectedMood=button.dataset.mood; document.querySelectorAll(".mood").forEach((item)=>item.classList.toggle("active",item===button)); document.body.dataset.mood=selectedMood; getRecommendation(); }));
$("#recommend").addEventListener("click", getRecommendation);
async function getRecommendation(){ const response=await fetch(`/api/recommendation?mood=${selectedMood}`); const song=await response.json(); if(song.error){ $("#song-title").textContent=song.error; return; } currentSong=song; document.body.style.background=song.color; $("#mood-label").textContent=song.mood; $("#song-title").textContent=song.title; $("#artist").textContent=song.channel; $("#reason").textContent=song.reason; if(player?.cueVideoById) player.cueVideoById(song.videoId); addHistory(song); }
$("#reason-button").addEventListener("click",()=>{const open=$("#reason").hidden;$("#reason").hidden=!open;$("#reason-button").setAttribute("aria-expanded",open);});
play.addEventListener("click",()=>{if(!currentSong)return; player.getPlayerState()===YT.PlayerState.PLAYING?player.pauseVideo():player.playVideo();});
$("#like").addEventListener("click",(event)=>{const liked=event.currentTarget.classList.toggle("liked");event.currentTarget.textContent=liked?"♥ 좋아요":"♡ 좋아요";event.currentTarget.setAttribute("aria-pressed",liked);});
progress.addEventListener("input",()=>{if(player?.getDuration)player.seekTo(player.getDuration()*progress.value/100,true);});
function onPlayerStateChange(event){const playing=event.data===YT.PlayerState.PLAYING;record.classList.toggle("playing",playing);play.textContent=playing?"Ⅱ":"▶";clearInterval(timer);if(playing)timer=setInterval(()=>{const duration=player.getDuration();if(duration)progress.value=player.getCurrentTime()/duration*100;},500);}
function addHistory(song){if(history.firstElementChild?.textContent.includes("아직"))history.innerHTML="";const item=document.createElement("li");item.textContent=`${song.title} — ${song.channel}`;history.prepend(item);while(history.children.length>5)history.lastElementChild.remove();}
