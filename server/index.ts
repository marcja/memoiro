import { shuffle } from "lodash";
import { Board } from "./Board";
import { BoardSize } from "./BoardSize";
import { Experiment } from "./Experiment";

export function getExperiment() {
  const trialCount = 20;
  const experiment = new Experiment(trialCount);
  console.log(experiment);
  return experiment;
}
