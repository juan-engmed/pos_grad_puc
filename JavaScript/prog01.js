let n = 2; // os comandos abaixo poder funcionar para quaisquer valores de n


let primo = true;


for (let i = n; i > 0; i--) {
  if (n % i == 0) {

    primo = false;
    console.log(`${n} ${!primo ? "não" : ""} é um numero primo`);

  }
}
