// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack () {
    return this.strength;
  }
  receiveDamage (damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;

    if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else return `A Saxon has died in combat`;
  }
  attack(){
    return this.strength
  }  
}

// War
class War {
  constructor(){
  }
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking){
    this.vikingArmy.push(Viking);
  } 

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let thingToReturnAtTheEnd = randomSaxon.receiveDamage(
    randomViking.attack()
    );
    if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomSaxonIndex, 1);
    }    
    return thingToReturnAtTheEnd;
  }

  saxonAttack(){
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let thingToReturnAtTheEnd = randomViking.receiveDamage(
    randomSaxon.attack()
    );
    if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomVikingIndex, 1);
  }
    return thingToReturnAtTheEnd;
}

showStatus(){
    if (!this.saxonArmy.length) return `Vikings have won the war of the century!`;
    if (!this.vikingArmy.length) return `Saxons have fought for their lives and survived another day...`;
    if (this.vikingArmy.length && this.saxonArmy.length) return `Vikings and Saxons are still in the thick of battle.`;
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
