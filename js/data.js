var data = [
  // Orkustöðvar á höfuðborgarsvæðinu
  { x: 355281, y: 399013, category: "Gas", chain: "Orkan", name: "Orkan, Kænan" },
  { x: 360274, y: 403413, category: "Gas", chain: "Orkan", name: "Orkan, Dalvegur" },
  { x: 361102, y: 404016, category: "Gas", chain: "Orkan", name: "Orkan, Skemmuvegur" },
  { x: 363740, y: 404661, category: "Gas", chain: "Orkan", name: "Orkan, Hraunbær" },
  { x: 357991, y: 406501, category: "Gas", chain: "Orkan", name: "Orkan, Skógarhlíð" },
  { x: 359146, y: 406538, category: "Gas", chain: "Orkan", name: "Orkan, Miklabraut" },
  { x: 359140, y: 406455, category: "Gas", chain: "Orkan", name: "Orkan, Miklabraut (við Kringluna)" },
  { x: 360587, y: 408772, category: "Gas", chain: "Orkan", name: "Orkan, Klettagarðar" },
  { x: 354817, y: 408608, category: "Gas", chain: "Orkan", name: "Orkan, Eiðistorg" },
  { x: 354779, y: 408827, category: "Gas", chain: "Orkan", name: "Orkan, Suðurströnd" },
  { x: 363541, y: 407667, category: "Gas", chain: "Orkan", name: "Orkan, Gylfaflöt" },
  { x: 364384, y: 408212, category: "Gas", chain: "Orkan", name: "Orkan, Spöngin" },
  { x: 356108, y: 400476, category: "Gas", chain: "Orkan", name: "Orkan, Reykjavíkurvegur" },

  // Atlandsolíustöðvar í reykjavík
  { x: 357972, y: 408045, category: "Gas", chain: "Atlantsolía", name: "Atlantsolía, Skúlagata"},
  { x: 357663, y: 406516, category: "Gas", chain: "Atlantsolía", name: "Atlantsolía, Skúlagata"},
  { x: 360229, y: 406421, category: "Gas", chain: "Atlantsolía", name: "Atlantsolía, Skúlagata"}
  
];

// A proposal for declaring menus.
var menu = {
  title: "Nágrennið",
  options: [
    {
      filter: "category==='Gas'",
      title: "Bensínstöðvar",
      options: [{
        groups: 'chain',
        title: "test"
      }]
    }
  ]
};
