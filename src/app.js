function test() {
  try {
    console.log("somthing");

    throw new Error("Somthing went wrong");
  } catch (error) {
    console.log(error);
  }
}
test();