let ano = 1004;
let anoAtual = new Date().getFullYear();

while (ano <= anoAtual) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`Ano ${ano} foi ano bissexto`);
  }
  ano++;
}
