export const arvoreMergeSort = {
  name: 'vetor',
  attributes: { vetor: [11, 7, 5, 9, 4, 10, 8, 6] },
  children: [
    {
      name: 'vetor[0:4]',
      attributes: { vetor: [11, 7, 5, 9] },
      children: [
        {
          name: 'vetor[0:2]',
          attributes: { vetor: [11, 7] },
        },{
          name: 'vetor[2:4]',
          attributes: { vetor: [5, 9] },
        }
      ]
    },{
      name: 'vetor[4:8]',
      attributes: { vetor: [4, 10, 8, 6] },
      children: [
        {
          name: 'vetor[4:6]',
          attributes: { vetor: [4, 10] },
        },{
          name: 'vetor[6:8]',
          attributes: { vetor: [8, 6] },
        }
      ]
    }
  ]
}