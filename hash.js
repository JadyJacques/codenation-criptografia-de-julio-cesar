const letras = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]

const getEncryptLetra = (letra, step) => {
  const indexLetra = letras.indexOf(letra)
  if (indexLetra === -1) return letra

  const sumEncryptIndex = indexLetra + step
  const loopQty = Math.floor(sumEncryptIndex / letras.length)
  const encryptIndex = sumEncryptIndex > letras.length
    ? sumEncryptIndex - (letras.length * loopQty)
    : sumEncryptIndex
  return letras[encryptIndex]
}

const getDecryptLetra = (letra, step) => {
  const indexLetra = letras.indexOf(letra)
  if (indexLetra === -1) return letra

  const sumEncryptIndex = indexLetra - step
  const loopQty = sumEncryptIndex < 0 ? Math.ceil(Math.abs(sumEncryptIndex) / letras.length) : 0
  const encryptIndex = sumEncryptIndex + (letras.length * loopQty)
  return letras[encryptIndex]
}

exports.cesarEncrypt = (text, step) => text.split('').map(letra => getEncryptLetra(letra, step)).join('')

exports.cesarDecrypt = (text, step) => text.split('').map(letra => getDecryptLetra(letra, step)).join('')
