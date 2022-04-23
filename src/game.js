var hp = new Decimal("10")
var maxhp = new Decimal("10")
var dps = new Decimal("1")
var isDead = false;
function setProgressBar(width) {
  
}
function damage() {
    if (!isDead) {
        hp = hp.minus(dps)
    }
    if (hp < 1 && !isDead) {
        maxhp = maxhp.times(10)
        isDead = true
        hp = maxhp
        dps = dps.times(9.99)
        setTimeout(() => scene.remove(mesh),100);
        setTimeout(() => {
            isDead = false;
            scene.add(mesh)
        },500)
    }
    setProgressBar(hp / maxhp * 100)
    document.getElementById("enemyHealthBar").style.width = (hp / maxhp * 100) * 3 + "px";
    
}
function update() {
    setTimeout(update,1 / 144)
    if (isDead) {
        document.getElementById("hp_num").innerHTML = "Dead!"
    }
    else document.getElementById("hp_num").innerHTML = hp.toStringWithDecimalPlaces(1) + "/" + maxhp.toStringWithDecimalPlaces(1) + ' HP'
}
damage()
setTimeout(update,100)
