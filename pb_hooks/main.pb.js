


routerAdd("GET", "api/hello", (e) => {
  return e.json(200, { message: "hello" });
});