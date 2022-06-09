// Events format info: https://www.inngest.com/docs/event-format-and-structure
export async function run({ event }) {
  // Your logic goes here.
  return `Received "${event.name}" event - edit src/index.js to add your own code`;
}
