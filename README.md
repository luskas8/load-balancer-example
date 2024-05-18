# Load Balancer Example

This repository contains a simple implementation of a load balancer to demonstrate the basic concepts of load balancing between multiple servers. The example is written in [javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) and is designed to help me understand how a load balancer distributes traffic among a set of servers to optimize resource use, in a futere could contain methods to maximize throughput, reduce response time, and ensure fault tolerance.

## Features

- **Simple Load Balancer Logic**: Distributes incoming network traffic across multiple backend servers.
- **Health Check System**: Monitors the health of the backend servers to ensure traffic is only routed to operational servers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software is [docker](https://www.docker.com) and [nodejs](https://nodejs.org).

We used de LTS version, current is 20.13.1

## Installing

A step-by-step series of examples that tell you how to get a development env running:

```bash
git clone https://github.com/luskas8/load-balancer-example.git
cd load-balancer-example
npm install
```

Them you can run the docker with the following code

```bash
docker-compose up
```

If you want to run the container in backgroud, you can add `-d` flag at the command above.