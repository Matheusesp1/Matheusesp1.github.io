var btn;
var capital;
var juros;
var saldo;
var temp;
var cont;
var soma;
var borrachinha;

function init(){
	btn = document.getElementById("btn_calc");
	btn.addEventListener("click", delga);
	btn.addEventListener("click", test );
}
function delga(){
	
	borrachinha = document.getElementById("pelotempo");
	borrachinha.innerHTML='';
	
	
}

function test(){

	capital = Number(document.getElementById("CapIni").value);
	juros = Number(document.getElementById("Juros").value);
	temp = Number(document.getElementById("Time").value);
	if(Number.isNaN(capital) || Number.isNaN(juros) || Number.isNaN(temp)){
		var rr = document.getElementById("resultado");
		rr.innerHTML = "Valor(es) Inválido(os), favor corrigir!";
		
	}
	else{
		calcula();
	}
}







function calcula(){
	for(cont= 1;cont <= temp;cont++){
		saldo = capital*Math.pow(1+(juros/100),cont);
		soma = document.getElementById("pelotempo");
		var lim = saldo.toFixed(4);
		soma.innerHTML += "Capital durante o "+cont+"°" +"Mês é: "+lim+"." + "<br>";
		document.body.appendChild(soma);
	}

	saldo = capital*Math.pow(1+(juros/100),tempo);
	var r = document.getElementById("resultado");
	r.innerHTML = "Seu Saldo:" + lim;

}
init();
