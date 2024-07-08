const navs = [
  {
    heading: "Men",
    hasChild: true,
    categories: [
      {
        title: "Shoes",
        hasChild: true,

        sub_cat: [ { title: "Sneakers", url: "/mens/mens-shoes/mens-shoes-sneakers" }, { title: "Running", url: "/mens/mens-shoes/mens-shoes-running" }, { title: "Walking", url: "/mens/mens-shoes/mens-shoes-walking" },{ title: "Cricket", url: "/mens/mens-shoes/mens-shoes-cricket" } ],
      },
      {
        hasChild: true,
        title: "Clothing",
        sub_cat: [ { title: "Polos",  url: "mens/mens-clothing/mens-clothing-polos"  },{ title: "Jackets",url: "mens/mens-clothing/mens-clothing-jackets"  }]
      },
    
    ],
  }
  , {
    heading: "Women",
    hasChild: true,
    categories: [
      {
        title: "Shoes",
        hasChild: true,

        sub_cat: [ { title: "Sneakers", url: "/womens/womens-shoes/womens-shoes-sneakers" }, { title: "Running", url: "/womens/womens-shoes/womens-shoes-running" }, { title: "Motorsport", url: "/womens/womens-shoes/womens-shoes-motorsport" }, ],
      },
      {
        hasChild: true,
        title: "Clothing",
        sub_cat: [{ title: "Polos",  url: "womens/womens-clothing/womens-clothing-polos"  },{ title: "Jackets",url: "womens/womens-clothing/womens-clothing-jackets"}, { title: "Pants", url: "womens/womens-clothing/womens-clothing-pants"  }, { title: "Shorts",url: "womens/womens-clothing/womens-clothing-shorts" }, ],
      },
    ],
  },
  {
    heading: "Sneakers",
    hasChild: true,
    categories: [
      {
        title: "Gender",
        hasChild: true,

        sub_cat: [ { title: "Men", url: "/mens/mens-shoes/mens-shoes-sneakers" }, { title: "Women", url: "/womens/womens-shoes/womens-shoes-running" } ],
      },
      
    ],
  },
];
export default navs;
