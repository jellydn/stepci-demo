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
       -v "$(pwd)"/.npmrc:/root/.npmrc \
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
- [How to run GitHub Action locally with act.](https://github.com/jellydn/github-action-locally)
- [![IT Man - Running GitHub Actions Locally: A Complete Guide with act [Vietnamese]](https://i.ytimg.com/vi/nklNK13G7u4/hqdefault.jpg)](https://www.youtube.com/watch?v=nklNK13G7u4)
- [![IT Man - Understanding and Preventing Floating Promises in JavaScript | Tutorial [Vietnamese]](https://i.ytimg.com/vi/hF3yl4iOlwA/hqdefault.jpg)](https://www.youtube.com/watch?v=hF3yl4iOlwA)

## Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

If this guide has been helpful, please give it a ⭐️.

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)
