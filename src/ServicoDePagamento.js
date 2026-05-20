export default class ServicoDePagamento {
#pagamentos

    constructor() {
        this.#pagamentos = [];   
    }

    realizarPagamento(codigoDeBarras, empresa, valor) {              

        this.#pagamentos.push({
            codigoDeBarras: codigoDeBarras,
            empresa: empresa,
            valor: valor,
            categoria: this.definirCategoria(valor)
        });

    }

    consultarUltimoPagamento() {    
        return this.#pagamentos.at(-1);
    }


    definirCategoria(valor){

        let categoria = 'Padrão';

        if (valor > 100.00){

            categoria = "Cara";
        }
        return categoria;

    }

}