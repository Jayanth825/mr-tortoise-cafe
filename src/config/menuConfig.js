/**
 * RESTAURANT DIGITAL MENU CONFIGURATION
 * 
 * Fine Dining Theme for Mr. Tortoise Cafe and Fine Dining
 */

export const menuConfig = {
  restaurantInfo: {
    name: "Mr. Tortoise Cafe and Fine Dining",
    displayName: "Welcome to Mr. Tortoise Cafe and Fine Dining",
    tagline: "Your Comfort Cafe",
    description: "Welcome to your table! Explore our fine dining menu selections across Starters, Mains, Desserts, and Drinks.",
    tableTag: "Table #04 • Verified",
    coverImage: "/menu/mains.jpg",
    logoText: "MR. TORTOISE",
    currency: "₹",
    hours: "11:00 AM – 10:30 PM",
    address: "Kakinada, Ramanaipeta",
    phone: "+91 98765 43210",
  },

  // Google Review URL
  googleReviewUrl: "https://www.google.com/search?sca_esv=89264749a61b36b1&sxsrf=APpeQnstG9fv1zTFsqUuOpBTAtM0GFN66w:1789491488904&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_w3OLAMkWySOOH0_T7rHGJdXwMCkQ9UVessw4yZ-NktY5GggsZnVX-L8r32SXnEgD18rnxBNl7rMP-shkLXG4T_YtN8IDteELbEFeqjIhj09EikQOg%3D%3D&q=Mr.+Tortoise+cafeteria+Reviews&sa=X&ved=2ahUKEwiA-pikh_GWAxX3R2wGHbW6CwwQ0bkNegQIMRAF&biw=1280&bih=585&dpr=1.5#lrd=0x3a3829c4fd14ae83:0xe468c262df86ac72,3,,,,",

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com/mrtortoise_kakinada",
    whatsapp: "https://wa.me/919876543210?text=Hello!%20I'm%20at%20Table%2004",
    youtube: "https://youtube.com/@mrtortoise_kakinada",
    facebook: "https://facebook.com/mrtortoise_kakinada",
    maps: "https://maps.google.com/?q=Mr.+Tortoise+cafeteria+Kakinada",
    phone: "tel:+919876543210"
  },

  // Menu Categories (4 Categories: Starters, Mains, Desserts, Drinks)
  categories: [
    {
      id: "starters",
      name: "Starters",
      subtitle: "Soft Drinks, Mineral Water, Savory Add-Ons & Syrups",
      image: "/menu/starters.jpg",
      iconName: "UtensilsCrossed",
      badge: "17 Items",
      description: "Tap photo to view full-screen photographed Starters menu board with zoom & pan."
    },
    {
      id: "mains",
      name: "Mains",
      subtitle: "Authentic Hyderabadi Veg & Non-Veg Biryanis",
      image: "/menu/mains.jpg",
      iconName: "Beef",
      badge: "18 Items",
      description: "Tap photo to view full-screen photographed Mains menu board with zoom & pan."
    },
    {
      id: "desserts",
      name: "Desserts",
      subtitle: "Chocolate Sandwiches, Artisan Ice Creams & Addons",
      image: "/menu/desserts.jpg",
      iconName: "Cake",
      badge: "11 Items",
      description: "Tap photo to view full-screen photographed Desserts menu board with zoom & pan."
    },
    {
      id: "drinks",
      name: "Drinks",
      subtitle: "Chilled Refreshers, Smoothies & Artisanal Mocktails",
      image: "/menu/drinks.jpg",
      iconName: "Wine",
      badge: "21 Items",
      description: "Tap photo to view full-screen photographed Drinks menu board with zoom & pan."
    }
  ],

  // Digital Item List for quick interactive search & dietary filtering
  items: [
    // --- 1. STARTERS ---
    {
      id: "s1",
      categoryId: "starters",
      name: "Thums Up",
      price: 30,
      description: "Iconic fizzy carbonated cola soft drink.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isPopular"],
      calories: "140 kcal"
    },
    {
      id: "s2",
      categoryId: "starters",
      name: "Sprite",
      price: 30,
      description: "Crispy lemon-lime flavored sparkling soft drink.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "140 kcal"
    },
    {
      id: "s3",
      categoryId: "starters",
      name: "Coca-Cola",
      price: 30,
      description: "Classic ice-cold carbonated cola beverage.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isPopular"],
      calories: "140 kcal"
    },
    {
      id: "s4",
      categoryId: "starters",
      name: "Water Bottle (Small)",
      price: 10,
      description: "Chilled packaged mineral water bottle (500ml).",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "0 kcal"
    },
    {
      id: "s5",
      categoryId: "starters",
      name: "Water Bottle (Big)",
      price: 20,
      description: "Chilled packaged mineral water bottle (1L).",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isPopular"],
      calories: "0 kcal"
    },
    {
      id: "s6",
      categoryId: "starters",
      name: "Cheese Add-on",
      price: 39,
      description: "Extra melted mozzarella or cheddar cheese slice.",
      tags: ["isVeg", "isGlutenFree", "isPopular"],
      allergens: ["Dairy"],
      calories: "110 kcal"
    },
    {
      id: "s7",
      categoryId: "starters",
      name: "Mayo Add-on",
      price: 39,
      description: "Creamy garlic eggless mayonnaise dip.",
      tags: ["isVeg", "isGlutenFree"],
      allergens: ["Dairy"],
      calories: "90 kcal"
    },
    {
      id: "s8",
      categoryId: "starters",
      name: "Tandoori Mayo Add-on",
      price: 39,
      description: "Spicy smoky Indian tandoori seasoned mayonnaise.",
      tags: ["isVeg", "isGlutenFree", "isChefSpecial"],
      allergens: ["Dairy"],
      calories: "95 kcal"
    },
    {
      id: "s9",
      categoryId: "starters",
      name: "Peri Peri Add-on",
      price: 39,
      description: "Tangy African bird's eye chili peri peri spice dip.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "50 kcal"
    },
    {
      id: "s10",
      categoryId: "starters",
      name: "Veggies Add-on",
      price: 39,
      description: "Portion of fresh sauteed garden vegetables (onions, capsicum, corn).",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "45 kcal"
    },
    {
      id: "s11",
      categoryId: "starters",
      name: "Mushrooms Add-on",
      price: 39,
      description: "Portion of fresh butter-fried sliced button mushrooms.",
      tags: ["isVeg", "isGlutenFree", "isPopular"],
      calories: "60 kcal"
    },
    {
      id: "s12",
      categoryId: "starters",
      name: "Espresso Flavour",
      price: 39,
      description: "Rich roasted coffee bean espresso shot flavor infusion.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "15 kcal"
    },
    {
      id: "s13",
      categoryId: "starters",
      name: "Choco Syrup Flavour",
      price: 39,
      description: "Decadent dark chocolate syrup drizzle.",
      tags: ["isVeg"],
      calories: "80 kcal"
    },
    {
      id: "s14",
      categoryId: "starters",
      name: "Vanilla Flavour",
      price: 49,
      description: "Sweet aromatic French vanilla syrup infusion.",
      tags: ["isVeg", "isGlutenFree"],
      calories: "70 kcal"
    },
    {
      id: "s15",
      categoryId: "starters",
      name: "Caramel Flavour",
      price: 49,
      description: "Rich buttery salted caramel sauce syrup infusion.",
      tags: ["isVeg", "isGlutenFree", "isChefSpecial"],
      allergens: ["Dairy"],
      calories: "85 kcal"
    },
    {
      id: "s16",
      categoryId: "starters",
      name: "Irish Flavour",
      price: 49,
      description: "Smooth Irish cream flavor infusion (non-alcoholic).",
      tags: ["isVeg", "isGlutenFree"],
      calories: "75 kcal"
    },
    {
      id: "s17",
      categoryId: "starters",
      name: "Hazelnut Flavour",
      price: 49,
      description: "Nutty roasted hazelnut syrup flavor infusion.",
      tags: ["isVeg", "isGlutenFree", "isPopular"],
      allergens: ["Tree Nuts"],
      calories: "80 kcal"
    },

    // --- 2. MAINS ---
    {
      id: "m1",
      categoryId: "mains",
      name: "Mushroom Biryani",
      price: "159-00 (Half) / 199-00 (Full)",
      description: "Fragrant basmati rice dum-cooked with fresh juicy mushrooms, herbs, and exotic spices.",
      tags: ["isVeg", "isPopular"],
      allergens: [],
      calories: "420 kcal"
    },
    {
      id: "m2",
      categoryId: "mains",
      name: "Paneer Biryani",
      price: "179-00 (Half) / 219-00 (Full)",
      description: "Soft marinated paneer cubes layered with saffron basmati rice and rich biryani spices.",
      tags: ["isVeg", "isChefSpecial"],
      allergens: ["Dairy"],
      calories: "520 kcal"
    },
    {
      id: "m3",
      categoryId: "mains",
      name: "Mixed Veg Biryani",
      price: "259-00 (Half) / 299-00 (Full)",
      description: "Seasonal garden vegetables dum-cooked with aromatic basmati rice, mint, and saffron.",
      tags: ["isVeg"],
      allergens: [],
      calories: "480 kcal"
    },
    {
      id: "m4",
      categoryId: "mains",
      name: "Spl. Mixed Veg Biryani",
      price: "299-00 (Full)",
      description: "Chef's special rich vegetable biryani loaded with paneer, mushrooms, nuts, and house spices.",
      tags: ["isVeg", "isChefSpecial"],
      allergens: ["Dairy", "Tree Nuts"],
      calories: "560 kcal"
    },
    {
      id: "m5",
      categoryId: "mains",
      name: "Spl. Veg Biryani",
      price: "269-00 (Full)",
      description: "Special vegetarian biryani cooked on low heat with kewra, saffron, and seasoned vegetables.",
      tags: ["isVeg"],
      allergens: [],
      calories: "500 kcal"
    },
    {
      id: "m6",
      categoryId: "mains",
      name: "Dum Biryani",
      price: "169-00 (Half) / 219-00 (Full)",
      description: "Authentic chicken dum biryani slow-cooked on low flame with traditional spices and caramelized onions.",
      tags: ["isPopular"],
      allergens: [],
      calories: "680 kcal"
    },
    {
      id: "m7",
      categoryId: "mains",
      name: "Frybit Biryani",
      price: "179-00 (Half) / 229-00 (Full)",
      description: "Crispy golden fried chicken bites served over spiced aromatic biryani rice.",
      tags: ["isPopular"],
      allergens: [],
      calories: "720 kcal"
    },
    {
      id: "m8",
      categoryId: "mains",
      name: "Anarkali Biryani",
      price: "299-00 (Full)",
      description: "Royal recipe biryani featuring tender chicken cooked in a rich, velvety spiced gravy.",
      tags: ["isChefSpecial"],
      allergens: ["Dairy"],
      calories: "750 kcal"
    },
    {
      id: "m9",
      categoryId: "mains",
      name: "Semi Gravy Biryani",
      price: "329-00 (Full)",
      description: "Succulent chicken morsels in medium spicy thick gravy, layered with basmati rice.",
      tags: [],
      allergens: [],
      calories: "780 kcal"
    },
    {
      id: "m10",
      categoryId: "mains",
      name: "Boneless Biryani",
      price: "279-00 (Full)",
      description: "Juicy boneless chicken pieces marinated in yogurt masala and slow dum-cooked with long grain rice.",
      tags: ["isPopular"],
      allergens: ["Dairy"],
      calories: "650 kcal"
    },
    {
      id: "m11",
      categoryId: "mains",
      name: "Mughlai Biryani",
      price: "299-00 (Full)",
      description: "Rich Mughlai style biryani cooked with cashew paste, boiled egg, cream, and gentle spices.",
      tags: ["isChefSpecial"],
      allergens: ["Egg", "Tree Nuts", "Dairy"],
      calories: "820 kcal"
    },
    {
      id: "m12",
      categoryId: "mains",
      name: "Spl. Chicken Biryani",
      price: "319-00 (Full)",
      description: "House special chicken biryani with double chicken piece, extra rice, and boiled egg.",
      tags: ["isPopular", "isChefSpecial"],
      allergens: ["Egg"],
      calories: "850 kcal"
    },
    {
      id: "m13",
      categoryId: "mains",
      name: "Prawn Biryani",
      price: "319-00 (Full)",
      description: "Juicy fresh prawns sauteed in coastal spices and dum-cooked with fragrant basmati rice.",
      tags: ["isChefSpecial"],
      allergens: ["Shellfish"],
      calories: "610 kcal"
    },
    {
      id: "m14",
      categoryId: "mains",
      name: "Mixed Biryani",
      price: "319-00 (Full)",
      description: "A delightful combination biryani with chicken and egg cooked in aromatic herbs.",
      tags: ["isPopular"],
      allergens: ["Egg"],
      calories: "790 kcal"
    },
    {
      id: "m15",
      categoryId: "mains",
      name: "Mixed Biryani (Spl)",
      price: "349-00 (Full)",
      description: "Special mixed feast biryani featuring chicken, mutton, and boiled egg in rich masala.",
      tags: ["isChefSpecial"],
      allergens: ["Egg"],
      calories: "890 kcal"
    },
    {
      id: "m16",
      categoryId: "mains",
      name: "Mutton Biryani",
      price: "359-00 (Full)",
      description: "Tender, melt-in-your-mouth mutton pieces dum-cooked with long-grain basmati rice.",
      tags: ["isPopular", "isChefSpecial"],
      allergens: [],
      calories: "880 kcal"
    },
    {
      id: "m17",
      categoryId: "mains",
      name: "Mixed Mughlai Biryani",
      price: "389-00 (Full)",
      description: "Decadent Mughlai biryani with chicken, mutton, prawns, nuts, and saffron cream.",
      tags: ["isChefSpecial"],
      allergens: ["Tree Nuts", "Shellfish", "Dairy", "Egg"],
      calories: "940 kcal"
    },
    {
      id: "m18",
      categoryId: "mains",
      name: "Spl. Mutton Biryani",
      price: "399-00 (Full)",
      description: "Supreme mutton biryani with extra tender meat cuts, boiled egg, ghee roast aroma, and herbs.",
      tags: ["isPopular", "isChefSpecial"],
      allergens: ["Dairy", "Egg"],
      calories: "950 kcal"
    },

    // --- 3. DESSERTS ---
    {
      id: "d1",
      categoryId: "desserts",
      name: "Dark Chocolate Sandwich",
      price: 109,
      description: "Warm toasted artisanal sandwich filled with rich melted dark Belgian chocolate.",
      tags: ["isVeg", "isPopular"],
      allergens: ["Gluten", "Dairy"],
      calories: "380 kcal"
    },
    {
      id: "d2",
      categoryId: "desserts",
      name: "Milk Chocolate Sandwich",
      price: 119,
      description: "Crispy grilled butter bread stuffed with gooey sweet milk chocolate filling.",
      tags: ["isVeg"],
      allergens: ["Gluten", "Dairy"],
      calories: "390 kcal"
    },
    {
      id: "d3",
      categoryId: "desserts",
      name: "White Chocolate Sandwich",
      price: 129,
      description: "Warm golden grilled sandwich loaded with creamy melted white chocolate.",
      tags: ["isVeg", "isChefSpecial"],
      allergens: ["Gluten", "Dairy"],
      calories: "410 kcal"
    },
    {
      id: "d4",
      categoryId: "desserts",
      name: "Hazelnut Sandwich",
      price: 149,
      description: "Decadent toasted dessert sandwich oozing with rich Nutella hazelnut cocoa spread.",
      tags: ["isVeg", "isPopular", "isChefSpecial"],
      allergens: ["Gluten", "Dairy", "Tree Nuts"],
      calories: "450 kcal"
    },
    {
      id: "d5",
      categoryId: "desserts",
      name: "Vanilla Ice Cream",
      price: 50,
      description: "Classic scoop of smooth Madagascar vanilla bean ice cream.",
      tags: ["isVeg", "isGlutenFree"],
      allergens: ["Dairy"],
      calories: "160 kcal"
    },
    {
      id: "d6",
      categoryId: "desserts",
      name: "Strawberry Ice Cream",
      price: 50,
      description: "Creamy pink ice cream churned with ripe strawberry fruit puree.",
      tags: ["isVeg", "isGlutenFree"],
      allergens: ["Dairy"],
      calories: "170 kcal"
    },
    {
      id: "d7",
      categoryId: "desserts",
      name: "Chocolate Ice Cream",
      price: 55,
      description: "Rich and creamy Dutch cocoa chocolate ice cream scoop.",
      tags: ["isVeg", "isGlutenFree", "isPopular"],
      allergens: ["Dairy"],
      calories: "190 kcal"
    },
    {
      id: "d8",
      categoryId: "desserts",
      name: "Butter Scotch Ice Cream",
      price: 69,
      description: "Crunchy butterscotch praline pieces folded into rich golden caramel ice cream.",
      tags: ["isVeg", "isGlutenFree", "isChefSpecial"],
      allergens: ["Dairy", "Tree Nuts"],
      calories: "210 kcal"
    },
    {
      id: "d9",
      categoryId: "desserts",
      name: "American Nuts",
      price: 69,
      description: "Premium ice cream scoop blended with roasted almonds, cashews, and fruit jellies.",
      tags: ["isVeg", "isGlutenFree", "isPopular"],
      allergens: ["Dairy", "Tree Nuts"],
      calories: "230 kcal"
    },
    {
      id: "d10",
      categoryId: "desserts",
      name: "Extra Ice Creams / Flavours",
      price: 59,
      description: "Add an extra scoop of your favorite ice cream flavor to any dessert.",
      tags: ["isVeg", "isGlutenFree"],
      allergens: ["Dairy"],
      calories: "160 kcal"
    },
    {
      id: "d11",
      categoryId: "desserts",
      name: "Extra Toppings",
      price: 49,
      description: "Generous drizzle of chocolate fudge, caramel sauce, sprinkles, or crushed nuts.",
      tags: ["isVeg"],
      allergens: ["Tree Nuts", "Dairy"],
      calories: "90 kcal"
    },

    // --- 4. DRINKS ---
    {
      id: "dr1",
      categoryId: "drinks",
      name: "Virgin Mojito",
      price: 99,
      description: "Refreshing classic mint and lime mocktail topped with crushed ice and sparkling soda.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isPopular"],
      calories: "120 kcal"
    },
    {
      id: "dr2",
      categoryId: "drinks",
      name: "Blue Crush",
      price: 109,
      description: "Vibrant blue curacao syrup infused with citrus citrus fizz and crushed mint ice.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "140 kcal"
    },
    {
      id: "dr3",
      categoryId: "drinks",
      name: "Passion Lemonade",
      price: 109,
      description: "Exotic passionfruit pulp blended with fresh squeezed lemon juice and sparkle.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isChefSpecial"],
      calories: "135 kcal"
    },
    {
      id: "dr4",
      categoryId: "drinks",
      name: "Berry Blast",
      price: 109,
      description: "Tangy mixed berry blend with sweet strawberry and raspberry note fizz.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "130 kcal"
    },
    {
      id: "dr5",
      categoryId: "drinks",
      name: "Double Berry",
      price: 119,
      description: "Rich dual berry delight with fresh blackberry, raspberry crush, and sparkling water.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isPopular"],
      calories: "145 kcal"
    },
    {
      id: "dr6",
      categoryId: "drinks",
      name: "Arizona Sunset",
      price: 119,
      description: "Layered orange juice, grenadine, and lemon-lime twist resembling a warm desert sunset.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isChefSpecial"],
      calories: "150 kcal"
    },
    {
      id: "dr7",
      categoryId: "drinks",
      name: "Orange Mojito",
      price: 119,
      description: "Zesty fresh orange juice muddled with garden mint, lime, and chilled soda.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "135 kcal"
    },
    {
      id: "dr8",
      categoryId: "drinks",
      name: "Fresh Lime (Sweet & Salt) Soda",
      price: 89,
      description: "Classic Indian lime cooler with sweet sugar syrup and a pinch of black salt sparkle.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isPopular"],
      calories: "90 kcal"
    },
    {
      id: "dr9",
      categoryId: "drinks",
      name: "Litchi & Lime Soda",
      price: 99,
      description: "Sweet fragrant litchi juice paired with tangy fresh lime and fizzy soda.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "110 kcal"
    },
    {
      id: "dr10",
      categoryId: "drinks",
      name: "Mango Soda",
      price: 99,
      description: "Tropical Alphonso mango nectar spritzed with effervescent sparkling soda.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "125 kcal"
    },
    {
      id: "dr11",
      categoryId: "drinks",
      name: "Green Apple Soda",
      price: 99,
      description: "Crispy green apple flavor with a refreshing sour punch and carbonated bubbles.",
      tags: ["isVeg", "isVegan", "isGlutenFree", "isPopular"],
      calories: "115 kcal"
    },
    {
      id: "dr12",
      categoryId: "drinks",
      name: "Kiwi Soda",
      price: 99,
      description: "Tangy fresh kiwi puree muddled with lime and icy sparkling soda.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "110 kcal"
    },
    {
      id: "dr13",
      categoryId: "drinks",
      name: "Wild Strawberry Soda",
      price: 99,
      description: "Luscious wild strawberry crush topped up with chilled sparkling soda.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "120 kcal"
    },
    {
      id: "dr14",
      categoryId: "drinks",
      name: "Cranberry Soda",
      price: 99,
      description: "Tart and crisp cranberry juice balanced with sweet soda fizz.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "105 kcal"
    },
    {
      id: "dr15",
      categoryId: "drinks",
      name: "Raspberry Soda",
      price: 99,
      description: "Ripe red raspberry essence combined with fizzy carbonated water and lemon.",
      tags: ["isVeg", "isVegan", "isGlutenFree"],
      calories: "115 kcal"
    },
    {
      id: "dr16",
      categoryId: "drinks",
      name: "Strawberry Smoothie",
      price: 159,
      description: "Thick creamy blend of fresh farm strawberries, cold milk, and Greek yogurt.",
      tags: ["isVeg", "isGlutenFree", "isPopular"],
      allergens: ["Dairy"],
      calories: "240 kcal"
    },
    {
      id: "dr17",
      categoryId: "drinks",
      name: "Mango Smoothie",
      price: 159,
      description: "Velvety mango pulp blended with rich chilled milk, yogurt, and honey.",
      tags: ["isVeg", "isGlutenFree", "isChefSpecial"],
      allergens: ["Dairy"],
      calories: "260 kcal"
    },
    {
      id: "dr18",
      categoryId: "drinks",
      name: "Raspberry Smoothie",
      price: 159,
      description: "Tangy sweet raspberry puree whipped with yogurt and crushed ice creaminess.",
      tags: ["isVeg", "isGlutenFree"],
      allergens: ["Dairy"],
      calories: "230 kcal"
    },
    {
      id: "dr19",
      categoryId: "drinks",
      name: "Kiwi Smoothie",
      price: 159,
      description: "Fresh nutrient-packed kiwi fruit blended with creamy milk and vanilla yogurt.",
      tags: ["isVeg", "isGlutenFree"],
      allergens: ["Dairy"],
      calories: "210 kcal"
    },
    {
      id: "dr20",
      categoryId: "drinks",
      name: "Cranberry Smoothie",
      price: 159,
      description: "Antioxidant-rich cranberry reduction blended smooth with chilled milk and ice.",
      tags: ["isVeg", "isGlutenFree"],
      allergens: ["Dairy"],
      calories: "220 kcal"
    },
    {
      id: "dr21",
      categoryId: "drinks",
      name: "Blueberry Smoothie",
      price: 159,
      description: "Luscious dark blueberries whipped with creamy Greek yogurt and honey touch.",
      tags: ["isVeg", "isGlutenFree", "isChefSpecial"],
      allergens: ["Dairy"],
      calories: "250 kcal"
    }
  ]
};
