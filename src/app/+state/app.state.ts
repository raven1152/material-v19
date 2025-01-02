export interface AppState {
  isBusy: boolean,
  boolValue: boolean,
  dateValue?: string,
}

export const appState: AppState = {
  isBusy: false,
  boolValue: false,
  dateValue: undefined,
}
