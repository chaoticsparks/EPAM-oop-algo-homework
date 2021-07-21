import { JobsPriorityQueue } from './JobsPriorityQueue';


export class JobsRunner {
  constructor(private jobsPriorityQueue: JobsPriorityQueue) {}

  run() {
    while (this.jobsPriorityQueue.size() > 0) {
      this.jobsPriorityQueue.pop().callback();
    }
  }
}
