import type { IChatEntry, IIntroGroup, IIntroSection, IIntroSuggestion, IIntroSuggestionMark } from "src/types";
import star from 'src/assets/icons/chatIntro/star.svg'

export const introSuggestionMarks: IIntroSuggestionMark[] = [
  { text: "Start exploring here", icon: star, color: "D6D1E2" }
]

export const introSuggestions: IIntroSuggestion[] = [
  { id: "1", text: "What are the top 10 products by units sold this year?", highlights: ["top 10 products"] },
  { id: "2", text: "What percentage of total sales volume comes from the top 5 products?", highlights: ["total sales volume"] }
]



export const introGroups: IIntroGroup[] = [
  {
    id: '1',
    color: "#D6D1E2",
    title: "Product discovery",
    subtitle: "Browse categories, see what's trending, and explore new arrivals.",
    sections: [
      { title: "Top-selling products, slow movers, and volume trends.", suggestions: introSuggestions, marks: introSuggestionMarks },
      // { title: "Products by customer behaviour.", suggestions: introSuggestions },
      // { title: "Forecasting & projections", suggestions: introSuggestions }
    ]
  },
  {
    id: '2',
    color: "#DED4BA",
    title: "Support & issues",
    subtitle: "Access common problems, troubleshooting steps, and warranty info.",
    sections: [
      { title: "Top-selling products, slow movers, and volume trends.", suggestions: introSuggestions, marks: introSuggestionMarks },
      { title: "Products by customer behaviour.", suggestions: introSuggestions },
      { title: "Forecasting & projections", suggestions: introSuggestions }
    ]
  },
  {
    id: '3',
    color: "#DEBABA",
    title: "Product outliers",
    subtitle: "Identify products with unusual pricing, specs, performance, or reviews that stand apart from the rest.",
    sections: [
      { title: "Top-selling products, slow movers, and volume trends.", suggestions: introSuggestions, marks: introSuggestionMarks },
      { title: "Products by customer behaviour.", suggestions: introSuggestions },
      { title: "Forecasting & projections", suggestions: introSuggestions }
    ]
  },
  {
    id: '4',
    color: "#DEBABA",
    title: "Product Experts",
    subtitle: "",
    sections: []
  },
  {
    id: '4',
    color: "#DEBABA",
    title: "Product Reverse",
    subtitle: "",
    sections: []
  },
  {
    id: '4',
    color: "#DEBABA",
    title: "Product Title",
    subtitle: "",
    sections: []
  }
]



