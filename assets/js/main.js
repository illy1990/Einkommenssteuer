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




function HundeRechner2020() {
    let Brutto_person1 = document.getElementById("Hunde_brutto_input_Person1");
    let Brutto_person2 = document.getElementById("Hunde_brutto_input_Person2");
    let Brutto_person1_leer = Brutto_person1.value.length;
    let Brutto_person2_leer = Brutto_person2.value.length;

    if (Brutto_person1_leer == 0 && Brutto_person2_leer == 0) {
        document.getElementById("Hunde_brutto_output").innerHTML = "Bitte ein Gehalt eingeben"
    }
    else if (Brutto_person1_leer > 0 && Brutto_person2_leer == 0) {
        if (Brutto_person1.value <=9408)
        {   document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person1.value) + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(Brutto_person1.value) + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = " 0 Euro ESt von Person 1";
        }
        else if (Brutto_person1.value>=9409 && Brutto_person1.value<=14532){
            let yP11;
            let EstP11;
            yP11 = (Brutto_person1.value-9408)/10000;
            EstP11 = (972.87*yP11+1400)*yP11;
            NettoP11 = Brutto_person1.value-EstP11;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person1.value) + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP11) + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP11) + " Euro ESt von Person 1";
        }
        else if (Brutto_person1.value>=14533 && Brutto_person1.value<=57051){
            let yP12;
            let EstP12;
            yP12 = (Brutto_person1.value-14532)/10000;
            EstP12 = (212.02*yP12+2397)*yP12+972.79;
            NettoP12 = Brutto_person1.value-EstP12;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person1.value) + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP12) + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP12) + " Euro ESt von Person 1";
        }

        else if (Brutto_person1.value>=57052 && Brutto_person1.value<=270500){
            let EstP13;
            EstP13 = (0.42*Brutto_person1.value-8963.74);
            NettoP13 = Brutto_person1.value-EstP13;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person1.value) + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP13) + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP13) + " Euro ESt von Person 1";
        }

        else {
            let EstP14;
            EstP14 = (0.45*Brutto_person1.value-17078.74);
            NettoP14 = Brutto_person1.value-EstP14;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person1.value) + " Euro Brutto von Person 1";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP14) + " Euro Netto von Person 1";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP14) + " Euro ESt von Person 1";
        }
    }
    else if (Brutto_person1_leer == 0 && Brutto_person2_leer > 0) {
        if (Brutto_person2.value <=9408)
        {   document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person2.value) + " Euro Brutto von Person 2";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(Brutto_person2.value) + " Euro Netto von Person 2";
            document.getElementById("Hunde_ESt_output").innerHTML = " 0 Euro ESt von Person 2";
        }
        else if (Brutto_person2.value>=9409 && Brutto_person2.value<=14532){
            let yP21;
            let EstP21;
            yP21 = (Brutto_person2.value-9408)/10000;
            EstP21 = (972.87*yP21+1400)*yP21;
            NettoP21 = Brutto_person2.value-EstP21;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person2.value) + " Euro Brutto von Person 2";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP21) + " Euro Netto von Person 2";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP21) + " Euro ESt von Person 2";
        }
        else if (Brutto_person2.value>=14533 && Brutto_person2.value<=57051){
            let yP22;
            let EstP22;
            yP22 = (Brutto_person2.value-14532)/10000;
            EstP22 = (212.02*yP22+2397)*yP22+972.79;
            NettoP22 = Brutto_person2.value-EstP22;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person2.value) + " Euro Brutto von Person 2";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP22) + " Euro Netto von Person 2";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP22) + " Euro ESt von Person 2";
        }

        else if (Brutto_person2.value>=57052 && Brutto_person2.value<=270500){
            let EstP23;
            EstP23 = (0.42*Brutto_person2.value-8963.74);
            NettoP23 = Brutto_person2.value-EstP23;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person2.value) + " Euro Brutto von Person 2";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP23) + " Euro Netto von Person 2";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP23) + " Euro ESt von Person 2";
        }

        else {
            let EstP24;
            EstP24 = (0.45*Brutto_person2.value-17078.74);
            NettoP24 = Brutto_person2.value-EstP24;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(Brutto_person2.value) + " Euro Brutto von Person 2";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoP24) + " Euro Netto von Person 2";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstP24) + " Euro ESt von Person 2";
        }
    }
    else {
        let gemeinsamBrutto;
        gemeinsamBrutto = (Number(Brutto_person1.value)+Number(Brutto_person2.value));
        if (gemeinsamBrutto <=9408)
        {   document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(gemeinsamBrutto) + " Euro Brutto Gemeinsam";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(gemeinsamBrutto) + " Euro Netto Gemeinsam";
            document.getElementById("Hunde_ESt_output").innerHTML = " 0 Euro ESt Gemeinsam";
        }
        else if (gemeinsamBrutto>=9409 && gemeinsamBrutto<=14532){
            let yPG1;
            let EstPG1;
            yPG1 = (gemeinsamBrutto-9408)/10000;
            EstPG1 = (972.87*yPG1+1400)*yPG1;
            NettoPG1 = gemeinsamBrutto-EstPG1;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(gemeinsamBrutto) + " Euro Brutto Gemeinsam";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoPG1) + " Euro Netto Gemeinsam";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstPG1) + " Euro ESt Gemeinsam";
        }
        else if (gemeinsamBrutto>=14533 && gemeinsamBrutto<=57051){
            let yPG2;
            let EstPG2;
            yPG2 = (gemeinsamBrutto-14532)/10000;
            EstPG2 = (212.02*yPG2+2397)*yPG2+972.79;
            NettoPG2 = gemeinsamBrutto-EstPG2;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(gemeinsamBrutto) + " Euro Brutto Gemeinsam";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoPG2) + " Euro Netto Gemeinsam";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstPG2) + " Euro ESt Gemeinsam";
        }

        else if (gemeinsamBrutto>=57052 && gemeinsamBrutto<=270500){
            let EstPG3;
            EstPG3 = (0.42*gemeinsamBrutto-8963.74);
            NettoPG3 = gemeinsamBrutto-EstPG3;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(gemeinsamBrutto) + " Euro Brutto Gemeinsam";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoPG3) + " Euro Netto Gemeinsam";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstPG3) + " Euro ESt Gemeinsam";
        }

        else {
            let EstPG4;
            EstPG4 = (0.45*gemeinsamBrutto-17078.74);
            NettoPG4 = gemeinsamBrutto-EstPG4;
            document.getElementById("Hunde_brutto_output").innerHTML = Math.floor(gemeinsamBrutto) + " Euro Brutto Gemeinsam";
            document.getElementById("Hunde_netto_output").innerHTML = Math.floor(NettoPG4) + " Euro Netto Gemeinsam";
            document.getElementById("Hunde_ESt_output").innerHTML = Math.floor(EstPG4) + " Euro ESt Gemeinsam";
        }
    }
}