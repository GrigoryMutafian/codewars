function filter_list(l) {
  const result = l.filter((elem) => typeof elem === "number");
  return result;
}
