        var array= [];
	var n;
	function casuali() {
		n=(document.getElementById("numero").value);
		if (n>0 && n<=50) {
			
			for (i=0; i<n; i++) {
				num=Math.round(Math.random()*50+1);
                                array.push(num);
				
			}
			document.getElementById("stampa").innerHTML ="Numeri generati casualmente. " ;
		} else 
			document.getElementById("stampa").innerHTML ="Inserisci un numero maggiore di 0 e inferiore a 50";
	};
	function stampa() {
	str = "";
            for (i=0; i<n; i++) {
		if (i>0)
		    	str+=", ";	
			str+=array[i];
		}
		document.getElementById("stampa").innerHTML ="Vettore: " + str;    

	};
	function ordinamento() {
	array.sort(function(a,b){return a-b;});
	str = "";
            for (i=0; i<n; i++) {
		if (i>0)
		    	str+=", ";	
			str+=array[i];
		}
		document.getElementById("stampa").innerHTML ="Vettore: " + str;    

}         
 