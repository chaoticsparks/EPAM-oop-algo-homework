export interface Job {
  priority: number;
  callback: () => void;
}

export class JobsPriorityQueue {
  private maxHeap: Job[] = []
  private static readonly topNode = 0;

  size() {
    return this.maxHeap.length;
  }

  push(job: Job) {
    this.maxHeap.push(job)
    this.siftUp();
  }

  pop(): Job {
    const poppedValue = this.maxHeap[JobsPriorityQueue.topNode];
    const bottomNode = this.size() - 1;
    if (bottomNode > JobsPriorityQueue.topNode) {
      this.swapNodes(JobsPriorityQueue.topNode, bottomNode);
    }
    this.maxHeap.pop();
    this.siftDown();
    return poppedValue;
  }

  private siftUp() {
    let node = this.size() - 1;
    while (node > JobsPriorityQueue.topNode && this.hasGreaterPriority(node, JobsPriorityQueue.getParentNodeOf(node))) {
      this.swapNodes(node, JobsPriorityQueue.getParentNodeOf(node));
      node = JobsPriorityQueue.getParentNodeOf(node);
    }
  }

  private siftDown() {
    let node = JobsPriorityQueue.topNode;
    while (
      (JobsPriorityQueue.getLeftChildNodeOf(node) < this.size() && this.hasGreaterPriority(JobsPriorityQueue.getLeftChildNodeOf(node), node)) ||
      (JobsPriorityQueue.getRightChildNodeOf(node) < this.size() && this.hasGreaterPriority(JobsPriorityQueue.getRightChildNodeOf(node), node))
      ) {
      let maxChild = (JobsPriorityQueue.getRightChildNodeOf(node) < this.size() && this.hasGreaterPriority(JobsPriorityQueue.getRightChildNodeOf(node), JobsPriorityQueue.getLeftChildNodeOf(node))) ? JobsPriorityQueue.getRightChildNodeOf(node) : JobsPriorityQueue.getLeftChildNodeOf(node);
      this.swapNodes(node, maxChild);
      node = maxChild;
    }
  }

  private hasGreaterPriority(nodeA: number, nodeB: number) {
    return this.maxHeap[nodeA].priority > this.maxHeap[nodeB].priority
  }

  private static getParentNodeOf(node: number) {
    return Math.floor((node + 1) / 2) - 1;
  }

  private static getLeftChildNodeOf(node: number) {
    return node * 2 + 1
  }
  private static getRightChildNodeOf(node: number) {
    return node * 2 + 2
  }

  private swapNodes(nodeA: number, nodeB: number) {
    [this.maxHeap[nodeA], this.maxHeap[nodeB]] = [this.maxHeap[nodeB], this.maxHeap[nodeA]];
  }
}
