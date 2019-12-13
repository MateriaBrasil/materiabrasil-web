export function addhttp(url) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = 'http://' + url;
  }
  return url;
}

export function phoneMask(v) {
  v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
  v = v.replace(/^(\d\d)(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d{4})(\d)/, '$1-$2'); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
