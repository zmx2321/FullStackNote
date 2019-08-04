var name = 'World';

(function(){
	if(typeof name === 'undefind'){
		var name = 'Jack';

		console.log('Goodbye' + name);
	} else {
		console.log('Hello' + name);
	}
})();


//Helloundefined