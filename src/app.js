function test() {
  try {
    console.log("Something");

    throw new Error("Somthing went wrong");
  } catch (error) {
    console.log(error);
  }
}
test();