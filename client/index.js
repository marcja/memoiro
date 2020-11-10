// prettier-ignore
const experiment = {
  boards: [
    {
      board: [ 
        0, 1, 0, 0, 1, 
        0, 1, 0, 0, 0, 
        1, 1, 0, 0, 0, 
        0, 1, 0, 0, 0, 
        1, 0, 0, 0, 0 
      ],
      color: "#0000ff",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        0, 0, 0, 0, 0, 0, 
        0, 0, 1, 0, 1, 0, 
        1, 0, 0, 1, 1, 0, 
        0, 0, 1, 0, 1, 0, 
        1, 0, 0, 0, 1, 0, 
        0, 0, 0, 1, 0, 0 
      ],
      color: "#0000ff",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        0, 1, 0, 0, 1, 0, 
        0, 0, 0, 1, 1, 1, 
        0, 0, 1, 1, 1, 0, 
        0, 0, 0, 0, 0, 0, 
        0, 0, 1, 0, 0, 0, 
        1, 0, 0, 0, 0, 0 
      ],
      color: "#ff0000",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        1, 0, 1, 0, 0, 
        1, 0, 0, 0, 0, 
        0, 1, 0, 0, 0, 
        0, 1, 0, 0, 0, 
        1, 1, 0, 0, 0 
      ],
      color: "#ffffff",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        1, 0, 0, 0, 1, 0, 
        0, 1, 1, 0, 1, 0, 
        0, 0, 0, 0, 0, 1, 
        0, 0, 0, 1, 1, 1, 
        1, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0 
      ],
      color: "#ffffff",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        1, 0, 0, 0, 0, 0, 
        0, 0, 1, 0, 0, 0, 
        1, 0, 0, 1, 0, 0, 
        0, 0, 0, 0, 1, 1, 
        0, 1, 0, 0, 1, 1, 
        0, 0, 0, 0, 1, 0 
      ],
      color: "#00ff00",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        0, 1, 0, 0, 1, 0, 
        0, 0, 0, 1, 0, 0, 
        1, 0, 0, 1, 1, 0, 
        0, 0, 1, 0, 0, 0, 
        0, 0, 1, 0, 1, 0, 
        1, 0, 0, 0, 0, 0 
      ],
      color: "#ff0000",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        0, 1, 1, 0, 0, 
        0, 0, 0, 0, 0, 
        1, 0, 0, 0, 0, 
        0, 0, 0, 1, 1, 
        0, 0, 1, 0, 1 
      ],
      color: "#000000",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        0, 0, 1, 0, 0, 
        0, 0, 1, 0, 0, 
        0, 0, 0, 0, 1, 
        0, 0, 0, 1, 0, 
        1, 1, 0, 1, 0 
      ],
      color: "#00ff00",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        0, 1, 0, 0, 0, 
        1, 1, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        1, 0, 0, 1, 0, 
        0, 1, 1, 0, 0 
      ],
      color: "#ff0000",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        1, 0, 0, 0, 0, 
        1, 0, 1, 0, 1, 
        0, 0, 0, 0, 1, 
        1, 0, 0, 0, 0, 
        1, 0, 0, 0, 0 
      ],
      color: "#000000",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        0, 0, 0, 1, 0, 
        0, 1, 0, 0, 0, 
        0, 1, 0, 0, 0, 
        0, 1, 1, 0, 0, 
        0, 0, 0, 1, 1 
      ],
      color: "#ffffff",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        0, 1, 1, 0, 0, 
        1, 0, 1, 0, 0, 
        0, 0, 0, 0, 1, 
        0, 1, 0, 0, 0, 
        0, 0, 0, 0, 1 
      ],
      color: "#0000ff",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        0, 1, 1, 1, 0, 0, 
        1, 0, 0, 0, 1, 0, 
        0, 0, 0, 1, 0, 0, 
        0, 0, 0, 0, 0, 1, 
        1, 1, 0, 1, 0, 0, 
        0, 0, 0, 0, 0, 0 
      ],
      color: "#0000ff",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        1, 0, 0, 0, 0, 
        0, 0, 0, 1, 0, 
        0, 0, 0, 0, 0, 
        1, 1, 0, 0, 0, 
        1, 1, 1, 0, 0 
      ],
      color: "#ff0000",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        1, 0, 0, 0, 0, 0, 
        1, 1, 1, 1, 0, 0, 
        0, 0, 0, 0, 1, 0, 
        0, 0, 1, 0, 0, 0, 
        0, 0, 0, 1, 0, 0, 
        1, 0, 1, 0, 0, 0 
      ],
      color: "#000000",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        0, 0, 0, 0, 1, 
        1, 0, 0, 1, 0, 
        0, 0, 1, 1, 0, 
        0, 0, 1, 0, 0, 
        0, 1, 0, 0, 0 
      ],
      color: "#00ff00",
      count: 7,
      height: 5,
      width: 5
    },
    {
      board: [ 
        0, 0, 0, 0, 0, 0, 
        1, 0, 0, 0, 1, 1, 
        0, 1, 0, 0, 0, 0, 
        0, 1, 0, 0, 1, 0, 
        0, 0, 0, 1, 1, 1, 
        0, 0, 0, 0, 0, 1 
      ],
      color: "#ffffff",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        0, 0, 0, 0, 0, 0, 
        0, 1, 1, 1, 0, 1, 
        1, 0, 0, 0, 1, 1, 
        0, 1, 1, 0, 0, 0, 
        0, 0, 0, 1, 0, 0, 
        0, 0, 0, 0, 0, 0 
      ],
      color: "#000000",
      count: 10,
      height: 6,
      width: 6
    },
    {
      board: [ 
        0, 1, 0, 0, 0, 1, 
        0, 0, 0, 1, 0, 0, 
        1, 0, 0, 0, 0, 0, 
        0, 1, 0, 0, 0, 0, 
        1, 1, 1, 0, 0, 0, 
        1, 1, 0, 0, 0, 0 
      ],
      color: "#00ff00",
      count: 10,
      height: 6,
      width: 6
    }
  ]
};

