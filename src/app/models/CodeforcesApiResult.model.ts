/**
 * Created by LonelyEnvoy on 2017/8/31.
 */

export class CodeforcesApiResult<T> {
  status: string;
  result: T;
  comment?: string;
}
