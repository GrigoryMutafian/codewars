function obfuscate(email) {
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      email = email.replace(email[i], " [at] ");
    } else if (email[i] === ".") {
      email = email.replace(email[i], " [dot] ");
    }
  }

  return email;
}

console.log(obfuscate("test@123.com"), "test [at] 123 [dot] com");
console.log(
  obfuscate("Code_warrior@foo.ac.uk"),
  "Code_warrior [at] foo [dot] ac [dot] uk"
);
