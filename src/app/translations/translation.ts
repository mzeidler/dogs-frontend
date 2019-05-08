export interface Translation {
    exampleText: string;
    
    home: string;
    adopt: string;
    volunteer: string;
    donate: string;
    contact: string;
    gallery: string;
    user: string;
    admin: string;
}

export class En implements Translation {
    adopt = "Adopt";
    volunteer = "Volunteer";
    donate = "Donte";
    contact = "Contact";
    gallery = "Gallery";
    user = "User";
    admin = "Admin";
    home = "Home";
    exampleText = "Text in english"
}

export class De implements Translation {
    adopt = "Zuhause";
    volunteer = "Freiwillig";
    donate = "Spenden";
    contact = "Kontakt";
    gallery = "Gallerie";
    user = "Benutzer";
    admin = "Administration";
    home = "Start";
    exampleText = "Text auf deutsch"
}

export class Hr implements Translation {
    adopt = "Udomi";
    volunteer = "Volonteri";
    donate = "Doniraj";
    contact = "Kontakt";
    gallery = "Galerija";
    user = "Korisnik";
    admin = "Administracija";
    home = "Doma";
    exampleText = "Tekst na hrvatskom"
}