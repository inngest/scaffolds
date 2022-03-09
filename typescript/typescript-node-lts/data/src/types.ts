
export type InngestEvent = {
  name: string;
  data: { [key: string]: any },
  user?: { [key: string]: any },
  v?: string
  ts: number
};

export type Args = {
  event: InngestEvent;
  actions: {
    [clientID: string]: any
  };
};
