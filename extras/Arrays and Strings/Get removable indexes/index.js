function getRemovableIndices(str1, str2) {
  const n = str1.length;
  const m = str2.length;

  // Validación por si acaso
  if (n !== m + 1) return [-1];

  const result = [];

  let i = 0;
  let j = 0;

  // Paso 1: Avanza mientras ambos caracteres sean iguales
  while (i < n && j < m && str1[i] === str2[j]) {
    i++;
    j++;
  }

  // Paso 2: Si nunca hubo diferencia, el carácter extra está al final
  if (j === m) return [n - 1];

  // Paso 3: Detecta el carácter extra
  const extraChar = str1[i];

  // Paso 4: Avanza j pero deja i detenido para volver a probar distintas eliminaciones
  // Ahora, intentaremos comparar str1 con str2 ignorando cada posición i donde str1[i] == extraChar
  for (let k = i; k < n; k++) {
    if (str1[k] !== extraChar) break; // Solo consideramos ocurrencias iguales y consecutivas

    let p1 = 0;
    let p2 = 0;
    let valid = true;

    while (p1 < n) {
      if (p1 === k) {
        p1++; // Saltamos esta posición
        continue;
      }

      if (str1[p1] !== str2[p2]) {
        valid = false;
        break;
      }

      p1++;
      p2++;
    }

    if (valid) result.push(k);
  }

  return result.length ? result : [-1];
}
