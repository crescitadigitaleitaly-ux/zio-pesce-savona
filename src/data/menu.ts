export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  alt: string;
  dietary?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  nameIt: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'aperitivi',
    name: 'Aperitivi',
    nameIt: 'Aperitivi',
    items: [
      { id: 'aperol-spritz', name: 'Aperol Spritz', description: 'Classic Italian aperitivo with Aperol, prosecco, soda, ice and orange slice.', price: '€7', category: 'Aperitivi', image: '/images/menu/aperol-spritz.jpg', alt: 'Aperol Spritz cocktail with orange slice served over ice' },
      { id: 'campari-spritz', name: 'Campari Spritz', description: 'Vibrant bitter red spritz with Campari, prosecco and soda, served chilled with citrus.', price: '€7', category: 'Aperitivi', image: '/images/menu/campari-spritz.jpg', alt: 'Campari Spritz cocktail in a wine glass with citrus garnish' },
      { id: 'hugo-spritz', name: 'Hugo Spritz', description: 'Floral elderflower spritz with prosecco, mint and lime.', price: '€7', category: 'Aperitivi', image: '/images/menu/hugo-spritz.jpg', alt: 'Hugo Spritz with elderflower and mint' },
      { id: 'violetta-spritz', name: 'Violetta Spritz', description: 'Delicate violet-infused spritz with prosecco.', price: '€7', category: 'Aperitivi', image: '/images/menu/violetta-spritz.jpg', alt: 'Violetta Spritz cocktail' },
      { id: 'calice-prosecco', name: 'Calice Prosecco', description: 'A glass of chilled prosecco.', price: '€7', category: 'Aperitivi', image: '/images/menu/calice-prosecco.jpg', alt: 'Glass of prosecco' },
      { id: 'martini-rosso-bianco', name: 'Martini Rosso/Bianco', description: 'Classic Italian vermouth, red or white.', price: '€6', category: 'Aperitivi', image: '/images/menu/martini-rosso-bianco.jpg', alt: 'Martini Rosso or Bianco' },
      { id: 'crodino', name: 'Crodino', description: 'Non-alcoholic Italian bitter aperitivo.', price: '€4', category: 'Aperitivi', image: '/images/menu/crodino.jpg', alt: 'Crodino non-alcoholic aperitivo' },
      { id: 'negroni', name: 'Negroni', description: 'Gin, Campari and sweet vermouth — the Italian classic.', price: '€8', category: 'Aperitivi', image: '/images/menu/negroni.jpg', alt: 'Negroni cocktail' },
      { id: 'negrosky', name: 'Negrosky', description: 'Vodka twist on the Negroni.', price: '€8', category: 'Aperitivi', image: '/images/menu/negrosky.jpg', alt: 'Negrosky cocktail' },
      { id: 'gin-tonic-lemon', name: 'Gin Tonic/Lemon', description: 'Refreshing gin with tonic or lemon soda.', price: '€8', category: 'Aperitivi', image: '/images/menu/gin-tonic-lemon.jpg', alt: 'Gin Tonic cocktail' },
      { id: 'cuba-libre', name: 'Cuba Libre', description: 'Rum, cola and lime.', price: '€8', category: 'Aperitivi', image: '/images/menu/cuba-libre.jpg', alt: 'Cuba Libre cocktail' },
      { id: 'americano', name: 'Americano', description: 'Campari, sweet vermouth and soda.', price: '€8', category: 'Aperitivi', image: '/images/menu/americano.jpg', alt: 'Americano cocktail' },
      { id: 'pastis', name: 'Pastis', description: 'Anise-flavored French spirit with water.', price: '€6', category: 'Aperitivi', image: '/images/menu/pastis.jpg', alt: 'Pastis drink' },
    ]
  },
  {
    id: 'antipasti',
    name: 'Antipasti',
    nameIt: 'Antipasti',
    items: [
      { id: 'plateaux-ostriche', name: 'Plateaux di Ostriche Fin de Claire N3 Special', description: 'Five Fine de Claire oysters served chilled on crushed ice with lemon.', price: '€20', category: 'Antipasti', image: '/images/menu/plateaux-di-ostriche-fin-de-claire-n3-special-5-pezzi.jpg', alt: 'Fine de Claire oysters served on crushed ice with lemon' },
      { id: 'cozze-al-verde', name: 'Le Cozze al Verde', description: 'Fresh mussels with parsley, white wine and lemon zest, served with seasoned toasted bread.', price: '€16', category: 'Antipasti', image: '/images/menu/le-cozze-al-verde.jpg', alt: 'Mussels with parsley, lemon and crispy bread croutons' },
      { id: 'caprese', name: 'Caprese', description: 'Cuore di bue tomatoes with D.O.P. buffalo mozzarella, extra virgin olive oil and oregano.', price: '€12', category: 'Antipasti', image: '/images/menu/caprese.jpg', alt: 'Caprese salad with buffalo mozzarella, tomato and basil', dietary: ['vegetarian'] },
      { id: 'tris-antipasti', name: 'Tris di Antipasti Zio Pesce', description: 'Seafood salad, Ligurian creamed cod and tuna tartare with burrata and pistachio.', price: '€22', category: 'Antipasti', image: '/images/menu/tris-di-antipasti-zio-pesce.jpg', alt: 'Zio Pesce seafood appetizer trio' },
      { id: 'tartare-tonno', name: 'Tartare di Tonno', description: 'Hand-cut tuna tartare with stracciatella, pistachio, citrus and pear.', price: '€18', category: 'Antipasti', image: '/images/menu/tartare-di-tonno.jpg', alt: 'Tuna tartare with stracciatella and pistachio' },
      { id: 'baccala-mantecato', name: 'Baccalà mantecato alla Ligure', description: 'Creamed salt cod Ligurian style with confit tomato, D.O.P. pesto and seasoned crostone.', price: '€15', category: 'Antipasti', image: '/images/menu/baccal-mantecato-alla-ligure-brandacujun.jpg', alt: 'Ligurian baccalà mantecato with pesto' },
    ]
  },
  {
    id: 'primi',
    name: 'Primi',
    nameIt: 'I Primi',
    items: [
      { id: 'spaghetti-spadellati', name: 'Spaghetti Spadellati', description: 'Pan-tossed spaghetti with fresh anchovies, Taggiasca olives, cherry tomatoes, pine nuts and breadcrumbs.', price: '€17', category: 'I Primi', image: '/images/menu/spaghetti-spadellati.jpg', alt: 'Spaghetti with anchovies and Taggiasca olives' },
      { id: 'linguine-vongole', name: 'Linguine alle Vongole con pesto di pistacchio', description: 'Linguine with clams and pistachio pesto — briny freshness with a creamy, nutty finish.', price: '€20', category: 'I Primi', image: '/images/menu/linguine-alle-vongole-con-pesto-di-pistacchio.jpg', alt: 'Linguine with clams and pistachio pesto' },
      { id: 'spaghettoni-scoglio', name: 'Spaghettoni allo Scoglio', description: 'Thick spaghetti with mussels, clams, cuttlefish, prawns, king prawn, calamari and shellfish bisque.', price: '€22', category: 'I Primi', image: '/images/menu/spaghettoni-allo-scoglio.jpg', alt: 'Seafood spaghetti allo scoglio' },
      { id: 'ravioloni-cernia', name: 'Ravioloni di Cernia', description: 'Large grouper-filled ravioli with shellfish bisque, mussels and prawns.', price: '€18', category: 'I Primi', image: '/images/menu/ravioloni-di-cernia.jpg', alt: 'Grouper ravioli with shellfish bisque' },
      { id: 'trofie-pesto', name: 'Trofie al Pesto di Prà D.O.P.', description: 'Traditional Ligurian trofie with Pesto di Prà D.O.P., potatoes and green beans.', price: '€15', category: 'I Primi', image: '/images/menu/trofie-al-pesto-di-pr-d-o-p.jpg', alt: 'Trofie with Genovese pesto', dietary: ['vegetarian'] },
      { id: 'tagliolini-nero', name: 'Tagliolini al Nero di Seppia', description: 'Squid-ink tagliolini with scampi, zucchini, shellfish bisque, cherry tomatoes and lemon zest.', price: '€18', category: 'I Primi', image: '/images/menu/tagliolini-al-nero-di-seppia.jpg', alt: 'Squid ink tagliolini with scampi' },
    ]
  },
  {
    id: 'secondi',
    name: 'Secondi',
    nameIt: 'I Secondi',
    items: [
      { id: 'gran-fritto-misto', name: 'Gran Fritto misto del Golfo', description: 'Crispy mixed Gulf seafood lightly fried and served golden with fresh lemon.', price: '€22', category: 'I Secondi', image: '/images/menu/gran-fritto-misto-del-golfo.jpg', alt: 'Gran Fritto misto del Golfo' },
      { id: 'fritto-calamari', name: 'Fritto di Calamari', description: 'Lightly floured squid rings fried until crisp, served with lemon.', price: '€17', category: 'I Secondi', image: '/images/menu/fritto-di-calamari.jpg', alt: 'Fried calamari rings' },
      { id: 'trancio-tonno', name: 'Trancio di Tonno', description: 'Seared tuna steak with seasonal vegetables and Ligurian herbs.', price: '€20', category: 'I Secondi', image: '/images/menu/trancio-di-tonno.jpg', alt: 'Seared tuna steak' },
      { id: 'ombrina-ligure', name: 'Ombrina alla Ligure', description: 'Local meagre fish prepared Ligurian style with herbs and olive oil.', price: '€22', category: 'I Secondi', image: '/images/menu/ombrina-alla-ligure.jpg', alt: 'Ombrina alla Ligure' },
      { id: 'gran-grigliata', name: 'Gran Grigliata di Pesce', description: 'Generous grilled seafood platter featuring the freshest daily catch.', price: '€46', category: 'I Secondi', image: '/images/menu/gran-grigliata-di-pesce.jpg', alt: 'Gran Grigliata di Pesce' },
      { id: 'tagliata-angus', name: 'Tagliata di Angus', description: 'Sliced Angus beef served medium rare with seasonal garnish.', price: '€18', category: 'I Secondi', image: '/images/menu/tagliata-di-angus.jpg', alt: 'Tagliata di Angus' },
      { id: 'insalatona', name: 'Insalatona Zio Pesce', description: 'Fresh mixed salad with seafood and seasonal vegetables.', price: '€15', category: 'I Secondi', image: '/images/menu/insalatona-zio-pesce.jpg', alt: 'Insalatona Zio Pesce' },
    ]
  },
  {
    id: 'contorni',
    name: 'Contorni',
    nameIt: 'Contorni',
    items: [
      { id: 'insalatina', name: 'Insalatina mista', description: 'Fresh seasonal mixed salad.', price: '€7', category: 'Contorni', image: '/images/menu/insalatina-mista.jpg', alt: 'Mixed green salad', dietary: ['vegan'] },
      { id: 'finocchi', name: 'Finocchi Gratinati', description: 'Oven baked fennel with golden gratin.', price: '€8', category: 'Contorni', image: '/images/menu/finocchi-gratinati.jpg', alt: 'Gratinated fennel', dietary: ['vegetarian'] },
      { id: 'patatine', name: 'Patatine fritte rustiche', description: 'Rustic-cut fries served with house dip.', price: '€7', category: 'Contorni', image: '/images/menu/patatine-fritte-rustiche.jpg', alt: 'Rustic fries', dietary: ['vegan'] },
      { id: 'caponata', name: 'Padellino di caponata', description: 'Traditional vegetable caponata with pine nuts and raisins.', price: '€8', category: 'Contorni', image: '/images/menu/padellino-di-caponata-di-verdure-con-pinoli-e-uvetta.jpg', alt: 'Vegetable caponata', dietary: ['vegan'] },
    ]
  },
  {
    id: 'dolci',
    name: 'Dolci',
    nameIt: 'Dolci della Casa',
    items: [
      { id: 'tiramisu', name: 'Tiramisù', description: 'Classic Italian tiramisù with mascarpone and espresso.', price: '€7', category: 'Dolci', image: '/images/menu/tiramis.jpg', alt: 'Tiramisù' },
      { id: 'cannolo', name: 'Cannolo siciliano scomposto', description: 'Deconstructed Sicilian cannolo with ricotta and chocolate chips.', price: '€7', category: 'Dolci', image: '/images/menu/cannolo-siciliano-scomposto.jpg', alt: 'Deconstructed Sicilian cannolo' },
      { id: 'souffle', name: 'Soufflé al cioccolato fondente', description: 'Warm dark chocolate soufflé with raspberry coulis.', price: '€7', category: 'Dolci', image: '/images/menu/souffl-al-cioccolato-fondente.jpg', alt: 'Chocolate soufflé' },
      { id: 'cheesecake', name: 'Cheesecake ai frutti di bosco', description: 'Creamy cheesecake topped with wild berries.', price: '€7', category: 'Dolci', image: '/images/menu/cheesecake-ai-frutti-di-bosco.jpg', alt: 'Berry cheesecake' },
      { id: 'millefoglie', name: 'Millefoglie', description: 'Crisp puff pastry with diplomat cream and raspberry coulis.', price: '€8', category: 'Dolci', image: '/images/menu/millefoglie.jpg', alt: 'Millefoglie pastry' },
      { id: 'torta-nocciola', name: 'Torta alla nocciola', description: 'Gluten-free hazelnut cake with gelato.', price: '€7', category: 'Dolci', image: '/images/menu/torta-alla-nocciola-gluten-free.jpg', alt: 'Hazelnut cake', dietary: ['gluten-free'] },
      { id: 'ananas', name: 'Ananas fresco', description: 'Fresh sliced pineapple.', price: '€5', category: 'Dolci', image: '/images/menu/ananas-fresco.jpg', alt: 'Fresh pineapple', dietary: ['vegan'] },
      { id: 'sorbetti', name: 'Sorbetti', description: 'Refreshing lemon, Chinotto, vodka or mirto sorbet.', price: '€6', category: 'Dolci', image: '/images/menu/sorbetti.jpg', alt: 'Citrus sorbet', dietary: ['vegan'] },
    ]
  },
  {
    id: 'pizze-gourmet',
    name: 'Pizze Gourmet al Nero di Seppia',
    nameIt: 'Pizze Gourmet al Nero di Seppia',
    items: [
      { id: 'la-gamberona', name: 'La Gamberona', description: 'Squid-ink dough topped with premium prawns and Mediterranean ingredients.', price: '€15', category: 'Pizze Gourmet', image: '/images/menu/la-gamberona.jpg', alt: 'La Gamberona black pizza with prawns' },
      { id: 'ultima-spiaggia', name: "L'Ultima Spiaggia", description: 'Sea-inspired gourmet squid-ink pizza.', price: '€13', category: 'Pizze Gourmet', image: '/images/menu/l-ultima-spiaggia.jpg', alt: "L'Ultima Spiaggia seafood pizza" },
      { id: 'frutti-di-mare', name: 'Frutti di Mare', description: 'Classic seafood pizza with mussels, clams, prawns and squid on black dough.', price: '€15', category: 'Pizze Gourmet', image: '/images/menu/frutti-di-mare.jpg', alt: 'Frutti di Mare pizza' },
      { id: 'la-calamarina', name: 'La Calamarina', description: 'Squid-focused gourmet pizza with grilled calamari and lemon zest.', price: '€16', category: 'Pizze Gourmet', image: '/images/menu/la-calamarina.jpg', alt: 'La Calamarina squid pizza' },
      { id: 'la-perla-nera', name: 'La Perla Nera', description: 'Squid-ink calzone filled with seafood.', price: '€15', category: 'Pizze Gourmet', image: '/images/menu/la-perla-nera.jpg', alt: 'La Perla Nera black calzone' },
      { id: 'impolpata', name: "L'Impolpata", description: 'Signature octopus gourmet pizza with burrata.', price: '€16', category: 'Pizze Gourmet', image: '/images/menu/l-impolpata.jpg', alt: "L'Impolpata octopus pizza" },
      { id: 'la-salmone', name: 'La Salmone', description: 'Smoked salmon on squid-ink dough with stracciatella and dill.', price: '€15', category: 'Pizze Gourmet', image: '/images/menu/la-salmone.jpg', alt: 'La Salmone smoked salmon pizza' },
      { id: 'la-cantabrica', name: 'La Cantabrica', description: 'Cantabrian anchovy gourmet pizza.', price: '€15', category: 'Pizze Gourmet', image: '/images/menu/la-cantabrica.jpg', alt: 'La Cantabrica anchovy pizza' },
    ]
  },
  {
    id: 'pizze-classiche',
    name: 'Pizze Classiche',
    nameIt: 'Pizze Classiche',
    items: [
      { id: 'marinara', name: 'Marinara', description: 'Tomato, garlic and oregano.', price: '€6', category: 'Pizze Classiche', image: '/images/menu/marinara.jpg', alt: 'Marinara pizza', dietary: ['vegan'] },
      { id: 'margherita', name: 'Margherita', description: 'Tomato, mozzarella and basil.', price: '€7', category: 'Pizze Classiche', image: '/images/menu/margherita.jpg', alt: 'Margherita pizza', dietary: ['vegetarian'] },
      { id: 'calzone', name: 'Calzone', description: 'Folded pizza with mozzarella and ham.', price: '€9', category: 'Pizze Classiche', image: '/images/menu/calzone.jpg', alt: 'Calzone' },
      { id: 'napoli', name: 'Napoli', description: 'Tomato, mozzarella, anchovies and capers.', price: '€9', category: 'Pizze Classiche', image: '/images/menu/napoli.jpg', alt: 'Napoli pizza' },
      { id: 'diavola', name: 'Diavola', description: 'Spicy salami pizza with chili oil.', price: '€10', category: 'Pizze Classiche', image: '/images/menu/diavola.jpg', alt: 'Diavola spicy pizza' },
      { id: 'bufala', name: 'Bufala', description: 'Buffalo mozzarella pizza.', price: '€10', category: 'Pizze Classiche', image: '/images/menu/bufala.jpg', alt: 'Bufala pizza', dietary: ['vegetarian'] },
      { id: 'tonno-cipolla', name: 'Tonno e Cipolla', description: 'Tuna and red onion pizza.', price: '€11', category: 'Pizze Classiche', image: '/images/menu/tonno-e-cipolla.jpg', alt: 'Tonno e Cipolla pizza' },
      { id: 'capricciosa', name: 'Capricciosa', description: 'Artichokes, mushrooms, ham and olives.', price: '€12', category: 'Pizze Classiche', image: '/images/menu/capricciosa.jpg', alt: 'Capricciosa pizza' },
      { id: '4-stagioni', name: '4 Stagioni', description: 'Four seasons pizza.', price: '€10', category: 'Pizze Classiche', image: '/images/menu/4-stagioni.jpg', alt: 'Four seasons pizza' },
      { id: 'bismark', name: 'Bismark', description: 'Egg and ham pizza.', price: '€10', category: 'Pizze Classiche', image: '/images/menu/bismark.jpg', alt: 'Bismark pizza' },
      { id: 'prosciutto-cotto', name: 'Prosciutto Cotto', description: 'Classic ham pizza.', price: '€9', category: 'Pizze Classiche', image: '/images/menu/prosciutto-cotto.jpg', alt: 'Ham pizza' },
      { id: 'prosciutto-crudo', name: 'Prosciutto Crudo', description: 'Thin slices of cured prosciutto on pizza.', price: '€10', category: 'Pizze Classiche', image: '/images/menu/prosciutto-crudo.jpg', alt: 'Prosciutto crudo pizza' },
      { id: 'wurstel', name: 'Wurstel', description: 'Mozzarella and sausage frankfurters.', price: '€9', category: 'Pizze Classiche', image: '/images/menu/wurstel.jpg', alt: 'Wurstel pizza' },
      { id: 'americana', name: 'Americana', description: 'American-style pizza with fries and sausage.', price: '€10', category: 'Pizze Classiche', image: '/images/menu/americana.jpg', alt: 'Americana pizza' },
      { id: 'texana', name: 'Texana', description: 'Hearty meat pizza.', price: '€11', category: 'Pizze Classiche', image: '/images/menu/texana.jpg', alt: 'Texana pizza' },
      { id: 'parmigiana', name: 'Parmigiana', description: 'Eggplant parmesan pizza.', price: '€9', category: 'Pizze Classiche', image: '/images/menu/parmigiana.jpg', alt: 'Parmigiana pizza', dietary: ['vegetarian'] },
      { id: 'romana', name: 'Romana', description: 'Anchovies and capers.', price: '€10', category: 'Pizze Classiche', image: '/images/menu/romana.jpg', alt: 'Romana pizza' },
      { id: 'salsiccia-cipolla', name: 'Salsiccia e Cipolla', description: 'Sausage and onion pizza.', price: '€11', category: 'Pizze Classiche', image: '/images/menu/salsiccia-e-cipolla.jpg', alt: 'Sausage and onion pizza' },
      { id: 'calzone-farcito', name: 'Calzone Farcito', description: 'Stuffed calzone with rich filling.', price: '€12', category: 'Pizze Classiche', image: '/images/menu/calzone-farcito.jpg', alt: 'Stuffed calzone' },
      { id: 'siciliana', name: 'Siciliana', description: 'Anchovy Sicilian-style pizza.', price: '€9', category: 'Pizze Classiche', image: '/images/menu/siciliana.jpg', alt: 'Siciliana pizza' },
    ]
  },
  {
    id: 'pizze-originali',
    name: 'Pizze Originali',
    nameIt: 'Pizze Originali',
    items: [
      { id: 'vecchia-savona', name: 'Vecchia Savona', description: 'House specialty inspired by Savona with Ligurian ingredients.', price: '€12', category: 'Pizze Originali', image: '/images/menu/vecchia-savona.jpg', alt: 'Vecchia Savona pizza' },
      { id: 'maccaia', name: 'Maccaia', description: 'House original pizza creation.', price: '€13', category: 'Pizze Originali', image: '/images/menu/maccaia.jpg', alt: 'Maccaia pizza' },
      { id: 'torretta', name: 'Torretta', description: 'House original pizza creation.', price: '€13', category: 'Pizze Originali', image: '/images/menu/torretta.jpg', alt: 'Torretta pizza' },
      { id: 'vegana', name: 'Vegana', description: 'Colorful vegan pizza with seasonal vegetables.', price: '€12', category: 'Pizze Originali', image: '/images/menu/vegana.jpg', alt: 'Vegan pizza', dietary: ['vegan'] },
      { id: 'indiavolata', name: 'Indiavolata', description: 'Extra spicy pizza with fiery toppings.', price: '€11', category: 'Pizze Originali', image: '/images/menu/indiavolata.jpg', alt: 'Indiavolata spicy pizza' },
      { id: 'baciami-ancora', name: 'Baciami Ancora', description: 'House specialty with artisan toppings.', price: '€12', category: 'Pizze Originali', image: '/images/menu/baciami-ancora.jpg', alt: 'Baciami Ancora pizza' },
      { id: 'ricaricotta', name: 'Ricaricotta', description: 'Whipped ricotta-topped pizza.', price: '€12', category: 'Pizze Originali', image: '/images/menu/ricaricotta.jpg', alt: 'Ricaricotta pizza', dietary: ['vegetarian'] },
      { id: 'besagnina', name: 'Besagnina', description: 'Traditional Ligurian-inspired house specialty.', price: '€11', category: 'Pizze Originali', image: '/images/menu/besagnina.jpg', alt: 'Besagnina pizza' },
      { id: 'scalzatonata', name: 'Scalzatonata', description: 'Creative artisan pizza.', price: '€12', category: 'Pizze Originali', image: '/images/menu/scalzatonata.jpg', alt: 'Scalzatonata pizza' },
      { id: 'burratella', name: 'Burratella', description: 'Pizza topped with whole burrata.', price: '€12', category: 'Pizze Originali', image: '/images/menu/burratella.jpg', alt: 'Burratella pizza', dietary: ['vegetarian'] },
      { id: 'soggettiva', name: 'Soggettiva', description: "Chef's original contemporary pizza.", price: '€12', category: 'Pizze Originali', image: '/images/menu/soggettiva.jpg', alt: 'Soggettiva pizza' },
      { id: 'mare-forza-7', name: 'Mare Forza 7', description: 'Loaded seafood signature pizza.', price: '€12', category: 'Pizze Originali', image: '/images/menu/mare-forza-7.jpg', alt: 'Mare Forza 7 seafood pizza' },
      { id: 'trentina', name: 'Trentina', description: 'Mountain-inspired pizza with speck and mushrooms.', price: '€12', category: 'Pizze Originali', image: '/images/menu/trentina.jpg', alt: 'Trentina pizza' },
      { id: 'granosa', name: 'Granosa', description: 'Grain-rich specialty pizza.', price: '€13', category: 'Pizze Originali', image: '/images/menu/granosa.jpg', alt: 'Granosa pizza' },
      { id: 'squisita', name: 'Squisita', description: 'Simple gourmet pizza.', price: '€10', category: 'Pizze Originali', image: '/images/menu/squisita.jpg', alt: 'Squisita pizza' },
      { id: 'calzino', name: 'Calzino', description: 'Mini stuffed calzone.', price: '€11', category: 'Pizze Originali', image: '/images/menu/calzino.jpg', alt: 'Calzino mini calzone' },
    ]
  },
  {
    id: 'pizze-bianche',
    name: 'Pizze Bianche',
    nameIt: 'Pizze Bianche',
    items: [
      { id: 'monte-bianco', name: 'Monte Bianco', description: 'White pizza with mozzarella, cheeses and rich mountain-style toppings.', price: '€12', category: 'Pizze Bianche', image: '/images/menu/monte-bianco.jpg', alt: 'Monte Bianco white pizza', dietary: ['vegetarian'] },
      { id: '4-formaggi', name: '4 Formaggi', description: 'Creamy four-cheese white pizza.', price: '€10', category: 'Pizze Bianche', image: '/images/menu/4-formaggi.jpg', alt: 'Four cheese pizza', dietary: ['vegetarian'] },
      { id: 'rucola', name: 'Rucola', description: 'White pizza finished with peppery rocket leaves.', price: '€10', category: 'Pizze Bianche', image: '/images/menu/rucola.jpg', alt: 'Rucola white pizza', dietary: ['vegetarian'] },
      { id: 'genovese', name: 'Genovese', description: 'Ligurian-inspired white pizza with pesto notes.', price: '€12', category: 'Pizze Bianche', image: '/images/menu/genovese.jpg', alt: 'Genovese pesto pizza', dietary: ['vegetarian'] },
    ]
  },
  {
    id: 'focacce',
    name: 'Focacce',
    nameIt: 'Focacce',
    items: [
      { id: 'focaccia-reccese', name: 'Focaccia Reccese', description: 'Thin Ligurian focaccia filled with soft cheese, inspired by Recco tradition.', price: '€12', category: 'Focacce', image: '/images/menu/focaccia-reccese.jpg', alt: 'Focaccia di Recco style', dietary: ['vegetarian'] },
      { id: 'focaccia', name: 'Focaccia', description: 'Classic Italian focaccia, crisp outside and soft inside.', price: '€10', category: 'Focacce', image: '/images/menu/focaccia.jpg', alt: 'Classic focaccia', dietary: ['vegan'] },
      { id: 'reccese-pizzata', name: 'Reccese Pizzata', description: 'Recco-style cheese focaccia with pizza-style toppings.', price: '€13', category: 'Focacce', image: '/images/menu/reccese-pizzata.jpg', alt: 'Reccese Pizzata' },
      { id: 'focaccina-casa', name: 'Focaccina della Casa', description: 'Small house focaccia, ideal as a starter or side.', price: '€5', category: 'Focacce', image: '/images/menu/focaccina-della-casa.jpg', alt: 'House focaccia' },
      { id: 'crudelia', name: 'Crudelia', description: 'Fresh focaccia with prosciutto crudo, stracciatella and Mediterranean toppings.', price: '€10', category: 'Focacce', image: '/images/menu/crudelia.jpg', alt: 'Crudelia focaccia' },
    ]
  },
  {
    id: 'vini',
    name: 'Vini Bianchi',
    nameIt: 'Vini Bianchi',
    items: [
      { id: 'vermentino-tigullio', name: 'Vermentino Liguria Tigullio DOC', description: 'Ligurian Vermentino with mineral and citrus notes.', price: '€26', category: 'Vini', image: '/images/menu/vermentino-tigullio.jpg', alt: 'Vermentino wine' },
      { id: 'vermentino-federici', name: "Vermentino Oro D'Isee DOC", description: 'Colli di Luni Cantina Federici — refined, structured white.', price: '€30', category: 'Vini', image: '/images/menu/vermentino.jpg', alt: 'Vermentino Oro D\'Isee' },
      { id: 'pigato', name: 'Pigato di Ortovero DOC', description: 'Coltivatori Ingauni — aromatic Ligurian white.', price: '€26', category: 'Vini', image: '/images/menu/pigato.jpg', alt: 'Pigato wine' },
      { id: 'lumassina', name: 'Lumassina Colline Savonesi', description: 'Cantina Ramo — crisp local white from Savona hills.', price: '€30', category: 'Vini', image: '/images/menu/lumassina.jpg', alt: 'Lumassina wine' },
      { id: 'blange', name: 'Blangè di Ceretto', description: 'Piemonte — elegant Arneis-based white.', price: '€38', category: 'Vini', image: '/images/menu/blange.jpg', alt: 'Blangè wine' },
      { id: 'gewurztraminer', name: 'Gewürztraminer Cantina Tramin', description: 'DOC Alto Adige — aromatic, spicy white.', price: '€30', category: 'Vini', image: '/images/menu/gewurztraminer.jpg', alt: 'Gewürztraminer wine' },
      { id: 'ribolla-gialla', name: 'Ribolla Gialla IGT', description: 'Cantina Mosole — fresh and lively Friulian white.', price: '€22', category: 'Vini', image: '/images/menu/ribolla-gialla.jpg', alt: 'Ribolla Gialla wine' },
      { id: 'grillo', name: 'Grillo di Sicilia Bio', description: 'Colomba Bianca — organic Sicilian white.', price: '€20', category: 'Vini', image: '/images/menu/grillo.jpg', alt: 'Grillo wine' },
      { id: 'pecorino', name: 'Pecorino Bio Torre di Chieti', description: 'IGP — crisp Abruzzo white.', price: '€20', category: 'Vini', image: '/images/menu/pecorino.jpg', alt: 'Pecorino wine' },
    ]
  },
  {
    id: 'bollicine',
    name: 'Bollicine',
    nameIt: 'Bollicine',
    items: [
      { id: 'prosecco-dirupo', name: 'Prosecco Dirupo Extra Dry DOCG', description: 'Valdobbiadene — fresh and persistent bubbles.', price: '€26', category: 'Bollicine', image: '/images/menu/prosecco-dirupo.jpg', alt: 'Prosecco' },
      { id: 'berlucchi-rose', name: 'Berlucchi Rosé 61', description: 'Franciacorta DOCG — elegant rosé sparkling.', price: '€42', category: 'Bollicine', image: '/images/menu/berlucchi-rose.jpg', alt: 'Berlucchi Rosé' },
      { id: 'ca-del-bosco', name: "Ca' del Bosco Extra Brut", description: 'Franciacorta DOCG — premium Italian sparkling.', price: '€48', category: 'Bollicine', image: '/images/menu/franciacorta.jpg', alt: "Ca' del Bosco" },
      { id: 'champagne', name: 'Champagne Perrier Jouët', description: 'French Champagne — the celebration choice.', price: '€90', category: 'Bollicine', image: '/images/menu/champagne.jpg', alt: 'Champagne Perrier Jouët' },
      { id: 'ferrari-brut', name: 'Ferrari Brut Blanc de Blanc', description: 'Trentino DOC — Italy\'s finest sparkling.', price: '€44', category: 'Bollicine', image: '/images/menu/ferrari-brut.jpg', alt: 'Ferrari Brut' },
      { id: 'bellavista', name: 'Bellavista Alma Grande Cuvée', description: 'Brut Franciacorta — refined and complex.', price: '€48', category: 'Bollicine', image: '/images/menu/bellavista.jpg', alt: 'Bellavista Franciacorta' },
    ]
  },
  {
    id: 'rosati',
    name: 'Rosati',
    nameIt: 'Rosati',
    items: [
      { id: 'sciac-tra', name: "Sciac-Tra' Cantina Ramo", description: 'Ligurian rosato — light, fresh, Mediterranean.', price: '€28', category: 'Rosati', image: '/images/menu/sciac-tra.jpg', alt: "Sciac-Tra' rosé" },
      { id: 'vignuolo', name: 'Vignuolo DOC Castel del Monte', description: 'Rosato di Puglia BIO — organic and vibrant.', price: '€20', category: 'Rosati', image: '/images/menu/vignuolo.jpg', alt: 'Vignuolo rosé' },
      { id: 'bardolino', name: 'Bardolino Chiaretto DOC', description: 'Veneto Giarola — classic Northern Italian rosé.', price: '€20', category: 'Rosati', image: '/images/menu/bardolino.jpg', alt: 'Bardolino Chiaretto' },
    ]
  },
  {
    id: 'rossi',
    name: 'Rossi',
    nameIt: 'Vini Rossi',
    items: [
      { id: 'rossese', name: 'Rossese di Dolceacqua Superiore DOC', description: 'Cantina Guglielmi — elegant Ligurian red.', price: '€30', category: 'Rossi', image: '/images/menu/rossese.jpg', alt: 'Rossese wine' },
      { id: 'granaccia', name: 'Granaccia IGT Colline Savonesi', description: 'Cantina Gublot — robust local red.', price: '€32', category: 'Rossi', image: '/images/menu/granaccia.jpg', alt: 'Granaccia wine' },
      { id: 'barbera', name: 'Barbera DOCG Cantina Ratti', description: 'Piemonte — full-bodied and fruity.', price: '€32', category: 'Rossi', image: '/images/menu/barbera.jpg', alt: 'Barbera wine' },
      { id: 'chianti', name: 'Chianti Classico Gallo Nero', description: 'Toscana — the quintessential Tuscan red.', price: '€28', category: 'Rossi', image: '/images/menu/chianti.jpg', alt: 'Chianti Classico' },
      { id: 'nebbiolo', name: "Nebbiolo d'Alba DOC", description: 'Teo Costa Piemonte — structured and aromatic.', price: '€30', category: 'Rossi', image: '/images/menu/nebbiolo.jpg', alt: 'Nebbiolo wine' },
    ]
  },
  {
    id: 'birre',
    name: 'Birre',
    nameIt: 'Birre',
    items: [
      { id: 'birra-spina', name: 'Birra alla Spina', description: 'Draft beer — medium 0.4L or small 0.2L.', price: '€7/€4', category: 'Birre', image: '/images/menu/birra-spina.jpg', alt: 'Draft beer' },
      { id: 'ellissor', name: 'Ellissor Artigianale di Sassello', description: 'Local craft beer from Sassello, 50cl.', price: '€8', category: 'Birre', image: '/images/menu/ellissor.jpg', alt: 'Ellissor craft beer' },
      { id: 'franziskaner', name: 'Franziskaner Weiss', description: 'Bavarian wheat beer, 50cl.', price: '€6', category: 'Birre', image: '/images/menu/franziskaner.jpg', alt: 'Franziskaner wheat beer' },
      { id: 'corona', name: 'Corona', description: 'Mexican lager, 33cl.', price: '€5', category: 'Birre', image: '/images/menu/corona.jpg', alt: 'Corona beer' },
      { id: 'peroni-rossa', name: 'Peroni Rossa', description: 'Italian red label, 50cl.', price: '€6', category: 'Birre', image: '/images/menu/peroni-rossa.jpg', alt: 'Peroni Rossa beer' },
      { id: 'ichnusa', name: 'Ichnusa Non Filtrata', description: 'Unfiltered Sardinian beer, 33cl.', price: '€5', category: 'Birre', image: '/images/menu/ichnusa.jpg', alt: 'Ichnusa beer' },
    ]
  },
  {
    id: 'bibite',
    name: 'Bibite',
    nameIt: 'Bibite',
    items: [
      { id: 'chinotto', name: 'Chinotto Lurisia', description: 'Premium Italian bitter citrus soda.', price: '€4', category: 'Bibite', image: '/images/menu/chinotto.jpg', alt: 'Chinotto Lurisia' },
      { id: 'coca-cola', name: 'Coca-Cola', description: 'Classic cola.', price: '€4', category: 'Bibite', image: '/images/menu/coca-cola.jpg', alt: 'Coca-Cola' },
      { id: 'coca-cola-zero', name: 'Coca-Cola Zero', description: 'Sugar-free cola.', price: '€4', category: 'Bibite', image: '/images/menu/coca-cola-zero.jpg', alt: 'Coca-Cola Zero' },
      { id: 'fanta', name: 'Fanta', description: 'Orange soda.', price: '€4', category: 'Bibite', image: '/images/menu/fanta.jpg', alt: 'Fanta' },
      { id: 'sprite', name: 'Sprite', description: 'Lemon-lime soda.', price: '€4', category: 'Bibite', image: '/images/menu/sprite.jpg', alt: 'Sprite' },
      { id: 'estathe', name: 'Estathé', description: 'Italian iced tea — lemon or peach.', price: '€4', category: 'Bibite', image: '/images/menu/estathe.jpg', alt: 'Estathé iced tea' },
      { id: 'succo-frutta', name: 'Succo di Frutta', description: 'Fruit juice — peach or apple.', price: '€4', category: 'Bibite', image: '/images/menu/succo-frutta.jpg', alt: 'Fruit juice' },
    ]
  },
  {
    id: 'caffetteria',
    name: 'Caffetteria',
    nameIt: 'Caffetteria',
    items: [
      { id: 'caffe-illy', name: 'Caffè Illy', description: 'Premium Illy espresso.', price: '€2', category: 'Caffetteria', image: '/images/menu/caffe-illy.jpg', alt: 'Caffè Illy espresso' },
      { id: 'caffe-dek', name: 'Caffè Decaffeinato', description: 'Decaf Illy espresso.', price: '€2.50', category: 'Caffetteria', image: '/images/menu/caffe-dek.jpg', alt: 'Decaf espresso' },
      { id: 'orzo', name: 'Orzo', description: 'Barley coffee alternative.', price: '€2.50', category: 'Caffetteria', image: '/images/menu/orzo.jpg', alt: 'Orzo barley coffee' },
      { id: 'ginseng', name: 'Ginseng', description: 'Ginseng coffee.', price: '€2.50', category: 'Caffetteria', image: '/images/menu/ginseng.jpg', alt: 'Ginseng coffee' },
      { id: 'te-infusi', name: 'Tè e Infusi', description: 'Selection of teas and herbal infusions.', price: '€5', category: 'Caffetteria', image: '/images/menu/te-infusi.jpg', alt: 'Tea and infusions' },
    ]
  },
];

