import { shuffle } from "lodash";
import { BoardSize } from "./BoardSize";

export class Board {
  private width: number;
  private height: number;
  private count: number;
  private color: string;
  private board: number[];

  constructor(boardSize: BoardSize, color: string) {
    this.width = boardSize.width;
    this.height = boardSize.height;
    this.count = boardSize.count;
    this.color = color;
    this.board = new Array<number>(this.width * this.height);
    this.board.fill(0, 0, this.board.length);
    this.board.fill(1, 0, this.count);
    this.board = shuffle(this.board);
  }
}
