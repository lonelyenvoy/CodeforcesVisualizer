/**
 * Created by LonelyEnvoy on 2017/8/29.
 */

import { Member } from "./member.model";

export class Party {
  contestId: number;
  members: Member;
  participantType: string;
  teamId: number;
  teamName: string;
  ghost: boolean;
  room: number;
  startTimeSeconds: number;
}

