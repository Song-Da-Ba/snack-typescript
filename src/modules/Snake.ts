class Snake {
  //蛇的容器
  element: HTMLElement
  //蛇头
  head: HTMLElement
  //蛇身
  bodies: HTMLCollection


  constructor() {
    this.head = document.querySelector('#snake > div')!
    this.element = document.getElementById('snake')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  //获取蛇头的位置
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  //设置舌头的位置的公共代码
  //参数：direction --- 当前坐标的值  value --- 要修改的坐标的值 type --- x轴还是y轴
  location(direction: number, value: number, type: boolean) {

    if (direction === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    if (type) {
      if (direction < value) {
        value = direction - 10
      } else {
        value = direction + 10
      }
    }

    //移动身体
    this.moveBody()
    return value

  }
  //设置蛇头的位置
  set X(value: number) {
    let bodiesLeft = this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value
    let result = this.location(this.X, value, bodiesLeft)
    this.head.style.left = result + 'px'
    //检查身体
    this.checkBody()
    
  }
  set Y(value: number) {
    let bodiesTop = this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value
    let result = this.location(this.Y, value, bodiesTop)
    this.head.style.top = result + 'px'
    //检查身体
     this.checkBody()

  }

  //蛇增加身体的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  //身体移动的方法
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取前面身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      //把前面身体的位置赋值给当前身体的位置
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }
  }

  //检查蛇是否撞到自己的方法
  checkBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      if (this.X == (this.bodies[i] as HTMLElement).offsetLeft && this.Y == (this.bodies[i] as HTMLElement).offsetTop) {
        throw new Error('撞到自己了！')
      }
    }
  }

}

export default Snake
