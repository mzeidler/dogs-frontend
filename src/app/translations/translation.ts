export interface Translation {
    lang_icon: string;
    exampleText: string;

    // buttons
    home: string;
    adopt: string;
    volunteer: string;
    donate: string;
    contact: string;
    gallery: string;
    user: string;
    admin: string;
    login: string;
    logout: string;

    // login screen
    username: string;
    password: string;

    add_dog: string;
    
    close: string;
    save: string;
    cancel: string;
    yes: string;
    no: string;

    name: string;
    gender: string;
    gender_m: string;
    gender_f: string;
    weight: string;
    born: string;
    nutered: string;
    vaccinated: string;
    description: string;   

    male: string;
    female: string;
    no_gender: string;

    delete: string;
    delete_dog: string;
}

export class En implements Translation {
    lang_icon = "assets/en.png";
    exampleText = "Text in english"

    // buttons
    adopt = "Adopt";
    volunteer = "Volunteer";
    donate = "Donate";
    contact = "Contact";
    gallery = "Gallery";
    user = "User";
    admin = "Admin";
    home = "Home";
    login = "Login";
    logout = "Logout"

    // login screen
    username = "username";
    password = "password";

    add_dog = "Add dog";

    close = "Close";
    save = "Save";
    cancel = "Cancel";
    yes = "Yes";
    no = "No";

    name = "name";
    gender = "gender";
    gender_m = "m";
    gender_f = "f";
    weight = "weight";
    born = "born";
    nutered = "nutered";
    vaccinated = "vaccinated";
    description = "description";    

    male = "male";
    female = "female";
    no_gender = "gender unknown";

    delete = "delete";

    delete_dog = "Do you want to remove this Dog?";
}

export class De implements Translation {
    lang_icon = "assets/de.png";
    exampleText = "Text auf deutsch"

    // buttons
    adopt = "Zuhause";
    volunteer = "Freiwillig";
    donate = "Spenden";
    contact = "Kontakt";
    gallery = "Gallerie";
    user = "Benutzer";
    admin = "Administration";
    home = "Start";
    login = "Anmelden";
    logout = "Abmelden"

    // login screen
    username = "benutzername";
    password = "kennwort";

    add_dog = "Hund hinzufügen";

    close = "Schliessen";
    save = "Speichern";
    cancel = "Abbrechen";
    yes = "Ja";
    no = "Nein";

    name = "name";
    gender = "geschlecht";
    gender_m = "m";
    gender_f = "w";
    weight = "gewicht";
    born = "geboren";
    nutered = "kastriert";
    vaccinated = "geimpft";
    description = "beschreibung";   

    male = "männlich";
    female = "weiblich";
    no_gender = "geschlecht unbekannt";

    delete = "entfernen";

    delete_dog = "Möchten Sie diesen Hund entfernen?";
}

export class Hr implements Translation {
    lang_icon = "assets/hr.png";
    exampleText = "Tekst na hrvatskom"

    // buttons
    adopt = "Udomi";
    volunteer = "Volonteri";
    donate = "Doniraj";
    contact = "Kontakt";
    gallery = "Galerija";
    user = "Korisnik";
    admin = "Administracija";
    home = "Doma";
    login = "Prijava"
    logout = "Odjava"

    // login screen
    username = "korisničko ime";
    password = "lozinka";

    add_dog = "Dodaj psa";

    close = "Zatvori";
    save = "Spremi";
    cancel = "Odustani";
    yes = "Da";
    no = "Ne";

    name = "ime";
    gender = "spol";
    gender_m = "m";
    gender_f = "ž";
    weight = "težina";
    born = "rođen";
    nutered = "kastriran";
    vaccinated = "cijepljen";
    description = "opis";   

    male = "muški";
    female = "ženka";
    no_gender = "spol nepoznat";

    delete = "obriši";

    delete_dog = "Da li želite obrisati ovog psa?";
}