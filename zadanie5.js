// родительский класс прибора
class HomeAppliance {
    constructor(name) {
        this.name = name;
        this.voltage = 220;
        this.switchedOn = false; //начальное состояние - отключено
    }
    switchOn(timeOn) {
        this.timeOn = timeOn;
        this.switchedOn = true;
    }
    switchOff(timeOff) {
        this.timeOff = timeOff;
        this.switchedOn = false;
    }
    getConsumption(power) {
        this.power = power;
        this.timeOnHours = this.timeOff - this.timeOn;
        this.myConsumption = this.power * this.timeOnHours;
        console.log(`appliance consumption is ${this.myConsumption} W`);
    }
}


class TableLamp extends HomeAppliance {
    constructor(name, colour) {
        super(name);
        this.name = name;
        this.colour = colour;
    }
}


class Computer extends HomeAppliance {
    constructor(name) {
        super(name);
        this.name = name;
        this.autonomy = false;
        this.activity = "access Internet";
    }
    openInternet() {
        console.log("Ой! Что-то пошло не так...Проверьте настройки Интернет");
    }
}

class Notebook extends Computer {
    constructor(name) {
        super(name);
        this.name = name;
        this.autonomy = true;
    }

    getConsumption(power, timeOnBattery) {
        this.power = power;  
        this.timeOnHours = this.timeOff - this.timeOn;
        this.timeOnBattery = timeOnBattery;
        if (this.timeOnHours > this.timeOnBattery) {  
            this.myConsumption = this.power * (this.timeOnHours - this.timeOnBattery);
        } else {
            this.myConsumption = 0; //хватает батареи
        }
          console.log(`${this.name} consumption ${this.myConsumption} W, ${this.timeOnBattery} hours on battery`);
          
    }
    skillFactoryStudy() {
        console.log(`Изучаем модуль Е4 на ${this.name}`);
    }
}
 

class Tablet extends Notebook {
    constructor(name) {
        super(name);
        this.name = name;
    }
    playMusic = function() {
        console.log(`${this.name} plays music`)
    }
    skillFactoryStudy = function() {
        console.log(`Экран небольшой, но тоже можно изучать модуль Е4 на ${this.name}`);
    }
}


let lamp = new TableLamp("Soft lamp", "yellow");
let comp1 = new Computer("Server desktop");
let notebook1 = new Notebook("Dell notebook", true);
let tablet1 = new Tablet("Samsung tablet", true);

lamp.switchOn(2);
comp1.switchOn(0);
notebook1.switchOn(3);
tablet1.switchOn(6);

lamp.switchOff(5);
comp1.switchOff(24);
notebook1.switchOff(8);
tablet1.switchOff(9);

lamp.getConsumption(60);
comp1.getConsumption(300);
notebook1.getConsumption(200, 2);
tablet1.getConsumption(100, 4);

comp1.openInternet();
notebook1.openInternet();
tablet1.playMusic();
notebook1.skillFactoryStudy();
tablet1.skillFactoryStudy();

console.log(lamp);
console.log(comp1);
console.log(notebook1);
console.log(tablet1);
