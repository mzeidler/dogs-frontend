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

    name: string;
    gender: string;
    gender_m: string;
    gender_f: string;
    weight: string;
    born: string;
    nutered: string;
    vaccinated: string;
    description: string;   
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

    name = "name";
    gender = "gender";
    gender_m = "m";
    gender_f = "f";
    weight = "weight";
    born = "born";
    nutered = "nutered";
    vaccinated = "vaccinated";
    description = "description";    
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

    name = "name";
    gender = "geschlecht";
    gender_m = "m";
    gender_f = "w";
    weight = "gewicht";
    born = "geboren";
    nutered = "kastriert";
    vaccinated = "geimpft";
    description = "beschreibung";   
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

    name = "ime";
    gender = "spol";
    gender_m = "m";
    gender_f = "ž";
    weight = "težina";
    born = "rođen";
    nutered = "kastriran";
    vaccinated = "cijepljen";
    description = "opis";   
}