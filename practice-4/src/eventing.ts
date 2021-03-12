type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  subscribe = (event: string, callback: Callback): void => {
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  };

  dispatch = (event: string): void => {
    if (!Array.isArray(this.events[event])) {
      return;
    }
    this.events[event].forEach((callback) => callback());
  };
}
