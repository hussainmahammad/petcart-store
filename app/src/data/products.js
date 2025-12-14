const products = [
  {
    id: "PID000001",
    short_name: "Farmina N&D Prime Chicken Dog Food",
    short_description: "Grain-free adult food with 98% animal protein for optimal health.",
    original_price: 3200,
    discountPercent: 15,
    images: ["/images/dog/food/1a.png", "/images/dog/food/1b.png"],
    brand: "Farmina",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 25.5, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 85,
    rating: 3.3,
    reviews: 212,
    detailed_description: `
      <h3>Holistic Nutrition for Your Best Friend</h3>
      <p>Farmina N&D Prime is a top-tier, grain-free formula designed to meet the nutritional needs of your adult dog. Made with a high concentration of premium chicken, this food supports muscle development and provides the energy your dog needs for an active life. It's rich in antioxidants and free from artificial preservatives.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Supports lean muscle mass with high protein content.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Aids in digestion with natural fibers.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Boneless chicken, dehydrated chicken, sweet potato, chicken fat, dried eggs, herring, olive oil, and organic vitamins.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya S.", rating: 5, comment: "My dog loves this food and his coat has never looked better. Highly recommend!", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_1.jpg"] },
      { reviewer_name: "Rahul M.", rating: 4.5, comment: "Good quality, but a little pricey. My dog enjoys it though.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Neha G.", rating: 5, comment: "Excellent product. No more digestive issues for my dog.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_2.jpg"] }
    ],
  },
  {
    id: "PID000002",
    short_name: "KONG Classic Dog Toy",
    short_description: "Durable rubber toy for chewing, fetching, and stuffing with treats.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/dog/toys/2a.png", "/images/dog/toys/2b.png", "/images/dog/toys/2c.png"],
    brand: "KONG",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 10.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 250,
    rating: 4.6,
    reviews: 540,
    detailed_description: `
      <h3>The Gold Standard of Dog Toys</h3>
      <p>The KONG Classic is a staple for pet owners worldwide. Its unique, bounceable shape is perfect for fetch, and the durable, all-natural red rubber stands up to even the toughest chewers. Fill the hollow center with kibble, peanut butter, or treats to provide hours of engaging mental stimulation.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from all-natural, puncture-resistant rubber.</li>
        <li>Helps reduce boredom and separation anxiety.</li>
        <li>Vet-recommended for durability and safety.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Dishwasher-safe for easy cleaning. Simply rinse and place on the top rack.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aditya P.", rating: 5, comment: "Indestructible! My aggressive chewer hasn't made a dent in it. A must-buy.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_3a.jpg","/user_uploads/review_3b.jpg"] },
      { reviewer_name: "Tina V.", rating: 4.5, comment: "My dog loves this. Keeps him busy for ages, especially when I stuff it with treats.", date: "2024-08-30T10:00:00Z", images: ["/user_uploads/review_43a.jpg"] },
      { reviewer_name: "Sanjay N.", rating: 5, comment: "Best toy I've ever bought. My dog is obsessed with it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_4.jpg"] }
    ],
  },
  {
    id: "PID000003",
    short_name: "Casper Orthopedic Dog Bed",
    short_description: "Pressure-relieving, memory foam bed for dogs of all ages.",
    original_price: 6500,
    discountPercent: 20,
    images: ["/images/dog/beds/3a.png", "/images/dog/beds/3b.png"],
    brand: "Casper",
    weight: { value: 5.5, unit: "kg" },
    package_dimensions: { length: 80.0, width: 60.0, height: 25.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Dogs",
    stock: 45,
    rating: 4.2,
    reviews: 155,
    detailed_description: `
      <h3>The Ultimate Nap Spot for Your Pet</h3>
      <p>Give your dog the gift of deep, restorative sleep with the Casper Orthopedic Dog Bed. The memory foam core contours to their body, relieving pressure on joints and muscles, which is especially beneficial for older pets. The removable, machine-washable cover makes cleaning a breeze.</p>
      <h4>Materials:</h4>
      <ul>
        <li><strong>Outer Fabric:</strong> Ultra-soft polyester fleece.</li>
        <li><strong>Filling:</strong> High-density memory foam.</li>
        <li><strong>Base:</strong> Non-slip, waterproof bottom.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Remove the cover and machine wash on a gentle cycle. Tumble dry on low heat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Roshni K.", rating: 5, comment: "My senior dog hasn't slept this soundly in years. Worth every penny!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_5.jpg"] },
      { reviewer_name: "Karan S.", rating: 4, comment: "Great bed, but it took a few days to fully expand after unboxing.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Deepika A.", rating: 5, comment: "My dog loves it. Very good quality and soft.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_6.jpg"] }
    ],
  },
  {
    id: "PID000004",
    short_name: "Wahl Pet Pro Grooming Kit",
    short_description: "Complete grooming kit for dogs, featuring quiet and powerful clippers.",
    original_price: 3500,
    discountPercent: 12,
    images: ["/images/dog/grooming/4a.png", "/images/dog/grooming/4b.png"],
    brand: "Wahl",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 28.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 90,
    rating: 4,
    reviews: 87,
    detailed_description: `
      <h3>Professional Grooming at Home</h3>
      <p>The Wahl Pet Pro Grooming Kit gives you everything you need to keep your dog's coat looking neat and tidy. The high-performance clippers are designed with low noise and vibration to keep your pet calm during grooming sessions. The kit includes a variety of guide combs and accessories for different coat lengths.</p>
      <h4>What's in the box:</h4>
      <ul>
        <li>Wahl Clippers</li>
        <li>Stainless Steel Scissors</li>
        <li>Clipper Guards (multiple sizes)</li>
        <li>Cleaning Brush & Oil</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Clean the clipper blade after each use and apply a drop of oil to maintain performance.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sagar P.", rating: 5, comment: "Worked perfectly on my golden retriever. The clippers are quiet, which helped a lot.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_7.jpg"] },
      { reviewer_name: "Simran L.", rating: 4, comment: "Good quality, but the scissors could be a bit sharper.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Vikram R.", rating: 5, comment: "Easy to use and gives a professional finish. Very happy with this purchase.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_8.jpg"] }
    ],
  },
  {
    id: "PID000005",
    short_name: "HUFT Pawfume Deodorizing Spray",
    short_description: "All-natural fragrance for dogs, keeps them smelling fresh between baths.",
    original_price: 499,
    discountPercent: 5,
    images: ["/images/dog/accessories/5a.png", "/images/dog/accessories/5b.png"],
    brand: "HUFT",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 18.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.5,
    reviews: 65,
    detailed_description: `
      <h3>A Fresh Scent for Your Furry Friend</h3>
      <p>The HUFT Pawfume Deodorizing Spray is a convenient way to freshen up your dog's coat without a full bath. Made with natural, pet-safe ingredients, it eliminates odors and leaves a light, pleasant scent. It's perfect for a quick spritz after a walk or before guests arrive.</p>
      <h4>Directions for use:</h4>
      <ul>
        <li>Shake well before use.</li>
        <li>Spray lightly over your dog's coat, avoiding the face and eyes.</li>
        <li>Brush through to distribute the fragrance.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Purified water, natural fragrances, and essential oils. No parabens or sulfates.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali M.", rating: 5, comment: "Smells amazing and it's not too strong. Keeps my dog fresh all day.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_9.jpg"] },
      { reviewer_name: "Rohan D.", rating: 4, comment: "It's good for in-between baths, but the scent doesn't last for more than a day.", date: "2024-08-25T10:00:00Z", images: [] },
      { reviewer_name: "Pooja B.", rating: 5, comment: "My dog is so much cuddlier now. The smell is so nice!", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_10.jpg"] }
    ],
  },
  {
    id: "PID000006",
    short_name: "Himalaya Pet Care Itch-E-Cure",
    short_description: "Herbal spray to soothe skin irritation and prevent scratching in dogs and cats.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/dog/health/6a.png", "/images/dog/health/6b.png", "/images/dog/health/6c.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 14.0, width: 6.0, height: 4.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 75,
    rating: 4.7,
    reviews: 110,
    detailed_description: `
      <h3>Relief for Your Pet's Itchy Skin</h3>
      <p>Himalaya Pet Care Itch-E-Cure is a natural, herbal formulation that provides quick relief for your pet's irritated skin. It helps to soothe redness, reduce itching, and prevent scratching. The spray is easy to apply and can be used for minor skin issues and allergies.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Clean the affected area.</li>
        <li>Shake the bottle well.</li>
        <li>Spray directly onto the irritated skin from a distance of 15 cm.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Neem, Turmeric, and other natural extracts.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavita S.", rating: 5, comment: "This product worked wonders on my dog's hot spots. Saw results in just two days!", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_11.jpg"] },
      { reviewer_name: "Manoj B.", rating: 4.5, comment: "It's effective, but the smell is a bit strong. My dog doesn't mind it though.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Sunita G.", rating: 5, comment: "My vet recommended this. It's a lifesaver for my dog's seasonal allergies.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_12.jpg"] }
    ],
  },
  {
    id: "PID000007",
    short_name: "Royal Canin Mini Adult",
    short_description: "Dry dog food for small-breed adults, supports a shiny coat and healthy digestion.",
    original_price: 1550,
    discountPercent: 10,
    images: ["/images/dog/food/7a.png", "/images/dog/food/7b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 22.0, width: 18.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.8,
    reviews: 350,
    detailed_description: `
      <h3>Tailored Nutrition for Small Dogs</h3>
      <p>Royal Canin Mini Adult is a specialized formula designed for the unique needs of small-breed dogs. The small kibble size is perfect for their jaws, and the highly digestible proteins help maintain digestive health. This formula is enriched with EPA and DHA to support healthy skin and a beautiful, shiny coat.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Exclusive kibble size and shape.</li>
        <li>High palatability to satisfy picky eaters.</li>
        <li>Supports a healthy skin and coat.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Refer to the package for a detailed feeding guide based on your dog's weight and activity level.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My dachshund absolutely loves this food. She's so energetic now!", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_13.jpg"] },
      { reviewer_name: "Rohit N.", rating: 4.5, comment: "Great for my Pomeranian. No more tummy issues.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Kavya M.", rating: 5, comment: "Good quality, and my dog finishes his bowl every time.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_14.jpg"] }
    ],
  },
  {
    id: "PID000008",
    short_name: "Purina ONE Chicken Adult Cat Food",
    short_description: "High-protein dry cat food with real chicken for strong muscles and a healthy heart.",
    original_price: 1200,
    discountPercent: 10,
    images: ["/images/cat/food/8a.png", "/images/cat/food/8b.png"],
    brand: "Purina",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 110,
    rating: 4.7,
    reviews: 280,
    detailed_description: `
      <h3>Essential Nutrition for a Happy Cat</h3>
      <p>Purina ONE is a complete and balanced meal for your adult cat. It's made with real chicken as the #1 ingredient to provide the protein needed for strong muscles and a healthy body. The crunchy kibble also helps to reduce plaque buildup and support oral health.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Supports a strong immune system with antioxidants.</li>
        <li>Aids in healthy digestion with natural fibers.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, brewer's rice, corn gluten meal, chicken by-product meal, dried egg product, beef fat, and fish meal.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Alia S.", rating: 5, comment: "My cat is a picky eater, but she absolutely loves this food. Her coat looks amazing!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_15.jpg"] },
      { reviewer_name: "Zain R.", rating: 4.5, comment: "Good product, but the bag is a little small for the price.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Simran P.", rating: 5, comment: "My two cats can't get enough of this. It's their favorite dry food.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_16.jpg"] }
    ],
  },
  {
    id: "PID000009",
    short_name: "Trixie Cat Activity Fun Board",
    short_description: "Interactive food puzzle for cats, perfect for mental stimulation.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/toys/9a.png", "/images/cat/toys/9b.png"],
    brand: "Trixie",
    weight: { value: 0.9, unit: "kg" },
    package_dimensions: { length: 40.0, width: 30.0, height: 10.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 55,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>Engage Your Cat's Natural Instincts</h3>
      <p>The Trixie Cat Activity Fun Board is designed to challenge and entertain your cat. It features five different modules that require your cat to think, play, and work to get their food or treats. This helps prevent boredom and can aid in slowing down fast eaters.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Fill the different modules with your cat's favorite kibble or treats.</li>
        <li>Encourage your cat to use their paws and nose to retrieve the food.</li>
        <li>Can be used for daily feeding to prevent boredom.</li>
      </ul>
      <p><strong>Material:</strong> <br>Durable, food-safe plastic.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sneha G.", rating: 5, comment: "My cat is obsessed with this! It keeps her busy and engaged for a long time.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_17.jpg"] },
      { reviewer_name: "Ali B.", rating: 4, comment: "It's a great concept, but one of the modules is a bit too easy.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Fantastic for my indoor cat. It really makes her think.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_18.jpg"] }
    ],
  },
  {
    id: "PID000010",
    short_name: "Cat Tree with Condo & Perch",
    short_description: "Multi-level cat tree with scratching posts, perches, and a cozy condo.",
    original_price: 5500,
    discountPercent: 20,
    images: ["/images/cat/beds/10a.png", "/images/cat/beds/10b.png"],
    brand: "M-Pets",
    weight: { value: 12.0, unit: "kg" },
    package_dimensions: { length: 60.0, width: 45.0, height: 120.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Cats",
    stock: 35,
    rating: 4.7,
    reviews: 98,
    detailed_description: `
      <h3>A Feline's Dream Playground</h3>
      <p>This multi-level cat tree is a perfect blend of fun and relaxation for your feline friend. It features multiple scratching posts wrapped in natural sisal rope to satisfy their scratching instincts, while the cozy condo provides a private hideaway. The top perch is perfect for napping or keeping a lookout.</p>
      <h4>Materials:</h4>
      <ul>
        <li>Durable particle board with soft plush covering.</li>
        <li>Natural sisal rope for scratching posts.</li>
        <li>Stable base to prevent tipping.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Comes with all necessary tools and instructions for easy assembly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My cat instantly fell in love with this. It's sturdy and looks great.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_19.jpg"] },
      { reviewer_name: "Shreya S.", rating: 4.5, comment: "A little tricky to assemble, but the end result is worth it. My cat uses it all the time.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Ravi G.", rating: 5, comment: "Good quality for the price. The condo is a big hit with my cat.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_20.jpg"] }
    ],
  },
  {
    id: "PID000011",
    short_name: "Bio-Groom Flea & Tick Cat Shampoo",
    short_description: "Gentle formula to kill fleas and ticks on contact, safe for kittens.",
    original_price: 750,
    discountPercent: 10,
    images: ["/images/cat/grooming/11a.png", "/images/cat/grooming/11b.png"],
    brand: "Bio-Groom",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 130,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>Safe and Effective Flea Control</h3>
      <p>Bio-Groom Flea & Tick Cat Shampoo provides a gentle and effective way to protect your cat from parasites. The formula is specifically designed to be tough on fleas and ticks while being gentle on your cat's sensitive skin. It leaves the coat clean, soft, and shiny.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Wet your cat's coat thoroughly with warm water.</li>
        <li>Apply a small amount of shampoo and lather well.</li>
        <li>Leave on for 5-10 minutes before rinsing thoroughly.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Pyrethrins (natural insecticide), Aloe Vera, Lanolin, and Coconut Oil.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya R.", rating: 5, comment: "Worked like a charm! My cat had a few fleas, and this took care of them instantly.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_21.jpg"] },
      { reviewer_name: "Akshay K.", rating: 4, comment: "Good product, but the scent could be a little nicer.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priyanka L.", rating: 5, comment: "I've been using this for a while now, and my cat is completely flea-free.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_22.jpg"] }
    ],
  },
  {
    id: "PID000012",
    short_name: "Vetacare Cat Deworming Tablet",
    short_description: "Broad-spectrum deworming tablet for cats, effective against common worms.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/cat/health/12a.png", "/images/cat/health/12b.png"],
    brand: "Virbac",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Cats",
    stock: 200,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>Complete Protection from Intestinal Parasites</h3>
      <p>Virbac Vetacare is a highly effective deworming tablet that provides comprehensive protection for your cat. It is formulated to eliminate a wide range of common intestinal worms, including roundworms and tapeworms. Regular deworming is crucial for maintaining your cat's overall health and well-being.</p>
      <h4>How to administer:</h4>
      <ul>
        <li>Give the tablet directly to your cat or mix it with a small amount of their food.</li>
        <li>Follow the dosage instructions on the package based on your cat's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Praziquantel and Pyrantel Pamoate.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Reema A.", rating: 5, comment: "Easy to give to my cat, and it worked without any side effects. A great product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_23.jpg"] },
      { reviewer_name: "Kunal R.", rating: 4, comment: "My cat spat it out the first time, but it worked when I mixed it with his favorite treat.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Sonia G.", rating: 5, comment: "My vet recommended this brand. Very happy with the results.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_24.jpg"] }
    ],
  },
  {
    id: "PID000013",
    short_name: "HUFT Cat Collar with Bell",
    short_description: "Adjustable breakaway collar with a gentle bell for safety.",
    original_price: 250,
    discountPercent: 8,
    images: ["/images/cat/accessories/13a.png", "/images/cat/accessories/13b.png"],
    brand: "HUFT",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 180,
    rating: 4.5,
    reviews: 45,
    detailed_description: `
      <h3>Safe and Stylish for Your Feline</h3>
      <p>This HUFT cat collar is designed with your cat's safety in mind. The breakaway buckle releases under pressure to prevent your cat from getting tangled or injured. The small bell helps you keep track of your cat's whereabouts and also protects local birds and wildlife.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Quick-release breakaway safety buckle.</li>
        <li>Soft and comfortable material.</li>
        <li>Adjustable to fit various neck sizes.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with mild soap and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tina V.", rating: 5, comment: "It's perfect! The bell is quiet enough not to annoy me, but I can still hear where my cat is.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_25.jpg"] },
      { reviewer_name: "Farah K.", rating: 4, comment: "Good quality, but my cat managed to lose it once. The breakaway feature works well though.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Rishi M.", rating: 5, comment: "My cat looks so cute in this collar. The safety feature gives me peace of mind.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_26.jpg"] }
    ],
  },
  {
    id: "PID000014",
    short_name: "Drools Vet Pro Adult Cat Food",
    short_description: "Specialized adult dry food for cats with sensitive skin and digestive systems.",
    original_price: 1300,
    discountPercent: 10,
    images: ["/images/cat/food/14a.png", "/images/cat/food/14b.png"],
    brand: "Drools",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 95,
    rating: 4.6,
    reviews: 140,
    detailed_description: `
      <h3>Veterinarian-Recommended Nutrition</h3>
      <p>Drools Vet Pro is a premium cat food formulated by veterinarians to support cats with sensitive stomachs and skin. The carefully selected ingredients are easy to digest, and the added omega fatty acids promote a healthy, lustrous coat. This food helps to reduce common issues like excessive shedding and skin irritation.</p>
      <h4>Benefits:</h4>
      <ul>
        <li>Hypoallergenic formula to reduce food sensitivities.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Highly digestible for better nutrient absorption.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Hydrolyzed protein, rice, corn, chicken fat, beet pulp, fish oil, and natural antioxidants.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aisha G.", rating: 5, comment: "My cat's skin issues have cleared up since I switched to this. She loves the taste too.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_27.jpg"] },
      { reviewer_name: "Raju T.", rating: 4, comment: "Good food, but it's a bit hard to find in local stores.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Meena B.", rating: 5, comment: "My vet recommended this, and it has made a huge difference. Worth every penny.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_28.jpg"] }
    ],
  },
  {
    id: "PID000015",
    short_name: "Tetra Tropical Flakes",
    short_description: "Nutritionally balanced flake food for all tropical and marine fish.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/fish/food/15a.png", "/images/fish/food/15b.png"],
    brand: "Tetra",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 12.0, width: 7.0, height: 3.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 250,
    rating: 4.9,
    reviews: 300,
    detailed_description: `
      <h3>Vibrant Colors and Vitality for Your Fish</h3>
      <p>Tetra Tropical Flakes is a scientifically formulated food that provides a complete and balanced diet for your tropical fish. The "Clean and Clear Water" formula ensures the flakes are easily digestible, reducing waste and keeping your aquarium water cleaner. The flakes are packed with nutrients to enhance your fish's natural colors and promote vitality.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes vibrant colors and active swimming.</li>
        <li>Easily digestible to reduce waste and pollution.</li>
        <li>Suitable for all tropical fish species.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed 2-3 times daily, only what your fish can consume in 3 minutes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arjun S.", rating: 5, comment: "My tetras love this food. The water stays clear and they look so healthy.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_29.jpg"] },
      { reviewer_name: "Isha N.", rating: 4.5, comment: "A staple in my aquarium. My fish go crazy for it!", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Amit P.", rating: 5, comment: "Great product. My fish are active and their colors are brighter than ever.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_30.jpg"] }
    ],
  },
  {
    id: "PID000016",
    short_name: "Fluval M100 Submersible Heater",
    short_description: "Heater for fish tanks up to 100 liters, with a slim design and safety features.",
    original_price: 1100,
    discountPercent: 15,
    images: ["/images/fish/accessories/16a.png", "/images/fish/accessories/16b.png"],
    brand: "Fluval",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 6.0, height: 4.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 60,
    rating: 4.7,
    reviews: 120,
    detailed_description: `
      <h3>Precise Temperature Control for Your Aquarium</h3>
      <p>The Fluval M100 Submersible Heater is designed to provide consistent, reliable heat for your aquarium. Its mirror technology reflects the colors of the fish and their surroundings, enhancing the look of your tank. The heater is made with shock-resistant glass and features a safety switch to prevent overheating.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Slim profile for easy placement.</li>
        <li>Electronic thermostat for precise temperature settings.</li>
        <li>Safety shut-off to prevent overheating.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Unplug the heater before performing any tank maintenance. Do not operate outside of water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anil R.", rating: 5, comment: "Keeps the water temperature perfectly stable. Very happy with this purchase.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_31.jpg"] },
      { reviewer_name: "Komal D.", rating: 4, comment: "Works well, but a little difficult to adjust the temperature precisely.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Sunil M.", rating: 5, comment: "My discus fish are thriving with this heater. Great build quality.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_32.jpg"] }
    ],
  },
  {
    id: "PID000017",
    short_name: "Versele-Laga Prestige Budgies",
    short_description: "Complete seed mixture for budgies, enriched with vitamins and minerals.",
    original_price: 280,
    discountPercent: 8,
    images: ["/images/bird/food/17a.png", "/images/bird/food/17b.png"],
    brand: "Versele Laga",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 18.0, width: 12.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 90,
    rating: 4.7,
    reviews: 150,
    detailed_description: `
      <h3>Essential Nutrition for Your Budgie's Health</h3>
      <p>Versele-Laga Prestige Budgies is a high-quality seed mix that provides a balanced and varied diet for your bird. The blend is specially formulated to meet the nutritional needs of budgies, ensuring they get all the necessary vitamins, amino acids, and minerals for a vibrant life. It promotes good feather condition and overall vitality.</p>
      <h4>Ingredients:</h4>
      <ul>
        <li>Yellow millet, white millet, canary seed, striped sunflower seeds, oat groats, and groundnut kernels.</li>
        <li>Enriched with VAM pellets (Vitamins, Amino acids, Minerals).</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Provide fresh seed daily in a clean bowl. Ensure fresh drinking water is always available.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kiran S.", rating: 5, comment: "My budgie loves this mix. His feathers look so shiny and healthy.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_33.jpg"] },
      { reviewer_name: "Ramesh P.", rating: 4.5, comment: "Good quality seeds, and my bird seems to enjoy it more than other brands.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Sneha B.", rating: 5, comment: "This is a great product. The quantity is also good for the price.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_34.jpg"] }
    ],
  },
  {
    id: "PID000018",
    short_name: "Savian Parakeet Cage",
    short_description: "Durable and spacious bird cage with a pull-out tray for easy cleaning.",
    original_price: 3800,
    discountPercent: 35,
    images: ["/images/bird/beds/18a.png", "/images/bird/beds/18b.png"],
    brand: "Savic",
    weight: { value: 3.5, unit: "kg" },
    package_dimensions: { length: 40.0, width: 30.0, height: 40.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Birds",
    stock: 25,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>A Safe and Comfortable Home for Your Bird</h3>
      <p>The Savian Parakeet Cage provides a secure and comfortable living space for your bird. The cage features a sturdy wire construction, multiple perches, and two food/water bowls. The removable pull-out tray at the bottom makes cleaning a simple, quick task.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Non-toxic, durable powder-coated wire.</li>
        <li>Includes perches and feeding cups.</li>
        <li>Easy-to-clean pull-out tray.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Requires minimal assembly. Comes with all necessary parts and instructions.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anshul P.", rating: 5, comment: "Great cage for the price. My parakeets have plenty of space to fly around.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_35.jpg"] },
      { reviewer_name: "Geeta K.", rating: 4, comment: "Sturdy cage, but the perches are a little thin. I replaced them with natural wood ones.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kunal M.", rating: 5, comment: "Love the pull-out tray. Makes cleaning so much easier.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_36.jpg"] }
    ],
  },
  {
    id: "PID000019",
    short_name: "Himalaya Pet Care Digyton Plus",
    short_description: "Herbal tonic to improve digestion and regulate bowel movements in dogs and cats.",
    original_price: 220,
    discountPercent: 8,
    images: ["/images/dog/health/19a.png", "/images/dog/health/19b.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 12.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 140,
    rating: 4.7,
    reviews: 155,
    detailed_description: `
      <h3>Digestive Support for Your Pet</h3>
      <p>Himalaya Pet Care Digyton Plus is a natural digestive tonic for dogs and cats. The herbal formulation helps to regulate bowel movements, relieve flatulence, and improve nutrient absorption. It is particularly useful for pets with digestive issues, poor appetite, or after antibiotic treatment.</p>
      <h4>Directions for use:</h4>
      <ul>
        <li>Administer directly into your pet's mouth or mix with their food.</li>
        <li>Follow the dosage chart on the package for correct usage based on your pet's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dill oil, Cardamom, and other natural herbs.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shyamali P.", rating: 5, comment: "My vet recommended this for my dog's sensitive stomach. It works wonderfully.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_37.jpg"] },
      { reviewer_name: "Ashish M.", rating: 4.5, comment: "It took a few days to see a difference, but my dog's digestion is much better now.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Pooja B.", rating: 5, comment: "My dog is happy and healthy again. Great product.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_38.jpg"] }
    ],
  },
  {
    id: "PID000020",
    short_name: "Pedigree Chicken & Vegetable Dry Food",
    short_description: "Nutrient-rich dry food for adult dogs, provides complete and balanced nutrition.",
    original_price: 550,
    discountPercent: 10,
    images: ["/images/dog/food/20a.png", "/images/dog/food/20b.png"],
    brand: "Pedigree",
    weight: { value: 1.0, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 180,
    rating: 4.6,
    reviews: 450,
    detailed_description: `
      <h3>Daily Nutrition for an Active Dog</h3>
      <p>Pedigree Chicken & Vegetable Dry Food is a classic choice for pet owners. It contains a perfect blend of protein, vitamins, and minerals to support your dog's overall health and well-being. The crunchy kibble helps to clean teeth and reduce plaque and tartar buildup.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Strong muscles and bones.</li>
        <li>Healthy skin and coat.</li>
        <li>Improved digestion and immunity.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Cereals, meat and meat by-products, vegetables, oils and fats, and essential vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Vinay R.", rating: 5, comment: "A trusted brand that my dog has been eating for years. He's happy and healthy.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_39.jpg"] },
      { reviewer_name: "Sunita G.", rating: 4, comment: "Good everyday food, but I wish it had a higher meat content.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Prakash T.", rating: 5, comment: "My dog loves the taste. It's affordable and reliable.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_40.jpg"] }
    ],
  },
  {
    id: "PID000021",
    short_name: "Purina Friskies Indoor Pate Cat Food",
    short_description: "Wet food with a savory chicken flavor, specially formulated for indoor cats.",
    original_price: 150,
    discountPercent: 10,
    images: ["/images/cat/food/21a.png", "/images/cat/food/21b.png"],
    brand: "Purina",
    weight: { value: 0.156, unit: "kg" },
    package_dimensions: { length: 8.0, width: 8.0, height: 4.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 250,
    rating: 4.6,
    reviews: 95,
    detailed_description: `
      <h3>A Delicious Meal to Satisfy Picky Eaters</h3>
      <p>Purina Friskies Indoor Pate is a gourmet meal designed to meet the specific needs of indoor cats. The smooth, rich pate texture and savory chicken flavor are irresistible to even the most discerning felines. It helps to control hairballs and maintain a healthy weight.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>High moisture content for hydration.</li>
        <li>Helps control hairball formation.</li>
        <li>Made with real poultry for a taste cats crave.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Meat by-products, water, poultry, poultry liver, fish, rice, and essential minerals and vitamins.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Radhika M.", rating: 5, comment: "My cats go crazy for this! They literally meow for it every morning.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_41.jpg"] },
      { reviewer_name: "Arjun P.", rating: 4, comment: "My cat likes it, but it has a strong smell. A little messy to serve.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Shalini S.", rating: 5, comment: "The only wet food my cat will eat. It's a lifesaver.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_42.jpg"] }
    ],
  },
  {
    id: "PID000022",
    short_name: "Dophin All Glass Aquarium",
    short_description: "Compact and stylish glass aquarium with a cover and filter system.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/fish/beds/22a.png", "/images/fish/beds/22b.png"],
    brand: "Dophin",
    weight: { value: 5.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 25.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Fishes",
    stock: 40,
    rating: 4.6,
    reviews: 65,
    detailed_description: `
      <h3>A Serene Home for Your Aquatic Friends</h3>
      <p>The Dophin All Glass Aquarium is the perfect starter kit for new fish keepers. It features a seamless, all-glass design for a clear view of your aquatic world. The kit comes complete with a top cover to prevent fish from jumping out and a reliable filter system to keep the water clean and clear.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-quality, durable glass construction.</li>
        <li>Includes a quiet and efficient filter.</li>
        <li>Sleek, modern design fits any decor.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Refer to the manual for a detailed setup guide and cleaning instructions.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman L.", rating: 5, comment: "Easy to set up and looks great. My fish seem very happy in their new home.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_43.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "The filter is a little weak for the size, but it works fine for a few small fish.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Arjun B.", rating: 5, comment: "Great value for money. Looks much more expensive than it is.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_44.jpg"] }
    ],
  },
  {
    id: "PID000023",
    short_name: "Liveonce Budgie Nesting Box",
    short_description: "Natural wooden nesting box for breeding budgies, safe and comfortable.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/bird/beds/23a.png", "/images/bird/beds/23b.png"],
    brand: "Liveonce",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 15.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Birds",
    stock: 65,
    rating: 4.7,
    reviews: 40,
    detailed_description: `
      <h3>A Secure Space for Your Bird's Family</h3>
      <p>The Liveonce Budgie Nesting Box is a safe and natural habitat for your breeding budgies. Made from high-quality, unvarnished wood, it provides a perfect environment for nesting. The hinged lid makes it easy to inspect and clean the box, while the metal ring around the entrance protects the wood from chewing.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from all-natural, bird-safe wood.</li>
        <li>Hinged lid for easy access and cleaning.</li>
        <li>Durable and well-constructed.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Ensure the box is securely attached to the inside or outside of the cage. Clean regularly to maintain hygiene.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Riya S.", rating: 5, comment: "My budgies started nesting in it almost immediately. Great product!", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_45.jpg"] },
      { reviewer_name: "Vikas M.", rating: 4, comment: "Good quality, but a little bit of a tight fit in my cage. Check dimensions before buying.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Shikha D.", rating: 5, comment: "It's sturdy and my birds seem to love it. Very happy with the purchase.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_46.jpg"] }
    ],
  },
  {
    id: "PID000024",
    short_name: "Royal Canin Puppy Medium Dry Food",
    short_description: "Dry food for medium-breed puppies, supports a healthy immune system and digestion.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/dog/food/24a.png", "/images/dog/food/24b.png"],
    brand: "Royal Canin",
    weight: { value: 3.0, unit: "kg" },
    package_dimensions: { length: 28.0, width: 22.0, height: 12.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 75,
    rating: 4.9,
    reviews: 210,
    detailed_description: `
      <h3>Optimal Growth and Development</h3>
      <p>Royal Canin Medium Puppy food is precisely formulated to meet the high energy and nutritional needs of medium-breed puppies during their short but intense growth period. The formula helps build strong bones and muscles and supports their developing immune system. The highly digestible protein ensures healthy digestion.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes healthy growth and development.</li>
        <li>Supports a healthy immune system.</li>
        <li>High-quality proteins for digestive health.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Start with this food until your puppy reaches 12 months of age, then transition to an adult formula.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali S.", rating: 5, comment: "My lab puppy loves this food. He's growing so well and his vet is very happy with his health.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_47.jpg"] },
      { reviewer_name: "Suresh B.", rating: 4.5, comment: "Good, but the kibble is a bit hard. I have to soften it with water for my puppy.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "I've been using this since I got my puppy. He's thriving and has no digestive issues.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_48.jpg"] }
    ],
  },
  {
    id: "PID000025",
    short_name: "Whiskas Chicken & Tuna Dry Cat Food",
    short_description: "Dry food for adult cats, with a tasty chicken and tuna flavor.",
    original_price: 650,
    discountPercent: 12,
    images: ["/images/cat/food/25a.png", "/images/cat/food/25b.png"],
    brand: "Whiskas",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 150,
    rating: 4.5,
    reviews: 320,
    detailed_description: `
      <h3>Irresistible Taste for Your Cat</h3>
      <p>Whiskas Chicken & Tuna is a complete and balanced meal for your adult cat. It combines the delicious taste of real chicken and tuna to satisfy your cat's cravings. The crunchy kibble helps to keep their teeth clean and healthy, while the balanced nutrients support a happy and active life.</p>
      <h4>Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Helps support urinary tract health.</li>
        <li>Contains essential vitamins and minerals for overall well-being.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Cereals, meat and animal by-products, fish meal, tuna meal, and essential nutrients.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ritu G.", rating: 5, comment: "My cat loves this food. He eats it all up every time.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_49.jpg"] },
      { reviewer_name: "Vivek S.", rating: 4, comment: "It's good for the price, but my cat gets bored of it after a while.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Priyanka M.", rating: 5, comment: "My vet recommended Whiskas. It's a reliable and affordable option.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_50.jpg"] }
    ],
  },
  {
    id: "PID000026",
    short_name: "Fluval Canister Filter 207",
    short_description: "High-performance external filter for aquariums, provides superior water filtration.",
    original_price: 7500,
    discountPercent: 10,
    images: ["/images/fish/accessories/26a.png", "/images/fish/accessories/26b.png"],
    brand: "Fluval",
    weight: { value: 2.8, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 40.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 30,
    rating: 4.9,
    reviews: 80,
    detailed_description: `
      <h3>Crystal Clear Water for Your Aquarium</h3>
      <p>The Fluval Canister Filter 207 is a powerful external filter designed for aquariums up to 200 liters. It offers multi-stage filtration, combining mechanical, chemical, and biological filtration to ensure your water is pristine. The filter is incredibly quiet and energy-efficient, making it a great choice for any fish keeper.</p>
      <h4>Filtration Stages:</h4>
      <ul>
        <li>**Mechanical:** Foam inserts trap debris and particles.</li>
        <li>**Chemical:** Activated carbon removes odors and discoloration.</li>
        <li>**Biological:** Bio-rings provide a large surface area for beneficial bacteria.</li>
      </ul>
      <p><strong>Setup:</strong> <br>Comes with all media and hosing required for a quick and easy setup.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sanjay N.", rating: 5, comment: "This filter is a game-changer! My tank has never been this clean. So quiet too.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_51.jpg"] },
      { reviewer_name: "Divya R.", rating: 4.5, comment: "Works great, but the manual was a little hard to follow. YouTube tutorials helped.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Rohit V.", rating: 5, comment: "The best filter I've ever owned. Worth the investment for a healthy tank.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_52.jpg"] }
    ],
  },
  {
    id: "PID000027",
    short_name: "Vetafarm Budgie & Finch Pellets",
    short_description: "Nutritionally complete pellets for budgies, finches, and small parrots.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/bird/food/27a.png", "/images/bird/food/27b.png"],
    brand: "Vetafarm",
    weight: { value: 0.75, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 80,
    rating: 4.8,
    reviews: 130,
    detailed_description: `
      <h3>Complete Nutrition for Small Birds</h3>
      <p>Vetafarm Budgie & Finch Pellets are formulated by avian veterinarians to provide all the essential vitamins, minerals, and amino acids your small bird needs. These pellets prevent the selective feeding that can occur with seed mixes, ensuring a balanced diet. The pellets have a delicious fruit flavor that birds love.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Prevents selective feeding and nutritional deficiencies.</li>
        <li>Promotes strong beaks and healthy feather growth.</li>
        <li>Enhances vitality and overall health.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Gradually transition your bird from their old food to these pellets over a period of 10-14 days.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Naina S.", rating: 5, comment: "My finches love these pellets! Their feathers are so vibrant now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_53.jpg"] },
      { reviewer_name: "Gaurav R.", rating: 4.5, comment: "Good quality, but it took my birds a while to get used to the new food.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Kavya M.", rating: 5, comment: "The vet recommended Vetafarm, and it has made a huge difference in my bird's health.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_54.jpg"] }
    ],
  },
  {
    id: "PID000028",
    short_name: "HUFT Calming Anti-Anxiety Spray for Dogs",
    short_description: "Natural spray with lavender and chamomile to calm nervous or anxious dogs.",
    original_price: 599,
    discountPercent: 10,
    images: ["/images/dog/health/28a.png", "/images/dog/health/28b.png"],
    brand: "HUFT",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 15.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 65,
    rating: 4.7,
    reviews: 80,
    detailed_description: `
      <h3>Find Inner Calm for Your Pet</h3>
      <p>The HUFT Calming Spray is a great solution for dogs that suffer from anxiety due to thunderstorms, car travel, or separation. The natural blend of lavender and chamomile essential oils provides a soothing and relaxing effect, helping to reduce stress and nervous behaviors. It's safe to spray on their bedding, crates, or even in the car.</p>
      <h4>How to Use:</h4>
      <ul>
        <li>Spray lightly on your dog's bedding or a favorite blanket.</li>
        <li>Use in the car before travel to calm them.</li>
        <li>Can also be used in their crate during storms.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Lavender oil, chamomile oil, purified water, and a touch of kindness.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shruti L.", rating: 5, comment: "Used this for my dog during Diwali, and it really helped him stay calm. The scent is lovely.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_55.jpg"] },
      { reviewer_name: "Vivek S.", rating: 4.5, comment: "It works well, but it needs to be reapplied every few hours for long trips.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Pooja B.", rating: 5, comment: "I'm amazed at the difference this has made. My anxious rescue dog is much more relaxed now.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_56.jpg"] }
    ],
  },
  {
    id: "PID000029",
    short_name: "Pedigree Chicken & Milk Puppy Food",
    short_description: "Dry food for puppies, specially formulated with milk for strong bones and growth.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/dog/food/29a.png", "/images/dog/food/29b.png"],
    brand: "Pedigree",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 18.0, width: 12.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 210,
    rating: 4.7,
    reviews: 310,
    detailed_description: `
      <h3>Essential Nutrition for Your Growing Puppy</h3>
      <p>Pedigree Chicken & Milk is the perfect food to support your puppy's growth and development. It contains a precise blend of protein, calcium, and milk to build strong bones and muscles. The small kibble size is perfect for their tiny jaws and helps with their chewing habits.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps build strong bones and teeth.</li>
        <li>Promotes healthy brain development.</li>
        <li>Supports a healthy immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Cereals, meat and meat by-products, milk solids, vegetable extracts, and essential vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shalini G.", rating: 5, comment: "My puppy loves this food. He's growing so fast and has a lot of energy.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_57.jpg"] },
      { reviewer_name: "Amit R.", rating: 4, comment: "A good starter food. My puppy transitioned to it easily.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Tina B.", rating: 5, comment: "Affordable and my puppy is thriving on it. Happy with the purchase.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_58.jpg"] }
    ],
  },
  {
    id: "PID000030",
    short_name: "Whiskas Chicken & Tuna Pouch",
    short_description: "Wet food in a convenient pouch, with real chicken and tuna.",
    original_price: 80,
    discountPercent: 5,
    images: ["/images/cat/food/30a.png", "/images/cat/food/30b.png"],
    brand: "Whiskas",
    weight: { value: 0.085, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 450,
    rating: 4.6,
    reviews: 180,
    detailed_description: `
      <h3>A Pouch of Pure Delight</h3>
      <p>Whiskas Chicken & Tuna Pouch is a delicious and easy-to-serve wet food that will have your cat purring with joy. The soft texture and real meat chunks make it highly palatable, and the high moisture content helps keep your cat hydrated. It's a perfect complement to their dry food.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>High moisture content for hydration.</li>
        <li>Promotes urinary tract health.</li>
        <li>Made with real meat for an irresistible taste.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Can be served as a standalone meal or mixed with dry kibble for added flavor.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anil D.", rating: 5, comment: "My cat's favorite wet food. He finishes it in a minute!", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_59.jpg"] },
      { reviewer_name: "Aparna G.", rating: 4.5, comment: "Good, but the price adds up if you're feeding it daily.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Rahul T.", rating: 5, comment: "My cat is super picky, but he loves this. A perfect treat.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_60.jpg"] }
    ],
  },
  {
    id: "PID000031",
    short_name: "Fluval Canister Filter 207",
    short_description: "Powerful external filter for aquariums up to 300 liters.",
    original_price: 9500,
    discountPercent: 10,
    images: ["/images/fish/accessories/31a.png", "/images/fish/accessories/31b.png"],
    brand: "Fluval",
    weight: { value: 3.5, unit: "kg" },
    package_dimensions: { length: 28.0, width: 18.0, height: 45.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 25,
    rating: 4.9,
    reviews: 90,
    detailed_description: `
      <h3>Professional-Grade Filtration for Large Tanks</h3>
      <p>The Fluval Canister Filter 307 offers advanced multi-stage filtration for larger aquariums. Its quiet operation and high flow rate ensure your water remains crystal clear and healthy for your fish. The new design allows for quicker and easier setup and maintenance, making it a favorite among experienced fish keepers.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Patented AquaStop valve for easy disconnection.</li>
        <li>Sound-dampening impeller for quiet operation.</li>
        <li>Multiple filtration media included.</li>
      </ul>
      <p><strong>Setup:</strong> <br>Follow the detailed manual for a simple, step-by-step setup guide. It's designed to be user-friendly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Manish R.", rating: 5, comment: "This filter is a beast! My large tank is so clean now. Worth the money.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_61.jpg"] },
      { reviewer_name: "Pooja B.", rating: 4.5, comment: "The setup was a bit complicated, but once it was running, the results were amazing.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Sandeep S.", rating: 5, comment: "Highly recommended for serious aquarists. It's quiet and powerful.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_62.jpg"] }
    ],
  },
  {
    id: "PID000032",
    short_name: "Versele-Laga Prestige Cockatiel",
    short_description: "Complete seed mixture for cockatiels and other parakeets.",
    original_price: 350,
    discountPercent: 8,
    images: ["/images/bird/food/32a.png", "/images/bird/food/32b.png"],
    brand: "Versele Laga",
    weight: { value: 0.65, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 70,
    rating: 4.6,
    reviews: 120,
    detailed_description: `
      <h3>A Balanced Meal for a Vibrant Life</h3>
      <p>Versele-Laga Prestige Cockatiel is a delicious and nutritious seed blend that provides all the essential nutrients for your bird. The mix of high-quality seeds, grains, and added vitamins ensures your cockatiel maintains a healthy weight and has a vibrant, glossy plumage. It's a taste they'll love and a nutrition you can trust.</p>
      <h4>Ingredients:</h4>
      <ul>
        <li>Canary seed, millet, sunflower seeds, safflower seed, and hempseed.</li>
        <li>Enriched with vitamins A, D3, and E.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Provide fresh seed daily. Monitor your bird's consumption to ensure they are eating a balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul K.", rating: 5, comment: "My cockatiel loves this food. She's so much more energetic now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_63.jpg"] },
      { reviewer_name: "Neha G.", rating: 4, comment: "It's good, but my bird tends to leave some of the seeds.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "A staple for my cockatiels. The quality is always consistent.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_64.jpg"] }
    ],
  },
  {
    id: "PID000033",
    short_name: "Royal Canin Fit 32 Adult Cat Food",
    short_description: "Dry food for moderately active adult cats, helps maintain an ideal weight.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/food/33a.png", "/images/cat/food/33b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 200,
    detailed_description: `
      <h3>Precise Nutrition for Optimal Health</h3>
      <p>Royal Canin Fit 32 is designed for adult cats with a moderate activity level. It contains a precise balance of nutrients to support your cat's overall health and well-being. The formula helps maintain an ideal weight and supports urinary tract health, while the delicious taste ensures high palatability.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Balanced nutrition to maintain a healthy weight.</li>
        <li>Supports urinary tract health with a balanced mineral content.</li>
        <li>High-quality, easily digestible proteins.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed daily according to your cat's weight and activity level. Always provide fresh water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat's weight is perfect now. She loves this food and seems much more energetic.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_65.jpg"] },
      { reviewer_name: "Rajiv S.", rating: 4.5, comment: "Good quality, and my cat enjoys the taste. A bit expensive, but worth it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Anjali G.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_66.jpg"] }
    ],
  },
  {
    id: "PID000034",
    short_name: "Iams Proactive Health Adult Dog",
    short_description: "Dry dog food for a healthy coat and strong immune system.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/dog/food/34a.png", "/images/dog/food/34b.png"],
    brand: "Iams",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 22.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 140,
    rating: 4.6,
    reviews: 280,
    detailed_description: `
      <h3>Nourishment for a Vibrant Life</h3>
      <p>Iams Proactive Health is a complete and balanced food for your adult dog. It is formulated with high-quality protein to support strong muscles and a healthy heart. The blend of nutrients, including omega fatty acids, helps maintain a shiny coat and supports a robust immune system.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Strengthens the immune system.</li>
        <li>High-quality protein for strong muscles.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, corn, barley, rice, chicken fat, dried beet pulp, and essential vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tina L.", rating: 5, comment: "My dog loves this food, and his coat looks so much healthier now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_67.jpg"] },
      { reviewer_name: "Prakash V.", rating: 4, comment: "Good everyday food, but the bag is a bit small.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Simran S.", rating: 5, comment: "My dog has been eating Iams for years. It's a brand I trust.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_68.jpg"] }
    ],
  },
  {
    id: "PID000035",
    short_name: "SunSun Canister Filter 603B",
    short_description: "Compact external filter with built-in pump for small aquariums.",
    original_price: 2800,
    discountPercent: 10,
    images: ["/images/fish/accessories/35a.png", "/images/fish/accessories/35b.png"],
    brand: "SunSun",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 25.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 55,
    rating: 4.5,
    reviews: 60,
    detailed_description: `
      <h3>Efficient Filtration for Smaller Tanks</h3>
      <p>The SunSun Canister Filter 603B is an affordable and efficient external filter for small to medium-sized aquariums. It comes with a built-in pump and is designed for easy setup and maintenance. It provides multi-stage filtration to keep your water clean, clear, and healthy for your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Compact and quiet design.</li>
        <li>Includes all necessary filter media.</li>
        <li>Ideal for tanks up to 100 liters.</li>
      </ul>
      <p><strong>Setup:</strong> <br>Refer to the manual for a detailed setup guide. It's a great beginner filter.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anil B.", rating: 5, comment: "A great budget filter. My tank is so much cleaner now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_69.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Works well, but the hoses are a bit stiff. It's hard to position them.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh K.", rating: 5, comment: "Perfect for my 50-liter tank. Very quiet and efficient.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_70.jpg"] }
    ],
  },
  {
    id: "PID000036",
    short_name: "Liveonce Natural Wood Perch",
    short_description: "Natural wood perch for birds, provides a comfortable grip and helps with nail health.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/bird/accessories/36a.png", "/images/bird/accessories/36b.png"],
    brand: "Liveonce",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 25.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 150,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>A Comfortable and Healthy Perch</h3>
      <p>This natural wood perch provides a comfortable and secure place for your bird to rest. The irregular surface helps to exercise your bird's feet and keeps their nails naturally trimmed. It is made from bird-safe wood and is easy to attach to any cage.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from all-natural, untreated wood.</li>
        <li>Promotes foot health and exercises leg muscles.</li>
        <li>Easy to install with a wing nut and washer.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Replace if the wood becomes too worn or chewed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya T.", rating: 5, comment: "My lovebird loves this perch. It's a great addition to his cage.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_71.jpg"] },
      { reviewer_name: "Ashish G.", rating: 4.5, comment: "Good quality, and it's easy to attach. My bird seems to prefer it over the plastic ones.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Sonia B.", rating: 5, comment: "A simple and effective product. Highly recommended.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_72.jpg"] }
    ],
  },
  {
    id: "PID000037",
    short_name: "Pedigree Chicken & Liver Pouch",
    short_description: "Wet dog food in a savory gravy, with real chicken and liver chunks.",
    original_price: 90,
    discountPercent: 8,
    images: ["/images/dog/food/37a.png", "/images/dog/food/37b.png"],
    brand: "Pedigree",
    weight: { value: 0.13, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 300,
    rating: 4.7,
    reviews: 180,
    detailed_description: `
      <h3>A Delicious Meal for Your Best Friend</h3>
      <p>Pedigree Chicken & Liver Pouch is a tasty wet food that can be served on its own or mixed with dry kibble. The real meat chunks in a savory gravy make it irresistible to dogs, and the high moisture content helps with hydration. It's a great way to add variety to your dog's diet.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Highly palatable and easy to digest.</li>
        <li>Provides essential nutrients for a healthy diet.</li>
        <li>Made with real meat for a delicious taste.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Refer to the package for a detailed feeding guide. Can be served as a treat or a meal topper.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Preeti V.", rating: 5, comment: "My dog is super picky, but he loves this! A great way to get him to eat his dry food.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_73.jpg"] },
      { reviewer_name: "Ritesh P.", rating: 4.5, comment: "Good quality, and my dog seems to enjoy it. The price is reasonable too.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Swati M.", rating: 5, comment: "My dog's favorite treat. He can't get enough of it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_74.jpg"] }
    ],
  },
  {
    id: "PID000038",
    short_name: "Blue Buffalo Wilderness Chicken Dry Cat Food",
    short_description: "Grain-free, high-protein dry food with real chicken for cats.",
    original_price: 2200,
    discountPercent: 15,
    images: ["/images/cat/food/38a.png", "/images/cat/food/38b.png"],
    brand: "Blue Buffalo",
    weight: { value: 2.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 75,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>A Wildly Delicious and Healthy Meal</h3>
      <p>Blue Buffalo Wilderness is inspired by the diet of wild cats. It's a high-protein, grain-free formula with real chicken as the first ingredient. The food is packed with LifeSource Bits, a blend of antioxidants, vitamins, and minerals to support a healthy immune system and overall wellness. It's the perfect choice for an active cat.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Grain-free for sensitive stomachs.</li>
        <li>High protein to support lean muscle mass.</li>
        <li>Contains essential nutrients for a strong immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, chicken meal, tapioca starch, potatoes, dried eggs, and pea protein.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arjun B.", rating: 5, comment: "My cat's coat is so shiny now. This is the best cat food I've ever bought.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_75.jpg"] },
      { reviewer_name: "Neha V.", rating: 4.5, comment: "My cat loves it, but it's a bit on the expensive side.", date: "2024-09-03T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_76.jpg"] }
    ],
  },
  {
    id: "PID000039",
    short_name: "Tetra Goldfish Flakes Food",
    short_description: "Nutritionally complete flake food for all types of goldfish.",
    original_price: 180,
    discountPercent: 8,
    images: ["/images/fish/food/39a.png", "/images/fish/food/39b.png"],
    brand: "Tetra",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 12.0, width: 7.0, height: 3.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 220,
    rating: 4.8,
    reviews: 280,
    detailed_description: `
      <h3>The Perfect Diet for Your Goldfish</h3>
      <p>Tetra Goldfish Flakes are a scientifically formulated food that provides a complete and balanced diet for your goldfish. The flakes are designed to be easily digestible, helping to keep your aquarium water clean and clear. The formula is rich in Vitamin C to support a strong immune system and promote vibrant colors.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes vibrant colors and active swimming.</li>
        <li>Easily digestible to reduce waste and water pollution.</li>
        <li>Enriched with Vitamin C to support a healthy immune system.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed 2-3 times daily, only what your fish can consume in 3 minutes. Avoid overfeeding.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My goldfish love this food. They look so healthy and their colors are so bright.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_77.jpg"] },
      { reviewer_name: "Nikhil K.", rating: 4.5, comment: "Good quality, and my goldfish go crazy for it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Shreya S.", rating: 5, comment: "A staple in my aquarium. Great value for money.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_78.jpg"] }
    ],
  },
  {
    id: "PID000040",
    short_name: "Captain Zack Barking Up The Tea Tree Shampoo",
    short_description: "All-natural shampoo for dogs with tea tree oil, soothes irritated skin.",
    original_price: 1499,
    discountPercent: 50,
    images: ["/images/dog/grooming/40a.png", "/images/dog/grooming/40b.png"],
    brand: "Captain Zack",
    weight: { value: 0.4, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 110,
    rating: 4.8,
    reviews: 85,
    detailed_description: `
      <h3>A Soothing Bath for Your Pet</h3>
      <p>Captain Zack Barking Up The Tea Tree Shampoo is a gentle and effective way to clean your dog's coat while soothing irritated skin. The tea tree oil helps to calm inflammation and provide relief from itching. This pH-balanced formula is free from harsh chemicals and is safe for all dog breeds.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made with natural ingredients.</li>
        <li>Soothing and anti-inflammatory.</li>
        <li>pH-balanced and tear-free.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet the coat, lather the shampoo, and rinse thoroughly. Avoid contact with eyes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya L.", rating: 5, comment: "This shampoo is amazing. It calmed my dog's skin and left his coat so soft.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_79.jpg"] },
      { reviewer_name: "Vikas M.", rating: 4.5, comment: "Good, but the scent is a bit strong. The results are worth it though.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Swati R.", rating: 5, comment: "My dog is less itchy now. A great product for sensitive skin.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_80.jpg"] }
    ],
  },
  {
    id: "PID000041",
    short_name: "Drools Vet Pro Skin & Coat",
    short_description: "Dietary supplement for dogs and cats, promotes a healthy skin and shiny coat.",
    original_price: 399,
    discountPercent: 10,
    images: ["/images/dog/health/41a.png", "/images/dog/health/41b.png"],
    brand: "Drools",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.6,
    reviews: 75,
    detailed_description: `
      <h3>Nourishment from the Inside Out</h3>
      <p>Drools Vet Pro Skin & Coat is a nutritional supplement that helps improve the health of your pet's skin and coat. It is enriched with Omega-3 and Omega-6 fatty acids, along with essential vitamins and minerals, to reduce shedding, soothe dry skin, and make the coat lustrous and healthy. It's suitable for both dogs and cats.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Administer the prescribed dosage with your pet's food.</li>
        <li>Follow the dosage chart on the package for your pet's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Omega-3 and Omega-6 fatty acids, Zinc, Vitamin E, and Biotin.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul G.", rating: 5, comment: "My dog's coat is so much softer and shinier now. Great product!", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_81.jpg"] },
      { reviewer_name: "Anjali P.", rating: 4.5, comment: "Saw a noticeable difference in shedding after a few weeks of use.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Prakash T.", rating: 5, comment: "Highly recommended for pets with dull coats. It works wonders.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_82.jpg"] }
    ],
  },
  {
    id: "PID000042",
    short_name: "Pedigree Chicken & Milk Gravy",
    short_description: "Wet dog food in a gravy, perfect for puppies.",
    original_price: 1550,
    discountPercent: 25,
    images: ["/images/dog/food/42a.png", "/images/dog/food/42b.png"],
    brand: "Pedigree",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 350,
    rating: 4.6,
    reviews: 210,
    detailed_description: `
      <h3>A Tasty Treat for Your Growing Pup</h3>
      <p>Pedigree Chicken & Milk Gravy is a delicious wet food for puppies. The soft texture and savory gravy make it easy for them to eat, and it can be mixed with dry kibble to add extra flavor and moisture. It provides the essential nutrients and hydration your puppy needs for healthy growth.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Easy to chew and digest.</li>
        <li>Helps support hydration.</li>
        <li>Made with real chicken for a taste puppies love.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Can be served as a standalone meal or mixed with dry kibble for a complete and balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Manoj D.", rating: 5, comment: "My puppy loves this. It's a great way to introduce him to solid food.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_83.jpg"] },
      { reviewer_name: "Sonia G.", rating: 4.5, comment: "Good quality, and my puppy finishes his bowl every time.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Vivek S.", rating: 5, comment: "My puppy is so healthy and active since I started feeding him this.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_84.jpg"] }
    ],
  },
  {
    id: "PID000043",
    short_name: "KONG Cat Wubba",
    short_description: "Plush and feather toy for cats, with a crinkle sound to entice play.",
    original_price: 400,
    discountPercent: 10,
    images: ["/images/cat/toys/43a.png", "/images/cat/toys/43b.png"],
    brand: "KONG",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>A Fun and Engaging Playtime for Your Cat</h3>
      <p>The KONG Cat Wubba is an interactive toy that is perfect for batting, pouncing, and chasing. The plush body is easy for your cat to grab, and the crinkle sound inside entices them to play. The feathers at the top add an extra element of fun, stimulating your cat's natural hunting instincts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft plush material for a gentle feel.</li>
        <li>Crinkle sound to keep your cat engaged.</li>
        <li>Feathers for a fun, hunting-like experience.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Supervise your pet during play. Not a chew toy. Replace if damaged.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat is obsessed with this toy! It's his new favorite.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_85.jpg"] },
      { reviewer_name: "Ajay G.", rating: 4.5, comment: "Good quality, and my cat loves the crinkle sound. It's holding up well.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Deepika S.", rating: 5, comment: "My cat chases it all around the house. It's a great toy.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_86.jpg"] }
    ],
  },
  {
    id: "PID000044",
    short_name: "Dophin Aquarium Ornaments",
    short_description: "Set of decorative ornaments for fish tanks, non-toxic and safe.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/fish/accessories/44a.png", "/images/fish/accessories/44b.png"],
    brand: "Dophin",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 10.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 120,
    rating: 4.7,
    reviews: 80,
    detailed_description: `
      <h3>Create a Beautiful Underwater World</h3>
      <p>This set of Dophin Aquarium Ornaments is perfect for adding color and character to your fish tank. The ornaments are made from high-quality, non-toxic, and fish-safe resin. They are easy to clean and won't affect the water quality, allowing you to create a beautiful and safe environment for your fish.</p>
      <h4>What's included:</h4>
      <ul>
        <li>A variety of colorful plants and stones.</li>
        <li>A small decorative castle or shipwreck.</li>
        <li>A hideaway cave for your fish.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with clean water before placing in the tank. Do not use soap or detergent.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohan L.", rating: 5, comment: "The ornaments look great in my tank. The colors are very vibrant.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_87.jpg"] },
      { reviewer_name: "Suresh P.", rating: 4.5, comment: "Good quality for the price. The small cave is a big hit with my fish.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Neha G.", rating: 5, comment: "Made my tank look so much better. The fish seem to enjoy the new hiding spots.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_88.jpg"] }
    ],
  },
  {
    id: "PID000045",
    short_name: "Lixit Water Bottle for Birds",
    short_description: "No-drip water bottle with a metal spout for small to medium-sized birds.",
    original_price: 200,
    discountPercent: 8,
    images: ["/images/bird/accessories/45a.png", "/images/bird/accessories/45b.png"],
    brand: "Lixit",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 110,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>Fresh Water, No Mess</h3>
      <p>The Lixit Water Bottle is a hygienic and convenient way to provide fresh water for your bird. The no-drip design prevents leaks and keeps the cage clean and dry. The metal spout is durable and provides a clean drinking surface for your bird. It's easy to refill and attach to the cage.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Drip-resistant design.</li>
        <li>Durable, easy-to-clean metal spout.</li>
        <li>Simple to refill and attach.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wash regularly with warm, soapy water. Rinse thoroughly. Check for any blockages in the spout.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rishi M.", rating: 5, comment: "Works great, no leaks at all. My parrot learned to use it quickly.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_89.jpg"] },
      { reviewer_name: "Sunita P.", rating: 4, comment: "Good, but the bottle is a little small for my bird.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Karan B.", rating: 5, comment: "A simple and effective product. It's much better than a water bowl that gets dirty quickly.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_90.jpg"] }
    ],
  },
  {
    id: "PID000046",
    short_name: "Farmina N&D Quinoa Skin & Coat Cat Food",
    short_description: "Grain-free wet cat food with quail, coconut, and quinoa for skin health.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/cat/food/46a.png", "/images/cat/food/46b.png"],
    brand: "Farmina",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 8.0, width: 8.0, height: 4.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 120,
    rating: 4.8,
    reviews: 60,
    detailed_description: `
      <h3>Nourish Your Cat's Skin and Coat from Within</h3>
      <p>Farmina N&D Quinoa Skin & Coat is a delicious, grain-free wet food formulated to support your cat's dermatological health. The blend of quail, coconut, and quinoa provides a unique source of protein and essential fatty acids, helping to soothe irritated skin and reduce excessive shedding. It's a complete and balanced meal for adult cats.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Grain-free and highly digestible.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Unique ingredients for a novel taste.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Serve at room temperature. Can be given as a standalone meal or as a meal topper.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Misha P.", rating: 5, comment: "My cat's skin allergies have improved so much since I started feeding her this. She loves the taste too!", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_91.jpg"] },
      { reviewer_name: "Saurabh V.", rating: 4.5, comment: "Good food, but the cans are a bit small for the price.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Ritu G.", rating: 5, comment: "A great option for cats with sensitive skin. Highly recommended.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_92.jpg"] }
    ],
  },
  {
    id: "PID000047",
    short_name: "GoDog Furballz Dog Toy",
    short_description: "Durable plush toy with puncture-resistant squeaker, perfect for small to medium dogs.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/dog/toys/47a.png", "/images/dog/toys/47b.png"],
    brand: "GoDog",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 8.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 180,
    rating: 4.8,
    reviews: 120,
    detailed_description: `
      <h3>Tough on Fun, Gentle on Teeth</h3>
      <p>The GoDog Furballz is a super soft plush toy that is surprisingly durable. It features a special Chew Guard Technology and a puncture-resistant squeaker, so it can withstand tougher play sessions. The fun, fuzzy texture and bright colors will keep your dog engaged for hours of fetch and cuddle time.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Chew Guard Technology for added durability.</li>
        <li>Puncture-resistant squeaker.</li>
        <li>Soft plush texture for gentle play.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Not a chew toy. Supervise your pet during play. Replace if damaged.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit K.", rating: 5, comment: "My dog loves to play fetch with this. It's surprisingly durable for a plush toy.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_93.jpg"] },
      { reviewer_name: "Pooja L.", rating: 4, comment: "It's good, but my dog managed to get the squeaker out after a few weeks.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "My dog's favorite toy. He carries it everywhere.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_94.jpg"] }
    ],
  },
  {
    id: "PID000048",
    short_name: "Himalaya Pet Care Dog Shampoo",
    short_description: "Herbal shampoo for dogs, provides a clean and shiny coat.",
    original_price: 299,
    discountPercent: 10,
    images: ["/images/dog/grooming/48a.png", "/images/dog/grooming/48b.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.4, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 160,
    rating: 4.6,
    reviews: 90,
    detailed_description: `
      <h3>A Gentle and Effective Clean</h3>
      <p>Himalaya Pet Care Dog Shampoo is a gentle, herbal formula that cleans your dog's coat thoroughly while being gentle on their skin. The natural ingredients help to soothe any irritation and leave the coat smelling fresh and looking shiny. It's a great product for regular use.</p>
      <h4>Key Ingredients:</h4>
      <ul>
        <li>Neem: Known for its antibacterial and anti-fungal properties.</li>
        <li>Aloe Vera: Soothes and moisturizes the skin.</li>
        <li>Eucalyptus Oil: A natural deodorizer and repellent.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet your dog's coat, lather the shampoo, and rinse thoroughly. Avoid contact with eyes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ritesh D.", rating: 5, comment: "This shampoo is great! It left my dog's coat so soft and shiny. The scent is nice too.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_95.jpg"] },
      { reviewer_name: "Priya L.", rating: 4, comment: "Good product, but my dog's skin is still a bit flaky.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Ankit V.", rating: 5, comment: "A trustworthy brand. The shampoo works well and is gentle on my dog's skin.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_96.jpg"] }
    ],
  },
  {
    id: "PID000049",
    short_name: " 2 Feet Dophin All Glass Aquarium",
    short_description: "Compact glass aquarium with a cover and filter system.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/fish/beds/49a.png", "/images/fish/beds/49b.png"],
    brand: "Dophin",
    weight: { value: 5.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 25.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Fishes",
    stock: 40,
    rating: 4.6,
    reviews: 65,
    detailed_description: `
      <h3>A Serene Home for Your Aquatic Friends</h3>
      <p>The Dophin All Glass Aquarium is the perfect starter kit for new fish keepers. It features a seamless, all-glass design for a clear view of your aquatic world. The kit comes complete with a top cover to prevent fish from jumping out and a reliable filter system to keep the water clean and clear.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-quality, durable glass construction.</li>
        <li>Includes a quiet and efficient filter.</li>
        <li>Sleek, modern design fits any decor.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Refer to the manual for a detailed setup guide and cleaning instructions.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman L.", rating: 5, comment: "Easy to set up and looks great. My fish seem very happy in their new home.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_43.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "The filter is a little weak for the size, but it works fine for a few small fish.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Arjun B.", rating: 5, comment: "Great value for money. Looks much more expensive than it is.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_44.jpg"] }
    ],
  },
  {
    id: "PID000050",
    short_name: "Versele-Laga Prestige Cockatiel",
    short_description: "Complete seed mixture for cockatiels and other parakeets.",
    original_price: 350,
    discountPercent: 8,
    images: ["/images/bird/food/50a.png", "/images/bird/food/50b.png"],
    brand: "Versele Laga",
    weight: { value: 0.65, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 70,
    rating: 4.6,
    reviews: 120,
    detailed_description: `
      <h3>A Balanced Meal for a Vibrant Life</h3>
      <p>Versele-Laga Prestige Cockatiel is a delicious and nutritious seed blend that provides all the essential nutrients for your bird. The mix of high-quality seeds, grains, and added vitamins ensures your cockatiel maintains a healthy weight and has a vibrant, glossy plumage. It's a taste they'll love and a nutrition you can trust.</p>
      <h4>Ingredients:</h4>
      <ul>
        <li>Canary seed, millet, sunflower seeds, safflower seed, and hempseed.</li>
        <li>Enriched with vitamins A, D3, and E.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Provide fresh seed daily. Monitor your bird's consumption to ensure they are eating a balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul K.", rating: 5, comment: "My cockatiel loves this food. She's so much more energetic now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_63.jpg"] },
      { reviewer_name: "Neha G.", rating: 4, comment: "It's good, but my bird tends to leave some of the seeds.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "A staple for my cockatiels. The quality is always consistent.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_64.jpg"] }
    ],
  },
  {
    id: "PID000051",
    short_name: "Royal Canin Fit 32 Adult Cat Food",
    short_description: "Dry food for moderately active adult cats, helps maintain an ideal weight.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/food/51a.png", "/images/cat/food/51b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 200,
    detailed_description: `
      <h3>Precise Nutrition for Optimal Health</h3>
      <p>Royal Canin Fit 32 is designed for adult cats with a moderate activity level. It contains a precise balance of nutrients to support your cat's overall health and well-being. The formula helps maintain an ideal weight and supports urinary tract health, while the delicious taste ensures high palatability.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Balanced nutrition to maintain a healthy weight.</li>
        <li>Supports urinary tract health with a balanced mineral content.</li>
        <li>High-quality, easily digestible proteins.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed daily according to your cat's weight and activity level. Always provide fresh water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat's weight is perfect now. She loves this food and seems much more energetic.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_65.jpg"] },
      { reviewer_name: "Rajiv S.", rating: 4.5, comment: "Good quality, and my cat enjoys the taste. A bit expensive, but worth it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Anjali G.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_66.jpg"] }
    ],
  },
  {
    id: "PID000052",
    short_name: "Drools Vet Pro Adult Cat Food",
    short_description: "Specialized adult dry food for cats with sensitive skin and digestive systems.",
    original_price: 1300,
    discountPercent: 10,
    images: ["/images/cat/food/52a.png", "/images/cat/food/52b.png"],
    brand: "Drools",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 95,
    rating: 4.6,
    reviews: 140,
    detailed_description: `
      <h3>Veterinarian-Recommended Nutrition</h3>
      <p>Drools Vet Pro is a premium cat food formulated by veterinarians to support cats with sensitive stomachs and skin. The carefully selected ingredients are easy to digest, and the added omega fatty acids promote a healthy, lustrous coat. This food helps to reduce common issues like excessive shedding and skin irritation.</p>
      <h4>Benefits:</h4>
      <ul>
        <li>Hypoallergenic formula to reduce food sensitivities.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Highly digestible for better nutrient absorption.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Hydrolyzed protein, rice, corn, chicken fat, beet pulp, fish oil, and natural antioxidants.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aisha G.", rating: 5, comment: "My cat's skin issues have cleared up since I switched to this. She loves the taste too.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_27.jpg"] },
      { reviewer_name: "Raju T.", rating: 4, comment: "Good food, but it's a bit hard to find in local stores.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Meena B.", rating: 5, comment: "My vet recommended this, and it has made a huge difference. Worth every penny.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_28.jpg"] }
    ],
  },
  {
    id: "PID000053",
    short_name: "Trixie Cat Activity Fun Board",
    short_description: "Interactive food puzzle for cats, perfect for mental stimulation.",
    original_price: 1800,
    discountPercent: 5,
    images: ["/images/cat/toys/53a.png", "/images/cat/toys/53b.png"],
    brand: "Trixie",
    weight: { value: 0.9, unit: "kg" },
    package_dimensions: { length: 40.0, width: 30.0, height: 10.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 55,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>Engage Your Cat's Natural Instincts</h3>
      <p>The Trixie Cat Activity Fun Board is designed to challenge and entertain your cat. It features five different modules that require your cat to think, play, and work to get their food or treats. This helps prevent boredom and can aid in slowing down fast eaters.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Fill the different modules with your cat's favorite kibble or treats.</li>
        <li>Encourage your cat to use their paws and nose to retrieve the food.</li>
        <li>Can be used for daily feeding to prevent boredom.</li>
      </ul>
      <p><strong>Material:</strong> <br>Durable, food-safe plastic.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sneha G.", rating: 5, comment: "My cat is obsessed with this! It keeps her busy and engaged for a long time.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_17.jpg"] },
      { reviewer_name: "Ali B.", rating: 4, comment: "It's a great concept, but one of the modules is a bit too easy.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Fantastic for my indoor cat. It really makes her think.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_18.jpg"] }
    ],
  },
  {
    id: "PID000054",
    short_name: "Cat Tree with Condo & Perch",
    short_description: "Multi-level cat tree with scratching posts, perches, and a cozy condo.",
    original_price: 5500,
    discountPercent: 20,
    images: ["/images/cat/beds/54a.png", "/images/cat/beds/54b.png"],
    brand: "M-Pets",
    weight: { value: 12.0, unit: "kg" },
    package_dimensions: { length: 60.0, width: 45.0, height: 120.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Cats",
    stock: 35,
    rating: 4.7,
    reviews: 98,
    detailed_description: `
      <h3>A Feline's Dream Playground</h3>
      <p>This multi-level cat tree is a perfect blend of fun and relaxation for your feline friend. It features multiple scratching posts wrapped in natural sisal rope to satisfy their scratching instincts, while the cozy condo provides a private hideaway. The top perch is perfect for napping or keeping a lookout.</p>
      <h4>Materials:</h4>
      <ul>
        <li>Durable particle board with soft plush covering.</li>
        <li>Natural sisal rope for scratching posts.</li>
        <li>Stable base to prevent tipping.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Comes with all necessary tools and instructions for easy assembly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My cat instantly fell in love with this. It's sturdy and looks great.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_19.jpg"] },
      { reviewer_name: "Shreya S.", rating: 4.5, comment: "A little tricky to assemble, but the end result is worth it. My cat uses it all the time.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Ravi G.", rating: 5, comment: "Good quality for the price. The condo is a big hit with my cat.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_20.jpg"] }
    ],
  },
  {
    id: "PID000055",
    short_name: "Bio-Groom Flea & Tick Cat Shampoo",
    short_description: "Gentle formula to kill fleas and ticks on contact, safe for kittens.",
    original_price: 750,
    discountPercent: 10,
    images: ["/images/cat/grooming/55a.png", "/images/cat/grooming/55b.png"],
    brand: "Bio-Groom",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 130,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>Safe and Effective Flea Control</h3>
      <p>Bio-Groom Flea & Tick Cat Shampoo provides a gentle and effective way to protect your cat from parasites. The formula is specifically designed to be tough on fleas and ticks while being gentle on your cat's sensitive skin. It leaves the coat clean, soft, and shiny.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Wet your cat's coat thoroughly with warm water.</li>
        <li>Apply a small amount of shampoo and lather well.</li>
        <li>Leave on for 5-10 minutes before rinsing thoroughly.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Pyrethrins (natural insecticide), Aloe Vera, Lanolin, and Coconut Oil.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya R.", rating: 5, comment: "Worked like a charm! My cat had a few fleas, and this took care of them instantly.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_21.jpg"] },
      { reviewer_name: "Akshay K.", rating: 4, comment: "Good product, but the scent could be a little nicer.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priyanka L.", rating: 5, comment: "I've been using this for a while now, and my cat is completely flea-free.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_22.jpg"] }
    ],
  },
  {
    id: "PID000056",
    short_name: "Vetacare Cat Deworming Tablet",
    short_description: "Broad-spectrum deworming tablet for cats, effective against common worms.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/cat/health/56a.png", "/images/cat/health/56b.png"],
    brand: "Virbac",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Cats",
    stock: 200,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>Complete Protection from Intestinal Parasites</h3>
      <p>Virbac Vetacare is a highly effective deworming tablet that provides comprehensive protection for your cat. It is formulated to eliminate a wide range of common intestinal worms, including roundworms and tapeworms. Regular deworming is crucial for maintaining your cat's overall health and well-being.</p>
      <h4>How to administer:</h4>
      <ul>
        <li>Give the tablet directly to your cat or mix it with a small amount of their food.</li>
        <li>Follow the dosage instructions on the package based on your cat's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Praziquantel and Pyrantel Pamoate.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Reema A.", rating: 5, comment: "Easy to give to my cat, and it worked without any side effects. A great product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_23.jpg"] },
      { reviewer_name: "Kunal R.", rating: 4, comment: "My cat spat it out the first time, but it worked when I mixed it with his favorite treat.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Sonia G.", rating: 5, comment: "My vet recommended this brand. Very happy with the results.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_24.jpg"] }
    ],
  },
  {
    id: "PID000057",
    short_name: "HUFT Cat Collar with Bell",
    short_description: "Adjustable breakaway collar with a gentle bell for safety.",
    original_price: 250,
    discountPercent: 8,
    images: ["/images/cat/accessories/57a.png", "/images/cat/accessories/57b.png"],
    brand: "HUFT",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 180,
    rating: 4.5,
    reviews: 45,
    detailed_description: `
      <h3>Safe and Stylish for Your Feline</h3>
      <p>This HUFT cat collar is designed with your cat's safety in mind. The breakaway buckle releases under pressure to prevent your cat from getting tangled or injured. The small bell helps you keep track of your cat's whereabouts and also protects local birds and wildlife.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Quick-release breakaway safety buckle.</li>
        <li>Soft and comfortable material.</li>
        <li>Adjustable to fit various neck sizes.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with mild soap and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tina V.", rating: 5, comment: "It's perfect! The bell is quiet enough not to annoy me, but I can still hear where my cat is.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_25.jpg"] },
      { reviewer_name: "Farah K.", rating: 4, comment: "Good quality, but my cat managed to lose it once. The breakaway feature works well though.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Rishi M.", rating: 5, comment: "My cat looks so cute in this collar. The safety feature gives me peace of mind.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_26.jpg"] }
    ],
  },
  {
    id: "PID000058",
    short_name: "Himalaya Pet Care Itch-E-Cure",
    short_description: "Herbal spray to soothe skin irritation and prevent scratching in dogs and cats.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/dog/health/58a.png", "/images/dog/health/58b.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 14.0, width: 6.0, height: 4.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 75,
    rating: 4.7,
    reviews: 110,
    detailed_description: `
      <h3>Relief for Your Pet's Itchy Skin</h3>
      <p>Himalaya Pet Care Itch-E-Cure is a natural, herbal formulation that provides quick relief for your pet's irritated skin. It helps to soothe redness, reduce itching, and prevent scratching. The spray is easy to apply and can be used for minor skin issues and allergies.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Clean the affected area.</li>
        <li>Shake the bottle well.</li>
        <li>Spray directly onto the irritated skin from a distance of 15 cm.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Neem, Turmeric, and other natural extracts.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavita S.", rating: 5, comment: "This product worked wonders on my dog's hot spots. Saw results in just two days!", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_11.jpg"] },
      { reviewer_name: "Manoj B.", rating: 4.5, comment: "It's effective, but the smell is a bit strong. My dog doesn't mind it though.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Sunita G.", rating: 5, comment: "My vet recommended this. It's a lifesaver for my dog's seasonal allergies.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_12.jpg"] }
    ],
  },
  {
    id: "PID000059",
    short_name: "Blue Buffalo Wilderness Chicken Dry Cat Food",
    short_description: "Grain-free, high-protein dry food with real chicken for cats.",
    original_price: 2200,
    discountPercent: 15,
    images: ["/images/cat/food/59a.png", "/images/cat/food/59b.png"],
    brand: "Blue Buffalo",
    weight: { value: 2.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 75,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>A Wildly Delicious and Healthy Meal</h3>
      <p>Blue Buffalo Wilderness is inspired by the diet of wild cats. It's a high-protein, grain-free formula with real chicken as the first ingredient. The food is packed with LifeSource Bits, a blend of antioxidants, vitamins, and minerals to support a healthy immune system and overall wellness. It's the perfect choice for an active cat.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Grain-free for sensitive stomachs.</li>
        <li>High protein to support lean muscle mass.</li>
        <li>Contains essential nutrients for a strong immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, chicken meal, tapioca starch, potatoes, dried eggs, and pea protein.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arjun B.", rating: 5, comment: "My cat's coat is so shiny now. This is the best cat food I've ever bought.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_75.jpg"] },
      { reviewer_name: "Neha V.", rating: 4.5, comment: "My cat loves it, but it's a bit on the expensive side.", date: "2024-09-03T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_76.jpg"] }
    ],
  },
  {
    id: "PID000060",
    short_name: "Tetra Goldfish Flakes",
    short_description: "Nutritionally complete flake food for all types of goldfish.",
    original_price: 180,
    discountPercent: 8,
    images: ["/images/fish/food/60a.png", "/images/fish/food/60b.png"],
    brand: "Tetra",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 12.0, width: 7.0, height: 3.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 220,
    rating: 4.8,
    reviews: 280,
    detailed_description: `
      <h3>The Perfect Diet for Your Goldfish</h3>
      <p>Tetra Goldfish Flakes are a scientifically formulated food that provides a complete and balanced diet for your goldfish. The flakes are designed to be easily digestible, helping to keep your aquarium water clean and clear. The formula is rich in Vitamin C to support a strong immune system and promote vibrant colors.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes vibrant colors and active swimming.</li>
        <li>Easily digestible to reduce waste and water pollution.</li>
        <li>Enriched with Vitamin C to support a healthy immune system.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed 2-3 times daily, only what your fish can consume in 3 minutes. Avoid overfeeding.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My goldfish love this food. They look so healthy and their colors are so bright.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_77.jpg"] },
      { reviewer_name: "Nikhil K.", rating: 4.5, comment: "Good quality, and my goldfish go crazy for it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Shreya S.", rating: 5, comment: "A staple in my aquarium. Great value for money.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_78.jpg"] }
    ],
  },
  {
    id: "PID000061",
    short_name: "Captain Zack Barking Up The Tea Tree Shampoo",
    short_description: "All-natural shampoo for dogs with tea tree oil, soothes irritated skin.",
    original_price: 499,
    discountPercent: 10,
    images: ["/images/dog/grooming/61a.png", "/images/dog/grooming/61b.png"],
    brand: "Captain Zack",
    weight: { value: 0.4, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 110,
    rating: 4.8,
    reviews: 85,
    detailed_description: `
      <h3>A Soothing Bath for Your Pet</h3>
      <p>Captain Zack Barking Up The Tea Tree Shampoo is a gentle and effective way to clean your dog's coat while soothing irritated skin. The tea tree oil helps to calm inflammation and provide relief from itching. This pH-balanced formula is free from harsh chemicals and is safe for all dog breeds.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made with natural ingredients.</li>
        <li>Soothing and anti-inflammatory.</li>
        <li>pH-balanced and tear-free.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet the coat, lather the shampoo, and rinse thoroughly. Avoid contact with eyes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya L.", rating: 5, comment: "This shampoo is amazing. It calmed my dog's skin and left his coat so soft.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_79.jpg"] },
      { reviewer_name: "Vikas M.", rating: 4.5, comment: "Good, but the scent is a bit strong. The results are worth it though.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Swati R.", rating: 5, comment: "My dog is less itchy now. A great product for sensitive skin.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_80.jpg"] }
    ],
  },
  {
    id: "PID000062",
    short_name: "Drools Vet Pro Skin & Coat",
    short_description: "Dietary supplement for dogs and cats, promotes a healthy skin and shiny coat.",
    original_price: 399,
    discountPercent: 10,
    images: ["/images/dog/health/62a.png", "/images/dog/health/62b.png"],
    brand: "Drools",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.6,
    reviews: 75,
    detailed_description: `
      <h3>Nourishment from the Inside Out</h3>
      <p>Drools Vet Pro Skin & Coat is a nutritional supplement that helps improve the health of your pet's skin and coat. It is enriched with Omega-3 and Omega-6 fatty acids, along with essential vitamins and minerals, to reduce shedding, soothe dry skin, and make the coat lustrous and healthy. It's suitable for both dogs and cats.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Administer the prescribed dosage with your pet's food.</li>
        <li>Follow the dosage chart on the package for your pet's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Omega-3 and Omega-6 fatty acids, Zinc, Vitamin E, and Biotin.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul G.", rating: 5, comment: "My dog's coat is so much softer and shinier now. Great product!", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_81.jpg"] },
      { reviewer_name: "Anjali P.", rating: 4.5, comment: "Saw a noticeable difference in shedding after a few weeks of use.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Prakash T.", rating: 5, comment: "Highly recommended for pets with dull coats. It works wonders.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_82.jpg"] }
    ],
  },
  {
    id: "PID000063",
    short_name: "Pedigree Chicken & Milk Gravy",
    short_description: "Wet dog food in a gravy, perfect for puppies.",
    original_price: 85,
    discountPercent: 5,
    images: ["/images/dog/food/63a.png", "/images/dog/food/63b.png"],
    brand: "Pedigree",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 350,
    rating: 4.6,
    reviews: 210,
    detailed_description: `
      <h3>A Tasty Treat for Your Growing Pup</h3>
      <p>Pedigree Chicken & Milk Gravy is a delicious wet food for puppies. The soft texture and savory gravy make it easy for them to eat, and it can be mixed with dry kibble to add extra flavor and moisture. It provides the essential nutrients and hydration your puppy needs for healthy growth.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Easy to chew and digest.</li>
        <li>Helps support hydration.</li>
        <li>Made with real chicken for a taste puppies love.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Can be served as a standalone meal or mixed with dry kibble for a complete and balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Manoj D.", rating: 5, comment: "My puppy loves this. It's a great way to introduce him to solid food.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_83.jpg"] },
      { reviewer_name: "Sonia G.", rating: 4.5, comment: "Good quality, and my puppy finishes his bowl every time.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Vivek S.", rating: 5, comment: "My puppy is so healthy and active since I started feeding him this.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_84.jpg"] }
    ],
  },
  {
    id: "PID000064",
    short_name: "KONG Cat Wubba",
    short_description: "Plush and feather toy for cats, with a crinkle sound to entice play.",
    original_price: 400,
    discountPercent: 10,
    images: ["/images/cat/toys/64a.png", "/images/cat/toys/64b.png"],
    brand: "KONG",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>A Fun and Engaging Playtime for Your Cat</h3>
      <p>The KONG Cat Wubba is an interactive toy that is perfect for batting, pouncing, and chasing. The plush body is easy for your cat to grab, and the crinkle sound inside entices them to play. The feathers at the top add an extra element of fun, stimulating your cat's natural hunting instincts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft plush material for a gentle feel.</li>
        <li>Crinkle sound to keep your cat engaged.</li>
        <li>Feathers for a fun, hunting-like experience.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Supervise your pet during play. Not a chew toy. Replace if damaged.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat is obsessed with this toy! It's his new favorite.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_85.jpg"] },
      { reviewer_name: "Ajay G.", rating: 4.5, comment: "Good quality, and my cat loves the crinkle sound. It's holding up well.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Deepika S.", rating: 5, comment: "My cat chases it all around the house. It's a great toy.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_86.jpg"] }
    ],
  },
  {
    id: "PID000065",
    short_name: "Wood Shelfs All Glass Aquarium",
    short_description: "Compact glass aquarium with a cover and filter system.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/fish/beds/65a.png", "/images/fish/beds/65b.png"],
    brand: "Dophin",
    weight: { value: 5.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 25.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Fishes",
    stock: 40,
    rating: 4.6,
    reviews: 65,
    detailed_description: `
      <h3>A Serene Home for Your Aquatic Friends</h3>
      <p>The Dophin All Glass Aquarium is the perfect starter kit for new fish keepers. It features a seamless, all-glass design for a clear view of your aquatic world. The kit comes complete with a top cover to prevent fish from jumping out and a reliable filter system to keep the water clean and clear.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-quality, durable glass construction.</li>
        <li>Includes a quiet and efficient filter.</li>
        <li>Sleek, modern design fits any decor.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Refer to the manual for a detailed setup guide and cleaning instructions.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman L.", rating: 5, comment: "Easy to set up and looks great. My fish seem very happy in their new home.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_43.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "The filter is a little weak for the size, but it works fine for a few small fish.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Arjun B.", rating: 5, comment: "Great value for money. Looks much more expensive than it is.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_44.jpg"] }
    ],
  },
  {
    id: "PID000066",
    short_name: "Versele-Laga Prestige Cockatiel",
    short_description: "Complete seed mixture for cockatiels and other parakeets.",
    original_price: 350,
    discountPercent: 8,
    images: ["/images/bird/food/66a.png", "/images/bird/food/66b.png"],
    brand: "Versele Laga",
    weight: { value: 0.65, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 70,
    rating: 4.6,
    reviews: 120,
    detailed_description: `
      <h3>A Balanced Meal for a Vibrant Life</h3>
      <p>Versele-Laga Prestige Cockatiel is a delicious and nutritious seed blend that provides all the essential nutrients for your bird. The mix of high-quality seeds, grains, and added vitamins ensures your cockatiel maintains a healthy weight and has a vibrant, glossy plumage. It's a taste they'll love and a nutrition you can trust.</p>
      <h4>Ingredients:</h4>
      <ul>
        <li>Canary seed, millet, sunflower seeds, safflower seed, and hempseed.</li>
        <li>Enriched with vitamins A, D3, and E.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Provide fresh seed daily. Monitor your bird's consumption to ensure they are eating a balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul K.", rating: 5, comment: "My cockatiel loves this food. She's so much more energetic now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_63.jpg"] },
      { reviewer_name: "Neha G.", rating: 4, comment: "It's good, but my bird tends to leave some of the seeds.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "A staple for my cockatiels. The quality is always consistent.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_64.jpg"] }
    ],
  },
  {
    id: "PID000067",
    short_name: "Royal Canin Fit 32 Adult Cat Food",
    short_description: "Dry food for moderately active adult cats, helps maintain an ideal weight.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/food/67a.png", "/images/cat/food/67b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 200,
    detailed_description: `
      <h3>Precise Nutrition for Optimal Health</h3>
      <p>Royal Canin Fit 32 is designed for adult cats with a moderate activity level. It contains a precise balance of nutrients to support your cat's overall health and well-being. The formula helps maintain an ideal weight and supports urinary tract health, while the delicious taste ensures high palatability.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Balanced nutrition to maintain a healthy weight.</li>
        <li>Supports urinary tract health with a balanced mineral content.</li>
        <li>High-quality, easily digestible proteins.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed daily according to your cat's weight and activity level. Always provide fresh water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat's weight is perfect now. She loves this food and seems much more energetic.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_65.jpg"] },
      { reviewer_name: "Rajiv S.", rating: 4.5, comment: "Good quality, and my cat enjoys the taste. A bit expensive, but worth it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Anjali G.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_66.jpg"] }
    ],
  },
  {
    id: "PID000068",
    short_name: "Drools Vet Pro Adult Cat Food",
    short_description: "Specialized adult dry food for cats with sensitive skin and digestive systems.",
    original_price: 1300,
    discountPercent: 10,
    images: ["/images/cat/food/68a.png", "/images/cat/food/68b.png"],
    brand: "Drools",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 95,
    rating: 4.6,
    reviews: 140,
    detailed_description: `
      <h3>Veterinarian-Recommended Nutrition</h3>
      <p>Drools Vet Pro is a premium cat food formulated by veterinarians to support cats with sensitive stomachs and skin. The carefully selected ingredients are easy to digest, and the added omega fatty acids promote a healthy, lustrous coat. This food helps to reduce common issues like excessive shedding and skin irritation.</p>
      <h4>Benefits:</h4>
      <ul>
        <li>Hypoallergenic formula to reduce food sensitivities.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Highly digestible for better nutrient absorption.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Hydrolyzed protein, rice, corn, chicken fat, beet pulp, fish oil, and natural antioxidants.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aisha G.", rating: 5, comment: "My cat's skin issues have cleared up since I switched to this. She loves the taste too.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_27.jpg"] },
      { reviewer_name: "Raju T.", rating: 4, comment: "Good food, but it's a bit hard to find in local stores.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Meena B.", rating: 5, comment: "My vet recommended this, and it has made a huge difference. Worth every penny.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_28.jpg"] }
    ],
  },
  {
    id: "PID000069",
    short_name: "Trixie Cat Activity Fun Board",
    short_description: "Interactive food puzzle for cats, perfect for mental stimulation.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/toys/69a.png", "/images/cat/toys/69b.png"],
    brand: "Trixie",
    weight: { value: 0.9, unit: "kg" },
    package_dimensions: { length: 40.0, width: 30.0, height: 10.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 55,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>Engage Your Cat's Natural Instincts</h3>
      <p>The Trixie Cat Activity Fun Board is designed to challenge and entertain your cat. It features five different modules that require your cat to think, play, and work to get their food or treats. This helps prevent boredom and can aid in slowing down fast eaters.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Fill the different modules with your cat's favorite kibble or treats.</li>
        <li>Encourage your cat to use their paws and nose to retrieve the food.</li>
        <li>Can be used for daily feeding to prevent boredom.</li>
      </ul>
      <p><strong>Material:</strong> <br>Durable, food-safe plastic.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sneha G.", rating: 5, comment: "My cat is obsessed with this! It keeps her busy and engaged for a long time.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_17.jpg"] },
      { reviewer_name: "Ali B.", rating: 4, comment: "It's a great concept, but one of the modules is a bit too easy.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Fantastic for my indoor cat. It really makes her think.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_18.jpg"] }
    ],
  },
  {
    id: "PID000070",
    short_name: "Cat Tree with Condo & Perch",
    short_description: "Multi-level cat tree with scratching posts, perches, and a cozy condo.",
    original_price: 5500,
    discountPercent: 20,
    images: ["/images/cat/beds/70a.png", "/images/cat/beds/70b.png"],
    brand: "M-Pets",
    weight: { value: 12.0, unit: "kg" },
    package_dimensions: { length: 60.0, width: 45.0, height: 120.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Cats",
    stock: 35,
    rating: 4.7,
    reviews: 98,
    detailed_description: `
      <h3>A Feline's Dream Playground</h3>
      <p>This multi-level cat tree is a perfect blend of fun and relaxation for your feline friend. It features multiple scratching posts wrapped in natural sisal rope to satisfy their scratching instincts, while the cozy condo provides a private hideaway. The top perch is perfect for napping or keeping a lookout.</p>
      <h4>Materials:</h4>
      <ul>
        <li>Durable particle board with soft plush covering.</li>
        <li>Natural sisal rope for scratching posts.</li>
        <li>Stable base to prevent tipping.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Comes with all necessary tools and instructions for easy assembly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My cat instantly fell in love with this. It's sturdy and looks great.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_19.jpg"] },
      { reviewer_name: "Shreya S.", rating: 4.5, comment: "A little tricky to assemble, but the end result is worth it. My cat uses it all the time.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Ravi G.", rating: 5, comment: "Good quality for the price. The condo is a big hit with my cat.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_20.jpg"] }
    ],
  },
  {
    id: "PID000071",
    short_name: "Bio-Groom Flea & Tick Cat Shampoo",
    short_description: "Gentle formula to kill fleas and ticks on contact, safe for kittens.",
    original_price: 750,
    discountPercent: 10,
    images: ["/images/cat/grooming/71a.png", "/images/cat/grooming/71b.png"],
    brand: "Bio-Groom",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 130,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>Safe and Effective Flea Control</h3>
      <p>Bio-Groom Flea & Tick Cat Shampoo provides a gentle and effective way to protect your cat from parasites. The formula is specifically designed to be tough on fleas and ticks while being gentle on your cat's sensitive skin. It leaves the coat clean, soft, and shiny.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Wet your cat's coat thoroughly with warm water.</li>
        <li>Apply a small amount of shampoo and lather well.</li>
        <li>Leave on for 5-10 minutes before rinsing thoroughly.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Pyrethrins (natural insecticide), Aloe Vera, Lanolin, and Coconut Oil.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya R.", rating: 5, comment: "Worked like a charm! My cat had a few fleas, and this took care of them instantly.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_21.jpg"] },
      { reviewer_name: "Akshay K.", rating: 4, comment: "Good product, but the scent could be a little nicer.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priyanka L.", rating: 5, comment: "I've been using this for a while now, and my cat is completely flea-free.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_22.jpg"] }
    ],
  },
  {
    id: "PID000072",
    short_name: "Vetacare Cat Deworming Tablet",
    short_description: "Broad-spectrum deworming tablet for cats, effective against common worms.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/cat/health/72a.png", "/images/cat/health/72b.png"],
    brand: "Virbac",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Cats",
    stock: 200,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>Complete Protection from Intestinal Parasites</h3>
      <p>Virbac Vetacare is a highly effective deworming tablet that provides comprehensive protection for your cat. It is formulated to eliminate a wide range of common intestinal worms, including roundworms and tapeworms. Regular deworming is crucial for maintaining your cat's overall health and well-being.</p>
      <h4>How to administer:</h4>
      <ul>
        <li>Give the tablet directly to your cat or mix it with a small amount of their food.</li>
        <li>Follow the dosage instructions on the package based on your cat's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Praziquantel and Pyrantel Pamoate.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Reema A.", rating: 5, comment: "Easy to give to my cat, and it worked without any side effects. A great product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_23.jpg"] },
      { reviewer_name: "Kunal R.", rating: 4, comment: "My cat spat it out the first time, but it worked when I mixed it with his favorite treat.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Sonia G.", rating: 5, comment: "My vet recommended this brand. Very happy with the results.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_24.jpg"] }
    ],
  },
  {
    id: "PID000073",
    short_name: "HUFT Cat Collar with Bell",
    short_description: "Adjustable breakaway collar with a gentle bell for safety.",
    original_price: 250,
    discountPercent: 8,
    images: ["/images/cat/accessories/73a.png", "/images/cat/accessories/73b.png"],
    brand: "HUFT",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 180,
    rating: 4.5,
    reviews: 45,
    detailed_description: `
      <h3>Safe and Stylish for Your Feline</h3>
      <p>This HUFT cat collar is designed with your cat's safety in mind. The breakaway buckle releases under pressure to prevent your cat from getting tangled or injured. The small bell helps you keep track of your cat's whereabouts and also protects local birds and wildlife.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Quick-release breakaway safety buckle.</li>
        <li>Soft and comfortable material.</li>
        <li>Adjustable to fit various neck sizes.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with mild soap and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tina V.", rating: 5, comment: "It's perfect! The bell is quiet enough not to annoy me, but I can still hear where my cat is.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_25.jpg"] },
      { reviewer_name: "Farah K.", rating: 4, comment: "Good quality, but my cat managed to lose it once. The breakaway feature works well though.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Rishi M.", rating: 5, comment: "My cat looks so cute in this collar. The safety feature gives me peace of mind.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_26.jpg"] }
    ],
  },
  {
    id: "PID000074",
    short_name: "Iams Proactive Health Adult Dog",
    short_description: "Dry dog food for a healthy coat and strong immune system.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/dog/food/74a.png", "/images/dog/food/74b.png"],
    brand: "Iams",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 22.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 140,
    rating: 4.6,
    reviews: 280,
    detailed_description: `
      <h3>Nourishment for a Vibrant Life</h3>
      <p>Iams Proactive Health is a complete and balanced food for your adult dog. It is formulated with high-quality protein to support strong muscles and a healthy heart. The blend of nutrients, including omega fatty acids, helps maintain a shiny coat and supports a robust immune system.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Strengthens the immune system.</li>
        <li>High-quality protein for strong muscles.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, corn, barley, rice, chicken fat, dried beet pulp, and essential vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tina L.", rating: 5, comment: "My dog loves this food, and his coat looks so much healthier now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_67.jpg"] },
      { reviewer_name: "Prakash V.", rating: 4, comment: "Good everyday food, but the bag is a bit small.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Simran S.", rating: 5, comment: "My dog has been eating Iams for years. It's a brand I trust.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_68.jpg"] }
    ],
  },
  {
    id: "PID000075",
    short_name: "SunSun Canister Filter 603B",
    short_description: "Compact external filter with built-in pump for small aquariums.",
    original_price: 2800,
    discountPercent: 10,
    images: ["/images/fish/accessories/75a.png", "/images/fish/accessories/75b.png"],
    brand: "SunSun",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 25.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 55,
    rating: 4.5,
    reviews: 60,
    detailed_description: `
      <h3>Efficient Filtration for Smaller Tanks</h3>
      <p>The SunSun Canister Filter 603B is an affordable and efficient external filter for small to medium-sized aquariums. It comes with a built-in pump and is designed for easy setup and maintenance. It provides multi-stage filtration to keep your water clean, clear, and healthy for your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Compact and quiet design.</li>
        <li>Includes all necessary filter media.</li>
        <li>Ideal for tanks up to 100 liters.</li>
      </ul>
      <p><strong>Setup:</strong> <br>Refer to the manual for a detailed setup guide. It's a great beginner filter.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anil B.", rating: 5, comment: "A great budget filter. My tank is so much cleaner now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_69.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Works well, but the hoses are a bit stiff. It's hard to position them.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh K.", rating: 5, comment: "Perfect for my 50-liter tank. Very quiet and efficient.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_70.jpg"] }
    ],
  },
  {
    id: "PID000076",
    short_name: "Liveonce Natural Wood Perch",
    short_description: "Natural wood perch for birds, provides a comfortable grip and helps with nail health.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/bird/accessories/76a.png", "/images/bird/accessories/76b.png"],
    brand: "Liveonce",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 25.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 150,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>A Comfortable and Healthy Perch</h3>
      <p>This natural wood perch provides a comfortable and secure place for your bird to rest. The irregular surface helps to exercise your bird's feet and keeps their nails naturally trimmed. It is made from bird-safe wood and is easy to attach to any cage.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from all-natural, untreated wood.</li>
        <li>Promotes foot health and exercises leg muscles.</li>
        <li>Easy to install with a wing nut and washer.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Replace if the wood becomes too worn or chewed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya T.", rating: 5, comment: "My lovebird loves this perch. It's a great addition to his cage.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_71.jpg"] },
      { reviewer_name: "Ashish G.", rating: 4.5, comment: "Good quality, and it's easy to attach. My bird seems to prefer it over the plastic ones.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Sonia B.", rating: 5, comment: "A simple and effective product. Highly recommended.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_72.jpg"] }
    ],
  },
  {
    id: "PID000077",
    short_name: "Pedigree Chicken & Liver Pouch",
    short_description: "Wet dog food in a savory gravy, with real chicken and liver chunks.",
    original_price: 90,
    discountPercent: 8,
    images: ["/images/dog/food/77a.png", "/images/dog/food/77b.png"],
    brand: "Pedigree",
    weight: { value: 0.13, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 300,
    rating: 4.7,
    reviews: 180,
    detailed_description: `
      <h3>A Delicious Meal for Your Best Friend</h3>
      <p>Pedigree Chicken & Liver Pouch is a tasty wet food that can be served on its own or mixed with dry kibble. The real meat chunks in a savory gravy make it irresistible to dogs, and the high moisture content helps with hydration. It's a great way to add variety to your dog's diet.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Highly palatable and easy to digest.</li>
        <li>Provides essential nutrients for a healthy diet.</li>
        <li>Made with real meat for a delicious taste.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Refer to the package for a detailed feeding guide. Can be served as a treat or a meal topper.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Preeti V.", rating: 5, comment: "My dog is super picky, but he loves this! A great way to get him to eat his dry food.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_73.jpg"] },
      { reviewer_name: "Ritesh P.", rating: 4.5, comment: "Good quality, and my dog seems to enjoy it. The price is reasonable too.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Swati M.", rating: 5, comment: "My dog's favorite treat. He can't get enough of it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_74.jpg"] }
    ],
  },
  {
    id: "PID000078",
    short_name: "Blue Buffalo Wilderness Chicken Dry Cat Food",
    short_description: "Grain-free, high-protein dry food with real chicken for cats.",
    original_price: 2200,
    discountPercent: 15,
    images: ["/images/cat/food/78a.png", "/images/cat/food/78b.png"],
    brand: "Blue Buffalo",
    weight: { value: 2.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 75,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>A Wildly Delicious and Healthy Meal</h3>
      <p>Blue Buffalo Wilderness is inspired by the diet of wild cats. It's a high-protein, grain-free formula with real chicken as the first ingredient. The food is packed with LifeSource Bits, a blend of antioxidants, vitamins, and minerals to support a healthy immune system and overall wellness. It's the perfect choice for an active cat.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Grain-free for sensitive stomachs.</li>
        <li>High protein to support lean muscle mass.</li>
        <li>Contains essential nutrients for a strong immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, chicken meal, tapioca starch, potatoes, dried eggs, and pea protein.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arjun B.", rating: 5, comment: "My cat's coat is so shiny now. This is the best cat food I've ever bought.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_75.jpg"] },
      { reviewer_name: "Neha V.", rating: 4.5, comment: "My cat loves it, but it's a bit on the expensive side.", date: "2024-09-03T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_76.jpg"] }
    ],
  },
  {
    id: "PID000079",
    short_name: "Tetra Goldfish Flakes",
    short_description: "Nutritionally complete flake food for all types of goldfish.",
    original_price: 180,
    discountPercent: 8,
    images: ["/images/fish/food/79a.png", "/images/fish/food/79b.png"],
    brand: "Tetra",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 12.0, width: 7.0, height: 3.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 220,
    rating: 4.8,
    reviews: 280,
    detailed_description: `
      <h3>The Perfect Diet for Your Goldfish</h3>
      <p>Tetra Goldfish Flakes are a scientifically formulated food that provides a complete and balanced diet for your goldfish. The flakes are designed to be easily digestible, helping to keep your aquarium water clean and clear. The formula is rich in Vitamin C to support a strong immune system and promote vibrant colors.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes vibrant colors and active swimming.</li>
        <li>Easily digestible to reduce waste and water pollution.</li>
        <li>Enriched with Vitamin C to support a healthy immune system.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed 2-3 times daily, only what your fish can consume in 3 minutes. Avoid overfeeding.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My goldfish love this food. They look so healthy and their colors are so bright.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_77.jpg"] },
      { reviewer_name: "Nikhil K.", rating: 4.5, comment: "Good quality, and my goldfish go crazy for it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Shreya S.", rating: 5, comment: "A staple in my aquarium. Great value for money.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_78.jpg"] }
    ],
  },
  {
    id: "PID000080",
    short_name: "Captain Zack Barking Up The Tea Tree Shampoo",
    short_description: "All-natural shampoo for dogs with tea tree oil, soothes irritated skin.",
    original_price: 499,
    discountPercent: 10,
    images: ["/images/dog/grooming/80a.png", "/images/dog/grooming/80b.png"],
    brand: "Captain Zack",
    weight: { value: 0.4, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 110,
    rating: 4.8,
    reviews: 85,
    detailed_description: `
      <h3>A Soothing Bath for Your Pet</h3>
      <p>Captain Zack Barking Up The Tea Tree Shampoo is a gentle and effective way to clean your dog's coat while soothing irritated skin. The tea tree oil helps to calm inflammation and provide relief from itching. This pH-balanced formula is free from harsh chemicals and is safe for all dog breeds.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made with natural ingredients.</li>
        <li>Soothing and anti-inflammatory.</li>
        <li>pH-balanced and tear-free.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet the coat, lather the shampoo, and rinse thoroughly. Avoid contact with eyes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya L.", rating: 5, comment: "This shampoo is amazing. It calmed my dog's skin and left his coat so soft.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_79.jpg"] },
      { reviewer_name: "Vikas M.", rating: 4.5, comment: "Good, but the scent is a bit strong. The results are worth it though.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Swati R.", rating: 5, comment: "My dog is less itchy now. A great product for sensitive skin.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_80.jpg"] }
    ],
  },
  {
    id: "PID000081",
    short_name: "Drools Vet Pro Skin & Coat",
    short_description: "Dietary supplement for dogs and cats, promotes a healthy skin and shiny coat.",
    original_price: 399,
    discountPercent: 10,
    images: ["/images/dog/health/81a.png", "/images/dog/health/81b.png"],
    brand: "Drools",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.6,
    reviews: 75,
    detailed_description: `
      <h3>Nourishment from the Inside Out</h3>
      <p>Drools Vet Pro Skin & Coat is a nutritional supplement that helps improve the health of your pet's skin and coat. It is enriched with Omega-3 and Omega-6 fatty acids, along with essential vitamins and minerals, to reduce shedding, soothe dry skin, and make the coat lustrous and healthy. It's suitable for both dogs and cats.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Administer the prescribed dosage with your pet's food.</li>
        <li>Follow the dosage chart on the package for your pet's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Omega-3 and Omega-6 fatty acids, Zinc, Vitamin E, and Biotin.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul G.", rating: 5, comment: "My dog's coat is so much softer and shinier now. Great product!", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_81.jpg"] },
      { reviewer_name: "Anjali P.", rating: 4.5, comment: "Saw a noticeable difference in shedding after a few weeks of use.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Prakash T.", rating: 5, comment: "Highly recommended for pets with dull coats. It works wonders.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_82.jpg"] }
    ],
  },
  {
    id: "PID000082",
    short_name: "Pedigree Chicken & Milk Gravy",
    short_description: "Wet dog food in a gravy, perfect for puppies.",
    original_price: 85,
    discountPercent: 5,
    images: ["/images/dog/food/82a.png", "/images/dog/food/82b.png"],
    brand: "Pedigree",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 350,
    rating: 4.6,
    reviews: 210,
    detailed_description: `
      <h3>A Tasty Treat for Your Growing Pup</h3>
      <p>Pedigree Chicken & Milk Gravy is a delicious wet food for puppies. The soft texture and savory gravy make it easy for them to eat, and it can be mixed with dry kibble to add extra flavor and moisture. It provides the essential nutrients and hydration your puppy needs for healthy growth.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Easy to chew and digest.</li>
        <li>Helps support hydration.</li>
        <li>Made with real chicken for a taste puppies love.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Can be served as a standalone meal or mixed with dry kibble for a complete and balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Manoj D.", rating: 5, comment: "My puppy loves this. It's a great way to introduce him to solid food.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_83.jpg"] },
      { reviewer_name: "Sonia G.", rating: 4.5, comment: "Good quality, and my puppy finishes his bowl every time.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Vivek S.", rating: 5, comment: "My puppy is so healthy and active since I started feeding him this.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_84.jpg"] }
    ],
  },
  {
    id: "PID000083",
    short_name: "KONG Cat Wubba",
    short_description: "Plush and feather toy for cats, with a crinkle sound to entice play.",
    original_price: 400,
    discountPercent: 10,
    images: ["/images/cat/toys/83a.png", "/images/cat/toys/83b.png"],
    brand: "KONG",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>A Fun and Engaging Playtime for Your Cat</h3>
      <p>The KONG Cat Wubba is an interactive toy that is perfect for batting, pouncing, and chasing. The plush body is easy for your cat to grab, and the crinkle sound inside entices them to play. The feathers at the top add an extra element of fun, stimulating your cat's natural hunting instincts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft plush material for a gentle feel.</li>
        <li>Crinkle sound to keep your cat engaged.</li>
        <li>Feathers for a fun, hunting-like experience.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Supervise your pet during play. Not a chew toy. Replace if damaged.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat is obsessed with this toy! It's his new favorite.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_85.jpg"] },
      { reviewer_name: "Ajay G.", rating: 4.5, comment: "Good quality, and my cat loves the crinkle sound. It's holding up well.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Deepika S.", rating: 5, comment: "My cat chases it all around the house. It's a great toy.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_86.jpg"] }
    ],
  },
  {
    id: "PID000084",
    short_name: "Parko Big Size Fish Tank Aqua Habitat Aquarium 24 Litre,9x9x18 Inches",
    short_description: "Compact glass aquarium with a cover and filter system.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/fish/beds/84a.png", "/images/fish/beds/84b.png"],
    brand: "Parko",
    weight: { value: 5.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 25.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Fishes",
    stock: 40,
    rating: 4.6,
    reviews: 65,
    detailed_description: `
      <h3>A Serene Home for Your Aquatic Friends</h3>
      <p>The Dophin All Glass Aquarium is the perfect starter kit for new fish keepers. It features a seamless, all-glass design for a clear view of your aquatic world. The kit comes complete with a top cover to prevent fish from jumping out and a reliable filter system to keep the water clean and clear.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-quality, durable glass construction.</li>
        <li>Includes a quiet and efficient filter.</li>
        <li>Sleek, modern design fits any decor.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Refer to the manual for a detailed setup guide and cleaning instructions.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman L.", rating: 5, comment: "Easy to set up and looks great. My fish seem very happy in their new home.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_43.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "The filter is a little weak for the size, but it works fine for a few small fish.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Arjun B.", rating: 5, comment: "Great value for money. Looks much more expensive than it is.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_44.jpg"] }
    ],
  },
  {
    id: "PID000085",
    short_name: "Versele-Laga Prestige Cockatiel",
    short_description: "Complete seed mixture for cockatiels and other parakeets.",
    original_price: 350,
    discountPercent: 8,
    images: ["/images/bird/food/85a.png", "/images/bird/food/85b.png"],
    brand: "Versele Laga",
    weight: { value: 0.65, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 70,
    rating: 4.6,
    reviews: 120,
    detailed_description: `
      <h3>A Balanced Meal for a Vibrant Life</h3>
      <p>Versele-Laga Prestige Cockatiel is a delicious and nutritious seed blend that provides all the essential nutrients for your bird. The mix of high-quality seeds, grains, and added vitamins ensures your cockatiel maintains a healthy weight and has a vibrant, glossy plumage. It's a taste they'll love and a nutrition you can trust.</p>
      <h4>Ingredients:</h4>
      <ul>
        <li>Canary seed, millet, sunflower seeds, safflower seed, and hempseed.</li>
        <li>Enriched with vitamins A, D3, and E.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Provide fresh seed daily. Monitor your bird's consumption to ensure they are eating a balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul K.", rating: 5, comment: "My cockatiel loves this food. She's so much more energetic now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_63.jpg"] },
      { reviewer_name: "Neha G.", rating: 4, comment: "It's good, but my bird tends to leave some of the seeds.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "A staple for my cockatiels. The quality is always consistent.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_64.jpg"] }
    ],
  },
  {
    id: "PID000086",
    short_name: "Royal Canin Fit 32 Adult Cat Food",
    short_description: "Dry food for moderately active adult cats, helps maintain an ideal weight.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/food/86a.png", "/images/cat/food/86b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 200,
    detailed_description: `
      <h3>Precise Nutrition for Optimal Health</h3>
      <p>Royal Canin Fit 32 is designed for adult cats with a moderate activity level. It contains a precise balance of nutrients to support your cat's overall health and well-being. The formula helps maintain an ideal weight and supports urinary tract health, while the delicious taste ensures high palatability.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Balanced nutrition to maintain a healthy weight.</li>
        <li>Supports urinary tract health with a balanced mineral content.</li>
        <li>High-quality, easily digestible proteins.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed daily according to your cat's weight and activity level. Always provide fresh water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat's weight is perfect now. She loves this food and seems much more energetic.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_65.jpg"] },
      { reviewer_name: "Rajiv S.", rating: 4.5, comment: "Good quality, and my cat enjoys the taste. A bit expensive, but worth it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Anjali G.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_66.jpg"] }
    ],
  },
  {
    id: "PID000087",
    short_name: "Drools Vet Pro Adult Cat Food",
    short_description: "Specialized adult dry food for cats with sensitive skin and digestive systems.",
    original_price: 1300,
    discountPercent: 10,
    images: ["/images/cat/food/87a.png", "/images/cat/food/87b.png"],
    brand: "Drools",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 95,
    rating: 4.6,
    reviews: 140,
    detailed_description: `
      <h3>Veterinarian-Recommended Nutrition</h3>
      <p>Drools Vet Pro is a premium cat food formulated by veterinarians to support cats with sensitive stomachs and skin. The carefully selected ingredients are easy to digest, and the added omega fatty acids promote a healthy, lustrous coat. This food helps to reduce common issues like excessive shedding and skin irritation.</p>
      <h4>Benefits:</h4>
      <ul>
        <li>Hypoallergenic formula to reduce food sensitivities.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Highly digestible for better nutrient absorption.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Hydrolyzed protein, rice, corn, chicken fat, beet pulp, fish oil, and natural antioxidants.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aisha G.", rating: 5, comment: "My cat's skin issues have cleared up since I switched to this. She loves the taste too.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_27.jpg"] },
      { reviewer_name: "Raju T.", rating: 4, comment: "Good food, but it's a bit hard to find in local stores.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Meena B.", rating: 5, comment: "My vet recommended this, and it has made a huge difference. Worth every penny.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_28.jpg"] }
    ],
  },
  {
    id: "PID000088",
    short_name: "Trixie Cat Activity Fun Board",
    short_description: "Interactive food puzzle for cats, perfect for mental stimulation.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/toys/88a.png", "/images/cat/toys/88b.png"],
    brand: "Trixie",
    weight: { value: 0.9, unit: "kg" },
    package_dimensions: { length: 40.0, width: 30.0, height: 10.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 55,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>Engage Your Cat's Natural Instincts</h3>
      <p>The Trixie Cat Activity Fun Board is designed to challenge and entertain your cat. It features five different modules that require your cat to think, play, and work to get their food or treats. This helps prevent boredom and can aid in slowing down fast eaters.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Fill the different modules with your cat's favorite kibble or treats.</li>
        <li>Encourage your cat to use their paws and nose to retrieve the food.</li>
        <li>Can be used for daily feeding to prevent boredom.</li>
      </ul>
      <p><strong>Material:</strong> <br>Durable, food-safe plastic.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sneha G.", rating: 5, comment: "My cat is obsessed with this! It keeps her busy and engaged for a long time.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_17.jpg"] },
      { reviewer_name: "Ali B.", rating: 4, comment: "It's a great concept, but one of the modules is a bit too easy.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Fantastic for my indoor cat. It really makes her think.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_18.jpg"] }
    ],
  },
  {
    id: "PID000089",
    short_name: "Cat Tree with Condo & Perch",
    short_description: "Multi-level cat tree with scratching posts, perches, and a cozy condo.",
    original_price: 5500,
    discountPercent: 20,
    images: ["/images/cat/beds/89a.png", "/images/cat/beds/89b.png"],
    brand: "M-Pets",
    weight: { value: 12.0, unit: "kg" },
    package_dimensions: { length: 60.0, width: 45.0, height: 120.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Cats",
    stock: 35,
    rating: 4.7,
    reviews: 98,
    detailed_description: `
      <h3>A Feline's Dream Playground</h3>
      <p>This multi-level cat tree is a perfect blend of fun and relaxation for your feline friend. It features multiple scratching posts wrapped in natural sisal rope to satisfy their scratching instincts, while the cozy condo provides a private hideaway. The top perch is perfect for napping or keeping a lookout.</p>
      <h4>Materials:</h4>
      <ul>
        <li>Durable particle board with soft plush covering.</li>
        <li>Natural sisal rope for scratching posts.</li>
        <li>Stable base to prevent tipping.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Comes with all necessary tools and instructions for easy assembly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My cat instantly fell in love with this. It's sturdy and looks great.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_19.jpg"] },
      { reviewer_name: "Shreya S.", rating: 4.5, comment: "A little tricky to assemble, but the end result is worth it. My cat uses it all the time.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Ravi G.", rating: 5, comment: "Good quality for the price. The condo is a big hit with my cat.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_20.jpg"] }
    ],
  },
  {
    id: "PID000090",
    short_name: "Bio-Groom Flea & Tick Cat Shampoo",
    short_description: "Gentle formula to kill fleas and ticks on contact, safe for kittens.",
    original_price: 750,
    discountPercent: 10,
    images: ["/images/cat/grooming/90a.png", "/images/cat/grooming/90b.png"],
    brand: "Bio-Groom",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 130,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>Safe and Effective Flea Control</h3>
      <p>Bio-Groom Flea & Tick Cat Shampoo provides a gentle and effective way to protect your cat from parasites. The formula is specifically designed to be tough on fleas and ticks while being gentle on your cat's sensitive skin. It leaves the coat clean, soft, and shiny.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Wet your cat's coat thoroughly with warm water.</li>
        <li>Apply a small amount of shampoo and lather well.</li>
        <li>Leave on for 5-10 minutes before rinsing thoroughly.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Pyrethrins (natural insecticide), Aloe Vera, Lanolin, and Coconut Oil.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya R.", rating: 5, comment: "Worked like a charm! My cat had a few fleas, and this took care of them instantly.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_21.jpg"] },
      { reviewer_name: "Akshay K.", rating: 4, comment: "Good product, but the scent could be a little nicer.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priyanka L.", rating: 5, comment: "I've been using this for a while now, and my cat is completely flea-free.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_22.jpg"] }
    ],
  },
  {
    id: "PID000091",
    short_name: "Vetacare Cat Deworming Tablet",
    short_description: "Broad-spectrum deworming tablet for cats, effective against common worms.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/cat/health/91a.png", "/images/cat/health/91b.png"],
    brand: "Virbac",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Cats",
    stock: 200,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>Complete Protection from Intestinal Parasites</h3>
      <p>Virbac Vetacare is a highly effective deworming tablet that provides comprehensive protection for your cat. It is formulated to eliminate a wide range of common intestinal worms, including roundworms and tapeworms. Regular deworming is crucial for maintaining your cat's overall health and well-being.</p>
      <h4>How to administer:</h4>
      <ul>
        <li>Give the tablet directly to your cat or mix it with a small amount of their food.</li>
        <li>Follow the dosage instructions on the package based on your cat's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Praziquantel and Pyrantel Pamoate.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Reema A.", rating: 5, comment: "Easy to give to my cat, and it worked without any side effects. A great product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_23.jpg"] },
      { reviewer_name: "Kunal R.", rating: 4, comment: "My cat spat it out the first time, but it worked when I mixed it with his favorite treat.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Sonia G.", rating: 5, comment: "My vet recommended this brand. Very happy with the results.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_24.jpg"] }
    ],
  },
  {
    id: "PID000092",
    short_name: "HUFT Cat Collar with Bell",
    short_description: "Adjustable breakaway collar with a gentle bell for safety.",
    original_price: 250,
    discountPercent: 8,
    images: ["/images/cat/accessories/92a.png", "/images/cat/accessories/92b.png"],
    brand: "HUFT",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 180,
    rating: 4.5,
    reviews: 45,
    detailed_description: `
      <h3>Safe and Stylish for Your Feline</h3>
      <p>This HUFT cat collar is designed with your cat's safety in mind. The breakaway buckle releases under pressure to prevent your cat from getting tangled or injured. The small bell helps you keep track of your cat's whereabouts and also protects local birds and wildlife.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Quick-release breakaway safety buckle.</li>
        <li>Soft and comfortable material.</li>
        <li>Adjustable to fit various neck sizes.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with mild soap and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tina V.", rating: 5, comment: "It's perfect! The bell is quiet enough not to annoy me, but I can still hear where my cat is.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_25.jpg"] },
      { reviewer_name: "Farah K.", rating: 4, comment: "Good quality, but my cat managed to lose it once. The breakaway feature works well though.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Rishi M.", rating: 5, comment: "My cat looks so cute in this collar. The safety feature gives me peace of mind.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_26.jpg"] }
    ],
  },
  {
    id: "PID000093",
    short_name: "Iams Proactive Health Adult Dog",
    short_description: "Dry dog food for a healthy coat and strong immune system.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/dog/food/93a.png", "/images/dog/food/93b.png"],
    brand: "Iams",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 22.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 140,
    rating: 4.6,
    reviews: 280,
    detailed_description: `
      <h3>Nourishment for a Vibrant Life</h3>
      <p>Iams Proactive Health is a complete and balanced food for your adult dog. It is formulated with high-quality protein to support strong muscles and a healthy heart. The blend of nutrients, including omega fatty acids, helps maintain a shiny coat and supports a robust immune system.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Strengthens the immune system.</li>
        <li>High-quality protein for strong muscles.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, corn, barley, rice, chicken fat, dried beet pulp, and essential vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tina L.", rating: 5, comment: "My dog loves this food, and his coat looks so much healthier now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_67.jpg"] },
      { reviewer_name: "Prakash V.", rating: 4, comment: "Good everyday food, but the bag is a bit small.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Simran S.", rating: 5, comment: "My dog has been eating Iams for years. It's a brand I trust.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_68.jpg"] }
    ],
  },
  {
    id: "PID000094",
    short_name: "SOBO SF External Canister Filter SF-1200F-UV",
    short_description: "Compact external filter with built-in pump for small aquariums.",
    original_price: 12800,
    discountPercent: 45,
    images: ["/images/fish/accessories/94a.png", "/images/fish/accessories/94b.png"],
    brand: "SOBO",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 25.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 55,
    rating: 4.5,
    reviews: 60,
    detailed_description: `
      <h3>Efficient Filtration for Smaller Tanks</h3>
      <p>The SunSun Canister Filter 603B is an affordable and efficient external filter for small to medium-sized aquariums. It comes with a built-in pump and is designed for easy setup and maintenance. It provides multi-stage filtration to keep your water clean, clear, and healthy for your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Compact and quiet design.</li>
        <li>Includes all necessary filter media.</li>
        <li>Ideal for tanks up to 100 liters.</li>
      </ul>
      <p><strong>Setup:</strong> <br>Refer to the manual for a detailed setup guide. It's a great beginner filter.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anil B.", rating: 5, comment: "A great budget filter. My tank is so much cleaner now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_69.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Works well, but the hoses are a bit stiff. It's hard to position them.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh K.", rating: 5, comment: "Perfect for my 50-liter tank. Very quiet and efficient.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_70.jpg"] }
    ],
  },
  {
    id: "PID000095",
    short_name: "Liveonce Natural Wood Perch",
    short_description: "Natural wood perch for birds, provides a comfortable grip and helps with nail health.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/bird/accessories/95a.png", "/images/bird/accessories/95b.png"],
    brand: "Liveonce",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 25.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 150,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>A Comfortable and Healthy Perch</h3>
      <p>This natural wood perch provides a comfortable and secure place for your bird to rest. The irregular surface helps to exercise your bird's feet and keeps their nails naturally trimmed. It is made from bird-safe wood and is easy to attach to any cage.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from all-natural, untreated wood.</li>
        <li>Promotes foot health and exercises leg muscles.</li>
        <li>Easy to install with a wing nut and washer.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Replace if the wood becomes too worn or chewed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya T.", rating: 5, comment: "My lovebird loves this perch. It's a great addition to his cage.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_71.jpg"] },
      { reviewer_name: "Ashish G.", rating: 4.5, comment: "Good quality, and it's easy to attach. My bird seems to prefer it over the plastic ones.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Sonia B.", rating: 5, comment: "A simple and effective product. Highly recommended.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_72.jpg"] }
    ],
  },
  {
    id: "PID000096",
    short_name: "Pedigree Chicken & Liver Pouch",
    short_description: "Wet dog food in a savory gravy, with real chicken and liver chunks.",
    original_price: 90,
    discountPercent: 8,
    images: ["/images/dog/food/96a.png", "/images/dog/food/96b.png"],
    brand: "Pedigree",
    weight: { value: 0.13, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 300,
    rating: 4.7,
    reviews: 180,
    detailed_description: `
      <h3>A Delicious Meal for Your Best Friend</h3>
      <p>Pedigree Chicken & Liver Pouch is a tasty wet food that can be served on its own or mixed with dry kibble. The real meat chunks in a savory gravy make it irresistible to dogs, and the high moisture content helps with hydration. It's a great way to add variety to your dog's diet.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Highly palatable and easy to digest.</li>
        <li>Provides essential nutrients for a healthy diet.</li>
        <li>Made with real meat for a delicious taste.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Refer to the package for a detailed feeding guide. Can be served as a treat or a meal topper.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Preeti V.", rating: 5, comment: "My dog is super picky, but he loves this! A great way to get him to eat his dry food.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_73.jpg"] },
      { reviewer_name: "Ritesh P.", rating: 4.5, comment: "Good quality, and my dog seems to enjoy it. The price is reasonable too.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Swati M.", rating: 5, comment: "My dog's favorite treat. He can't get enough of it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_74.jpg"] }
    ],
  },
  {
    id: "PID000097",
    short_name: "Blue Buffalo Wilderness Chicken Dry Cat Food",
    short_description: "Grain-free, high-protein dry food with real chicken for cats.",
    original_price: 2200,
    discountPercent: 15,
    images: ["/images/cat/food/97a.png", "/images/cat/food/97b.png"],
    brand: "Blue Buffalo",
    weight: { value: 2.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 75,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>A Wildly Delicious and Healthy Meal</h3>
      <p>Blue Buffalo Wilderness is inspired by the diet of wild cats. It's a high-protein, grain-free formula with real chicken as the first ingredient. The food is packed with LifeSource Bits, a blend of antioxidants, vitamins, and minerals to support a healthy immune system and overall wellness. It's the perfect choice for an active cat.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Grain-free for sensitive stomachs.</li>
        <li>High protein to support lean muscle mass.</li>
        <li>Contains essential nutrients for a strong immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, chicken meal, tapioca starch, potatoes, dried eggs, and pea protein.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arjun B.", rating: 5, comment: "My cat's coat is so shiny now. This is the best cat food I've ever bought.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_75.jpg"] },
      { reviewer_name: "Neha V.", rating: 4.5, comment: "My cat loves it, but it's a bit on the expensive side.", date: "2024-09-03T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "My vet recommended this brand. My cat's health has improved since the switch.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_76.jpg"] }
    ],
  },
  {
    id: "PID000098",
    short_name: "Tetra Goldfish Flakes",
    short_description: "Nutritionally complete flake food for all types of goldfish.",
    original_price: 180,
    discountPercent: 8,
    images: ["/images/fish/food/98a.png", "/images/fish/food/98b.png"],
    brand: "Tetra",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 12.0, width: 7.0, height: 3.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 220,
    rating: 4.8,
    reviews: 280,
    detailed_description: `
      <h3>The Perfect Diet for Your Goldfish</h3>
      <p>Tetra Goldfish Flakes are a scientifically formulated food that provides a complete and balanced diet for your goldfish. The flakes are designed to be easily digestible, helping to keep your aquarium water clean and clear. The formula is rich in Vitamin C to support a strong immune system and promote vibrant colors.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Promotes vibrant colors and active swimming.</li>
        <li>Easily digestible to reduce waste and water pollution.</li>
        <li>Enriched with Vitamin C to support a healthy immune system.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed 2-3 times daily, only what your fish can consume in 3 minutes. Avoid overfeeding.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit V.", rating: 5, comment: "My goldfish love this food. They look so healthy and their colors are so bright.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_77.jpg"] },
      { reviewer_name: "Nikhil K.", rating: 4.5, comment: "Good quality, and my goldfish go crazy for it.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Shreya S.", rating: 5, comment: "A staple in my aquarium. Great value for money.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_78.jpg"] }
    ],
  },
  {
    id: "PID000099",
    short_name: "Captain Zack Barking Up The Tea Tree Shampoo",
    short_description: "All-natural shampoo for dogs with tea tree oil, soothes irritated skin.",
    original_price: 499,
    discountPercent: 10,
    images: ["/images/dog/grooming/99a.png", "/images/dog/grooming/99b.png"],
    brand: "Captain Zack",
    weight: { value: 0.4, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 110,
    rating: 4.8,
    reviews: 85,
    detailed_description: `
      <h3>A Soothing Bath for Your Pet</h3>
      <p>Captain Zack Barking Up The Tea Tree Shampoo is a gentle and effective way to clean your dog's coat while soothing irritated skin. The tea tree oil helps to calm inflammation and provide relief from itching. This pH-balanced formula is free from harsh chemicals and is safe for all dog breeds.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made with natural ingredients.</li>
        <li>Soothing and anti-inflammatory.</li>
        <li>pH-balanced and tear-free.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet the coat, lather the shampoo, and rinse thoroughly. Avoid contact with eyes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Divya L.", rating: 5, comment: "This shampoo is amazing. It calmed my dog's skin and left his coat so soft.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_79.jpg"] },
      { reviewer_name: "Vikas M.", rating: 4.5, comment: "Good, but the scent is a bit strong. The results are worth it though.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Swati R.", rating: 5, comment: "My dog is less itchy now. A great product for sensitive skin.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_80.jpg"] }
    ],
  },
  {
    id: "PID000100",
    short_name: "Drools Vet Pro Skin & Coat",
    short_description: "Dietary supplement for dogs and cats, promotes a healthy skin and shiny coat.",
    original_price: 399,
    discountPercent: 4,
    images: ["/images/dog/health/100a.png", "/images/dog/health/100b.png"],
    brand: "Drools",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.6,
    reviews: 75,
    detailed_description: `
      <h3>Nourishment from the Inside Out</h3>
      <p>Drools Vet Pro Skin & Coat is a nutritional supplement that helps improve the health of your pet's skin and coat. It is enriched with Omega-3 and Omega-6 fatty acids, along with essential vitamins and minerals, to reduce shedding, soothe dry skin, and make the coat lustrous and healthy. It's suitable for both dogs and cats.</p>
      <h4>How to use:</h4>
      <ul>
        <li>Administer the prescribed dosage with your pet's food.</li>
        <li>Follow the dosage chart on the package for your pet's weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Omega-3 and Omega-6 fatty acids, Zinc, Vitamin E, and Biotin.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul G.", rating: 5, comment: "My dog's coat is so much softer and shinier now. Great product!", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_81.jpg"] },
      { reviewer_name: "Anjali P.", rating: 4.5, comment: "Saw a noticeable difference in shedding after a few weeks of use.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Prakash T.", rating: 5, comment: "Highly recommended for pets with dull coats. It works wonders.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_82.jpg"] }
    ],
  },
  {
    id: "PID000101",
    short_name: "Pedigree Chicken & Milk Gravy",
    short_description: "Wet dog food in a gravy, perfect for puppies.",
    original_price: 85,
    discountPercent: 5,
    images: ["/images/dog/food/101a.png", "/images/dog/food/101b.png"],
    brand: "Pedigree",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 350,
    rating: 4.6,
    reviews: 210,
    detailed_description: `
      <h3>A Tasty Treat for Your Growing Pup</h3>
      <p>Pedigree Chicken & Milk Gravy is a delicious wet food for puppies. The soft texture and savory gravy make it easy for them to eat, and it can be mixed with dry kibble to add extra flavor and moisture. It provides the essential nutrients and hydration your puppy needs for healthy growth.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Easy to chew and digest.</li>
        <li>Helps support hydration.</li>
        <li>Made with real chicken for a taste puppies love.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Can be served as a standalone meal or mixed with dry kibble for a complete and balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Manoj D.", rating: 5, comment: "My puppy loves this. It's a great way to introduce him to solid food.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_83.jpg"] },
      { reviewer_name: "Sonia G.", rating: 4.5, comment: "Good quality, and my puppy finishes his bowl every time.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Vivek S.", rating: 5, comment: "My puppy is so healthy and active since I started feeding him this.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_84.jpg"] }
    ],
  },
  {
    id: "PID000102",
    short_name: "KONG Cat Wubba",
    short_description: "Plush and feather toy for cats, with a crinkle sound to entice play.",
    original_price: 400,
    discountPercent: 10,
    images: ["/images/cat/toys/102a.png", "/images/cat/toys/102b.png"],
    brand: "KONG",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>A Fun and Engaging Playtime for Your Cat</h3>
      <p>The KONG Cat Wubba is an interactive toy that is perfect for batting, pouncing, and chasing. The plush body is easy for your cat to grab, and the crinkle sound inside entices them to play. The feathers at the top add an extra element of fun, stimulating your cat's natural hunting instincts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft plush material for a gentle feel.</li>
        <li>Crinkle sound to keep your cat engaged.</li>
        <li>Feathers for a fun, hunting-like experience.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Supervise your pet during play. Not a chew toy. Replace if damaged.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat is obsessed with this toy! It's his new favorite.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_85.jpg"] },
      { reviewer_name: "Ajay G.", rating: 4.5, comment: "Good quality, and my cat loves the crinkle sound. It's holding up well.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Deepika S.", rating: 5, comment: "My cat chases it all around the house. It's a great toy.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_86.jpg"] }
    ],
  },
  {
    id: "PID000103",
    short_name: "Dophin All Glass Aquarium",
    short_description: "Compact glass aquarium with a cover and filter system.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/fish/beds/103a.png", "/images/fish/beds/103b.png"],
    brand: "Dophin",
    weight: { value: 5.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 25.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Fishes",
    stock: 40,
    rating: 4.6,
    reviews: 65,
    detailed_description: `
      <h3>A Serene Home for Your Aquatic Friends</h3>
      <p>The Dophin All Glass Aquarium is the perfect starter kit for new fish keepers. It features a seamless, all-glass design for a clear view of your aquatic world. The kit comes complete with a top cover to prevent fish from jumping out and a reliable filter system to keep the water clean and clear.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-quality, durable glass construction.</li>
        <li>Includes a quiet and efficient filter.</li>
        <li>Sleek, modern design fits any decor.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Refer to the manual for a detailed setup guide and cleaning instructions.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman L.", rating: 5, comment: "Easy to set up and looks great. My fish seem very happy in their new home.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_43.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "The filter is a little weak for the size, but it works fine for a few small fish.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Arjun B.", rating: 5, comment: "Great value for money. Looks much more expensive than it is.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_44.jpg"] }
    ],
  },
  {
    id: "PID000104",
    short_name: "Versele-Laga Prestige Cockatiel",
    short_description: "Complete seed mixture for cockatiels and other parakeets.",
    original_price: 350,
    discountPercent: 8,
    images: ["/images/bird/food/104a.png", "/images/bird/food/104b.png"],
    brand: "Versele Laga",
    weight: { value: 0.65, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 70,
    rating: 4.6,
    reviews: 120,
    detailed_description: `
      <h3>A Balanced Meal for a Vibrant Life</h3>
      <p>Versele-Laga Prestige Cockatiel is a delicious and nutritious seed blend that provides all the essential nutrients for your bird. The mix of high-quality seeds, grains, and added vitamins ensures your cockatiel maintains a healthy weight and has a vibrant, glossy plumage. It's a taste they'll love and a nutrition you can trust.</p>
      <h4>Ingredients:</h4>
      <ul>
        <li>Canary seed, millet, sunflower seeds, safflower seed, and hempseed.</li>
        <li>Enriched with vitamins A, D3, and E.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Provide fresh seed daily. Monitor your bird's consumption to ensure they are eating a balanced diet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul K.", rating: 5, comment: "My cockatiel loves this food. She's so much more energetic now.", date: "2024-09-06T10:00:00Z", images: ["/user_uploads/review_63.jpg"] },
      { reviewer_name: "Neha G.", rating: 4, comment: "It's good, but my bird tends to leave some of the seeds.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "A staple for my cockatiels. The quality is always consistent.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_64.jpg"] }
    ],
  },
  {
    id: "PID000105",
    short_name: "Royal Canin Fit 32 Adult Cat Food",
    short_description: "Dry food for moderately active adult cats, helps maintain an ideal weight.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/food/105a.png", "/images/cat/food/105b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 200,
    detailed_description: `
      <h3>Precise Nutrition for Optimal Health</h3>
      <p>Royal Canin Fit 32 is designed for adult cats with a moderate activity level. It contains a precise balance of nutrients to support your cat's overall health and well-being. The formula helps maintain an ideal weight and supports urinary tract health, while the delicious taste ensures high palatability.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Balanced nutrition to maintain a healthy weight.</li>
        <li>Supports urinary tract health with a balanced mineral content.</li>
        <li>High-quality, easily digestible proteins.</li>
      </ul>
      <p><strong>Feeding Guide:</strong> <br>Feed daily according to your cat's weight and activity level. Always provide fresh water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat's weight is perfect now. She loves this food and seems much more energetic.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_65.jpg"] },
      { reviewer_name: "Rajiv S.", rating: 4.5, comment: "Good quality, and my cat enjoys the taste. A bit expensive, but worth it.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_67.jpg"] }
	],
  },
  {
    id: "PID000106",
    short_name: "Blue Buffalo Life Protection Formula",
    short_description: "Dry dog food with deboned chicken and whole grains for adult dogs.",
    original_price: 3800,
    discountPercent: 15,
    images: ["/images/dog/food/106a.png", "/images/dog/food/106b.png"],
    brand: "Blue Buffalo",
    weight: { value: 6.8, unit: "kg" },
    package_dimensions: { length: 45.0, width: 30.0, height: 12.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 75,
    rating: 4.8,
    reviews: 310,
    detailed_description: `
      <h3>Premium Nutrition for a Healthy Life</h3>
      <p>Blue Buffalo's Life Protection Formula is made with the finest natural ingredients, fortified with vitamins and minerals. The recipe starts with real deboned chicken and includes wholesome grains, garden veggies, and fruit. It is specially formulated to support the health and well-being of adult dogs.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>High-quality protein for strong muscles.</li>
        <li>Antioxidant-rich for a healthy immune system.</li>
        <li>No artificial flavors or preservatives.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned Chicken, Brown Rice, Barley, Oatmeal, Chicken Meal, Peas, Flaxseed, and natural flavors.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Raj S.", rating: 5, comment: "My dog's coat is shinier and he has more energy. This food is amazing!", date: "2024-08-20T10:00:00Z", images: ["/user_uploads/review_106.jpg"] },
      { reviewer_name: "Anita V.", rating: 4.5, comment: "My dog loves the taste, and I love that it's made with natural ingredients.", date: "2024-08-25T10:00:00Z", images: [] },
      { reviewer_name: "Kunal G.", rating: 5, comment: "Great for my dog's sensitive stomach. No issues at all.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_107.jpg"] }
    ],
  },
  {
    id: "PID000107",
    short_name: "Iams Proactive Health Kitten",
    short_description: "Dry food for kittens with prebiotics and DHA for growth.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/cat/food/107a.png", "/images/cat/food/107b.png"],
    brand: "Iams",
    weight: { value: 1.0, unit: "kg" },
    package_dimensions: { length: 22.0, width: 15.0, height: 7.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 120,
    rating: 4.7,
    reviews: 185,
    detailed_description: `
      <h3>Nourishment for Growing Kittens</h3>
      <p>Iams Proactive Health Kitten Food is specially formulated to meet the unique needs of growing kittens. With real chicken as the first ingredient, it provides essential protein for muscle development. It's enriched with DHA for cognitive development and prebiotics for healthy digestion.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Contains essential nutrients for healthy growth.</li>
        <li>DHA supports brain and vision development.</li>
        <li>Antioxidants for a strong immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, Chicken By-Product Meal, Corn Grits, Ground Whole Grain Corn, Dried Beet Pulp, Fish Oil, Brewers Dried Yeast, and vitamins.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja D.", rating: 5, comment: "My kittens love this! They're growing so fast and their coats are so soft.", date: "2024-08-28T10:00:00Z", images: ["/user_uploads/review_108.jpg"] },
      { reviewer_name: "Sanjay K.", rating: 4.5, comment: "Good value and my kittens have no digestion issues with it.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Nisha R.", rating: 5, comment: "Perfect for my kitten's first dry food. She transitioned to it easily.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_109.jpg"] }
    ],
  },
  {
    id: "PID000108",
    short_name: "Purina Cat Chow Indoor",
    short_description: "A complete and balanced meal for adult indoor cats.",
    original_price: 1500,
    discountPercent: 15,
    images: ["/images/cat/food/108a.png", "/images/cat/food/108b.png"],
    brand: "Purina",
    weight: { value: 3.1, unit: "kg" },
    package_dimensions: { length: 30.0, width: 25.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 90,
    rating: 4.6,
    reviews: 215,
    detailed_description: `
      <h3>Tailored Nutrition for the Indoor Lifestyle</h3>
      <p>Purina Cat Chow Indoor is formulated to meet the specific nutritional needs of cats who live a primarily indoor lifestyle. It contains a natural fiber blend to help control hairballs and a low-calorie formula to help maintain a healthy weight. The delicious taste and crunchy texture are a hit with felines.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Natural fiber blend to help manage hairballs.</li>
        <li>Made with real chicken for a great taste.</li>
        <li>Essential vitamins and minerals for a balanced diet.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken By-Product Meal, Corn Gluten Meal, Ground Whole Grain Corn, Rice, Soy Flour, Animal Fat, and Wheat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Akshay B.", rating: 5, comment: "My cat has fewer hairballs now and loves this food. Highly recommend!", date: "2024-08-27T10:00:00Z", images: ["/user_uploads/review_110.jpg"] },
      { reviewer_name: "Swati P.", rating: 4.5, comment: "Good product, and the bag is resealable which is a nice touch.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Rohit L.", rating: 4, comment: "My cat is a bit picky, but he eventually started eating this. Good value.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_111.jpg"] }
    ],
  },
  {
    id: "PID000109",
    short_name: "Acana Pacifica Adult Cat Food",
    short_description: "Biologically appropriate, grain-free food with fresh fish ingredients.",
    original_price: 2800,
    discountPercent: 10,
    images: ["/images/cat/food/109a.png", "/images/cat/food/109b.png"],
    brand: "Acana",
    weight: { value: 1.8, unit: "kg" },
    package_dimensions: { length: 26.0, width: 20.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 65,
    rating: 4.9,
    reviews: 145,
    detailed_description: `
      <h3>Inspired by a Natural Diet</h3>
      <p>Acana's Pacifica formula is a grain-free, protein-rich food that reflects the natural diet of cats. It's loaded with fresh wild-caught fish from the Pacific, including herring, mackerel, and hake. This recipe supports lean muscle mass and provides a delicious taste cats instinctively crave. It's free from artificial ingredients and preservatives.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made with fresh, regional fish ingredients.</li>
        <li>Biologically appropriate ratio of meat to vegetables.</li>
        <li>Rich in Omega-3 fatty acids for a healthy coat.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Fresh whole herring, deboned hake, mackerel, fresh flounder, and a blend of chickpeas, lentils, and fresh greens.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Karan N.", rating: 5, comment: "My cats have never been healthier. Their coats are unbelievably soft.", date: "2024-08-25T10:00:00Z", images: ["/user_uploads/review_112.jpg"] },
      { reviewer_name: "Smita D.", rating: 4.5, comment: "A little expensive, but the quality is worth it. My cats love the flavor.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Abhishek S.", rating: 5, comment: "Great for my cat's sensitive stomach. He hasn't had any issues since switching to this.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_113.jpg"] }
    ],
  },
  {
    id: "PID000110",
    short_name: "Kong Catnip Squirrel Toy",
    short_description: "A plush, catnip-filled squirrel toy for interactive play.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/cat/toys/110a.png", "/images/cat/toys/110b.png"],
    brand: "KONG",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 250,
    rating: 4.4,
    reviews: 98,
    detailed_description: `
      <h3>Irresistible Playtime with KONG</h3>
      <p>The KONG Catnip Squirrel Toy is designed to spark your cat's playful hunting instincts. The soft plush material and crinkle sounds combined with premium North American catnip create a toy that your cat won't be able to resist. It's perfect for batting, chasing, and cuddling.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Filled with high-quality, non-toxic catnip.</li>
        <li>Crinkle sound to attract your cat's attention.</li>
        <li>Soft plush texture for cozy playtime.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Spot clean with a damp cloth if needed. Not machine washable.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Manoj P.", rating: 5, comment: "My cat went crazy for this! She carries it around everywhere.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_114.jpg"] },
      { reviewer_name: "Ria S.", rating: 4, comment: "Good toy, but the catnip scent wore off a bit quickly.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Vivek G.", rating: 5, comment: "My kitten loves batting this around. It keeps him entertained for hours.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_115.jpg"] }
    ],
  },
  {
    id: "PID000111",
    short_name: "Frontline Plus Flea & Tick",
    short_description: "Topical treatment for fleas, ticks, and chewing lice in cats.",
    original_price: 850,
    discountPercent: 0,
    images: ["/images/cat/health/111a.png"],
    brand: "Frontline",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 120,
    detailed_description: `
      <h3>Complete Protection for Your Cat</h3>
      <p>Frontline Plus is a fast-acting, long-lasting topical solution that provides complete protection against fleas, ticks, and chewing lice. It kills adult fleas and their eggs and larvae, breaking the flea life cycle and preventing re-infestation. A single application provides a full month of effective protection.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Kills fleas and ticks on contact.</li>
        <li>Prevents flea eggs and larvae from developing.</li>
        <li>Waterproof after 24 hours.</li>
      </ul>
      <p><strong>Application:</strong> <br>Apply the contents of the applicator directly to the skin on your cat's back, at the base of the neck between the shoulder blades.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman T.", rating: 5, comment: "Worked like a charm! My cat was free of fleas within a day.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_116.jpg"] },
      { reviewer_name: "Sunita G.", rating: 4, comment: "It's effective, but I wish the price was a bit lower.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Priya S.", rating: 5, comment: "A trusted brand that always works. My cat is safe from parasites.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_117.jpg"] }
    ],
  },
  {
    id: "PID000112",
    short_name: "Bio-Groom Natural Oatmeal Cat Shampoo",
    short_description: "Gentle, soap-free shampoo for cats with sensitive or irritated skin.",
    original_price: 680,
    discountPercent: 10,
    images: ["/images/cat/grooming/112a.png", "/images/cat/grooming/112b.png"],
    brand: "Bio-Groom",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 95,
    rating: 4.6,
    reviews: 65,
    detailed_description: `
      <h3>Soothing Comfort for Your Cat's Coat</h3>
      <p>Bio-Groom's Natural Oatmeal Cat Shampoo is a calming, soap-free formula that cleanses without causing irritation. Enriched with colloidal oatmeal, it helps soothe dry, itchy, and sensitive skin, leaving your cat's coat clean, soft, and healthy. It has a pleasant, mild scent that won't overwhelm your cat.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soap-free and tear-free formula.</li>
        <li>Colloidal oatmeal to soothe irritated skin.</li>
        <li>Mild formula is safe for kittens.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet coat, apply shampoo, and massage gently. Rinse thoroughly and towel dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Meera J.", rating: 5, comment: "This shampoo is a lifesaver for my cat's sensitive skin. No more scratching after baths.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_118.jpg"] },
      { reviewer_name: "Saurabh P.", rating: 4, comment: "Good product, but the scent is a bit too subtle for my liking.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat's coat is so soft after using this. A great product.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_119.jpg"] }
    ],
  },
  {
    id: "PID000113",
    short_name: "Vetafarm Cavy Origins Guinea Pig Food",
    short_description: "A complete, high-fiber diet for guinea pigs with stabilized Vitamin C.",
    original_price: 450,
    discountPercent: 5,
    images: ["/images/small_animal/food/113a.png"],
    brand: "Vetafarm",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Small Animals",
    stock: 80,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>Essential Nutrition for Your Guinea Pig</h3>
      <p>Vetafarm Cavy Origins is a premium, complete diet formulated to meet all the nutritional needs of your guinea pig. It contains a high level of fiber for healthy digestion and stabilized Vitamin C, which is essential for guinea pigs and helps support their immune system. The pellets are made from high-quality lucerne and oaten hay.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>High-fiber formula for digestive health.</li>
        <li>Stabilized Vitamin C to prevent deficiency.</li>
        <li>No added sugars or artificial flavors.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed daily in conjunction with unlimited access to fresh hay and water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavita R.", rating: 5, comment: "My guinea pigs love this food. They seem so much healthier now.", date: "2024-08-30T10:00:00Z", images: ["/user_uploads/review_120.jpg"] },
      { reviewer_name: "Arun S.", rating: 4.5, comment: "The best pellets I've found so far. The guinea pigs eat them all without waste.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Nidhi G.", rating: 5, comment: "Excellent food for my little ones. The price is also very reasonable.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_121.jpg"] }
    ],
  },
  {
    id: "PID000114",
    short_name: "Trixie Wooden Hamster House",
    short_description: "Natural wooden house for hamsters to sleep, hide, and climb.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/small_animal/beds/114a.png", "/images/small_animal/beds/114b.png"],
    brand: "Trixie",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 10.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Small Animals",
    stock: 150,
    rating: 4.5,
    reviews: 55,
    detailed_description: `
      <h3>A Safe Retreat for Your Small Friend</h3>
      <p>The Trixie Wooden Hamster House provides a safe and cozy space for your hamster to hide and feel secure. Made from untreated, natural wood, it's completely safe for your pet to chew on. The multiple openings and roof platform offer different levels of fun and exploration.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from 100% natural, untreated wood.</li>
        <li>Provides a secure hiding spot.</li>
        <li>Multiple entrances for easy access.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Do not soak.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priyanka S.", rating: 5, comment: "My hamster loves this! He sleeps in it all the time.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_122.jpg"] },
      { reviewer_name: "Vinay R.", rating: 4, comment: "A little smaller than I expected, but my hamster fits perfectly.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Sonia D.", rating: 4.5, comment: "Good quality wood, and it's a great addition to the cage.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_123.jpg"] }
    ],
  },
  {
    id: "PID000115",
    short_name: "Kong Wubba Mouse Cat Toy",
    short_description: "Plush, catnip-filled mouse toy with long tails for batting and tossing.",
    original_price: 420,
    discountPercent: 10,
    images: ["/images/cat/toys/115a.png", "/images/cat/toys/115b.png"],
    brand: "KONG",
    weight: { value: 0.06, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 190,
    rating: 4.6,
    reviews: 110,
    detailed_description: `
      <h3>Interactive Fun for Your Feline</h3>
      <p>The KONG Wubba Mouse is a great way to engage your cat in interactive play. The plush body is filled with potent catnip, and the long, floppy tails are perfect for your cat to grab, bat, and toss. Its erratic movement will keep your cat entertained for hours, satisfying their natural hunting instincts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable plush material for long-lasting play.</li>
        <li>Generous amount of KONG premium North American catnip.</li>
        <li>Long tails for batting and pouncing.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Spot clean with a damp cloth. Not machine washable.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arjun B.", rating: 5, comment: "My cat is obsessed with this toy. She loves to carry it around by the tails.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_124.jpg"] },
      { reviewer_name: "Meena K.", rating: 4, comment: "It's a good toy, but my cat chewed off one of the tails pretty quickly.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Rahul G.", rating: 5, comment: "Great for interactive play. My cat and I have so much fun with this.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_125.jpg"] }
    ],
  },
  {
    id: "PID000116",
    short_name: "Trixie Cat Scratching Post",
    short_description: "A durable scratching post to protect furniture and maintain nail health.",
    original_price: 1500,
    discountPercent: 15,
    images: ["/images/cat/toys/116a.png", "/images/cat/toys/116b.png"],
    brand: "Trixie",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 35.0, width: 35.0, height: 45.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 85,
    rating: 4.7,
    reviews: 130,
    detailed_description: `
      <h3>Satisfy Your Cat's Scratching Instinct</h3>
      <p>The Trixie Cat Scratching Post is a must-have for any cat owner. Covered in durable sisal rope, it provides the perfect outlet for your cat's natural scratching urges, saving your furniture from damage. The sturdy base ensures it remains stable during even the most vigorous scratching sessions.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable sisal rope for long-lasting use.</li>
        <li>Sturdy base to prevent tipping.</li>
        <li>Simple, elegant design fits into any home decor.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Check regularly for wear and tear.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali M.", rating: 5, comment: "My cat immediately started using this instead of my sofa. A great investment!", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_126.jpg"] },
      { reviewer_name: "Kunal S.", rating: 4, comment: "Good quality, but a bit smaller than I thought it would be.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Sneha D.", rating: 5, comment: "Very stable and the sisal rope is holding up well. Happy cat, happy owner.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_127.jpg"] }
    ],
  },
  {
    id: "PID000117",
    short_name: "Me-O Cat Food Tuna Flavour",
    short_description: "A balanced dry food with a delicious tuna flavor for adult cats.",
    original_price: 350,
    discountPercent: 5,
    images: ["/images/cat/food/117a.png", "/images/cat/food/117b.png"],
    brand: "Me-O",
    weight: { value: 0.45, unit: "kg" },
    package_dimensions: { length: 20.0, width: 12.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 210,
    rating: 4.2,
    reviews: 88,
    detailed_description: `
      <h3>A Taste Cats Can't Resist</h3>
      <p>Me-O Cat Food provides a complete and balanced meal for your feline companion. The delicious tuna flavor is highly palatable, and the formula is packed with essential nutrients to support your cat's overall health, including their vision and immune system. It also helps to prevent urinary tract diseases with its balanced mineral content.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Made with real tuna for a great taste.</li>
        <li>Helps prevent urinary tract disease.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Corn, Rice, Tuna Meal, Poultry By-Product Meal, Soy Bean Meal, Fish Oil, and a mix of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Gauri P.", rating: 5, comment: "My cat is a tuna fiend, and she loves this food. She cleans her bowl every time!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_128.jpg"] },
      { reviewer_name: "Ankit L.", rating: 3.5, comment: "It's okay, but my cat prefers some other brands. Good for the price though.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Shruti K.", rating: 4, comment: "Good everyday food. My cat eats it without any fuss.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_129.jpg"] }
    ],
  },
  {
    id: "PID000118",
    short_name: "NatureNest Wooden Bird Ladder",
    short_description: "A flexible and colorful ladder for birds to climb and perch on.",
    original_price: 280,
    discountPercent: 10,
    images: ["/images/bird/toys/118a.png", "/images/bird/toys/118b.png"],
    brand: "NatureNest",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 30.0, width: 8.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Birds",
    stock: 180,
    rating: 4.6,
    reviews: 58,
    detailed_description: `
      <h3>Add Fun and Excitement to Your Bird's Cage</h3>
      <p>The NatureNest Wooden Bird Ladder is a great way to add more climbing space and mental stimulation to your bird's habitat. Made from safe, colored wood, it's flexible and can be bent into different shapes to fit your cage's layout. It's a great tool for promoting physical activity and preventing boredom.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from bird-safe, non-toxic materials.</li>
        <li>Flexible design for a variety of setups.</li>
        <li>Encourages climbing and physical activity.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Simply attach the hooks to the bars of your bird's cage. Bend to desired shape.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Preeti R.", rating: 5, comment: "My budgie loves this ladder! He climbs it all day long.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_130.jpg"] },
      { reviewer_name: "Rahul S.", rating: 4, comment: "Good product, but the colors faded after a while.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Neha V.", rating: 4.5, comment: "It was easy to install and my bird took to it right away.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_131.jpg"] }
    ],
  },
  {
    id: "PID000119",
    short_name: "Groom Professional Argan Oil Shampoo",
    short_description: "Luxury shampoo with argan oil for a soft, shiny coat.",
    original_price: 1200,
    discountPercent: 15,
    images: ["/images/dog/grooming/119a.png", "/images/dog/grooming/119b.png"],
    brand: "Groom Professional",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 22.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 70,
    rating: 4.8,
    reviews: 95,
    detailed_description: `
      <h3>Salon-Quality Grooming at Home</h3>
      <p>Groom Professional Argan Oil Shampoo is a luxurious formula designed to leave your dog's coat looking and feeling its best. Enriched with argan oil, it deeply nourishes the coat, promoting softness and a brilliant shine. The gentle formula is suitable for all breeds and helps to detangle and manage unruly fur.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Infused with pure Argan Oil for shine.</li>
        <li>Helps to detangle and condition the coat.</li>
        <li>Long-lasting, pleasant scent.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Dilute 1 part shampoo with 10 parts water. Massage into coat and rinse thoroughly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Simran K.", rating: 5, comment: "My dog has never looked better! His coat is so soft and smells incredible.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_132.jpg"] },
      { reviewer_name: "Rahul S.", rating: 4.5, comment: "It's a bit pricey, but the results are worth it. Great shampoo.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Priya L.", rating: 5, comment: "Lathers well and rinses clean. The scent is beautiful and lasts for days.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_133.jpg"] }
    ],
  },
  {
    id: "PID000120",
    short_name: "Savic Cat Litter Tray",
    short_description: "A spacious, open litter tray with a raised back to prevent spills.",
    original_price: 850,
    discountPercent: 5,
    images: ["/images/cat/beds/120a.png"],
    brand: "Savic",
    weight: { value: 0.7, unit: "kg" },
    package_dimensions: { length: 50.0, width: 40.0, height: 15.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Cats",
    stock: 120,
    rating: 4.3,
    reviews: 75,
    detailed_description: `
      <h3>Clean & Convenient Litter Management</h3>
      <p>The Savic Cat Litter Tray is designed for cleanliness and ease of use. The high back wall prevents litter from being kicked out, keeping your floors clean. The open design makes it easy for your cat to enter and exit, and the durable plastic is simple to clean and maintain.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Raised back wall to prevent litter scatter.</li>
        <li>Durable, easy-to-clean plastic.</li>
        <li>Spacious design for cat comfort.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Empty litter and wipe clean with a pet-safe disinfectant on a regular basis.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohan V.", rating: 5, comment: "This tray is perfect. No more litter on my floor!", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_134.jpg"] },
      { reviewer_name: "Meenakshi K.", rating: 4, comment: "It's a good size, but I wish it came with a scoop.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 4.5, comment: "Very sturdy and easy to clean. A solid product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_135.jpg"] }
    ],
  },
  {
    id: "PID000121",
    short_name: "Pond Master Water Clarifier",
    short_description: "Liquid clarifier to clear cloudy pond and aquarium water.",
    original_price: 380,
    discountPercent: 5,
    images: ["/images/fish/health/121a.png"],
    brand: "Pond Master",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 15.0, width: 6.0, height: 6.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Fishes",
    stock: 110,
    rating: 4.5,
    reviews: 50,
    detailed_description: `
      <h3>Crystal Clear Water Made Easy</h3>
      <p>Pond Master Water Clarifier is a fast-acting solution for cloudy and murky aquarium or pond water. It works by clumping microscopic particles together, which are then easily removed by your filter. This formula is safe for all fish, plants, and other aquatic life, restoring the clarity and beauty of your water.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Rapidly clears cloudy water.</li>
        <li>Safe for fish and aquatic plants.</li>
        <li>Helps maintain a healthy aquatic environment.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Follow the dosage instructions on the bottle. Add directly to the water in the filter area.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rajiv S.", rating: 5, comment: "My pond was so murky, and this cleared it up overnight. Absolutely amazing!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_136.jpg"] },
      { reviewer_name: "Anil D.", rating: 4, comment: "It works well, but I had to use a bit more than the instructions said.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Kavita R.", rating: 4.5, comment: "My aquarium has never looked so clear. I'm very happy with this product.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_137.jpg"] }
    ],
  },
  {
    id: "PID000122",
    short_name: "Liveonce Bird Cage",
    short_description: "A spacious, multi-level cage with perches and food bowls for birds.",
    original_price: 2500,
    discountPercent: 20,
    images: ["/images/bird/beds/122a.png", "/images/bird/beds/122b.png"],
    brand: "Liveonce",
    weight: { value: 3.5, unit: "kg" },
    package_dimensions: { length: 50.0, width: 40.0, height: 60.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Birds",
    stock: 35,
    rating: 4.7,
    reviews: 70,
    detailed_description: `
      <h3>A Comfortable and Secure Home for Your Bird</h3>
      <p>The Liveonce Bird Cage provides a safe and comfortable environment for your feathered companion. The spacious design allows for plenty of room to fly and play, while the included perches and food bowls make it a complete habitat. The pull-out tray at the bottom makes cleaning a breeze.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Multiple perches and food bowls included.</li>
        <li>Pull-out tray for easy cleaning.</li>
        <li>Durable, non-toxic wire construction.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Easy to assemble with included instructions. No tools required.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sanjay K.", rating: 5, comment: "This cage is perfect for my lovebirds. It's spacious and easy to clean.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_138.jpg"] },
      { reviewer_name: "Aditya S.", rating: 4, comment: "The quality is good, but the assembly instructions were a bit confusing.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "A great home for my budgie. He seems very happy with his new space.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_139.jpg"] }
    ],
  },
  {
    id: "PID000123",
    short_name: "Hikari Micro Pellets",
    short_description: "Small-sized pellets for small and medium-sized tropical fish.",
    original_price: 280,
    discountPercent: 5,
    images: ["/images/fish/food/123a.png"],
    brand: "Hikari",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 150,
    rating: 4.8,
    reviews: 90,
    detailed_description: `
      <h3>Small Pellets, Big Nutrition</h3>
      <p>Hikari Micro Pellets are specially formulated to provide a balanced and nutritious diet for a variety of small and medium tropical fish. The pellets sink slowly, allowing fish at all levels of the aquarium to feed. The highly digestible formula reduces waste, helping to keep your water clean and clear.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Slow-sinking pellets for all fish.</li>
        <li>High-quality protein for healthy growth.</li>
        <li>Will not cloud aquarium water.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed 2-3 times daily, in amounts your fish can consume in a few minutes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "My neon tetras and guppies love these pellets. The perfect size for them.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_140.jpg"] },
      { reviewer_name: "Neha G.", rating: 4, comment: "Good food, but the container is a bit hard to open.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Rajesh V.", rating: 5, comment: "My fish are thriving on this food. Their colors are so vibrant.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_141.jpg"] }
    ],
  },
  {
    id: "PID000124",
    short_name: "AquaByNature Aquarium Siphon",
    short_description: "A manual siphon for easy and quick aquarium gravel cleaning and water changes.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/fish/accessories/124a.png", "/images/fish/accessories/124b.png"],
    brand: "AquaByNature",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 30.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 105,
    rating: 4.6,
    reviews: 60,
    detailed_description: `
      <h3>Essential Tool for Aquarium Maintenance</h3>
      <p>The AquaByNature Aquarium Siphon makes routine water changes and gravel cleaning simple and mess-free. The manual pump creates a siphon, allowing you to easily remove old water and debris from the bottom of your tank. It's a fundamental tool for keeping your fish's habitat clean and healthy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Easy-to-use manual pump action.</li>
        <li>Effectively removes debris from gravel.</li>
        <li>Durable plastic construction for long-term use.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Submerge the siphon tube in water, use the pump to start the flow, and direct the nozzle to clean the gravel. Discard old water and add fresh, treated water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Karan P.", rating: 5, comment: "This siphon is a game-changer! My water changes are so much faster now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_142.jpg"] },
      { reviewer_name: "Shreya S.", rating: 4.5, comment: "Works very well, and the suction is strong.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Arjun V.", rating: 5, comment: "Simple and effective. Every fish owner should have one of these.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_143.jpg"] }
    ],
  },
  {
    id: "PID000125",
    short_name: "Purina Friskies Paté Chicken",
    short_description: "A complete and balanced wet food with a delicious chicken paté texture.",
    original_price: 85,
    discountPercent: 5,
    images: ["/images/cat/food/125a.png", "/images/cat/food/125b.png"],
    brand: "Purina",
    weight: { value: 0.156, unit: "kg" },
    package_dimensions: { length: 8.0, width: 8.0, height: 4.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 250,
    rating: 4.5,
    reviews: 145,
    detailed_description: `
      <h3>A Gourmet Meal for Your Feline</h3>
      <p>Purina Friskies Paté is a savory, delectable wet food that provides 100% complete and balanced nutrition for adult cats. The smooth paté texture is easy for cats to eat and the rich chicken flavor will have them purring for more. It's a great way to add moisture to your cat's diet and keep them hydrated.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Provides essential moisture to a cat's diet.</li>
        <li>Rich, savory taste cats love.</li>
        <li>Packed with vitamins and minerals.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Meat By-Products, Water, Chicken, Fish, Rice, Artificial and Natural Flavors, Salt, and vitamins.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Gaurav R.", rating: 5, comment: "My cats go crazy for this. They always finish every last bit.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_144.jpg"] },
      { reviewer_name: "Divya S.", rating: 4, comment: "Good food, but the can is a bit messy to open.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Saurabh V.", rating: 5, comment: "My cats love the paté texture. A great way to treat them.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_145.jpg"] }
    ],
  },
  {
    id: "PID000126",
    short_name: "Royal Canin Mini Adult Dry Dog Food",
    short_description: "Small kibble for small breed dogs with a high-energy formula.",
    original_price: 1800,
    discountPercent: 10,
    images: ["/images/dog/food/126a.png", "/images/dog/food/126b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 130,
    rating: 4.9,
    reviews: 210,
    detailed_description: `
      <h3>Precisely Balanced Nutrition for Small Breeds</h3>
      <p>Royal Canin Mini Adult is a specialized formula for small breed dogs. The kibble is small and easy for them to chew, and the high-energy formula meets the intense energy needs of these active dogs. It's highly palatable and helps support a healthy weight and a beautiful coat.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Small kibble size for small jaws.</li>
        <li>High-energy content for active lifestyles.</li>
        <li>Omega 3 and 6 for healthy skin and coat.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Corn, Corn Flour, Dehydrated Poultry Protein, Animal Fats, Beet Pulp, Hydrolyzed Animal Proteins, and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya L.", rating: 5, comment: "My chihuahua loves this food! The kibble is the perfect size for her.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_146.jpg"] },
      { reviewer_name: "Anil R.", rating: 4.5, comment: "Great food, and my dog's digestion has improved significantly.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Neha V.", rating: 5, comment: "It's the only food my fussy dog will eat. Thank you Royal Canin!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_147.jpg"] }
    ],
  },
  {
    id: "PID000127",
    short_name: "Trixie Dog Nail Clippers",
    short_description: "Ergonomic and sharp nail clippers for safe and easy grooming.",
    original_price: 550,
    discountPercent: 10,
    images: ["/images/dog/grooming/127a.png", "/images/dog/grooming/127b.png"],
    brand: "Trixie",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 3.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.5,
    reviews: 75,
    detailed_description: `
      <h3>Keep Paws Healthy with Safe Clippers</h3>
      <p>The Trixie Dog Nail Clippers are designed for a safe and stress-free grooming experience. The sharp, stainless steel blades provide a clean cut without splintering the nail, and the ergonomic handle ensures a firm, comfortable grip. It's an essential tool for maintaining your dog's paw health.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Sharp stainless steel blades.</li>
        <li>Ergonomic handle for a secure grip.</li>
        <li>Safety stop to prevent over-cutting.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Clean blades after each use and store in a dry place.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Vivek S.", rating: 5, comment: "These are the best clippers I've used. They make trimming my dog's nails so much easier.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_148.jpg"] },
      { reviewer_name: "Meenakshi L.", rating: 4, comment: "Good quality, but the safety stop is a bit finicky.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Rohan D.", rating: 4.5, comment: "A solid product that gets the job done well.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_149.jpg"] }
    ],
  },
  {
    id: "PID000128",
    short_name: "Purina Pro Plan Savor",
    short_description: "Wet food with a mix of tender chunks and savory gravy for adult cats.",
    original_price: 120,
    discountPercent: 5,
    images: ["/images/cat/food/128a.png"],
    brand: "Purina",
    weight: { value: 0.085, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 220,
    rating: 4.8,
    reviews: 155,
    detailed_description: `
      <h3>A Gourmet Feast for Your Cat</h3>
      <p>Purina Pro Plan Savor is a delectable wet food that will tantalize your cat's taste buds. The recipe features tender chunks of real meat in a rich, savory gravy, providing a unique texture and flavor combination that cats adore. It's a complete and balanced meal packed with essential nutrients to support your cat's health and vitality.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Made with real meat for a delicious taste.</li>
        <li>Provides essential moisture to a cat's diet.</li>
        <li>Rich in vitamins and minerals for overall health.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Meat and Animal Derivatives, Water, Poultry, Fish, Rice, Vegetable Oil, and vitamins.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shraddha V.", rating: 5, comment: "My cats love this wet food. They get so excited when I open a can!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_150.jpg"] },
      { reviewer_name: "Ankur R.", rating: 4.5, comment: "It's a good treat for my cat. She loves the gravy.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Pratik J.", rating: 5, comment: "Great for picky eaters. My cat who normally doesn't like wet food eats this one.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_151.jpg"] }
    ],
  },
  {
    id: "PID000129",
    short_name: "Trixie Guinea Pig Playground",
    short_description: "A fun wooden playground with a ladder and ramp for small animals.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/small_animal/toys/129a.png", "/images/small_animal/toys/129b.png"],
    brand: "Trixie",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 15.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Small Animals",
    stock: 100,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>Playtime Fun for Your Small Pet</h3>
      <p>The Trixie Guinea Pig Playground is a multi-level activity center designed to provide exercise and entertainment for your small pet. Made from natural, untreated wood, it's safe for them to chew on. The ladder and ramp encourage climbing and exploring, satisfying their natural instincts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from safe, natural wood.</li>
        <li>Multi-level design for climbing and exploration.</li>
        <li>Provides mental and physical stimulation.</li>
      </ul>
      <p><strong>Installation:</strong> <br>No assembly required. Simply place in your pet's cage or playpen.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia P.", rating: 5, comment: "My guinea pigs love their new playground. It's a great way to keep them active.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_152.jpg"] },
      { reviewer_name: "Manish R.", rating: 4, comment: "Good, but the wood splinters a bit from my pets' chewing.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "My hamster enjoys this too! A great toy for small animals.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_153.jpg"] }
    ],
  },
  {
    id: "PID000130",
    short_name: "Trixie Wooden Bird Perch",
    short_description: "A natural wood perch that promotes foot health and provides a comfortable grip.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/bird/accessories/130a.png"],
    brand: "Trixie",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 25.0, width: 3.0, height: 3.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 200,
    rating: 4.6,
    reviews: 45,
    detailed_description: `
      <h3>A Comfortable Perch for Your Bird's Feathers</h3>
      <p>The Trixie Wooden Bird Perch is an essential accessory for any bird cage. Made from natural, untreated wood, the varying thickness provides a comfortable grip for your bird's feet, helping to prevent foot problems like arthritis. It's a durable and simple addition to any habitat that promotes good health.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from safe, natural wood.</li>
        <li>Promotes healthy feet and leg muscles.</li>
        <li>Easy to install in any cage.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Attach to the cage bars using the included screw and washer.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sunil S.", rating: 5, comment: "My parakeets love this. It's much better than the plastic perches that came with the cage.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_154.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Good product, but the wood is a bit soft and my bird chews on it a lot.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Karan L.", rating: 4.5, comment: "Very sturdy and the perfect size. A good investment for my bird's health.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_155.jpg"] }
    ],
  },
  {
    id: "PID000131",
    short_name: "De ToX Aquarium Water Conditioner",
    short_description: "A concentrated formula that removes chlorine and chloramines from tap water.",
    original_price: 280,
    discountPercent: 10,
    images: ["/images/fish/health/131a.png"],
    brand: "DE TOX",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 12.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Fishes",
    stock: 90,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>Safe Water for Your Aquatic Pets</h3>
      <p>DE TOX Aquarium Water Conditioner is an essential treatment for tap water used in aquariums. It instantly neutralizes chlorine and chloramines, which are harmful to fish and can destroy their protective slime coat. This formula also binds heavy metals and reduces stress, making water changes safer and less stressful for your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Neutralizes chlorine and chloramines.</li>
        <li>Removes heavy metals.</li>
        <li>Reduces fish stress during water changes.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add to tap water before adding it to the aquarium. Follow dosage instructions on the bottle.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Vikas P.", rating: 5, comment: "I use this with every water change. My fish are much more active now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_156.jpg"] },
      { reviewer_name: "Anjali S.", rating: 4.5, comment: "A solid product. It gives me peace of mind knowing the water is safe.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Rahul G.", rating: 5, comment: "Works perfectly. The water is clear and the fish look healthy.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_157.jpg"] }
    ],
  },
  {
    id: "PID000132",
    short_name: "Fluker's Cricket Food",
    short_description: "Nutritious food for crickets to gut-load them for reptile and bird feeding.",
    original_price: 180,
    discountPercent: 5,
    images: ["/images/small_animal/food/132a.png"],
    brand: "Fluker's",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Small Animals",
    stock: 120,
    rating: 4.6,
    reviews: 40,
    detailed_description: `
      <h3>Essential Nutrition for Feeder Insects</h3>
      <p>Fluker's Cricket Food is designed to provide a high-quality, nutritious diet for crickets before they are fed to your reptile or bird. This process, known as 'gut-loading', ensures that the crickets are packed with essential vitamins and minerals that are then passed on to your pet, promoting their overall health and vitality. It’s a convenient and effective way to ensure a complete diet.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Provides a nutritious diet for crickets.</li>
        <li>Enhances the nutritional value of feeder insects.</li>
        <li>Easy-to-use pellet form.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Place a small amount of food in a shallow dish in your cricket's enclosure. Replenish as needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sandeep S.", rating: 5, comment: "This is a must-have for my reptile. The crickets are so much healthier.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_158.jpg"] },
      { reviewer_name: "Anil D.", rating: 4, comment: "It works, but the crickets go through it pretty fast.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Preeti R.", rating: 5, comment: "My gecko is healthier than ever. This is a great product for gut-loading.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_159.jpg"] }
    ],
  },
  {
    id: "PID000133",
    short_name: "Versele Laga Hamster Complete",
    short_description: "All-in-one pellet food that prevents selective eating in hamsters.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/small_animal/food/133a.png"],
    brand: "Versele Laga",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Small Animals",
    stock: 85,
    rating: 4.7,
    reviews: 60,
    detailed_description: `
      <h3>A Complete Diet for Your Hamster</h3>
      <p>Versele Laga Hamster Complete is an all-in-one extruded pellet food that ensures your hamster receives a balanced diet with every bite. The pellets are designed to prevent selective eating, where hamsters pick and choose their favorite pieces, leaving behind less-nutritious ingredients. The high-fiber content supports proper digestion and dental health.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Prevents selective eating for a balanced diet.</li>
        <li>High-fiber formula for healthy digestion.</li>
        <li>Enriched with vitamins and minerals.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed a small amount daily, ensuring they also have access to fresh water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavya L.", rating: 5, comment: "My hamster loves this food. It's great to know she's getting all the nutrients she needs.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_160.jpg"] },
      { reviewer_name: "Suresh P.", rating: 4, comment: "It's good, but my hamster took a while to get used to the pellets.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Deepika R.", rating: 5, comment: "Great food, and no more mess from my hamster sorting through his food.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_161.jpg"] }
    ],
  },
  {
    id: "PID000134",
    short_name: "Petstages Catnip Plaque Away",
    short_description: "A dental chew toy infused with catnip to clean teeth and massage gums.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/cat/toys/134a.png"],
    brand: "Petstages",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 20.0, width: 5.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.5,
    reviews: 80,
    detailed_description: `
      <h3>Promote Dental Health During Playtime</h3>
      <p>The Petstages Catnip Plaque Away is a fun way to improve your cat's dental health. The mesh material helps to scrape away soft tartar and plaque as your cat chews, while the catnip scent encourages them to play. It’s a simple and effective way to maintain your cat's oral hygiene.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Mesh material cleans teeth and gums.</li>
        <li>Filled with catnip to entice play.</li>
        <li>Durable and safe for chewing.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Not machine washable.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali D.", rating: 5, comment: "My cat loves this and she chews on it all the time. Her breath is so much better now!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_162.jpg"] },
      { reviewer_name: "Akshay S.", rating: 4, comment: "It's a good toy, but the catnip smell wasn't very strong.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Neha M.", rating: 4.5, comment: "Great for dental hygiene. My cat is obsessed with it.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_163.jpg"] }
    ],
  },
  {
    id: "PID000135",
    short_name: "Casper Memory Foam Dog Toy",
    short_description: "A soft, durable toy with a memory foam core for a unique play experience.",
    original_price: 750,
    discountPercent: 15,
    images: ["/images/dog/toys/135a.png", "/images/dog/toys/135b.png"],
    brand: "Casper",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 25.0, width: 10.0, height: 8.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.6,
    reviews: 88,
    detailed_description: `
      <h3>The Plushiest Toy Your Dog Will Ever Have</h3>
      <p>The Casper Memory Foam Dog Toy is designed for comfort and durability. The unique memory foam core provides a satisfying texture for your dog to chew and play with, while the durable outer fabric stands up to daily use. It's perfect for a game of fetch or a cozy cuddle session.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable outer fabric.</li>
        <li>Memory foam core for a unique feel.</li>
        <li>Safe and non-toxic materials.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Machine wash on a gentle cycle and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My dog loves this toy. The memory foam makes it so soft and cuddly.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_164.jpg"] },
      { reviewer_name: "Vikas P.", rating: 4, comment: "Good toy, but it's not indestructible for an aggressive chewer.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Ria L.", rating: 4.5, comment: "It's a very cute and well-made toy. My dog plays with it all the time.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_165.jpg"] }
    ],
  },
  {
    id: "PID000136",
    short_name: "Dophin Aquarium Pump",
    short_description: "A quiet and efficient submersible water pump for aquariums.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/fish/accessories/136a.png", "/images/fish/accessories/136b.png"],
    brand: "Dophin",
    weight: { value: 0.4, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 8.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 80,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>Powerful and Quiet Water Circulation</h3>
      <p>The Dophin Aquarium Pump is an essential component for any aquarium setup. This submersible pump provides excellent water circulation, which is crucial for a healthy aquatic environment. The motor is quiet and energy-efficient, ensuring a peaceful and beautiful habitat for your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Quiet and energy-efficient operation.</li>
        <li>Provides strong water flow for proper circulation.</li>
        <li>Easy to install and maintain.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Place the pump in the desired location in the aquarium, and plug it in. Follow the instructions for proper maintenance.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohit K.", rating: 5, comment: "This pump is fantastic! It's so quiet and the water flow is excellent.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_166.jpg"] },
      { reviewer_name: "Ankit J.", rating: 4.5, comment: "Good pump for the price. It's been running smoothly for months.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "A solid, reliable pump. My fish are happier and the water is clearer.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_167.jpg"] }
    ],
  },
  {
    id: "PID000137",
    short_name: "FurHaven Pet Lounger",
    short_description: "A comfortable, orthopedic pet bed with a removable, washable cover.",
    original_price: 3200,
    discountPercent: 20,
    images: ["/images/dog/beds/137a.png", "/images/dog/beds/137b.png"],
    brand: "FurHaven",
    weight: { value: 3.5, unit: "kg" },
    package_dimensions: { length: 60.0, width: 45.0, height: 15.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Dogs",
    stock: 65,
    rating: 4.7,
    reviews: 110,
    detailed_description: `
      <h3>Supportive Comfort for Your Best Friend</h3>
      <p>The FurHaven Pet Lounger is designed to provide orthopedic support for dogs of all ages. The memory foam base relieves pressure on joints and muscles, making it an excellent choice for senior dogs or those with arthritis. The removable, machine-washable cover makes it easy to keep the bed clean and fresh.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Orthopedic memory foam core.</li>
        <li>Removable and machine-washable cover.</li>
        <li>Plush fabric for ultimate comfort.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Machine wash the cover on a gentle cycle. Tumble dry on low heat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh J.", rating: 5, comment: "My senior dog sleeps so soundly on this bed. It's made a huge difference.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_168.jpg"] },
      { reviewer_name: "Meena R.", rating: 4, comment: "Good bed, but it took a few days to fully expand after unboxing.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Anil D.", rating: 5, comment: "My dog loves this bed! It's so soft and supportive.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_169.jpg"] }
    ],
  },
  {
    id: "PID000138",
    short_name: "Himalaya Pet Care Erina Plus Shampoo",
    short_description: "Herbal anti-dandruff and anti-itch shampoo for dogs and cats.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/dog/grooming/138a.png", "/images/dog/grooming/138b.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.6,
    reviews: 80,
    detailed_description: `
      <h3>Natural Relief for Itchy Skin</h3>
      <p>Himalaya's Erina Plus Shampoo is a herbal formula designed to provide relief from dandruff and itching in dogs and cats. It's made with natural ingredients like Neem and Eucalyptus, which have powerful anti-fungal and anti-bacterial properties. It cleanses the coat gently while soothing irritated skin, leaving it healthy and fresh.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Soothes irritated and itchy skin.</li>
        <li>Herbal formula is gentle and safe.</li>
        <li>Promotes a healthy, lustrous coat.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet coat, apply shampoo, and massage gently. Rinse thoroughly and repeat if necessary.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya L.", rating: 5, comment: "This shampoo worked wonders on my dog's skin allergies. He's much happier now.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_170.jpg"] },
      { reviewer_name: "Rohit S.", rating: 4, comment: "It's good, but the scent is a bit too medicinal for me.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Anjali M.", rating: 4.5, comment: "My vet recommended this, and it's been a great solution for my dog's dandruff.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_171.jpg"] }
    ],
  },
  {
    id: "PID000139",
    short_name: "Purina Veterinary Diets FortiFlora",
    short_description: "Probiotic supplement to help manage diarrhea and digestive issues in dogs.",
    original_price: 1800,
    discountPercent: 30,
    images: ["/images/dog/health/139a.png", "/images/dog/health/139b.png"],
    brand: "Purina",
    weight: { value: 0.03, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.9,
    reviews: 140,
    detailed_description: `
      <h3>A Probiotic for Digestive Wellness</h3>
      <p>Purina FortiFlora is a veterinary probiotic supplement designed to support a healthy digestive system in dogs. It contains a high concentration of beneficial microorganisms that help restore a healthy bacterial balance in the gut, which can be disrupted by stress, diet changes, or antibiotics. It's a highly palatable powder that can be sprinkled on your dog's food.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps manage digestive issues and diarrhea.</li>
        <li>Supports a healthy immune system.</li>
        <li>Easy-to-use powder form.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Sprinkle one sachet over your dog's food once daily. Consult your veterinarian for dosage recommendations.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shruti P.", rating: 5, comment: "This was a life-saver for my dog's chronic diarrhea. It worked so quickly!", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_172.jpg"] },
      { reviewer_name: "Anil R.", rating: 4.5, comment: "My vet recommended this, and it's been very effective for my dog's digestive issues.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "A fantastic product. My dog is much healthier and happier now.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_173.jpg"] }
    ],
  },
  {
    id: "PID000140",
    short_name: "Petkin Pet Wipes",
    short_description: "Gentle, deodorizing wipes for dogs and cats for quick clean-ups.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/dog/grooming/140a.png", "/images/dog/grooming/140b.png"],
    brand: "Petkin",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.7,
    reviews: 95,
    detailed_description: `
      <h3>Keep Your Pet Fresh and Clean on the Go</h3>
      <p>Petkin Pet Wipes are a convenient solution for quick clean-ups between baths. The gentle, alcohol-free formula is perfect for cleaning paws, face, and body. It helps remove dirt and dander while deodorizing the coat, leaving your pet smelling fresh and clean. They are also great for cats.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Gentle, deodorizing formula.</li>
        <li>Safe for use on face, paws, and body.</li>
        <li>Convenient for quick clean-ups and travel.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe your pet from head to tail, avoiding contact with eyes. No rinsing required.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Neha G.", rating: 5, comment: "These are a lifesaver! I use them for my dog's paws after every walk. So convenient.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_174.jpg"] },
      { reviewer_name: "Saurabh J.", rating: 4, comment: "Good wipes, but the scent is a bit too strong for my liking.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Kavita R.", rating: 5, comment: "Great for my cat who hates baths. It keeps her clean and smelling fresh.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_175.jpg"] }
    ],
  },
  {
    id: "PID000141",
    short_name: "Tetra BettaMin Tropical Flakes",
    short_description: "High-protein flakes for Bettas and other carnivorous tropical fish.",
    original_price: 180,
    discountPercent: 5,
    images: ["/images/fish/food/141a.png"],
    brand: "Tetra",
    weight: { value: 0.015, unit: "kg" },
    package_dimensions: { length: 8.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 180,
    rating: 4.6,
    reviews: 75,
    detailed_description: `
      <h3>The Perfect Diet for Your Betta Fish</h3>
      <p>Tetra BettaMin Tropical Flakes are specially formulated to meet the high protein needs of carnivorous fish like Bettas. The formula is rich in bloodworms and shrimp, providing the essential nutrients for a healthy and vibrant Betta. The flakes float on the surface, making them easy for Bettas to eat. It is designed to promote brilliant colors and overall health.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-protein formula for Bettas.</li>
        <li>Helps enhance natural colors.</li>
        <li>Highly palatable and easily digestible.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed 2-3 flakes, 2-3 times daily. Do not overfeed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja L.", rating: 5, comment: "My Betta fish is so much more active and his colors are brilliant after switching to this food.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_176.jpg"] },
      { reviewer_name: "Arjun K.", rating: 4, comment: "Good food, but the flakes are a bit too small for my liking.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Sneha V.", rating: 5, comment: "My Betta eats this with no fuss. Great product.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_177.jpg"] }
    ],
  },
  {
    id: "PID000142",
    short_name: "SunSun Aquarium Filter",
    short_description: "A compact internal filter for small to medium-sized aquariums.",
    original_price: 5500,
    discountPercent: 35,
    images: ["/images/fish/accessories/142a.png", "/images/fish/accessories/142b.png"],
    brand: "SunSun",
    weight: { value: 0.35, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 6.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 75,
    rating: 4.5,
    reviews: 60,
    detailed_description: `
      <h3>Keep Your Aquarium Water Crystal Clear</h3>
      <p>The SunSun Aquarium Filter is an efficient and compact internal filter that provides mechanical and biological filtration. It removes debris and toxins, promoting a healthy environment for your fish. The quiet motor and adjustable flow rate make it a great choice for both beginners and experienced aquarists. It's easy to install and maintain.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Provides mechanical and biological filtration.</li>
        <li>Quiet and energy-efficient motor.</li>
        <li>Adjustable flow rate.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Place the filter in the aquarium using the suction cups and plug in. Clean the filter sponge regularly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pramod G.", rating: 5, comment: "This filter is a powerhouse for its size. My water is so clear now.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_178.jpg"] },
      { reviewer_name: "Anjali S.", rating: 4, comment: "It's a bit small for my large aquarium, but it works well.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Suresh L.", rating: 4.5, comment: "Great value for money. My fish seem much happier now.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_179.jpg"] }
    ],
  },
  {
    id: "PID000143",
    short_name: "Drools Vet Pro Adult Dry Dog Food",
    short_description: "A specialized vet formula for adult dogs with skin and coat issues.",
    original_price: 1800,
    discountPercent: 10,
    images: ["/images/dog/food/143a.png", "/images/dog/food/143b.png"],
    brand: "Drools",
    weight: { value: 3.0, unit: "kg" },
    package_dimensions: { length: 35.0, width: 25.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.7,
    reviews: 120,
    detailed_description: `
      <h3>Prescription-Strength Nutrition for a Healthy Coat</h3>
      <p>Drools Vet Pro is a specially formulated diet to help manage skin and coat issues in dogs. The recipe is rich in Omega 3 and 6 fatty acids, which promote a healthy, lustrous coat and help reduce skin irritation. The highly digestible formula also supports a healthy gut, which is vital for overall skin health. It’s a vet-recommended solution for a variety of dermatological conditions.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Rich in Omega 3 and 6 fatty acids.</li>
        <li>Helps reduce skin irritation and itching.</li>
        <li>Supports a healthy and shiny coat.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Hydrolyzed Protein, Rice, Fish Oil, Flaxseed, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Nikhil P.", rating: 5, comment: "My vet recommended this, and my dog's skin issues have cleared up completely. A fantastic product.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_180.jpg"] },
      { reviewer_name: "Pooja K.", rating: 4, comment: "My dog likes the taste, but it took a few weeks to see a difference.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Saurav R.", rating: 5, comment: "My dog's coat has never looked so healthy. Very happy with this food.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_181.jpg"] }
    ],
  },
  {
    id: "PID000144",
    short_name: "Orvis ComfortFill-Eco Bed",
    short_description: "An overstuffed, supportive bed with a recycled fiber fill for dogs.",
    original_price: 4500,
    discountPercent: 25,
    images: ["/images/dog/beds/144a.png", "/images/dog/beds/144b.png"],
    brand: "Orvis",
    weight: { value: 4.5, unit: "kg" },
    package_dimensions: { length: 70.0, width: 50.0, height: 20.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Dogs",
    stock: 55,
    rating: 4.8,
    reviews: 130,
    detailed_description: `
      <h3>The Ultimate in Eco-Friendly Comfort</h3>
      <p>The Orvis ComfortFill-Eco Bed is designed for dogs who love to burrow and nest. The overstuffed fill, made from 100% recycled plastic bottles, provides superior support and comfort. It holds its shape and won't flatten over time. The soft outer cover is easy to remove and wash, ensuring a clean and comfortable space for your pet.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>100% recycled fill for superior support.</li>
        <li>Removable, machine-washable cover.</li>
        <li>Overstuffed design holds its shape.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Machine wash the cover on a gentle cycle. Tumble dry on low heat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali M.", rating: 5, comment: "This bed is so plush and supportive. My dog loves it and has stopped sleeping on my bed.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_182.jpg"] },
      { reviewer_name: "Karan S.", rating: 4, comment: "Good quality bed, but a bit too bulky for my small apartment.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "Worth every penny. The eco-friendly aspect is a huge plus.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_183.jpg"] }
    ],
  },
  {
    id: "PID000145",
    short_name: "Savic Small Animal Cage",
    short_description: "A secure, spacious cage with a wire base for small animals.",
    original_price: 2800,
    discountPercent: 15,
    images: ["/images/small_animal/beds/145a.png", "/images/small_animal/beds/145b.png"],
    brand: "Savic",
    weight: { value: 2.8, unit: "kg" },
    package_dimensions: { length: 60.0, width: 40.0, height: 35.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Small Animals",
    stock: 45,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>A Safe and Spacious Home</h3>
      <p>The Savic Small Animal Cage provides a secure and comfortable habitat for your hamster, guinea pig, or rabbit. The wire base is easy to clean, and the deep tray prevents bedding from being scattered. It comes with a food bowl, water bottle, and a small hideout, making it a great starter kit for your new pet.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Spacious design for small animals.</li>
        <li>Deep tray to prevent bedding scatter.</li>
        <li>Includes essential accessories.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Easy to assemble with included instructions. No tools required.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My new hamster loves this cage! It's the perfect size and very secure.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_184.jpg"] },
      { reviewer_name: "Rohit P.", rating: 4, comment: "Good cage, but the water bottle leaks a bit.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priyanka R.", rating: 4.5, comment: "Very well-made and easy to clean. My guinea pig is very happy.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_185.jpg"] }
    ],
  },
  {
    id: "PID000146",
    short_name: "Sunsun Xiaoli XQP-500F Internal Filter",
    short_description: "An adjustable, submersible heater for maintaining stable aquarium temperature.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/fish/accessories/146a.png", "/images/fish/accessories/146b.png"],
    brand: "SunSun",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 90,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>Keep Your Fish Comfortable and Healthy</h3>
      <p>The SunSun Aquarium Heater is a reliable and essential tool for maintaining the ideal water temperature in your aquarium. The fully submersible design and adjustable thermostat ensure a stable and safe environment for your tropical fish. The indicator light shows when the heater is in operation, giving you peace of mind.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Adjustable thermostat for precise temperature control.</li>
        <li>Fully submersible and waterproof.</li>
        <li>Indicator light for easy monitoring.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Place the heater vertically in the aquarium, fully submerged. Set the desired temperature and plug in.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "This heater is great! It keeps the temperature perfectly stable in my aquarium.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_186.jpg"] },
      { reviewer_name: "Priya V.", rating: 4, comment: "Good heater, but the temperature knob is a bit stiff to turn.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kunal S.", rating: 5, comment: "A very reliable heater. My fish are much more active now that the water temperature is consistent.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_187.jpg"] }
    ],
  },
  {
    id: "PID000147",
    short_name: "Royal Canin Kitten Dry Cat Food",
    short_description: "A dry food specifically for kittens with a highly digestible formula.",
    original_price: 1200,
    discountPercent: 10,
    images: ["/images/cat/food/147a.png", "/images/cat/food/147b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 28.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 150,
    rating: 4.8,
    reviews: 200,
    detailed_description: `
      <h3>Building a Strong Foundation for Your Kitten's Health</h3>
      <p>Royal Canin Kitten is a specialized diet designed to support your kitten's growth and development. The formula provides a balanced blend of highly digestible proteins, prebiotics, and antioxidants to support a healthy digestive system and a strong immune system. The small kibble is easy for kittens to chew and digest.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Supports a healthy immune and digestive system.</li>
        <li>Enriched with vitamins and minerals for growth.</li>
        <li>High-quality, easily digestible proteins.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated Poultry Protein, Rice, Corn, Animal Fats, Vegetable Protein Isolate, and Beet Pulp.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Manish R.", rating: 5, comment: "My kittens are thriving on this food. Their fur is so soft and they have so much energy.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_188.jpg"] },
      { reviewer_name: "Divya K.", rating: 4.5, comment: "My kittens love the taste. They always finish their food.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Rahul P.", rating: 5, comment: "The vet recommended this, and it's been great. My kittens are growing well.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_189.jpg"] }
    ],
  },
  {
    id: "PID000148",
    short_name: "Wahl Paw Tidy Trimmer",
    short_description: "A compact, battery-powered trimmer for precise grooming of paws and face.",
    original_price: 1800,
    discountPercent: 10,
    images: ["/images/dog/grooming/148a.png", "/images/dog/grooming/148b.png"],
    brand: "Wahl",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 20.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 110,
    rating: 4.7,
    reviews: 90,
    detailed_description: `
      <h3>Precise Grooming for Your Pet's Paws</h3>
      <p>The Wahl Paw Tidy Trimmer is a professional-grade trimmer designed for detailed grooming around the paws, face, and ears. The compact size and quiet motor make it easy to use, and the sharp blades provide a precise cut without causing discomfort. It’s an essential tool for keeping your pet looking neat and tidy between full grooming sessions.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Compact and lightweight design.</li>
        <li>Quiet motor to keep pets calm.</li>
        <li>Sharp blades for precise trimming.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Clean the blade after each use and apply a drop of oil to maintain performance.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh L.", rating: 5, comment: "This trimmer is perfect for my dog's paws. It's quiet and doesn't scare him.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_190.jpg"] },
      { reviewer_name: "Anjali S.", rating: 4.5, comment: "It works well, but the battery life could be a bit longer.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kavita D.", rating: 5, comment: "A must-have for at-home grooming. It makes a huge difference.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_191.jpg"] }
    ],
  },
  {
    id: "PID000149",
    short_name: "CENTRAL FISH AQUARIUM Aquarium Fish Tank Cleaner",
    short_description: "A simple, manual gravel cleaner for small to medium aquariums.",
    original_price: 320,
    discountPercent: 5,
    images: ["/images/fish/accessories/149a.png", "/images/fish/accessories/149b.png"],
    brand: "Central Fish Aquarium",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 25.0, width: 8.0, height: 4.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 120,
    rating: 4.4,
    reviews: 55,
    detailed_description: `
      <h3>Essential for a Healthy Aquarium Bed</h3>
      <p>The AquaByNature Gravel Cleaner is a simple yet effective tool for maintaining a clean aquarium bed. It removes fish waste and uneaten food from the gravel, which helps to prevent the build-up of harmful toxins. The manual pump action is easy to use and provides a controlled flow, so you can clean the gravel without disturbing your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Manually operated for easy use.</li>
        <li>Effectively removes debris from gravel.</li>
        <li>Simple design is easy to clean.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Submerge the nozzle in the gravel and use the pump to start the siphon. The debris will be pulled out with the water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priyanka L.", rating: 5, comment: "This is a great little tool. It makes gravel cleaning so much easier.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_192.jpg"] },
      { reviewer_name: "Abhishek S.", rating: 4, comment: "It works, but the suction isn't very strong on the pump.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Sneha V.", rating: 4.5, comment: "Good value for money. It's an essential for any fish tank owner.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_193.jpg"] }
    ],
  },
  {
    id: "PID000150",
    short_name: "Amijivdaya Bird Feeder",
    short_description: "A durable plastic bird feeder that provides a clean food source.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/bird/accessories/150a.png", "/images/bird/accessories/150b.png"],
    brand: "Amijivdaya",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 10.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 150,
    rating: 4.6,
    reviews: 60,
    detailed_description: `
      <h3>A Simple Solution for Bird Feeding</h3>
      <p>The Amijivdaya Bird Feeder is a simple and effective way to provide a clean and secure food source for your bird. The durable plastic design is easy to clean and the lid keeps food fresh and free from contamination. It’s an essential accessory that helps to maintain a healthy and hygienic environment for your feathered friend.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Easy to clean and refill.</li>
        <li>Lid keeps food fresh and clean.</li>
        <li>Durable, non-toxic plastic.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Simply fill with food and hang inside the bird cage using the attached hook.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Meenakshi L.", rating: 5, comment: "This feeder is great! No more mess from my bird throwing food everywhere.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_194.jpg"] },
      { reviewer_name: "Rahul G.", rating: 4, comment: "It's a good feeder, but a bit small for my parrot.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Suresh V.", rating: 4.5, comment: "Very sturdy and well-made. A great addition to the cage.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_195.jpg"] }
    ],
  },
  {
    id: "PID000151",
    short_name: "Cap'n Jack's Chicken & Rice Biscuits",
    short_description: "Crunchy, oven-baked dog biscuits with real chicken and rice.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/dog/food/151a.png", "/images/dog/food/151b.png"],
    brand: "Cap'n Jack's",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.7,
    reviews: 95,
    detailed_description: `
      <h3>A Delicious and Healthy Treat</h3>
      <p>Cap'n Jack's Chicken & Rice Biscuits are a wholesome and tasty treat for your dog. Made with real chicken and rice, these crunchy biscuits are oven-baked to perfection. They are a great way to reward your dog during training or simply to show them some love. The crunchy texture also helps to clean their teeth and reduce tartar buildup.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Made with real chicken and rice.</li>
        <li>Crunchy texture helps clean teeth.</li>
        <li>Great for training and rewards.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Whole Wheat Flour, Chicken, Rice, Chicken Fat, Natural Flavors, and Mixed Tocopherols.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman T.", rating: 5, comment: "My dog loves these biscuits! They're his favorite treat now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_196.jpg"] },
      { reviewer_name: "Priya S.", rating: 4.5, comment: "Good quality biscuits, and the bag is resealable which is great.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Rahul G.", rating: 5, comment: "My dog is so motivated to train with these. A fantastic product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_197.jpg"] }
    ],
  },
  {
    id: "PID000152",
    short_name: "M-Pets Ceramic Food Bowl",
    short_description: "A durable, easy-to-clean ceramic food bowl for dogs and cats.",
    original_price: 380,
    discountPercent: 5,
    images: ["/images/dog/accessories/152a.png", "/images/cat/accessories/152b.png"],
    brand: "M-Pets",
    weight: { value: 0.6, unit: "kg" },
    package_dimensions: { length: 15.0, width: 15.0, height: 6.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.8,
    reviews: 110,
    detailed_description: `
      <h3>A Stylish and Hygienic Feeding Solution</h3>
      <p>The M-Pets Ceramic Food Bowl is a practical and stylish addition to your pet's feeding area. Made from high-quality ceramic, it's durable, heavy enough to prevent tipping, and easy to clean. The non-porous surface is more hygienic than plastic bowls and won't harbor bacteria. It's suitable for both dogs and cats and looks great in any home.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, heavy ceramic construction.</li>
        <li>Easy to clean and hygienic.</li>
        <li>Stylish design for any home decor.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Dishwasher-safe for easy cleaning.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "I love this bowl. It's so much easier to clean than my old plastic one.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_198.jpg"] },
      { reviewer_name: "Saurabh J.", rating: 4.5, comment: "A solid, well-made bowl. My dog can't tip it over.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "Very elegant and practical. I bought one for my cat too.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_199.jpg"] }
    ],
  },
  {
    id: "PID000153",
    short_name: "Heads Up For Tails Chicken Jerky",
    short_description: "All-natural, single-ingredient jerky treats for dogs.",
    original_price: 550,
    discountPercent: 10,
    images: ["/images/dog/food/153a.png", "/images/dog/food/153b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 100,
    rating: 4.9,
    reviews: 80,
    detailed_description: `
      <h3>The Taste of Pure Goodness</h3>
      <p>Heads Up For Tails Chicken Jerky is a delicious, all-natural treat that your dog will love. Made with a single ingredient—100% real chicken breast—it is free from grains, gluten, and artificial additives. These treats are a healthy, high-protein snack that is perfect for rewarding your dog or as a tasty in-between-meals snack.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Single-ingredient, all-natural formula.</li>
        <li>High in protein, low in fat.</li>
        <li>Free from grains, gluten, and additives.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>100% Dehydrated Chicken Breast.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kunal S.", rating: 5, comment: "My dog is obsessed with these. I love that they're all-natural.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_200.jpg"] },
      { reviewer_name: "Ankit D.", rating: 4.5, comment: "Great treat, but the bag is a bit small for the price.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Sneha V.", rating: 5, comment: "My dog gets excited every time I open the bag. A fantastic product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_201.jpg"] }
    ],
  },
  {
    id: "PID000154",
    short_name: "Heads Up For Tails Donut Bed",
    short_description: "A super-soft, plush donut-shaped bed for cozy comfort.",
    original_price: 2800,
    discountPercent: 15,
    images: ["/images/dog/beds/154a.png", "/images/dog/beds/154b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 50.0, width: 50.0, height: 20.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Dogs",
    stock: 60,
    rating: 4.8,
    reviews: 120,
    detailed_description: `
      <h3>The Coziest Nap Spot Imaginable</h3>
      <p>The Heads Up For Tails Donut Bed is designed for pets who love to curl up and feel secure. The plush, faux-fur fabric is irresistibly soft and provides a warm, comforting space for your dog to relax. The raised bolster edges give them a pillow to rest their head on, while the deep, donut shape is perfect for nesting and feeling safe.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Plush, soft faux-fur fabric.</li>
        <li>Raised bolster edges for security and comfort.</li>
        <li>Machine washable for easy cleaning.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Machine wash on a gentle cycle. Air dry or tumble dry on low heat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Neha R.", rating: 5, comment: "My dog adores this bed! She's always curled up in it.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_202.jpg"] },
      { reviewer_name: "Karan P.", rating: 4.5, comment: "It's super soft, but it took a day to fluff up properly.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Best bed I've ever bought. My dog is in heaven.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_203.jpg"] }
    ],
  },
  {
    id: "PID000155",
    short_name: "Himalaya Pet Care Digyton Plus",
    short_description: "Herbal digestive supplement to improve digestion and relieve gas in pets.",
    original_price: 200,
    discountPercent: 0,
    images: ["/images/dog/health/155a.png", "/images/dog/health/155b.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 12.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.6,
    reviews: 75,
    detailed_description: `
      <h3>A Natural Way to Support Digestive Health</h3>
      <p>Himalaya's Digyton Plus is a herbal supplement formulated to improve digestion and relieve discomfort from gas and indigestion in dogs and cats. It contains a blend of natural ingredients that support a healthy digestive tract, promoting better nutrient absorption and overall gut wellness. It's a gentle and effective solution for a variety of digestive issues.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps relieve gas and indigestion.</li>
        <li>Improves nutrient absorption.</li>
        <li>Natural, herbal formula is safe for regular use.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Administer orally or mix with food. Consult your veterinarian for dosage recommendations based on your pet's weight.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "This has been a game-changer for my dog. His tummy issues are gone.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_204.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "Good product, but the liquid is a bit hard to get my cat to take.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kunal S.", rating: 4.5, comment: "It works well and I feel good using a natural product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_205.jpg"] }
    ],
  },
  {
    id: "PID000156",
    short_name: "Himalaya Pet Care Liv.52 Vet",
    short_description: "Herbal liver supplement to support liver function in dogs and cats.",
    original_price: 250,
    discountPercent: 15,
    images: ["/images/dog/health/156a.png", "/images/dog/health/156b.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 100,
    rating: 4.8,
    reviews: 90,
    detailed_description: `
      <h3>Essential Liver Support for Your Pet</h3>
      <p>Himalaya's Liv.52 Vet is a well-known herbal supplement that supports and protects liver function in dogs and cats. It's especially useful for pets on long-term medication or those with liver issues. The natural ingredients help to detoxify the liver and promote the regeneration of liver cells, ensuring your pet's overall health and well-being.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Supports and protects liver function.</li>
        <li>Helps detoxify the liver.</li>
        <li>Promotes cell regeneration.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Administer orally or mix with food. Consult your veterinarian for dosage recommendations based on your pet's weight and condition.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Neha R.", rating: 5, comment: "My dog's liver values improved significantly after using this. My vet was very impressed.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_206.jpg"] },
      { reviewer_name: "Karan P.", rating: 4.5, comment: "A trusted supplement. I'm happy to give my pet something natural.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "My vet recommended this, and it's been a great addition to my dog's diet.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_207.jpg"] }
    ],
  },
  {
    id: "PID000157",
    short_name: "Himalaya Pet Care Scavon Vet Cream",
    short_description: "Herbal antiseptic cream for wounds, abrasions, and skin infections.",
    original_price: 150,
    discountPercent: 0,
    images: ["/images/dog/health/157a.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 4.0, height: 3.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.7,
    reviews: 80,
    detailed_description: `
      <h3>Heal Your Pet's Wounds Naturally</h3>
      <p>Himalaya's Scavon Vet Cream is a powerful herbal antiseptic solution for minor wounds, cuts, and skin infections. The formula, enriched with natural ingredients like Neem and Turmeric, provides a broad-spectrum anti-microbial action that helps prevent infection and promotes rapid healing. It's a safe and effective remedy to have on hand for all your pet's minor injuries.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Antiseptic and anti-fungal properties.</li>
        <li>Promotes faster wound healing.</li>
        <li>Safe and natural formula.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Clean the affected area and apply the cream 2-3 times daily until the wound heals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Abhishek S.", rating: 5, comment: "This cream is amazing. My dog's cut healed so quickly with no infection.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_208.jpg"] },
      { reviewer_name: "Anjali D.", rating: 4.5, comment: "A must-have for any pet first-aid kit. It works great.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Rohit V.", rating: 5, comment: "Very effective and my dog doesn't try to lick it off.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_209.jpg"] }
    ],
  },
  {
    id: "PID000158",
    short_name: "Iams Proactive Health Adult",
    short_description: "Dry cat food with real chicken for a complete and balanced diet.",
    original_price: 1200,
    discountPercent: 10,
    images: ["/images/cat/food/158a.png", "/images/cat/food/158b.png"],
    brand: "Iams",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 105,
    rating: 4.7,
    reviews: 180,
    detailed_description: `
      <h3>A Foundation for Lifelong Health</h3>
      <p>Iams Proactive Health Adult Cat Food is a complete and balanced meal designed to support your cat's health and vitality. It is made with real chicken as the first ingredient, providing essential protein for lean muscles. The crunchy kibble helps reduce plaque and tartar buildup, promoting healthy teeth and gums. It is also enriched with vitamins and minerals to support a strong immune system.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Real chicken is the first ingredient.</li>
        <li>Crunchy kibble helps clean teeth.</li>
        <li>Supports a healthy immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, Chicken By-Product Meal, Corn Grits, Ground Whole Grain Corn, Dried Beet Pulp, Fish Oil, and Brewers Dried Yeast.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "My cat loves this food and her coat is so much shinier now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_210.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4.5, comment: "It's a good everyday food, and my cat seems to enjoy the taste.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kunal S.", rating: 5, comment: "A trusted brand that always delivers. My cat is healthy and happy.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_211.jpg"] }
    ],
  },
  {
    id: "PID000159",
    short_name: "Trixie Dog Raincoat",
    short_description: "A waterproof, lightweight raincoat for dogs with a hood.",
    original_price: 1200,
    discountPercent: 15,
    images: ["/images/dog/accessories/159a.png", "/images/dog/accessories/159b.png"],
    brand: "Trixie",
    weight: { value: 0.35, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 75,
    rating: 4.6,
    reviews: 65,
    detailed_description: `
      <h3>Stay Dry on Rainy Walks</h3>
      <p>The Trixie Dog Raincoat is a must-have for rainy-day walks. The waterproof material keeps your dog dry and comfortable, while the attached hood provides extra protection for their head. The adjustable straps ensure a secure and comfortable fit, and the bright color makes your dog more visible in low light.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Waterproof and lightweight material.</li>
        <li>Adjustable straps for a secure fit.</li>
        <li>Attached hood for extra protection.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth or hand wash with mild detergent. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh J.", rating: 5, comment: "This is a great raincoat! My dog stays completely dry on our walks now.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_212.jpg"] },
      { reviewer_name: "Meena R.", rating: 4, comment: "It's good, but the hood keeps falling off my dog's head.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Anil D.", rating: 4.5, comment: "A very well-made raincoat. It's easy to put on and take off.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_213.jpg"] }
    ],
  },
  {
    id: "PID000160",
    short_name: "Venus Aqua Aquarium Gravel",
    short_description: "Colorful, non-toxic gravel to decorate your aquarium.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/fish/accessories/160a.png"],
    brand: "Venus Aqua",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 150,
    rating: 4.4,
    reviews: 50,
    detailed_description: `
      <h3>Add Color to Your Aquarium</h3>
      <p>Venus Aqua Aquarium Gravel is a safe and vibrant way to decorate your fish tank. The gravel is non-toxic and pH-neutral, so it won't harm your fish or alter the water chemistry. It provides a natural-looking substrate for your fish and plants, and the colorful mix adds a beautiful aesthetic to your aquarium.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Non-toxic and pH-neutral.</li>
        <li>Colorful mix for a vibrant look.</li>
        <li>Provides a natural substrate for plants.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Rinse the gravel thoroughly before adding it to the bottom of your aquarium.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Abhishek G.", rating: 5, comment: "The colors are so vibrant! My aquarium looks amazing now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_214.jpg"] },
      { reviewer_name: "Pooja B.", rating: 4, comment: "It's good, but the color flakes off a bit on some stones.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 4.5, comment: "The perfect amount for my small tank. Very happy with the purchase.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_215.jpg"] }
    ],
  },
  {
    id: "PID000161",
    short_name: "Trixie Cat Harness and Leash Set",
    short_description: "A comfortable and secure harness with a matching leash for cats.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/cat/accessories/161a.png", "/images/cat/accessories/161b.png"],
    brand: "Trixie",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 20.0, width: 10.0, height: 3.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 95,
    rating: 4.5,
    reviews: 80,
    detailed_description: `
      <h3>Explore the Outdoors Safely</h3>
      <p>The Trixie Cat Harness and Leash Set is the perfect way to introduce your cat to the outdoors. The harness is adjustable and lightweight, providing a secure and comfortable fit without restricting your cat's movement. The matching leash gives you control while allowing your cat to explore safely. It's a great tool for supervised outdoor adventures.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Adjustable and lightweight harness.</li>
        <li>Secure clasp for safety.</li>
        <li>Matching leash included.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with mild detergent and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia P.", rating: 5, comment: "This harness is great! My cat can't escape from it, and it seems very comfortable for her.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_216.jpg"] },
      { reviewer_name: "Manish R.", rating: 4, comment: "It's a good set, but the leash is a bit too short for my liking.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 4.5, comment: "Very well-made and easy to put on. A great way to take my cat on walks.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_217.jpg"] }
    ],
  },
  {
    id: "PID000162",
    short_name: "Wahl Pet Grooming Scissors",
    short_description: "Professional-grade stainless steel scissors for pet grooming.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/dog/grooming/162a.png", "/images/dog/grooming/162b.png"],
    brand: "Wahl",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 3.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.8,
    reviews: 65,
    detailed_description: `
      <h3>Precision Grooming at Your Fingertips</h3>
      <p>The Wahl Pet Grooming Scissors are an essential tool for any at-home groomer. Made from high-quality stainless steel, the blades are sharp and provide a clean, precise cut. The ergonomic handles and finger rests ensure a comfortable and secure grip, allowing you to easily trim around your pet's face, paws, and ears. These scissors are perfect for detailed work and finishing touches.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-quality stainless steel blades.</li>
        <li>Ergonomic design for comfortable use.</li>
        <li>Ideal for detailed trimming and finishing.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Clean blades after each use and store in a dry place.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh P.", rating: 5, comment: "These scissors are incredibly sharp and easy to use. My dog's hair looks great now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_218.jpg"] },
      { reviewer_name: "Anjali M.", rating: 4, comment: "Good quality, but they're a bit too big for my small dog.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 4.5, comment: "A solid, professional-grade product. Very happy with my purchase.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_219.jpg"] }
    ],
  },
  {
    id: "PID000163",
    short_name: "Farmina N&D Quinoa Skin & Coat",
    short_description: "A specialized, grain-free formula for cats with sensitive skin.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/cat/food/163a.png", "/images/cat/food/163b.png"],
    brand: "Farmina",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 25.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 70,
    rating: 4.9,
    reviews: 120,
    detailed_description: `
      <h3>Targeted Nutrition for a Healthy Coat</h3>
      <p>Farmina N&D Quinoa Skin & Coat is a grain-free, specialized diet for cats with sensitive skin or coat issues. The formula is rich in Omega 3 and 6 fatty acids, which promote a healthy, lustrous coat and help reduce skin irritation. The inclusion of quinoa provides essential nutrients and a highly digestible source of protein. It's a natural and effective way to support your cat's dermatological health.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Grain-free formula for sensitive cats.</li>
        <li>Rich in Omega 3 and 6 for a healthy coat.</li>
        <li>Contains quinoa for a complete nutritional profile.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Duck, dehydrated duck, quinoa, fresh fish, fish oil, coconut, and turmeric.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My cat's skin issues are completely gone since I started using this food. It's amazing!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_220.jpg"] },
      { reviewer_name: "Saurabh J.", rating: 4.5, comment: "A great product, but it's a bit pricey.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "My cat's coat is so soft and shiny. Very happy with this food.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_221.jpg"] }
    ],
  },
  {
    id: "PID000164",
    short_name: "Chuckit! Fetch Medley Ball Pack",
    short_description: "A variety pack of durable rubber balls for a fun game of fetch.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/dog/toys/164a.png", "/images/dog/toys/164b.png"],
    brand: "Chuckit!",
    weight: { value: 0.4, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>The Perfect Balls for a Game of Fetch</h3>
      <p>The Chuckit! Fetch Medley is a fun variety pack of durable rubber balls. Each ball has a unique design and bounce, keeping your dog engaged and entertained. They are made from high-quality, non-toxic rubber and are designed to float, making them perfect for playtime in the water. They are compatible with the Chuckit! ball launcher for extra-long throws.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, long-lasting rubber.</li>
        <li>Different textures and bounces for variety.</li>
        <li>Floats in water for versatile play.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth or rinse with water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "These balls are fantastic! My dog can't get enough of them.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_222.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "Good balls, but my dog chewed through one of them pretty fast.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kunal S.", rating: 5, comment: "My dog loves the variety. A great purchase for a fetch-obsessed dog.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_223.jpg"] }
    ],
  },
  {
    id: "PID000165",
    short_name: "Gigiwi Cat Tunnel Toy",
    short_description: "A collapsible cat tunnel with a crinkle sound for interactive play.",
    original_price: 750,
    discountPercent: 10,
    images: ["/images/cat/toys/165a.png", "/images/cat/toys/165b.png"],
    brand: "GiGwi",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 30.0, width: 30.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 105,
    rating: 4.7,
    reviews: 90,
    detailed_description: `
      <h3>Hours of Fun and Exploration</h3>
      <p>The Gigiwi Cat Tunnel is a great way to provide your cat with a fun and engaging space to play and hide. The tunnel's crinkle sound and dangling toy at the end will entice your cat's natural hunting instincts. The collapsible design makes it easy to store away when not in use. It's a perfect toy for interactive play or for your cat to simply relax and feel secure in.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Collapsible design for easy storage.</li>
        <li>Crinkle sound to attract your cat's attention.</li>
        <li>Durable material and a dangling toy.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Do not immerse in water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia P.", rating: 5, comment: "My cats love this tunnel. They chase each other through it all the time.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_224.jpg"] },
      { reviewer_name: "Manish R.", rating: 4, comment: "Good toy, but it's a bit small for my large cat.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "Very well-made and my cats are obsessed with it. A great purchase.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_225.jpg"] }
    ],
  },
  {
    id: "PID000166",
    short_name: "Fluval Plant & Shrimp Stratum",
    short_description: "A nutrient-rich substrate for planted aquariums and shrimp tanks.",
    original_price: 1200,
    discountPercent: 10,
    images: ["/images/fish/accessories/166a.png", "/images/fish/accessories/166b.png"],
    brand: "Fluval",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 75,
    rating: 4.8,
    reviews: 65,
    detailed_description: `
      <h3>The Ideal Bed for Aquatic Plants and Shrimp</h3>
      <p>Fluval Plant & Shrimp Stratum is a nutrient-rich substrate that provides the perfect environment for aquatic plants and shrimp. The porous structure allows for easy root growth and the rich mineral content supports vibrant, healthy plant life. It also helps maintain a slightly acidic pH, which is ideal for most tropical fish and shrimp species. It’s a great way to create a natural, beautiful, and thriving aquarium.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Nutrient-rich for plant growth.</li>
        <li>Porous structure for root development.</li>
        <li>Helps maintain ideal pH levels.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Rinse thoroughly before adding to the aquarium. Add a layer to the bottom of the tank before adding water and plants.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh R.", rating: 5, comment: "My plants are thriving with this substrate. It's so much better than plain gravel.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_226.jpg"] },
      { reviewer_name: "Ankit J.", rating: 4.5, comment: "It works well, but it's a bit messy to rinse before use.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Pooja G.", rating: 5, comment: "My shrimp are very happy with their new home. Great substrate.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_227.jpg"] }
    ],
  },
  {
    id: "PID000167",
    short_name: "Versele Laga NutriBird",
    short_description: "A complete, high-energy food for medium-sized parrots and cockatoos.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/bird/food/167a.png"],
    brand: "Versele Laga",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 25.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 80,
    rating: 4.9,
    reviews: 70,
    detailed_description: `
      <h3>Balanced Nutrition for Vibrant Birds</h3>
      <p>Versele Laga NutriBird is a scientifically formulated diet that ensures your parrot receives a complete and balanced meal with every bite. The pellets are designed to prevent selective eating, where birds pick and choose their favorite seeds. It's packed with vitamins, minerals, and amino acids to support strong feathers, a healthy immune system, and overall vitality.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>All-in-one pellet formula prevents selective eating.</li>
        <li>Rich in essential nutrients for overall health.</li>
        <li>Supports bright, healthy plumage.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Transition your bird gradually. Provide fresh water and change pellets daily.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Meena R.", rating: 5, comment: "My parrot loves this food and his feathers have never looked better.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_228.jpg"] },
      { reviewer_name: "Ankit S.", rating: 4.5, comment: "Good quality food. My cockatoo transitioned easily from seeds.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priya D.", rating: 5, comment: "This is a fantastic product. I'm happy to know my bird is getting all the nutrients he needs.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_229.jpg"] }
    ],
  },
  {
    id: "PID000168",
    short_name: "Amijivdaya Bird Bath",
    short_description: "A simple, clip-on bird bath for small to medium-sized bird cages.",
    original_price: 220,
    discountPercent: 5,
    images: ["/images/bird/accessories/168a.png"],
    brand: "Amijivdaya",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 8.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 150,
    rating: 4.3,
    reviews: 55,
    detailed_description: `
      <h3>Essential for Your Bird's Hygiene</h3>
      <p>The Amijivdaya Bird Bath provides a clean and safe space for your bird to bathe. Bathing is essential for maintaining healthy feathers and skin. This bath easily clips onto the bars of most bird cages and is made from durable, non-toxic plastic. It's a simple way to promote your bird's well-being and keep them clean and happy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Easy clip-on design for simple installation.</li>
        <li>Provides a safe space for bathing.</li>
        <li>Durable, non-toxic plastic.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Fill with fresh, clean water and clip to the inside of the cage. Clean regularly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh G.", rating: 5, comment: "My bird loves this! He takes a bath every day now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_230.jpg"] },
      { reviewer_name: "Anil R.", rating: 4, comment: "It's good, but it's a bit too small for my cockatiel.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Pooja L.", rating: 4.5, comment: "A solid product. My budgies are very happy with it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_231.jpg"] }
    ],
  },
  {
    id: "PID000169",
    short_name: "M-Pets Cat Litter Mat",
    short_description: "A litter trapping mat with a double-layer design to keep floors clean.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/cat/accessories/169a.png", "/images/cat/accessories/169b.png"],
    brand: "M-Pets",
    weight: { value: 0.6, unit: "kg" },
    package_dimensions: { length: 45.0, width: 30.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 80,
    rating: 4.7,
    reviews: 95,
    detailed_description: `
      <h3>Keep Your Floors Litter-Free</h3>
      <p>The M-Pets Cat Litter Mat is an essential accessory for any cat owner. The unique double-layer honeycomb design traps litter from your cat's paws as they exit the litter box, preventing it from being tracked all over your home. The bottom layer is waterproof, keeping any mess contained. Simply lift the top layer to pour the trapped litter back into the box.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Double-layer honeycomb design traps litter.</li>
        <li>Waterproof bottom layer.</li>
        <li>Easy to clean and maintain.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Shake the mat to remove litter or rinse with water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh V.", rating: 5, comment: "This mat is a game-changer. My floors are so much cleaner now!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_232.jpg"] },
      { reviewer_name: "Ankit L.", rating: 4, comment: "Good, but the litter still gets tracked a little bit.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Divya R.", rating: 5, comment: "Very well-designed and easy to clean. I'm very happy with it.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_233.jpg"] }
    ],
  },
  {
    id: "PID000170",
    short_name: "M-Pets Cat Grooming Glove",
    short_description: "A gentle grooming glove with silicone tips to remove loose hair.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/cat/grooming/170a.png", "/images/cat/grooming/170b.png"],
    brand: "M-Pets",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 2.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 120,
    rating: 4.8,
    reviews: 110,
    detailed_description: `
      <h3>A Simple Solution for Grooming</h3>
      <p>The M-Pets Cat Grooming Glove is a revolutionary tool for removing loose hair and dander from your cat's coat. The soft, flexible silicone tips gently massage your cat while effectively trapping loose fur. It's a great alternative for cats who are scared of traditional brushes. Regular use helps reduce shedding and keeps your cat's coat healthy and shiny.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Gentle silicone tips are comfortable for your cat.</li>
        <li>Effectively removes loose hair and dander.</li>
        <li>Easy to clean and use.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Simply peel the hair off the glove after use. Hand wash with warm, soapy water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh J.", rating: 5, comment: "My cat usually hates being brushed, but she loves this! It's amazing how much hair it gets off.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_234.jpg"] },
      { reviewer_name: "Meena R.", rating: 4.5, comment: "It's good, but it's a bit awkward to use at first.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Anil D.", rating: 5, comment: "A simple and brilliant product. My cats are so much happier now.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_235.jpg"] }
    ],
  },
  {
    id: "PID000171",
    short_name: "Primus Parakeet Food",
    short_description: "A nutritious blend of seeds for parakeets and small birds.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/bird/food/171a.png", "/images/bird/food/171b.png"],
    brand: "Primus Parakeet",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Birds",
    stock: 150,
    rating: 4.5,
    reviews: 80,
    detailed_description: `
      <h3>A Natural and Nutritious Diet</h3>
      <p>Primus Parakeet Food is a carefully selected blend of high-quality seeds to provide a natural and complete diet for your parakeet. The mix includes millet, canary seeds, and oats, which are all rich in essential nutrients that support a healthy plumage and overall vitality. It's a great food that your bird will love to eat and will keep them happy and healthy.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Made from a blend of high-quality seeds.</li>
        <li>Provides essential nutrients for a healthy diet.</li>
        <li>Natural and free from additives.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed daily in conjunction with fresh water. Replenish as needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh G.", rating: 5, comment: "My parakeets love this food. They eat every last seed.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_236.jpg"] },
      { reviewer_name: "Anil R.", rating: 4, comment: "It's good, but there seems to be a lot of wasted shells.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Pooja L.", rating: 4.5, comment: "Good quality seeds. My birds are very happy with this.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_237.jpg"] }
    ],
  },
  {
    id: "PID000172",
    short_name: "Jiya Aviary Bird Cage Cover",
    short_description: "A durable, blackout cover to provide a secure and peaceful resting space.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/bird/accessories/172a.png"],
    brand: "Jiya Aviary",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 80,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>A Restful Night for Your Bird</h3>
      <p>The Jiya Aviary Bird Cage Cover is an essential accessory for your bird's well-being. The blackout material provides a secure and dark environment, which helps your bird get a good night's sleep. It also helps to reduce drafts and provide a sense of security. It's easy to put on and take off and is made from a durable, non-toxic material.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Blackout material for a peaceful sleep.</li>
        <li>Provides a sense of security and reduces drafts.</li>
        <li>Easy to put on and take off.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with mild detergent and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Karan P.", rating: 5, comment: "This cover is fantastic. My birds sleep so much better now.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_238.jpg"] },
      { reviewer_name: "Shreya V.", rating: 4, comment: "It's a good cover, but a bit too large for my small cage.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Akshay S.", rating: 5, comment: "A simple and effective solution. I'm very happy with my purchase.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_239.jpg"] }
    ],
  },
  {
    id: "PID000173",
    short_name: "Naaz Pet World Aquarium Net",
    short_description: "A fine-mesh aquarium net for safely catching fish.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/fish/accessories/173a.png", "/images/fish/accessories/173b.png"],
    brand: "Naaz Pet World",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 30.0, width: 10.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 150,
    rating: 4.6,
    reviews: 45,
    detailed_description: `
      <h3>A Gentle Tool for Fish Handling</h3>
      <p>The Naaz Pet World Aquarium Net is an essential tool for any fish keeper. The fine, soft mesh is gentle on fish scales and fins, ensuring that they are not harmed during transfers. The durable handle provides a secure grip, and the net is available in different sizes to suit your needs. It's a fundamental accessory for routine aquarium maintenance and fish handling.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Fine, soft mesh is gentle on fish.</li>
        <li>Durable handle for a secure grip.</li>
        <li>Essential for aquarium maintenance.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with clean water after each use and hang to dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit D.", rating: 5, comment: "This net is perfect. The mesh is very fine and doesn't harm my fish.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_240.jpg"] },
      { reviewer_name: "Pooja L.", rating: 4, comment: "Good net, but the handle is a bit short for my large tank.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Rohit V.", rating: 4.5, comment: "A solid product that does exactly what it's supposed to.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_241.jpg"] }
    ],
  },
  {
    id: "PID000174",
    short_name: "Pond Master Test Strips",
    short_description: "Water test strips to quickly and accurately check pond and aquarium water quality.",
    original_price: 350,
    discountPercent: 5,
    images: ["/images/fish/health/174a.png"],
    brand: "Pond Master",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Fishes",
    stock: 95,
    rating: 4.7,
    reviews: 60,
    detailed_description: `
      <h3>Simple and Accurate Water Testing</h3>
      <p>Pond Master Test Strips are a convenient way to monitor the quality of your aquarium or pond water. Each strip tests for a range of key parameters, including pH, nitrates, and nitrites, giving you a comprehensive overview of your water's health. The easy-to-read color chart provides quick results, so you can take action to keep your fish healthy and happy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Quick and easy to use.</li>
        <li>Tests for multiple water parameters.</li>
        <li>Accurate and reliable results.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Dip the strip in the water for a few seconds, shake off excess water, and compare to the color chart on the bottle.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh S.", rating: 5, comment: "These test strips are so easy to use and give me peace of mind about my tank's water quality.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_242.jpg"] },
      { reviewer_name: "Kavita R.", rating: 4, comment: "Good product, but the colors on the chart are a bit hard to match perfectly.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Manish P.", rating: 5, comment: "A great way to monitor my tank. It's a must-have for any fish owner.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_243.jpg"] }
    ],
  },
  {
    id: "PID000175",
    short_name: "Heads Up For Tails Chicken & Blueberry Sticks",
    short_description: "Soft, chewy sticks with real chicken and blueberries for dogs.",
    original_price: 480,
    discountPercent: 10,
    images: ["/images/dog/food/175a.png", "/images/dog/food/175b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 20.0, width: 10.0, height: 3.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.8,
    reviews: 80,
    detailed_description: `
      <h3>A Healthy and Delicious Snack</h3>
      <p>Heads Up For Tails Chicken & Blueberry Sticks are a wholesome and delicious treat for your dog. Made with real chicken and antioxidant-rich blueberries, these soft, chewy sticks are perfect for training or as a daily snack. They are free from grains, gluten, and artificial additives, ensuring a healthy and natural treat for your best friend.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Made with real chicken and blueberries.</li>
        <li>Soft and chewy texture is easy to eat.</li>
        <li>Rich in antioxidants for a healthy immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, Blueberries, Glycerin, and a blend of natural flavors.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohan V.", rating: 5, comment: "My dog goes crazy for these! I love that they're healthy and made with real ingredients.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_244.jpg"] },
      { reviewer_name: "Meenakshi K.", rating: 4.5, comment: "Good treats, but the bag is a bit small for the price.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "My dog loves the taste and the texture. A fantastic product.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_245.jpg"] }
    ],
  },
  {
    id: "PID000176",
    short_name: "Acana Grasslands Cat Food",
    short_description: "Biologically appropriate, grain-free food with free-range poultry and fish.",
    original_price: 3200,
    discountPercent: 10,
    images: ["/images/cat/food/176a.png", "/images/cat/food/176b.png"],
    brand: "Acana",
    weight: { value: 1.8, unit: "kg" },
    package_dimensions: { length: 26.0, width: 20.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 60,
    rating: 4.9,
    reviews: 130,
    detailed_description: `
      <h3>A Diet That Mirrors a Cat's Natural Instincts</h3>
      <p>Acana Grasslands is a grain-free, protein-rich formula that's made with a variety of free-range poultry, fish, and eggs. It's a biologically appropriate diet that provides a natural and wholesome meal for your cat. The recipe is rich in Omega-3 fatty acids, which promote a healthy, shiny coat. It's free from artificial ingredients and preservatives, ensuring a natural and nutritious meal.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Grain-free formula for sensitive cats.</li>
        <li>Made with a variety of fresh, regional ingredients.</li>
        <li>Rich in Omega-3 for a healthy coat.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Fresh duck, fresh chicken, chicken liver, turkey, eggs, fish, and a blend of lentils, chickpeas, and fresh greens.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya V.", rating: 5, comment: "My cat loves this food and his coat has never looked better. Highly recommend!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_246.jpg"] },
      { reviewer_name: "Ankit K.", rating: 4.5, comment: "It's a bit pricey, but the quality is worth it. My cat is very healthy.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Neha M.", rating: 5, comment: "A fantastic food. I feel good knowing my cat is eating something natural and healthy.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_247.jpg"] }
    ],
  },
  {
    id: "PID000177",
    short_name: "Farmina Vet Life Hypoallergenic",
    short_description: "A specialized diet for dogs with food allergies or intolerances.",
    original_price: 2200,
    discountPercent: 15,
    images: ["/images/dog/food/177a.png", "/images/dog/food/177b.png"],
    brand: "Farmina",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 70,
    rating: 4.9,
    reviews: 100,
    detailed_description: `
      <h3>A Solution for Food Sensitivities</h3>
      <p>Farmina Vet Life Hypoallergenic is a specialized diet formulated to help manage adverse food reactions in dogs. The recipe contains a limited number of novel protein and carbohydrate sources to minimize the risk of allergic reactions. The highly digestible formula is perfect for dogs with sensitive stomachs and skin issues. It's a vet-recommended solution for food allergies and intolerances.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Limited ingredient formula for sensitive dogs.</li>
        <li>Helps manage food allergies and intolerances.</li>
        <li>Supports a healthy skin barrier.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Hydrolyzed Fish Protein, Rice Starch, Fish Oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anil D.", rating: 5, comment: "My vet recommended this for my dog's food allergies, and it's been a miracle. No more itching!", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_248.jpg"] },
      { reviewer_name: "Karan S.", rating: 4.5, comment: "Good food, but the bag is a bit small for the price.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Pooja L.", rating: 5, comment: "My dog loves the taste and he's so much healthier now.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_249.jpg"] }
    ],
  },
  {
    id: "PID000178",
    short_name: "Pawfume Dog Cologne",
    short_description: "A long-lasting, fresh-scented dog cologne for between baths.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/dog/grooming/178a.png"],
    brand: "Pawfume",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>A Fresh Scent for Your Best Friend</h3>
      <p>Pawfume Dog Cologne is a quick and easy way to keep your dog smelling great between baths. The long-lasting, fresh scent neutralizes odors and leaves your dog's coat feeling clean and refreshed. It's a great solution for quick touch-ups or for a simple way to freshen up your dog's coat after a long walk.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Long-lasting, fresh scent.</li>
        <li>Easy-to-use spray bottle.</li>
        <li>Safe for use on dogs and cats.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Mist lightly over your pet's coat, avoiding contact with eyes and face.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh S.", rating: 5, comment: "This smells amazing! My dog smells fresh for days after I use it.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_250.jpg"] },
      { reviewer_name: "Pooja B.", rating: 4, comment: "It's good, but the scent is a bit too strong at first.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Manish P.", rating: 4.5, comment: "A great way to keep my dog smelling good between baths. Very happy with it.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_251.jpg"] }
    ],
  },
  {
    id: "PID000179",
    short_name: "Virbac Allermyl Shampoo",
    short_description: "A soothing shampoo for dogs and cats with sensitive or allergic skin.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/dog/grooming/179a.png", "/images/dog/grooming/179b.png"],
    brand: "Virbac",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.8,
    reviews: 95,
    detailed_description: `
      <h3>A Soothing Solution for Sensitive Skin</h3>
      <p>Virbac Allermyl Shampoo is a veterinary-grade shampoo designed to soothe and cleanse the skin of dogs and cats with allergies and skin irritations. The unique formula helps to restore the skin's barrier function, reduce inflammation, and calm itching. It’s a gentle yet effective solution for a variety of dermatological conditions and is often recommended by veterinarians.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps soothe irritated and inflamed skin.</li>
        <li>Restores skin barrier function.</li>
        <li>Gentle, soap-free formula.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wet coat, apply shampoo, and massage gently. Leave on for 5-10 minutes before rinsing thoroughly. Use as directed by your veterinarian.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohan V.", rating: 5, comment: "My vet recommended this, and it's been a game-changer for my dog's allergies. Her skin is so much better.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_252.jpg"] },
      { reviewer_name: "Meenakshi K.", rating: 4.5, comment: "It works well, but it doesn't lather as much as other shampoos.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "A fantastic product. My dog is finally comfortable.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_253.jpg"] }
    ],
  },
  {
    id: "PID000180",
    short_name: "Pedigree Dentastix",
    short_description: "Chewy dental sticks to help reduce plaque and tartar buildup.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/dog/food/180a.png", "/images/dog/food/180b.png"],
    brand: "Pedigree",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 20.0, width: 10.0, height: 3.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 250,
    rating: 4.7,
    reviews: 180,
    detailed_description: `
      <h3>Keep Your Dog's Teeth Healthy</h3>
      <p>Pedigree Dentastix are a delicious and effective way to promote your dog's dental health. The unique X-shape and chewy texture are scientifically proven to help reduce plaque and tartar buildup by up to 80% when fed daily. They are a low-fat treat that is a great addition to your dog's daily oral care routine.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps reduce plaque and tartar buildup.</li>
        <li>Unique chewy texture for a deep clean.</li>
        <li>Low-fat and delicious taste.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Rice, Wheat Flour, Glycerin, Gelatin, Natural Poultry Flavor, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My dog loves these! Her teeth look so much cleaner now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_254.jpg"] },
      { reviewer_name: "Karan S.", rating: 4.5, comment: "Great for dental health, but my dog finishes it a bit too quickly.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "A must-have for my dog's daily routine. He loves them.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_255.jpg"] }
    ],
  },
  {
    id: "PID000181",
    short_name: "Petstages Crinkle Fish Cat Toy",
    short_description: "A plush, crinkle-filled fish toy to entertain and engage cats.",
    original_price: 250,
    discountPercent: 10,
    images: ["/images/cat/toys/181a.png", "/images/cat/toys/181b.png"],
    brand: "Petstages",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 90,
    detailed_description: `
      <h3>The Sound of Fun</h3>
      <p>The Petstages Crinkle Fish Cat Toy is a simple yet highly engaging toy for your cat. The crinkle sound and soft plush material will entice your cat's natural hunting and pouncing instincts. The compact size is perfect for batting and carrying, providing endless entertainment. It's a great way to satisfy your cat's playful urges and keep them active.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Crinkle sound to attract attention.</li>
        <li>Soft plush texture for cozy playtime.</li>
        <li>Durable stitching for long-lasting use.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Spot clean with a damp cloth if needed. Not machine washable.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "My cat is obsessed with this toy. She loves the crinkle sound.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_256.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "It's a good toy, but it got a bit dirty after a few days.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Kunal S.", rating: 5, comment: "A simple and fun toy. My cat and I both love it.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_257.jpg"] }
    ],
  },
  {
    id: "PID000182",
    short_name: "Groom Professional Oatmeal Shampoo",
    short_description: "A soothing, gentle shampoo for dogs with dry, itchy skin.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/dog/grooming/182a.png", "/images/dog/grooming/182b.png"],
    brand: "Groom Professional",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 22.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.7,
    reviews: 75,
    detailed_description: `
      <h3>Calm and Soothe Your Dog's Skin</h3>
      <p>Groom Professional Oatmeal Shampoo is a gentle and effective solution for dogs with dry, itchy, or sensitive skin. The formula is enriched with colloidal oatmeal, which is known for its soothing properties. It cleanses the coat thoroughly without stripping natural oils, leaving your dog's skin and coat feeling soft, moisturized, and comfortable. It's a great product for routine baths and managing skin irritations.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Enriched with colloidal oatmeal.</li>
        <li>Helps soothe dry, itchy skin.</li>
        <li>Gentle, non-irritating formula.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Dilute 1 part shampoo with 10 parts water. Massage into coat and rinse thoroughly. Follow with conditioner if desired.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohan V.", rating: 5, comment: "This shampoo worked wonders on my dog's dry skin. She's much more comfortable now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_258.jpg"] },
      { reviewer_name: "Meenakshi K.", rating: 4, comment: "Good shampoo, but the scent is a bit too subtle for me.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 5, comment: "A fantastic product for dogs with sensitive skin. Very happy with the results.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_259.jpg"] }
    ],
  },
  {
    id: "PID000183",
    short_name: "Orvis Durable Pet Hammock",
    short_description: "A durable car seat hammock to protect your car from pet hair and dirt.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/dog/accessories/183a.png", "/images/dog/accessories/183b.png"],
    brand: "Orvis",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 30.0, width: 25.0, height: 10.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 60,
    rating: 4.8,
    reviews: 80,
    detailed_description: `
      <h3>Keep Your Car Clean and Your Pet Safe</h3>
      <p>The Orvis Durable Pet Hammock is an essential accessory for any dog owner who loves to travel. The waterproof, tear-resistant material protects your car seats from pet hair, dirt, and spills. The hammock design creates a secure space for your dog to ride in, preventing them from falling to the floor during sudden stops. It's easy to install and remove, making it a convenient solution for road trips.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Waterproof and tear-resistant material.</li>
        <li>Protects car seats from dirt and hair.</li>
        <li>Creates a secure space for your dog.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth or hose off. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh J.", rating: 5, comment: "This hammock is perfect. It keeps my car spotless and my dog is so comfortable.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_260.jpg"] },
      { reviewer_name: "Meena R.", rating: 4.5, comment: "Good quality, but a bit bulky to store when not in use.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Anil D.", rating: 5, comment: "A must-have for any dog owner who takes their dog in the car. It works perfectly.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_261.jpg"] }
    ],
  },
  {
    id: "PID000184",
    short_name: "Captain Zack The Zoom Groom Brush",
    short_description: "A gentle grooming brush with soft rubber bristles for a relaxing massage.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/dog/grooming/184a.png", "/images/dog/grooming/184b.png"],
    brand: "Captain Zack",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.8,
    reviews: 90,
    detailed_description: `
      <h3>A Brush That Your Dog Will Love</h3>
      <p>The Captain Zack The Zoom Groom Brush is a revolutionary grooming tool that makes brushing a pleasure for both you and your pet. The soft, rubber bristles gently massage your dog's skin while effectively removing loose hair and dander. It's perfect for all coat types and can be used on both wet and dry coats. It's a simple way to keep your dog's coat healthy and shiny while providing a relaxing massage.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft rubber bristles for a gentle massage.</li>
        <li>Effectively removes loose hair and dander.</li>
        <li>Can be used on wet or dry coats.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with water to clean. Use a mild soap if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My dog loves being brushed with this! It's so gentle and effective.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_262.jpg"] },
      { reviewer_name: "Saurabh J.", rating: 4.5, comment: "It's a good brush, but the bristles are a bit too soft for my liking.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "A fantastic product. My dog's coat is so much shinier now.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_263.jpg"] }
    ],
  },
  {
    id: "PID000185",
    short_name: "Royal Canin Indoor Adult 27",
    short_description: "A dry food for adult indoor cats with a focus on hairball and weight control.",
    original_price: 1800,
    discountPercent: 10,
    images: ["/images/cat/food/185a.png", "/images/cat/food/185b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 28.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.9,
    reviews: 210,
    detailed_description: `
      <h3>Balanced Nutrition for the Indoor Lifestyle</h3>
      <p>Royal Canin Indoor Adult 27 is a specialized dry food formulated for adult indoor cats. The formula contains a high-quality, highly digestible protein to reduce stool odor and a unique blend of fibers to help manage hairballs. The moderate fat content helps maintain a healthy weight for cats with a less active lifestyle. It's a great food that provides complete and balanced nutrition for your indoor cat.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Reduces stool odor.</li>
        <li>Helps manage hairballs and weight.</li>
        <li>Highly digestible protein for a healthy gut.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated Poultry Protein, Corn, Rice, Animal Fats, Wheat, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "My cat's litter box smells so much better now. This food is a lifesaver!", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_264.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4.5, comment: "Good food, but it's a bit pricey.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Kunal S.", rating: 5, comment: "My cat loves the taste, and it's great for controlling his weight.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_265.jpg"] }
    ],
  },
  {
    id: "PID000186",
    short_name: "Nina Ottosson Dog Smart Puzzle Toy",
    short_description: "An interactive puzzle toy to challenge and engage your dog's mind.",
    original_price: 1200,
    discountPercent: 15,
    images: ["/images/dog/toys/186a.png", "/images/dog/toys/186b.png"],
    brand: "Nina Ottosson",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 25.0, width: 25.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 75,
    rating: 4.9,
    reviews: 110,
    detailed_description: `
      <h3>Engage Their Mind, Not Just Their Body</h3>
      <p>The Nina Ottosson Dog Smart Puzzle Toy is a great way to provide mental stimulation for your dog. It's a level 1 puzzle toy that is perfect for beginners. Simply hide treats under the cones and watch as your dog uses their nose and paws to figure out how to get them. It's a fun and rewarding way to keep your dog's mind sharp and prevent boredom.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Provides mental stimulation and prevents boredom.</li>
        <li>Easy to clean and durable.</li>
        <li>Level 1 puzzle is perfect for beginners.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with warm, soapy water and rinse thoroughly.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Abhishek S.", rating: 5, comment: "My dog loves this puzzle! It keeps him busy for ages.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_266.jpg"] },
      { reviewer_name: "Anjali D.", rating: 4.5, comment: "Good toy, but my dog figured it out a bit too quickly.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Rohit V.", rating: 5, comment: "A fantastic product. It's a great way to bond with my dog.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_267.jpg"] }
    ],
  },
  {
    id: "PID000187",
    short_name: "Orvis ComfortFill-Eco Dog Mattress",
    short_description: "A plush, supportive dog mattress with an eco-friendly fill.",
    original_price: 5500,
    discountPercent: 20,
    images: ["/images/dog/beds/187a.png", "/images/dog/beds/187b.png"],
    brand: "Orvis",
    weight: { value: 6.0, unit: "kg" },
    package_dimensions: { length: 80.0, width: 60.0, height: 15.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Dogs",
    stock: 45,
    rating: 4.9,
    reviews: 120,
    detailed_description: `
      <h3>The Perfect Nap Spot for Your Pet</h3>
      <p>The Orvis ComfortFill-Eco Dog Mattress provides superior comfort and support for your dog. The eco-friendly fill, made from 100% recycled plastic bottles, provides a cushioned and supportive surface that won't flatten over time. The removable, machine-washable cover makes it easy to keep the mattress clean and fresh. It's a great solution for older dogs or those who need extra support for their joints.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Eco-friendly, supportive fill.</li>
        <li>Removable and machine-washable cover.</li>
        <li>Provides superior comfort and support.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Machine wash the cover on a gentle cycle. Tumble dry on low heat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh S.", rating: 5, comment: "My senior dog loves this mattress. It's so supportive and comfortable for him.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_268.jpg"] },
      { reviewer_name: "Kavita R.", rating: 4.5, comment: "Good quality, but it's a bit too large for my small living room.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Manish P.", rating: 5, comment: "A fantastic product. My dog is in heaven on this mattress.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_269.jpg"] }
    ],
  },
  {
    id: "PID000188",
    short_name: "Drools Absolute Salmon Oil",
    short_description: "A natural supplement rich in Omega 3 and 6 for a healthy coat and skin.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/dog/health/188a.png", "/images/dog/health/188b.png"],
    brand: "Drools Absolute",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.8,
    reviews: 110,
    detailed_description: `
      <h3>A Simple Way to Boost Your Dog's Health</h3>
      <p>Drools Absolute Salmon Oil is a natural and effective way to promote your dog's skin and coat health. It's a rich source of Omega 3 and 6 fatty acids, which help to reduce inflammation, soothe dry and itchy skin, and promote a soft and shiny coat. It's also great for supporting joint health and a strong immune system. Simply add a few drops to your dog's food for a simple and effective supplement.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Rich in Omega 3 and 6 fatty acids.</li>
        <li>Promotes a healthy and shiny coat.</li>
        <li>Supports joint and immune health.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add to your dog's food once daily. Consult your veterinarian for dosage recommendations.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja L.", rating: 5, comment: "My dog's coat is so much softer and shinier now. I'm very impressed with this product.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_270.jpg"] },
      { reviewer_name: "Anil R.", rating: 4.5, comment: "Good supplement, and my dog loves the taste.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "A fantastic product. My dog's skin issues are gone.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_271.jpg"] }
    ],
  },
  {
    id: "PID000189",
    short_name: "Trixie Dog Food Bowl",
    short_description: "A durable stainless steel food bowl with a non-slip base.",
    original_price: 320,
    discountPercent: 5,
    images: ["/images/dog/accessories/189a.png", "/images/dog/accessories/189b.png"],
    brand: "Trixie",
    weight: { value: 0.35, unit: "kg" },
    package_dimensions: { length: 20.0, width: 20.0, height: 8.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.7,
    reviews: 100,
    detailed_description: `
      <h3>A Simple and Durable Feeding Solution</h3>
      <p>The Trixie Dog Food Bowl is a practical and hygienic solution for your pet's feeding needs. Made from durable stainless steel, it's rust-resistant, easy to clean, and won't harbor bacteria like plastic bowls can. The non-slip rubber base prevents the bowl from sliding around during mealtime, keeping messes to a minimum. It's a simple, classic, and reliable bowl that will last for years.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, hygienic stainless steel.</li>
        <li>Non-slip rubber base.</li>
        <li>Rust-resistant and easy to clean.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Dishwasher-safe for easy cleaning.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Neha G.", rating: 5, comment: "A solid, well-made bowl. My dog can't tip it over.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_272.jpg"] },
      { reviewer_name: "Saurabh J.", rating: 4, comment: "It's a good bowl, but the sticker was a bit hard to get off.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "A perfect bowl for my dog. It's easy to clean and very sturdy.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_273.jpg"] }
    ],
  },
  {
    id: "PID000190",
    short_name: "Savic Cat Litter Scoop",
    short_description: "A durable plastic scoop for quick and easy litter box cleaning.",
    original_price: 150,
    discountPercent: 5,
    images: ["/images/cat/accessories/190a.png", "/images/cat/accessories/190b.png"],
    brand: "Savic",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 25.0, width: 10.0, height: 3.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 180,
    rating: 4.6,
    reviews: 75,
    detailed_description: `
      <h3>The Essential Tool for Litter Box Maintenance</h3>
      <p>The Savic Cat Litter Scoop is a practical and durable tool for daily litter box cleaning. The large scoop head and wide slots make it easy to sift through litter and remove waste quickly and efficiently. The ergonomic handle provides a comfortable grip, making a messy job simple and hygienic. It's a must-have for any cat owner to keep the litter box clean and fresh.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable plastic construction.</li>
        <li>Wide slots for quick sifting.</li>
        <li>Ergonomic handle for a comfortable grip.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wash with soap and water after each use.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja L.", rating: 5, comment: "This scoop is great! It's so much bigger than my old one and makes cleaning a breeze.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_274.jpg"] },
      { reviewer_name: "Anil R.", rating: 4, comment: "It's a good scoop, but a bit too flimsy for my liking.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 4.5, comment: "A simple and effective product. Very happy with the purchase.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_275.jpg"] }
    ],
  },
  {
    id: "PID000191",
    short_name: "Versele Laga Hamster Nature",
    short_description: "A natural blend of grains, seeds, and nuts for hamsters.",
    original_price: 550,
    discountPercent: 10,
    images: ["/images/small_animal/food/191a.png", "/images/small_animal/food/191b.png"],
    brand: "Versele Laga",
    weight: { value: 0.7, unit: "kg" },
    package_dimensions: { length: 22.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Small Animals",
    stock: 90,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>A Wholesome, Natural Diet</h3>
      <p>Versele Laga Hamster Nature is a diverse, natural blend of high-quality ingredients designed to meet the nutritional needs of hamsters. The mix includes a variety of grains, seeds, nuts, and vegetables, providing a wholesome and palatable diet that your hamster will love. It's a great way to ensure a varied and balanced diet for your small pet, and it also promotes natural foraging behavior.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Natural blend of grains, seeds, and nuts.</li>
        <li>Promotes natural foraging behavior.</li>
        <li>Provides a variety of essential nutrients.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed daily in conjunction with fresh water. Ensure your hamster's diet includes fresh fruits and vegetables as well.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohan V.", rating: 5, comment: "My hamster loves this food. He's so much more active now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_276.jpg"] },
      { reviewer_name: "Meenakshi K.", rating: 4, comment: "It's good, but there's a lot of waste from the shells and empty seeds.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Suresh P.", rating: 4.5, comment: "My hamster is thriving on this food. Very happy with the purchase.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_277.jpg"] }
    ],
  },
  {
    id: "PID000192",
    short_name: "Fluker's Reptile Hammock",
    short_description: "A mesh hammock for reptiles to climb and bask on.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/small_animal/toys/192a.png", "/images/small_animal/toys/192b.png"],
    brand: "Fluker's",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 25.0, width: 25.0, height: 2.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Small Animals",
    stock: 80,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>A Comfortable Basking Spot for Your Reptile</h3>
      <p>The Fluker's Reptile Hammock is a great addition to any reptile enclosure. The mesh hammock provides a comfortable spot for your reptile to climb, rest, and bask. The durable material and suction cups make it easy to install and adjust to fit your enclosure's needs. It's a simple way to add more vertical space and enrichment to your pet's habitat.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, climbable mesh material.</li>
        <li>Suction cups for easy installation.</li>
        <li>Provides an elevated basking spot.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Attach to the side of the enclosure using the included suction cups. Adjust to desired height.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My bearded dragon loves this hammock! He's always on it.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_278.jpg"] },
      { reviewer_name: "Saurabh J.", rating: 4, comment: "Good hammock, but the suction cups don't stick very well to the glass.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "It's a great way to add more space to the terrarium. My gecko loves to climb on it.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_279.jpg"] }
    ],
  },
  {
    id: "PID000193",
    short_name: "Beaphar Multi-Vitamin",
    short_description: "A liquid multi-vitamin supplement for hamsters and other small animals.",
    original_price: 280,
    discountPercent: 5,
    images: ["/images/small_animal/health/193a.png"],
    brand: "Beaphar",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 4.0, height: 4.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Small Animals",
    stock: 75,
    rating: 4.6,
    reviews: 45,
    detailed_description: `
      <h3>Ensure Your Pet Gets All the Vitamins They Need</h3>
      <p>Beaphar Multi-Vitamin is a liquid supplement that ensures your small animal receives a complete and balanced blend of essential vitamins. It's a great way to supplement their diet and promote overall health and vitality. The liquid form is easy to administer and can be added directly to their drinking water. It helps support a strong immune system and a healthy coat, ensuring your pet is happy and healthy.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Provides essential vitamins and minerals.</li>
        <li>Supports a healthy immune system.</li>
        <li>Easy to administer liquid form.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add to your pet's drinking water daily. Consult dosage instructions on the bottle.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit L.", rating: 5, comment: "My hamster is so much more active now. I'm very happy with this supplement.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_280.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "Good product, but the bottle is a bit small for the price.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kunal S.", rating: 4.5, comment: "A solid supplement. It gives me peace of mind about my pet's health.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_281.jpg"] }
    ],
  },
  {
    id: "PID000194",
    short_name: "Trixie Wooden Small Animal Bridge",
    short_description: "A flexible wooden bridge for small animals to climb and hide under.",
    original_price: 220,
    discountPercent: 5,
    images: ["/images/small_animal/accessories/194a.png"],
    brand: "Trixie",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 25.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Small Animals",
    stock: 150,
    rating: 4.7,
    reviews: 55,
    detailed_description: `
      <h3>A Fun and Flexible Accessory</h3>
      <p>The Trixie Wooden Small Animal Bridge is a simple yet versatile accessory for your small pet's enclosure. Made from flexible, natural wood, it can be bent into a variety of shapes to create ramps, tunnels, or hideouts. It's a great way to add more enrichment and climbing opportunities to your pet's habitat. It's completely safe for them to chew on, which also helps with their dental health.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Flexible design for a variety of uses.</li>
        <li>Made from safe, natural wood.</li>
        <li>Promotes climbing and exploration.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Bend into the desired shape and place in the enclosure.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My hamster loves this bridge! It's so fun to watch him climb on it.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/review_282.jpg"] },
      { reviewer_name: "Saurabh J.", rating: 4, comment: "Good product, but the wood splinters a bit from chewing.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "A simple and brilliant addition to my guinea pig's cage.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_283.jpg"] }
    ],
  },
  {
    id: "PID000195",
    short_name: "Ocean Free Super Ich",
    short_description: "A concentrated solution to treat ich and other protozoan diseases in fish.",
    original_price: 250,
    discountPercent: 10,
    images: ["/images/fish/health/195a.png"],
    brand: "Ocean Free",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 12.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Fishes",
    stock: 80,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>A Powerful Treatment for Fish Diseases</h3>
      <p>Ocean Free Super Ich is a highly effective medication for treating ich, white spot disease, and other protozoan diseases in fish. The concentrated formula acts quickly to eliminate the parasites, preventing further spread and discomfort for your fish. It's safe for use in both freshwater and saltwater aquariums and is a must-have for any fish keeper's first-aid kit.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Treats ich and other protozoan diseases.</li>
        <li>Fast-acting concentrated formula.</li>
        <li>Safe for both freshwater and saltwater.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add to your aquarium water as directed. Consult the dosage instructions on the bottle.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Abhishek G.", rating: 5, comment: "This product saved my fish! The ich was gone in a few days.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_284.jpg"] },
      { reviewer_name: "Pooja B.", rating: 4.5, comment: "It works well, but it did stain some of my aquarium decorations.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "A very effective medication. I'm very happy with the results.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_285.jpg"] }
    ],
  },
  {
    id: "PID000196",
    short_name: "Trixie Dog Rope Toy",
    short_description: "A durable cotton rope toy for tugging and chewing.",
    original_price: 1250,
    discountPercent: 50,
    images: ["/images/dog/toys/196a.png", "/images/dog/toys/196b.png"],
    brand: "Trixie",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 30.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.6,
    reviews: 80,
    detailed_description: `
      <h3>A Classic Toy for Playful Dogs</h3>
      <p>The Trixie Dog Rope Toy is a classic and versatile toy for your dog. Made from durable cotton rope, it's perfect for a fun game of tug-of-war. The rope fibers also help to clean your dog's teeth as they chew and play. It's a simple, long-lasting toy that provides hours of interactive fun and helps with dental health.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable cotton rope for tugging and chewing.</li>
        <li>Helps clean teeth and gums.</li>
        <li>Great for interactive play.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Hand wash with warm, soapy water and air dry. Check for frayed ends and remove if necessary.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit D.", rating: 5, comment: "My dog loves this rope. It's very durable and great for tugging.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_286.jpg"] },
      { reviewer_name: "Pooja L.", rating: 4, comment: "Good toy, but it gets dirty pretty quickly.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Rohit V.", rating: 4.5, comment: "A solid toy. My dog is very happy with it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_287.jpg"] }
    ],
  },
  {
    id: "PID000197",
    short_name: "Iams Proactive Health Hairball",
    short_description: "A dry food formulated to help reduce hairball formation in cats.",
    original_price: 1500,
    discountPercent: 10,
    images: ["/images/cat/food/197a.png", "/images/cat/food/197b.png"],
    brand: "Iams",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 95,
    rating: 4.7,
    reviews: 150,
    detailed_description: `
      <h3>A Simple Solution for Hairball Management</h3>
      <p>Iams Proactive Health Hairball Control is a specialized formula designed to help reduce hairball formation in cats. The recipe contains a proprietary fiber blend that helps to gently move hair through your cat's digestive tract, preventing hairballs from forming. It also provides a complete and balanced meal with real chicken as the first ingredient, ensuring your cat gets all the nutrients they need for a healthy life.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps reduce hairball formation.</li>
        <li>Made with real chicken for a great taste.</li>
        <li>Supports a healthy immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, Chicken By-Product Meal, Corn Grits, Ground Whole Grain Corn, Dried Beet Pulp, Fish Oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya S.", rating: 5, comment: "This food has made a huge difference! My cat has so many fewer hairballs now.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_288.jpg"] },
      { reviewer_name: "Ankit K.", rating: 4.5, comment: "My cat loves the taste and it's been great for controlling her hairballs.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Neha M.", rating: 5, comment: "A fantastic product. My cat is so much more comfortable now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_289.jpg"] }
    ],
  },
  {
    id: "PID000198",
    short_name: "M-Pets Cat Carrier",
    short_description: "A durable and ventilated carrier for safe pet travel.",
    original_price: 3800,
    discountPercent: 35,
    images: ["/images/cat/accessories/198a.png", "/images/cat/accessories/198b.png"],
    brand: "M-Pets",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 45.0, width: 30.0, height: 30.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 60,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>Travel Safely and Comfortably</h3>
      <p>The M-Pets Cat Carrier is a reliable and secure way to transport your cat. Made from durable, non-toxic plastic, it provides a safe and comfortable space for your pet. The ventilated sides ensure proper air circulation, and the secure locking mechanism keeps your cat safe during travel. It's a great solution for vet visits, road trips, or simply moving your cat from one place to another.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, non-toxic plastic construction.</li>
        <li>Ventilated sides for proper air circulation.</li>
        <li>Secure locking mechanism.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth or wash with soap and water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali D.", rating: 5, comment: "This carrier is perfect for my cat. It's very sturdy and she feels secure inside.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_290.jpg"] },
      { reviewer_name: "Karan P.", rating: 4, comment: "Good carrier, but it's a bit heavy for me to carry.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Sonia G.", rating: 4.5, comment: "A solid, well-made product. It's essential for vet visits.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_291.jpg"] }
    ],
  },
  {
    id: "PID000199",
    short_name: "DOWSIL Aquarium Silicone",
    short_description: "A professional-grade silicone sealant for building and repairing aquariums.",
    original_price: 550,
    discountPercent: 10,
    images: ["/images/fish/accessories/199a.png", "/images/fish/accessories/199b.png"],
    brand: "DOWSIL",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 20.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 80,
    rating: 4.8,
    reviews: 55,
    detailed_description: `
      <h3>The Essential Sealant for a Watertight Aquarium</h3>
      <p>DOWSIL Aquarium Silicone is a professional-grade sealant that is perfect for building or repairing aquariums. The formula is 100% silicone, so it's non-toxic and completely safe for your fish once it has cured. It creates a strong, watertight seal that will last for years, giving you peace of mind about your aquarium's integrity. It's a must-have for any serious fish keeper.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>100% silicone is non-toxic and safe for fish.</li>
        <li>Creates a strong, watertight seal.</li>
        <li>Easy to apply and cures quickly.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Apply to clean, dry surfaces. Allow to cure completely before adding water and fish. Consult instructions on the tube for proper curing time.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rajiv S.", rating: 5, comment: "This silicone is fantastic! I used it to repair my leaking tank, and it worked perfectly.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_292.jpg"] },
      { reviewer_name: "Anil D.", rating: 4.5, comment: "Good product, but the smell is very strong while it's curing.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Kavita R.", rating: 5, comment: "A great product. My aquarium is leak-proof now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_293.jpg"] }
    ],
  },
  {
    id: "PID000200",
    short_name: "Royal Canin Urinary S/O",
    short_description: "A veterinary diet for cats with lower urinary tract disease.",
    original_price: 2500,
    discountPercent: 0,
    images: ["/images/cat/food/200a.png", "/images/cat/food/200b.png"],
    brand: "Royal Canin",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 25.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 80,
    rating: 4.9,
    reviews: 150,
    detailed_description: `
      <h3>A Targeted Solution for Urinary Health</h3>
      <p>Royal Canin Urinary S/O is a veterinary-exclusive diet formulated to help manage feline lower urinary tract disease. It promotes a urinary environment that is unfavorable for the formation of both struvite and calcium oxalate crystals, which can cause urinary blockages. It is a highly palatable diet that can be fed long-term to help prevent future issues.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps dissolve struvite crystals and stones.</li>
        <li>Reduces the risk of calcium oxalate stone formation.</li>
        <li>Supports urinary health.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Corn Flour, Rice, Dehydrated Poultry Protein, Corn Gluten Meal, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Akshay B.", rating: 5, comment: "My cat's urinary issues are gone! This food is a miracle.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_294.jpg"] },
      { reviewer_name: "Swati P.", rating: 4.5, comment: "Good food, but it's a bit pricey.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Rohit L.", rating: 5, comment: "My vet recommended this, and it has made a huge difference.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_295.jpg"] }
    ],
  },
  {
    id: "PID000201",
    short_name: "Royal Canin Hypoallergenic",
    short_description: "A specialized diet for dogs with food allergies and intolerances.",
    original_price: 2800,
    discountPercent: 0,
    images: ["/images/dog/food/201a.png", "/images/dog/food/201b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 75,
    rating: 4.9,
    reviews: 130,
    detailed_description: `
      <h3>A Targeted Solution for Food Sensitivities</h3>
      <p>Royal Canin Hypoallergenic is a veterinary-exclusive diet formulated to help manage adverse food reactions in dogs. The recipe contains hydrolyzed protein, which is broken down into small components that are less likely to cause an allergic reaction. It's a highly digestible formula that is perfect for dogs with sensitive stomachs and skin issues. It's a trusted solution for food allergies and intolerances.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Hydrolyzed protein to minimize allergic reactions.</li>
        <li>Helps manage food allergies and intolerances.</li>
        <li>Supports a healthy skin barrier.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Rice, Hydrolyzed Soy Protein Isolate, Chicken Fat, Dried Beet Pulp, Fish Oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali S.", rating: 5, comment: "This food has been a lifesaver for my dog's allergies. Her skin is so much better.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_296.jpg"] },
      { reviewer_name: "Karan P.", rating: 4.5, comment: "Good food, but it took a few weeks to see a difference.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "My dog loves the taste and he's so much healthier now. The vet recommended it, and I'm very happy.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_297.jpg"] }
    ],
  },
  {
    id: "PID000202",
    short_name: "Royal Canin Feline Care Nutrition",
    short_description: "A dry food for adult cats that helps maintain a healthy weight.",
    original_price: 1500,
    discountPercent: 10,
    images: ["/images/cat/food/202a.png", "/images/cat/food/202b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 28.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 90,
    rating: 4.8,
    reviews: 180,
    detailed_description: `
      <h3>Weight Control for Your Cat</h3>
      <p>Royal Canin Feline Care Nutrition is a specialized dry food formulated to help adult cats maintain a healthy weight. The low-fat, high-fiber formula helps promote a feeling of fullness, preventing overeating. It also provides a complete and balanced meal with all the essential nutrients your cat needs for a healthy life. It's a great food for cats who are prone to weight gain or need to shed a few pounds.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Low-fat, high-fiber formula.</li>
        <li>Helps maintain a healthy weight.</li>
        <li>Highly palatable for cats.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated Poultry Protein, Corn, Wheat, Corn Gluten Meal, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh S.", rating: 5, comment: "My cat's weight has been stable since I started using this food. It works perfectly.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_298.jpg"] },
      { reviewer_name: "Kavita R.", rating: 4.5, comment: "My cat likes the taste, and it's great for keeping her weight in check.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Manish P.", rating: 5, comment: "A fantastic food. My cat is so much healthier now.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_299.jpg"] }
    ],
  },
  {
    id: "PID000203",
    short_name: "Royal Canin Persian Adult",
    short_description: "A dry food with a special kibble shape for Persian cats.",
    original_price: 2200,
    discountPercent: 10,
    images: ["/images/cat/food/203a.png", "/images/cat/food/203b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 28.0, width: 18.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 85,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>The Perfect Kibble for Persians</h3>
      <p>Royal Canin Persian Adult is a specialized diet formulated for the unique needs of Persian cats. The kibble is almond-shaped, which is easy for Persian cats to grasp and chew with their brachycephalic jaws. The formula is enriched with a variety of nutrients, including Omega 3 and 6 fatty acids, to support a long, luxurious coat. It also helps reduce hairball formation and supports a healthy digestive system.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Almond-shaped kibble for easy chewing.</li>
        <li>Helps support a long, healthy coat.</li>
        <li>Reduces hairball formation.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated Poultry Protein, Rice, Animal Fats, Maize Flour, Vegetable Protein Isolate, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja L.", rating: 5, comment: "My Persian cat loves this food! Her coat is so much softer and shinier now.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/review_300.jpg"] },
      { reviewer_name: "Anil R.", rating: 4.5, comment: "Good food, and the kibble shape is perfect for my cat.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Karan S.", rating: 5, comment: "A fantastic food. My cat is so much healthier now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/review_301.jpg"] }
    ],
  },
  {
    id: "PID000204",
    short_name: "Drools Tuna & Chicken Cat Food",
    short_description: "A delicious and balanced wet food with real tuna and chicken chunks.",
    original_price: 95,
    discountPercent: 5,
    images: ["/images/cat/food/204a.png", "/images/cat/food/204b.png"],
    brand: "Drools",
    weight: { value: 0.085, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 200,
    rating: 4.6,
    reviews: 110,
    detailed_description: `
      <h3>A Taste of Real Meat in Every Bite</h3>
      <p>Drools Tuna & Chicken Wet Cat Food provides a savory and complete meal that your cat will love. Made with real tuna and chicken chunks in a rich gravy, it is a great way to add moisture to your cat's diet and keep them hydrated. It is packed with essential vitamins and minerals to support your cat's overall health and vitality. It's a delicious treat or a complete meal on its own.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Made with real tuna and chicken chunks.</li>
        <li>Provides essential moisture to a cat's diet.</li>
        <li>Rich in vitamins and minerals for overall health.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Tuna, Chicken, Water, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh S.", rating: 5, comment: "My cats go crazy for this wet food. They eat every last bit.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/review_302.jpg"] },
      { reviewer_name: "Kavita R.", rating: 4, comment: "Good food, but the packets are a bit small.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Manish P.", rating: 5, comment: "A great way to treat my cats. They love the taste.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/review_303.jpg"] }
    ],
  },
  {
    id: "PID000204",
    short_name: "Trixie Catnip Spray",
    short_description: "A potent catnip spray to attract and entertain your feline.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/cat/toys/204a.png"],
    brand: "Trixie",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 120,
    rating: 4.6,
    reviews: 88,
    detailed_description: `
      <h3>Instant Excitement for Your Cat</h3>
      <p>The Trixie Catnip Spray is a simple and effective way to make your cat's toys, scratching posts, or beds more appealing. Made with a highly concentrated and natural catnip extract, a few spritzes will encourage playful and exploratory behavior, providing your cat with a burst of energy and fun.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from 100% natural catnip oil.</li>
        <li>Easy to use spray bottle.</li>
        <li>Encourages natural hunting and playing instincts.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Shake well and spray lightly on toys, bedding, or scratching surfaces. Do not spray directly on your cat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aditi S.", rating: 5, comment: "This spray works instantly! My cat went crazy for her old toys again.", date: "2024-08-15T10:00:00Z", images: ["/user_uploads/catnip_review_1.jpg"] },
      { reviewer_name: "Rahul P.", rating: 4, comment: "It's good, but the scent doesn't last as long as I'd hoped.", date: "2024-08-10T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "Finally, a way to make my cat use the scratching post! Highly effective.", date: "2024-08-18T10:00:00Z", images: ["/user_uploads/catnip_review_2.jpg"] }
    ],
  },
  {
    id: "PID000205",
    short_name: "Trixie Cat Cave Bed with Cushion",
    short_description: "A cozy, enclosed bed providing a secure space for rest.",
    original_price: 2100,
    discountPercent: 15,
    images: ["/images/cat/beds/205a.png", "/images/cat/beds/205b.png"],
    brand: "Trixie",
    weight: { value: 0.9, unit: "kg" },
    package_dimensions: { length: 45.0, width: 45.0, height: 35.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Cats",
    stock: 70,
    rating: 4.8,
    reviews: 130,
    detailed_description: `
      <h3>The Ultimate Cat Hideaway</h3>
      <p>This Trixie Cat Cave is perfect for cats who love to burrow and feel secure. The soft plush material and removable cushion provide maximum comfort, while the enclosed design offers a private space for uninterrupted sleep. The non-slip bottom keeps the bed in place, even with the most energetic felines.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft, high-quality plush material.</li>
        <li>Removable, machine-washable cushion.</li>
        <li>Enclosed design for a sense of security.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Cushion is machine washable on a gentle cycle. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit R.", rating: 5, comment: "My cat immediately adopted this bed. She absolutely loves it.", date: "2024-08-12T10:00:00Z", images: ["/user_uploads/cat_bed_review_1.jpg"] },
      { reviewer_name: "Shruti G.", rating: 4.5, comment: "Very well made and cozy. It's a bit smaller than I expected, but my cat fits perfectly.", date: "2024-08-14T10:00:00Z", images: [] },
      { reviewer_name: "Vikram L.", rating: 5, comment: "Perfect for my shy cat. She now has her own little safe space.", date: "2024-08-16T10:00:00Z", images: ["/user_uploads/cat_bed_review_2.jpg"] }
    ],
  },
  {
    id: "PID000206",
    short_name: "Me-O Delite Tuna Cat Food",
    short_description: "A delicious and nutrient-rich tuna recipe for a healthy cat.",
    original_price: 85,
    discountPercent: 5,
    images: ["/images/cat/food/206a.png"],
    brand: "Me-O",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 250,
    rating: 4.7,
    reviews: 110,
    detailed_description: `
      <h3>A Taste Sensation for Your Feline</h3>
      <p>Me-O Delite provides a gourmet meal experience for your cat with real tuna flakes in a savory jelly. This recipe is not only delicious but also packed with essential vitamins and minerals, including Taurine for healthy vision and a blend of omega-3 and omega-6 fatty acids for a shiny coat.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Supports strong bones and teeth.</li>
        <li>Contains Taurine for healthy vision.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Tuna, water, modified starch, gelling agents, taurine, and vitamin blend.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavya P.", rating: 5, comment: "My cat absolutely adores this. She cleans the bowl every time.", date: "2024-08-11T10:00:00Z", images: [] },
      { reviewer_name: "Rohit M.", rating: 4, comment: "My cat likes it, but the consistency is a bit watery.", date: "2024-08-13T10:00:00Z", images: ["/user_uploads/cat_food_review_1.jpg"] },
      { reviewer_name: "Sanjana L.", rating: 5, comment: "Great for a treat or a daily meal. My cat is very happy with it.", date: "2024-08-15T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000207",
    short_name: "Beaphar Cat Calming Spot On",
    short_description: "A calming treatment to reduce anxiety and stress in cats.",
    original_price: 650,
    discountPercent: 15,
    images: ["/images/cat/health/207a.png"],
    brand: "Beaphar",
    weight: { value: 0.015, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Cats",
    stock: 90,
    rating: 4.2,
    reviews: 60,
    detailed_description: `
      <h3>Soothing Relief for Stressed Cats</h3>
      <p>Beaphar Cat Calming Spot On uses natural valerian extract to help calm and reduce problem behavior in cats. It is ideal for use during stressful situations such as thunderstorms, travel, fireworks, or vet visits. The effect is gentle and helps your cat feel more at ease.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps reduce anxiety and stress.</li>
        <li>Easy to apply 'spot-on' treatment.</li>
        <li>Natural and drug-free solution.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Apply one pipette of the liquid between the cat's ears once a week. The full effect is seen within one hour of application.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anamika D.", rating: 5, comment: "This helped my cat immensely during a thunderstorm. She was much calmer than usual.", date: "2024-08-17T10:00:00Z", images: [] },
      { reviewer_name: "Chirag S.", rating: 3.5, comment: "Didn't seem to have much effect on my cat, unfortunately. Might work for others.", date: "2024-08-12T10:00:00Z", images: [] },
      { reviewer_name: "Pooja K.", rating: 4, comment: "It works, but the smell is a bit strong. I'm glad my cat is less stressed though.", date: "2024-08-14T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000208",
    short_name: "FOFOS Cat Collar with Bell",
    short_description: "Adjustable, lightweight collar with a safety release and cute bell.",
    original_price: 180,
    discountPercent: 0,
    images: ["/images/cat/accessories/208a.png", "/images/cat/accessories/208b.png"],
    brand: "FOFOS",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 200,
    rating: 4.5,
    reviews: 95,
    detailed_description: `
      <h3>Stylish and Safe for Your Feline</h3>
      <p>This FOFOS Cat Collar is designed with both style and safety in mind. The adjustable strap ensures a perfect fit, and the quick-release safety buckle prevents your cat from getting stuck if the collar catches on something. The small, pleasant-sounding bell helps you keep track of your cat's whereabouts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Adjustable and comfortable fit.</li>
        <li>Safety buckle for quick release.</li>
        <li>Attached bell to help locate your cat.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shraddha M.", rating: 5, comment: "The best collar I've bought. The safety clasp is a big relief.", date: "2024-08-18T10:00:00Z", images: ["/user_uploads/cat_collar_review_1.jpg"] },
      { reviewer_name: "Karan T.", rating: 4, comment: "Cute collar, but my cat managed to lose the bell after a few days.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Anjali G.", rating: 5, comment: "Love the design and the safety feature. Fits my cat perfectly.", date: "2024-08-17T10:00:00Z", images: ["/user_uploads/cat_collar_review_2.jpg"] }
    ],
  },
  {
    id: "PID000209",
    short_name: "Liveonce Bird Cage with Stand",
    short_description: "A spacious and modern cage for small to medium-sized birds.",
    original_price: 3200,
    discountPercent: 10,
    images: ["/images/bird/homes/209a.png", "/images/bird/homes/209b.png"],
    brand: "Liveonce",
    weight: { value: 4.5, unit: "kg" },
    package_dimensions: { length: 70.0, width: 45.0, height: 90.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Birds",
    stock: 35,
    rating: 4.7,
    reviews: 25,
    detailed_description: `
      <h3>A Comfortable Home for Your Feathered Friend</h3>
      <p>The Liveonce Bird Cage with Stand provides a secure and comfortable living space for your bird. The durable metal construction, pull-out tray for easy cleaning, and included perches and food bowls make it a practical and functional choice. The stand adds height and mobility, allowing you to move the cage easily around your home.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Spacious design for flight and play.</li>
        <li>Easy to clean with a removable tray.</li>
        <li>Comes with perches, food bowls, and a stand.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Some assembly required. Instructions are included in the box.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh R.", rating: 5, comment: "This cage is perfect for my budgies. They have so much space to fly and play.", date: "2024-08-19T10:00:00Z", images: ["/user_uploads/bird_cage_review_1.jpg"] },
      { reviewer_name: "Deepak S.", rating: 4, comment: "Good cage, but the assembly instructions could be clearer.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Manish K.", rating: 5, comment: "Very sturdy and looks great. My bird is happy in his new home.", date: "2024-08-17T10:00:00Z", images: ["/user_uploads/bird_cage_review_2.jpg"] }
    ],
  },
  {
    id: "PID000210",
    short_name: "Vetafarm Avian Vitamin Supplement",
    short_description: "A water-soluble vitamin and mineral supplement for all birds.",
    original_price: 450,
    discountPercent: 5,
    images: ["/images/bird/health/210a.png"],
    brand: "Vetafarm",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Birds",
    stock: 80,
    rating: 4.8,
    reviews: 40,
    detailed_description: `
      <h3>Essential Boost for Bird Health</h3>
      <p>Vetafarm Avian Vitamin Supplement is designed to provide a comprehensive range of vitamins and minerals essential for the health of your bird. It is particularly useful for birds on a seed-only diet. Simply add it to their drinking water to ensure they receive a balanced diet and to support their immune system, feather quality, and overall vitality.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Water-soluble for easy administration.</li>
        <li>Boosts immune system and energy levels.</li>
        <li>Promotes healthy feathers and beak.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add 1ml (or 10 drops) per 100ml of drinking water. Change water daily.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Geeta P.", rating: 5, comment: "My bird's energy levels have gone up since I started using this. Highly recommend.", date: "2024-08-20T10:00:00Z", images: [] },
      { reviewer_name: "Pooja R.", rating: 4.5, comment: "Easy to use and seems to be working well. My bird's feathers are looking great.", date: "2024-08-16T10:00:00Z", images: [] },
      { reviewer_name: "Anil K.", rating: 5, comment: "Good product. I feel confident my bird is getting all the vitamins he needs.", date: "2024-08-18T10:00:00Z", images: ["/user_uploads/bird_vitamin_review_1.jpg"] }
    ],
  },
  {
    id: "PID000211",
    short_name: "Tetra Goldfish Flakes",
    short_description: "Nutritious flake food for all goldfish.",
    original_price: 180,
    discountPercent: 0,
    images: ["/images/fish/food/211a.png"],
    brand: "Tetra",
    weight: { value: 0.03, unit: "kg" },
    package_dimensions: { length: 8.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 250,
    rating: 4.6,
    reviews: 120,
    detailed_description: `
      <h3>Balanced Diet for Bright Goldfish</h3>
      <p>Tetra Goldfish Flakes provide a complete and balanced diet for all goldfish varieties. The formula is rich in essential nutrients, vitamins, and minerals to support health, vitality, and beautiful color. The flakes are designed to float, preventing digestive upset and making feeding easy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Scientifically formulated for goldfish.</li>
        <li>Highly digestible for clear water.</li>
        <li>Boosts natural color and immune system.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed 2-3 times daily, using only as much as your fish can consume in a few minutes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sandeep G.", rating: 5, comment: "My goldfish love this food. They've become so vibrant since I started using it.", date: "2024-08-17T10:00:00Z", images: ["/user_uploads/fish_food_review_1.jpg"] },
      { reviewer_name: "Roshni M.", rating: 4, comment: "Good quality, but a bit pricey for the small container.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Varun K.", rating: 5, comment: "Great food. My fish are always eager to eat it.", date: "2024-08-18T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000212",
    short_name: "SYGA 5 in 1 Aquarium Tank Tool Kits Stainless Steel Aquatic Plant Tweezers Scissors Spatula Tool Set",
    short_description: "SYGA 5 in 1 Aquarium Tank Tool Kits Stainless Steel Aquatic Plant Tweezers Scissors Spatula Tool Set Fish Tank Cleaner Accessories Aquascaping Tools Set for Fish Starter Kits- 5 Pcs",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/fish/grooming/212a.png", "/images/fish/grooming/212b.png"],
    brand: "SYGA",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 8.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Fishes",
    stock: 60,
    rating: 4.5,
    reviews: 50,
    detailed_description: `
      <h3>Crystal Clear Water for Your Aquarium</h3>
      <p>The Dophin Fish Tank Filter provides excellent water filtration, keeping your aquarium clean and healthy for your fish. It's easy to install and maintain, with both mechanical and biological filtration to remove debris and harmful toxins. Its compact design is perfect for smaller tanks, and the quiet operation won't disturb your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Effective mechanical and biological filtration.</li>
        <li>Easy to install and maintain.</li>
        <li>Quiet operation.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Attach to the side of the tank using the suction cups provided. Submerge the filter completely in water and plug in.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh P.", rating: 5, comment: "This filter is a game-changer. My tank has never been this clear.", date: "2024-08-19T10:00:00Z", images: ["/user_uploads/fish_filter_review_1.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Good for a small tank. I had to clean the filter media more often than expected though.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Ankit L.", rating: 4.5, comment: "Works great and is very quiet. Happy with the purchase.", date: "2024-08-18T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000213",
    short_name: "Pedigree Chicken & Milk Puppy",
    short_description: "A complete and balanced meal for puppies.",
    original_price: 850,
    discountPercent: 15,
    images: ["/images/dog/food/213a.png", "/images/dog/food/213b.png"],
    brand: "Pedigree",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.7,
    reviews: 180,
    detailed_description: `
      <h3>Nourishment for Growing Pups</h3>
      <p>Pedigree Chicken & Milk Puppy is specially formulated to provide the right nutrition for your growing puppy. It contains the goodness of milk and the protein of chicken to support healthy bone development and muscle growth. The kibbles are perfectly sized for small mouths, making mealtime a joy.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes strong bones and teeth.</li>
        <li>Aids in digestion with natural fibers.</li>
        <li>Supports overall healthy growth.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, milk, cereals, vegetable protein, vitamins, and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arun K.", rating: 5, comment: "My puppy loves this food. She's so healthy and energetic.", date: "2024-08-20T10:00:00Z", images: ["/user_uploads/puppy_food_review_1.jpg"] },
      { reviewer_name: "Smita D.", rating: 4, comment: "Good product, but my puppy seemed to have some gas issues at first. It got better with time.", date: "2024-08-18T10:00:00Z", images: [] },
      { reviewer_name: "Ravi G.", rating: 5, comment: "My vet recommended this. Very happy with the results.", date: "2024-08-21T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000214",
    short_name: "Zolux Hamster Cage",
    short_description: "A colorful, multi-level cage for small animals.",
    original_price: 2500,
    discountPercent: 15,
    images: ["/images/small_animal/homes/214a.png", "/images/small_animal/homes/214b.png"],
    brand: "Zolux",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 45.0, width: 30.0, height: 40.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Small Animals",
    stock: 50,
    rating: 4.6,
    reviews: 40,
    detailed_description: `
      <h3>A Fun Habitat for Your Hamster</h3>
      <p>The Zolux Hamster Cage provides a stimulating and secure environment for your small pet. It features multiple levels, a running wheel, a food bowl, and a water bottle, all within a brightly colored, durable plastic and wire frame. The pull-out tray makes cleaning a breeze, and the secure clips ensure your pet stays safe inside.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Multi-level design for climbing and exploration.</li>
        <li>Includes essential accessories like a wheel and bowl.</li>
        <li>Easy to clean with a removable tray.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Simple assembly required. All parts and instructions are included.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tanya M.", rating: 5, comment: "My hamster loves this cage! The different levels keep him so active.", date: "2024-08-20T10:00:00Z", images: ["/user_uploads/hamster_cage_review_1.jpg"] },
      { reviewer_name: "Vikas L.", rating: 4, comment: "Good cage, but the plastic feels a bit flimsy. My hamster is happy though.", date: "2024-08-18T10:00:00Z", images: [] },
      { reviewer_name: "Sneha G.", rating: 5, comment: "It's a great starter cage. My kids love watching the hamster run on the wheel.", date: "2024-08-22T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000215",
    short_name: "Liveonce Natural Wood Chew Toy",
    short_description: "A natural wooden chew toy to promote dental health for small animals.",
    original_price: 150,
    discountPercent: 0,
    images: ["/images/small_animal/toys/215a.png"],
    brand: "Liveonce",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Small Animals",
    stock: 180,
    rating: 4.9,
    reviews: 65,
    detailed_description: `
      <h3>Safe and Fun for Chewing</h3>
      <p>The Liveonce Natural Wood Chew Toy is an essential accessory for small animals like rabbits and guinea pigs. Chewing on this toy helps keep their teeth trimmed and healthy, preventing overgrowth. Made from untreated, bird-safe wood, it provides a safe and satisfying chewing experience.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from 100% natural, untreated wood.</li>
        <li>Helps maintain healthy teeth.</li>
        <li>Provides a safe outlet for chewing instincts.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Replace when the toy becomes too small to be safe for your pet.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Jatin V.", rating: 5, comment: "My guinea pigs love this. They are always chewing on it.", date: "2024-08-19T10:00:00Z", images: ["/user_uploads/chew_toy_review_1.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4.5, comment: "Good quality, and my rabbit chews it instead of his cage now.", date: "2024-08-21T10:00:00Z", images: [] },
      { reviewer_name: "Neha T.", rating: 5, comment: "A great little toy. Highly recommended for rabbits.", date: "2024-08-23T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000216",
    short_name: "Drools Vet Pro Dog Supplement",
    short_description: "A nutritional supplement for dogs with joint issues.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/dog/health/216a.png"],
    brand: "Drools",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 8.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 95,
    rating: 4.8,
    reviews: 75,
    detailed_description: `
      <h3>Supports Mobility and Joint Health</h3>
      <p>Drools Vet Pro Dog Supplement is specifically formulated to support hip and joint health in dogs, especially for senior pets or large breeds. It contains glucosamine and chondroitin, which help in maintaining cartilage and improving joint flexibility. This supplement is a great way to ensure your dog stays active and comfortable.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Contains Glucosamine and Chondroitin.</li>
        <li>Improves joint flexibility and mobility.</li>
        <li>Aids in reducing joint pain and inflammation.</li>
      </ul>
      <p><strong>Dosage:</strong> <br>Consult your veterinarian for the appropriate dosage based on your dog's weight and condition.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavya M.", rating: 5, comment: "My senior dog moves so much better now. I've noticed a significant improvement in his mobility.", date: "2024-08-21T10:00:00Z", images: ["/user_uploads/dog_joint_review_1.jpg"] },
      { reviewer_name: "Saurabh N.", rating: 4.5, comment: "It took a few weeks to see results, but my dog seems less stiff now.", date: "2024-08-19T10:00:00Z", images: [] },
      { reviewer_name: "Preeti R.", rating: 5, comment: "This has been a lifesaver for my dog. He's back to playing like a puppy.", date: "2024-08-23T10:00:00Z", images: ["/user_uploads/dog_joint_review_2.jpg"] }
    ],
  },
  {
    id: "PID000217",
    short_name: "Whiskas Chicken in Gravy",
    short_description: "A tasty and moist meal for adult cats with real chicken.",
    original_price: 99,
    discountPercent: 5,
    images: ["/images/cat/food/217a.png"],
    brand: "Whiskas",
    weight: { value: 0.085, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 220,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>A Rich, Flavorful Treat</h3>
      <p>Whiskas Chicken in Gravy is a delightful wet food that will tantalize your cat's taste buds. Made with tender chicken chunks in a savory gravy, it provides a complete and balanced meal. The high moisture content also helps support your cat's hydration levels.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes hydration and urinary tract health.</li>
        <li>Provides complete and balanced nutrition.</li>
        <li>Highly palatable for picky eaters.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, gelling agents, taurine, vitamins, and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohan D.", rating: 5, comment: "My cat is in love with this flavor. He never leaves a morsel behind.", date: "2024-08-22T10:00:00Z", images: ["/user_uploads/cat_wet_food_review_1.jpg"] },
      { reviewer_name: "Meena K.", rating: 4.5, comment: "Good quality and my cat enjoys it, but it's a bit messy to serve.", date: "2024-08-20T10:00:00Z", images: [] },
      { reviewer_name: "Sanjay V.", rating: 5, comment: "A perfect meal for my cat. I mix it with her dry food sometimes.", date: "2024-08-24T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000218",
    short_name: "Virbac Allermyl Cat Shampoo",
    short_description: "A medicated shampoo for cats with sensitive or allergy-prone skin.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/cat/grooming/218a.png"],
    brand: "Virbac",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 6.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 75,
    rating: 4.8,
    reviews: 55,
    detailed_description: `
      <h3>Soothe Your Cat's Sensitive Skin</h3>
      <p>Virbac Allermyl Cat Shampoo is a specially formulated dermatological shampoo for cats with sensitive, irritated, or allergy-prone skin. It contains ingredients that soothe and protect the skin barrier while also helping to control bacterial and fungal growth. It leaves your cat's coat soft and clean without causing further irritation.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Hypoallergenic formula.</li>
        <li>Helps restore the skin barrier.</li>
        <li>Controls microbial growth.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Wet the coat thoroughly. Apply the shampoo and massage in gently. Leave on for 5-10 minutes before rinsing thoroughly. Use as directed by your veterinarian.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Simran G.", rating: 5, comment: "This shampoo has done wonders for my cat's irritated skin. The itching has stopped.", date: "2024-08-21T10:00:00Z", images: [] },
      { reviewer_name: "Anuj K.", rating: 4, comment: "It's effective, but the smell is a bit medicinal. My cat doesn't mind it, though.", date: "2024-08-19T10:00:00Z", images: [] },
      { reviewer_name: "Jyoti R.", rating: 5, comment: "My vet recommended this, and it works great. My cat's fur is so soft now.", date: "2024-08-23T10:00:00Z", images: ["/user_uploads/cat_shampoo_review_1.jpg"] }
    ],
  },
  {
    id: "PID000219",
    short_name: "Royal Canin Mini Adult Dog Food",
    short_description: "A balanced diet for small breed adult dogs.",
    original_price: 1800,
    discountPercent: 10,
    images: ["/images/dog/food/219a.png", "/images/dog/food/219b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.7,
    reviews: 140,
    detailed_description: `
      <h3>Tailored Nutrition for Small Breeds</h3>
      <p>Royal Canin Mini Adult is precisely formulated to meet the high energy needs of small breed dogs while also helping to maintain a healthy weight. The kibble is small and easy for mini dogs to chew, and the formula contains L-carnitine to support fat metabolism. It also includes nutrients that support a healthy coat and skin.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>High energy content for active dogs.</li>
        <li>Supports ideal body weight.</li>
        <li>Promotes skin and coat health.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Follow the feeding guide on the package based on your dog's weight and activity level.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Prakash V.", rating: 5, comment: "My Jack Russell loves this. He's full of energy and maintains a healthy weight.", date: "2024-08-22T10:00:00Z", images: ["/user_uploads/dog_food_review_1.jpg"] },
      { reviewer_name: "Geeta S.", rating: 4, comment: "My dog is a bit picky, but he eventually warmed up to this. Good quality food.", date: "2024-08-20T10:00:00Z", images: [] },
      { reviewer_name: "Aditya R.", rating: 5, comment: "Perfect kibble size for my pug. He's thriving on this diet.", date: "2024-08-24T10:00:00Z", images: ["/user_uploads/dog_food_review_2.jpg"] }
    ],
  },
  {
    id: "PID000220",
    short_name: "Savic Cat Litter Box",
    short_description: "A durable and easy-to-clean litter box for cats.",
    original_price: 750,
    discountPercent: 0,
    images: ["/images/cat/accessories/220a.png"],
    brand: "Savic",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 45.0, width: 35.0, height: 15.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 90,
    rating: 4.5,
    reviews: 80,
    detailed_description: `
      <h3>Simple and Effective Cat Hygiene</h3>
      <p>The Savic Cat Litter Box is a classic and reliable solution for your cat's needs. Made from high-quality, durable plastic, it features a raised back to prevent litter scatter and is easy to scoop and clean. Its simple design makes it a practical addition to any cat-friendly home.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High sides to prevent litter mess.</li>
        <li>Durable, easy-to-clean plastic.</li>
        <li>Lightweight and easy to move.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wash with mild soap and water weekly. Replace litter as needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rajesh S.", rating: 5, comment: "This litter box is great. It's bigger than I thought and my cat uses it without any issues.", date: "2024-08-25T10:00:00Z", images: [] },
      { reviewer_name: "Sonali D.", rating: 4, comment: "Good quality, but I wish it had a cover to contain the smell better.", date: "2024-08-22T10:00:00Z", images: [] },
      { reviewer_name: "Gaurav R.", rating: 4.5, comment: "My cat is happy with it, and it's easy for me to clean.", date: "2024-08-24T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000221",
    short_name: "FOFOS Interactive Cat Wand",
    short_description: "A fun feather wand to engage your cat's hunting instincts.",
    original_price: 220,
    discountPercent: 10,
    images: ["/images/cat/toys/221a.png"],
    brand: "FOFOS",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 40.0, width: 5.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 110,
    detailed_description: `
      <h3>Engage Your Cat in Play</h3>
      <p>The FOFOS Interactive Cat Wand is the perfect way to bond with your cat and provide them with essential exercise. The feathers and dangling toy at the end of the flexible wand mimic the movement of prey, activating your cat's natural pouncing and hunting instincts. It's great for active play and helps reduce boredom.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Flexible wand for realistic movement.</li>
        <li>Durable and cat-safe materials.</li>
        <li>Encourages exercise and mental stimulation.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Store away from your cat when not in use to prevent them from chewing on the string.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Priya V.", rating: 5, comment: "This is my cat's favorite toy! We play with it every day.", date: "2024-08-24T10:00:00Z", images: ["/user_uploads/cat_wand_review_1.jpg"] },
      { reviewer_name: "Amit S.", rating: 4, comment: "The feathers came off a bit too quickly, but my cat still loves the toy.", date: "2024-08-21T10:00:00Z", images: [] },
      { reviewer_name: "Divya L.", rating: 5, comment: "Great for interactive play. It really tires my cat out!", date: "2024-08-23T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000222",
    short_name: "NatureNest Wooden Bird Nest",
    short_description: "A natural wooden nest box for breeding birds.",
    original_price: 550,
    discountPercent: 0,
    images: ["/images/bird/homes/222a.png"],
    brand: "NatureNest",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 15.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Birds",
    stock: 40,
    rating: 4.6,
    reviews: 30,
    detailed_description: `
      <h3>A Secure Home for Your Bird's Family</h3>
      <p>The NatureNest Wooden Bird Nest provides a safe and private space for breeding and nesting birds. Made from untreated, natural wood, it offers a comfortable and familiar environment. The hinged lid allows for easy cleaning and inspection, and the metal ring around the entrance protects the wood from gnawing.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from natural, bird-safe wood.</li>
        <li>Hinged lid for easy access.</li>
        <li>Secure and private nesting space.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Mount inside the cage using the provided bracket or hooks.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ritesh K.", rating: 5, comment: "Perfect for my lovebirds. They started using it right away.", date: "2024-08-25T10:00:00Z", images: ["/user_uploads/bird_nest_review_1.jpg"] },
      { reviewer_name: "Anjali S.", rating: 4, comment: "Good quality, but I wish it came with a perch.", date: "2024-08-22T10:00:00Z", images: [] },
      { reviewer_name: "Saurabh P.", rating: 5, comment: "My parakeets love their new nest. It's very well built.", date: "2024-08-24T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000223",
    short_name: "7 in 1 Stainless Steel Rust Resistant Aquarium Aquascaping Plant Tools Kit",
    short_description: "SNOWIE SOFT® 7 in 1 Stainless Steel Rust Resistant Aquarium Aquascaping Plant Tools Kit with Tweezers, Scissors, Scrapers for Aquarium, Clean Fish Tank",
    original_price: 380,
    discountPercent: 0,
    images: ["/images/fish/grooming/223a.png"],
    brand: "SNOWIE SOFT",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 15.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Fishes",
    stock: 70,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>Keep Your Tank Algae-Free</h3>
      <p>Tetra AlgaeControl is a powerful solution for keeping your freshwater aquarium clean and free from unsightly algae. The fast-acting formula works to eliminate green water and other common algae types, helping to maintain a healthy and clear aquatic environment for your fish. It is safe for all freshwater fish and plants when used as directed.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Rapidly clears up green water algae.</li>
        <li>Safe for fish and plants.</li>
        <li>Helps maintain a pristine tank.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add 1ml per 20 liters of water. For best results, use a little every week to prevent algae from coming back.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aman T.", rating: 5, comment: "This is magic in a bottle. My tank was cloudy and now it's crystal clear.", date: "2024-08-26T10:00:00Z", images: ["/user_uploads/algae_control_review_1.jpg"] },
      { reviewer_name: "Sunita G.", rating: 4, comment: "It worked well, but I had to use a bit more than the instructions said.", date: "2024-08-24T10:00:00Z", images: [] },
      { reviewer_name: "Karan L.", rating: 5, comment: "Very effective and the results were fast. I am very happy with this product.", date: "2024-08-27T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000224",
    short_name: "Himalaya Pet Care Dog Shampoo",
    short_description: "Gentle and effective herbal shampoo for dogs.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/dog/grooming/224a.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 18.0, width: 8.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.6,
    reviews: 105,
    detailed_description: `
      <h3>Natural Cleanse for Your Dog's Coat</h3>
      <p>Himalaya Pet Care Dog Shampoo is a gentle, herbal formula designed to cleanse and condition your dog's coat without harsh chemicals. It contains natural ingredients like Neem and Eucalyptus that help to soothe skin irritation, repel fleas and ticks, and leave your dog's coat smelling fresh and clean.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Herbal formula that is gentle on skin.</li>
        <li>Helps to repel fleas and ticks.</li>
        <li>Leaves the coat soft and shiny.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Wet the coat, apply a generous amount of shampoo, and lather well. Rinse thoroughly and towel dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rohit P.", rating: 5, comment: "This shampoo is great! It lathers well and leaves my dog's coat so soft.", date: "2024-08-28T10:00:00Z", images: ["/user_uploads/dog_shampoo_review_1.jpg"] },
      { reviewer_name: "Sonia G.", rating: 4, comment: "Good, but the scent is a bit too strong for me. My dog doesn't seem to mind though.", date: "2024-08-25T10:00:00Z", images: [] },
      { reviewer_name: "Anil V.", rating: 5, comment: "It works well and is very affordable. Happy with the purchase.", date: "2024-08-27T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000225",
    short_name: "KONG SqueakAir Balls",
    short_description: "A combination of tennis ball and squeaker for an exciting game of fetch.",
    original_price: 550,
    discountPercent: 5,
    images: ["/images/dog/toys/225a.png", "/images/dog/toys/225b.png"],
    brand: "KONG",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 200,
    rating: 4.8,
    reviews: 150,
    detailed_description: `
      <h3>The Perfect Fetch Toy</h3>
      <p>KONG SqueakAir Balls are a fantastic twist on a classic toy. Made from non-abrasive tennis ball material that is gentle on teeth and gums, these balls also have an internal squeaker to entice your dog and keep them engaged. The durable construction ensures they last through many games of fetch.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Non-abrasive, felt material.</li>
        <li>Internal squeaker for added fun.</li>
        <li>Durable for long-lasting play.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Prakash V.", rating: 5, comment: "My dog is obsessed with these balls. The squeaker makes him go crazy!", date: "2024-08-29T10:00:00Z", images: ["/user_uploads/squeak_ball_review_1.jpg"] },
      { reviewer_name: "Divya L.", rating: 4, comment: "They are good, but the squeaker didn't last very long with my power chewer.", date: "2024-08-27T10:00:00Z", images: [] },
      { reviewer_name: "Sanjay T.", rating: 5, comment: "Great for fetch. They bounce well and the sound is a bonus.", date: "2024-08-30T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000226",
    short_name: "Virbac Nutri-Plus Gel",
    short_description: "High-calorie dietary supplement for cats and dogs.",
    original_price: 480,
    discountPercent: 0,
    images: ["/images/cat/health/226a.png", "/images/dog/health/226a.png"],
    brand: "Virbac",
    weight: { value: 0.12, unit: "kg" },
    package_dimensions: { length: 18.0, width: 4.0, height: 4.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs & Cats",
    stock: 85,
    rating: 4.7,
    reviews: 90,
    detailed_description: `
      <h3>Nutritional Support for Weak Pets</h3>
      <p>Virbac Nutri-Plus Gel is an easy-to-administer dietary supplement that provides a concentrated source of vitamins, minerals, and energy. It is ideal for young, growing pets, pregnant or lactating animals, or pets recovering from illness. The tasty gel formula ensures easy consumption and quick absorption of nutrients.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>High-calorie formula for energy.</li>
        <li>Rich in essential vitamins and minerals.</li>
        <li>Easily digestible and palatable.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Give 1-2 teaspoons per 5kg of body weight daily. Can be given directly or mixed with food.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavya M.", rating: 5, comment: "My sick cat refused to eat, but she licked this gel right off my finger. It helped her so much.", date: "2024-08-31T10:00:00Z", images: ["/user_uploads/nutri_gel_review_1.jpg"] },
      { reviewer_name: "Anil S.", rating: 4, comment: "Good product, but a bit sticky to handle.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "My vet recommended this for my dog after surgery. It helped her get her strength back.", date: "2024-08-29T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000227",
    short_name: "Sage Square Aquarium Tongs Scissor - Premium Stainless Steel Tools for Aquascaping",
    short_description: "Sage Square Aquarium Tongs Scissor - Premium Stainless Steel Tools for Aquascaping, Fish Tank Maintenance, and Aquatic Plant Care | Wave Curve Scissors, Scaping Tongs.",
    original_price: 8900,
    discountPercent: 15,
    images: ["/images/fish/grooming/227a.png", "/images/fish/grooming/227b.png"],
    brand: "Sage",
    weight: { value: 3.5, unit: "kg" },
    package_dimensions: { length: 30.0, width: 25.0, height: 40.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Fishes",
    stock: 25,
    rating: 4.9,
    reviews: 70,
    detailed_description: `
      <h3>Professional Filtration for Your Aquarium</h3>
      <p>The Fluval Canister Filter is a high-performance external filter designed to provide superior mechanical, biological, and chemical filtration for your aquarium. It is suitable for medium to large tanks, offering powerful water circulation and a multi-stage filtration system that results in exceptionally clean and healthy water. The filter is easy to prime and quiet to operate.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Multi-stage filtration for superior water quality.</li>
        <li>Powerful and quiet operation.</li>
        <li>Suitable for freshwater and saltwater tanks.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Requires a dedicated space outside the aquarium. Follow the detailed instructions provided in the manual for setup.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh M.", rating: 5, comment: "This filter is worth every penny. My large aquarium has never looked better.", date: "2024-08-31T10:00:00Z", images: ["/user_uploads/canister_filter_review_1.jpg"] },
      { reviewer_name: "Ritesh P.", rating: 4.5, comment: "A great filter. It was a bit tricky to set up, but the performance is amazing.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Geeta R.", rating: 5, comment: "My fish are so much more active now. The water is pristine.", date: "2024-08-30T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000228",
    short_name: "Purina ONE Salmon & Tuna",
    short_description: "Real salmon and tuna flavor for a healthy and delicious cat food.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/cat/food/228a.png", "/images/cat/food/228b.png"],
    brand: "Purina",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 115,
    detailed_description: `
      <h3>Nutrition That Supports Visible Health</h3>
      <p>Purina ONE Salmon & Tuna provides a tasty and nutritious meal for your cat. The formula is crafted with real salmon and tuna as the first ingredients, promoting strong muscles and a healthy heart. It also contains Omega 6 fatty acids and Vitamin E to support a lustrous coat and healthy skin.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>High-protein content for strong muscles.</li>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Supports a healthy immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Salmon, tuna, rice, corn gluten meal, vegetable oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aisha N.", rating: 5, comment: "My cat's coat is so shiny now! She loves this food.", date: "2024-08-28T10:00:00Z", images: ["/user_uploads/cat_dry_food_review_1.jpg"] },
      { reviewer_name: "Vivek S.", rating: 4, comment: "Good, but my cat took some time to get used to the flavor.", date: "2024-08-26T10:00:00Z", images: [] },
      { reviewer_name: "Anjali T.", rating: 5, comment: "Great value for money. My cat is thriving on this diet.", date: "2024-08-30T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000229",
    short_name: "Acana Pacifica Cat Food",
    short_description: "Grain-free cat food with rich fish content for a complete diet.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/food/229a.png", "/images/cat/food/229b.png"],
    brand: "Acana",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 85,
    rating: 4.8,
    reviews: 95,
    detailed_description: `
      <h3>Biologically Appropriate Cat Nutrition</h3>
      <p>Acana Pacifica is a premium, grain-free cat food that mirrors the natural diet of felines. It is made with wild-caught fish from the Pacific, including herring, mackerel, and hake. This rich protein-based formula supports strong muscles and a healthy body, while natural Omega-3 fatty acids help maintain a beautiful, healthy coat.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Made with 75% fish ingredients.</li>
        <li>Grain-free to support sensitive stomachs.</li>
        <li>Rich in Omega-3 for skin and coat health.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Mackerel, herring, hake, green peas, chickpeas, red lentils, and natural fish oil.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kunal S.", rating: 5, comment: "The best food I've bought for my cat. His coat is so shiny and his digestion is perfect.", date: "2024-08-29T10:00:00Z", images: ["/user_uploads/acana_cat_food_review_1.jpg"] },
      { reviewer_name: "Neha V.", rating: 4, comment: "My cat loves it, but it's quite expensive. I'll buy it as a special treat.", date: "2024-08-27T10:00:00Z", images: [] },
      { reviewer_name: "Rahul G.", rating: 5, comment: "Great food. My cat is very energetic and healthy on this diet.", date: "2024-08-30T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000230",
    short_name: "Bio-Groom Tear-Free Puppy Shampoo",
    short_description: "Gentle, non-irritating shampoo for young dogs and cats.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/dog/grooming/230a.png", "/images/cat/grooming/230b.png"],
    brand: "Bio-Groom",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 15.0, width: 7.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs & Cats",
    stock: 150,
    rating: 4.8,
    reviews: 80,
    detailed_description: `
      <h3>Safe and Gentle Bath Time for Young Pets</h3>
      <p>Bio-Groom Tear-Free Puppy Shampoo is formulated to be extra gentle on your pet's sensitive eyes and skin. Its mild, coconut-oil-based formula cleanses thoroughly without stripping natural oils, leaving the coat soft, clean, and manageable. The pH-balanced formula is perfect for both puppies and kittens.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Tear-free and non-irritating formula.</li>
        <li>Made with natural coconut oil.</li>
        <li>Leaves coat soft and shiny.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Wet the coat, apply shampoo, and massage into a rich lather. Rinse thoroughly. Safe for frequent use.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Preeti S.", rating: 5, comment: "The best puppy shampoo I've found. No more tears at bath time!", date: "2024-08-27T10:00:00Z", images: ["/user_uploads/puppy_shampoo_review_1.jpg"] },
      { reviewer_name: "Rahul V.", rating: 4, comment: "Works well on my kitten's fur. The bottle could be a bit bigger.", date: "2024-08-25T10:00:00Z", images: [] },
      { reviewer_name: "Divya R.", rating: 5, comment: "I use this on both my puppy and my cat. It works great for both of them.", date: "2024-08-29T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000231",
    short_name: "Wahl Pet Nail Clipper",
    short_description: "Ergonomic and sharp nail clipper for dogs.",
    original_price: 520,
    discountPercent: 10,
    images: ["/images/dog/grooming/231a.png"],
    brand: "Wahl",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 20.0, width: 10.0, height: 3.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>Easy and Safe Nail Trimming</h3>
      <p>The Wahl Pet Nail Clipper is designed to make the nail trimming process safe and stress-free for both you and your dog. The sharp, hardened steel blades provide a clean cut, while the ergonomic, non-slip handle ensures a comfortable and secure grip. It also features a safety guard to prevent over-cutting, giving you peace of mind.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Sharp, stainless steel blades.</li>
        <li>Ergonomic, non-slip handle.</li>
        <li>Safety guard to prevent injury.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Clean the blades after each use and store in a dry place.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sandeep M.", rating: 5, comment: "This clipper is a game-changer. My dog doesn't mind getting his nails trimmed anymore.", date: "2024-08-28T10:00:00Z", images: ["/user_uploads/nail_clipper_review_1.jpg"] },
      { reviewer_name: "Nikhil T.", rating: 4, comment: "Good quality, but the safety guard is a bit tricky to use.", date: "2024-08-26T10:00:00Z", images: [] },
      { reviewer_name: "Pooja K.", rating: 5, comment: "Works perfectly on my dog. The cut is clean and quick.", date: "2024-08-30T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000232",
    short_name: "Acana Grasslands Dog Food",
    short_description: "A grain-free food with lamb, duck, and fish for all life stages.",
    original_price: 3500,
    discountPercent: 15,
    images: ["/images/dog/food/232a.png", "/images/dog/food/232b.png"],
    brand: "Acana",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 70,
    rating: 4.8,
    reviews: 120,
    detailed_description: `
      <h3>Rich in Protein, Low in Carbs</h3>
      <p>Acana Grasslands Dog Food is a biologically appropriate formula designed to nourish your dog with a diverse range of fresh and regional ingredients. The recipe features a rich mix of grass-fed lamb, free-run duck, and wild-caught fish. This grain-free diet is a great choice for dogs with sensitivities and provides all the protein and nutrients they need for a healthy and happy life.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>High-protein, grain-free formula.</li>
        <li>Supports lean muscle mass.</li>
        <li>Promotes healthy skin and coat.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Lamb, duck, fish, chickpeas, lentils, and a blend of fruits and vegetables.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sanjay R.", rating: 5, comment: "My picky dog loves this food! He's healthier and has more energy now.", date: "2024-08-30T10:00:00Z", images: ["/user_uploads/dog_food_review_3.jpg"] },
      { reviewer_name: "Aarti M.", rating: 4.5, comment: "It's a great product, but it is very expensive. I wish it came in a bigger bag.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Harish S.", rating: 5, comment: "My dog's digestion has improved a lot since I switched to this.", date: "2024-08-29T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000233",
    short_name: "KONG Wubba Dog Toy",
    short_description: "Durable nylon toy with two balls and tails for shaking.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/dog/toys/233a.png", "/images/dog/toys/233b.png"],
    brand: "KONG",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.7,
    reviews: 90,
    detailed_description: `
      <h3>The Ultimate Tugging and Tossing Toy</h3>
      <p>The KONG Wubba is a durable and fun toy that is perfect for interactive play. The durable reinforced nylon fabric covers two balls, one tennis ball, and one squeaker ball, making it irresistible for your dog. The long, floppy tails make it easy to pick up, throw, and shake, satisfying your dog's natural instincts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, reinforced nylon fabric.</li>
        <li>Contains a squeaker ball and a tennis ball.</li>
        <li>Perfect for games of fetch and tug-of-war.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Supervise your dog during playtime.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Prakash V.", rating: 5, comment: "My dog loves this! It's super durable and great for tugging.", date: "2024-08-31T10:00:00Z", images: ["/user_uploads/wubba_review_1.jpg"] },
      { reviewer_name: "Divya L.", rating: 4, comment: "The stitching started to come undone after a few weeks, but my dog still plays with it.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Sanjay T.", rating: 5, comment: "Great toy. It's tough and the squeaker is a bonus.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000234",
    short_name: "Himalaya Pet Care Digyton Liquid",
    short_description: "An herbal digestive tonic for dogs and cats.",
    original_price: 280,
    discountPercent: 0,
    images: ["/images/dog/health/234a.png", "/images/cat/health/234a.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs & Cats",
    stock: 120,
    rating: 4.5,
    reviews: 65,
    detailed_description: `
      <h3>Promotes Healthy Digestion</h3>
      <p>Himalaya's Digyton Liquid is a herbal digestive tonic that helps regulate your pet's digestive system. It is effective in managing common digestive issues like indigestion, flatulence, and constipation. The natural ingredients work to improve nutrient absorption and maintain a healthy gut flora, ensuring your pet stays comfortable and healthy.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps with indigestion and flatulence.</li>
        <li>Improves nutrient absorption.</li>
        <li>Made from safe, natural herbs.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Administer as directed by your veterinarian. Can be given directly or mixed with food.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja S.", rating: 5, comment: "My dog's digestion is so much better now. No more gas issues.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Anil K.", rating: 4, comment: "It works well, but my cat is a bit reluctant to take the liquid.", date: "2024-08-26T10:00:00Z", images: [] },
      { reviewer_name: "Simran R.", rating: 5, comment: "This product has been a lifesaver for my dog with a sensitive stomach.", date: "2024-08-29T10:00:00Z", images: ["/user_uploads/digyton_review_1.jpg"] }
    ],
  },
  {
    id: "PID000235",
    short_name: "Fluval Flex Aquarium Kit",
    short_description: "A stylish, modern aquarium with a built-in filter and LED lighting.",
    original_price: 15000,
    discountPercent: 10,
    images: ["/images/fish/beds/235a.png", "/images/fish/beds/235b.png"],
    brand: "Fluval",
    weight: { value: 7.0, unit: "kg" },
    package_dimensions: { length: 45.0, width: 35.0, height: 40.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Fishes",
    stock: 15,
    rating: 4.8,
    reviews: 45,
    detailed_description: `
      <h3>The Perfect Starter Aquarium</h3>
      <p>The Fluval Flex Aquarium Kit offers a contemporary and elegant design with a unique curved front. It includes a powerful 3-stage filtration system hidden in the back compartment, ensuring clean water and a beautiful, unobstructed view of your fish. The remote-controlled LED lighting system allows you to customize the colors and effects, creating a stunning display in any room.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Curved front design for a unique view.</li>
        <li>Built-in 3-stage filtration system.</li>
        <li>Remote-controlled multi-color LED lighting.</li>
      </ul>
      <p><strong>Setup:</strong> <br>All parts and detailed instructions are included for easy setup.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Vivek S.", rating: 5, comment: "This is the best aquarium I've ever owned. The design is beautiful and the built-in filter works great.", date: "2024-08-30T10:00:00Z", images: ["/user_uploads/aquarium_review_1.jpg"] },
      { reviewer_name: "Neha R.", rating: 4.5, comment: "A great all-in-one kit. The remote for the lights is a fantastic feature.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Karan P.", rating: 5, comment: "Perfect for my betta fish. The tank is spacious and the filter is quiet.", date: "2024-08-31T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000236",
    short_name: "Blue Buffalo Wilderness Grain-Free",
    short_description: "A high-protein, grain-free formula inspired by the wolf's diet.",
    original_price: 2800,
    discountPercent: 10,
    images: ["/images/dog/food/236a.png", "/images/dog/food/236b.png"],
    brand: "Blue Buffalo",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.8,
    reviews: 130,
    detailed_description: `
      <h3>Embrace Your Dog's Inner Wolf</h3>
      <p>Blue Buffalo Wilderness is a high-protein, grain-free dog food that satisfies your dog's natural cravings. Made with deboned chicken as the first ingredient, it provides a diet rich in meat and free from grains. It's also packed with Blue's exclusive LifeSource Bits, a precise blend of antioxidants, vitamins, and minerals to support overall health.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>High-protein content for lean muscle.</li>
        <li>Grain-free for dogs with sensitivities.</li>
        <li>Contains antioxidants for a strong immune system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, chicken meal, peas, tapioca starch, potatoes, fish meal, and dried egg product.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sanjay T.", rating: 5, comment: "My dog has a sensitive stomach, and this food has been amazing. No more issues.", date: "2024-08-29T10:00:00Z", images: ["/user_uploads/dog_food_review_4.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4.5, comment: "Great food, but my dog took a little while to get used to the texture.", date: "2024-08-27T10:00:00Z", images: [] },
      { reviewer_name: "Rahul G.", rating: 5, comment: "Very happy with the ingredients. I feel good about what I'm feeding my dog.", date: "2024-08-31T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000237",
    short_name: "Petstages Catnip Chew Toy",
    short_description: "Durable plush toy with catnip for chewing and playing.",
    original_price: 280,
    discountPercent: 5,
    images: ["/images/cat/toys/237a.png"],
    brand: "Petstages",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.6,
    reviews: 80,
    detailed_description: `
      <h3>A Fun and Healthy Chew Toy</h3>
      <p>The Petstages Catnip Chew Toy is a great way to satisfy your cat's chewing instincts while providing them with a burst of catnip-induced fun. The durable fabric and netting help clean teeth as your cat chews, while the light-weight design makes it easy to bat around. The fresh catnip inside will keep your cat coming back for more.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable fabric for chewing.</li>
        <li>Helps clean teeth and gums.</li>
        <li>Filled with fresh catnip.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Spot clean with a damp cloth if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shreya S.", rating: 5, comment: "My cat is obsessed with this toy. It's the only one she hasn't destroyed yet.", date: "2024-08-29T10:00:00Z", images: ["/user_uploads/cat_chew_toy_review_1.jpg"] },
      { reviewer_name: "Vikas M.", rating: 4, comment: "Good, but the catnip scent faded after a few weeks.", date: "2024-08-27T10:00:00Z", images: [] },
      { reviewer_name: "Anjali G.", rating: 5, comment: "My cat is a super chewer, and this toy has held up great.", date: "2024-08-31T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000238",
    short_name: "Himalaya Pet Care Erina Plus Cat Shampoo",
    short_description: "A gentle herbal shampoo for cats with skin issues.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/cat/grooming/238a.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 7.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 90,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>Herbal Cleanse for Healthy Skin and Coat</h3>
      <p>Himalaya Pet Care Erina Plus Cat Shampoo is formulated with a unique blend of natural ingredients to help manage common skin problems in cats. It is effective in treating dandruff and skin allergies, and also helps to repel fleas and ticks. The gentle formula cleanses without causing any irritation, leaving your cat's fur soft and lustrous.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Herbal formula that is gentle on skin.</li>
        <li>Helps to repel fleas and ticks.</li>
        <li>Soothes skin irritation and promotes a healthy coat.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Wet the cat's coat, apply shampoo, and massage gently. Rinse thoroughly and towel dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja D.", rating: 5, comment: "This shampoo has been great for my cat's itchy skin. The natural scent is also a plus.", date: "2024-08-29T10:00:00Z", images: ["/user_uploads/cat_shampoo_review_2.jpg"] },
      { reviewer_name: "Nikhil S.", rating: 4, comment: "Good, but my cat is not a fan of baths. The shampoo itself works well though.", date: "2024-08-26T10:00:00Z", images: [] },
      { reviewer_name: "Anjali M.", rating: 5, comment: "My cat's coat looks amazing after using this. It's so soft and shiny.", date: "2024-08-30T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000239",
    short_name: "Trixie Wooden Bird Perch",
    short_description: "A natural wood perch for small birds.",
    original_price: 150,
    discountPercent: 0,
    images: ["/images/bird/accessories/239a.png"],
    brand: "Trixie",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 20.0, width: 5.0, height: 3.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Birds",
    stock: 200,
    rating: 4.7,
    reviews: 55,
    detailed_description: `
      <h3>A Comfortable and Safe Perching Spot</h3>
      <p>The Trixie Wooden Bird Perch provides a natural and comfortable resting place for your bird. The irregular shape of the wood helps to exercise their feet and prevent foot problems. It is easy to install in any wire cage and is a great way to add a natural element to their environment.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from natural, bird-safe wood.</li>
        <li>Irregular shape to promote foot health.</li>
        <li>Easy to install in any cage.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Secure to the cage bars using the attached metal bolts and washers.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh R.", rating: 5, comment: "My parakeet loves this perch. It's much better than the plastic ones that came with the cage.", date: "2024-08-31T10:00:00Z", images: ["/user_uploads/bird_perch_review_1.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Good quality, but I wish it came in different sizes.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Ankit D.", rating: 5, comment: "Very sturdy and my bird took to it right away.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000240",
    short_name: "Pedigree Chicken & Vegetables",
    short_description: "A delicious, complete, and balanced dry food for adult dogs.",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/dog/food/240a.png", "/images/dog/food/240b.png"],
    brand: "Pedigree",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 180,
    rating: 4.6,
    reviews: 130,
    detailed_description: `
      <h3>Nutritious Meals for Your Dog's Health</h3>
      <p>Pedigree Chicken & Vegetables is a high-quality dry food that provides a complete and balanced diet for adult dogs. Made with real chicken and a blend of vegetables, it is rich in protein and fiber to support strong muscles and a healthy digestive system. The kibbles are designed to promote dental health by reducing plaque and tartar buildup.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Supports strong muscles and bones.</li>
        <li>Aids in healthy digestion.</li>
        <li>Promotes dental health.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, corn, rice, peas, carrots, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sanjay R.", rating: 5, comment: "My dog loves this food and his coat is looking great.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Good food, but the bag is a bit small for the price.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Rahul G.", rating: 5, comment: "My dog is very happy and healthy on this diet.", date: "2024-08-31T10:00:00Z", images: ["/user_uploads/dog_food_review_5.jpg"] }
    ],
  },
  {
    id: "PID000241",
    short_name: "Heads Up For Tails Orthopedic Dog Bed",
    short_description: "A memory foam bed for dogs with joint and muscle pain.",
    original_price: 5500,
    discountPercent: 15,
    images: ["/images/dog/beds/241a.png", "/images/dog/beds/241b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 4.5, unit: "kg" },
    package_dimensions: { length: 80.0, width: 60.0, height: 20.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Dogs",
    stock: 45,
    rating: 4.9,
    reviews: 110,
    detailed_description: `
      <h3>Restful Sleep for Your Senior Dog</h3>
      <p>The Heads Up For Tails Orthopedic Dog Bed is designed to provide maximum comfort and support for your pet. The high-density memory foam contours to your dog's body, relieving pressure on joints and muscles, which is especially beneficial for older dogs or those with arthritis. The removable, machine-washable cover makes it easy to keep clean and fresh.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>High-density memory foam filling.</li>
        <li>Relieves pressure on joints and muscles.</li>
        <li>Removable and machine-washable cover.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Remove the cover and machine wash on a gentle cycle. Tumble dry on low heat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sanjay M.", rating: 5, comment: "This bed has changed my dog's life. He used to be so stiff in the mornings, but not anymore.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/dog_bed_review_1.jpg"] },
      { reviewer_name: "Neha T.", rating: 4.5, comment: "Great quality bed, but it's quite heavy to move around.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Vivek G.", rating: 5, comment: "My vet recommended an orthopedic bed, and I'm so glad I chose this one. My dog loves it.", date: "2024-08-31T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000242",
    short_name: "Petstages Crinkle Fish Cat Toy",
    short_description: "A crinkly, catnip-filled fish toy that crunches and rustles.",
    original_price: 200,
    discountPercent: 0,
    images: ["/images/cat/toys/242a.png"],
    brand: "Petstages",
    weight: { value: 0.04, unit: "kg" },
    package_dimensions: { length: 15.0, width: 8.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 95,
    detailed_description: `
      <h3>Sound and Fun for Your Cat</h3>
      <p>The Petstages Crinkle Fish Cat Toy is a simple but highly effective toy to keep your cat entertained. The crinkle material inside creates a rustling sound that mimics the sound of a mouse, and the catnip scent encourages your cat to pounce and play. The lightweight design makes it easy for your cat to bat around and carry.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Crinkle sound for auditory stimulation.</li>
        <li>Filled with a potent catnip blend.</li>
        <li>Encourages natural hunting instincts.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul S.", rating: 5, comment: "My cat is in love with this toy. She carries it around everywhere and the crinkle sound drives her crazy.", date: "2024-08-30T10:00:00Z", images: ["/user_uploads/cat_toy_review_1.jpg"] },
      { reviewer_name: "Priya V.", rating: 4, comment: "It's a good toy, but the catnip scent faded a bit quickly.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Kunal M.", rating: 5, comment: "My cat is usually not interested in toys, but she loves this one.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000243",
    short_name: "Himalaya Pet Care Dog Paw Balm",
    short_description: "An herbal balm to protect and soothe dry, cracked paws.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/dog/grooming/243a.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 5.0, width: 5.0, height: 3.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.8,
    reviews: 60,
    detailed_description: `
      <h3>Soothe and Protect Sensitive Paws</h3>
      <p>Himalaya's Pet Care Dog Paw Balm is a natural and effective solution for your dog's dry, cracked, and rough paws. It is formulated with natural ingredients that moisturize and soothe the paw pads, protecting them from hot pavements, rough surfaces, and cold weather. The balm is fast-absorbing and safe for your dog to lick.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Moisturizes and soothes dry paws.</li>
        <li>Protects from extreme temperatures and surfaces.</li>
        <li>Made with natural and safe ingredients.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Clean your dog's paws and apply a small amount of balm, massaging it into the paw pads. Use daily or as needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tanya S.", rating: 5, comment: "This balm is a lifesaver for my dog's paws during the summer. They were so cracked and now they're smooth.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/paw_balm_review_1.jpg"] },
      { reviewer_name: "Vivek G.", rating: 4.5, comment: "Good product. It helped with my dog's rough paws after a few uses.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Anjali M.", rating: 5, comment: "Easy to apply and my dog doesn't mind it. It works great.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000244",
    short_name: "Liveonce Bird Stand with Feeder",
    short_description: "A portable stand for birds to play and perch on.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/bird/toys/244a.png"],
    brand: "Liveonce",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 45.0, width: 25.0, height: 15.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Birds",
    stock: 80,
    rating: 4.5,
    reviews: 40,
    detailed_description: `
      <h3>A Fun and Safe Playground for Your Bird</h3>
      <p>The Liveonce Bird Stand provides a dedicated space for your bird to play and exercise outside of their cage. It features a sturdy perch, a swing, and a small food bowl, offering a variety of activities to keep your bird entertained. The stand is lightweight and easy to move, so you can bring your bird with you to different rooms in the house.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Sturdy and stable design.</li>
        <li>Includes a perch, swing, and food bowl.</li>
        <li>Lightweight and portable.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Simple assembly required. Instructions included.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kunal S.", rating: 5, comment: "My cockatiel loves this stand. He spends so much time on it now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/bird_stand_review_1.jpg"] },
      { reviewer_name: "Priya L.", rating: 4, comment: "Good quality, but I wish the food bowl was a bit bigger.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Manoj D.", rating: 5, comment: "It's a great way to let my bird out of his cage safely.", date: "2024-08-31T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000245",
    short_name: "Trixie Dog Raincoat",
    short_description: "A water-resistant raincoat to keep your dog dry on walks.",
    original_price: 750,
    discountPercent: 15,
    images: ["/images/dog/accessories/245a.png", "/images/dog/accessories/245b.png"],
    brand: "Trixie",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 100,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>Stay Dry on Rainy Days</h3>
      <p>The Trixie Dog Raincoat is designed to keep your dog comfortable and dry during wet weather walks. Made from a lightweight, water-resistant material, it provides excellent protection from the rain without restricting your dog's movement. It features a secure and adjustable fit, and a hole for a leash so you can easily attach it to your dog's collar or harness.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Water-resistant material.</li>
        <li>Adjustable straps for a perfect fit.</li>
        <li>Leash opening for convenience.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Hand wash if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh P.", rating: 5, comment: "This raincoat is great! It fits my dog perfectly and keeps him dry.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/dog_raincoat_review_1.jpg"] },
      { reviewer_name: "Priya V.", rating: 4, comment: "Good, but the fit is a bit awkward on my dog.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Ankit D.", rating: 5, comment: "Very happy with this. My dog loves going out in the rain now.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000246",
    short_name: "Blue Buffalo Indoor Cat Food",
    short_description: "A complete and balanced dry food for indoor adult cats.",
    original_price: 1500,
    discountPercent: 10,
    images: ["/images/cat/food/246a.png", "/images/cat/food/246b.png"],
    brand: "Blue Buffalo",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 120,
    rating: 4.7,
    reviews: 90,
    detailed_description: `
      <h3>Nutrition Tailored for Indoor Cats</h3>
      <p>Blue Buffalo Indoor Cat Food is specifically formulated to meet the unique needs of indoor felines. It is crafted with deboned chicken as the first ingredient to provide high-quality protein for strong muscles. The formula also contains a blend of fibers to help control hairball formation and a precise balance of calories to maintain a healthy weight. Like all Blue Buffalo products, it includes the exclusive LifeSource Bits for added vitamins and antioxidants.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Helps control hairballs.</li>
        <li>Supports a healthy weight.</li>
        <li>High-protein content for strong muscles.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, chicken meal, brown rice, barley, pea fiber, chicken fat, and LifeSource Bits.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My indoor cat has been on this food for a year now, and it has really helped with her hairball problem.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/cat_food_review_2.jpg"] },
      { reviewer_name: "Karan S.", rating: 4, comment: "Good food, but my cat is still a bit chubby.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Aditya R.", rating: 5, comment: "My cat loves the taste and I'm happy with the ingredients.", date: "2024-09-02T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000247",
    short_name: "Pawfume Dog Cologne",
    short_description: "A long-lasting, pet-friendly cologne for a fresh scent.",
    original_price: 450,
    discountPercent: 0,
    images: ["/images/dog/grooming/247a.png"],
    brand: "Pawfume",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 15.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>A Fresh Scent for Your Best Friend</h3>
      <p>Pawfume Dog Cologne is a quick and easy way to refresh your dog's coat between baths. The long-lasting, pet-friendly formula neutralizes odors and leaves a pleasant scent without any harsh chemicals or alcohol. It is a great way to keep your dog smelling clean and fresh, perfect for a quick refresh before guests arrive.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Neutralizes and eliminates odors.</li>
        <li>Long-lasting and pleasant scent.</li>
        <li>Safe for dogs, contains no harsh chemicals.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Spray a light mist over your dog's coat, avoiding the eyes and nose. Brush through for an even application.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aisha T.", rating: 5, comment: "This is a lifesaver. My dog smells so good now, especially after a long walk.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Manoj V.", rating: 4, comment: "The smell is nice but it fades a bit quickly. It's good for a quick fix.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Great product! My dog looks and smells like he just came from the groomer.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/dog_cologne_review_1.jpg"] }
    ],
  },
  {
    id: "PID000248",
    short_name: "Petkin Pet Wipes",
    short_description: "Cleansing wipes for dogs and cats for quick cleanups.",
    original_price: 320,
    discountPercent: 5,
    images: ["/images/dog/grooming/248a.png", "/images/cat/grooming/248b.png"],
    brand: "Petkin",
    weight: { value: 0.25, unit: "kg" },
    package_dimensions: { length: 20.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs & Cats",
    stock: 150,
    rating: 4.7,
    reviews: 110,
    detailed_description: `
      <h3>Easy Cleanups On-the-Go</h3>
      <p>Petkin Pet Wipes are a convenient and effective way to clean your dog or cat between baths. The gentle, alcohol-free formula is perfect for cleaning paws, face, ears, and any other part of the body. They are great for removing dirt and odors quickly, making them an essential for travel or a quick refresh after a muddy walk.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Gentle, alcohol-free formula.</li>
        <li>Convenient for quick cleanups.</li>
        <li>Can be used on paws, face, and body.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Wipe your pet's fur and skin gently to remove dirt and odors. Discard after use. Close the lid tightly to keep wipes moist.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia R.", rating: 5, comment: "These are a lifesaver for my dog after his walks. They're so easy to use.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/pet_wipes_review_1.jpg"] },
      { reviewer_name: "Ashish M.", rating: 4, comment: "Good product, but the wipes are a bit thin.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Pooja S.", rating: 5, comment: "My cat is not a fan of baths, so these wipes are perfect for keeping her clean.", date: "2024-09-02T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000249",
    short_name: "DOWSIL Aquarium Sealant",
    short_description: "A high-quality silicone sealant for repairing and building aquariums.",
    original_price: 450,
    discountPercent: 0,
    images: ["/images/fish/accessories/249a.png"],
    brand: "DOWSIL",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 20.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 50,
    rating: 4.8,
    reviews: 35,
    detailed_description: `
      <h3>Create a Watertight Seal for Your Tank</h3>
      <p>DOWSIL Aquarium Sealant is a reliable and safe silicone sealant that is specifically designed for use in aquariums. It is a non-toxic, 100% silicone formula that provides a strong, durable, and watertight seal. It is easy to apply and is safe for all fish and aquatic life once fully cured. Ideal for building new tanks or repairing leaks in existing ones.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Non-toxic and safe for aquatic life.</li>
        <li>Provides a strong and durable seal.</li>
        <li>Easy to apply and use.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Apply to a clean, dry surface. Allow to cure for at least 24 hours before filling the aquarium with water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Arun K.", rating: 5, comment: "This sealant is excellent. It worked perfectly for repairing a leak in my tank.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/sealant_review_1.jpg"] },
      { reviewer_name: "Sonia G.", rating: 4, comment: "Good product, but it has a strong smell while curing.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Rahul M.", rating: 5, comment: "Worked exactly as described. My tank is now leak-free.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000250",
    short_name: "Blue Buffalo Indoor Chicken Recipe",
    short_description: "A healthy, grain-free diet for indoor cats.",
    original_price: 1800,
    discountPercent: 15,
    images: ["/images/cat/food/250a.png", "/images/cat/food/250b.png"],
    brand: "Blue Buffalo",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 90,
    rating: 4.8,
    reviews: 110,
    detailed_description: `
      <h3>Optimal Nutrition for Indoor Cats</h3>
      <p>Blue Buffalo Indoor Chicken Recipe is a delicious and healthy dry food that is specifically formulated for your indoor cat's unique needs. It is made with real chicken as the first ingredient to provide high-quality protein for strong muscles. The formula contains a blend of fibers to help control hairball formation and a precise balance of calories to maintain a healthy weight.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Grain-free for sensitive stomachs.</li>
        <li>Helps control hairballs.</li>
        <li>Supports a healthy weight.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, chicken meal, tapioca starch, peas, potatoes, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh V.", rating: 5, comment: "This food has been great for my cat. She's lost some weight and has more energy.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/cat_food_review_3.jpg"] },
      { reviewer_name: "Pooja D.", rating: 4, comment: "My cat likes it, but it's a bit more expensive than her previous food.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Karan R.", rating: 5, comment: "I'm happy with the ingredients, and my cat loves the taste.", date: "2024-09-02T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000251",
    short_name: "RS ELECTRICAL 50W Submersible Aquarium Immersion Heater",
    short_description: "An adjustable and reliable heater for freshwater and saltwater aquariums.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/fish/accessories/251a.png"],
    brand: "RS ELECTRICAL",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 20.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 60,
    rating: 4.6,
    reviews: 45,
    detailed_description: `
      <h3>Maintain a Stable Temperature for Your Fish</h3>
      <p>The Sunsun Aquarium Heater is an essential accessory for maintaining a consistent and healthy water temperature for your aquatic pets. It is suitable for both freshwater and saltwater tanks and features an easy-to-use temperature control dial. The heater is made with durable, shatter-resistant glass and comes with suction cups for easy installation.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Adjustable temperature control.</li>
        <li>Shatter-resistant glass.</li>
        <li>Suitable for freshwater and saltwater.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Submerge the heater completely in water and attach it to the side of the tank with the provided suction cups. Plug it in after a few minutes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ravi S.", rating: 5, comment: "This heater works great. It keeps my tank at the perfect temperature.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/heater_review_1.jpg"] },
      { reviewer_name: "Meera D.", rating: 4, comment: "Good quality, but the temperature dial is a bit sensitive.", date: "2024-08-31T10:00:00Z", images: [] },
      { reviewer_name: "Vikas P.", rating: 5, comment: "A reliable and affordable heater. Happy with the purchase.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000252",
    short_name: "Drools Vet Pro Dog Food",
    short_description: "A professional-grade diet for adult dogs with specific needs.",
    original_price: 2500,
    discountPercent: 10,
    images: ["/images/dog/food/252a.png", "/images/dog/food/252b.png"],
    brand: "Drools",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 100,
    rating: 4.8,
    reviews: 110,
    detailed_description: `
      <h3>Vet-Recommended Nutrition for Your Dog</h3>
      <p>Drools Vet Pro Dog Food is a specialized diet formulated in collaboration with veterinarians to address specific health concerns in adult dogs. It provides a balanced and complete meal, rich in essential nutrients, that supports healthy digestion, a strong immune system, and overall vitality. It is a great choice for dogs with dietary sensitivities or other specific health requirements.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Supports digestive health.</li>
        <li>Boosts immune system function.</li>
        <li>Provides a complete and balanced diet.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Rice, dehydrated chicken, beet pulp, fish oil, brewer's yeast, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sneha R.", rating: 5, comment: "My dog's digestive issues have cleared up since I switched to this food. It's fantastic.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/vet_pro_review_1.jpg"] },
      { reviewer_name: "Ankit L.", rating: 4.5, comment: "My dog likes it, and I'm happy with the ingredients. It was a bit pricey though.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Divya P.", rating: 5, comment: "My vet recommended this, and I'm very happy with the results.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000253",
    short_name: "KONG Tug Toy",
    short_description: "A durable rubber tug toy with a flexible design for interactive play.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/dog/toys/253a.png"],
    brand: "KONG",
    weight: { value: 0.35, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 130,
    rating: 4.7,
    reviews: 90,
    detailed_description: `
      <h3>A Durable Toy for Tug-of-War</h3>
      <p>The KONG Tug Toy is made from durable, flexible rubber that is perfect for interactive games of tug-of-war. The ergonomic handles provide a comfortable grip for both you and your dog, and the strong material ensures it can withstand even the most enthusiastic pullers. It's a great way to bond with your dog and provide them with a healthy outlet for their energy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, flexible rubber construction.</li>
        <li>Ergonomic handles for a secure grip.</li>
        <li>Ideal for tug-of-war and fetch.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with warm water and a mild detergent. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Gaurav R.", rating: 5, comment: "This is the best tug toy. My dog is a super chewer, and this has held up great.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/tug_toy_review_1.jpg"] },
      { reviewer_name: "Sonia M.", rating: 4.5, comment: "Good quality, but a bit too heavy for my small dog.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Rohit P.", rating: 5, comment: "My dog loves this. It's his favorite toy for playing fetch and tug.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000254",
    short_name: "Iams Proactive Health Adult",
    short_description: "A high-quality dry food for adult cats.",
    original_price: 1200,
    discountPercent: 10,
    images: ["/images/cat/food/254a.png", "/images/cat/food/254b.png"],
    brand: "Iams",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 110,
    rating: 4.6,
    reviews: 95,
    detailed_description: `
      <h3>Complete Nutrition for a Healthy Cat</h3>
      <p>Iams Proactive Health Adult Cat Food provides a balanced and complete diet to support your cat's overall health and wellbeing. Made with real chicken as the first ingredient, it provides high-quality protein for strong muscles. The formula also contains a blend of essential nutrients, including Omega-6 fatty acids for a healthy skin and coat, and a tailored fiber blend to support healthy digestion.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes strong muscles.</li>
        <li>Supports a healthy skin and coat.</li>
        <li>Aids in healthy digestion.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, corn meal, corn grits, dried beet pulp, chicken fat, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali M.", rating: 5, comment: "My cat loves this food. She's so healthy and active now.", date: "2024-09-01T10:00:00Z", images: ["/user_uploads/cat_food_review_4.jpg"] },
      { reviewer_name: "Sanjay K.", rating: 4, comment: "Good quality, but my cat is a bit picky and took some time to get used to it.", date: "2024-08-29T10:00:00Z", images: [] },
      { reviewer_name: "Neha T.", rating: 5, comment: "Very happy with the ingredients. I feel confident about what I'm feeding my cat.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000255",
    short_name: "Petstages Chewy Ring",
    short_description: "A durable chew toy with a unique texture for dental health.",
    original_price: 350,
    discountPercent: 0,
    images: ["/images/cat/toys/255a.png", "/images/dog/toys/255a.png"],
    brand: "Petstages",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs & Cats",
    stock: 120,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>Promote Dental Health with Playtime</h3>
      <p>The Petstages Chewy Ring is a durable toy designed to satisfy your pet's chewing instincts while also promoting dental health. The unique texture of the ring helps to massage gums and clean teeth as your pet chews, helping to remove plaque and tartar buildup. It is a great way to keep your pet's teeth healthy and their breath fresh.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable and safe for chewing.</li>
        <li>Helps clean teeth and massage gums.</li>
        <li>A fun and engaging toy.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wash with warm water and a mild detergent. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Vikas D.", rating: 5, comment: "My dog loves this. He's always chewing on it, and I've noticed his teeth look cleaner.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/chewy_ring_review_1.jpg"] },
      { reviewer_name: "Pooja G.", rating: 4, comment: "Good quality, but my cat is not interested in it.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Ankit M.", rating: 5, comment: "My puppy loves this. It's a great teething toy.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000256",
    short_name: "Liveonce Bird Cage Cover",
    short_description: "A durable and breathable cage cover for birds.",
    original_price: 450,
    discountPercent: 10,
    images: ["/images/bird/homes/256a.png"],
    brand: "Liveonce",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 5.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Birds",
    stock: 70,
    rating: 4.7,
    reviews: 40,
    detailed_description: `
      <h3>A Safe and Secure Sleep Environment</h3>
      <p>The Liveonce Bird Cage Cover is designed to provide your bird with a safe and quiet environment for sleeping. Made from a durable, breathable fabric, it blocks out light and drafts, helping to reduce stress and promote restful sleep. The cover is easy to put on and take off and is a great way to ensure your bird gets the rest it needs.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from a durable, breathable fabric.</li>
        <li>Blocks out light and drafts.</li>
        <li>Promotes restful sleep.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Machine wash on a gentle cycle. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh R.", rating: 5, comment: "This cover is great. My birds are so much calmer at night now.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/cage_cover_review_1.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "It's a good product, but it's a bit too big for my cage.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Ankit L.", rating: 5, comment: "Very happy with this. It's a great way to make sure my birds get enough sleep.", date: "2024-09-02T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000257",
    short_name: "Trixie Cat Collar with Bow Tie",
    short_description: "A stylish and adjustable collar with a cute bow tie.",
    original_price: 950,
    discountPercent: 40,
    images: ["/images/cat/accessories/257a.png"],
    brand: "Trixie",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 12.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 150,
    rating: 4.7,
    reviews: 60,
    detailed_description: `
      <h3>Stylish and Safe for Your Feline Friend</h3>
      <p>This Trixie Cat Collar is the perfect accessory to add a touch of style to your cat's look. The adjustable strap ensures a comfortable and secure fit, while the quick-release safety buckle provides peace of mind. The cute bow tie adds a fun and charming detail, making your cat look even more adorable.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Adjustable and comfortable fit.</li>
        <li>Safety buckle for quick release.</li>
        <li>Stylish bow tie accessory.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shreya M.", rating: 5, comment: "My cat looks so cute in this collar! The quality is great.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/cat_collar_review_3.jpg"] },
      { reviewer_name: "Rohan D.", rating: 4, comment: "It's nice, but the bow tie is a bit big for my kitten.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Anjali P.", rating: 5, comment: "Love this collar. It's stylish and the safety feature is a must-have.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000258",
    short_name: "Petstages Catnip Filled Stick",
    short_description: "A fun catnip stick for batting and chewing.",
    original_price: 180,
    discountPercent: 0,
    images: ["/images/cat/toys/258a.png"],
    brand: "Petstages",
    weight: { value: 0.03, unit: "kg" },
    package_dimensions: { length: 20.0, width: 5.0, height: 3.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 150,
    rating: 4.6,
    reviews: 80,
    detailed_description: `
      <h3>A Simple Toy, Big Fun</h3>
      <p>The Petstages Catnip Filled Stick is a lightweight and simple toy that will keep your cat entertained for hours. The catnip scent is a powerful attractant, encouraging your cat to bat, chew, and play. The soft, pliable design is gentle on their teeth and a great way to provide a healthy outlet for their energy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Filled with a potent catnip blend.</li>
        <li>Lightweight and easy to bat around.</li>
        <li>Encourages active play.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Spot clean with a damp cloth if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My cat is crazy about this stick! She plays with it for hours.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/catnip_stick_review_1.jpg"] },
      { reviewer_name: "Ashish M.", rating: 4, comment: "Good toy, but the scent didn't last as long as I'd hoped.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat is usually not interested in toys, but she loves this one.", date: "2024-09-02T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000259",
    short_name: "Drools Tuna & Salmon Wet Cat Food",
    short_description: "A nutritious wet food with real tuna and salmon chunks.",
    original_price: 110,
    discountPercent: 5,
    images: ["/images/cat/food/259a.png"],
    brand: "Drools",
    weight: { value: 0.085, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 200,
    rating: 4.6,
    reviews: 100,
    detailed_description: `
      <h3>A Delicious and Healthy Meal</h3>
      <p>Drools Tuna & Salmon Wet Cat Food is a delicious and healthy meal that will satisfy your cat's cravings. It is made with real tuna and salmon chunks in a savory gravy, providing a complete and balanced diet. The high moisture content helps to support your cat's hydration levels, and the natural ingredients ensure a healthy and happy cat.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes hydration and urinary tract health.</li>
        <li>Provides a complete and balanced meal.</li>
        <li>Highly palatable for picky eaters.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Tuna, salmon, gelling agents, taurine, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul K.", rating: 5, comment: "My cat loves this food! He eats it all up.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/cat_wet_food_review_2.jpg"] },
      { reviewer_name: "Priya L.", rating: 4, comment: "Good quality, but my cat is a bit fussy with wet food.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Ankit V.", rating: 5, comment: "It's a great product and my cat is very happy with it.", date: "2024-09-02T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000260",
    short_name: "Heads Up For Tails Dog Poop Bag Dispenser",
    short_description: "A stylish and functional dispenser for dog waste bags.",
    original_price: 350,
    discountPercent: 0,
    images: ["/images/dog/accessories/260a.png", "/images/dog/accessories/260b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.7,
    reviews: 60,
    detailed_description: `
      <h3>Walks Just Got More Convenient</h3>
      <p>The Heads Up For Tails Dog Poop Bag Dispenser is a stylish and practical accessory for your daily walks. It is made from durable, lightweight material and easily attaches to your dog's leash or your bag. The dispenser holds a standard roll of poop bags and makes it easy to grab a bag when you need it, ensuring you are always prepared.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable and lightweight design.</li>
        <li>Easy to attach to a leash or bag.</li>
        <li>Holds a standard roll of poop bags.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Insert a roll of poop bags into the dispenser. Pull a bag through the opening when needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Vikas P.", rating: 5, comment: "This is a must-have for dog owners. It's so convenient and well-made.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/poop_bag_review_1.jpg"] },
      { reviewer_name: "Preeti S.", rating: 4, comment: "Good, but the clip feels a bit flimsy.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Rohan D.", rating: 5, comment: "Love the design and it works great. Happy with this purchase.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000261",
    short_name: "Heads Up For Tails Dog Bowls",
    short_description: "A set of durable, stainless steel dog bowls with a stand.",
    original_price: 1200,
    discountPercent: 10,
    images: ["/images/dog/accessories/261a.png", "/images/dog/accessories/261b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 1.0, unit: "kg" },
    package_dimensions: { length: 30.0, width: 15.0, height: 10.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.8,
    reviews: 65,
    detailed_description: `
      <h3>A Stylish and Practical Feeding Solution</h3>
      <p>This set of Heads Up For Tails Dog Bowls provides a durable and hygienic solution for your dog's feeding and watering needs. The stainless steel bowls are easy to clean and resist bacterial growth. The raised stand provides a more comfortable eating position for your dog, which can help with digestion and reduce neck strain. The non-slip feet keep the bowls in place during mealtime.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, food-grade stainless steel bowls.</li>
        <li>Raised stand for a more comfortable eating position.</li>
        <li>Non-slip feet for stability.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Bowls are dishwasher safe. Wipe the stand with a damp cloth.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "These bowls are great. My dog's posture is so much better when he eats now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/dog_bowl_review_1.jpg"] },
      { reviewer_name: "Rahul T.", rating: 4, comment: "Good quality, but the stand is a bit too short for my large dog.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Divya L.", rating: 5, comment: "Love the design and the quality. It's a great addition to our home.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000262",
    short_name: "Drools Focus Super Premium",
    short_description: "A high-quality diet for small breed puppies.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/dog/food/262a.png", "/images/dog/food/262b.png"],
    brand: "Drools",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 120,
    rating: 4.7,
    reviews: 105,
    detailed_description: `
      <h3>Growth and Development for Your Small Pup</h3>
      <p>Drools Focus Super Premium is specially crafted to meet the high energy needs and unique digestive system of small breed puppies. It is packed with a blend of essential nutrients, including DHA to support brain and vision development. The small kibble size is perfect for their small jaws, and the highly digestible formula ensures they get the most out of every meal.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes healthy brain and vision development.</li>
        <li>Aids in healthy digestion.</li>
        <li>Supports strong muscles and bones.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated chicken, rice, corn, chicken fat, fish oil, brewer's yeast, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh V.", rating: 5, comment: "My puppy loves this food! He's growing so well on it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/drools_puppy_review_1.jpg"] },
      { reviewer_name: "Priya P.", rating: 4, comment: "Good quality, but the bag is a bit small.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Ankit L.", rating: 5, comment: "My vet recommended this, and I'm very happy with the results.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000263",
    short_name: "Heads Up For Tails Plush Dog Toy",
    short_description: "A soft and cuddly plush toy for dogs.",
    original_price: 450,
    discountPercent: 5,
    images: ["/images/dog/toys/263a.png", "/images/dog/toys/263b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.6,
    reviews: 80,
    detailed_description: `
      <h3>A Cuddly Companion for Your Dog</h3>
      <p>The Heads Up For Tails Plush Dog Toy is a soft and fun toy that your dog will love to cuddle and play with. It is made from a durable, non-toxic fabric and features a squeaker inside to keep your dog entertained. The lightweight design makes it easy for your dog to carry and toss around, providing hours of fun and comfort.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft and cuddly plush material.</li>
        <li>Internal squeaker for added fun.</li>
        <li>Durable and non-toxic.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Machine wash on a gentle cycle and air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja D.", rating: 5, comment: "My dog loves this toy! He sleeps with it every night.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/plush_toy_review_1.jpg"] },
      { reviewer_name: "Nikhil T.", rating: 4, comment: "The squeaker stopped working after a week, but my dog still loves the toy.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Sonia G.", rating: 5, comment: "Very well-made and my dog is obsessed with it.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000264",
    short_name: "Trixie Cat Grooming Gloves",
    short_description: "A pair of grooming gloves for cats to remove loose hair.",
    original_price: 320,
    discountPercent: 10,
    images: ["/images/cat/grooming/264a.png"],
    brand: "Trixie",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 3.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Cats",
    stock: 100,
    rating: 4.7,
    reviews: 65,
    detailed_description: `
      <h3>Effortless Grooming for Your Cat</h3>
      <p>The Trixie Cat Grooming Gloves are a simple and effective tool for keeping your cat's coat healthy and free of loose hair. The soft, rubber tips gently massage your cat's skin while picking up shedding hair. The gloves are comfortable to wear and make the grooming process a pleasant experience for both you and your feline friend.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Gently removes loose hair.</li>
        <li>Massages and soothes your cat's skin.</li>
        <li>Comfortable and easy to use.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Put the gloves on and gently stroke your cat's fur. The loose hair will stick to the gloves, which can then be easily peeled off and discarded.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali S.", rating: 5, comment: "My cat usually hates being brushed, but she loves these gloves. They work great.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/cat_grooming_review_1.jpg"] },
      { reviewer_name: "Rohan D.", rating: 4, comment: "Good quality, but the hair is a bit hard to remove from the gloves.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Pooja V.", rating: 5, comment: "A simple and effective solution for my cat's shedding.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000265",
    short_name: "Wahl Pet Grooming Scissors",
    short_description: "Sharp, stainless steel scissors for safe and precise pet trimming.",
    original_price: 380,
    discountPercent: 5,
    images: ["/images/dog/grooming/265a.png"],
    brand: "Wahl",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 20.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs & Cats",
    stock: 90,
    rating: 4.6,
    reviews: 50,
    detailed_description: `
      <h3>Precision Trimming for Your Pet</h3>
      <p>The Wahl Pet Grooming Scissors are designed for safe and precise trimming around your pet's face, paws, and ears. The sharp, stainless steel blades provide a clean cut without pulling or tugging, and the rounded tips ensure safety. The ergonomic handles provide a comfortable and secure grip, giving you full control while grooming your pet.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Sharp, stainless steel blades.</li>
        <li>Rounded safety tips.</li>
        <li>Ergonomic handles for a secure grip.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Clean the blades after each use and store in a dry place. Keep out of reach of children and pets.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sameer N.", rating: 5, comment: "These scissors are great for trimming around my dog's eyes. Very precise and safe.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/scissors_review_1.jpg"] },
      { reviewer_name: "Sonia G.", rating: 4, comment: "Good quality, but a bit too small for my hands.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Ravi M.", rating: 5, comment: "I use these on both my dog and my cat. They work great.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000266",
    short_name: "Farmina N&D Quinoa Skin & Coat",
    short_description: "A specialized diet for dogs with skin sensitivities.",
    original_price: 3800,
    discountPercent: 15,
    images: ["/images/dog/health/266a.png", "/images/dog/health/266b.png"],
    brand: "Farmina",
    weight: { value: 2.5, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs",
    stock: 60,
    rating: 4.9,
    reviews: 80,
    detailed_description: `
      <h3>Healthy Skin Starts with a Healthy Diet</h3>
      <p>Farmina N&D Quinoa Skin & Coat is a nutritionally advanced diet designed to support dogs with skin and coat sensitivities. The formula is grain-free and rich in protein from a single animal source, and is fortified with quinoa, a superfood known for its high protein and vitamin content. It also contains Omega-3 and Omega-6 fatty acids to promote a healthy skin barrier and a lustrous coat.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Supports skin health and a shiny coat.</li>
        <li>Grain-free for dogs with sensitivities.</li>
        <li>Rich in essential fatty acids.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Lamb, quinoa, coconut, turmeric, fish oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali S.", rating: 5, comment: "My dog's skin has improved so much since I switched to this food. The itching has stopped.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/skin_coat_review_1.jpg"] },
      { reviewer_name: "Rohit P.", rating: 4.5, comment: "Great food, but it's very expensive. Worth it for my dog's health though.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Divya L.", rating: 5, comment: "My vet recommended this, and it has worked wonders. My dog is so much more comfortable now.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000267",
    short_name: "Heads Up For Tails Pet Carrier",
    short_description: "A comfortable and stylish carrier for small dogs and cats.",
    original_price: 1800,
    discountPercent: 10,
    images: ["/images/dog/accessories/267a.png", "/images/cat/accessories/267a.png"],
    brand: "Heads Up For Tails",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 40.0, width: 25.0, height: 25.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs & Cats",
    stock: 60,
    rating: 4.7,
    reviews: 55,
    detailed_description: `
      <h3>Travel in Comfort and Style</h3>
      <p>The Heads Up For Tails Pet Carrier is designed to make traveling with your small dog or cat easy and stress-free. It is made from a durable, lightweight fabric and features a comfortable handle and an adjustable shoulder strap for easy carrying. The mesh windows provide excellent ventilation and a clear view for your pet, while the soft, removable mat ensures a comfortable ride.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable and lightweight.</li>
        <li>Excellent ventilation.</li>
        <li>Removable and washable mat.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. The mat is machine washable.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "This carrier is great. It's so much easier to travel with my cat now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/pet_carrier_review_1.jpg"] },
      { reviewer_name: "Rahul M.", rating: 4.5, comment: "Good quality, but my dog is a bit too big for it.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Neha T.", rating: 5, comment: "Love the design and it's very practical. My cat seems to enjoy it.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000268",
    short_name: "Farmina N&D Grain-Free Cat Food",
    short_description: "A high-protein, grain-free diet for adult cats.",
    original_price: 1500,
    discountPercent: 15,
    images: ["/images/cat/food/268a.png"],
    brand: "Farmina",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 70,
    rating: 4.8,
    reviews: 90,
    detailed_description: `
      <h3>Superior Nutrition for Your Feline</h3>
      <p>Farmina N&D Grain-Free Cat Food is a nutritionally complete diet that is packed with high-quality animal protein and free from grains. The formula is designed to meet the natural carnivorous needs of cats, supporting strong muscles and a healthy body. It is a great choice for cats with sensitive stomachs or food allergies, and the rich flavor is irresistible to even the pickiest eaters.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Grain-free for sensitive stomachs.</li>
        <li>High-protein content for strong muscles.</li>
        <li>Rich in essential nutrients for overall health.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, dehydrated chicken, sweet potatoes, eggs, fish oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kunal V.", rating: 5, comment: "My cat loves this food! She's so healthy and has a beautiful coat now.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/cat_dry_food_review_5.jpg"] },
      { reviewer_name: "Priya S.", rating: 4, comment: "It's a great product, but it's a bit too expensive for me to buy regularly.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Rohan D.", rating: 5, comment: "My cat with a sensitive stomach is thriving on this food. It's fantastic.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000269",
    short_name: "Trixie Dog Rain Boots",
    short_description: "A set of waterproof boots to protect your dog's paws.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/dog/accessories/269a.png", "/images/dog/accessories/269b.png"],
    brand: "Trixie",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.5,
    reviews: 60,
    detailed_description: `
      <h3>Protect Your Dog's Paws from the Elements</h3>
      <p>The Trixie Dog Rain Boots are a practical solution for protecting your dog's paws from wet, muddy, or hot surfaces. The waterproof material and non-slip sole provide excellent traction and protection, ensuring your dog stays comfortable and safe during walks. The adjustable straps ensure a secure fit, so the boots stay on even with the most playful dogs.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Waterproof material for protection.</li>
        <li>Non-slip sole for excellent traction.</li>
        <li>Adjustable straps for a secure fit.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with water and air dry. Do not machine wash or tumble dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aditya S.", rating: 5, comment: "These boots are great! My dog's paws are no longer muddy after a walk.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/dog_boots_review_1.jpg"] },
      { reviewer_name: "Meena K.", rating: 4, comment: "Good quality, but my dog took some time to get used to wearing them.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Sanjay T.", rating: 5, comment: "They fit my dog perfectly and they stay on. Happy with this purchase.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000270",
    short_name: "Royal Canin Fit 32 Cat Food",
    short_description: "A complete and balanced dry food for moderately active adult cats.",
    original_price: 1500,
    discountPercent: 10,
    images: ["/images/cat/food/270a.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 120,
    detailed_description: `
      <h3>Tailored Nutrition for a Healthy Lifestyle</h3>
      <p>Royal Canin Fit 32 Cat Food is a precisely balanced nutritional formula designed to support the needs of moderately active adult cats. It contains a balance of proteins, fats, and carbohydrates to help maintain a healthy weight. The kibbles are shaped to encourage chewing, which helps support dental hygiene. It also includes essential nutrients to promote a healthy urinary system.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Maintains a healthy weight.</li>
        <li>Supports dental hygiene.</li>
        <li>Promotes a healthy urinary system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated poultry protein, rice, vegetable protein isolate, corn, animal fats, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat is a healthy weight now thanks to this food. She loves the taste too.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/fit_cat_food_review_1.jpg"] },
      { reviewer_name: "Saurabh G.", rating: 4, comment: "Good quality, but the bag is a bit expensive for me to buy regularly.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Ankit P.", rating: 5, comment: "My vet recommended this. Very happy with the results.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000271",
    short_name: "Zolux Hamster Running Wheel",
    short_description: "A silent running wheel for hamsters and other small animals.",
    original_price: 450,
    discountPercent: 0,
    images: ["/images/small_animal/accessories/271a.png"],
    brand: "Zolux",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 15.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Small Animals",
    stock: 120,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>Keep Your Hamster Active and Happy</h3>
      <p>The Zolux Hamster Running Wheel is an essential accessory for keeping your small pet healthy and active. The silent design ensures it won't disturb you or your pet, while the durable plastic construction provides a safe and comfortable surface for running. It is easy to install in any wire cage and is a great way to provide your hamster with the exercise they need to stay healthy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Silent design for a quiet home.</li>
        <li>Durable, pet-safe plastic.</li>
        <li>Promotes exercise and mental stimulation.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Attach to the side of the cage using the provided clip.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavya M.", rating: 5, comment: "My hamster loves this! It's so quiet, I can barely hear him running at night.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/hamster_wheel_review_1.jpg"] },
      { reviewer_name: "Rahul T.", rating: 4, comment: "Good quality, but a bit difficult to attach to the cage.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Divya L.", rating: 5, comment: "Very happy with this. My hamster is much more active now.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000272",
    short_name: "Iams Proactive Health Kitten",
    short_description: "A complete and balanced food for growing kittens.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/cat/food/272a.png", "/images/cat/food/272b.png"],
    brand: "Iams",
    weight: { value: 1.0, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 110,
    detailed_description: `
      <h3>Healthy Start for Your Kitten</h3>
      <p>Iams Proactive Health Kitten Food provides a complete and balanced diet to support the healthy growth and development of your kitten. It is made with high-quality protein from chicken and a blend of essential nutrients, including DHA to support brain and vision development. The small kibble size is perfect for their small mouths, and the highly digestible formula ensures they get the most out of every meal.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Supports healthy brain and vision development.</li>
        <li>Promotes strong muscles and bones.</li>
        <li>Aids in healthy digestion.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, corn meal, corn grits, dried beet pulp, fish oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali S.", rating: 5, comment: "My kitten loves this food. She's so healthy and energetic.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/kitten_food_review_1.jpg"] },
      { reviewer_name: "Karan R.", rating: 4, comment: "Good quality, but my kitten is a bit picky and took some time to get used to it.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Very happy with the ingredients. I feel confident about what I'm feeding my kitten.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000273",
    short_name: "Drools Tuna Flakes in Jelly",
    short_description: "A delicious, complete, and balanced wet food for adult cats.",
    original_price: 99,
    discountPercent: 5,
    images: ["/images/cat/food/273a.png"],
    brand: "Drools",
    weight: { value: 0.085, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 180,
    rating: 4.7,
    reviews: 95,
    detailed_description: `
      <h3>A Tasty and Nutritious Meal</h3>
      <p>Drools Tuna Flakes in Jelly is a delicious and healthy wet food that will satisfy your cat's cravings. It is made with real tuna flakes in a savory jelly, providing a complete and balanced diet. The high moisture content helps to support your cat's hydration levels, and the natural ingredients ensure a healthy and happy cat.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes hydration and urinary tract health.</li>
        <li>Provides a complete and balanced meal.</li>
        <li>Highly palatable for picky eaters.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Tuna, gelling agents, taurine, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Rahul S.", rating: 5, comment: "My cat loves this food! He eats it all up.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/cat_wet_food_review_3.jpg"] },
      { reviewer_name: "Priya V.", rating: 4, comment: "Good quality, but my cat is a bit fussy with wet food.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Ankit L.", rating: 5, comment: "It's a great product and my cat is very happy with it.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000274",
    short_name: "M-Pets Cat Litter Mat",
    short_description: "A mat to trap litter from your cat's paws.",
    original_price: 450,
    discountPercent: 0,
    images: ["/images/cat/accessories/274a.png"],
    brand: "M-Pets",
    weight: { value: 0.5, unit: "kg" },
    package_dimensions: { length: 50.0, width: 40.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 80,
    rating: 4.6,
    reviews: 55,
    detailed_description: `
      <h3>Keep Your Floors Clean</h3>
      <p>The M-Pets Cat Litter Mat is a simple and effective solution for keeping your floors clean from scattered litter. The textured surface of the mat helps to trap litter particles from your cat's paws as they exit the litter box. The mat is easy to clean and is a great way to reduce mess and maintain a tidy home.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Traps litter from cat's paws.</li>
        <li>Easy to clean and maintain.</li>
        <li>Durable and long-lasting.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Shake the mat to remove loose litter. You can also vacuum or rinse it with water.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "This mat is a lifesaver. No more litter all over my floor.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/litter_mat_review_1.jpg"] },
      { reviewer_name: "Vikas D.", rating: 4, comment: "It works well, but it's a bit too small for my large litter box.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Anjali M.", rating: 5, comment: "Very happy with this. It's so much easier to keep the area around the litter box clean.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000275",
    short_name: "Himalaya Pet Care Digyton Liquid",
    short_description: "An herbal digestive tonic for dogs and cats.",
    original_price: 280,
    discountPercent: 0,
    images: ["/images/dog/health/275a.png", "/images/cat/health/275a.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Dogs & Cats",
    stock: 120,
    rating: 4.5,
    reviews: 65,
    detailed_description: `
      <h3>Promotes Healthy Digestion</h3>
      <p>Himalaya's Digyton Liquid is a herbal digestive tonic that helps regulate your pet's digestive system. It is effective in managing common digestive issues like indigestion, flatulence, and constipation. The natural ingredients work to improve nutrient absorption and maintain a healthy gut flora, ensuring your pet stays comfortable and healthy.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps with indigestion and flatulence.</li>
        <li>Improves nutrient absorption.</li>
        <li>Made from safe, natural herbs.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Administer as directed by your veterinarian. Can be given directly or mixed with food.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja S.", rating: 5, comment: "My dog's digestion is so much better now. No more gas issues.", date: "2024-08-28T10:00:00Z", images: [] },
      { reviewer_name: "Anil K.", rating: 4, comment: "It works well, but my cat is a bit reluctant to take the liquid.", date: "2024-08-26T10:00:00Z", images: [] },
      { reviewer_name: "Simran R.", rating: 5, comment: "This product has been a lifesaver for my dog with a sensitive stomach.", date: "2024-08-29T10:00:00Z", images: ["/user_uploads/digyton_review_2.jpg"] }
    ],
  },
  {
    id: "PID000276",
    short_name: "Tetra AquaSafe",
    short_description: "A water conditioner that makes tap water safe for fish.",
    original_price: 250,
    discountPercent: 0,
    images: ["/images/fish/accessories/276a.png"],
    brand: "Tetra",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Fishes",
    stock: 150,
    rating: 4.9,
    reviews: 90,
    detailed_description: `
      <h3>Instant Protection for Your Fish</h3>
      <p>Tetra AquaSafe is an essential water conditioner that instantly neutralizes chlorine and chloramine in tap water, making it safe for your fish. It also contains beneficial ingredients that help protect fish gills and mucus membranes, reducing stress during water changes. It is an easy and effective way to ensure a healthy aquatic environment for your fish.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Neutralizes chlorine and chloramine.</li>
        <li>Protects fish gills and mucus membranes.</li>
        <li>Reduces stress during water changes.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add 5ml per 10 liters of tap water during water changes. Stir to mix and add to the aquarium.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh M.", rating: 5, comment: "This product is a must-have for every fish owner. My fish are so much healthier now.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/aquasafe_review_1.jpg"] },
      { reviewer_name: "Ritesh P.", rating: 4.5, comment: "Good quality, but I wish it came in a bigger bottle.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Geeta R.", rating: 5, comment: "Easy to use and works great. My fish seem so much happier.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000277",
    short_name: "Royal Canin Mini Indoor Adult",
    short_description: "A complete and balanced food for adult small breed dogs.",
    original_price: 1500,
    discountPercent: 10,
    images: ["/images/dog/food/277a.png", "/images/dog/food/277b.png"],
    brand: "Royal Canin",
    weight: { value: 1.5, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Dogs",
    stock: 110,
    rating: 4.8,
    reviews: 100,
    detailed_description: `
      <h3>Nutrition for the Indoor Life</h3>
      <p>Royal Canin Mini Indoor Adult is a specialized diet designed to support the needs of small breed dogs who live primarily indoors. The formula helps to reduce stool odor and volume, while the highly digestible proteins and L-carnitine promote a healthy weight. The kibbles are perfectly sized for small jaws, and the formula is designed to appeal to even the pickiest eaters.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Reduces stool odor and volume.</li>
        <li>Supports a healthy weight.</li>
        <li>Highly palatable formula.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Rice, dehydrated poultry protein, corn, animal fats, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali P.", rating: 5, comment: "This food has been great for my dog. No more smelly poops!", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/dog_food_review_6.jpg"] },
      { reviewer_name: "Karan S.", rating: 4, comment: "My dog is a bit picky, but she eventually started eating it. Good quality food.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Pooja M.", rating: 5, comment: "Very happy with the results. My dog is so healthy and happy.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000278",
    short_name: "Trixie Dog Raincoat",
    short_description: "A stylish raincoat to keep your dog dry on walks.",
    original_price: 850,
    discountPercent: 10,
    images: ["/images/dog/accessories/278a.png"],
    brand: "Trixie",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 90,
    rating: 4.6,
    reviews: 70,
    detailed_description: `
      <h3>Stay Dry on Rainy Days</h3>
      <p>The Trixie Dog Raincoat is designed to keep your dog comfortable and dry during wet weather walks. Made from a lightweight, water-resistant material, it provides excellent protection from the rain without restricting your dog's movement. It features a secure and adjustable fit, and a hole for a leash so you can easily attach it to your dog's collar or harness.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Water-resistant material.</li>
        <li>Adjustable straps for a perfect fit.</li>
        <li>Leash opening for convenience.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. Hand wash if needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh P.", rating: 5, comment: "This raincoat is great! It fits my dog perfectly and keeps him dry.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/dog_raincoat_review_2.jpg"] },
      { reviewer_name: "Priya V.", rating: 4, comment: "Good, but the fit is a bit awkward on my dog.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Ankit D.", rating: 5, comment: "Very happy with this. My dog loves going out in the rain now.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000279",
    short_name: "Heads Up For Tails Squeaky Ball",
    short_description: "A durable and squeaky ball for interactive play.",
    original_price: 350,
    discountPercent: 5,
    images: ["/images/dog/toys/279a.png", "/images/dog/toys/279b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 8.0, width: 8.0, height: 8.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.7,
    reviews: 80,
    detailed_description: `
      <h3>Fetch Just Got More Fun</h3>
      <p>The Heads Up For Tails Squeaky Ball is a fun and durable toy that your dog will love. The tough rubber material is designed to withstand a lot of chewing, while the internal squeaker keeps your dog engaged during playtime. It is perfect for a game of fetch and is a great way to provide your dog with a healthy outlet for their energy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, squeaky rubber material.</li>
        <li>Internal squeaker for added fun.</li>
        <li>Perfect for games of fetch and chewing.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with warm water and a mild detergent. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My dog is obsessed with this ball. He never gets tired of it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/squeaky_ball_review_1.jpg"] },
      { reviewer_name: "Rahul T.", rating: 4, comment: "Good quality, but the squeaker stopped working after a few weeks.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Divya L.", rating: 5, comment: "Great for a game of fetch. It's tough and has held up well.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000280",
    short_name: "Royal Canin Mother & Babycat",
    short_description: "A complete and balanced food for mother cats and kittens.",
    original_price: 2200,
    discountPercent: 10,
    images: ["/images/cat/food/280a.png", "/images/cat/food/280b.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 20.0, height: 10.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 80,
    rating: 4.9,
    reviews: 95,
    detailed_description: `
      <h3>Essential Nutrition for a Healthy Start</h3>
      <p>Royal Canin Mother & Babycat is a specialized diet designed to support the nutritional needs of mother cats during pregnancy and lactation, as well as their kittens during the first growth stage. The small, easy-to-rehydrate kibbles are perfect for kittens to transition from mother's milk to solid food. The formula provides a complete and balanced diet to support healthy growth and development.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Supports mother cats during pregnancy and lactation.</li>
        <li>Promotes healthy growth and development in kittens.</li>
        <li>Easy-to-chew and highly digestible kibbles.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated poultry protein, rice, animal fats, corn flour, vegetable protein isolate, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali S.", rating: 5, comment: "My cat is pregnant, and this food has been a lifesaver. She's so healthy and happy.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/mother_cat_food_review_1.jpg"] },
      { reviewer_name: "Karan T.", rating: 4.5, comment: "My kittens love this food. They transitioned to it so easily.", date: "2024-09-03T10:00:00Z", images: [] },
      { reviewer_name: "Pooja M.", rating: 5, comment: "The quality is amazing. I feel confident about feeding this to my cat and her kittens.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000281",
    short_name: "Heads Up For Tails Dog Poop Bags",
    short_description: "Biodegradable dog waste bags for convenient cleanups.",
    original_price: 180,
    discountPercent: 0,
    images: ["/images/dog/accessories/281a.png"],
    brand: "Heads Up For Tails",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 200,
    rating: 4.8,
    reviews: 100,
    detailed_description: `
      <h3>Eco-Friendly Cleanups</h3>
      <p>The Heads Up For Tails Dog Poop Bags are a convenient and eco-friendly solution for cleaning up after your dog. Made from a biodegradable material, these bags are thick and durable, ensuring a mess-free cleanup. They are also lightly scented to help mask odors, and they fit most standard poop bag dispensers.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Biodegradable material.</li>
        <li>Thick and durable.</li>
        <li>Lightly scented to mask odors.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Tear a bag off the roll, open it up, and scoop your dog's waste. Tie a knot and dispose of it in a trash bin.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sanjay T.", rating: 5, comment: "These bags are great. I feel good about using a biodegradable option.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/poop_bags_review_1.jpg"] },
      { reviewer_name: "Neha V.", rating: 4, comment: "Good quality, but they're a bit expensive compared to other brands.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Rahul G.", rating: 5, comment: "They're thick and strong. I'm very happy with them.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000282",
    short_name: "Himalaya Pet Care Dog Paw Balm",
    short_description: "An herbal balm to protect and soothe dry, cracked paws.",
    original_price: 250,
    discountPercent: 5,
    images: ["/images/dog/grooming/282a.png"],
    brand: "Himalaya Pet Care",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 5.0, width: 5.0, height: 3.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.8,
    reviews: 60,
    detailed_description: `
      <h3>Soothe and Protect Sensitive Paws</h3>
      <p>Himalaya's Pet Care Dog Paw Balm is a natural and effective solution for your dog's dry, cracked, and rough paws. It is formulated with natural ingredients that moisturize and soothe the paw pads, protecting them from hot pavements, rough surfaces, and cold weather. The balm is fast-absorbing and safe for your dog to lick.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Moisturizes and soothes dry paws.</li>
        <li>Protects from extreme temperatures and surfaces.</li>
        <li>Made with natural and safe ingredients.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Clean your dog's paws and apply a small amount of balm, massaging it into the paw pads. Use daily or as needed.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Tanya S.", rating: 5, comment: "This balm is a lifesaver for my dog's paws during the summer. They were so cracked and now they're smooth.", date: "2024-09-02T10:00:00Z", images: ["/user_uploads/paw_balm_review_2.jpg"] },
      { reviewer_name: "Vivek G.", rating: 4.5, comment: "Good product. It helped with my dog's rough paws after a few uses.", date: "2024-08-30T10:00:00Z", images: [] },
      { reviewer_name: "Anjali M.", rating: 5, comment: "Easy to apply and my dog doesn't mind it. It works great.", date: "2024-09-01T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000283",
    short_name: "Trixie Catnip Spray",
    short_description: "A potent catnip spray to attract and entertain your feline.",
    original_price: 350,
    discountPercent: 10,
    images: ["/images/cat/toys/283a.png"],
    brand: "Trixie",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 15.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Cats",
    stock: 120,
    rating: 4.6,
    reviews: 88,
    detailed_description: `
      <h3>Instant Excitement for Your Cat</h3>
      <p>The Trixie Catnip Spray is a simple and effective way to make your cat's toys, scratching posts, or beds more appealing. Made with a highly concentrated and natural catnip extract, a few spritzes will encourage playful and exploratory behavior, providing your cat with a burst of energy and fun.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Made from 100% natural catnip oil.</li>
        <li>Easy to use spray bottle.</li>
        <li>Encourages natural hunting and playing instincts.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Shake well and spray lightly on toys, bedding, or scratching surfaces. Do not spray directly on your cat.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aditi S.", rating: 5, comment: "This spray works instantly! My cat went crazy for her old toys again.", date: "2024-08-15T10:00:00Z", images: ["/user_uploads/catnip_review_3.jpg"] },
      { reviewer_name: "Rahul P.", rating: 4, comment: "It's good, but the scent doesn't last as long as I'd hoped.", date: "2024-08-10T10:00:00Z", images: [] },
      { reviewer_name: "Priya V.", rating: 5, comment: "Finally, a way to make my cat use the scratching post! Highly effective.", date: "2024-08-18T10:00:00Z", images: ["/user_uploads/catnip_review_4.jpg"] }
    ],
  },
  {
    id: "PID000284",
    short_name: "Trixie Cat Cave Bed with Cushion",
    short_description: "A cozy, enclosed bed providing a secure space for rest.",
    original_price: 2100,
    discountPercent: 15,
    images: ["/images/cat/beds/284a.png", "/images/cat/beds/284b.png"],
    brand: "Trixie",
    weight: { value: 0.9, unit: "kg" },
    package_dimensions: { length: 45.0, width: 45.0, height: 35.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Cats",
    stock: 70,
    rating: 4.8,
    reviews: 130,
    detailed_description: `
      <h3>The Ultimate Cat Hideaway</h3>
      <p>This Trixie Cat Cave is perfect for cats who love to burrow and feel secure. The soft plush material and removable cushion provide maximum comfort, while the enclosed design offers a private space for uninterrupted sleep. The non-slip bottom keeps the bed in place, even with the most energetic felines.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Soft, high-quality plush material.</li>
        <li>Removable, machine-washable cushion.</li>
        <li>Enclosed design for a sense of security.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Cushion is machine washable on a gentle cycle. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Ankit R.", rating: 5, comment: "My cat immediately adopted this bed. She absolutely loves it.", date: "2024-08-12T10:00:00Z", images: ["/user_uploads/cat_bed_review_3.jpg"] },
      { reviewer_name: "Shruti G.", rating: 4.5, comment: "Very well made and cozy. It's a bit smaller than I expected, but my cat fits perfectly.", date: "2024-08-14T10:00:00Z", images: [] },
      { reviewer_name: "Vikram L.", rating: 5, comment: "Perfect for my shy cat. She now has her own little safe space.", date: "2024-08-16T10:00:00Z", images: ["/user_uploads/cat_bed_review_4.jpg"] }
    ],
  },
  {
    id: "PID000285",
    short_name: "Me-O Delite Tuna Cat Food",
    short_description: "A delicious and nutrient-rich tuna recipe for a healthy cat.",
    original_price: 85,
    discountPercent: 5,
    images: ["/images/cat/food/285a.png"],
    brand: "Me-O",
    weight: { value: 0.08, unit: "kg" },
    package_dimensions: { length: 12.0, width: 8.0, height: 2.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 250,
    rating: 4.7,
    reviews: 110,
    detailed_description: `
      <h3>A Taste Sensation for Your Feline</h3>
      <p>Me-O Delite provides a gourmet meal experience for your cat with real tuna flakes in a savory jelly. This recipe is not only delicious but also packed with essential vitamins and minerals, including Taurine for healthy vision and a blend of omega-3 and omega-6 fatty acids for a shiny coat.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Supports strong bones and teeth.</li>
        <li>Contains Taurine for healthy vision.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Tuna, water, modified starch, gelling agents, taurine, and vitamin blend.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavya P.", rating: 5, comment: "My cat absolutely adores this. She cleans the bowl every time.", date: "2024-08-11T10:00:00Z", images: [] },
      { reviewer_name: "Rohit M.", rating: 4, comment: "My cat likes it, but the consistency is a bit watery.", date: "2024-08-13T10:00:00Z", images: ["/user_uploads/cat_food_review_3.jpg"] },
      { reviewer_name: "Sanjana L.", rating: 5, comment: "Great for a treat or a daily meal. My cat is very happy with it.", date: "2024-08-15T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000286",
    short_name: "Beaphar Cat Calming Spot On",
    short_description: "A calming treatment to reduce anxiety and stress in cats.",
    original_price: 650,
    discountPercent: 15,
    images: ["/images/cat/health/286a.png"],
    brand: "Beaphar",
    weight: { value: 0.015, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Cats",
    stock: 90,
    rating: 4.2,
    reviews: 60,
    detailed_description: `
      <h3>Soothing Relief for Stressed Cats</h3>
      <p>Beaphar Cat Calming Spot On uses natural valerian extract to help calm and reduce problem behavior in cats. It is ideal for use during stressful situations such as thunderstorms, travel, fireworks, or vet visits. The effect is gentle and helps your cat feel more at ease.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Helps reduce anxiety and stress.</li>
        <li>Easy to apply 'spot-on' treatment.</li>
        <li>Natural and drug-free solution.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Apply one pipette of the liquid between the cat's ears once a week. The full effect is seen within one hour of application.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anamika D.", rating: 5, comment: "This helped my cat immensely during a thunderstorm. She was much calmer than usual.", date: "2024-08-17T10:00:00Z", images: [] },
      { reviewer_name: "Chirag S.", rating: 3.5, comment: "Didn't seem to have much effect on my cat, unfortunately. Might work for others.", date: "2024-08-12T10:00:00Z", images: [] },
      { reviewer_name: "Pooja K.", rating: 4, comment: "It works, but the smell is a bit strong. I'm glad my cat is less stressed though.", date: "2024-08-14T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000287",
    short_name: "FOFOS Cat Collar with Bell",
    short_description: "Adjustable, lightweight collar with a safety release and cute bell.",
    original_price: 180,
    discountPercent: 0,
    images: ["/images/cat/accessories/287a.png", "/images/cat/accessories/287b.png"],
    brand: "FOFOS",
    weight: { value: 0.02, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 2.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Cats",
    stock: 200,
    rating: 4.5,
    reviews: 95,
    detailed_description: `
      <h3>Stylish and Safe for Your Feline</h3>
      <p>This FOFOS Cat Collar is designed with both style and safety in mind. The adjustable strap ensures a perfect fit, and the quick-release safety buckle prevents your cat from getting stuck if the collar catches on something. The small, pleasant-sounding bell helps you keep track of your cat's whereabouts.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Adjustable and comfortable fit.</li>
        <li>Safety buckle for quick release.</li>
        <li>Attached bell to help locate your cat.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Shraddha M.", rating: 5, comment: "The best collar I've bought. The safety clasp is a big relief.", date: "2024-08-18T10:00:00Z", images: ["/user_uploads/cat_collar_review_4.jpg"] },
      { reviewer_name: "Karan T.", rating: 4, comment: "Cute collar, but my cat managed to lose the bell after a few days.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Anjali G.", rating: 5, comment: "Love the design and the safety feature. Fits my cat perfectly.", date: "2024-08-17T10:00:00Z", images: ["/user_uploads/cat_collar_review_5.jpg"] }
    ],
  },
  {
    id: "PID000288",
    short_name: "Liveonce Bird Cage with Stand",
    short_description: "A spacious and modern cage for small to medium-sized birds.",
    original_price: 3200,
    discountPercent: 10,
    images: ["/images/bird/homes/288a.png", "/images/bird/homes/288b.png"],
    brand: "Liveonce",
    weight: { value: 4.5, unit: "kg" },
    package_dimensions: { length: 70.0, width: 45.0, height: 90.0, unit: "cm" },
    category: "Homes & Beds",
    pet_type: "Birds",
    stock: 35,
    rating: 4.7,
    reviews: 25,
    detailed_description: `
      <h3>A Comfortable Home for Your Feathered Friend</h3>
      <p>The Liveonce Bird Cage with Stand provides a secure and comfortable living space for your bird. The durable metal construction, pull-out tray for easy cleaning, and included perches and food bowls make it a practical and functional choice. The stand adds height and mobility, allowing you to move the cage easily around your home.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Spacious design for flight and play.</li>
        <li>Easy to clean with a removable tray.</li>
        <li>Comes with perches, food bowls, and a stand.</li>
      </ul>
      <p><strong>Assembly:</strong> <br>Some assembly required. Instructions are included in the box.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Suresh R.", rating: 5, comment: "This cage is perfect for my budgies. They have so much space to fly and play.", date: "2024-08-19T10:00:00Z", images: ["/user_uploads/bird_cage_review_3.jpg"] },
      { reviewer_name: "Deepak S.", rating: 4, comment: "Good cage, but the assembly instructions could be clearer.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Manish K.", rating: 5, comment: "Very sturdy and looks great. My bird is happy in his new home.", date: "2024-08-17T10:00:00Z", images: ["/user_uploads/bird_cage_review_4.jpg"] }
    ],
  },
  {
    id: "PID000289",
    short_name: "Vetafarm Avian Vitamin Supplement",
    short_description: "A water-soluble vitamin and mineral supplement for all birds.",
    original_price: 450,
    discountPercent: 5,
    images: ["/images/bird/health/289a.png"],
    brand: "Vetafarm",
    weight: { value: 0.05, unit: "kg" },
    package_dimensions: { length: 10.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Health & Medicine",
    pet_type: "Birds",
    stock: 80,
    rating: 4.8,
    reviews: 40,
    detailed_description: `
      <h3>Essential Boost for Bird Health</h3>
      <p>Vetafarm Avian Vitamin Supplement is designed to provide a comprehensive range of vitamins and minerals essential for the health of your bird. It is particularly useful for birds on a seed-only diet. Simply add it to their drinking water to ensure they receive a balanced diet and to support their immune system, feather quality, and overall vitality.</p>
      <h4>Key Benefits:</h4>
      <ul>
        <li>Water-soluble for easy administration.</li>
        <li>Boosts immune system and energy levels.</li>
        <li>Promotes healthy feathers and beak.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Add 1ml (or 10 drops) per 100ml of drinking water. Change water daily.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Geeta P.", rating: 5, comment: "My bird's energy levels have gone up since I started using this. Highly recommend.", date: "2024-08-20T10:00:00Z", images: [] },
      { reviewer_name: "Pooja R.", rating: 4.5, comment: "Easy to use and seems to be working well. My bird's feathers are looking great.", date: "2024-08-16T10:00:00Z", images: [] },
      { reviewer_name: "Anil K.", rating: 5, comment: "Good product. I feel confident my bird is getting all the vitamins he needs.", date: "2024-08-18T10:00:00Z", images: ["/user_uploads/bird_vitamin_review_2.jpg"] }
    ],
  },
  {
    id: "PID000290",
    short_name: "Tetra Goldfish Flakes",
    short_description: "Nutritious flake food for all goldfish.",
    original_price: 180,
    discountPercent: 0,
    images: ["/images/fish/food/290a.png"],
    brand: "Tetra",
    weight: { value: 0.03, unit: "kg" },
    package_dimensions: { length: 8.0, width: 5.0, height: 5.0, unit: "cm" },
    category: "Food",
    pet_type: "Fishes",
    stock: 250,
    rating: 4.6,
    reviews: 120,
    detailed_description: `
      <h3>Balanced Diet for Bright Goldfish</h3>
      <p>Tetra Goldfish Flakes provide a complete and balanced diet for all goldfish varieties. The formula is rich in essential nutrients, vitamins, and minerals to support health, vitality, and beautiful color. The flakes are designed to float, preventing digestive upset and making feeding easy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Scientifically formulated for goldfish.</li>
        <li>Highly digestible for clear water.</li>
        <li>Boosts natural color and immune system.</li>
      </ul>
      <p><strong>Feeding Instructions:</strong> <br>Feed 2-3 times daily, using only as much as your fish can consume in a few minutes.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sandeep G.", rating: 5, comment: "My goldfish love this food. They've become so vibrant since I started using it.", date: "2024-08-17T10:00:00Z", images: ["/user_uploads/fish_food_review_2.jpg"] },
      { reviewer_name: "Roshni M.", rating: 4, comment: "Good quality, but a bit pricey for the small container.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Varun K.", rating: 5, comment: "Great food. My fish are always eager to eat it.", date: "2024-08-18T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000291",
    short_name: "DreamAuro Aquarium Scaping Tongs Scissor Long Stainless Steel Curve Scissor",
    short_description: "DreamAuro Aquarium Scaping Tongs Scissor Long Stainless Steel Curve Scissor Tool for Fish Tank, Aquatic Plant Cleaning",
    original_price: 650,
    discountPercent: 10,
    images: ["/images/fish/grooming/291a.png", "/images/fish/grooming/291b.png"],
    brand: "DreamAuro",
    weight: { value: 0.3, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 8.0, unit: "cm" },
    category: "Grooming",
    pet_type: "Fishes",
    stock: 60,
    rating: 4.5,
    reviews: 50,
    detailed_description: `
      <h3>Crystal Clear Water for Your Aquarium</h3>
      <p>The Dophin Fish Tank Filter provides excellent water filtration, keeping your aquarium clean and healthy for your fish. It's easy to install and maintain, with both mechanical and biological filtration to remove debris and harmful toxins. Its compact design is perfect for smaller tanks, and the quiet operation won't disturb your fish.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Effective mechanical and biological filtration.</li>
        <li>Easy to install and maintain.</li>
        <li>Quiet operation.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Attach to the side of the tank using the suction cups provided. Submerge the filter completely in water and plug in.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Saurabh P.", rating: 5, comment: "This filter is a game-changer. My tank has never been this clear.", date: "2024-08-19T10:00:00Z", images: ["/user_uploads/fish_filter_review_2.jpg"] },
      { reviewer_name: "Pooja V.", rating: 4, comment: "Good for a small tank. I had to clean the filter media more often than expected though.", date: "2024-08-15T10:00:00Z", images: [] },
      { reviewer_name: "Ankit L.", rating: 4.5, comment: "Works great and is very quiet. Happy with the purchase.", date: "2024-08-18T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000292",
    short_name: "Heads Up For Tails Squeaky Ball",
    short_description: "A durable and squeaky ball for interactive play.",
    original_price: 350,
    discountPercent: 5,
    images: ["/images/dog/toys/292a.png", "/images/dog/toys/292b.png"],
    brand: "Heads Up For Tails",
    weight: { value: 0.1, unit: "kg" },
    package_dimensions: { length: 8.0, width: 8.0, height: 8.0, unit: "cm" },
    category: "Toys & Entertainment",
    pet_type: "Dogs",
    stock: 150,
    rating: 4.7,
    reviews: 80,
    detailed_description: `
      <h3>Fetch Just Got More Fun</h3>
      <p>The Heads Up For Tails Squeaky Ball is a fun and durable toy that your dog will love. The tough rubber material is designed to withstand a lot of chewing, while the internal squeaker keeps your dog engaged during playtime. It is perfect for a game of fetch and is a great way to provide your dog with a healthy outlet for their energy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable, squeaky rubber material.</li>
        <li>Internal squeaker for added fun.</li>
        <li>Perfect for games of fetch and chewing.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with warm water and a mild detergent. Air dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "My dog is obsessed with this ball. He never gets tired of it.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/squeaky_ball_review_2.jpg"] },
      { reviewer_name: "Rahul T.", rating: 4, comment: "Good quality, but the squeaker stopped working after a few weeks.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Divya L.", rating: 5, comment: "Great for a game of fetch. It's tough and has held up well.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000293",
    short_name: "Heads Up For Tails Pet Carrier",
    short_description: "A comfortable and stylish carrier for small dogs and cats.",
    original_price: 1800,
    discountPercent: 10,
    images: ["/images/dog/accessories/293a.png", "/images/cat/accessories/293a.png"],
    brand: "Heads Up For Tails",
    weight: { value: 1.2, unit: "kg" },
    package_dimensions: { length: 40.0, width: 25.0, height: 25.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs & Cats",
    stock: 60,
    rating: 4.7,
    reviews: 55,
    detailed_description: `
      <h3>Travel in Comfort and Style</h3>
      <p>The Heads Up For Tails Pet Carrier is designed to make traveling with your small dog or cat easy and stress-free. It is made from a durable, lightweight fabric and features a comfortable handle and an adjustable shoulder strap for easy carrying. The mesh windows provide excellent ventilation and a clear view for your pet, while the soft, removable mat ensures a comfortable ride.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Durable and lightweight.</li>
        <li>Excellent ventilation.</li>
        <li>Removable and washable mat.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Wipe clean with a damp cloth. The mat is machine washable.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Sonia G.", rating: 5, comment: "This carrier is great. It's so much easier to travel with my cat now.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/pet_carrier_review_2.jpg"] },
      { reviewer_name: "Rahul M.", rating: 4.5, comment: "Good quality, but my dog is a bit too big for it.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Neha T.", rating: 5, comment: "Love the design and it's very practical. My cat seems to enjoy it.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000294",
    short_name: "Farmina N&D Grain-Free Cat Food",
    short_description: "A high-protein, grain-free diet for adult cats.",
    original_price: 1500,
    discountPercent: 15,
    images: ["/images/cat/food/294a.png"],
    brand: "Farmina",
    weight: { value: 0.8, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 70,
    rating: 4.8,
    reviews: 90,
    detailed_description: `
      <h3>Superior Nutrition for Your Feline</h3>
      <p>Farmina N&D Grain-Free Cat Food is a nutritionally complete diet that is packed with high-quality animal protein and free from grains. The formula is designed to meet the natural carnivorous needs of cats, supporting strong muscles and a healthy body. It is a great choice for cats with sensitive stomachs or food allergies, and the rich flavor is irresistible to even the pickiest eaters.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Grain-free for sensitive stomachs.</li>
        <li>High-protein content for strong muscles.</li>
        <li>Rich in essential nutrients for overall health.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Deboned chicken, dehydrated chicken, sweet potatoes, eggs, fish oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kunal V.", rating: 5, comment: "My cat loves this food! She's so healthy and has a beautiful coat now.", date: "2024-09-03T10:00:00Z", images: ["/user_uploads/cat_dry_food_review_6.jpg"] },
      { reviewer_name: "Priya S.", rating: 4, comment: "It's a great product, but it's a bit too expensive for me to buy regularly.", date: "2024-09-01T10:00:00Z", images: [] },
      { reviewer_name: "Rohan D.", rating: 5, comment: "My cat with a sensitive stomach is thriving on this food. It's fantastic.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000295",
    short_name: "Trixie Dog Rain Boots",
    short_description: "A set of waterproof boots to protect your dog's paws.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/dog/accessories/295a.png", "/images/dog/accessories/295b.png"],
    brand: "Trixie",
    weight: { value: 0.2, unit: "kg" },
    package_dimensions: { length: 15.0, width: 10.0, height: 5.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Dogs",
    stock: 80,
    rating: 4.5,
    reviews: 60,
    detailed_description: `
      <h3>Protect Your Dog's Paws from the Elements</h3>
      <p>The Trixie Dog Rain Boots are a practical solution for protecting your dog's paws from wet, muddy, or hot surfaces. The waterproof material and non-slip sole provide excellent traction and protection, ensuring your dog stays comfortable and safe during walks. The adjustable straps ensure a secure fit, so the boots stay on even with the most playful dogs.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Waterproof material for protection.</li>
        <li>Non-slip sole for excellent traction.</li>
        <li>Adjustable straps for a secure fit.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Rinse with water and air dry. Do not machine wash or tumble dry.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Aditya S.", rating: 5, comment: "These boots are great! My dog's paws are no longer muddy after a walk.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/dog_boots_review_2.jpg"] },
      { reviewer_name: "Meena K.", rating: 4, comment: "Good quality, but my dog took some time to get used to wearing them.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Sanjay T.", rating: 5, comment: "They fit my dog perfectly and they stay on. Happy with this purchase.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000296",
    short_name: "Royal Canin Fit 32 Cat Food",
    short_description: "A complete and balanced dry food for moderately active adult cats.",
    original_price: 1500,
    discountPercent: 10,
    images: ["/images/cat/food/296a.png"],
    brand: "Royal Canin",
    weight: { value: 2.0, unit: "kg" },
    package_dimensions: { length: 25.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 120,
    detailed_description: `
      <h3>Tailored Nutrition for a Healthy Lifestyle</h3>
      <p>Royal Canin Fit 32 Cat Food is a precisely balanced nutritional formula designed to support the needs of moderately active adult cats. It contains a balance of proteins, fats, and carbohydrates to help maintain a healthy weight. The kibbles are shaped to encourage chewing, which helps support dental hygiene. It also includes essential nutrients to promote a healthy urinary system.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Maintains a healthy weight.</li>
        <li>Supports dental hygiene.</li>
        <li>Promotes a healthy urinary system.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Dehydrated poultry protein, rice, vegetable protein isolate, corn, animal fats, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Pooja V.", rating: 5, comment: "My cat is a healthy weight now thanks to this food. She loves the taste too.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/fit_cat_food_review_2.jpg"] },
      { reviewer_name: "Saurabh G.", rating: 4, comment: "Good quality, but the bag is a bit expensive for me to buy regularly.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Ankit P.", rating: 5, comment: "My vet recommended this. Very happy with the results.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000297",
    short_name: "Zolux Hamster Running Wheel",
    short_description: "A silent running wheel for hamsters and other small animals.",
    original_price: 450,
    discountPercent: 0,
    images: ["/images/small_animal/accessories/297a.png"],
    brand: "Zolux",
    weight: { value: 0.15, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 15.0, unit: "cm" },
    category: "Accessories",
    pet_type: "Small Animals",
    stock: 120,
    rating: 4.8,
    reviews: 70,
    detailed_description: `
      <h3>Keep Your Hamster Active and Happy</h3>
      <p>The Zolux Hamster Running Wheel is an essential accessory for keeping your small pet healthy and active. The silent design ensures it won't disturb you or your pet, while the durable plastic construction provides a safe and comfortable surface for running. It is easy to install in any wire cage and is a great way to provide your hamster with the exercise they need to stay healthy.</p>
      <h4>Key Features:</h4>
      <ul>
        <li>Silent design for a quiet home.</li>
        <li>Durable, pet-safe plastic.</li>
        <li>Promotes exercise and mental stimulation.</li>
      </ul>
      <p><strong>Installation:</strong> <br>Attach to the side of the cage using the provided clip.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Kavya M.", rating: 5, comment: "My hamster loves this! It's so quiet, I can barely hear him running at night.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/hamster_wheel_review_2.jpg"] },
      { reviewer_name: "Rahul T.", rating: 4, comment: "Good quality, but a bit difficult to attach to the cage.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Divya L.", rating: 5, comment: "Very happy with this. My hamster is much more active now.", date: "2024-09-04T10:00:00Z", images: [] }
    ],
  },
  {
    id: "PID000298",
    short_name: "Iams Proactive Health Kitten",
    short_description: "A complete and balanced food for growing kittens.",
    original_price: 950,
    discountPercent: 10,
    images: ["/images/cat/food/298a.png", "/images/cat/food/298b.png"],
    brand: "Iams",
    weight: { value: 1.0, unit: "kg" },
    package_dimensions: { length: 20.0, width: 15.0, height: 8.0, unit: "cm" },
    category: "Food",
    pet_type: "Cats",
    stock: 100,
    rating: 4.8,
    reviews: 110,
    detailed_description: `
      <h3>Healthy Start for Your Kitten</h3>
      <p>Iams Proactive Health Kitten Food provides a complete and balanced diet to support the healthy growth and development of your kitten. It is made with high-quality protein from chicken and a blend of essential nutrients, including DHA to support brain and vision development. The small kibble size is perfect for their small mouths, and the highly digestible formula ensures they get the most out of every meal.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Supports healthy brain and vision development.</li>
        <li>Promotes strong muscles and bones.</li>
        <li>Aids in healthy digestion.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, corn meal, corn grits, dried beet pulp, fish oil, and a blend of vitamins and minerals.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Anjali S.", rating: 5, comment: "My kitten loves this food. She's so healthy and energetic.", date: "2024-09-04T10:00:00Z", images: ["/user_uploads/kitten_food_review_2.jpg"] },
      { reviewer_name: "Karan R.", rating: 4, comment: "Good quality, but my kitten is a bit picky and took some time to get used to it.", date: "2024-09-02T10:00:00Z", images: [] },
      { reviewer_name: "Pooja D.", rating: 5, comment: "Very happy with the ingredients. I feel confident about what I'm feeding my kitten.", date: "2024-09-03T10:00:00Z", images: [] }
    ],
  }
];

export default products;
  