const products = [
  {
    id: 1,
    short_name: "Drools Gourmet Bites",
    short_description: "A delicious, all-natural treat for your dog or cat.",
    original_price: 1010,
    discountPercent: 25,
    images: ["/images/product_1.png", "/images/product_1b.png", "/images/product_1c.png"],
    brand: "Drools",
    weight: { value: 0.5, unit: "kg" },
    dimensions: { length: 15, width: 10, height: 5, unit: "cm" },
    product_tags: ["organic", "treats", "dog-food", "cat-food"],
    detailed_description: `
      <h3>Nourish Your Pet with the Best</h3>
      <p>Our Gourmet Pet Bites are crafted from a unique blend of organic, human-grade ingredients. Each bite is packed with essential nutrients to support your pet's health and vitality. We guarantee a taste your pet will love, and a quality you can trust.</p>
      <h4>Health Benefits:</h4>
      <ul>
        <li>Promotes healthy skin and a shiny coat.</li>
        <li>Aids in digestion with natural probiotics.</li>
        <li>Boosts energy and overall well-being.</li>
      </ul>
      <p><strong>Ingredients:</strong> <br>Chicken, brown rice, organic vegetables, and a sprinkle of love. No artificial preservatives or fillers.</p>
    `,
    customer_reviews: [
      { reviewer_name: "Emily R.", rating: 5, comment: "My picky dog went crazy for these! Finally, a healthy treat she actually enjoys.", date: "2024-07-01T10:00:00Z", images: ["/user_uploads/emily_paws.jpg"] },
      { reviewer_name: "Mark D.", rating: 3, comment: "Great product my dog loves it seriously good product.", date: "2024-07-01T10:00:00Z", images: ["/user_uploads/mark_dog.jpg", "/user_uploads/mark_dog_2.jpg"] },
      { reviewer_name: "Hussain J.", rating: 4, comment: "My cat loved it.", date: "2024-07-02T10:00:00Z", images: ["/user_uploads/hussain.jpg"] },
      { reviewer_name: "Sarah L.", rating: 5, comment: "These are a lifesaver for training! My puppy is obsessed.", date: "2024-07-03T10:00:00Z", images: ["/user_uploads/sarah_puppy.jpg", "/user_uploads/sarah_puppy2.jpg"] },
      { reviewer_name: "David T.", rating: 4.5, comment: "Good quality ingredients and my dog's coat looks shinier. A little pricey, but worth it.", date: "2024-07-04T10:00:00Z", images: ["/user_uploads/david_dog.jpg"] },
      { reviewer_name: "Jessica P.", rating: 5, comment: "My vet recommended these. My older dog has more energy now.", date: "2024-07-05T10:00:00Z", images: ["/user_uploads/jessica_dog.jpg"] },
      { reviewer_name: "Leo G.", rating: 3, comment: "My dog liked them, but they're a bit messy. The images on the site were misleading, they were more crumbly than they looked.", date: "2024-07-06T10:00:00Z", images: ["/user_uploads/leo_mess.jpg"] }
    ],
    category: "Food",
	pet_type: "Dogs",
    stock: 51,
    rating: 3.5,
    reviews: 25,
  },
  {
    id: 2,
    short_name: "Ultra-Comfort Pet Bed",
    short_description: "A plush, orthopedic bed for restful sleep.",
    original_price: 1020,
    discountPercent: 30,
    images: ["/images/product_2.png", "/images/product_2b.png", "/images/product_2c.png", "/images/product_2d.png", "/images/product_2e.png", "/images/product_2f.png"],
    brand: "Sleepy Tails",
    weight: { value: 3.2, unit: "kg" },
    dimensions: { length: 80, width: 60, height: 20, unit: "cm" },
    product_tags: ["bed", "orthopedic", "comfort", "plush"],
    detailed_description: `
      <h2>The Ultimate Nap Spot</h2>
      <p>Give your pet the gift of deep, restorative sleep with our orthopedic pet bed. The memory foam core contours to their body, relieving pressure on joints and muscles, which is especially beneficial for older pets. The removable, machine-washable cover makes cleaning a breeze.</p>
      <h3>Materials:</h3>
      <ul>
        <li><strong>Outer Fabric:</strong> Ultra-soft polyester fleece.</li>
        <li><strong>Filling:</strong> High-density memory foam.</li>
        <li><strong>Base:</strong> Non-slip, waterproof bottom.</li>
      </ul>
      <p><strong>Care Instructions:</strong> <br>Remove the cover and machine wash on a gentle cycle. Tumble dry on low heat.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Memory foam and polyester" },
      { name: "Washable", value: "Yes, removable cover" }
    ],
    customer_reviews: [
      { reviewer_name: "Alex B.", rating: 5, comment: "My senior dog hasn't slept this soundly in years. Worth every penny!", date: "2024-06-25T10:00:00Z", images: ["/user_uploads/alex_bed.jpg", "/user_uploads/alex_bed_2.jpg"] },
      { reviewer_name: "Jessica C.", rating: 4, comment: "Great bed, but it took a few days to fully expand after unboxing.", date: "2024-06-20T10:00:00Z", images: ["/user_uploads/jess_sleep.jpg"] },
      { reviewer_name: "Daniel F.", rating: 5, comment: "My dog loves it. Very good quality and soft.", date: "2024-07-10T10:00:00Z", images: ["/user_uploads/dan_chewing.jpg"] },
      { reviewer_name: "Olivia M.", rating: 5, comment: "My cat immediately took to it and now refuses to sleep anywhere else.", date: "2024-07-15T10:00:00Z", images: ["/user_uploads/olivia_bowl.jpg"] },
      { reviewer_name: "Robert K.", rating: 4, comment: "The cover is easy to wash and the bed holds its shape well. I'd recommend it.", date: "2024-07-20T10:00:00Z", images: ["/user_uploads/robert_grooming.jpg"] },
      { reviewer_name: "Laura F.", rating: 3.5, comment: "Good, but I wish it was a bit larger for my golden retriever.", date: "2024-07-25T10:00:00Z", images: ["/user_uploads/laura_hike.jpg"] },
      { reviewer_name: "Adam G.", rating: 5, comment: "Amazing bed. My cat is obsessed with this!", date: "2024-07-30T10:00:00Z", images: ["/user_uploads/adam_toys.jpg"] }
    ],
    category: "Category 3",
    stock: 52,
    rating: 4.0,
    reviews: 30,
  },
  {
    id: 3,
    short_name: "Interactive Laser Toy",
    short_description: "An automatic toy to keep your cat entertained for hours.",
    original_price: 1030,
    discountPercent: 40,
    images: ["/images/product_3.png", "/images/product_3b.png", "/images/product_3c.png"],
    brand: "Cat-Play",
    weight: { value: 0.2, unit: "kg" },
    dimensions: { length: 10, width: 10, height: 12, unit: "cm" },
    product_tags: ["toy", "interactive", "cat-toy", "automatic"],
    detailed_description: `
      <h2>Unleash Their Inner Hunter</h2>
      <p>This interactive laser toy provides endless fun for your feline friend. With three adjustable speeds and an automatic shut-off feature, it's perfect for when you're busy or away. The random laser patterns keep your cat's mind engaged and their body active.</p>
      <h3>Product Features:</h3>
      <ul>
        <li><strong>360° Rotation:</strong> Moves in unpredictable patterns to mimic prey.</li>
        <li><strong>Timer:</strong> Automatically turns off after 15 minutes to prevent over-stimulation.</li>
        <li><strong>Safe for Pets:</strong> The laser is eye-safe and low-powered.</li>
      </ul>
      <p><strong>Battery Info:</strong> <br>Requires 3 x AA batteries (not included).</p>
    `,
    technical_specifications: [
      { name: "Power Source", value: "3 x AA batteries" },
      { name: "Material", value: "Durable ABS plastic" }
    ],
    customer_reviews: [
      { reviewer_name: "Chris W.", rating: 5, comment: "My cat is obsessed with this! Best purchase I've made in a long time.", date: "2024-07-05T10:00:00Z", images: ["/user_uploads/chris_cat_video.mp4"] }
    ],
    category: "Category 4",
    stock: 53,
    rating: 3.0,
    reviews: 35,
  },
  {
    id: 4,
    short_name: "Durable Rope Toy",
    short_description: "A long-lasting chew toy for powerful chewers.",
    original_price: 1040,
    discountPercent: 50,
    images: ["/images/product_4.png", "/images/product_4b.png", "/images/product_4c.png"],
    brand: "TuffDog",
    weight: { value: 0.8, unit: "kg" },
    dimensions: { length: 45, width: 5, height: 5, unit: "cm" },
    product_tags: ["toy", "chew", "durable", "rope-toy"],
    detailed_description: `
      <h2>Built to Withstand the Toughest Bites</h2>
      <p>This rope toy is engineered for dogs who love to chew and tug. Made from tightly-woven, eco-friendly cotton fibers, it's virtually indestructible and safe for your pet's teeth. It's perfect for a game of tug-of-war or for independent play.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Tightly-Woven:</strong> Prevents fraying and tearing.</li>
        <li><strong>Non-Toxic:</strong> Made from 100% natural, pet-safe materials.</li>
        <li><strong>Dental Benefits:</strong> Helps clean teeth and massage gums as your pet chews.</li>
      </ul>
      <p><strong>Warning:</strong> <br>Supervise your pet during playtime to ensure their safety.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "100% Cotton" },
      { name: "Safety", value: "Non-toxic, eco-friendly" }
    ],
    customer_reviews: [
      { reviewer_name: "Daniel F.", rating: 5, comment: "My German Shepherd destroys every toy, but this one has lasted for months! Amazing!", date: "2024-07-10T10:00:00Z", images: ["/user_uploads/dan_chewing.jpg"] }
    ],
    category: "Category 5",
    stock: 54,
    rating: 3.5,
    reviews: 40,
  },
  {
    id: 5,
    short_name: "Ergonomic Pet Bowl",
    short_description: "A stylish and healthy way to feed your pet.",
    original_price: 1050,
    discountPercent: 10,
    images: ["/images/product_5.png", "/images/product_5b.png", "/images/product_5c.png"],
    brand: "Modern Pet",
    weight: { value: 0.4, unit: "kg" },
    dimensions: { length: 20, width: 20, height: 8, unit: "cm" },
    product_tags: ["bowl", "ceramic", "ergonomic", "feeder"],
    detailed_description: `
      <h2>Elevate Your Pet's Mealtime</h2>
      <p>Our ceramic pet bowl is designed with an ergonomic tilt to reduce neck strain and promote better posture while eating. The elevated position helps prevent indigestion and vomiting, making it ideal for pets of all ages and sizes. Its sleek, modern design also looks great in any home.</p>
      <h3>Design Features:</h3>
      <ul>
        <li><strong>Tilted Design:</strong> Reduces neck and joint pressure.</li>
        <li><strong>Non-Slip Base:</strong> Keeps the bowl in place during enthusiastic meals.</li>
        <li><strong>Easy to Clean:</strong> Dishwasher safe and hygienic.</li>
      </ul>
      <p><strong>Note:</strong> <br>Available in a variety of colors to match your home decor.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Food-grade ceramic" },
      { name: "Capacity", value: "3 cups" }
    ],
    customer_reviews: [
      { reviewer_name: "Olivia M.", rating: 5, comment: "I've noticed a huge difference in my cat's eating habits. She's so much more comfortable now!", date: "2024-07-15T10:00:00Z", images: ["/user_uploads/olivia_bowl.jpg"] }
    ],
    category: "Category 6",
    stock: 55,
    rating: 4.0,
    reviews: 45,
  },
  {
    id: 6,
    short_name: "Pet Grooming Kit",
    short_description: "Everything you need for a professional groom at home.",
    original_price: 1060,
    discountPercent: 20,
    images: ["/images/product_6.png", "/images/product_6b.png", "/images/product_6c.png"],
    brand: "PetSpark",
    weight: { value: 0.6, unit: "kg" },
    dimensions: { length: 25, width: 18, height: 7, unit: "cm" },
    product_tags: ["grooming", "brush", "kit", "pet-care"],
    detailed_description: `
      <h2>Spa Day at Home for Your Pet</h2>
      <p>This all-in-one grooming kit includes a de-shedding brush, nail clippers, and a gentle comb to keep your pet looking and feeling their best. The ergonomic handles provide a comfortable grip, making grooming a pleasant experience for both you and your pet.</p>
      <h3>Kit Includes:</h3>
      <ul>
        <li><strong>De-Shedding Brush:</strong> Reduces shedding by up to 90%.</li>
        <li><strong>Nail Clippers:</strong> Safe and easy-to-use with a safety guard.</li>
        <li><strong>Fine-Tooth Comb:</strong> Perfect for removing tangles and knots.</li>
      </ul>
      <p><strong>Tip:</strong> <br>Regular grooming helps maintain a healthy coat and prevents painful matting.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Stainless steel and ABS plastic" },
      { name: "Number of Items", value: "3" }
    ],
    customer_reviews: [
      { reviewer_name: "Robert K.", rating: 5, comment: "This kit is fantastic. The de-shedding brush works like a charm on my long-haired cat.", date: "2024-07-20T10:00:00Z", images: ["/user_uploads/robert_grooming.jpg"] }
    ],
    category: "Category 1",
    stock: 56,
    rating: 3.0,
    reviews: 50,
  },
  {
    id: 7,
    short_name: "Pet Carrier Backpack",
    short_description: "Travel comfortably and safely with your pet.",
    original_price: 1070,
    discountPercent: 30,
    images: ["/images/product_7.png", "/images/product_7b.png", "/images/product_7c.png"],
    brand: "Wanderer Pet",
    weight: { value: 1.1, unit: "kg" },
    dimensions: { length: 40, width: 30, height: 45, unit: "cm" },
    product_tags: ["travel", "carrier", "backpack", "pet-gear"],
    detailed_description: `
      <h2>Adventure Awaits!</h2>
      <p>Our pet carrier backpack is designed for ultimate convenience and comfort. With a breathable mesh window, padded shoulder straps, and a secure internal leash, it's perfect for hiking, biking, or simply a trip to the vet. It's a great way to include your small pet in all your adventures.</p>
      <h3>Features & Benefits:</h3>
      <ul>
        <li><strong>Breathable Mesh:</strong> Ensures proper ventilation and visibility.</li>
        <li><strong>Padded Straps:</strong> Provides comfort for the pet owner during long trips.</li>
        <li><strong>Front Pouch:</strong> Store treats, keys, or a water bottle.</li>
      </ul>
      <p><strong>Sizing:</strong> <br>Ideal for pets up to 8 kg.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Durable Oxford cloth" },
      { name: "Max Weight", value: "8 kg" }
    ],
    customer_reviews: [
      { reviewer_name: "Laura F.", rating: 4, comment: "Sturdy and comfortable for my cat. The side pockets are a bonus!", date: "2024-07-25T10:00:00Z", images: ["/user_uploads/laura_hike.jpg"] }
    ],
    category: "Category 2",
    stock: 57,
    rating: 3.5,
    reviews: 55,
  },
  {
    id: 8,
    short_name: "Catnip-Infused Toy Set",
    short_description: "A variety pack of toys to delight your cat.",
    original_price: 1080,
    discountPercent: 40,
    images: ["/images/product_8.png", "/images/product_8b.png", "/images/product_8c.png"],
    brand: "Feline Fun",
    weight: { value: 0.1, unit: "kg" },
    dimensions: { length: 20, width: 15, height: 3, unit: "cm" },
    product_tags: ["toy", "catnip", "variety-pack", "cat-toy"],
    detailed_description: `
      <h2>Treat Your Cat to a Playful Day</h2>
      <p>This variety pack of catnip-infused toys is guaranteed to bring out your cat's playful side. With different shapes, textures, and a potent dose of catnip, this set will keep them engaged for hours. The toys are made from safe, durable materials for long-lasting fun.</p>
      <h3>Set Includes:</h3>
      <ul>
        <li><strong>Feather wand:</strong> To satisfy their hunting instincts.</li>
        <li><strong>Plush mouse:</strong> Soft and perfect for pouncing.</li>
        <li><strong>Crinkle ball:</strong> Creates a satisfying sound to grab their attention.</li>
      </ul>
      <p><strong>Fun Fact:</strong> <br>Catnip is a safe and natural herb that encourages playful behavior in most cats.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Plush, plastic, feathers" },
      { name: "Contains", value: "Catnip" }
    ],
    customer_reviews: [
      { reviewer_name: "Adam G.", rating: 5, comment: "My cats went crazy for these toys! They are their new favorites.", date: "2024-07-30T10:00:00Z", images: ["/user_uploads/adam_toys.jpg"] }
    ],
    category: "Category 3",
    stock: 58,
    rating: 4.0,
    reviews: 60,
  },
  {
    id: 9,
    short_name: "Puppy Training Pads",
    short_description: "Absorbent pads for quick and easy potty training.",
    original_price: 1090,
    discountPercent: 50,
    images: ["/images/product_9.png", "/images/product_9b.png", "/images/product_9c.png"],
    brand: "Puppy Pal",
    weight: { value: 1.8, unit: "kg" },
    dimensions: { length: 60, width: 60, height: 1, unit: "cm" },
    product_tags: ["puppy", "training", "pads", "potty-training"],
    detailed_description: `
      <h2>Simplify Potty Training</h2>
      <p>Our puppy training pads are designed with five layers of protection to ensure maximum absorbency and leak-proof performance. The built-in attractant scent helps guide your puppy to the correct spot, making the training process faster and less stressful for both of you.</p>
      <h3>Pad Features:</h3>
      <ul>
        <li><strong>Super Absorbent:</strong> Quickly locks in moisture and odors.</li>
        <li><strong>Leak-Proof Barrier:</strong> Prevents messes on your floors.</li>
        <li><strong>Built-in Attractant:</strong> Encourages proper use.</li>
      </ul>
      <p><strong>Package Content:</strong> <br>50 pads per pack. Available in different sizes to fit your needs.</p>
    `,
    technical_specifications: [
      { name: "Layers", value: "5" },
      { name: "Scent", value: "Built-in attractant" }
    ],
    customer_reviews: [
      { reviewer_name: "Sam J.", rating: 4, comment: "These pads are very absorbent. They've made puppy training so much easier.", date: "2024-08-05T10:00:00Z", images: ["/user_uploads/sam_puppy.jpg"] }
    ],
    category: "Category 4",
    stock: 59,
    rating: 3.0,
    reviews: 65,
  },
  {
    id: 10,
    short_name: "Adjustable Pet Harness",
    short_description: "A comfortable and secure harness for daily walks.",
    original_price: 1100,
    discountPercent: 10,
    images: ["/images/product_10.png", "/images/product_10b.png", "/images/product_10c.png"],
    brand: "SafeWalk",
    weight: { value: 0.3, unit: "kg" },
    dimensions: { length: 25, width: 18, height: 5, unit: "cm" },
    product_tags: ["harness", "adjustable", "walks", "dog-gear"],
    detailed_description: `
      <h2>Walk Your Dog with Confidence</h2>
      <p>Our adjustable pet harness is designed for a perfect, secure fit. The padded chest and back straps prevent chafing and discomfort, while the two D-rings give you control and reduce pulling. Made from durable, breathable materials, it's perfect for all-day wear.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>No-Pull Design:</strong> Reduces pressure on your dog's neck and throat.</li>
        <li><strong>Reflective Strips:</strong> Provides visibility for night walks.</li>
        <li><strong>Adjustable Straps:</strong> Ensures a custom, secure fit.</li>
      </ul>
      <p><strong>How to Measure:</strong> <br>Measure your dog's chest circumference at the widest point.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Nylon webbing" },
      { name: "Reflective", value: "Yes" }
    ],
    customer_reviews: [
      { reviewer_name: "David T.", rating: 4, comment: "The harness fits great and my dog no longer pulls on his walks. The sizing guide was very helpful.", date: "2024-08-10T10:00:00Z", images: ["/user_uploads/david_walk.jpg"] }
    ],
    category: "Category 5",
    stock: 60,
    rating: 3.5,
    reviews: 70,
  },
  {
    id: 11,
    short_name: "Dog Life Vest",
    short_description: "A secure and buoyant vest for water activities.",
    original_price: 1110,
    discountPercent: 20,
    images: ["/images/product_11.png", "/images/product_11b.png", "/images/product_11c.png"],
    brand: "Water Pup",
    weight: { value: 0.7, unit: "kg" },
    dimensions: { length: 45, width: 35, height: 5, unit: "cm" },
    product_tags: ["life-vest", "water", "safety", "dog"],
    detailed_description: `
      <h2>Stay Safe in the Water</h2>
      <p>Our dog life vest provides optimal buoyancy and security for all water adventures. The bright colors and reflective trim enhance visibility, while the rescue handle on the back allows you to easily lift your dog out of the water. It’s perfect for boating, swimming, and paddleboarding.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>High-Buoyancy Foam:</strong> Ensures your dog stays afloat.</li>
        <li><strong>Rescue Handle:</strong> Allows for quick and easy retrieval.</li>
        <li><strong>Adjustable Straps:</strong> Creates a snug and secure fit.</li>
      </ul>
      <p><strong>Note:</strong> <br>Always supervise your dog when they are in the water.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Polyester and foam" },
      { name: "Color", value: "Hi-vis orange" }
    ],
    customer_reviews: [
      { reviewer_name: "Chris T.", rating: 5, comment: "This life vest gave me so much peace of mind at the lake. My dog swam with confidence!", date: "2024-08-15T10:00:00Z", images: ["/user_uploads/chris_swim.jpg"] }
    ],
    category: "Category 6",
    stock: 61,
    rating: 4.0,
    reviews: 75,
  },
  {
    id: 12,
    short_name: "Rabbit Chew Sticks",
    short_description: "Natural, healthy sticks for gnawing and dental health.",
    original_price: 1120,
    discountPercent: 30,
    images: ["/images/product_12.png", "/images/product_12b.png", "/images/product_12c.png"],
    brand: "Bunny Delights",
    weight: { value: 0.1, unit: "kg" },
    dimensions: { length: 15, width: 2, height: 2, unit: "cm" },
    product_tags: ["rabbit", "chew", "dental-health", "sticks"],
    detailed_description: `
      <h2>A Gnaw-some Treat for Your Bunny</h2>
      <p>Our rabbit chew sticks are made from all-natural applewood, providing a safe and healthy way for your rabbit to satisfy their natural urge to gnaw. Chewing on these sticks helps to keep their teeth at a healthy length and provides a great source of entertainment.</p>
      <h3>Benefits:</h3>
      <ul>
        <li><strong>Promotes Dental Health:</strong> Wears down teeth naturally.</li>
        <li><strong>100% Natural:</strong> No additives, dyes, or preservatives.</li>
        <li><strong>Relieves Boredom:</strong> Keeps your rabbit occupied and happy.</li>
      </ul>
      <p><strong>Usage:</strong> <br>Give 1-2 sticks per day, depending on your rabbit’s size.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Applewood" },
      { name: "Packaging", value: "Resealable bag" }
    ],
    customer_reviews: [
      { reviewer_name: "Jenna B.", rating: 5, comment: "My rabbits absolutely love these sticks. They’ve helped so much with their dental health.", date: "2024-08-20T10:00:00Z", images: ["/user_uploads/jenna_rabbit.jpg"] }
    ],
    category: "Category 1",
    stock: 62,
    rating: 3.0,
    reviews: 80,
  },
  {
    id: 13,
    short_name: "Bird Perch Stand",
    short_description: "A comfortable and secure stand for small to medium birds.",
    original_price: 1130,
    discountPercent: 40,
    images: ["/images/product_13.png", "/images/product_13b.png", "/images/product_13c.png"],
    brand: "Feathered Friends",
    weight: { value: 1.2, unit: "kg" },
    dimensions: { length: 30, width: 25, height: 40, unit: "cm" },
    product_tags: ["bird", "perch", "stand", "avian"],
    detailed_description: `
      <h2>Your Bird's New Favorite Spot</h2>
      <p>Our bird perch stand is made from natural, non-toxic wood and features a textured surface to promote foot health. It provides a great place for your bird to play, rest, and stretch its wings outside of the cage. The tray at the bottom collects droppings for easy cleaning.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Natural Wood:</strong> Safe and comfortable for bird feet.</li>
        <li><strong>Portable:</strong> Lightweight and easy to move around.</li>
        <li><strong>Easy to Clean:</strong> Removable base tray for quick cleanup.</li>
      </ul>
      <p><strong>Note:</strong> <br>Suitable for budgies, lovebirds, cockatiels, and similar-sized birds.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Pine wood" },
      { name: "Assembly", value: "Easy assembly required" }
    ],
    customer_reviews: [
      { reviewer_name: "Michael H.", rating: 5, comment: "My cockatiel loves this stand. It’s well-made and provides a great spot for him to hang out.", date: "2024-08-25T10:00:00Z", images: ["/user_uploads/michael_bird.jpg"] }
    ],
    category: "Category 2",
    stock: 63,
    rating: 3.5,
    reviews: 85,
  },
  {
    id: 14,
    short_name: "Aquarium Filter",
    short_description: "A powerful and quiet filter for a clean aquarium.",
    original_price: 1140,
    discountPercent: 50,
    images: ["/images/product_14.png", "/images/product_14b.png", "/images/product_14c.png"],
    brand: "AquaClear",
    weight: { value: 0.9, unit: "kg" },
    dimensions: { length: 15, width: 10, height: 18, unit: "cm" },
    product_tags: ["aquarium", "filter", "fish", "tank"],
    detailed_description: `
      <h2>Crystal Clear Water, Healthy Fish</h2>
      <p>Our aquarium filter provides three-stage filtration to keep your tank water clean and healthy. It combines mechanical, chemical, and biological filtration to remove debris, odors, and harmful toxins. The adjustable flow rate ensures it's suitable for a variety of tank sizes.</p>
      <h3>Filtration Stages:</h3>
      <ul>
        <li><strong>Mechanical:</strong> Sponges to capture debris.</li>
        <li><strong>Chemical:</strong> Activated carbon to remove odors and discoloration.</li>
        <li><strong>Biological:</strong> Bio-rings to cultivate beneficial bacteria.</li>
      </ul>
      <p><strong>Ideal for:</strong> <br>Aquariums up to 20 gallons.</p>
    `,
    technical_specifications: [
      { name: "Filtration", value: "3-stage" },
      { name: "Flow Rate", value: "Adjustable" }
    ],
    customer_reviews: [
      { reviewer_name: "Kevin S.", rating: 5, comment: "This filter is a game-changer! My tank has never been this clean and the fish are thriving.", date: "2024-08-30T10:00:00Z", images: ["/user_uploads/kevin_tank.jpg"] }
    ],
    category: "Category 3",
    stock: 64,
    rating: 4.0,
    reviews: 90,
  },
  {
    id: 15,
    short_name: "Small Animal Hideout",
    short_description: "A cozy, safe place for your hamster or guinea pig.",
    original_price: 1150,
    discountPercent: 10,
    images: ["/images/product_15.png", "/images/product_15b.png", "/images/product_15c.png"],
    brand: "Critter Comfort",
    weight: { value: 0.5, unit: "kg" },
    dimensions: { length: 20, width: 15, height: 12, unit: "cm" },
    product_tags: ["hamster", "guinea-pig", "hideout", "small-pet"],
    detailed_description: `
      <h2>A Safe Haven for Your Little Friend</h2>
      <p>This small animal hideout provides a secure and comfortable space for your pet to rest and feel safe. Made from natural, untreated wood, it's completely safe for gnawing and helps promote their dental health. The simple design blends seamlessly into any habitat.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Natural Wood:</strong> Non-toxic and safe for chewing.</li>
        <li><strong>Cozy & Dark:</strong> Provides a perfect spot for sleeping and hiding.</li>
        <li><strong>Easy to Clean:</strong> Simple to wipe down and maintain.</li>
      </ul>
      <p><strong>Note:</strong> <br>Suitable for hamsters, gerbils, mice, and other small rodents.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Untreated pine wood" },
      { name: "Safety", value: "Chew-safe" }
    ],
    customer_reviews: [
      { reviewer_name: "Sophia L.", rating: 5, comment: "My hamster loves her new hideout! She spends so much time in it.", date: "2024-09-05T10:00:00Z", images: ["/user_uploads/sophia_hamster.jpg"] }
    ],
    category: "Category 4",
    stock: 65,
    rating: 3.0,
    reviews: 95,
  },
  {
    id: 16,
    short_name: "Cat Scratching Post",
    short_description: "A durable post to satisfy your cat's scratching instincts.",
    original_price: 1160,
    discountPercent: 20,
    images: ["/images/product_16.png", "/images/product_16b.png", "/images/product_16c.png"],
    brand: "Pawsome Fun",
    weight: { value: 2.5, unit: "kg" },
    dimensions: { length: 40, width: 40, height: 60, unit: "cm" },
    product_tags: ["cat", "scratching-post", "toy", "furniture"],
    detailed_description: `
      <h2>Save Your Furniture, Entertain Your Cat</h2>
      <p>This scratching post is wrapped in tough, natural sisal rope that's perfect for your cat to dig their claws into. The sturdy base prevents tipping, ensuring a safe and satisfying scratching experience. It also features a small toy at the top to encourage playtime.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Sisal Rope:</strong> Durable and attractive to cats.</li>
        <li><strong>Sturdy Base:</strong> Prevents wobbling and tipping.</li>
        <li><strong>Hanging Toy:</strong> Adds an element of fun.</li>
      </ul>
      <p><strong>Note:</strong> <br>Place near your cat's favorite spot for best results.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Natural sisal rope" },
      { name: "Color", value: "Beige and brown" }
    ],
    customer_reviews: [
      { reviewer_name: "John W.", rating: 5, comment: "My cat immediately started using this and has left my sofa alone ever since!", date: "2024-09-10T10:00:00Z", images: ["/user_uploads/john_cat_scratch.jpg"] }
    ],
    category: "Category 5",
    stock: 66,
    rating: 3.5,
    reviews: 100,
  },
  {
    id: 17,
    short_name: "Dog Dental Chews",
    short_description: "A treat that cleans your dog's teeth and freshens breath.",
    original_price: 1170,
    discountPercent: 30,
    images: ["/images/product_17.png", "/images/product_17b.png", "/images/product_17c.png"],
    brand: "Fresh Breath",
    weight: { value: 0.3, unit: "kg" },
    dimensions: { length: 20, width: 15, height: 4, unit: "cm" },
    product_tags: ["dental", "chews", "dog", "treats"],
    detailed_description: `
      <h2>A Treat for Their Teeth</h2>
      <p>Our dog dental chews are specially formulated to reduce plaque and tartar buildup with every bite. The unique texture and shape help scrub away grime, while the minty flavor leaves your dog's breath smelling fresh and clean. Give one a day for a healthier mouth.</p>
      <h3>Benefits:</h3>
      <ul>
        <li><strong>Reduces Plaque:</strong> Fights dental disease.</li>
        <li><strong>Freshens Breath:</strong> Naturally eliminates bad breath.</li>
        <li><strong>Tasty Treat:</strong> A delicious reward they'll look forward to.</li>
      </ul>
      <p><strong>Serving Size:</strong> <br>1 chew per day for dogs 5-15 kg.</p>
    `,
    technical_specifications: [
      { name: "Ingredients", value: "Cornstarch, glycerin, natural flavor" },
      { name: "Quantity", value: "20 chews per bag" }
    ],
    customer_reviews: [
      { reviewer_name: "Lisa R.", rating: 4, comment: "They really work! My dog's breath is so much better.", date: "2024-09-15T10:00:00Z", images: ["/user_uploads/lisa_dog_chew.jpg"] }
    ],
    category: "Category 6",
    stock: 67,
    rating: 4.0,
    reviews: 105,
  },
  {
    id: 18,
    short_name: "Small Pet Playpen",
    short_description: "A portable playpen for hamsters, guinea pigs, and rabbits.",
    original_price: 1180,
    discountPercent: 40,
    images: ["/images/product_18.png", "/images/product_18b.png", "/images/product_18c.png"],
    brand: "Tiny Habitat",
    weight: { value: 1.0, unit: "kg" },
    dimensions: { length: 120, width: 120, height: 35, unit: "cm" },
    product_tags: ["playpen", "small-pet", "cage", "portable"],
    detailed_description: `
      <h2>Safe and Secure Playtime</h2>
      <p>Our small pet playpen provides a large, secure space for your pet to exercise and play. The durable, breathable mesh walls and zippered top prevent escapes and keep your pet safe. It's easy to set up and fold down, making it perfect for indoor and outdoor use.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Spacious Design:</strong> Provides ample room to run and play.</li>
        <li><strong>Pop-up Assembly:</strong> Sets up in seconds.</li>
        <li><strong>Travel-Friendly:</strong> Folds flat for easy storage and transport.</li>
      </ul>
      <p><strong>Note:</strong> <br>Does not include toys or accessories.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Polyester and steel wire" },
      { name: "Color", value: "Blue" }
    ],
    customer_reviews: [
      { reviewer_name: "Robert M.", rating: 5, comment: "My guinea pigs love their new playpen. It's a great way to let them explore safely.", date: "2024-09-20T10:00:00Z", images: ["/user_uploads/robert_playpen.jpg"] }
    ],
    category: "Category 1",
    stock: 68,
    rating: 3.0,
    reviews: 110,
  },
  {
    id: 19,
    short_name: "Dog Raincoat",
    short_description: "Keep your dog dry and stylish on rainy walks.",
    original_price: 1190,
    discountPercent: 10,
    images: ["/images/product_19.png", "/images/product_19b.png", "/images/product_19c.png"],
    brand: "Rainy Paws",
    weight: { value: 0.4, unit: "kg" },
    dimensions: { length: 40, width: 30, height: 2, unit: "cm" },
    product_tags: ["raincoat", "apparel", "dog-gear", "waterproof"],
    detailed_description: `
      <h2>Stylish and Dry in Any Weather</h2>
      <p>Our dog raincoat is made from lightweight, waterproof material to keep your dog comfortable and dry during walks in the rain. The adjustable straps ensure a snug fit, and the bright color with reflective stripes provides added safety and visibility.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Waterproof Fabric:</strong> Repels rain to keep your dog dry.</li>
        <li><strong>Leash Opening:</strong> A small opening at the neck for easy leash attachment.</li>
        <li><strong>Adjustable Fit:</strong> Hook-and-loop closures for a perfect fit.</li>
      </ul>
      <p><strong>Note:</strong> <br>Machine washable on a gentle cycle.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Polyester" },
      { name: "Safety", value: "Reflective stripes" }
    ],
    customer_reviews: [
      { reviewer_name: "Megan P.", rating: 5, comment: "Love this raincoat! It's so cute and it actually works to keep my dog from getting soaked.", date: "2024-09-25T10:00:00Z", images: ["/user_uploads/megan_raincoat.jpg"] }
    ],
    category: "Category 2",
    stock: 69,
    rating: 4.0,
    reviews: 115,
  },
  {
    id: 20,
    short_name: "Portable Pet Water Bottle",
    short_description: "A leak-proof bottle for hydration on the go.",
    original_price: 1200,
    discountPercent: 20,
    images: ["/images/product_20.png", "/images/product_20b.png", "/images/product_20c.png"],
    brand: "Hydrate Pet",
    weight: { value: 0.2, unit: "kg" },
    dimensions: { length: 25, width: 7, height: 7, unit: "cm" },
    product_tags: ["travel", "water-bottle", "portable", "dog-gear"],
    detailed_description: `
      <h2>Hydration Anywhere, Anytime</h2>
      <p>This portable pet water bottle is a must-have for walks, hikes, or travel. The bottle features a one-key lock and a built-in trough, making it easy to dispense water without waste. Its compact design fits easily in a backpack or car cup holder.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Leak-Proof Seal:</strong> Prevents spills and messes.</li>
        <li><strong>One-Hand Operation:</strong> Easy to use while on a walk.</li>
        <li><strong>Food-Grade Material:</strong> Safe and non-toxic.</li>
      </ul>
      <p><strong>Capacity:</strong> <br>550 ml.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "BPA-free plastic" },
      { name: "Capacity", value: "550 ml" }
    ],
    customer_reviews: [
      { reviewer_name: "Chris L.", rating: 5, comment: "So convenient for our long hikes. My dog loves drinking from it.", date: "2024-09-30T10:00:00Z", images: ["/user_uploads/chris_hike_water.jpg"] }
    ],
    category: "Category 3",
    stock: 70,
    rating: 3.5,
    reviews: 120,
  },
  {
    id: 21,
    short_name: "Pet Carrier",
    short_description: "A secure and comfortable carrier for small pets.",
    original_price: 1210,
    discountPercent: 20,
    images: ["/images/product_21.png", "/images/product_21b.png", "/images/product_21c.png"],
    brand: "Voyager Pet",
    weight: { value: 0.8, unit: "kg" },
    dimensions: { length: 45, width: 25, height: 28, unit: "cm" },
    product_tags: ["carrier", "travel", "cat", "dog"],
    detailed_description: `
      <h2>Travel in Comfort and Style</h2>
      <p>Our soft-sided pet carrier is designed for stress-free travel. It features a breathable mesh window for ventilation, a comfortable fleece bed inside, and multiple entry points. The durable, lightweight design makes it easy to carry, and it meets most airline requirements.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Ventilated Mesh:</strong> Provides ample airflow and visibility.</li>
        <li><strong>Cozy Interior:</strong> Removable fleece bed for comfort.</li>
        <li><strong>Multiple Entry Points:</strong> Top and side access for easy loading.</li>
      </ul>
      <p><strong>Note:</strong> <br>Check your airline's specific requirements before traveling.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Polyester" },
      { name: "Max Weight", value: "7 kg" }
    ],
    customer_reviews: [
      { reviewer_name: "Jessica P.", rating: 5, comment: "This carrier is perfect for my cat. It's sturdy and she feels safe inside.", date: "2025-01-10T10:00:00Z", images: ["/user_uploads/jessica_carrier.jpg"] }
    ],
    category: "Category 4",
    stock: 71,
    rating: 3.0,
    reviews: 125,
  },
  {
    id: 22,
    short_name: "Cat Window Perch",
    short_description: "A cozy sunbathing spot for your feline friend.",
    original_price: 1220,
    discountPercent: 15,
    images: ["/images/product_22.png"],
    brand: "Sunbather",
    weight: { value: 1.5, unit: "kg" },
    dimensions: { length: 50, width: 30, height: 10, unit: "cm" },
    product_tags: ["cat", "perch", "window", "furniture"],
    detailed_description: `
      <h2>The Best Seat in the House</h2>
      <p>This sturdy window perch provides your cat with a perfect spot to nap, bird-watch, and soak up the sun. The strong suction cups ensure it stays securely in place on any smooth glass surface. The removable, machine-washable mat provides ultimate comfort.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Strong Suction Cups:</strong> Holds up to 20 kg.</li>
        <li><strong>Cozy Mat:</strong> Soft and comfortable for napping.</li>
        <li><strong>Easy to Install:</strong> No tools required.</li>
      </ul>
      <p><strong>Note:</strong> <br>Clean the window and suction cups before installation for best results.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Plastic and polyester" },
      { name: "Max Weight", value: "20 kg" }
    ],
    customer_reviews: [
      { reviewer_name: "Samantha T.", rating: 5, comment: "My cat lives on this perch now! She absolutely loves it.", date: "2025-01-15T10:00:00Z", images: ["/user_uploads/samantha_perch.jpg"] }
    ],
    category: "Category 5",
    stock: 72,
    rating: 3.5,
    reviews: 130,
  },
  {
    id: 23,
    short_name: "Dog Puzzle Feeder Toy",
    short_description: "An interactive toy that challenges and rewards your dog.",
    original_price: 1230,
    discountPercent: 25,
    images: ["/images/product_23.png"],
    brand: "Brainy Paws",
    weight: { value: 0.6, unit: "kg" },
    dimensions: { length: 25, width: 25, height: 5, unit: "cm" },
    product_tags: ["toy", "feeder", "puzzle", "dog"],
    detailed_description: `
      <h2>Make Mealtime a Game</h2>
      <p>This puzzle feeder toy helps slow down fast eaters and provides mental stimulation for your dog. They must solve the puzzle to get their food, which helps prevent boredom and destructive behavior. It's a great way to make their mealtime more engaging and fun.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Mental Stimulation:</strong> Keeps your dog's mind sharp.</li>
        <li><strong>Slow Feeder:</strong> Promotes healthy digestion.</li>
        <li><strong>Durable Design:</strong> Made from tough, food-safe plastic.</li>
      </ul>
      <p><strong>Instructions:</strong> <br>Place kibble or treats in the compartments and let your dog figure out how to get them out.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Food-grade plastic" },
      { name: "Dishwasher Safe", value: "Yes" }
    ],
    customer_reviews: [
      { reviewer_name: "Brian L.", rating: 4, comment: "My dog loves this! It keeps him busy for a good 15 minutes.", date: "2025-01-20T10:00:00Z", images: ["/user_uploads/brian_puzzle.jpg"] }
    ],
    category: "Category 6",
    stock: 73,
    rating: 4.0,
    reviews: 135,
  },
  {
    id: 24,
    short_name: "Reptile Heat Lamp",
    short_description: "A reliable heat source for your reptile's habitat.",
    original_price: 1240,
    discountPercent: 30,
    images: ["/images/product_24.png"],
    brand: "Reptile Habitat",
    weight: { value: 0.2, unit: "kg" },
    dimensions: { length: 15, width: 10, height: 10, unit: "cm" },
    product_tags: ["reptile", "heat-lamp", "habitat", "terrarium"],
    detailed_description: `
      <h2>Keep Your Reptile Warm and Healthy</h2>
      <p>This heat lamp provides the essential warmth and UVA rays that reptiles need to thrive. It helps create a proper basking spot, which is crucial for their digestion, metabolism, and overall well-being. The long-lasting bulb is designed for consistent performance.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Provides UVA Rays:</strong> Essential for reptile health.</li>
        <li><strong>Reliable Heat:</strong> Creates a warm basking spot.</li>
        <li><strong>Standard Socket:</strong> Fits most clamp lamps.</li>
      </ul>
      <p><strong>Note:</strong> <br>Use with a proper fixture and a thermostat to regulate temperature.</p>
    `,
    technical_specifications: [
      { name: "Wattage", value: "100W" },
      { name: "Bulb Type", value: "Incandescent" }
    ],
    customer_reviews: [
      { reviewer_name: "Cathy W.", rating: 5, comment: "Perfect for my bearded dragon. The temperature is consistent and he seems so much happier.", date: "2025-01-25T10:00:00Z", images: ["/user_uploads/cathy_dragon.jpg"] }
    ],
    category: "Category 1",
    stock: 74,
    rating: 3.0,
    reviews: 140,
  },
  {
    id: 25,
    short_name: "Small Animal Water Bottle",
    short_description: "A drip-free water bottle for cages and habitats.",
    original_price: 1250,
    discountPercent: 10,
    images: ["/images/product_25.png"],
    brand: "Hydra Pet",
    weight: { value: 0.1, unit: "kg" },
    dimensions: { length: 15, width: 5, height: 5, unit: "cm" },
    product_tags: ["hamster", "rabbit", "water-bottle", "cage-accessory"],
    detailed_description: `
      <h2>A Fresh Drink, No Mess</h2>
      <p>This small animal water bottle features a stainless steel ball-bearing nozzle that prevents drips and leaks, keeping your pet's habitat dry and clean. The secure clip attachment allows you to easily mount it to any wire cage. The transparent design lets you see the water level at a glance.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Drip-Free Nozzle:</strong> Prevents leaks and messes.</li>
        <li><strong>Easy to Refill:</strong> Top-fill design.</li>
        <li><strong>Secure Attachment:</strong> Clips easily to wire cages.</li>
      </ul>
      <p><strong>Capacity:</strong> <br>150 ml.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "BPA-free plastic and stainless steel" },
      { name: "Capacity", value: "150 ml" }
    ],
    customer_reviews: [
      { reviewer_name: "Daniel F.", rating: 4, comment: "It works great, no more wet bedding in my hamster's cage!", date: "2025-01-30T10:00:00Z", images: ["/user_uploads/daniel_hamster_water.jpg"] }
    ],
    category: "Category 2",
    stock: 75,
    rating: 3.5,
    reviews: 145,
  },
  {
    id: 26,
    short_name: "Automatic Fish Feeder",
    short_description: "Feeds your fish on a schedule, even when you're away.",
    original_price: 1260,
    discountPercent: 20,
    images: ["/images/product_26.png"],
    brand: "AquaTime",
    weight: { value: 0.3, unit: "kg" },
    dimensions: { length: 12, width: 10, height: 8, unit: "cm" },
    product_tags: ["fish", "feeder", "aquarium", "automatic"],
    detailed_description: `
      <h2>Consistent Meals for Your Fish</h2>
      <p>This automatic fish feeder ensures your fish are fed on a regular schedule, preventing overfeeding and keeping them healthy. You can program up to four feeding times a day, and the moisture-resistant hopper keeps food fresh. It's perfect for vacations or busy schedules.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Programmable Timer:</strong> Set up to 4 feeding times per day.</li>
        <li><strong>Adjustable Port:</strong> Controls the amount of food dispensed.</li>
        <li><strong>Moisture-Resistant:</strong> Keeps food dry and fresh.</li>
      </ul>
      <p><strong>Power Source:</strong> <br>Requires 2 x AA batteries (not included).</p>
    `,
    technical_specifications: [
      { name: "Power Source", value: "2 x AA batteries" },
      { name: "Tank Compatibility", value: "Suitable for most aquariums" }
    ],
    customer_reviews: [
      { reviewer_name: "Steve P.", rating: 5, comment: "This feeder is a lifesaver for when I travel. My fish are doing great!", date: "2025-02-05T10:00:00Z", images: ["/user_uploads/steve_fish_feeder.jpg"] }
    ],
    category: "Category 3",
    stock: 76,
    rating: 4.0,
    reviews: 150,
  },
  {
    id: 27,
    short_name: "Small Pet Harness and Leash",
    short_description: "A secure and comfortable harness for ferrets and rabbits.",
    original_price: 1270,
    discountPercent: 30,
    images: ["/images/product_27.png"],
    brand: "Critter Walk",
    weight: { value: 0.05, unit: "kg" },
    dimensions: { length: 15, width: 10, height: 2, unit: "cm" },
    product_tags: ["harness", "leash", "small-pet", "rabbit", "ferret"],
    detailed_description: `
      <h2>Explore Safely with Your Small Pet</h2>
      <p>This lightweight and adjustable harness is designed to fit snugly and comfortably on small animals like ferrets and rabbits. The breathable mesh material prevents overheating, and the secure buckle ensures your pet can't slip out. The matching leash is perfect for supervised walks.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Adjustable Straps:</strong> Provides a secure fit.</li>
        <li><strong>Breathable Mesh:</strong> Keeps your pet cool.</li>
        <li><strong>Quick-Release Buckle:</strong> For easy on and off.</li>
      </ul>
      <p><strong>Note:</strong> <br>Always supervise your pet during walks.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Polyester mesh" },
      { name: "Size", value: "One size fits most small animals" }
    ],
    customer_reviews: [
      { reviewer_name: "Maria C.", rating: 4, comment: "The harness fits my ferret well and feels secure. Great for short outdoor trips.", date: "2025-02-10T10:00:00Z", images: ["/user_uploads/maria_ferret.jpg"] }
    ],
    category: "Category 4",
    stock: 77,
    rating: 3.5,
    reviews: 155,
  },
  {
    id: 28,
    short_name: "Dog Booties",
    short_description: "Protects your dog's paws from hot pavement and rough terrain.",
    original_price: 1280,
    discountPercent: 50,
    images: ["/images/product_28.png"],
    brand: "Pawsitive",
    weight: { value: 0.2, unit: "kg" },
    dimensions: { length: 12, width: 8, height: 5, unit: "cm" },
    product_tags: ["dog", "booties", "footwear", "protection"],
    detailed_description: `
      <h2>Protect Your Best Friend's Paws</h2>
      <p>These durable dog booties provide essential protection for your dog's paws against hot asphalt, ice, snow, and sharp objects. The non-slip rubber soles offer excellent traction, and the reflective straps ensure visibility during night walks. They're a must-have for all-season adventures.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Durable Soles:</strong> Protects from rough surfaces.</li>
        <li><strong>Reflective Straps:</strong> For night-time safety.</li>
        <li><strong>Adjustable Velcro:</strong> Ensures a secure and comfortable fit.</li>
      </ul>
      <p><strong>Sizing:</strong> <br>Measure your dog's paw width for the best fit.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Rubber sole and polyester" },
      { name: "Set", value: "Includes 4 booties" }
    ],
    customer_reviews: [
      { reviewer_name: "Tom K.", rating: 5, comment: "These are a game-changer for summer walks! My dog's paws are safe now.", date: "2025-02-15T10:00:00Z", images: ["/user_uploads/tom_dog_booties.jpg"] }
    ],
    category: "Category 5",
    stock: 78,
    rating: 3.0,
    reviews: 160,
  },
  {
    id: 29,
    short_name: "Bird Food Dispenser",
    short_description: "An easy-to-fill feeder for your bird's cage.",
    original_price: 1290,
    discountPercent: 10,
    images: ["/images/product_29.png"],
    brand: "Feather Feed",
    weight: { value: 0.2, unit: "kg" },
    dimensions: { length: 10, width: 8, height: 15, unit: "cm" },
    product_tags: ["bird", "feeder", "cage-accessory", "food-dispenser"],
    detailed_description: `
      <h2>Keep Your Bird's Food Fresh and Clean</h2>
      <p>This bird food dispenser automatically replenishes food as your bird eats, reducing waste and keeping their food clean from droppings. The clear design allows you to monitor food levels easily, and the simple attachment mechanism fits most cages. It's a hygienic and convenient way to feed your bird.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Automatic Refill:</strong> Ensures a constant supply of food.</li>
        <li><strong>Hygienic Design:</strong> Protects food from contamination.</li>
        <li><strong>Clear Plastic:</strong> Easy to monitor food levels.</li>
      </ul>
      <p><strong>Note:</strong> <br>Compatible with most seed and pellet foods.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Food-grade plastic" },
      { name: "Capacity", value: "300g" }
    ],
    customer_reviews: [
      { reviewer_name: "Linda G.", rating: 4, comment: "Works well and keeps the cage cleaner. It's a little small for my parrot though.", date: "2025-02-20T10:00:00Z", images: ["/user_uploads/linda_bird_feeder.jpg"] }
    ],
    category: "Category 6",
    stock: 79,
    rating: 3.5,
    reviews: 165,
  },
  {
    id: 30,
    short_name: "Small Animal Hay Feeder",
    short_description: "A mess-free way to provide hay for your rabbit or guinea pig.",
    original_price: 1300,
    discountPercent: 20,
    images: ["/images/product_30.png"],
    brand: "Bunny Burrow",
    weight: { value: 0.3, unit: "kg" },
    dimensions: { length: 25, width: 15, height: 20, unit: "cm" },
    product_tags: ["hay-feeder", "rabbit", "guinea-pig", "cage-accessory"],
    detailed_description: `
      <h2>Clean Hay, Happy Pet</h2>
      <p>This hay feeder keeps hay off the floor of your pet's cage, preventing waste and contamination. It's easy to fill and the wire grate design allows your pet to pull out hay without making a mess. It's a simple solution for a cleaner and healthier habitat.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Reduces Waste:</strong> Keeps hay clean and accessible.</li>
        <li><strong>Easy to Attach:</strong> Secures to the side of the cage.</li>
        <li><strong>Durable Construction:</strong> Made from pet-safe plastic.</li>
      </ul>
      <p><strong>Note:</strong> <br>Also suitable for chinchillas and other small herbivores.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Plastic" },
      { name: "Mounting", value: "Wire cage attachment" }
    ],
    customer_reviews: [
      { reviewer_name: "Paul B.", rating: 5, comment: "My guinea pigs love this! It's so much easier to keep their cage clean now.", date: "2025-02-25T10:00:00Z", images: ["/user_uploads/paul_hay_feeder.jpg"] }
    ],
    category: "Category 1",
    stock: 80,
    rating: 4.0,
    reviews: 170,
  },
  {
    id: 31,
    short_name: "Collapsible Pet Bowl",
    short_description: "A portable bowl for food and water on the go.",
    original_price: 1310,
    discountPercent: 30,
    images: ["/images/product_31.png"],
    brand: "Go-Pet",
    weight: { value: 0.1, unit: "kg" },
    dimensions: { length: 15, width: 15, height: 1.5, unit: "cm" },
    product_tags: ["travel", "collapsible", "bowl", "dog-gear"],
    detailed_description: `
      <h2>Hydration on Your Adventures</h2>
      <p>This collapsible pet bowl is made from flexible, food-grade silicone and is perfect for travel. It folds flat for easy storage in a backpack or pocket and can be used for both food and water. The included carabiner clip lets you attach it to a leash or bag.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Food-Grade Silicone:</strong> Safe and non-toxic.</li>
        <li><strong>Compact Design:</strong> Folds flat for easy portability.</li>
        <li><strong>Carabiner Clip:</strong> Attaches to leashes or bags.</li>
      </ul>
      <p><strong>Note:</strong> <br>Dishwasher safe for easy cleaning.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Silicone" },
      { name: "Capacity", value: "450 ml" }
    ],
    customer_reviews: [
      { reviewer_name: "Sarah M.", rating: 5, comment: "Super convenient! I use this all the time for hikes with my dog.", date: "2025-03-01T10:00:00Z", images: ["/user_uploads/sarah_collapsible_bowl.jpg"] }
    ],
    category: "Category 2",
    stock: 81,
    rating: 3.5,
    reviews: 175,
  },
  {
    id: 32,
    short_name: "Cat Tunnel Toy",
    short_description: "An exciting tunnel for your cat to play, hide, and chase.",
    original_price: 1320,
    discountPercent: 40,
    images: ["/images/product_32.png"],
    brand: "Cat-Play",
    weight: { value: 0.5, unit: "kg" },
    dimensions: { length: 100, diameter: 25, unit: "cm" },
    product_tags: ["cat", "toy", "tunnel", "interactive"],
    detailed_description: `
      <h2>Endless Fun for Your Feline</h2>
      <p>This cat tunnel is a great way to provide exercise and entertainment for your cat. The crinkle paper and peekaboo holes encourage play and stimulate their curiosity. It's collapsible for easy storage and features durable, tear-resistant fabric.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Crinkle Paper:</strong> Attracts and engages cats.</li>
        <li><strong>Peekaboo Holes:</strong> Encourages chasing and pouncing.</li>
        <li><strong>Collapsible Design:</strong> Folds flat for storage.</li>
      </ul>
      <p><strong>Note:</strong> <br>Suitable for cats of all ages and sizes.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Polyester and steel frame" },
      { name: "Shape", value: "S-shaped tunnel" }
    ],
    customer_reviews: [
      { reviewer_name: "Jenny S.", rating: 5, comment: "My cat can't get enough of this tunnel! It's so much fun to watch him play.", date: "2025-03-05T10:00:00Z", images: ["/user_uploads/jenny_cat_tunnel.jpg"] }
    ],
    category: "Category 3",
    stock: 82,
    rating: 3.0,
    reviews: 180,
  },
  {
    id: 33,
    short_name: "Dog Shedding Brush",
    short_description: "Reduces shedding and keeps your dog's coat healthy.",
    original_price: 1330,
    discountPercent: 50,
    images: ["/images/product_33.png"],
    brand: "PetSpark",
    weight: { value: 0.2, unit: "kg" },
    dimensions: { length: 20, width: 10, height: 5, unit: "cm" },
    product_tags: ["grooming", "brush", "dog", "shedding"],
    detailed_description: `
      <h2>Say Goodbye to Pet Hair</h2>
      <p>This de-shedding brush is designed to remove loose hair from your dog's undercoat, reducing shedding by up to 90%. The stainless steel edge reaches through the topcoat to safely and easily remove loose hair and tangles without damaging the skin. The ergonomic handle provides a comfortable grip.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Stainless Steel Edge:</strong> Reaches deep into the undercoat.</li>
        <li><strong>Ergonomic Handle:</strong> Comfortable and easy to use.</li>
        <li><strong>Reduces Shedding:</strong> Keeps your home cleaner.</li>
      </ul>
      <p><strong>Note:</strong> <br>Use once or twice a week for best results.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Stainless steel and plastic" },
      { name: "Size", value: "Medium" }
    ],
    customer_reviews: [
      { reviewer_name: "Kevin R.", rating: 5, comment: "I can't believe how much hair this brush gets off my golden retriever. It's amazing!", date: "2025-03-10T10:00:00Z", images: ["/user_uploads/kevin_shedding.jpg"] }
    ],
    category: "Category 4",
    stock: 83,
    rating: 3.5,
    reviews: 185,
  },
  {
    id: 34,
    short_name: "Small Pet Igloo",
    short_description: "A cozy, plastic hideout for small animals.",
    original_price: 1340,
    discountPercent: 10,
    images: ["/images/product_34.png"],
    brand: "Critter Comfort",
    weight: { value: 0.15, unit: "kg" },
    dimensions: { length: 20, width: 20, height: 12, unit: "cm" },
    product_tags: ["hamster", "guinea-pig", "hideout", "igloo"],
    detailed_description: `
      <h2>The Perfect Hiding Spot</h2>
      <p>This small animal igloo provides a private and secure place for your pet to rest and sleep. Made from durable, translucent plastic, it’s easy to clean and provides a sense of security for your pet. The smooth interior is gentle on their fur and skin.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Safe & Secure:</strong> Provides a sense of security.</li>
        <li><strong>Easy to Clean:</strong> Simple to wipe down.</li>
        <li><strong>Ventilation Holes:</strong> Ensures proper airflow.</li>
      </ul>
      <p><strong>Note:</strong> <br>Available in a variety of colors.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Durable plastic" },
      { name: "Size", value: "Small" }
    ],
    customer_reviews: [
      { reviewer_name: "Ashley C.", rating: 4, comment: "My hamster loves this! It's a bit small for my guinea pig though.", date: "2025-03-15T10:00:00Z", images: ["/user_uploads/ashley_hamster_igloo.jpg"] }
    ],
    category: "Category 5",
    stock: 84,
    rating: 4.0,
    reviews: 190,
  },
  {
    id: 35,
    short_name: "Aquarium Air Pump",
    short_description: "A quiet and powerful pump to oxygenate your tank.",
    original_price: 1350,
    discountPercent: 20,
    images: ["/images/product_35.png"],
    brand: "AquaClear",
    weight: { value: 0.3, unit: "kg" },
    dimensions: { length: 12, width: 8, height: 6, unit: "cm" },
    product_tags: ["aquarium", "air-pump", "fish", "tank"],
    detailed_description: `
      <h2>Healthy Water, Happy Fish</h2>
      <p>This air pump provides essential oxygen to your aquarium, which is crucial for the health of your fish and the beneficial bacteria in your filter. Its quiet operation won't disturb you or your pets. It's easy to install and comes with everything you need to get started.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Quiet Operation:</strong> Won't create noise.</li>
        <li><strong>Powerful Airflow:</strong> Ensures proper oxygenation.</li>
        <li><strong>Compact Design:</strong> Fits neatly behind the tank.</li>
      </ul>
      <p><strong>Note:</strong> <br>Includes air stone and tubing.</p>
    `,
    technical_specifications: [
      { name: "Power Source", value: "AC adapter" },
      { name: "Noise Level", value: "Low" }
    ],
    customer_reviews: [
      { reviewer_name: "Mark D.", rating: 5, comment: "Super quiet and effective. My fish are much more active now.", date: "2025-03-20T10:00:00Z", images: ["/user_uploads/mark_air_pump.jpg"] }
    ],
    category: "Category 6",
    stock: 85,
    rating: 3.5,
    reviews: 195,
  },
  {
    id: 36,
    short_name: "Dog Travel Crate",
    short_description: "A secure and portable crate for travel and training.",
    original_price: 1360,
    discountPercent: 30,
    images: ["/images/product_36.png"],
    brand: "Safe-Travel",
    weight: { value: 5.0, unit: "kg" },
    dimensions: { length: 70, width: 50, height: 50, unit: "cm" },
    product_tags: ["crate", "travel", "dog", "training"],
    detailed_description: `
      <h2>Your Dog's Home Away from Home</h2>
      <p>This lightweight, collapsible dog crate is perfect for travel and for use at home. It provides a secure and comfortable space for your dog to relax. The durable mesh windows provide excellent ventilation and visibility, and the multiple doors make it easy to get your dog in and out. It's a great tool for crate training.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Collapsible Design:</strong> Folds flat for easy storage.</li>
        <li><strong>Durable Mesh:</strong> Provides ventilation and visibility.</li>
        <li><strong>Multiple Doors:</strong> Front and top entry points.</li>
      </ul>
      <p><strong>Note:</strong> <br>Available in a variety of sizes to fit your dog.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Steel frame and nylon fabric" },
      { name: "Size", value: "Medium" }
    ],
    customer_reviews: [
      { reviewer_name: "Jessica L.", rating: 5, comment: "This crate is so easy to set up and transport. My dog feels very comfortable in it.", date: "2025-03-25T10:00:00Z", images: ["/user_uploads/jessica_crate.jpg"] }
    ],
    category: "Category 1",
    stock: 86,
    rating: 4.0,
    reviews: 200,
  },
  {
    id: 37,
    short_name: "Catnip Spray",
    short_description: "A natural way to encourage playful behavior.",
    original_price: 1370,
    discountPercent: 40,
    images: ["/images/product_37.png"],
    brand: "Feline Fun",
    weight: { value: 0.1, unit: "kg" },
    dimensions: { length: 15, width: 4, height: 4, unit: "cm" },
    product_tags: ["catnip", "toy", "cat-toy", "spray"],
    detailed_description: `
      <h2>The Purr-fect Playtime Boost</h2>
      <p>This catnip spray is made from 100% natural catnip oil and is a great way to refresh old toys, scratching posts, or bedding. The potent scent will attract and engage your cat, encouraging them to play and scratch in the right places. It's a safe and effective way to enrich their environment.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>100% Natural:</strong> Made from pure catnip oil.</li>
        <li><strong>Non-Staining:</strong> Safe for use on furniture and toys.</li>
        <li><strong>Easy to Use:</strong> Just a few sprays are all you need.</li>
      </ul>
      <p><strong>Note:</strong> <br>Not all cats respond to catnip.</p>
    `,
    technical_specifications: [
      { name: "Ingredients", value: "Catnip oil, water" },
      { name: "Volume", value: "100 ml" }
    ],
    customer_reviews: [
      { reviewer_name: "Adam G.", rating: 5, comment: "This spray works wonders on my cat's old toys. It's like they're brand new!", date: "2025-03-30T10:00:00Z", images: ["/user_uploads/adam_catnip.jpg"] }
    ],
    category: "Category 2",
    stock: 87,
    rating: 3.5,
    reviews: 205,
  },
  {
    id: 38,
    short_name: "Dog Poop Bags",
    short_description: "Biodegradable bags for responsible clean-up.",
    original_price: 1380,
    discountPercent: 50,
    images: ["/images/product_38.png"],
    brand: "Earth-Paws",
    weight: { value: 0.5, unit: "kg" },
    dimensions: { length: 20, width: 15, height: 5, unit: "cm" },
    product_tags: ["poop-bags", "biodegradable", "dog", "clean-up"],
    detailed_description: `
      <h2>Do Your Part for the Planet</h2>
      <p>These dog poop bags are made from plant-based materials and are 100% biodegradable. They are thick, leak-proof, and large enough for any size dog. The unscented design is perfect for those with sensitive noses. Each box comes with enough bags to last for weeks.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>100% Biodegradable:</strong> Eco-friendly and compostable.</li>
        <li><strong>Thick & Leak-Proof:</strong> Durable and reliable.</li>
        <li><strong>Unscented:</strong> No artificial fragrances.</li>
      </ul>
      <p><strong>Package Content:</strong> <br>240 bags per box.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Plant-based bioplastics" },
      { name: "Quantity", value: "16 rolls (15 bags/roll)" }
    ],
    customer_reviews: [
      { reviewer_name: "David S.", rating: 5, comment: "Love that these are eco-friendly and they work just as well as plastic bags.", date: "2025-04-05T10:00:00Z", images: ["/user_uploads/david_poop_bags.jpg"] }
    ],
    category: "Category 3",
    stock: 88,
    rating: 3.0,
    reviews: 210,
  },
  {
    id: 39,
    short_name: "Cat Litter Mat",
    short_description: "A mat that traps litter and keeps your floors clean.",
    original_price: 1390,
    discountPercent: 10,
    images: ["/images/product_39.png"],
    brand: "Litter-Trap",
    weight: { value: 0.8, unit: "kg" },
    dimensions: { length: 60, width: 45, height: 1, unit: "cm" },
    product_tags: ["cat", "litter", "mat", "clean-up"],
    detailed_description: `
      <h2>No More Messy Floors</h2>
      <p>This cat litter mat features a unique honeycomb design that traps litter from your cat's paws as they exit the litter box. The mat is waterproof and easy to clean, just shake it out or rinse it off. It's a simple and effective solution to a common problem.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Honeycomb Design:</strong> Traps litter effectively.</li>
        <li><strong>Waterproof:</strong> Protects floors from spills.</li>
        <li><strong>Easy to Clean:</strong> Can be shaken or rinsed.</li>
      </ul>
      <p><strong>Note:</strong> <br>Available in multiple colors and sizes.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "EVA foam" },
      { name: "Size", value: "Large" }
    ],
    customer_reviews: [
      { reviewer_name: "Emily P.", rating: 4, comment: "It works great! My floor is so much cleaner now.", date: "2025-04-10T10:00:00Z", images: ["/user_uploads/emily_litter_mat.jpg"] }
    ],
    category: "Category 4",
    stock: 89,
    rating: 3.5,
    reviews: 215,
  },
  {
    id: 40,
    short_name: "Dog Car Seat Cover",
    short_description: "Protects your car seats from pet hair and messes.",
    original_price: 1400,
    discountPercent: 20,
    images: ["/images/product_40.png"],
    brand: "Road-Trip",
    weight: { value: 1.5, unit: "kg" },
    dimensions: { length: 145, width: 130, height: 1, unit: "cm" },
    product_tags: ["car-seat-cover", "dog", "travel", "protection"],
    detailed_description: `
      <h2>Travel with Your Dog, Worry-Free</h2>
      <p>This durable, waterproof car seat cover protects your back seats from pet hair, dirt, and scratches. It's easy to install with adjustable straps and fits most cars, trucks, and SUVs. The non-slip backing ensures it stays in place, providing a comfortable and safe ride for your dog.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Waterproof Material:</strong> Protects against spills and messes.</li>
        <li><strong>Non-Slip Backing:</strong> Keeps the cover in place.</li>
        <li><strong>Easy to Install:</strong> Quick-release clips for easy on and off.</li>
      </ul>
      <p><strong>Note:</strong> <br>Can be used in a hammock style or as a standard seat cover.</p>
    `,
    technical_specifications: [
      { name: "Material", value: "Polyester" },
      { name: "Color", value: "Black" }
    ],
    customer_reviews: [
      { reviewer_name: "Chris L.", rating: 5, comment: "This is exactly what I needed! My car is finally clean after road trips with my dog.", date: "2025-04-15T10:00:00Z", images: ["/user_uploads/chris_car_cover.jpg"] }
    ],
    category: "Category 5",
    stock: 90,
    rating: 4.0,
    reviews: 220,
  }
];

export default products;