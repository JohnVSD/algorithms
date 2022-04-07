// 缓动算法
const tween = {
  linear: function(t, b, c, d) {
    return c*t/d + b;
  },
  easeIn: function(t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  strongEaseIn: function(t, b, c, d) {
    return c * ( t /= d ) * t * t * t * t + b;
  },
  strongEaseOut: function(t, b, c, d) {
    return c * ( ( t = t / d - 1) * t * t * t * t + 1) + b;
  },
  sineaseIn: function(t, b, c, d) {
    return c * ( t /= d) * t * t + b; 
  },
  sineaseOut: function(t, b, c, d) {
    return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
  }
}

class Animate {
  constructor (dom) {
    this.dom = dom;
    this.startTime = 0;
    this.startPos = 0;
    this.endPos = 0;
    this.propertyName = null;
    this.easing = null;
    this.duration = null;
  };

  start( propertyName, endPos, duration, easing ) {
    this.startTime = Date.now(); // 动画启动时间
    this.startPos = this.dom.getBoundingClientRect()[ propertyName ]; // dom 节点初始位置
    this.propertyName = propertyName; // dom 节点需要被改变的 CSS 属性名
    this.endPos = endPos; // dom 节点目标位置 
    this.duration = duration; // 动画持续事件 
    this.easing = tween[ easing ]; // 缓动算法

    const timeId = setInterval(() => {
      if (this.step() === false) {
        clearInterval( timeId );
      }
    }, 19)
  }

  // 此方法代表小球运动的每一帧要做的事情
  step() {
    const t = Date.now();
    // 如果当前时间大于动画开始时间加上动画持续时间之和，说明动画已经结束
    if (t >= this.startTime + this.duration) {
      // 此时要修正小球的位置
      this.update(this.endPos); // 更新小球的 CSS 属性值
      return false;
    }

    const pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
    this.update( pos );
  }

  update( pos ) {
    this.dom.style[this.propertyName] = pos + 'px';
  }
}

