var lys = 0;
onoff();

function bryter() {
if (lys == 0) {
    document.getElementById('mydiv').style.backgroundColor = "yellow";
    lys = 1;
    onoff();
} else {
    document.getElementById('mydiv').style.backgroundColor = "grey";
    lys = 0;
    onoff();
}
}

function onoff() {
    if (lys == 0) {
        document.getElementById('status').innerHTML = "off";
    } else {
        document.getElementById('status').innerHTML = "on";
    }
}