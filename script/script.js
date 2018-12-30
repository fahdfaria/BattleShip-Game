window.onload = () => {

  console.log("linked");

function randomizer(arr, count) {

  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;

    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
  return shuffled.slice(min);
}


var cells = [
  "0A","1A","2A","3A","4A","5A","6A",
  "0B","1B","2B","3B","4B","5B","6B",
  "0C","1C","2C","3C","4C","5C","6C",
  "0D","1D","2D","3D","4D","5D","6D",
  "0E","1E","2E","3E","4E","5E","6E",
  "0F","1F","2F","3F","4F","5F","6F",
  "0G","1G","2G","3G","4G","5G","6G"
  ];

var locations = randomizer(cells, 10)

  console.log(locations);


var td = document.getElementsByTagName("td");

var guesses = [];

var messageArea = document.getElementById("guessesArea");

var hitsArea = document.getElementById("hitsArea");

var statscontainer = document.getElementById("statscontainer");

var stats = document.getElementById("stats");

var hits = 0;


$(td).on("click",  function(count) {


  var clickedTd = new Object;

  if (this.id.length > 0){

    clickedTd = this.id;

    if(clickedTd == locations[0] || clickedTd == locations[1] || clickedTd == locations[2] || clickedTd == locations[3] || clickedTd == locations[4] || clickedTd == locations[5] || clickedTd == locations[6] || clickedTd == locations[7] || clickedTd == locations[8] || clickedTd == locations[9]){


    count.target.style.background = "url('./images/blow-up.gif') no-repeat center";

    count.target.style.border = "6px solid rgb(170, 249,117)";

    count.target.id = "";

    var shipdown;

      shipdown = setTimeout(shipDown, 1500);

      function shipDown() {
      count.target.style.background = "url('./images/battleship-down.gif') no-repeat center";
    }

      hits = hits + 1;

    }else{

      count.target.style.background = "url('./images/explosion.gif') no-repeat center";

      var miss;

      miss = setTimeout(miSS, 1300);

      function miSS(){

            count.target.style.background = "url('./images/miss.png') no-repeat center"

      }

      count.target.id = "";
    }


    guesses.push(clickedTd);

    console.log(guesses.length);

    stats.innerHTML = `You took ${guesses.length} guesses, you hit ${hits} ships, your stats are ${Math.round(((hits - guesses.length)/18 + 1) * 100)}% <br> <button onclick="location.reload()">Restart Game</button>`

    if(guesses.length >= 20){

    console.log(stats);

      $(stats).fadeIn( "slow", function() {

        stats.style.display = "block";

        for (let i in td) {

      if(td[i].id == locations[0] || td[i].id == locations[1] || td[i].id == locations[2] || td[i].id == locations[3] || td[i].id == locations[4] || td[i].id == locations[5] || td[i].id == locations[6] || td[i].id == locations[7] || td[i].id == locations[8] || td[i].id == locations[9]){

        td[i].style.background = "url('./images/battleship.gif') no-repeat center";
        td[i].style.border = "6px solid red";
      }

    td[i].id = "";

    }

      guesses = ["None"];
      hits = 0;

      });

  }

    if(hits === 10 && guesses.length <=20){

      stats.innerHTML = `You took ${guesses.length} guesses, you hit All ${hits} ships, your stats are ${Math.round(((hits - guesses.length)/18 + 1) * 100)}% <br> <button onclick="location.reload()">Restart Game</button>`

      $(stats).fadeIn( "slow", function() {

        stats.style.display = "block";

        for (let i in td) {
        td[i].id = ""
        }

        guesses = [];
        hits = 0;
      });
    }

  }

  var guessString = `<p class="guesses"> Your guesses : ${guesses}</p>`
  messageArea.innerHTML = guessString

  var hitsString = `<p class="hits"> Your hits : ${hits}</p>`
  hitsArea.innerHTML = hitsString

})//end of click function



}//end of window on load function
