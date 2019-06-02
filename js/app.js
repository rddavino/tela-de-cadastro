
$(document).ready(function () {

    var estados = [];
    var cidades = [];
    var abreviacoes = [];
    var indexEstado;
    
    
    $('ul.tabs').tabs();
    $("#form_insere_estado").hide();
    $("#form_edita_estado").hide();
    $("#form_insere_cidade").hide();
    $("#btn_fechar_form").hide();
    $("#card_estados_cadastrados").hide();
    $('select').formSelect();

    
/*========================= ESTADO ==========================*/

    $("#btn_form_insere_estado").on('click', function () {
        $("#btn_form_insere_estado").hide();
        $("#form_insere_estado").slideDown('slow');
        $("#btn_fechar_form").show(500);
        return false;
    })
    
    /*CADASTRO DE ESTADO*/
    $("#btn_cadastrar_estado").on('click',function(){

        var estado = $("#nome_estado").val();
        var abreviacao = $("#abreviacao_estado").val();

        if(estados.indexOf(estado) != -1){
            //estado cadastrado
            //exibir estado
            
        }else{
            //estado não cadastrado
            estados.push(estado);
            abreviacoes.push(abreviacao);
        }
        document.getElementById("form_insere_estado").reset();

    })

    $("#btn_fechar_form").on('click', function () {
        $("#form_insere_estado").slideUp('slow');
        $("#btn_form_insere_estado").show();
        return false;
    })

    /*BUSCA POR ESTADO E EXIBIÇÃO*/
    $("#consultar").keyup(function () {
        var estadoPesquisado = $("#consultar").val();

        $("#content_pesquisa_estado").text("Estado não encontrado");
        if(estados.indexOf(estadoPesquisado) !== -1){
            //exibir
            $("#content_pesquisa_estado").text(estadoPesquisado);
        }
        $("#card_estados_cadastrados").slideDown('slow');
        return false;
    })

    $("#btn_fechar_pesquisa").on('click', function(){
        $("#card_estados_cadastrados").slideUp('slow');
    })


    /*OPTANDO POR EDITAR ESTADO*/
    $("#btn_editar_estado_mobile").on('click', function (){
        $("#form_edita_estado").slideDown('slow');
        //pegar o valor do input do estado pesquisado
        var estadoPesquisado = $("#consultar").val();
        indexEstado = estados.indexOf(estadoPesquisado);
        
        //colocar esse valor no input do estado editado
        $("#nome_estado_editado").val(estadoPesquisado);
        $("#abreviacao_estado_editado").val(abreviacoes[indexEstado]);
        
        $("#btn_fechar_form").show(500);
        return false;
    })

    /*CONFIRMANDO EDICAO DO ESTADO*/
    $("#btn_editar_estado").on('click', function (){
      
        var estado = $("#nome_estado_editado").val();
        var abreviacao = $("#abreviacao_estado_editado").val();
        estados[indexEstado] = estado;
        abreviacoes[indexEstado] = abreviacao;
        console.log(estados);
        console.log(abreviacoes);

        
    })

    /*EXCLUIR ESTADO*/
    $("#btn_excluir_estado").on('click', function (){
        var estadoPesquisado = $("#consultar").val();
        var indexEstado = estados.indexOf(estadoPesquisado);
        estados.splice(indexEstado,1);
        console.log(estados);
        //document.write("")
        //fechar pesquisa

    })


    /*========================= CIDADE ==========================
    /*CADASTRO DE CIDADE
    $("#btn_form_insere_cidade").on('click', function () {
        $("#btn_form_insere_cidade").hide();
        $("#form_insere_cidade").slideDown('slow');
        $("#btn_fechar_form").show(500);
        return false;
    })

    $("#btn_cadastrar_cidade").on('click',function(){

        //$('#form_insere_estado')[0].reset(); - NÃO FUNCIONA
        var cidade = $("#nome_cidade").val();
        var temp = $("#nome_estado").val(); //tem q vir de um select dos estados cadastrados

        if(estados.indexOf(estado) != -1){
            //estado cadastrado
            //exibir estado
            alert ("Já cadastrado");
        }else{
            //estado não cadastrado
            estados.push(estado);
            abreviacoes.push(abreviacao);
            alert ("Estado cadastrado com sucesso");
        }
        document.getElementById("form_insere_cidade").reset();

    })

    $("#btn_fechar_form_cidade").on('click', function () {
        $("#form_insere_cidade").slideUp('slow');
        $("#btn_form_insere_cidade").show();
        return false;
    })

    */


});
