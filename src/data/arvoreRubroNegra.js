const nilNode = { name: '\u00d7', attributes: {empty:true, color: 'black'}};

const leaf = (value, color) => {
  return {
    name: value,
    attributes: { color },
    children: [
      nilNode, nilNode
    ]
  }
}



export const arvoreGraduada = {
  name: '40',
  children: [
    {
      name: '30',
      children: [
        leaf('18'),
        nilNode 
      ]
    },{
      name: '50',
      children: [
        leaf('45'),
        {
          name: '60',
          children: [
            nilNode,
            leaf('80')
          ]
        }
      ]
    }
  ]
};

export const arvoreRubroNegra = {
  name: '8',
  attributes: {color: 'black'},
  children: [
    leaf('5', 'black'),
    {
      name: '15',
      attributes: {color: 'red'},
      children: [
        {
          name: '12',
          attributes: {color: 'black'},
          children: [
            leaf('9', 'red'),
            leaf('13', 'red')
          ]
        },
        {
          name: '19',
          attributes: {color: 'black'},
          children: [
            nilNode,
            leaf('23', 'red')
          ]
        }
      ]
    }
  ]
}

export const arvoreRubroNegraSemCor = {
  name: '8',
  children: [
    leaf('5'),
    {
      name: '15',
      children: [
        {
          name: '12',
          children: [
            leaf('9'),
            leaf('13')
          ]
        },
        {
          name: '19',
          children: [
            nilNode,
            leaf('23')
          ]
        }
      ]
    }
  ]
}