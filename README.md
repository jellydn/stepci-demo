<h1 align="center">StepCI Demo for E2E Testing 👋</h1>

## Overview

This repository provides a guide to set up continuous integration for a [Fastify](https://fastify.dev/docs/latest/Reference/TypeScript/) using [Step CI](https://stepci.com/#get-started).

## Prerequisites

- [Bun](https://bun.sh/)

## Usage

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jellydn/stepci-demo.git
   ```

2. **Install Dependencies**

   ```bash
   bun install
   ```

3. **Run Tests Locally**

   ```bash
   bun run start
   bun run test:e2e
   ```

   [![Demo](https://i.gyazo.com/10b1e6a520bac9044e4db5d5faacebb4.gif)](https://gyazo.com/10b1e6a520bac9044e4db5d5faacebb4)

## Get Started

Run your tests using either Node, Docker, or GitHub Actions.

### Node

- **Run Workflow via CLI**
  ```bash
  npx stepci run workflow.yml
  ```

### Docker

- **Run Workflow via Docker**
  ```bash
  docker run \
         -v "$(pwd)"/tests:/tests \
         ghcr.io/stepci/stepci \
         tests/workflow.yml
  ```

### GitHub Actions

- **Automated Workflow on Push**
  ```yaml
  on: [push]
  jobs:
    api_test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Step CI Action
          uses: stepci/stepci@main
          with:
            workflow: "workflow.yml"
  ```

## Resources

- [Step CI Documentation](https://docs.stepci.com/guides/concepts.html)

## Show Your Support

Please give this project a ⭐️ if it has helped you.
