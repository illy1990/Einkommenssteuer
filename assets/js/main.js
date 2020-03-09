// var TaschenRechnerZahl = "";
// var KatzenOperator ="";
// var TaschenRechnerZahl2 ="";


// function StringNull(){
//     if(KatzenOperator.length==0){
//     TaschenRechnerZahl = TaschenRechnerZahl+document.getElementById("Zahl0").value;
//     document.getElementById("ausgabe").innerHTML = TaschenRechnerZahl;
//     }
//     else {
//     TaschenRechnerZahl2 = TaschenRechnerZahl2+document.getElementById("Zahl0").value;
//     document.getElementById("ausgabe3").innerHTML = TaschenRechnerZahl2;
//     }
// }

// function KatzenMinus(){  
//     KatzenOperator ="";  
//     KatzenOperator = KatzenOperator+"-";
//     document.getElementById("ausgabe2").innerHTML = KatzenOperator;}

// function KatzenNeuStart(){
//     document.getElementById("ausgabe").innerHTML = "";
//     document.getElementById("ausgabe2").innerHTML = "";
//     document.getElementById("ausgabe3").innerHTML = "";
//     document.getElementById("ausgabe4").innerHTML = "";
//     TaschenRechnerZahl = "";
//     KatzenOperator ="";
//     TaschenRechnerZahl2 ="";
// }


let Brutto_person1 = document.getElementById("Hunde_brutto_input_Person1");
let Brutto_person2 = document.getElementById("Hunde_brutto_input_Person2");

function HundeRechner2020() {
    let Brutto_person1_leer = Brutto_person1.value.length;
    let Brutto_person2_leer = Brutto_person2.value.length;

    if (Brutto_person1_leer == 0 && Brutto_person2_leer == 0) {
        document.getElementById("Hunde_brutto_output").innerHTML = "Bitte ein Gehalt eingeben"
    }
    else if (Brutto_person1_leer > 0 && Brutto_person2_leer == 0) {
        if (Brutto_person1 <=9408)
        {   document.getElementById("Hunde_brutto_output").innerHTML = Brutto_person1 + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = Brutto_person1 + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = Brutto_person1 + " Euro Netto von Person 1";
        }
        else if (Brutto_person1>=9409 && Brutto_person1<=14532){
            let yP11;
            let EstP11;
            yP11 = (Brutto_person1-9408)/10000;
            EstP11 = (972.87*yP11+1400)*yP11;
            NettoP11 = Brutto_person1-EstP11;
            document.getElementById("Hunde_brutto_output").innerHTML = Brutto_person1 + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = NettoP11 + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = EstP11 + " Euro Netto von Person 1";
        }
        else if (Brutto_person1>=14533 && Brutto_person1<=57051){
            let yP12;
            let EstP12;
            yP12 = (Brutto_person1-14532)/10000;
            EstP12 = (212.02*yP12+2397)*yP12+972.79;
            NettoP12 = Brutto_person1-EstP12;
            document.getElementById("Hunde_brutto_output").innerHTML = Brutto_person1 + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = NettoP12 + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = EstP12 + " Euro Netto von Person 1";
        }

        else if (Brutto_person1>=57052 && Brutto_person1<=270500){
            let EstP13;
            EstP13 = (0.42*Brutto_person1-8963.74);
            NettoP13 = Brutto_person1-EstP13;
            document.getElementById("Hunde_brutto_output").innerHTML = Brutto_person1 + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = NettoP13 + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = EstP13 + " Euro Netto von Person 1";
        }

        else if (Brutto_person1>=270501){
            let EstP14;
            EstP14 = (0.45*Brutto_person1-17078.74);
            NettoP14 = Brutto_person1-EstP14;
            document.getElementById("Hunde_brutto_output").innerHTML = Brutto_person1 + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = NettoP14 + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = EstP14 + " Euro Netto von Person 1";
        }

    }
    else if (Brutto_person1_leer == 0 && Brutto_person2_leer > 0) {
        document.getElementById("Hunde_brutto_output").innerHTML = "Brutto von Person 2";
        document.getElementById("Hunde_netto_output").innerHTML = "Netto von Person 2";
    }
    else {
        document.getElementById("Hunde_brutto_output").innerHTML = "Gemeinsames Brutto";
        document.getElementById("Hunde_netto_output").innerHTML = "Gemeinsames Netto";
    }


}