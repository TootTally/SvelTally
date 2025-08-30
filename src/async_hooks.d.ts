
declare module 'async_hooks' {
  export class AsyncLocalStorage<T = any> {
    getStore(): T | undefined;
    run<R>(store: T, callback: () => R): R;
    run<R, TArgs extends any[]>(store: T, callback: (...args: TArgs) => R, ...args: TArgs): R;
  }
}
