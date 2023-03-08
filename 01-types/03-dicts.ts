{
  // Planting garden
  // Data bout each of the plants
  // Object of the data we're going to plant

  interface Plant {
    whenToSow: string;
    whenToHarvest: string;
    isFlower: boolean;
    isEdible: boolean;
    calories: number;
  }

 	// Dictionary type
	interface Garden { [plantName: string]: Plant }

  const garden: Garden = {
    tomato: {
      whenToSow: "Late spring",
      whenToHarvest: "Mid-summer to early fall",
      isFlower: false,
      isEdible: true,
      calories: 18,
    },
  };

  garden.carrot = {
    whenToSow: "Early spring",
    whenToHarvest: "Late summer to early fall",
    isFlower: false,
    isEdible: true,
    calories: 41,
  };

	garden.sunflower =   {
    "whenToSow": "Late spring",
    "whenToHarvest": "Late summer to early fall",
    "isFlower": true,
    "isEdible": true,
    "calories": 584,
  },

	garden.radish =  {
    "whenToSow": "Early spring",
    "whenToHarvest": "Mid-spring to early summer",
    "isFlower": false,
    "isEdible": true,
    "calories": 16,
  },


}
