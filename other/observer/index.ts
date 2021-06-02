/*
 * @Author: wangchunwei 
 * @description: 观察者模式 
 * 参考：https://refactoringguru.cn/design-patterns/observer
 * @Date: 2021-06-02 16:09:38 
 * @Last Modified by: wangchunwei
 * @Last Modified time: 2021-06-02 17:52:27
 */

/**
 * 声明一个接口 Subject，用于管理订阅者中的方法
 */
interface Subject {
  // 添加一个订阅者
  attach(observer: Observer): void;
  // 移除一个订阅者
  detach(observer: Observer): void;
  // 通知事件
  notify(): void;
}

// 被订阅的主体
class ConcreteSubject implements Subject {
  // 主体的状态
  public state: number;

  // 订阅者列表
  private observers: Observer[] = [];

  // 添加订阅者
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('《亲热天堂》公告：读者已存在');
    }

    console.log('《亲热天堂》公告：新增一名读者：', observer.name)
    this.observers.push(observer);
  }

  // 移除订阅者
  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('《亲热天堂》公告：没有找到该读者');
    }

    this.observers.splice(observerIndex, 1);
    console.log('《亲热天堂》公告：移除读者', observer.name);
  }

  // 在每个订阅者中触发更新
  public notify(): void {
    console.log('《亲热天堂》公告：通知所有读者');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  // 业务逻辑代码
  public someBusinessLogic(): void {
    console.log('《亲热天堂》公告：正在努力写稿...');
    this.state = Math.floor(Math.random() * (10 + 1));
    
    console.log('《亲热天堂》公告：最新一期更新啦！：', this.state);
    this.notify();
  }
}

// 声明一个观察者接口
interface Observer {
  name: string;
  update(subject: Subject): void;
}

class ObserverA implements Observer {
  public name = '卡卡西';
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log('订阅人——卡卡西：收到更新，🤩好刺激...');
    }
  }
}

class ObserverB implements Observer {
  public name = '自来也';
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log('订阅人--自来也：收到更新，😯本期好无聊...');
    }
  }
}

/**
 * 具体使用 
 */ 
const subject = new ConcreteSubject();

const observer1 = new ObserverA();
subject.attach(observer1);

const observer2 = new ObserverB();
subject.attach(observer2);

subject.someBusinessLogic();

subject.detach(observer2);
subject.someBusinessLogic();

// 输出:
// 《亲热天堂》公告：新增一名读者： 卡卡西
// 《亲热天堂》公告：新增一名读者： 自来也
// 《亲热天堂》公告：正在努力写稿...
// 《亲热天堂》公告：最新一期更新啦！： 10
// 《亲热天堂》公告：通知所有读者
// 订阅人——卡卡西：收到更新，🤩好刺激...
// 订阅人--自来也：收到更新，😯本期好无聊...
// 《亲热天堂》公告：移除读者 自来也
// 《亲热天堂》公告：正在努力写稿...
// 《亲热天堂》公告：最新一期更新啦！： 10
// 《亲热天堂》公告：通知所有读者
// 订阅人——卡卡西：收到更新，🤩好刺激...