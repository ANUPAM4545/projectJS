
let num = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let attemptData = document.getElementById("Attempt");
let userinp = document.getElementById("Inp");
let subBtn = document.getElementById("submit");
let ResBtn = document.getElementById("RestBtn");
let message = document.getElementById("msg");

function check() {
    let usernum = parseInt(userinp.value);
    if (num == usernum) {
        message.innerHTML = "Congratulations, you have guessed the number!";
        message.style.color = "green"; // 
        ResBtn.style.display = "block";
    } else if (num < usernum) {
        message.innerHTML = "Too High! TRY AGAIN";
        message.style.color = "red";
    } else {
        message.innerHTML = "Too Low! TRY AGAIN";
        message.style.color = "blue";
    }
    attempt++;
    attemptData.innerHTML = attempt;
    setTimeout(() => {
        userinp.value = 0;
        message.innerHTML = "";
    }, 700);
}

function restart() {
    num = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt; 
    userinp.value = ''; 
    message.innerHTML = ''; 
    ResBtn.style.display = "none"; 
}

subBtn.addEventListener("click", check);
ResBtn.addEventListener("click", restart);
function startFireworks() {
    const end = Date.now() + 5 * 1000;

    (function frame() {
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }

      fireworks();
    })();
  }

      