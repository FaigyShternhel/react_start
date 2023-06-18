let coins = 0;
window.onload = function () {
    coins = 5;
}


function rollDice() {
    if(coins==0){
        alert(" אין מספיק מטבעות, לך תביא כסף");
        onload();
        }
    coins--;
    let rnd = Math.random() * 6;
    rnd = Math.ceil(rnd);

    document.querySelector("#id_h2").innerHTML = rnd;

    document.querySelector("#id_img").src = `../dice_images/dice_images/dice${rnd}.jpg`;

    if (rnd == 5 || rnd == 6) {
        coins += 2;
        document.querySelector("#id_span").innerHTML = coins;
        document.querySelector("#id_h2a").innerHTML = "win";
        document.querySelector("#id_h2a").style.color = "green";

    }
    else {
        document.querySelector("#id_span").innerHTML = coins;
        document.querySelector("#id_h2a").innerHTML = "full";
        document.querySelector("#id_h2a").style.color = "red";
    }

}