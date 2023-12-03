const { log } = require("console");
const fs = require("fs");

fs.readFile("nodejs_architecture.txt", (err, data) => {
  if (err) {
    console.log("Error is==> ", err);
  } else {
    console.log(data.toString());
  }
});

// Q.4
// Appending a File

fs.appendFile(
  "nodejs_architecture.txt",
  "---This is a Appended Content",
  "utf-8",
  (error) => {
    if (error) {
      console.log("Error is ", error);
    } else {
      console.log("Successfully Appended");
    }
  }
);

// Q.5 Deleting File
fs.unlink("nodejs_architecture.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted Successfully");
  }
});

// Os Information of a user

console.log("Operating sysytem name :", os.type());
