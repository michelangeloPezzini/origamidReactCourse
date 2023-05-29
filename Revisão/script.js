//Objetos
const pessoa = {
  nome: 'Mike',
};

//arrow function

const upperCase = (str) => {
  return str.toUpperCase();
};

//desestruturação

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

document.documentElement.addEventListener('mousemove', handleMouseMove);

const frutas = ['Banana', 'Uva'];
const [fruta1, fruta2] = frutas;
// fruta1 = banana
// fruta2 = Uva

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, area] = useQuadrado;

//rest e spreed
function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList('Google', 'André', 'Pedro', 'João');

//map and filter

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosProdutos = precos.filter((p) => p.includes('R$'));

const precoNumeros = precosProdutos.map((preco) =>
  Number(preco.replace('R$', '')),
);

console.log(precoNumeros);
