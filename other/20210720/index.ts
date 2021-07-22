/**
 * TODO 实现 PickPromise，能够获取泛型的类型，例如
 * type A = Promise<number>
 * type B = PickPromise<A> // number
 */ 
type PickPromise<T extends Promise<any>> = T extends Promise<infer K> ? K : T

type A = Promise<string>

type B = PickPromise<A>

const num: B = '123';

console.log(num);