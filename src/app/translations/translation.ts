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
    edit_dog: string;
    
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
    antiparasite: string;
    description: string;   

    male: string;
    female: string;
    no_gender: string;

    delete: string;
    delete_dog: string;

    age: string;

    month: string;
    months: string;

    year: string;
    years: string;

    picture_upload: string;
    picture_remove: string;
    picture_default: string;
    picture_left: string;
    picture_right: string;

    tab_description: string;
    tab_pictures: string;
    tab_videos: string; 

    crop_image_title: string;
    crop_image_upload: string;

    size: string;
    size_l: string;
    size_m: string;
    size_s: string;
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
    edit_dog = "Edit dog";

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
    antiparasite = "anti parasite";
    description = "description";    

    male = "male";
    female = "female";
    no_gender = "gender unknown";

    delete = "delete";

    delete_dog = "Do you want to remove this Dog?";

    age = "Age";

    month = "Month";
    months = "Months";

    year = "Year";
    years = "Years";

    picture_upload = "upload picture";
    picture_remove = "remove picture";
    picture_default = "show this picture on overview";
    picture_left = "move this picture to the left";
    picture_right = "move this picture to the right";

    tab_description = "Description";
    tab_pictures = "Pictures";
    tab_videos = "Videos";    

    crop_image_title = "Title picture";
    crop_image_upload = "Upload picture";

    size = "size";
    size_l = "large";
    size_m = "middle";
    size_s = "small";
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
    edit_dog = "Hund bearbeiten";

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
    antiparasite = "entwurmt";
    description = "beschreibung";   

    male = "männlich";
    female = "weiblich";
    no_gender = "geschlecht unbekannt";

    delete = "entfernen";

    delete_dog = "Möchten Sie diesen Hund entfernen?";

    age = "Alter";

    month = "Monat";
    months = "Monate";

    year = "Jahr";
    years = "Jahre";

    picture_upload = "Bild hinzufügen";
    picture_remove = "Bild entfernen";
    picture_default = "Dieses Bild in der Übersicht zeigen";
    picture_left = "Nach links verschieben";
    picture_right = "Nach rechts verschieben";

    tab_description = "Beschreibung";
    tab_pictures = "Bilder";
    tab_videos = "Video";   

    crop_image_title = "Titelbild";
    crop_image_upload = "Bild hochladen";

    size = "Größe";
    size_l = "groß";
    size_m = "mittel";
    size_s = "klein";
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
    edit_dog = "Uredi psa";

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
    antiparasite = "protiv parazita";
    description = "opis";   

    male = "muški";
    female = "ženka";
    no_gender = "spol nepoznat";

    delete = "obriši";

    delete_dog = "Da li želite obrisati ovog psa?";

    age = "Dob";

    month = "mj.";
    months = "mj.";

    year = "god.";
    years = "god.";

    picture_upload = "dodaj sliku";
    picture_remove = "obriši sliku";
    picture_default = "prikaži ovu sliku na pregledu";
    picture_left = "pomakni ulijevo";
    picture_right = "pomakni udesno";

    tab_description = "Opis";
    tab_pictures = "Slike";
    tab_videos = "Video";  

    crop_image_title = "Odabir naslovne slike";
    crop_image_upload = "Odaberi sliku";

    size = "veličina";
    size_l = "veliki";
    size_m = "srednji";
    size_s = "mali";
}