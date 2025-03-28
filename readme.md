## OpenAPI Spec

The OpenAPI Specification (OAS) is a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of a service without access to source code, additional documentation, or network traffic inspection. 
- When properly defined via OpenAPI, a consumer can understand and interact with the remote service with minimal implementation logic.

uses   : 

1. Auto generate documentation pages:
- swagger : 
  - npm install swagger-ui-express
  - npm i --save-dev @types/swagger-ui-express
2. Auto generate clients in various languages (Java, JS, Go…)
2. Let the world look at your API routes shape without actually opening your code
4. Let AIs know how to hit your APIs in a single file, without sharing your code with the AI