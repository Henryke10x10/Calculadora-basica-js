function calcular(tipo, valor) {

    if(tipo === 'acao') {
        
        if (valor === 'c') {
            document.querySelector('#display').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.querySelector('#display').value += valor
        }

        if (valor === '=') {
            var valorCampo = eval(document.querySelector('#display').value)
            document.querySelector('#display').value = valorCampo
        }
        
    } else if (tipo === 'valor') {
        document.querySelector('#display').value += valor
    }
    
}