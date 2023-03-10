class Queue<ItemType> {
  private items: ItemType[] = [];

  public enqueue(item: ItemType): void {
    this.items.push(item);
  }

  public dequeue(): ItemType {
    return this.items.shift()!;
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
