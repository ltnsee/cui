export enum GlobalEvents {
  AuthFail = 'AuthFail'
}

var eventList: { [index: string]: Array<Function> } = {};

export interface IDispatcherEvent {
  index: number;
  name: string;
}

export class Dispatcher {
  events = GlobalEvents;
  subscribe(eventName: GlobalEvents | string, eventHandler: Function, only?: boolean) {
    if (eventList[eventName] === undefined) {
      eventList[eventName] = [];
    }
    if (only === true) {
      eventList[eventName] = [eventHandler];
    } else {
      eventList[eventName].push(eventHandler);
    }
    const result: IDispatcherEvent = {
      name: eventName,
      index: eventList[eventName].length - 1
    };
    return result;
  }

  unSubscribe(event: IDispatcherEvent) {
    if (event && eventList[event.name]) {
      eventList[event.name].splice(event.index, 1);
    }
  }

  dispatch(eventName: GlobalEvents | string, ...args: any[]) {
    var myEventList = eventList[eventName];
    if (myEventList !== undefined) {
      for (let i of myEventList) {
        i.apply(this, args);
      }
    }
  }
  reset() {
    for (let k in eventList) {
      if (k) {
        eventList[k] = [];
      }
    }
  }
  get eventList() {
    return eventList;
  }
}

export class EventHelper {
  event = GlobalEvents;
  private dispatcher = new Dispatcher();
  subscribe(eventName: GlobalEvents | string, eventHandler: Function, only?: boolean) {
    return this.dispatcher.subscribe(eventName, eventHandler, only);
  }

  unSubscribe(event: IDispatcherEvent) {
    this.dispatcher.unSubscribe(event);
  }

  dispatch(eventName: GlobalEvents | string, ...args: any[]) {
    this.dispatcher.dispatch(eventName, ...args);
  }
}
const eventHelper = new EventHelper();
export default eventHelper;
