class DankyDuck {
    constructor(name, color) {
      this.name = name || 'Ducky';
      this.color = color || 'Yellow';
      this.energyLevel = 100;
    }
  
    quack() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} the Danky Duck says Quack! Quack!`);
        this.energyLevel -= 10;
      } else {
        console.log(`${this.name} is too tired to quack.`);
      }
      this.displayEnergy();
    }
  
    swim() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} the Danky Duck is swimming.`);
        this.energyLevel -= 20;
      } else {
        console.log(`${this.name} is too tired to swim.`);
      }
      this.displayEnergy();
    }
  
    displayEnergy() {
      console.log(`${this.name}'s energy level: ${this.energyLevel}`);
    }
  }
  
  // Example usage
  const dankyDuck1 = new DankyDuck('Quackers', 'Blue');
  const dankyDuck2 = new DankyDuck('Splashy', 'Green');
  
  dankyDuck1.quack();
  dankyDuck1.swim();
  
  dankyDuck2.quack();
  dankyDuck2.swim();
  