function doPost(e) {
  const email = e.parameter.email;

  const blob = Utilities.newBlob(
    Utilities.base64Decode(e.parameter.data),
    e.parameter.type,
    e.parameter.name
  );

  const file = DriveApp.createFile(blob);

  // Share file with entered email
  file.addViewer(email);

  return ContentService
    .createTextOutput("File uploaded and shared with " + email);
}
