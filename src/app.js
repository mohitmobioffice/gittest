function test() {
  try {
    console.log("Great success");
    // throw new Error("Something went wrong");
  } catch (error) {
    console.log(error);
  }
}
test();