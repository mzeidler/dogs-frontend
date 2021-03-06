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
    messages: string;
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
    delete_story: string;

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

    video_upload: string;
    video_remove: string;
    video_left: string;
    video_right: string;    

    tab_description: string;
    tab_pictures: string;
    tab_videos: string; 
    tab_configuration: string;

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
    contact_message: string;

    msgtbl_timestamp: string;
    msgtbl_dogname: string;
    msgtbl_name: string;
    msgtbl_email: string;
    msgtbl_tel: string;
    msgtbl_message: string;

    loggin_in_as: string;
    video_link: string;
    video_link_short: string;
    video_link_name: string;

    filter_showall: string;
    filter_reset: string;
    filter_older_than_f: string;
    filter_younger_than_f: string;
    filter_older_than_m: string;
    filter_younger_than_m: string;    
    or: string;
    filter_gender_all: string;
    filter_size_all: string;
    filter_age_all: string;
    please_wait: string;

    // Stories
    add_story: string;
    add_story_shelter: string;
    edit_story_shelter: string;

    add_story_title1: string;
    add_story_title2: string;
    add_story_title3: string;
    add_story_opened: string;

    story_up: string;
    story_down: string;
    story_edit: string;
    story_delete: string;

    contact_tel_desc: string;
    contact_name: string;
    contact_tel: string;
    contact_adr: string;
    contact_email: string;

    adopted: string;
}

export class En implements Translation {
    lang_icon = "assets/en.png";
    exampleText = "Text in english"

    // buttons
    adopt = "Adopt";
    volunteer = "Volunteer";
    donate = "Donate";
    contact = "Contact";
    gallery = "Dog shelter";
    messages = "Messages";
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
    delete_story = "Do you want to remove this Story?";

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

    video_upload = "upload video";
    video_remove = "remove video";
    video_left = "move this video to the left";
    video_right = "move this video to the right";    
    
    tab_description = "Description";
    tab_pictures = "Pictures";
    tab_videos = "Videos";    
    tab_configuration = "Configuration";

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
    contact_message = "Leave a message";
    contact_us = "Contact us";
    contact_person = "Contact person";
    contact_address = "Address";

    msgtbl_timestamp = "Timestamp";
    msgtbl_dogname = "Dog";
    msgtbl_name = "Name";
    msgtbl_email = "Email";
    msgtbl_tel = "Tel";
    msgtbl_message = "Message";

    loggin_in_as = "Logged in as ";
    video_link = "Add a video link";
    video_link_short = "youtube video link";
    video_link_name = "youtube id";

    filter_showall = "Show all";
    filter_reset = "reset filter";
    or = "or";

    filter_older_than_m = "older than";
    filter_younger_than_m = "younger than";

    filter_older_than_f = "older than";
    filter_younger_than_f = "younger than";   
    
    filter_gender_all = "both gender";
    filter_size_all = "all sizes";;
    filter_age_all = "all ages";   
    please_wait = "Please wait..."; 

    add_story = "Add a story";
    add_story_shelter = "Add a shelter story";
    edit_story_shelter = "Edit a shelter story";

    add_story_title1 = "Title left";
    add_story_title2 = "Title middle";
    add_story_title3 = "Title right";
    add_story_opened = "Show story automatically";

    story_up = "Move story up";
    story_down = "Move story down";
    story_edit = "Edit story";
    story_delete = "Delete story";    

    contact_tel_desc = "";
    contact_name = "";
    contact_tel = "";
    contact_adr = "";
    contact_email = "";

    adopted = "Found a home";
}

export class De implements Translation {
    lang_icon = "assets/de.png";
    exampleText = "Text auf deutsch"

    // buttons
    adopt = "Zuhause";
    volunteer = "Freiwillige Helfer";
    donate = "Spenden";
    contact = "Kontakt";
    gallery = "Tierheim";
    messages = "Nachrichten";
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
    delete_story = "Möchten Sie diese Geschichte entfernen?";

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

    video_upload = "Video hinzufügen";
    video_remove = "Video entfernen";
    video_left = "Nach links verschieben";
    video_right = "Nach rechts verschieben";  

    tab_description = "Beschreibung";
    tab_pictures = "Bilder";
    tab_videos = "Video";   
    tab_configuration = "Konfiguration";

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
    contact_message = "Hinterlassen Sie eine Nachricht";
    contact_us = "Kontaktieren Sie uns";
    contact_person = "Kontaktperson";
    contact_address = "Adresse";

