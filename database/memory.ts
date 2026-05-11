export class Memory {
  private store: Record<string, any> = {};

  save(key: string, value: any) {
    this.store[key] = value;
  }

  get(key: string) {
    return this.store[key];
  }

  all() {
    return this.store;
  }
}
