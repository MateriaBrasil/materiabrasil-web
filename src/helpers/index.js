export function addhttp(url) {
  if (!/^(?:f|ht)tp?\:\/\//.test(url) || !/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = 'http://' + url;
  }
  return url;
}

export function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
}

export function phoneMask(v) {
  v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
  v = v.replace(/^(\d\d)(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d{4})(\d)/, '$1-$2'); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

export function insert(arr, index, item) {
  arr.splice(index, 0, item);
}

// export function removeDups(array) {
//   return array.reduce((result, elem) => {
//     if (!result.some(e => e.abc_buildingid === element.abc_buildingid)) {
//       result.push(elem);
//     }
//     return result;
//   }, []);
// }
