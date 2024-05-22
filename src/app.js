function test() {
  try {
    throw new Error("Somthing went wrong");
  } catch (error) {
    console.log(error);
  }
}
test();