function consultaCep() {
    /*
    $(".barra-progresso").show();
     */
    let cep = document.getElementById("number_cep").value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url)
    $.ajax({
        url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#cep").html(response.cep);
            $("#bairro").html(response.bairro);
            $("#ddd").html(response.ddd);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".cep").show();
            /*
            $(".barra-progresso").hide();
            */
        }
    })
}

/*
$(function () {
    $(".cep").hide();
    $(".barra-progresso").hide();
});
  */