export const demoEntries: IChatEntry[] = [
  { id: "demo-1", type: 'text', from: "You", text: "We're staying near Museum Island and love modern art, but we want to avoid huge crowds. Can you suggest a smaller gallery or museum for Saturday afternoon?" },
  { id: "demo-2", type: 'text', from: "CityScout", text: "Here's some modern art museums near Museum Island. I've also included some temporary art installations."},
  { id: "demo-3", type: 'status', from: "CityScout", text: "Percolating..."},
  { id: "demo-4", type: 'items', text: '', from: 'CityScout', suggestions: ["Which restaurants have vegetarian options?", "Show me bars in this area", "Are there any outdoor seating options?"], items: [
    {
      id: "1",
      name: "Bud Spencer Museum",
      address: "Waisenstraße 14-16, 10179 Berlin",
      photos: ["https://picsum.photos/600/400", "https://picsum.photos/602/402", "https://picsum.photos/604/404", "https://picsum.photos/606/406"],
      reviews: [
        { text: "Berlin's oldest restaurant with incredible history and traditional German cuisine that has been serving locals and tourists for over 500 years. The recipes have been passed down through generations and maintain their authentic flavors.", highlights: ["oldest restaurant", "incredible history", "traditional German cuisine", "500 years", "authentic flavors"], tags: ["Historic", "Traditional", "German"] },
        { text: "The atmosphere is cozy and authentic, perfect for a romantic dinner.", highlights: ["cozy", "authentic", "romantic dinner"], tags: ["Romantic", "Atmosphere"] },
        { text: "Great schnitzel and beer selection, though service can be slow during peak times. The waitstaff is knowledgeable about the menu and can recommend the best beer pairings for each dish. Despite the occasional wait, the quality of food makes it worthwhile.", highlights: ["Great schnitzel", "beer selection", "service can be slow", "knowledgeable waitstaff", "quality of food"], tags: ["Food", "Beer", "Service"] },
        { text: "Exceptional traditional fare with generous portions and attentive service.", highlights: ["Exceptional traditional fare", "generous portions", "attentive service"], tags: ["Traditional", "Service", "Portions"] },
        { text: "Historic ambiance with excellent German wines and seasonal specialties that change with the harvest. The wine cellar features rare vintages from German regions, and the sommelier provides detailed explanations of each selection.", highlights: ["Historic ambiance", "excellent German wines", "seasonal specialties", "wine cellar", "rare vintages", "sommelier"], tags: ["Wine", "Historic", "Seasonal"] },
        { text: "Charming interior with exposed brick walls and traditional décor throughout.", highlights: ["Charming interior", "exposed brick walls", "traditional décor"], tags: ["Interior", "Traditional", "Architecture"] },
        { text: "Outstanding sauerbraten and spätzle, highly recommended for authentic experience. The sauerbraten is marinated for three days in a secret family recipe, then slow-cooked to perfection. The spätzle is made fresh daily and has the perfect texture - not too soft, not too firm. This dish represents everything great about traditional German cooking and should not be missed by any visitor to Berlin.", highlights: ["Outstanding sauerbraten", "spätzle", "authentic experience", "marinated for three days", "secret family recipe", "slow-cooked", "made fresh daily", "traditional German cooking"], tags: ["Sauerbraten", "Traditional", "Authentic"] },
        { text: "Friendly staff who know the menu well and make excellent recommendations. Each server has been trained extensively on the history of the dishes and can explain the origins of traditional recipes.", highlights: ["Friendly staff", "know the menu", "excellent recommendations", "trained extensively", "history of dishes", "traditional recipes"], tags: ["Staff", "Service", "Knowledge"] },
        { text: "Great location in historic district with easy access to major attractions.", highlights: ["Great location", "historic district", "easy access"], tags: ["Location", "Historic", "Access"] },
        { text: "Memorable dining experience with traditional music and warm hospitality that makes every guest feel like part of the family. The accordion player knows hundreds of German folk songs and takes requests, creating a truly authentic atmosphere that transports you back in time.", highlights: ["Memorable dining experience", "traditional music", "warm hospitality", "part of the family", "accordion player", "German folk songs", "authentic atmosphere", "transports you back in time"], tags: ["Music", "Experience", "Authentic"] },
        { text: "Authentic German beer garden atmosphere with long wooden tables and communal seating.", highlights: ["Authentic German beer garden", "long wooden tables", "communal seating"], tags: ["Beer Garden", "Atmosphere", "Communal"] },
        { text: "Traditional folk music performances on weekends add to the cultural experience with local musicians playing authentic instruments and wearing traditional costumes.", highlights: ["Traditional folk music", "weekend performances", "cultural experience", "local musicians", "authentic instruments", "traditional costumes"], tags: ["Music", "Cultural", "Weekend"] },
        { text: "Extensive wine cellar with rare German vintages and knowledgeable sommelier.", highlights: ["Extensive wine cellar", "rare German vintages", "knowledgeable sommelier"], tags: ["Wine", "German", "Sommelier"] },
        { text: "Seasonal menu changes featuring local ingredients and traditional recipes that have been adapted for modern tastes while maintaining their historical authenticity. The chef sources ingredients from local farms and markets, ensuring freshness and supporting the community.", highlights: ["Seasonal menu changes", "local ingredients", "traditional recipes", "adapted for modern tastes", "historical authenticity", "local farms", "ensuring freshness", "supporting community"], tags: ["Seasonal", "Local", "Traditional"] },
        { text: "Beautiful courtyard dining area perfect for summer evenings and special occasions with string lights and flowering plants creating a magical atmosphere.", highlights: ["Beautiful courtyard", "summer evenings", "special occasions", "string lights", "flowering plants", "magical atmosphere"], tags: ["Courtyard", "Summer", "Romantic"] },
        { text: "Excellent value for money with generous portions and authentic German flavors.", highlights: ["Excellent value", "generous portions", "authentic German flavors"], tags: ["Value", "Portions", "German"] },
        { text: "Historic building with centuries-old architecture and preserved original features that tell the story of Berlin's past. The wooden beams date back to the 1400s and the stone foundation has withstood countless historical events. Walking through the restaurant is like taking a journey through time, with each room revealing different architectural periods and design elements.", highlights: ["Historic building", "centuries-old architecture", "preserved original features", "Berlin's past", "wooden beams", "1400s", "stone foundation", "historical events", "journey through time", "architectural periods"], tags: ["Historic", "Architecture", "Building"] },
        { text: "Professional service with multilingual staff catering to international visitors.", highlights: ["Professional service", "multilingual staff", "international visitors"], tags: ["Service", "International", "Staff"] },
        { text: "Traditional German breakfast available with fresh bread and local meats, including house-made sausages and regional specialties that vary by season.", highlights: ["Traditional German breakfast", "fresh bread", "local meats", "house-made sausages", "regional specialties", "vary by season"], tags: ["Breakfast", "Traditional", "Local"] },
        { text: "Cozy fireplace area perfect for winter dining with warm atmosphere.", highlights: ["Cozy fireplace area", "winter dining", "warm atmosphere"], tags: ["Cozy", "Winter", "Fireplace"] },
        { text: "Schnitzel here is MASSIVE and perfectly crispy 🔥😍", highlights: ["schnitzel", "MASSIVE", "perfectly crispy"], tags: ["Social Media", "Weekend", "Schnitzel"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/abc/went_here_last_weekend_with_friends/", date: "2025-01-22" } },
        { text: "Still dreaming about that sauerbraten tbh 😍", highlights: ["dreaming about", "sauerbraten"], tags: ["Social Media", "Sauerbraten", "Takeout"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/def/still_thinking_about_sauerbraten/", date: "2023-01-14" } },
        { text: "PSA for tourists: This place isn't some touristy gimmick. Real locals actually eat here - saw the same elderly German couple on both visits. That's how you know it's legit 👌", highlights: ["PSA for tourists", "not touristy gimmick", "real locals eat here", "elderly German couple", "both visits", "how you know it's legit"], tags: ["Social Media", "Locals", "Authentic"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/ghi/psa_for_tourists_not_touristy_gimmick/", date: "2024-12-25" } },
        { text: "Been coming here for 2 years and the staff actually remembers my usual order! Pretty sweet but heads up - vegetarian options are limited af. Still love this place though, never been disappointed with the traditional German dishes and the cozy atmosphere makes it perfect for both casual dinners and special occasions.", highlights: ["coming here for 2 years", "staff remembers usual order", "vegetarian options limited", "never disappointed", "traditional German dishes", "cozy atmosphere", "casual dinners", "special occasions"], tags: ["Social Media", "Regular", "Staff"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/jkl/been_coming_here_2_years_now/", date: "2025-01-05" } },
        { text: "This place is straight up magical ✨🏰", highlights: ["straight up magical"], tags: ["Social Media", "Atmosphere", "Medieval"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/mno/fairy_tale_dining_medieval_times/", date: "2023-11-02" } }
      ],
      summary: { text: "Historic restaurant serving traditional German dishes in a cozy atmosphere.", highlights: ["Historic", "traditional German dishes", "cozy atmosphere"] },
      tags: ["German", "Historic", "Traditional", "Cozy"],
      rating: 4.3,
      gem: 'city'
    },
    {
      id: "2",
      name: "Prater Garten",
      address: "Kastanienallee 7-9, 10435 Berlin",
      photos: ["https://picsum.photos/608/408", "https://picsum.photos/610/410", "https://picsum.photos/612/412", "https://picsum.photos/614/414"],
      reviews: [
        { text: "Berlin's oldest beer garden with amazing atmosphere and great traditional food that has been serving the community since 1852. The recipes for traditional dishes have remained unchanged for generations, and the beer is still brewed using traditional methods. This is more than just a restaurant - it's a living piece of Berlin history where locals and tourists come together to celebrate German culture.", highlights: ["oldest beer garden", "amazing atmosphere", "great traditional food", "serving since 1852", "recipes unchanged", "traditional methods", "living piece of Berlin history", "celebrate German culture"], tags: ["Historic", "Beer Garden", "Traditional"] },
        { text: "Perfect place to enjoy a cold beer under the chestnut trees.", highlights: ["cold beer", "chestnut trees"], tags: ["Beer", "Outdoor", "Relaxing"] },
        { text: "Authentic German experience with hearty portions and friendly staff who have been working here for decades and know every regular customer by name.", highlights: ["Authentic German experience", "hearty portions", "friendly staff", "working for decades", "know every regular customer"], tags: ["Authentic", "Staff", "Portions"] },
        { text: "Fantastic outdoor seating with beautiful garden setting and live music.", highlights: ["Fantastic outdoor seating", "beautiful garden setting", "live music"], tags: ["Outdoor", "Garden", "Music"] },
        { text: "Wide selection of local beers and traditional sausages from the grill, including varieties you won't find anywhere else in Berlin. The brewmaster personally selects each beer and the sausages are made fresh daily using traditional recipes passed down through generations.", highlights: ["Wide selection", "local beers", "traditional sausages", "varieties you won't find anywhere else", "brewmaster personally selects", "made fresh daily", "traditional recipes", "passed down through generations"], tags: ["Beer", "Sausages", "Traditional"] },
        { text: "Family-friendly atmosphere with playground area and spacious beer garden.", highlights: ["Family-friendly atmosphere", "playground area", "spacious beer garden"], tags: ["Family", "Playground", "Beer Garden"] },
        { text: "Great pretzels and currywurst, perfect for sharing with friends and experiencing authentic Berlin street food culture.", highlights: ["Great pretzels", "currywurst", "sharing with friends", "authentic Berlin street food culture"], tags: ["Street Food", "Social", "Berlin"] },
        { text: "Historic location with centuries of tradition and authentic Berlin charm.", highlights: ["Historic location", "centuries of tradition", "authentic Berlin charm"], tags: ["Historic", "Traditional", "Charm"] },
        { text: "Excellent service despite busy crowds, staff always helpful and friendly.", highlights: ["Excellent service", "busy crowds", "helpful and friendly"], tags: ["Service", "Staff", "Busy"] },
        { text: "Must-visit destination for authentic Berlin beer garden experience.", highlights: ["Must-visit destination", "authentic Berlin", "beer garden experience"], tags: ["Must-visit", "Berlin", "Beer Garden"] },
        { text: "Traditional Bavarian oompah band performances create festive atmosphere on weekends.", highlights: ["Traditional Bavarian oompah band", "festive atmosphere", "weekends"], tags: ["Music", "Bavarian", "Weekend"] },
        { text: "Massive beer steins and communal tables encourage socializing with other guests.", highlights: ["Massive beer steins", "communal tables", "socializing with guests"], tags: ["Beer", "Social", "Communal"] },
        { text: "Seasonal decorations and Oktoberfest celebrations make it feel like Munich.", highlights: ["Seasonal decorations", "Oktoberfest celebrations", "feel like Munich"], tags: ["Seasonal", "Oktoberfest", "Munich"] },
        { text: "Fresh-baked pretzels served warm with traditional mustard and butter.", highlights: ["Fresh-baked pretzels", "served warm", "traditional mustard"], tags: ["Pretzels", "Fresh", "Traditional"] },
        { text: "Dog-friendly establishment where pets are welcome in the garden area.", highlights: ["Dog-friendly establishment", "pets welcome", "garden area"], tags: ["Pet-friendly", "Dogs", "Garden"] },
        { text: "Traditional German card games and board games available for entertainment.", highlights: ["Traditional German card games", "board games", "entertainment"], tags: ["Games", "Entertainment", "Traditional"] },
        { text: "Self-service beer taps allow guests to pour their own drinks at some tables.", highlights: ["Self-service beer taps", "pour own drinks", "some tables"], tags: ["Self-service", "Beer", "Interactive"] },
        { text: "Hearty German potato salad and sauerkraut complement the meat dishes perfectly.", highlights: ["Hearty German potato salad", "sauerkraut", "complement meat dishes"], tags: ["German", "Sides", "Hearty"] },
        { text: "Large umbrellas provide shade during sunny days in the spacious garden.", highlights: ["Large umbrellas", "provide shade", "sunny days"], tags: ["Shade", "Garden", "Comfort"] },
        { text: "Traditional German folk dancing demonstrations on special cultural evenings.", highlights: ["Traditional German folk dancing", "demonstrations", "cultural evenings"], tags: ["Folk Dancing", "Cultural", "Traditional"] },
        { text: "HOLY SHIT this is peak Berlin beer garden vibes 🍺🔥", highlights: ["peak Berlin", "beer garden vibes"], tags: ["Social Media", "Beer Garden", "Vibes"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/pqr/holy_shit_peak_berlin_beer_garden/", date: "2023-03-27" } },
        { text: "Been dragging my friends here every weekend for the past month lol. The currywurst hits different when you're buzzed and the weather's nice. Pro tip: bring cash!", highlights: ["dragging friends every weekend", "past month", "currywurst hits different", "buzzed", "weather's nice", "bring cash"], tags: ["Social Media", "Currywurst", "Weekend"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/stu/been_dragging_friends_every_weekend/", date: "2024-09-17" } },
        { text: "Update: still mad about the slow service but the atmosphere makes up for it 💯 Watched some old German dudes playing cards for like 2 hours while nursing a beer. This is authentic Berlin energy right here - you can't find this tourist-free vibe anywhere else in the city. The chestnut trees provide perfect shade and the communal tables actually encourage you to make friends with strangers.", highlights: ["mad about slow service", "atmosphere makes up for it", "old German dudes playing cards", "2 hours nursing beer", "authentic Berlin energy", "tourist-free vibe", "chestnut trees provide shade", "communal tables", "make friends with strangers"], tags: ["Social Media", "Atmosphere", "Authentic"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/vwx/still_mad_about_service_but_atmosphere/", date: "2025-01-11" } },
        { text: "Found my new summer spot 🌳☀️ Self-service taps are genius!", highlights: ["new summer spot", "self-service taps", "genius"], tags: ["Social Media", "Summer", "Dogs"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/yza/found_new_summer_spot_self_service/", date: "2023-12-04" } },
        { text: "PSA: if you want authentic German experience without tourist trap vibes, this is it. Locals actually go here and I overheard more German than English which is rare in Berlin these days 😂", highlights: ["authentic German experience", "without tourist trap vibes", "locals actually go here", "overheard more German than English", "rare in Berlin these days"], tags: ["Social Media", "Authentic", "Locals"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/bcd/psa_authentic_without_tourist_trap/", date: "2025-01-09" } }
      ],
      summary: { text: "Traditional beer garden offering authentic German dining under chestnut trees.", highlights: ["Traditional beer garden", "authentic German dining", "chestnut trees"] },
      tags: ["Beer Garden", "Traditional", "Outdoor", "German"],
      rating: 4.5,
      gem: 'neighborhood'
    },
    {
      id: "3",
      name: "Katz Orange",
      address: "Mitte, Bergstraße 22, 10115 Berlin",
      photos: ["https://picsum.photos/616/416", "https://picsum.photos/618/418", "https://picsum.photos/620/420", "https://picsum.photos/622/422"],
      reviews: [
        { text: "Stunning interior design in a former church with innovative cuisine that transforms traditional German dishes into modern culinary art. The gothic architecture provides a breathtaking backdrop for an unforgettable dining experience where every detail has been carefully considered to create perfect harmony between old and new.", highlights: ["Stunning interior design", "former church", "innovative cuisine", "transforms traditional German dishes", "modern culinary art", "gothic architecture", "breathtaking backdrop", "unforgettable dining experience", "perfect harmony"], tags: ["Design", "Architecture", "Innovative"] },
        { text: "The slow-cooked duck is absolutely incredible and worth the price.", highlights: ["slow-cooked duck", "absolutely incredible", "worth the price"], tags: ["Duck", "Food", "Value"] },
        { text: "Creative cocktails and unique atmosphere, though reservations are essential and should be made well in advance due to the restaurant's popularity.", highlights: ["Creative cocktails", "unique atmosphere", "reservations are essential", "made well in advance", "restaurant's popularity"], tags: ["Cocktails", "Atmosphere", "Popular"] },
        { text: "Architectural marvel with soaring ceilings and beautiful stained glass windows.", highlights: ["Architectural marvel", "soaring ceilings", "stained glass windows"], tags: ["Architecture", "Historic", "Design"] },
        { text: "Exceptional wine list with knowledgeable sommelier and perfect pairings that enhance each dish and create a symphony of flavors. The sommelier's expertise is evident in every recommendation, and the wine cellar contains rare bottles from around the world. Each pairing is explained in detail, making the dining experience both educational and delicious.", highlights: ["Exceptional wine list", "knowledgeable sommelier", "perfect pairings", "enhance each dish", "symphony of flavors", "sommelier's expertise", "rare bottles", "around the world", "explained in detail", "educational and delicious"], tags: ["Wine", "Sommelier", "Pairings"] },
        { text: "Modern German cuisine with international influences and artistic presentation.", highlights: ["Modern German cuisine", "international influences", "artistic presentation"], tags: ["Modern", "International", "Presentation"] },
        { text: "Outstanding service with attention to detail and personalized recommendations for each guest's preferences and dietary restrictions.", highlights: ["Outstanding service", "attention to detail", "personalized recommendations", "guest's preferences", "dietary restrictions"], tags: ["Service", "Personalized", "Attention"] },
        { text: "Romantic setting perfect for special occasions and intimate dinners.", highlights: ["Romantic setting", "special occasions", "intimate dinners"], tags: ["Romantic", "Special Occasions", "Intimate"] },
        { text: "Innovative seasonal menu with locally sourced ingredients and creative dishes.", highlights: ["Innovative seasonal menu", "locally sourced ingredients", "creative dishes"], tags: ["Seasonal", "Local", "Creative"] },
        { text: "Unforgettable dining experience in one of Berlin's most unique venues.", highlights: ["Unforgettable dining experience", "unique venues", "Berlin's most"], tags: ["Experience", "Unique", "Berlin"] },
        { text: "Historic pipe organ still functional and occasionally used for special events.", highlights: ["Historic pipe organ", "still functional", "special events"], tags: ["Historic", "Music", "Events"] },
        { text: "Candlelit tables create intimate atmosphere perfect for proposals and anniversaries.", highlights: ["Candlelit tables", "intimate atmosphere", "proposals and anniversaries"], tags: ["Romantic", "Intimate", "Special"] },
        { text: "Chef's table experience allows guests to watch culinary artistry in action.", highlights: ["Chef's table experience", "watch culinary artistry", "in action"], tags: ["Chef's Table", "Interactive", "Culinary"] },
        { text: "Private dining rooms available in former chapels for exclusive gatherings.", highlights: ["Private dining rooms", "former chapels", "exclusive gatherings"], tags: ["Private", "Chapels", "Exclusive"] },
        { text: "Impressive collection of contemporary art displayed throughout the venue.", highlights: ["Impressive collection", "contemporary art", "displayed throughout"], tags: ["Art", "Contemporary", "Display"] },
        { text: "Tasting menu changes monthly showcasing seasonal ingredients and techniques.", highlights: ["Tasting menu changes", "seasonal ingredients", "techniques"], tags: ["Tasting Menu", "Seasonal", "Techniques"] },
        { text: "Exceptional bread selection baked daily in house with artisanal techniques.", highlights: ["Exceptional bread selection", "baked daily", "artisanal techniques"], tags: ["Bread", "Artisanal", "Fresh"] },
        { text: "Sommelier-guided wine tours of the cellar enhance the dining experience.", highlights: ["Sommelier-guided wine tours", "cellar", "enhance dining experience"], tags: ["Wine Tours", "Sommelier", "Experience"] },
        { text: "Acoustic excellence of the space creates unique ambiance during live performances.", highlights: ["Acoustic excellence", "unique ambiance", "live performances"], tags: ["Acoustics", "Live Music", "Ambiance"] },
        { text: "Sustainable practices including locally sourced ingredients and minimal waste.", highlights: ["Sustainable practices", "locally sourced ingredients", "minimal waste"], tags: ["Sustainable", "Local", "Eco-friendly"] },
        { text: "Eating dinner in a CHURCH hits different 🙏😍", highlights: ["eating dinner in CHURCH", "hits different"], tags: ["Social Media", "Church", "Duck"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/efg/worship_food_church_hits_different/", date: "2023-08-26" } },
        { text: "Splurged on the tasting menu for my anniversary and MY GOD every course was like edible art 🎨 RIP my wallet but worth every euro", highlights: ["splurged on tasting menu", "anniversary", "every course like edible art", "RIP my wallet", "worth every euro"], tags: ["Social Media", "Anniversary", "Tasting Menu"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/hij/splurged_anniversary_edible_art/", date: "2024-09-03" } },
        { text: "Been living in Berlin for 3 years and this is hands down the most unique dining experience I've had. The candlelit atmosphere in the former church is straight up magical ✨ The gothic architecture creates this incredible backdrop while you're eating some of the most innovative German cuisine in the city. Reservation required but SO worth planning ahead - this place books up weeks in advance for a reason. The duck is legendary and the wine pairings are perfection.", highlights: ["living in Berlin for 3 years", "most unique dining experience", "candlelit atmosphere", "former church", "straight up magical", "gothic architecture", "incredible backdrop", "innovative German cuisine", "reservation required", "worth planning ahead", "books up weeks in advance", "duck is legendary", "wine pairings perfection"], tags: ["Social Media", "Unique", "Magical"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/klm/living_berlin_3_years_most_unique/", date: "2025-01-18" } },
        { text: "Took my parents here and they spent more time photographing the ceiling than eating lmao 📸", highlights: ["took parents here", "spent more time photographing ceiling", "than eating"], tags: ["Social Media", "Parents", "Architecture"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/nop/parents_would_not_stop_talking/", date: "2023-01-27" } },
        { text: "Date night goals achieved 💯 This place is romantic AF and the food is next level. Pro tip: ask for the chef's table to see the kitchen magic happen.", highlights: ["date night goals achieved", "romantic AF", "food is next level", "ask for chef's table", "kitchen magic happen"], tags: ["Social Media", "Date Night", "Chef's Table"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/qrs/date_night_goals_romantic_af/", date: "2024-09-23" } }
      ],
      summary: { text: "Upscale restaurant in a converted church serving innovative German cuisine.", highlights: ["Upscale restaurant", "converted church", "innovative German cuisine"] },
      tags: ["Upscale", "Innovative", "Unique", "German"],
      rating: 4.7,
      gem: 'city'
    },
    {
      id: "4",
      name: "Hackescher Hof",
      address: "Rosenthaler Str. 40/41, 10178 Berlin",
      photos: ["https://picsum.photos/624/424", "https://picsum.photos/626/426", "https://picsum.photos/628/428", "https://picsum.photos/630/430"],
      reviews: [
        { text: "Excellent location in Hackescher Markt with great German and international dishes.", highlights: ["Excellent location", "Hackescher Markt", "German and international dishes"], tags: ["Location", "German", "International"] },
        { text: "Beautiful courtyard seating and attentive service throughout the meal.", highlights: ["Beautiful courtyard seating", "attentive service"], tags: ["Courtyard", "Service", "Outdoor"] },
        { text: "Wide menu selection with something for everyone, including vegetarian options.", highlights: ["Wide menu selection", "something for everyone", "vegetarian options"], tags: ["Menu Variety", "Vegetarian", "Inclusive"] },
        { text: "Cozy atmosphere with rustic décor and comfortable seating arrangements.", highlights: ["Cozy atmosphere", "rustic décor", "comfortable seating"], tags: ["Cozy", "Rustic", "Comfortable"] },
        { text: "Fresh ingredients and well-prepared dishes with generous portion sizes.", highlights: ["Fresh ingredients", "well-prepared dishes", "generous portion sizes"], tags: ["Fresh", "Quality", "Portions"] },
        { text: "Friendly multilingual staff who make tourists feel welcome and comfortable.", highlights: ["Friendly multilingual staff", "tourists feel welcome", "comfortable"], tags: ["Staff", "Multilingual", "Welcoming"] },
        { text: "Great value for money with reasonable prices in prime location.", highlights: ["Great value", "reasonable prices", "prime location"], tags: ["Value", "Affordable", "Location"] },
        { text: "Perfect spot for lunch or dinner with convenient access to shopping.", highlights: ["Perfect spot", "lunch or dinner", "convenient access to shopping"], tags: ["Convenient", "Shopping", "Central"] },
        { text: "Consistently good food quality with reliable service and pleasant ambiance.", highlights: ["Consistently good food", "reliable service", "pleasant ambiance"], tags: ["Consistent", "Reliable", "Ambiance"] },
        { text: "Popular with locals and visitors alike, truly captures Berlin's dining scene.", highlights: ["Popular with locals", "visitors alike", "Berlin's dining scene"], tags: ["Popular", "Local", "Berlin"] },
        { text: "Historic building with exposed beams and traditional German architectural details.", highlights: ["Historic building", "exposed beams", "traditional German architectural"], tags: ["Historic", "Architecture", "Traditional"] },
        { text: "Live jazz music on Thursday evenings creates sophisticated dining atmosphere.", highlights: ["Live jazz music", "Thursday evenings", "sophisticated dining atmosphere"], tags: ["Jazz", "Live Music", "Sophisticated"] },
        { text: "Seasonal terrace dining with heating lamps for comfortable outdoor experience.", highlights: ["Seasonal terrace dining", "heating lamps", "comfortable outdoor experience"], tags: ["Terrace", "Seasonal", "Outdoor"] },
        { text: "Extensive German beer selection including local Berlin breweries and imports.", highlights: ["Extensive German beer", "local Berlin breweries", "imports"], tags: ["Beer", "German", "Local"] },
        { text: "Traditional German desserts like Black Forest cake and apple strudel.", highlights: ["Traditional German desserts", "Black Forest cake", "apple strudel"], tags: ["Desserts", "Traditional", "German"] },
        { text: "Business lunch menu available weekdays with quick service for professionals.", highlights: ["Business lunch menu", "weekdays", "quick service for professionals"], tags: ["Business", "Lunch", "Professional"] },
        { text: "Private event space available for celebrations and corporate gatherings.", highlights: ["Private event space", "celebrations", "corporate gatherings"], tags: ["Events", "Private", "Corporate"] },
        { text: "Children's menu and high chairs available making it family-friendly.", highlights: ["Children's menu", "high chairs", "family-friendly"], tags: ["Family", "Children", "Kid-friendly"] },
        { text: "Walking distance to major attractions including Museum Island and Brandenburg Gate.", highlights: ["Walking distance", "major attractions", "Museum Island and Brandenburg Gate"], tags: ["Walking", "Attractions", "Central"] },
        { text: "Efficient reservation system with online booking and table selection options.", highlights: ["Efficient reservation system", "online booking", "table selection options"], tags: ["Reservations", "Online", "Efficient"] },
        { text: "Perfect spot when you can't decide what to eat! Menu has literally everything from German classics to Asian fusion. Went with picky eaters and everyone found something they loved. The courtyard is absolutely beautiful and creates this peaceful oasis right in the middle of touristy Hackescher Markt. Service is consistently good and they have heating lamps for chilly evenings.", highlights: ["can't decide what to eat", "menu has literally everything", "German classics to Asian fusion", "picky eaters", "everyone found something they loved", "courtyard absolutely beautiful", "peaceful oasis", "touristy Hackescher Markt", "service consistently good", "heating lamps chilly evenings"], tags: ["Social Media", "Menu Variety", "Courtyard"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/tuv/perfect_spot_cant_decide_what_eat/", date: "2024-02-07" } },
        { text: "Business lunch menu here is clutch 💼🔥", highlights: ["business lunch menu", "clutch"], tags: ["Social Media", "Business Lunch", "Convenient"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/wxy/been_here_6_times_past_month/", date: "2024-02-11" } },
        { text: "Brought my parents here during their Berlin visit and they were SO impressed with the historic building vibes. Dad wouldn't stop talking about the exposed beams 🙄", highlights: ["brought parents Berlin visit", "impressed with historic building vibes", "Dad wouldn't stop talking", "exposed beams"], tags: ["Social Media", "Parents", "Jazz Night"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/zab/brought_parents_berlin_visit_impressed/", date: "2024-02-16" } },
        { text: "Hackescher Markt can be touristy AF but this place feels authentic. Saw actual Berliners having dinner here on a Tuesday night which is always a good sign. The Black Forest cake is bomb btw 🍰", highlights: ["Hackescher Markt touristy AF", "place feels authentic", "actual Berliners having dinner", "Tuesday night good sign", "Black Forest cake bomb"], tags: ["Social Media", "Authentic", "Dessert"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/cde/hackescher_markt_touristy_af_but_authentic/", date: "2024-02-19" } },
        { text: "PSA: heating lamps on the terrace! ❄️🔥", highlights: ["heating lamps", "terrace"], tags: ["Social Media", "Terrace", "Heating"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/fgh/psa_heating_lamps_terrace_eat_outside/", date: "2024-02-22" } }
      ],
      summary: { text: "Centrally located restaurant with diverse menu and charming courtyard.", highlights: ["Centrally located", "diverse menu", "charming courtyard"] },
      tags: ["Central", "Diverse", "Courtyard", "International"],
      rating: 4.2
    },
    {
      id: "5",
      name: "Lokal Modern",
      address: "Linienstraße 160, 10115 Berlin",
      photos: ["https://picsum.photos/632/432", "https://picsum.photos/634/434", "https://picsum.photos/636/436", "https://picsum.photos/638/438"],
      reviews: [
        { text: "Modern interpretation of German cuisine with locally sourced ingredients.", highlights: ["Modern interpretation", "German cuisine", "locally sourced ingredients"], tags: ["Modern", "German", "Local"] },
        { text: "The seasonal menu changes regularly and always features creative dishes.", highlights: ["seasonal menu", "changes regularly", "creative dishes"], tags: ["Seasonal", "Creative", "Menu"] },
        { text: "Intimate setting with excellent wine pairings and knowledgeable staff.", highlights: ["Intimate setting", "excellent wine pairings", "knowledgeable staff"], tags: ["Intimate", "Wine", "Staff"] },
        { text: "Sleek modern design with open kitchen concept and innovative presentation.", highlights: ["Sleek modern design", "open kitchen concept", "innovative presentation"], tags: ["Design", "Open Kitchen", "Innovative"] },
        { text: "Chef's tasting menu is outstanding with unique flavor combinations.", highlights: ["Chef's tasting menu", "outstanding", "unique flavor combinations"], tags: ["Tasting Menu", "Chef", "Unique"] },
        { text: "Small but perfectly curated menu with focus on quality over quantity.", highlights: ["Small but perfectly curated", "focus on quality", "over quantity"], tags: ["Curated", "Quality", "Focus"] },
        { text: "Exceptional desserts and creative cocktails made with house-made ingredients.", highlights: ["Exceptional desserts", "creative cocktails", "house-made ingredients"], tags: ["Desserts", "Cocktails", "House-made"] },
        { text: "Trendy spot popular with young professionals and food enthusiasts.", highlights: ["Trendy spot", "young professionals", "food enthusiasts"], tags: ["Trendy", "Professional", "Food"] },
        { text: "Sustainable approach with zero-waste kitchen and eco-friendly practices.", highlights: ["Sustainable approach", "zero-waste kitchen", "eco-friendly practices"], tags: ["Sustainable", "Zero-waste", "Eco-friendly"] },
        { text: "Book ahead as this hidden gem fills up quickly with returning customers.", highlights: ["Book ahead", "hidden gem", "returning customers"], tags: ["Hidden Gem", "Popular", "Reservations"] },
        { text: "Minimalist décor with clean lines and carefully selected contemporary artwork.", highlights: ["Minimalist décor", "clean lines", "contemporary artwork"], tags: ["Minimalist", "Art", "Design"] },
        { text: "Interactive dining experience where chef explains each course personally.", highlights: ["Interactive dining experience", "chef explains", "each course personally"], tags: ["Interactive", "Chef", "Personal"] },
        { text: "Molecular gastronomy techniques create surprising textures and presentations.", highlights: ["Molecular gastronomy techniques", "surprising textures", "presentations"], tags: ["Molecular", "Techniques", "Innovative"] },
        { text: "Extensive natural wine selection focusing on German and Austrian producers.", highlights: ["Extensive natural wine", "German and Austrian producers"], tags: ["Natural Wine", "German", "Austrian"] },
        { text: "Counter seating allows diners to watch the culinary team at work.", highlights: ["Counter seating", "watch culinary team", "at work"], tags: ["Counter", "Interactive", "Kitchen"] },
        { text: "Foraging expeditions with chef to nearby markets for ingredient selection.", highlights: ["Foraging expeditions", "chef to nearby markets", "ingredient selection"], tags: ["Foraging", "Chef", "Ingredients"] },
        { text: "Vegetarian and vegan options that rival traditional meat dishes in creativity.", highlights: ["Vegetarian and vegan options", "rival traditional meat", "creativity"], tags: ["Vegetarian", "Vegan", "Creative"] },
        { text: "Small plates concept encourages sharing and trying multiple flavor profiles.", highlights: ["Small plates concept", "encourages sharing", "multiple flavor profiles"], tags: ["Small Plates", "Sharing", "Flavors"] },
        { text: "Artisanal bread program with sourdough made from ancient grain varieties.", highlights: ["Artisanal bread program", "sourdough", "ancient grain varieties"], tags: ["Artisanal", "Bread", "Ancient Grains"] },
        { text: "Cocktail program features house-made bitters and locally foraged ingredients.", highlights: ["Cocktail program", "house-made bitters", "locally foraged ingredients"], tags: ["Cocktails", "House-made", "Local"] },
        { text: "They took schnitzel and made it ART 🤌🎨", highlights: ["took schnitzel", "made it ART"], tags: ["Social Media", "Tasting Menu", "Art"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/ijk/everything_love_modern_berlin_cuisine/", date: "2024-02-09" } },
        { text: "Been trying to get a table here for MONTHS and finally scored a reservation! 🎉 Worth the wait - the open kitchen concept is so cool to watch.", highlights: ["trying to get table for MONTHS", "finally scored reservation", "worth the wait", "open kitchen concept cool to watch"], tags: ["Social Media", "Reservation", "Instagram"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/lmn/trying_get_table_months_finally/", date: "2024-02-13" } },
        { text: "Went here for my birthday dinner and the chef literally came out to explain each course personally 👨‍🍳 The molecular gastronomy techniques are wild - had foam that tasted like mushrooms?? Mind = blown. Expensive but unforgettable experience that's worth every euro if you're into innovative fine dining. The way they deconstruct traditional German dishes and rebuild them with modern techniques is absolutely genius. Every bite tells a story and the presentation is museum-quality.", highlights: ["went for birthday dinner", "chef came out explain each course personally", "molecular gastronomy techniques wild", "foam tasted like mushrooms", "mind blown", "expensive but unforgettable", "worth every euro", "innovative fine dining", "deconstruct traditional German dishes", "rebuild with modern techniques", "absolutely genius", "every bite tells story", "presentation museum-quality"], tags: ["Social Media", "Birthday", "Molecular"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/opq/went_birthday_dinner_chef_came_out/", date: "2024-02-21" } },
        { text: "Counter seating is the way to go! Got to watch them plate everything like artists 🌿", highlights: ["counter seating way to go", "watch them plate like artists"], tags: ["Social Media", "Counter Seating", "Foraging"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/rst/counter_seating_way_to_go_here/", date: "2024-02-24" } },
        { text: "Vegetarian here and OMG their plant-based dishes are more creative than most meat restaurants' entire menus! 🌱 The ancient grain bread program is *chef's kiss*", highlights: ["vegetarian here", "plant-based dishes more creative", "most meat restaurants entire menus", "ancient grain bread program", "chef's kiss"], tags: ["Social Media", "Vegetarian", "Creative"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/uvw/vegetarian_omg_plant_based_dishes/", date: "2024-02-27" } }
      ],
      summary: { text: "Contemporary German restaurant featuring seasonal, locally-sourced cuisine.", highlights: ["Contemporary German", "seasonal", "locally-sourced cuisine"] },
      tags: ["Modern", "Seasonal", "Local", "Contemporary"],
      rating: 4.6
    },
    {
      id: "6",
      name: "Borchardt",
      address: "Französische Str. 47, 10117 Berlin",
      photos: ["https://picsum.photos/640/440", "https://picsum.photos/642/442", "https://picsum.photos/644/444", "https://picsum.photos/646/446"],
      reviews: [
        { text: "Elegant French bistro atmosphere with excellent seafood and classic dishes.", highlights: ["Elegant French bistro", "excellent seafood", "classic dishes"], tags: ["French", "Seafood", "Elegant"] },
        { text: "The oysters and wine selection are outstanding, perfect for special occasions.", highlights: ["oysters", "wine selection", "outstanding", "special occasions"], tags: ["Oysters", "Wine", "Special"] },
        { text: "Historic ambiance with top-notch service, though prices are on the higher side.", highlights: ["Historic ambiance", "top-notch service", "prices are on the higher side"], tags: ["Historic", "Service", "Premium"] },
        { text: "Classic French cuisine with impeccable presentation and authentic flavors.", highlights: ["Classic French cuisine", "impeccable presentation", "authentic flavors"], tags: ["French", "Presentation", "Authentic"] },
        { text: "Sophisticated wine cellar with rare vintages and expert recommendations.", highlights: ["Sophisticated wine cellar", "rare vintages", "expert recommendations"], tags: ["Wine Cellar", "Rare Wines", "Expert"] },
        { text: "Beautiful interior with marble tables and traditional French bistro décor.", highlights: ["Beautiful interior", "marble tables", "traditional French bistro décor"], tags: ["Interior", "Marble", "French"] },
        { text: "Professional waitstaff with extensive knowledge of menu and wine pairings.", highlights: ["Professional waitstaff", "extensive knowledge", "wine pairings"], tags: ["Professional", "Knowledge", "Service"] },
        { text: "Premium ingredients and traditional preparation methods ensure authentic taste.", highlights: ["Premium ingredients", "traditional preparation", "authentic taste"], tags: ["Premium", "Traditional", "Authentic"] },
        { text: "Dress code enforced, creating refined atmosphere for upscale dining.", highlights: ["Dress code enforced", "refined atmosphere", "upscale dining"], tags: ["Dress Code", "Refined", "Upscale"] },
        { text: "Reservations essential for this Berlin institution favored by celebrities.", highlights: ["Reservations essential", "Berlin institution", "favored by celebrities"], tags: ["Reservations", "Institution", "Celebrities"] },
        { text: "Parisian-style zinc bar perfect for aperitifs and people-watching.", highlights: ["Parisian-style zinc bar", "aperitifs", "people-watching"], tags: ["Bar", "Parisian", "People-watching"] },
        { text: "Daily fresh fish selection flown in from French coast and displayed on ice.", highlights: ["Daily fresh fish", "French coast", "displayed on ice"], tags: ["Fish", "Fresh", "French"] },
        { text: "Traditional French onion soup served in authentic ceramic bowls with gruyere.", highlights: ["Traditional French onion soup", "ceramic bowls", "gruyere"], tags: ["French Soup", "Traditional", "Gruyere"] },
        { text: "Extensive Champagne menu featuring prestigious houses and vintage selections.", highlights: ["Extensive Champagne menu", "prestigious houses", "vintage selections"], tags: ["Champagne", "Prestigious", "Vintage"] },
        { text: "Classic French pastries and desserts prepared by trained patissier.", highlights: ["Classic French pastries", "trained patissier"], tags: ["Pastries", "French", "Patissier"] },
        { text: "White tablecloths and silver service maintain traditional French dining elegance.", highlights: ["White tablecloths", "silver service", "French dining elegance"], tags: ["Elegant", "Service", "Traditional"] },
        { text: "Lunch menu features lighter fare perfect for business meetings.", highlights: ["Lunch menu", "lighter fare", "business meetings"], tags: ["Lunch", "Business", "Light"] },
        { text: "Weekend brunch includes traditional French breakfast items and pastries.", highlights: ["Weekend brunch", "traditional French breakfast", "pastries"], tags: ["Brunch", "French", "Weekend"] },
        { text: "Private dining room available for intimate celebrations and business dinners.", highlights: ["Private dining room", "intimate celebrations", "business dinners"], tags: ["Private", "Celebrations", "Business"] },
        { text: "Exceptional cheese selection from renowned French fromagerie with expert pairings.", highlights: ["Exceptional cheese selection", "French fromagerie", "expert pairings"], tags: ["Cheese", "French", "Expert"] },
        { text: "Felt fancy AF eating here 💅✨", highlights: ["felt fancy AF"], tags: ["Social Media", "Fancy", "Celebrities"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/xyz/felt_fancy_af_eating_here_oysters/", date: "2024-02-06" } },
        { text: "This is where you go when you want to impress someone 👔 The service is next level - they folded my napkin when I went to the bathroom??", highlights: ["where you go to impress someone", "service is next level", "folded my napkin bathroom"], tags: ["Social Media", "Impressive", "Service"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/abc/where_you_go_impress_someone/", date: "2024-02-12" } },
        { text: "Berlin institution vibes for real 🏛️ Been wanting to try this place forever and finally went for my promotion celebration. The zinc bar area is perfect for drinks before dinner and the champagne selection is absolutely INSANE - they have bottles I'd only seen in wine magazines. Service is white-glove level and the oysters are flown in daily from France. Expensive but this is the kind of place that makes you feel like you've truly made it in life.", highlights: ["Berlin institution vibes", "wanting to try forever", "promotion celebration", "zinc bar area perfect drinks before dinner", "champagne selection absolutely INSANE", "bottles only seen wine magazines", "service white-glove level", "oysters flown in daily France", "expensive", "feel like truly made it life"], tags: ["Social Media", "Institution", "Champagne"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/def/berlin_institution_vibes_for_real/", date: "2024-02-18" } },
        { text: "Fair warning: EXPENSIVE but worth it 🍷💸", highlights: ["EXPENSIVE but worth it"], tags: ["Social Media", "Expensive", "Paris"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/ghi/fair_warning_expensive_but_experience/", date: "2024-02-23" } },
        { text: "Took a client here for lunch and they were SO impressed 💼 The white tablecloth service sealed the deal.", highlights: ["took client lunch", "SO impressed", "white tablecloth service", "sealed the deal"], tags: ["Social Media", "Business", "Bar"], source: { from: "reddit", url: "www.reddit.com/r/berlinsocialclub/comments/jkl/took_client_here_lunch_impressed/", date: "2024-02-26" } }
      ],
      summary: { text: "Upscale French bistro known for seafood and elegant dining experience.", highlights: ["Upscale French bistro", "seafood", "elegant dining experience"] },
      tags: ["French", "Upscale", "Seafood", "Elegant"],
      rating: 4.4
    }
  ] }
]
