<h1 align="center">A Comprehensive Guide to Fastify, Docker, and CI with StepCI 👋</h1>

![stepci-demo](https://socialify.git.ci/jellydn/stepci-demo/image?description=1&issues=1&language=1&logo=https%3A%2F%2Fstepci.com%2Flogo.svg&name=1&owner=1&pattern=Solid&pulls=1&stargazers=1&theme=Auto)

## Overview

Get up and running with a [Fastify](https://fastify.dev/docs/latest/Reference/TypeScript/) application, integrated with continuous testing via [Step CI](https://stepci.com/#get-started).

[![IT Man - A Comprehensive Guide to Fastify, Bun, and CI with StepCI [Vietnamese]](https://i.ytimg.com/vi/pgofbfmxMto/hqdefault.jpg)](https://www.youtube.com/watch?v=pgofbfmxMto)

## Prerequisites

- [Bun](https://bun.sh/) installed on your system.
- [antfu/ni](https://github.com/antfu/ni) 💡 Use the right package manager.

## Getting Started

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
   ![Demo](https://i.gyazo.com/10b1e6a520bac9044e4db5d5faacebb4.gif)

## Testing with Step CI

Choose from various methods to run your tests: Node, Docker, or GitHub Actions.

### Node

```bash
npx stepci run workflow.yml
```

### Docker

```bash
docker run \
       -v "$(pwd)"/tests:/tests \
       ghcr.io/stepci/stepci \
       tests/workflow.yml
```

### GitHub Actions

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

## Deployment with Koyeb

Easily deploy your Fastify application on the serverless platform [Koyeb](https://www.koyeb.com/docs/deploy/fastify).

## Additional Resources

- [Step CI Documentation](https://docs.stepci.com/guides/concepts.html)
- [Fastify TypeScript Documentation](https://fastify.dev/docs/latest/Reference/TypeScript/)
- [Bun 1.0 Release Blog](https://bun.sh/blog/bun-v1.0)

## Show Your Support

If this guide has been helpful, please give it a ⭐️.
