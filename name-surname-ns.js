function abbrevName(name){
    name = name.split(" ");
    return (name[0][0] + "." + name[1][0]).toUpperCase();
    }

    console.log(abbrevName("Sam Harris"), "S.H");