export const allMenuItems: MenuItem[] = menuCategories.flatMap(cat => cat.items);

export const restaurantInfo = {
  name: 'Zio Pesce',
  fullName: 'Zio Pesce – Ristorante e Pizzeria',
  tagline: 'Nel cuore della Darsena di Savona, il mare è nel piatto.',
  address: 'Via Antonio Baglietto 8R, Savona (Darsena), Italy',
  phone: '+39 393 330 4614',
  email: 'info@crescitadigitaleitalia.com',
  website: 'https://ziopesce.crescitadigitaleitalia.com',
  hours: {
    lunch: '12:00 – 15:00',
    dinner: '19:00 – 23:00',
    days: 'Aperto tutti i giorni',
  },
  founded: '2015',
  founders: 'Andrea Colombo e Gigliola Peroni',
  social: {
    instagram: 'https://instagram.com/ziopesce_savona',
    facebook: 'https://facebook.com/ziopescesavona',
  },
  reviews: {
    googleRating: 4.6,
    googleCount: 324,
    googleLink: 'https://www.google.com/search?q=Zio+Pesce+Savona#lrd=0x12d49220f0c0e0a7:0x0,1,,,',
  },
  coordinates: {
    lat: 44.3092,
    lng: 8.4811,
  },
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d8.4811!3d44.3092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Antonio+Baglietto+8R%2C+17100+Savona+SV!5e0!3m2!1sit!2sit',
};
