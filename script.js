let odstavec = document.getElementById("odstavec")
let button = document.getElementById("button")
let score = 0;

let perClick = 1;
let upgradeCost = 20;

let autoClickerCost = 100;
let autoClickers = 0;

let buttonUpgrade = document.getElementById("Buy")
let buttonUpgrade2 = document.getElementById("Buy2")

button.onclick = function (e){
    score += perClick
    odstavec.textContent = score
    updateUI();

}

buttonUpgrade.onclick = function(e){
    if (score >= upgradeCost) {
        score -= upgradeCost;
        perClick++;
        upgradeCost = Math.floor(upgradeCost * 1.5);

        buttonUpgrade.innerHTML = "Upgrade (cost: " + upgradeCost + ")";
        updateUI();
    }
};



setInterval(function() {
    score += autoClickers;
    updateUI();
}, 1000);

buttonUpgrade2.onclick = function(e) {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickers++;

        autoClickerCost = Math.floor(autoClickerCost * 1.5);
        buttonUpgrade2.innerHTML = "Buy Auto-Clicker (cost: " + autoClickerCost + ")";
        updateUI();
    }
};








function updateUI() {
    document.getElementById("odstavec").innerText = score;
    document.getElementById("perClick").innerText = perClick;
}



console.log(odstavec.innerText);
odstavec.textContent = "0"
buttonUpgrade.innerHTML = "Upgrade (cost: " + upgradeCost + ")";
buttonUpgrade2.innerHTML = "Buy Auto-Clicker (cost: " + autoClickerCost + ")";