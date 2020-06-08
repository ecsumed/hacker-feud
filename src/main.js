/*
  (C) 2020 David Lettier
  lettier.com

  src #1: https://insights.stackoverflow.com/survey/2020#
  src #2: https://research.hackerrank.com/developer-skills/2020
  src #3: https://research.hackerrank.com/developer-skills/2019
  src #4: https://insights.stackoverflow.com/survey/2019
*/

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    teamNames: ["File-Not-Founders", "Merge-Conflicters"],
    qas: [
      {
        question: "Name something you don't want to hear when calling IT help.",
        answers: [
          {
            text: "Reboot",
            money: 17
          },
          {
            text: "I don't know",
            money: 11
          },
          {
            text: "What did you do",
            money: 6
          },
          {
            text: "Is your system backed up?",
            money: 4
          }
        ]
      },
      {
        question: "Name a collaboration tool used by developers.",
        answers: [
          {
            text: "Github",
            money: 17
          },
          {
            text: "Slack",
            money: 11
          },
          {
            text: "Jira",
            money: 6
          },
          {
            text: "Google Suite",
            money: 4
          },
          {
            text: "Confluence",
            money: 3
          },
          {
            text: "Trello",
            money: 1
          }
        ]
      },
      {
        question: "What's something that will frustrate a developer.",
        answers: [
          {
            text: "Spaghetti code",
            money: 20
          },
          {
            text: "Everything is a priority",
            money: 15
          },
          {
            text: "Estimates treated as deadlines",
            money: 10
          },
          {
            text: "Bad documentation",
            money: 4
          },
          {
            text: "Ghost bugs",
            money: 4
          }
        ]
      },
      {
        question: "What is the most loved programming language?",
        answers: [
          {
            text: "Rust",
            money: 17
          },
          {
            text: "Typescript",
            money: 11
          },
          {
            text: "Python",
            money: 6
          },
          {
            text: "Kotlin",
            money: 4
          },
          {
            text: "Go",
            money: 3
          },
          {
            text: "Julia",
            money: 1
          }
        ]
      },
      {
        question: "What is a reason for a bug in production that you have faced?",
        answers: [
          {
            text: "Untested code",
            money: 17
          },
          {
            text: "Wiped out database",
            money: 11
          },
          {
            text: "Shut down production servers",
            money: 6
          },
          {
            text: "Firewall/ssh access",
            money: 4
          }
        ]
      },
      {
        question: "What's the most popular IDE for DevOps/SRE professionals.",
        answers: [
          {
            text: "VSC",
            money: 17
          },
          {
            text: "Vim",
            money: 11
          },
          {
            text: "IntelliJ",
            money: 6
          },
          {
            text: "Notepad++",
            money: 4
          },
          {
            text: "Sublime",
            money: 3
          }
        ]
      },
      {
        question: "What do you do when you get stuck",
        answers: [
          {
            text: "Visit Stackoverflow",
            money: 17
          },
          {
            text: "Do something else, then come back",
            money: 11
          },
          {
            text: "Watch helpful videos/tutorials",
            money: 6
          },
          {
            text: "Call friend/co-worker",
            money: 4
          },
          {
            text: "Physical activity",
            money: 3
          },
          {
            text: "Play Games",
            money: 1
          }
        ]
      }
    ]
  }
});

export default app;
