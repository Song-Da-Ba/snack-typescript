import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

class GameControl {
  food: Food
  snake: Snake
  scorePanel: ScorePanel
  //蛇移动的方向
  direction: string = '';
  //记录游戏是否结束
  isLive = true

  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanel = new ScorePanel()

    this.init()
  }

  //游戏初始化
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  //按下键盘的回调函数
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }

  /*
       Chrome       IE
       ArrowUp      Up
       ArrowDown    Down
       ArrowLeft    Left
       ArrowRight   Right
   */
  //蛇移动的方法
  run() {
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }
    this.check(X, Y)
    try {
      this.snake.X = X
      this.snake.Y = Y

    } catch (e: any) {
      alert(e.message + 'GAME OVER!')
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 50)
  }

  //检查蛇是否吃到了食物
  check(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl