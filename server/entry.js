function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("client/index");
}

function getExperiment() {
  Logger.log(Session.getActiveUser().getEmail());
  const experiment = Memoiro.getExperiment();
  return experiment;
}

function saveTrial(result) {
  Logger.log(result);
  const app = SpreadsheetApp.getActiveSpreadsheet();
  const sht = app.getSheetByName("Results");
  const email = Session.getActiveUser().getEmail() || "n/a";
  const stamp = new Date();
  sht.appendRow([email, stamp, 1, "#ff0000", 25, 6, 1]);
}