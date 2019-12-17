const storeMap = new Map();
class StoreService {
  get<T>(key: string): T {
    return storeMap.get(key);
  }
  set<T>(key: string, value: T) {
    storeMap.set(key, value);
  }

  clearStore(k: string) {
    Array.from(storeMap.keys()).map((key) => {
      if (key.indexOf(k) === 0) {
        storeMap.delete(key);
      }
    });
  }
}

export const storeService = new StoreService();

export function storeRequest(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  if (!descriptor) {
    return;
  }
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    const a = args.map((arg) => JSON.stringify(arg)).join();
    const k = `${propertyKey}(${a})`;
    if (storeService.get(k)) {
      return Promise.resolve(storeService.get(k));
    } else {
      let result = originalMethod.apply(this, args).then((res: any) => {
        storeService.set(k, res);
        return res;
      });
      return result;
    }
  };
  descriptor.value.storeName = propertyKey;
  return descriptor;
}

export function clearRequest(service: any, clearKey: any) {
  return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const storeName: string = service[clearKey].storeName;
      if (storeName === undefined) {
        // throw '要清除的缓存方法尚未初始化';
      } else {
        storeService.clearStore(storeName);
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
