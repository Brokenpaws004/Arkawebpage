function faf(pos){
    pos.style.top = randval(0, (window, innerHeight - pos.offsetHeight)) + 'px';
    pos.style.left = randval(0, (window, innerHeight - pos.offsetWidth)) + 'px';
}

function randval(min,max) {
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()* (max-min))+min;
}