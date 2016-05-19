var templateModele = `
    <div id="containerModel">
        <select id="typeVehicule">
            <option value="">Voiture</option>
            <option value="">Moto</option>
        </select>
        <select id="typeMarque">
            <option value="Renault">Renault</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Citroen">Citroen</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
            <option value="Fiat">Fiat</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Opel">Opel</option>
            <option value="Seat">Seat</option>
        </select>
        <select id="typeModele">
            <option value="2CV">2CV</option>
            <option value="Acadienne">Acadienne</option>
            <option value="Berlingo">Berlingo</option>
        </select>
        <select id="typeMotorisation">
            <option value="Boite Manuelle">Boite Manuelle</option>
            <option value="">Boite Automatique</option>
        </select>
    </div>
`;

var templateImmatriculation = `
    <div id="containerImmatriculation">
        <p>Entrer votre numéro d'immatriculation</p>
        <div id="plaqueImmatriculation">
            <div id="bleu1"></div>
            <input type="text" id="plaque">
            <div id="bleu2"></div>
        </div>
    </div>
`;

var templateCarteGrise = `
    <div id="containerCarteGrise">
       <p>Carte Grise ici</p>
    </div>
`;

$('#selectionVehicule').click(function () {
    $('#bloc_search').toggleClass('classActive'); // L'élément active
    $('.byModele').toggleClass('ongletActive'); // L'élément active
    if($('#bloc_search').hasClass('classActive'))
    {
        $('#bloc_search').show();
        $('#content').append(templateModele);
    }else{
        $('#bloc_search').hide();
        $('#content').empty();
        $('.ongletActive').toggleClass('ongletActive'); // L'élément active
    }
});

$('.byModele').click(function () {
    // Au clic on suprime le template précédent puis on le remplace par un template
    $('#content').empty();
    $('#content').append(templateModele);
    // Si l'imatriculation ou la carte grise à l'onglet active
    var a = $('.byImmatriculation').hasClass('ongletActive');
    var b = $('.byCarteGrise').hasClass('ongletActive');

    if( a == true || b == true){
        $('.ongletActive').removeClass('ongletActive'); // Enlève la classe active
        $('.byModele').addClass('ongletActive'); // Puis le rajoute sur l'élément en cours
    }
});

$('.byImmatriculation').click(function () {
    $('#content').empty();
    $('#content').append(templateImmatriculation);
    var a = $('.byModele').hasClass('ongletActive');
    var b = $('.byCarteGrise').hasClass('ongletActive');
    if( a == true || b == true){
        $('.ongletActive').removeClass('ongletActive'); // L'élément active
        $('.byImmatriculation').addClass('ongletActive'); // L'élément active
    }
});

$('.byCarteGrise').click(function () {
    $('#content').empty();
    $('#content').append(templateCarteGrise);
    var a = $('.byModele').hasClass('ongletActive');
    var b = $('.byImmatriculation').hasClass('ongletActive');
    if( a == true || b == true){
        $('.ongletActive').removeClass('ongletActive'); // L'élément active
        $('.byCarteGrise').addClass('ongletActive'); // L'élément active
    }
});
