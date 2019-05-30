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

    msg_info: string;
    msg_email: string;
    msg_text: string;
    msg_send: string;
    msg_ok: string;
    msg_tel: string;
    msg_name: string;

    under_construction: string;
    contact_us: string;
    contact_person: string;
    contact_address: string;
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

    name = "Name";
    gender = "Gender";
    gender_m = "m";
    gender_f = "f";
    weight = "Weight";
    born = "Born";
    nutered = "Nutered";
    vaccinated = "Vaccinated";
    antiparasite = "Anti parasite";
    description = "Description";    

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

    size = "Size";
    size_l = "large";
    size_m = "middle";
    size_s = "small";

    msg_info = "Send a message about this dog";
    msg_email = "Email";
    msg_text = "Message";
    msg_send = "Send message";
    msg_tel = "Tel.";
    msg_name = "Name";

    msg_ok = "The Message has been sent. Thank you";

    under_construction = "This page in under construction.";
    contact_us = "Contact us";
    contact_person = "Contact person";
    contact_address = "Address";
}

export class De implements Translation {
    lang_icon = "assets/de.png";
    exampleText = "Text auf deutsch"

    // buttons
    adopt = "Zuhause";
    volunteer = "Freiwillige Helfer";
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

    name = "Name";
    gender = "Geschlecht";
    gender_m = "m";
    gender_f = "w";
    weight = "Gewicht";
    born = "Geboren";
    nutered = "Kastriert";
    vaccinated = "Geimpft";
    antiparasite = "Entwurmt";
    description = "Beschreibung";   

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

    msg_info = "Anfrage/Nachricht";
    msg_email = "Email";
    msg_text = "Nachricht";
    msg_send = "Nachricht senden";    
    msg_tel = "Tel.";
    msg_name = "Name";

    msg_ok = "Die Nachricht wurde abgeschickt. Danke";

    under_construction = "Diese Seite befindet sich im Aufbau.";
    contact_us = "Kontaktieren Sie uns";
    contact_person = "Kontaktperson";
    contact_address = "Adresse";

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

    name = "Ime";
    gender = "Spol";
    gender_m = "m";
    gender_f = "ž";
    weight = "Težina";
    born = "Rođen";
    nutered = "Kastriran";
    vaccinated = "Cijepljen";
    antiparasite = "Protiv parazita";
    description = "Opis";   

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

    size = "Veličina";
    size_l = "veliki";
    size_m = "srednji";
    size_s = "mali";

    msg_info = "Pošalji poruku u vezi ovog psa";
    msg_email = "Email";
    msg_text = "Poruka";
    msg_send = "Pošalji poruku"; 
    msg_ok = "Poruka je poslana. Hvala";
    msg_tel = "Tel.";
    msg_name = "Ime i prezime";

    under_construction = "Ova stranica je u izradi.";
    contact_us = "Kontaktirajte nas";
    contact_person = "Kontaktna osoba";
    contact_address = "Adresa";
}