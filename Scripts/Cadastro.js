$(document).ready(async function () {
        
    $('[id*=txtCpf]').mask('000.000.000-00');

    
    $('.btnEscolherEmpresa').click(function () {

        let divFormAcmeCo = $('#divFormAcmeCo');
        let divFormTioPatinhasBank = $('#divFormTioPatinhasBank');

        let empresa = $('#ddlEmpresa').val();
        console.log(empresa);

        if(empresa === "AcmeCo"){
            divFormAcmeCo.show();
            divFormTioPatinhasBank.hide();
        } else {
            divFormTioPatinhasBank.show();
            divFormAcmeCo.hide();
        }

        
    });

    let divFormNorteEuropa = $('#divFormNorteEuropa');
    let divFormDentalSorriso1 = $('#divFormDentalSorriso1');
    let divFormPampulhaIntermedica = $('#divFormPampulhaIntermedica');
    let divFormMenteSaCorpoSao = $('#divFormMenteSaCorpoSao');
    let divFormDentalSorriso2 = $('#divFormDentalSorriso2');

    divFormNorteEuropa.hide();
    divFormDentalSorriso1.hide();
    divFormPampulhaIntermedica.hide();
    divFormMenteSaCorpoSao.hide();
    divFormDentalSorriso2.hide();
    
    $('[id*="plano"]').change(function () {
       

        //console.log($(this).val());

        if ($(this).val() === 'NorteEuropa') {
            divFormNorteEuropa.show();
        }
        else if ($(this).val() === 'DentalSorriso1') {
            divFormDentalSorriso1.show();
        }
        else if ($(this).val() === 'PampulhaIntermedica') {
            divFormPampulhaIntermedica.show();
        }
        else if ($(this).val() === 'MenteSaCorpoSao') {
            divFormMenteSaCorpoSao.show();
        }
        else{
            divFormDentalSorriso2.show();
        }
    });
});