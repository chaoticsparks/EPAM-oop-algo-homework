import { Job, JobsPriorityQueue } from './src/JobsPriorityQueue';
import { JobsRunner } from './src/JobsRunner';


const jobsPriorityQueue = new JobsPriorityQueue();

const jobsArray = Array.from({ length: 10000 }, (arr, i): Job => {
  const priority = Math.floor(Math.random() * 10000);
  return {
    priority,
    callback: () => console.log(`Task #${i + 1} with priority ${priority} executed`)
  };
});

for (let job of jobsArray) {
  jobsPriorityQueue.push(job);
}

const jobRunner = new JobsRunner(jobsPriorityQueue);

jobRunner.run();
