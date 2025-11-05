const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnnew = document.querySelector('.btn-New');
const btnroll = document.querySelector('.btn-Roll');
const btnhold = document.querySelector('.btn-Hold');

let score, currentscore, activeplayer, playing;

const reset = () => {
  score = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  dice.classList.add('hidden');
  player0El.classList.remove('player--winer');
  player1El.classList.remove('player--winer');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
const switchplayer = () => {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
reset();

btnroll.addEventListener('click', function () {
  if (playing) {
    let rand = Math.trunc(Math.random() * 6) + 1;
    if (rand != 1) {
      dice.classList.remove('hidden');
      dice.src = `dice-${rand}.png`;
      currentscore += rand;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      dice.classList.remove('hidden');
      dice.src = `dice-${rand}.png`;
      switchplayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    if (score[activeplayer] >= 100) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winer');
      dice.classList.add('hidden');
      playing = false;
    } else {
      switchplayer();
    }
  }
});

btnnew.addEventListener('click', reset);
