const categories=[
    {
      title: 'Sneakers',
      vat: 'Shoes',
      gen: 'Men',
      url: '/mens/mens-shoes/mens-shoes-sneakers'
    },
    {
      title: 'Running',
      vat: 'Shoes',
      gen: 'Men',
      url: '/mens/mens-shoes/mens-shoes-running'
    },
    {
      title: 'Walking',
      vat: 'Shoes',
      gen: 'Men',
      url: '/mens/mens-shoes/mens-shoes-walking'
    },
    {
      title: 'Cricket',
      vat: 'Shoes',
      gen: 'Men',
      url: '/mens/mens-shoes/mens-shoes-cricket'
    },
    {
      title: 'Polos',
      vat: 'Clothing',
      gen: 'Men',
      url: 'mens/mens-clothing/mens-clothing-polos'
    },
    {
      title: 'Jackets',
      vat: 'Clothing',
      gen: 'Men',
      url: 'mens/mens-clothing/mens-clothing-jackets'
    },
    {
      title: 'Sneakers',
      vat: 'Shoes',
      gen: 'Women',
      url: '/womens/womens-shoes/womens-shoes-sneakers'
    },
    {
      title: 'Running',
      vat: 'Shoes',
      gen: 'Women',
      url: '/womens/womens-shoes/womens-shoes-running'
    },
    {
      title: 'Motorsport',
      vat: 'Shoes',
      gen: 'Women',
      url: '/womens/womens-shoes/womens-shoes-motorsport'
    },
    {
      title: 'Polos',
      vat: 'Clothing',
      gen: 'Women',
      url: 'womens/womens-clothing/womens-clothing-polos'
    },
    {
      title: 'Jackets',
      vat: 'Clothing',
      gen: 'Women',
      url: 'womens/womens-clothing/womens-clothing-jackets'
    },
    {
      title: 'Pants',
      vat: 'Clothing',
      gen: 'Women',
      url: 'womens/womens-clothing/womens-clothing-pants'
    },
    {
      title: 'Shorts',
      vat: 'Clothing',
      gen: 'Women',
      url: 'womens/womens-clothing/womens-clothing-shorts'
    },
 
]
  
const res=categories.filter(c => {
  return  c.title.toLowerCase().includes("ja")
});
console.log(res);