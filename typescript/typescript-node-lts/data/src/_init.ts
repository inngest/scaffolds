import type { EventTriggers } from "./types";
import { run } from "./index";

type Context = {
  event: EventTriggers;
  steps: {
    [clientID: string]: any;
  };
};

/**
 * Init initializes the context for running the function.  This calls
 * start() when
 */
async function init() {
  let context: Context | undefined;

  // We pass the event in as an argument to the node function.  Running
  // npx ts-node "./foo.bar" means we have 2 arguments prior to the event.
  // We'll also be adding stdin and lambda compatibility soon.
  context = JSON.parse(process.argv[2]);

  if (!context) {
    throw new Error("unable to parse context");
  }

  const result = await run(context);
  return result;
}

init()
  .then(body => {
    if (typeof body === "string") {
      console.log(JSON.stringify({ body }));
      return;
    }
    console.log(JSON.stringify(body))
  })
  .catch(e => {
    // TODO: Log error and stack trace.
    console.log(JSON.stringify({ error: e, status: 500 }))
    process.exit(1);
  });
