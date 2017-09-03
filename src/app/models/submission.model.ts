/**
 * Created by LonelyEnvoy on 2017/8/29.
 */

import { Problem } from './problem.model';
import { Party } from './party.model';

export class Submission {
  id: number;
  contestId: number;
  creationTimeSeconds: number;
  relativeTimeSeconds: number;
  problem: Problem;
  author: Party;
  programmingLanguage: string;
  verdict: string;
  testset: string;
  passedTestCount: number;
  timeConsumedMillis: number;
  memoryConsumedBytes: number;
}
