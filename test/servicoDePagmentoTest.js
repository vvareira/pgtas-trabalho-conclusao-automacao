import ServicoDepagamento from "../src/ServicoDePagamento.js";
import assert from 'node:assert';


describe('Testes da classe ServicoDePagamento', () => {
    it('Validar que pagamento no valor de R$ 99.99 é realizado com sucesso e retorna categoria padrão', () => {
        //Arrange
        const servicoDePagamento = new ServicoDepagamento();

        //Act
        servicoDePagamento.realizarPagamento('0987-7656-8888', 'Claro', 99.99);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '0987-7656-8888');
        assert.equal(ultimoPagamento.empresa, 'Claro');
        assert.equal(ultimoPagamento.valor, 99.99);
        assert.equal(ultimoPagamento.categoria, 'Padrão');

    });

    it('Validar que pagamento no valor de R$ 100.00 é realizado com sucesso e retorna categoria padrão', () => {
        //Arrange
        const servicoDePagamento = new ServicoDepagamento();

        //Act
        servicoDePagamento.realizarPagamento('0987-7656-3475', 'Samar', 100.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 100.00);
        assert.equal(ultimoPagamento.categoria, 'Padrão');

    });

    it('Validar que pagamento no valor de R$ 100.01 é realizado com sucesso e retorna categoria cara', () =>{

         //Arrange
        const servicoDePagamento = new ServicoDepagamento();

        //Act
        servicoDePagamento.realizarPagamento('8901-7656-3475', 'Vivo', 100.01);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '8901-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Vivo');
        assert.equal(ultimoPagamento.valor, 100.01);
        assert.equal(ultimoPagamento.categoria, 'Cara');

    });
});