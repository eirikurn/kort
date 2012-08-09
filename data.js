var data = [
  // Orkustöðvar á höfuðborgarsvæðinu
  { x: 355281, y: 399013, category: "Gas", chain: "Orkan", name: "Kænan" },
  { x: 360274, y: 403413, category: "Gas", chain: "Orkan", name: "Dalvegur" },
  { x: 361102, y: 404016, category: "Gas", chain: "Orkan", name: "Skemmuvegur" },
  { x: 363740, y: 404661, category: "Gas", chain: "Orkan", name: "Hraunbær" },
  { x: 357991, y: 406501, category: "Gas", chain: "Orkan", name: "Skógarhlíð" },
  { x: 359146, y: 406538, category: "Gas", chain: "Orkan", name: "Miklabraut" },
  { x: 359140, y: 406455, category: "Gas", chain: "Orkan", name: "Miklabraut (við Kringluna)" },
  { x: 360587, y: 408772, category: "Gas", chain: "Orkan", name: "Klettagarðar" },
  { x: 354817, y: 408608, category: "Gas", chain: "Orkan", name: "Eiðistorg" },
  { x: 354779, y: 408827, category: "Gas", chain: "Orkan", name: "Suðurströnd" },
  { x: 363541, y: 407667, category: "Gas", chain: "Orkan", name: "Gylfaflöt" },
  { x: 364384, y: 408212, category: "Gas", chain: "Orkan", name: "Spöngin" },
  { x: 356108, y: 400476, category: "Gas", chain: "Orkan", name: "Reykjavíkurvegur" }
];

// A proposal for declaring menus.
var menu = {
  options: [
    {
      filter: "category==='Gas'",
      title: "Bensínstöðvar",
      options: {
        groups: 'chain'
      }
    }
  ]
};
