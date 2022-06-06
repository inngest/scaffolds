{{ EventTypes "typescript" }}

export type Args = {
  event: EventTriggers;
  steps: {
    [clientID: string]: any;
  };
};
