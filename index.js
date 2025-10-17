
const data = {

  numCoin: 100,

  numLike: 0,

  numCopy: 0,

  callHistory: [],
}

//**** */ Elements

const likeDisplay = document.getElementById("likeDisplay");
const coinDisplay = document.getElementById("coinDisplay");
const copyDisplay = document.getElementById("copyDisplay");

const callHistoryContainer = document.getElementById("callHistoryContainer");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

const callBtns = document.querySelectorAll(".callBtn");
const copyBtns = document.querySelectorAll(".copyBtn");
const likeBtn = document.getElementById("likeBtn");

// ******-heart-icons-like-counter
const heartIcons = document.querySelectorAll(".fa-heart");

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    data.numLike++;
    likeDisplay.innerText = data.numLike;

    
  });
});

// Copy Button
// forEach

for (const btn of copyBtns) {

  btn.addEventListener('click', (e) => {

    const parent = e.target.closest(".service");
    const numberEl = parent.querySelector(".service-number");
    const number = numberEl.innerText;

    navigator.clipboard.writeText(number);
    alert(`©️ নম্বর কপি হয়েছে :- ${number} 👌` );

    data.numCopy++;

    copyDisplay.innerText = data.numCopy;

  });
}

// call btn
// 

for(const btn of callBtns) {

  btn.addEventListener('click', (e) => {

    const parent = e.target.closest(".service");
    const name = parent.querySelector(".service-name").innerText;
    const number = parent.querySelector(".service-number").innerText;

    if (data.numCoin < 20) {

      alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে। ‼️❕✖️");

      return;



    }

    data.numCoin -= 20;
    coinDisplay.innerText = data.numCoin;

    const currentTime = new Date().toLocaleTimeString();
    data.callHistory.push({name, number, time: currentTime});

    renderCallHistory();
    alert(`📞.. Calling ${name} ${number}...`);
  });


}

//* Render-call-history

function renderCallHistory() {

  if (data.callHistory.length === 0) {

    callHistoryContainer.innerHTML = "<p class='text-gray-400'> No calls </p>";
    return;


// 
  }

  let html = '';
  data.callHistory.forEach(entry => {

    html += `
      <div class="flex justify-between p-2 border-b">
        <div>
          <h4 class="font-semibold">${entry.name}</h4>
          <p>${entry.number}</p>
        </div>
        <div>${entry.time}</div>
      </div>
    `;


    // 
  });

  callHistoryContainer.innerHTML = html;
}

// **Clear History

clearHistoryBtn.addEventListener('click', () => {


  data.callHistory = [];
  renderCallHistory();



});





