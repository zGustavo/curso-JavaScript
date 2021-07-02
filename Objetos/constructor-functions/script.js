// Função construtora
function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('Honda', 3500);
const fiat = new Carro('Fiat', 5000);

fiat.marca = 'Fiat';