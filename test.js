const buttons = document.querySelectorAll("button")
var scoreRobot = 0;
var scorePlayer = 0;
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        document.getElementById("Player").style.display = "none";
        document.getElementById("Robot").style.display = "none";
        document.getElementById("Score").style.display = "none";
        document.getElementById("loader").style.display = "block";// le loader aparait apres affaichage du resulat;

        setTimeout(function () {
            const player = buttons[i].id;
            const robot = buttons[Math.floor(Math.random() * buttons.length)].id;
            let final = "";

            if (player === robot) {
                final = "It's a draw";
            }

            else if ((player === "Rock" && robot === "Scissors") || (player === "Paper" && robot === "Paper") || (player === "Scissors" && robot === "Paper")) {
                final = "You win";
                scorePlayer++;
                // ajoute 1 pour le gagant sur chaque tour jouer;
            }

            else {
                final = "Game over";
                scoreRobot++;
                // ajoute 1 pour le gagant sur chaque tour jouer;
            }

            document.querySelector("#Player").innerHTML = `Player : ${player}`;

            document.querySelector("#Robot").innerHTML = `Robot : ${robot}`;

            document.querySelector("#Score").innerHTML = `${final} !`;

            document.getElementById("loader").style.display = "none"; // le loader disparait apres affaichage du resulat;
            document.getElementById("Player").style.display = "block";
            document.getElementById("Robot").style.display = "block";
            document.getElementById("Score").style.display = "block";
            //console.log(`Joueur : ${joueur} VS Robot : ${robot}`);

            document.querySelector("#totalScoreRobot").innerHTML = "&nbsp;"+scoreRobot;
            document.querySelector("#totalScorePlayer").innerHTML = "&nbsp;"+scorePlayer;
            //chaque tour le gagant gagne un point;
        }, Math.floor(Math.random() * 1000) + 500 );
        // le  loading spinner tourne entre 1s et 0,5s avant de donner le resultat;
    });
}
