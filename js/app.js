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
       <p>Hello World</p>
    </div>
`;

var templateCarteGrise = `
    <div id="containerCarteGrise">
       <p>Carte Grise ici</p>
    </div>
`;

$('#selectionVehicule').click(function () {
    $('#bloc_search').toggleClass('classActive'); // L'élément active
    $('#content').toggleClass('byModele'); // Ajoute puis enlève la classe model
    if($('#bloc_search').hasClass('classActive'))
    {
        $('#bloc_search').show();
    }else{
        $('#bloc_search').hide();
        $('#content').empty();
    }

    // Par défaut la bloc "par MOodèle" sera apparu
    if($('#content').hasClass('byModele')){
        $('#content').append(templateModele);
    }
});

$('#byModele').click(function () {
    $('#content').empty();
    $('#content').append(templateModele);
});

$('#byImmatriculation').click(function () {
    $('#content').empty();
    $('#content').append(templateImmatriculation);

});

$('#byCarteGrise').click(function () {
    $('#content').empty();
    $('#content').append(templateCarteGrise);

});
