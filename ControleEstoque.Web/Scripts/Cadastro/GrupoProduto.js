function set_dados_form(dados) {
    $('#id_cadastro').val(dados.Id);
    $('#txt_nome').val(dados.Nome);
    $('#cbx_ativo').prop('checked', dados.Ativo);
}

function set_focus_form() {
    $('#txt_nome').focus();
}

function get_dados_inclusao() {
    return {
        Id: 0,
        Nome: '',
        Ativo: true
    };
}

function get_dados_form() {
    return {
        Id: $('#id_cadastro').val(),
        Nome: $('#txt_nome').val(),
        Ativo: $('#cbx_ativo').prop('checked')
    };
}

function preencher_linha_grid(param, linha) {
    linha
        .eq(0).html(param.Nome).end()
        .eq(1).html(param.Ativo ? 'SIM' : 'NÃO');
}

﻿function marcar_ordenacao_campo(coluna) {
    var ordem_crescente = true,
        ordem = coluna.find('i');

    if (ordem.length > 0) {
        ordem_crescente = ordem.hasClass('glyphicon-arrow-down');
        if (ordem_crescente) {
            ordem.removeClass('glyphicon-arrow-down');
            ordem.addClass('glyphicon glyphicon-arrow-up');
        }
        else {
            ordem.removeClass('glyphicon-arrow-up');
            ordem.addClass('glyphicon-arrow-down');
        }
    }
    else {
        $('.coluna-ordenacao i').remove();
        coluna.append('&nbsp;<i class="glyphicon glyphicon-arrow-down" style="color: #000000"></i>');
    }
}


$(document).ready(function () {
    var grid = $('#grid_cadastro > tbody');
    for (var i = 0; i < linhas.length; i++) {
        grid.append(criar_linha_grid(linhas[i]));
    }
});

