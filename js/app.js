
$(document).ready(function () {

    var estados = [];   
    var abreviacoes = [];
    var cidades = [];
    var estadosCidades = [];
    var indexEstado;
    var estado; 
    var abreviacao;
    
    
    
    $('ul.tabs').tabs();
    $("#form_insere_estado").hide();
    $("#form_insere_cidade").hide();

    $("#form_edita_estado").hide();
    $("#form_edita_cidade").hide();
    
    $("#btn_fechar_form").hide();

    $("#card_estados_cadastrados").hide();
    $("#card_cidades_cadastradas").hide();

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

        estado = $("#nome_estado").val();
        abreviacao = $("#abreviacao_estado").val();

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

    /*DESISTE DA PESQUISA DO ESTADO*/
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

    /*DESISTE DA EDICAO DO ESTADO*/
    $("#btn_fechar_pesquisa_estado").on('click', function(){
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

    /*OPTA POR INSERIR CIDADE*/
    $("#btn_form_insere_cidade").on('click', function () {
        $("#btn_form_insere_cidade").hide();
        $("#form_insere_cidade").slideDown('slow');
        $("#btn_fechar_form").show(500);
        return false;
    })
    
    /*CADASTRO DE CIDADE*/
    $("#btn_cadastrar_cidade").on('click',function(){

        var cidade = $("#nome_cidade").val();
        var estadoCidade = $("#estado_cidade").val();

            if(cidades.indexOf(cidade) != -1){
                //cidade cadastrada
                //exibir cidade
                swal("Eita!", "Essa cidade já foi cadastrada.", "error");
                $("#content_pesquisa_cidade").text(cidade);
    
            }else{
                //cidade não cadastrada
                cidades.push(cidade);
                estadosCidades.push(estadoCidade);
    
                swal("Bom Trabalho!", "Cidade cadastrada com sucesso.", "success");
            }
            document.getElementById("form_insere_cidade").reset();
    })

    /*DESISTE DE INSERIR CIDADE*/
    $("#btn_fechar_form_cidades").on('click', function () {
        $("#form_insere_cidade").slideUp('slow');
        $("#btn_form_insere_cidade").show();
        return false;
    })

    /*BUSCA POR CIDADE E EXIBIÇÃO*/
    $("#consultar_cidade").keyup(function () {
        var cidadePesquisada = $("#consultar_cidade").val();

        $("#content_pesquisa_cidade").text("Cidade não encontrada");
        if(cidades.indexOf(cidadePesquisada) !== -1){
            
            $("#content_pesquisa_cidade").text(cidadePesquisada);
        }
        $("#card_cidades_cadastradas").slideDown('slow');
        return false;
    })

    
    /*DESISTE DA PESQUISA DO CIDADE (X)*/
    $("btn_fechar_pesquisa_cidade").on('click', function(){
        $("#card_cidades_cadastradas").slideUp('slow');
    })

    /*OPTA POR EDITAR CIDADE*/
    $("#btn_editar_cidade_opcao").on('click', function (){
        $("#card_cidades_cadastradas").slideUp('slow'); 
        $("#form_edita_cidade").slideDown('slow');

        //pega o valor do input da cidade pesquisado   
        var cidadePesquisada = $("#consultar_cidade").val();
        indexCidade = cidades.indexOf(cidadePesquisada);
        
        //coloca esse valor no input da cidade editado
        $("#nome_cidade_editada").val(cidadePesquisada);
        $("#estado_cidade_editada").val(estado[indexCidade]);
        
        $("#btn_fechar_form").show(500);
        return false;
    })

    /*DESISTE DE EDITAR DO CIDADE*/
    $("#btn_fechar_pesquisa_cidade").on('click', function(){
        $("#card_cidades_cadastradas").slideUp('slow');
        document.getElementById("form_consultar_cidade").reset();  
    })

    /*CONFIRMA EDICAO DO CIDADE*/
    $("#btn_editar_cidade_confirmacao").on('click', function (){
      
        swal({
            title:"Tem Certeza?",
            text: "Essa ação não poderá ser desfeita",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willEdit) => {
            if (willEdit) {
                var cidade = $("#nome_cidade_editado").val();
                //var abreviacao = $("#estado_cidade_editada").val();
                var abreviacao = $("#abreviacao_estado_editado").val();

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

    $("#btn_voltar_edicao_cidade").on('click', function(){
        $("#form_edita_cidade").slideUp('slow');
        document.getElementById("form_consultar_cidades").reset();  

    })

    /*EXCLUI CIDADE*/
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
                var cidadePesquisada = $("#consultar_cidade").val();
                var indexCidade = cidades.indexOf(cidadePesquisada);
                cidades.splice(indexCidade,1);
                $("#form_edita_cidade").slideUp('slow');
                $("#card_cidades_cadastradas").slideUp('slow');
                document.getElementById("form_consultar_cidades").reset();  
                console.log(cidades);
              swal("Poof! Cidade excluída", {
                icon: "success",
              });
            } else {
              swal("Ufa! Essa foi por pouco. Você não excluiu nada.");
            }
        });
    })
});
