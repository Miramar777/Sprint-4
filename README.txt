# Sprint 4 IT Academy | Web Application for Displaying Jokes

## Introduction

A company in Barcelona is conducting an experiment to measure the impact of humor and fun on employee productivity. They have requested a web application that displays jokes to employees before they start their workday. You will be responsible for developing the core of this application, which includes fetching and displaying jokes from an API. This sprint lasts two weeks.

<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/Miramar777/Sprint-4.git
```

2. Unlink your repo from the itacademy repository
```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>


## Instructions

Initialize the project:

npm init -y

Install TypeScript and other dependencies:

npm install typescript ts-node @types/node --save-dev

Create 'tsconfig.json':

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}

Project Structure
Suggested layout:

Sprint-4/
├── src/
│   ├── index.ts
│   ├── api.ts
│   └── ...
├── public/
│   ├── index.html
│   └── styles.css
├── tsconfig.json
├── package.json
└── README.txt

API Information
Consume jokes from a free API without requiring an API key.

Random Dad Joke API Endpoint: https://icanhazdadjoke.com/
Include the following header to get data in JSON format:
'Accept': 'application/json'


Development Guidelines

Implement  ES6 methods. Avoid using for loops.
Use TypeScript for all development.
Understand and handle asynchronous JavaScript and API calls.

Repository Link

Access the project repository on GitHub: https://github.com/Miramar777/Sprint-4.git

By following these guidelines, you'll create a functional web app that effectively demonstrates your skills in TypeScript and API integration.



