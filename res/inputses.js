"use strict";

var elTime = document.getElementById("time");
var elDist = document.getElementById("dist");
var elSpeed = document.getElementById("speed");
var timeFix = document.getElementById("fixed");

elTime.addEventListener("input", onChangedTime);
elDist.addEventListener("input", onChangedDist);
elSpeed.addEventListener("input", onChangedSpeed);

elDist.addEventListener("wheel", onScrollDist);
elSpeed.addEventListener("wheel", onScrollSpeed);

function parseTime(time){
    let splits = time.split(":");
    time = (splits[0]*hour) + (splits[1]*min);
    if (splits[2]) time +=  splits[2]*sec;
    return parseInt(time, 10);
}

/* ============================== */

function onChangedTime(e){
    let speed = calcSpeed(parseTime(elTime.value), elDist.value);
    setSpeed(speed, false);
}

function onChangedDist(e){
    setDist(e.target.value, true);
}

function onChangedSpeed(e){
    setSpeed(e.target.value, true);
}

function onScrollDist(e){
    let scroll = parseInt(e.target.step, 10) * -Math.sign(e.deltaY);
    e.target.value = parseInt(e.target.value, 10) + scroll;
    setDist(e.target.value, true);
}

function onScrollSpeed(e){
    let scroll = parseInt(e.target.step, 10) * -Math.sign(e.deltaY);
    e.target.value = parseInt(e.target.value, 10) + scroll;
    setSpeed(e.target.value, true);
}