    msgtbl_timestamp = "Zeit";
    msgtbl_dogname = "Hund";
    msgtbl_name = "Name";
    msgtbl_email = "Email";
    msgtbl_tel = "Tel";
    msgtbl_message = "Nachricht";

    loggin_in_as = "Angemeldet als ";
    video_link = "Video link hinzufügen";

    video_link_short = "Youtube Video link";
    video_link_name = "Youtube id";    

    filter_showall = "Alle anzeigen";
    filter_reset = "Filter zurücksetzen";
    or = "oder";

    filter_older_than_f = "älter als";
    filter_younger_than_f = "jünger als";

    filter_older_than_m = "älter als";
    filter_younger_than_m = "jünger als";

    filter_gender_all = "beide Geschlechter";
    filter_size_all = "alle Größen";
    filter_age_all = "alle Alter"; 
    please_wait = "Bitte warten..."; 

    add_story = "Geschichte hinzufügen";
    add_story_shelter = "Geschichte aus dem Tierheim hinzufügen";
    edit_story_shelter = "Geschichte aus dem Tierheim bearbeiten";

    add_story_title1 = "Titel links";
    add_story_title2 = "Titel mittel";
    add_story_title3 = "Titel rechts";
    add_story_opened = "Geschichte automatisch anzeigen";

    story_up = "Geschichte nach oben";
    story_down = "Geschichte nach unten";
    story_edit = "Geschichte bearbeiten";
    story_delete = "Geschichte löschen";

    contact_tel_desc = "Tel. (WhatsUp)";
    contact_name = "Martina Szalay Zeidler";
    contact_tel = "+49 173 673 7687";
    contact_adr = "93057 Regensburg";
    contact_email = "Martina.Szalay.Zeidler@gmail.com";

    adopted = "Zuhause gefunden";
}

export class Hr implements Translation {
    lang_icon = "assets/hr.png";
    exampleText = "Tekst na hrvatskom"

    // buttons
    adopt = "Udomi";
    volunteer = "Pomozite nam";
    donate = "Doniraj";
    contact = "Kontakt";
    gallery = "Sklonište";
    messages = "Poruke";
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
    delete_story = "Da li želite obrisati ovu priču?";

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

    video_upload = "dodaj video";
    video_remove = "obriši video";
    video_left = "pomakni ulijevo";
    video_right = "pomakni udesno";  
    
    tab_description = "Opis";
    tab_pictures = "Slike";
    tab_videos = "Video";  
    tab_configuration = "Konfiguracija";

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
    contact_message = "Ostavite poruku";
    contact_us = "Kontaktirajte nas";
    contact_person = "Kontaktna osoba";
    contact_address = "Adresa";

    msgtbl_timestamp = "Vrijeme";
    msgtbl_dogname = "Pas";
    msgtbl_name = "Ime i prezime";
    msgtbl_email = "Email";
    msgtbl_tel = "Tel";
    msgtbl_message = "Poruka";

    loggin_in_as = "Prijavljeni ste kao ";
    video_link = "Dodavanje video linka";

    video_link_short = "youtube video link";
    video_link_name = "youtube id";       

    filter_showall = "Prikaži sve";
    filter_reset = "resetiraj filter";
    or = "ili";

    filter_older_than_f = "stariji od";
    filter_younger_than_f = "mlađi od";

    filter_older_than_m = "stariji od";
    filter_younger_than_m = "mlađi od";

    filter_gender_all = "oba spola";
    filter_size_all = "sve veličine";
    filter_age_all = "sve starosti"; 
    please_wait = "Molimo pričekajte trenutak..."; 

    add_story = "Dodaj priču";
    add_story_shelter = "Dodaj priču iz skloništa";
    edit_story_shelter = "Uredi priču iz skloništa";

    add_story_title1 = "Naslov lijevo";
    add_story_title2 = "Naslov sredina";
    add_story_title3 = "Naslov desno";
    add_story_opened = "Prikaži ovu priču automatski";

    story_up = "Pomakni priču prema gore";
    story_down = "Pomakni priču prema dolje";
    story_edit = "Uredi priču";
    story_delete = "Obriši priču";

    contact_tel_desc = "Tel. (Viber, WhatsUp)";
    contact_name = "Elizabeta Eldić";
    contact_tel = "+385 92 3306092";
    contact_adr = null;
    contact_email = null;

    adopted = "Udomljeni psi";
}