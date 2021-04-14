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

export const arvoreBinariaBusca = {
  name: '18',
  children: [
    {
      name: '12',
      children: [
        {name: '8'},
        {name: '15'}
      ]
    },{
      name: '45',
      children: [
        {name: '28'},
        {name: '62'}
      ]
    }
  ]
}

export const arvoreBinariaBuscaComFolha = {
  name: '18',
  children: [
    {
      name: '12',
      children: [
        {name: '8'},
        {name: '15'}
      ]
    },{
      name: '45',
      children: [
        {name: '28', children: [{name:'21'}]},
        {name: '62'}
      ]
    }
  ]
}

export const arvoreBinariaBuscaZigueZague = {
  name: '12',
  children: [
    { name: '\u00d7', attributes: {fade:true}},
    {
      name: '18',
      children: [
        {
          name: '15',
          children: [
            { name: '\u00d7', attributes: {fade:true}},
            { name: '16',children: [
              { name: '\u00d7', attributes: {fade:true}},
              { name: '\u00d7', attributes: {fade:true}}
            ]}
          ]
        },
        { name: '\u00d7', attributes: {fade:true}}
      ]
    }
  ]
}

export const arvoreBinariaBuscaDesbalanceada = {
  name: '12',
  children: [
    {
      name: '8',
      children: [
        { name: '\u00d7', attributes: {fade:true}},
        { name: '\u00d7', attributes: {fade:true}}
      ]
    },{
      name: '15',
      children: [
        { name: '\u00d7', attributes: {fade:true}},
        {
          name: '18',
          children: [
            { name: '\u00d7', attributes: {fade:true}},
            {
              name: '45',
              children: [
                {name: '28',children: [
                  { name: '\u00d7', attributes: {fade:true}},
                  { name: '\u00d7', attributes: {fade:true}}
                ]},
                {name: '62',children: [
                  { name: '\u00d7', attributes: {fade:true}},
                  { name: '\u00d7', attributes: {fade:true}}
                ]}
              ]
            }
          ]
        }
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