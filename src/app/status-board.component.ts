/**
 * Created by LonelyEnvoy on 2017/8/29.
 */

import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import './extensions/ObservableExtension';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';

import { Submission } from './models/submission.model';
import { FormattedSubmission } from './models/FormattedSubmission.model';
import { CodeforcesApiResult } from './models/CodeforcesApiResult.model';

import { Codeforces } from './services/Codeforces.service';
import { SubmissionFormatter } from './services/SubmissionFormatter.service';

@Component({
  selector: 'status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.css']
})
export class StatusBoardComponent implements OnInit, OnDestroy {
  header: string[];
  submissions: FormattedSubmission[];
  protected submissionSubscription: Subscription;
  @Input() protected showJudgedOnly: boolean;
  @Input() protected showNormalProblemOnly: boolean;
  @Input() protected displayRows: number;
  @Input() protected requestRows: number;

  constructor(private codeforces: Codeforces, private submissionFormatter: SubmissionFormatter) {}

  ngOnInit() {
    this.header = this.submissionFormatter.getHeader();
    this.loadData();
  }

  ngOnDestroy() {
    this.submissionSubscription.unsubscribe();
  }

  protected loadData() {
    this.submissionSubscription =
      this.codeforces.getRecentStatus(this.requestRows)
      .map(raw => raw.json())
      .filter((response: CodeforcesApiResult<Submission[]>) => response.status === 'OK')
      .pluck('result')
      .map(submissions => (submissions as Submission[]).filter(submission => submission.verdict))
      .mapIf(submissions => submissions.filter(submission => submission.verdict.toLowerCase() !== 'testing'), this.showJudgedOnly)
      .mapIf(submissions => submissions.filter(submission => submission.problem.contestId < 1000), this.showNormalProblemOnly)
      .map(submissions => submissions.slice(0, this.displayRows))
      .map(submissions => submissions.map(submission => this.submissionFormatter.format(submission)))
      .subscribe(submissions => this.submissions = submissions);
  }

  protected getKeys(object: any): string[] {
    return Object.keys(object);
  }

  private test($event: MouseEvent) {
    this.loadData();
  }
}
