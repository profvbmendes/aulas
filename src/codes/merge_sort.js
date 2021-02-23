export const mergeSortCode = 
`public int mergeSort(Integer[] v, int ini, int fim) {
  int meio;
  if (ini < fim) {
    meio = Math.floor((ini + fim)/2.0);
    mergeSort(v, ini, meio);
    mergeSort(v, meio, fim);
    merge(v, ini, meio, fim);
  }
}`;
export const mergeCode = 
`public void merge(Integer[] v, int ini, int meio, int fim) {
  Integer[] saida = new Integer[fim - ini];
  int i1 = ini;
  int i2 = meio;
  for (int i=0; i<saida.length; i++) {
    if (i1 < meio && (i2 >= saida.length || v[i1] < v[i2])) {
      saida[i] = v[i1];
      i1++;
    } else  {
      saida[i] = v[i2]
      i2++;
    }
  }
  for (int i = 0; i<saida.length; i++) {
    v[i] = saida[i];
  }
}`;