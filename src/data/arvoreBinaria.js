export const arvoreBinaria = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {name: 'D'},
        {name: 'E'}
      ]
    },{
      name: 'C',
      children: [
        {name: 'F'},
        {name: 'G'}
      ]
    }
  ]
}

export const arvoreEstritamenteBinaria = {
  name: 'A',
  children: [
    {
      name: 'B',
    },{
      name: 'C',
      children: [
        {name: 'F'},
        {
          name: 'G',
          children: [{name: 'H'}, {name: 'I'}]
        }
      ]
    }
  ]
}

export const arvoreBinariaCompleta = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {name: 'D'}, 
        {name: 'E', children: [{name: 'H'}]}
      ]
    },{
      name: 'C',
      children: [
        {name: 'F', children: [{name: 'I'}]},
        {
          name: 'G',
        }
      ]
    }
  ]
}