# Use Bun-specific base image
FROM oven/bun

# Set working directory
WORKDIR /usr/src/app

# Copy package files and bun.lockb
COPY package*.json bun.lockb ./

# Install dependencies using bun
RUN bun install

# Copy the rest of the source code
COPY . .

# Set environment to production
ENV NODE_ENV production

# Command to run the application
CMD [ "bun", "start:prod" ]
