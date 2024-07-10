function test() {
  try {
    console.log("Great success");
    // throw new Error("something went wrong");
  } catch (error) {
    console.log(error);
  }
}
test();