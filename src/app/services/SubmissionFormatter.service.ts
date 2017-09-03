/**
 * Created by LonelyEnvoy on 2017/8/31.
 */

import { Injectable } from '@angular/core';
import { Submission } from '../models/submission.model';
import { FormattedSubmission } from '../models/FormattedSubmission.model';

@Injectable()
export class SubmissionFormatter {
  format(submission: Submission): FormattedSubmission {
    let isTesting = submission.verdict.toUpperCase() === 'TESTING';
    return {
      id: submission.id.toString(),
      createTime: new Date(submission.creationTimeSeconds * 1000).toTimeString().substr(0, 8),
      problemContestId: submission.problem.contestId.toString(),
      problemIndex: submission.problem.index,
      problemName: submission.problem.name,
      verdict: (submission.verdict && submission.verdict.toUpperCase() === 'OK') ? 'ACCEPTED' : submission.verdict,
      programmingLanguage: submission.programmingLanguage,
      timeConsumed: isTesting ? '-' : submission.timeConsumedMillis.toString() + ' ms',
      memoryConsumed: isTesting ? '-' : (submission.memoryConsumedBytes / 1024).toString() + ' KB',
      passedTestCount: isTesting ? '-' : submission.passedTestCount.toString(),
      problemTags: submission.problem.tags.join(', '),
      submitter: submission.author.members[0] ? submission.author.members[0].handle : ''
    }
  }

  getHeader(): string[] {
    return [
      'Id',
      'Creation Time',
      'No.',
      '',
      'Problem Name',
      'Verdict',
      'Language',
      'Time',
      'Memory',
      'Tests',
      'Problem Tags',
      'Submitter'
    ]
  }
}
