
class Food{
  element: HTMLElement
  
  constructor() {
    this.element = document.getElementById('food')!

  }

  //获取食物的坐标
  get X() {
   return  this.element.offsetLeft 
  }

  get Y() {
    return this.element.offsetTop
  }

  //修改食物的位置
  change() {
    let setup = Math.round(Math.random() * 29) * 10 
    this.element.style.left = setup + 'px'
    this.element.style.top = setup + 'px'

  }

}

export default Food