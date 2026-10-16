const jokes = [
  { emoji: '🧠', title: 'Pensamento aleatório do dia', text: 'Se os pinguins têm joelhos, por que eles andam como se estivessem atrasados para uma reunião?' },
  { emoji: '🐢', title: 'Uma tartaruga com pressa', text: 'Imagina uma tartaruga falando “tô chegando” e você só vê ela na semana que vem.' },
  { emoji: '🍞', title: 'O pão filósofo', text: 'Se o pão cai com a manteiga pra baixo, será que ele só está cansado de sempre ficar por cima?' },
  { emoji: '🦆', title: 'Notícia urgente', text: 'Um pato entra numa farmácia e pergunta: “Tem pomada?” A atendente: “Tem.” O pato: “Então passa no meu nome.”' },
  { emoji: '🦖', title: 'Problemas modernos', text: 'O dinossauro não foi extinto. Só ficou sem bateria e ninguém achou o carregador certo.' },
  { emoji: '🐈', title: 'Gato trabalhando', text: 'Meu gato não faz nada o dia inteiro e ainda olha pra mim como se eu estivesse decepcionando a equipe.' },
  { emoji: '🧦', title: 'Mistério sem solução', text: 'A máquina de lavar não perde meias. Ela cobra um pedágio têxtil.' },
  { emoji: '🥔', title: 'Autoestima da batata', text: 'A batata nunca se acha melhor que ninguém. Ela sabe que, no fundo, todo mundo pode virar purê.' },
  { emoji: '🐸', title: 'Conselho do sapo', text: 'Se a vida te der limões, faz uma limonada. Se te der um brejo, parabéns: você é um sapo.' },
  { emoji: '🪑', title: 'Cadeira dramática', text: 'A cadeira disse que precisava de espaço. Agora ela está de costas pra mesa.' },
  { emoji: '🦥', title: 'Produtividade máxima', text: 'Hoje eu ia conquistar o mundo, mas aí sentei um minutinho. O mundo continua aí amanhã.' },
  { emoji: '🧀', title: 'Queijo motivacional', text: 'Você consegue! Acredite no seu potencial! Até o queijo passa por fases e ainda termina ralado.' },
  { emoji: '🛸', title: 'Teoria da conspiração', text: 'E se os extraterrestres já vieram à Terra, viram o preço do aluguel e foram embora?' },
  { emoji: '🐝', title: 'Abelha ocupada', text: 'A abelha não usa agenda. Ela só vai zumbindo de compromisso em compromisso.' },
  { emoji: '🧍', title: 'Modo econômico', text: 'Às vezes eu fico parado olhando pro nada. Não é reflexão, é a tela de carregamento da pessoa.' },
  { emoji: '🍕', title: 'Matemática aplicada', text: 'Pizza redonda na caixa quadrada cortada em triângulos. A geometria claramente estava com fome.' }
];

const compliments = [
  'Você tem uma energia de quem encontra dinheiro no bolso de uma calça antiga. Isso é muito bom.',
  'Parabéns por existir e não ser uma impressora com erro de conexão.',
  'Você merece um dia tão bom quanto achar uma nota esquecida na mochila.',
  'Seu potencial é enorme. Tipo a coragem de abrir a câmera frontal sem se preparar.',
  'Você chegou até aqui. Já está indo melhor que meu plano de dormir cedo.',
  'Você é uma pessoa única. Igual a todo mundo, mas numa edição limitada.',
  'Se esforço fosse Wi-Fi, tomara que hoje você esteja com sinal cheio.',
  'Lembrete amigável: até o celular fica em 1% e ainda tenta continuar. Mas você pode carregar também, viu?',
  'Você merece um lanchinho gostoso e zero mensagens começando com “precisamos conversar”.',
  'Seu cérebro faz coisas incríveis. Por exemplo, lembra de uma vergonha de 2017 às 3 da manhã.'
];

const jokeEmoji = document.getElementById('jokeEmoji');
const jokeTitle = document.getElementById('jokeTitle');
const jokeText = document.getElementById('jokeText');
const jokeCount = document.getElementById('jokeCount');
const nextButton = document.getElementById('nextButton');
const complimentButton = document.getElementById('complimentButton');
const toast = document.getElementById('toast');

let current = 0;
let complimentIndex = -1;

nextButton.addEventListener('click', () => {
  current = (current + 1) % jokes.length;
  const joke = jokes[current];
  jokeEmoji.textContent = joke.emoji;
  jokeTitle.textContent = joke.title;
  jokeText.textContent = joke.text;
  jokeCount.textContent = `#${String(current + 1).padStart(3, '0')}`;
  jokeEmoji.style.animation = 'none';
  void jokeEmoji.offsetWidth;
  jokeEmoji.style.animation = '';
  nextButton.innerHTML = current === jokes.length - 1
    ? 'Voltar pro começo <span>↻</span>'
    : 'Quero mais besteira <span>↗</span>';
  makeBurst();
});

complimentButton.addEventListener('click', () => {
  complimentIndex = (complimentIndex + 1) % compliments.length;
  toast.textContent = `💬 ${compliments[complimentIndex]}`;
  toast.classList.add('show');
  makeBurst();
  window.clearTimeout(window.__toastTimer);
  window.__toastTimer = window.setTimeout(() => toast.classList.remove('show'), 4200);
});

function makeBurst() {
  const symbols = ['✦', '☻', '★', '!', '✧', '☺'];
  for (let i = 0; i < 12; i++) {
    const bit = document.createElement('span');
    bit.className = 'burst';
    bit.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    bit.style.left = `${42 + Math.random() * 16}%`;
    bit.style.top = `${38 + Math.random() * 18}%`;
    bit.style.setProperty('--x', `${(Math.random() - .5) * 230}px`);
    bit.style.setProperty('--y', `${(Math.random() - .5) * 180 - 25}px`);
    document.body.appendChild(bit);
    window.setTimeout(() => bit.remove(), 1100);
  }
}
