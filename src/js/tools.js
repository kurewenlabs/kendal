//referente adminsion
$('#admision').hide();
$('#nav-tabContent').hide();

//referente area academica
$('#academica').hide();
$('#nav-tabContent2').hide();

//referente reglamento
$('#reglamento').hide();
$('#nav-tabContent3').hide();

//oculta las opciones de Adminision
$('#btnadmision').click(function() {
$('#admision').show();
$('#nav-tabContent').show();
$('#academica').hide();
$('#nav-tabContent2').hide();
$('#reglamento').hide();
$('#nav-tabContent3').hide();
});

//oculta las opciones de Academica
$('#btnacademica').click(function() {
$('#admision').hide();
$('#nav-tabContent').hide();
$('#academica').show();
$('#nav-tabContent2').show();
$('#reglamento').hide();
$('#nav-tabContent3').hide();
});

//oculta las opciones de Reglamento
$('#btnreglamento').click(function() {
$('#admision').hide();
$('#nav-tabContent').hide();
$('#academica').hide();
$('#nav-tabContent2').hide();
$('#reglamento').show();
$('#nav-tabContent3').show();
});