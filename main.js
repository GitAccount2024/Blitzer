function main(){
    var inputMaxSpeed = document.getElementById("maxSpeed");
    var inputSpeed = document.getElementById("speed");
    var inputDir = document.getElementById("dir");

    var maxSpeed = parseInt(inputMaxSpeed.value);
    var speed = parseInt(inputSpeed.value);
    var isFacing = inputDir.checked;
 
    var maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10);
    console.log(maxSpeedWithOffset);

    if(speed > maxSpeedWithOffset && isFacing == true){
        alert("Du wurdest geblitzt");
    }
}