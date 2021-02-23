export const buscaSequencialCode = 
`public int busca(int[] vetor, int chave) {
  for (int i=0; i < vetor.length; i++) {
    if (vetor[i] == chave) {
      return i;
    }
  }
  return -1;
}`;