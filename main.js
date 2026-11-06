
// ZAD 1

function SUMA() {
    let a = Number(document.getElementById("suma1").value);
    let b = Number(document.getElementById("suma2").value);

    document.getElementById("wynikSuma").innerHTML = "Suma: " + (a + b);
}


// ZAD 2

function PODSTAWY() {
    let a = Number(document.getElementById("pod1").value);
    let b = Number(document.getElementById("pod2").value);

    let wynik = "Różnica: " + (a - b);
    wynik += "<br>Iloczyn: " + (a * b);

    if (b != 0) {
        wynik += "<br>Iloraz: " + (a / b);
    } else {
        wynik += "<br>Nie można dzielić przez zero!";
    }

    document.getElementById("wynikPodstawy").innerHTML = wynik;
}


// ZAD 3

function KALKULATOR() {
    let a = Number(document.getElementById("kal1").value);
    let b = Number(document.getElementById("kal2").value);
    let dzialanie = document.getElementById("dzialanie").value;
    let wynik;

    if (dzialanie == "+") {
        wynik = a + b;
    } else if (dzialanie == "-") {
        wynik = a - b;
    } else if (dzialanie == "*") {
        wynik = a * b;
    } else if (dzialanie == "/") {
        if (b != 0) {
            wynik = a / b;
        } else {
            wynik = "Nie można dzielić przez zero!";
        }
    }

    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}


// ZAD 4

function MAKS() {
    let a = Number(document.getElementById("maks1").value);
    let b = Number(document.getElementById("maks2").value);
    let c = Number(document.getElementById("maks3").value);

    let najwieksza = Math.max(a, b, c);

    document.getElementById("wynikMaks").innerHTML =
        "Największa liczba: " + najwieksza;
}


// ZAD 5

function WZROST() {
    let wzrost = Number(document.getElementById("wzrost").value);

    if (wzrost < 150) {
        document.getElementById("wynikWzrost").innerHTML = "Niski";
    } else if (wzrost > 180) {
        document.getElementById("wynikWzrost").innerHTML = "Wysoki";
    } else {
        document.getElementById("wynikWzrost").innerHTML = "Średni";
    }
}


// ZAD 6

function BMI() {
    let wzrost = Number(document.getElementById("bmiWzrost").value);
    let waga = Number(document.getElementById("bmiWaga").value);

    if (wzrost <= 0 || waga <= 0) {
        document.getElementById("wynikBMI").innerHTML = "";
        return;
    }

    let bmi = waga / (wzrost / 100 * (wzrost / 100));
    let komentarz;

    if (bmi < 18.5) {
        komentarz = "Za mało!";
    } else if (bmi > 25) {
        komentarz = "Za dużo!";
    } else {
        komentarz = "OK!";
    }

    document.getElementById("wynikBMI").innerHTML =
        "BMI: " + bmi.toFixed(2) + " - " + komentarz;
}


// ZAD 7

function STARSZY() {
    let data1 = document.getElementById("data1").value;
    let data2 = document.getElementById("data2").value;

    if (data1 == "" || data2 == "") {
        document.getElementById("wynikStarszy").innerHTML = "";
    } else if (data1 < data2) {
        document.getElementById("wynikStarszy").innerHTML =
            "Pierwsza osoba jest starsza.";
    } else if (data2 < data1) {
        document.getElementById("wynikStarszy").innerHTML =
            "Druga osoba jest starsza.";
    } else {
        document.getElementById("wynikStarszy").innerHTML =
            "Osoby są w tym samym wieku.";
    }
}


// ZAD 8

function PRZESTEPNY(rok) {
    if (rok % 400 == 0 || (rok % 4 == 0 && rok % 100 != 0)) {
        console.log("Rok przestępny");
    } else {
        console.log("Rok nieprzestępny");
    }
}


// ZAD 9

function SILA() {
    let haslo = document.getElementById("haslo").value;
    let wynik = document.getElementById("komunikat");

    if (haslo.length <= 4 ||
        !/[0-9]/.test(haslo) ||
        !/[A-Z]/.test(haslo) ||
        !/[a-z]/.test(haslo) ||
        !/[^A-Za-z0-9]/.test(haslo)) {

        wynik.innerHTML = "Hasło słabe";

    } else if (haslo.length < 8) {
        wynik.innerHTML = "Hasło średnie";
    } else {
        wynik.innerHTML = "Hasło mocne";
    }
}


// ZAD 10

function TROJKAT() {
    let a = Number(document.getElementById("bok1").value);
    let b = Number(document.getElementById("bok2").value);
    let c = Number(document.getElementById("bok3").value);

    if (a > 0 && b > 0 && c > 0 &&
        a + b > c &&
        a + c > b &&
        b + c > a) {

        document.getElementById("wynikTrojkat").innerHTML =
            "Można utworzyć trójkąt.";

    } else {
        document.getElementById("wynikTrojkat").innerHTML =
            "Nie można utworzyć trójkąta.";
    }
}


// ZAD 11

function SZYFR() {
    let tekst = document.getElementById("tekst").value;
    let szyfr = "";

    for (let i = 0; i < tekst.length; i++) {
        let znak = tekst[i];

        if (znak >= "a" && znak <= "z") {
            szyfr += String.fromCharCode(
                (znak.charCodeAt(0) - 97 + 2) % 26 + 97
            );
        } else if (znak >= "A" && znak <= "Z") {
            szyfr += String.fromCharCode(
                (znak.charCodeAt(0) - 65 + 2) % 26 + 65
            );
        } else {
            szyfr += znak;
        }
    }

    document.getElementById("zaszyfrowany").innerHTML = szyfr;
}


document.getElementById("suma1").oninput = SUMA;
document.getElementById("suma2").oninput = SUMA;

document.getElementById("pod1").oninput = PODSTAWY;
document.getElementById("pod2").oninput = PODSTAWY;

document.getElementById("kal1").oninput = KALKULATOR;
document.getElementById("kal2").oninput = KALKULATOR;
document.getElementById("dzialanie").onchange = KALKULATOR;

document.getElementById("maks1").oninput = MAKS;
document.getElementById("maks2").oninput = MAKS;
document.getElementById("maks3").oninput = MAKS;

document.getElementById("wzrost").oninput = WZROST;

document.getElementById("bmiWzrost").oninput = BMI;
document.getElementById("bmiWaga").oninput = BMI;

document.getElementById("data1").onchange = STARSZY;
document.getElementById("data2").onchange = STARSZY;

document.getElementById("rok").oninput = function() {
    PRZESTEPNY(Number(this.value));
};

document.getElementById("haslo").oninput = SILA;

document.getElementById("bok1").oninput = TROJKAT;
document.getElementById("bok2").oninput = TROJKAT;
document.getElementById("bok3").oninput = TROJKAT;

document.getElementById("tekst").oninput = SZYFR;
