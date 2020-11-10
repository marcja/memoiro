import { shuffle } from "lodash";
import { Board } from "./Board";
import { BoardSize } from "./BoardSize";

function* generateColors(): Generator<string> {
  for (;;) {
    yield "#000000";
    yield "#ffffff";
    yield "#ff0000";
    yield "#00ff00";
    yield "#0000ff";
  }
}

function* generateParams(): Generator<BoardSize> {
  for (;;) {
    yield new BoardSize(5, 5, 7);
    yield new BoardSize(6, 6, 10);
  }
}

export class Experiment {
  boards: Board[] = [];

  constructor(count: number) {
    let colors = generateColors();
    let params = generateParams();

    for (let i = 0; i < count; ++i) {
      this.boards.push(new Board(params.next().value, colors.next().value));
    }
    this.boards = shuffle(this.boards);
  }
}
