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
}