function createStateMachine(config, context) {
  const machine = {
    value: config.initialState,
    transition(sourceState, event) {
      const sourceConfig = config[sourceState];
      const targetAction = sourceConfig.transitions[event];
      if (!targetAction) {
        return;
      }
      const targetState = targetAction.target;
      const targetConfig = config[targetState];
      targetAction.action.bind(context)();
      sourceConfig.actions.onLeave.bind(context)();
      targetConfig.actions.onEnter.bind(context)();
      machine.value = targetState;
      return machine.value;
    },
  };
  return machine;
}

const SHOW_DURATION = 5 * 1000;
const PLAY_DURATION = 10 * 1000;

class ExperimentRunner {
  constructor(experiment) {
    this.experiment = experiment;
    this.index = 0;
    this.container = document.getElementById("container");
    this.templates = {
      board: Handlebars.compile(
        document.getElementById("template-board").innerHTML
      ),
      thank: Handlebars.compile(
        document.getElementById("template-thank").innerHTML
      ),
    };

    this.boardStates = {
      initialState: "init",
      init: {
        actions: {
          onEnter: () => {
            console.log("enter: board.init");
          },
          onLeave: () => {
            console.log("leave: board.init");
          },
        },
        transitions: {
          wait: {
            target: "wait",
            action: () => {},
          },
        },
      },
      wait: {
        actions: {
          onEnter: () => {
            console.log("enter: board.wait");
            this.renderBoard();
            this.showBoard(true);
            const ready = document.getElementById("ready");
            ready.style.display = "unset";
            ready.addEventListener(
              "click",
              _.partial(this.boardStateMachine.transition, "wait", "show"),
              { once: true, passive: true }
            );
          },
          onLeave: () => {
            console.log("leave: board.init");
          },
        },
        transitions: {
          show: {
            target: "show",
            action: () => {},
          },
        },
      },
      show: {
        actions: {
          onEnter: () => {
            console.log("enter: board.show");
            document.getElementById("ready").style.display = "none";
            window.setTimeout(
              this.boardStateMachine.transition.bind(this, "show", "play"),
              SHOW_DURATION
            );
          },
          onLeave: () => {
            console.log("leave: board.show");
            this.showBoard(false);
          },
        },
        transitions: {
          play: {
            target: "play",
            action: () => {},
          },
        },
      },
      play: {
        actions: {
          onEnter: () => {
            console.log("enter: board.play");
            this.container
              .querySelector(".grid")
              .addEventListener("click", this.handlePlay.bind(this));
            this.boardStates.play.timeoutId = window.setTimeout(
              this.boardStateMachine.transition.bind(this, "play", "done"),
              PLAY_DURATION
            );
          },
          onLeave: () => {
            console.log("leave: board.play");
            window.clearTimeout(this.boardStates.play.timeoutId);
          },
        },
        transitions: {
          done: {
            target: "done",
            action: () => {},
          },
        },
      },
      done: {
        actions: {
          onEnter() {
            console.log("enter: board.done");
            if (this.nextBoard()) {
              this.boardStateMachine.transition("done", "wait");
            } else {
              this.container.innerHTML = this.templates.thank();
            }
          },
          onLeave() {
            console.log("leave: board.done");
          },
        },
        transitions: {
          wait: {
            target: "wait",
            action() {},
          },
        },
      },
    };

    this.boardStateMachine = createStateMachine(this.boardStates, this);
  }

  get board() {
    return this.experiment.boards[this.index];
  }

  get count() {
    return this.experiment.boards.length;
  }

  handlePlay(event) {
    console.log(event);
    if (event.target.classList.contains("cell")) {
      const cell = event.target;
      cell.classList.add("pick");
      if (
        this.container.getElementsByClassName("pick").length >= this.board.count
      ) {
        window.setTimeout(
          this.boardStateMachine.transition.bind(this, "play", "done"),
          500
        );
      }
    }
  }

  renderBoard() {
    document.documentElement.style.setProperty(
      "--color-pick",
      this.board.color
    );
    this.container.innerHTML = this.templates.board({
      board: this.board,
      index: this.index + 1,
      count: this.count,
    });
  }

  nextBoard() {
    return ++this.index < this.experiment.boards.length;
  }

  showBoard(show) {
    const grids = document.getElementsByClassName("grid");
    for (let i = 0; i < grids.length; ++i) {
      if (show) {
        grids[i].classList.add("show");
      } else {
        grids[i].classList.remove("show");
      }
    }
  }

  run() {
    this.boardStateMachine.transition("init", "wait");
  }
}

function grid(children, size) {
  return `<div class="grid grid${size} show">${children}</div>`;
}

function cell(children) {
  const classes = ["cell"];

  if (children.trim() === "1") {
    classes.push("real");
  }

  return `<div class="${classes.join(" ")}"></div>`;
}

Handlebars.registerPartial("score", document.getElementById("template-score").innerHTML);
Handlebars.registerHelper("grid", function (board, size, options) {
  console.log(size);
  return grid(board.map((item) => cell(options.fn(item))).join("\n"), size);
});

// const runner = new ExperimentRunner(experiment);
// runner.run();

function onExperiment(experiment) {
  console.log(experiment);
  const runner = new ExperimentRunner(experiment);
  runner.run();
}

google.script.run.withSuccessHandler(onExperiment).getExperiment();
