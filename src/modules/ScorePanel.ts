class ScorePanel{
  //对分数和等数进行初始化
  score = 0
  level = 1

  scoreEle: HTMLElement
  levelEle: HTMLElement
  //设置一个变量多少分升级
  upScore: number
  //设置一个变量限制等级
  maxLevel:number
  constructor(upScore:number=10,maxLevel:number=10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.upScore = upScore
    this.maxLevel = maxLevel
  }
  //加分的方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
    
  }
  //升级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level +''
    }
  }



}

export default ScorePanel