export interface AccountSettings {
  requestedOn: Date;
  completedBy: Date; //18 days + requestedOn
  isCompleted: boolean;
  completedOn: Date;
}
