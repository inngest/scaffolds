import type { Args } from "./types";

export async function run({ event, actions }: Args) {
  // Your logic goes here.
  return event.name;
}
