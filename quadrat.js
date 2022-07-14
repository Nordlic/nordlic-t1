function Quadrat() {
    var Eingabe = document.getElementById('Eingabe');
    var Ergebnis = Eingabe.value * Eingabe.value;
    alert("Das Quadrat von " + Eingabe.value + " = " + Ergebnis);
    Eingabe.value = 0;
}

class Person {
    constructor(name, alter) {
        this._name = name;
        this._alter = alter;
        // object to handle event:
        this.click = { handleEvent: this.hit, self: this };
    }
    vorstellen() { return "Ich heiße " + this._name + " und bin " + this._alter + " Jahre alt."; }
    alter(value) { this._alter = value; }
    hit(event) {
        var classThis = this.self;
        return "Ich bin " + classThis._alter + " Jahre alt."
    }
}
var p = new Person('Frizzy', 15);
var p1 = p.vorstellen();
alert(p1);
var object = document.getElementById("button");
object.addEventListener("click", p.click);
alert(object);