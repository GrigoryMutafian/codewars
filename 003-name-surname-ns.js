function abbrevName(name) {
  const fullname = name.split(" ");
  let abbriveName = fullname[0][0];
  let abbriveSurname = fullname[1][0];

  return `${abbriveName}.${abbriveSurname}`.toUpperCase();
}

console.log(abbrevName("Sam Harris"), "S.H");
