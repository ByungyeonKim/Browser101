'use strict';
import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(3)
  .build();
// 생성자에 인자가 3개 이상 넘어가는 경우에는 이런식의 코딩은 실수할 가능성도 있고 좋지 않다.
// const game = new Game(20, 20, 20);
game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case 'cancel':
      message = '다시하기 ❓';
      break;
    case 'win':
      message = '이겼어요! 🏆';
      break;
    case 'lose':
      message = '졌어요 🙈';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
