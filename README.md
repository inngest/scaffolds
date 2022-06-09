# Inngest Function Scaffolds

These function scaffolds are used by the [`inngest` cli](https://github.com/inngest/inngest-cli)'s `init` command to quickly generate new functions.

To use these scaffolds, install the [`inngest` cli](https://github.com/inngest/inngest-cli) and run:

    inngest init

## Repo structure

This repo is a nested structure of `<language>/<scaffold>` which allows for different types of scaffolds for particular languages, e.g. language versions, pre-packaged dependencies, etc.

Each scaffold template has a `config.json` which tells `inngest init` how to list the scaffold and what to do with it. Each also has a `data` directory which will be created as the new function's step.

Currently, all scaffolds use the Docker runtime, so each must contain a `Dockerfile` to build it for local testing and deploying to production.

## Language requests

If you'd like to see another language in here, [chat with us on Discord](https://www.inngest.com/discord), create an issue, or create a PR.
