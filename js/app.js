
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
            swal("Eita!", "Esse estado já foi cadastrado.", "error");
            $("#content_pesquisa_estado").text(estado);

        }else{
            //estado não cadastrado
            estados.push(estado);
            abreviacoes.push(abreviacao);
            swal("Bom Trabalho!", "Estado cadastrado com sucesso.", "success");
        }
        document.getElementById("form_insere_estado").reset();
        
        console.log(estados);
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

    /*DISMISS PESQUISA DO ESTADO*/
    $("#btn_fechar_pesquisa").on('click', function(){
        $("#card_estados_cadastrados").slideUp('slow');
    })


    /*OPTANDO POR EDITAR ESTADO*/
    $("#btn_editar_estado_opcao").on('click', function (){
        $("#card_estados_cadastrados").slideUp('slow'); 
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

    /*DISMISS EDICAO DO ESTADO*/
    $("#btn_fechar_pesquisa").on('click', function(){
        $("#card_estados_cadastrados").slideUp('slow');
        document.getElementById("form_consultar_estado").reset();  

    })

    /*CONFIRMANDO EDICAO DO ESTADO*/
    $("#btn_editar_estado_confirmacao").on('click', function (){
      
        swal({
            title: "Tem Certeza?",
            text: "Essa ação não poderá ser desfeita",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willEdit) => {
            if (willEdit) {
                var estado = $("#nome_estado_editado").val();
                var abreviacao = $("#abreviacao_estado_editado").val();
                estados[indexEstado] = estado;
                abreviacoes[indexEstado] = abreviacao;
                //console.log(estados);
                //console.log(abreviacoes);
                $("#form_edita_estado").slideUp('slow');      
                document.getElementById("form_consultar_estado").reset();  
                swal("Bom trabalho! Estado editado com sucesso.", {
                icon: "success",
              });
            } else {
              swal("Os dados não foram alterados.");
            }
          });

        
    })


    $("#btn_voltar_edicao").on('click', function(){
        $("#form_edita_estado").slideUp('slow');
        document.getElementById("form_consultar_estado").reset();  

    })

    /*EXCLUIR ESTADO*/
    $("#btn_excluir_estado").on('click', function (){

        swal({
            title: "Tem Certeza?",
            text: "Esses dados não poderão ser recuperados!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                var estadoPesquisado = $("#consultar").val();
                var indexEstado = estados.indexOf(estadoPesquisado);
                estados.splice(indexEstado,1);
                $("#form_edita_estado").slideUp('slow');
                $("#card_estados_cadastrados").slideUp('slow');
                document.getElementById("form_consultar_estado").reset();  
                console.log(estados);
              swal("Poof! Estado excluído", {
                icon: "success",
              });
            } else {
              swal("Ufa! Essa foi por pouco. Você não excluiu nada.");
            }
          });
        
        //exibir mensagem

    })


    /*========================= CIDADE ========================== */

    $("#btn_form_insere_ciade").on('click', function () {
        $("#btn_form_insere_cidade").hide();
        $("#form_insere_cidade").slideDown('slow');
        $("#btn_fechar_form").show(500);
        return false;
    })
    
    /*CADASTRO DE CIDADE*/
    $("#btn_cadastrar_cidade").on('click',function(){

        var cidade = $("#nome_cidade").val();
        var abreviacao = $("#abreviacao_estado").val();

        if(cidades.indexOf(cidade) != -1){
            //cidade cadastrada
            //exibir cidade
            swal("Eita!", "Essa cidade já foi cadastrada.", "error");
            $("#content_pesquisa_cidade").text(cidade);

        }else{
            //cidade não cadastrada
            cidades.push(cidade);
            abreviacoes.push(abreviacao);
            swal("Bom Trabalho!", "Cidade cadastrada com sucesso.", "success");
        }
        document.getElementById("form_insere_cidade").reset();
        
        console.log(cidades);
    })

    $("#btn_fechar_form").on('click', function () {
        $("#form_insere_cidade").slideUp('slow');
        $("#btn_form_insere_cidade").show();
        return false;
    })

    /*BUSCA POR CIDADE E EXIBIÇÃO*/
    $("#consultar").keyup(function () {
        var cidadePesquisado = $("#consultar").val();

        $("#content_pesquisa_cidade").text("Estado não encontrado");
        if(cidades.indexOf(cidadePesquisado) !== -1){
            //exibir
            $("#content_pesquisa_cidade").text(cidadePesquisado);
        }
        $("#card_cidades_cadastrados").slideDown('slow');
        return false;
    })

    /*DISMISS PESQUISA DO CIDADE*/
    $("#btn_fechar_pesquisa").on('click', function(){
        $("#card_cidades_cadastrados").slideUp('slow');
    })


    /*OPTANDO POR EDITAR CIDADE*/
    $("#btn_editar_cidade_opcao").on('click', function (){
        $("#card_cidades_cadastrados").slideUp('slow'); 
        $("#form_edita_cidade").slideDown('slow');

        //pegar o valor do input do estado pesquisado
        var cidadePesquisada = $("#consultar").val();
        indexCidade = cidades.indexOf(cidadePesquisada);
        
        //colocar esse valor no input do estado editado
        $("#nome_cidade_editado").val(cidadePesquisada);
        $("#abreviacao_cidade_editado").val(abreviacoes[indexCidade]);
        
        $("#btn_fechar_form").show(500);
        return false;
    })

    /*DISMISS EDICAO DO CIDADE*/
    $("#btn_fechar_pesquisa").on('click', function(){
        $("#card_cidades_cadastrados").slideUp('slow');
        document.getElementById("form_consultar_cidade").reset();  

    })

    /*CONFIRMANDO EDICAO DO CIDADE*/
    $("#btn_editar_cidade_confirmacao").on('click', function (){
      
        swal({
            title: "Tem Certeza?",
            text: "Essa ação não poderá ser desfeita",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willEdit) => {
            if (willEdit) {
                var cidade = $("#nome_cidade_editado").val();
                var abreviacao = $("#abreviacao_cidade_editado").val();
                cidades[indexCidade] = cidade;
                abreviacoes[indexCidade] = abreviacao;
                //console.log(cidades);
                //console.log(abreviacoes);
                $("#form_edita_cidade").slideUp('slow');      
                document.getElementById("form_consultar_cidades").reset();  
                swal("Bom trabalho! Cidade editada com sucesso.", {
                icon: "success",
              });
            } else {
              swal("Os dados não foram alterados.");
            }
          });

        
    })


    $("#btn_voltar_edicao").on('click', function(){
        $("#form_edita_cidade").slideUp('slow');
        document.getElementById("form_consultar_cidade").reset();  

    })

    /*EXCLUIR CIDADE*/
    $("#btn_excluir_cidade").on('click', function (){

        swal({
            title: "Tem Certeza?",
            text: "Esses dados não poderão ser recuperados!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                var cidadePesquisado = $("#consultar").val();
                var indexCidade = estados.indexOf(cidadePesquisado);
                cidades.splice(indexCidade,1);
                $("#form_edita_cidade").slideUp('slow');
                $("#card_cidades_cadastrados").slideUp('slow');
                document.getElementById("form_consultar_cidade").reset();  
                console.log(cidades);
              swal("Poof! Cidade excluída", {
                icon: "success",
              });
            } else {
              swal("Ufa! Essa foi por pouco. Você não excluiu nada.");
            }
          });
        
        //exibir mensagem

    })


});
