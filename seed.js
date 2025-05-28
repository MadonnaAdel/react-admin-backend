import order from "./model/order.js";
import post from "./model/post.js";
import product from "./model/product.js";
import User from "./model/user.js";
let users = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "hubbard@gmail.com",
    phone: "423 452 729",
    createdAt: "05.07.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "manning@gmail.com",
    phone: "422 426 715",
    createdAt: "03.07.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "greer@hottmail.com",
    phone: "563 632 325",
    createdAt: "02.07.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "williamson@gmail.com",
    phone: "534 522 125",
    createdAt: "12.06.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "462 252 624",
    createdAt: "10.06.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "735 523 563",
    createdAt: "11.05.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "235 734 574",
    createdAt: "04.05.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "377 346 834",
    createdAt: "08.04.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "parsons@gmail.com",
    phone: "745 677 345",
    createdAt: "04.04.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "elnora@gmail.com",
    phone: "763 345 346",
    createdAt: "01.04.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gertrude@gmail.com",
    phone: "124 456 789",
    createdAt: "05.04.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "williams@hotmail.com",
    phone: "626 235 345",
    createdAt: "01.03.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "charlotte@gmail.com",
    phone: "673 547 343",
    createdAt: "03.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "harper@hotmail.com",
    phone: "734 234 234",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "griffin@gmail.com",
    phone: "763 234 235",
    createdAt: "01.01.2023",
  },
];
let products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/HighResolutionPNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/reviewimage/102489/previewsony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/AsAO1-131graynonglarewin10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

 const orders = [
{     
    id: 1,
    productId: 3,
    productTitle: "Samsung TV 4K SmartTV",
    customerName: "Khaled Hassan",
    quantity: 1,
    totalPrice: "$999.49",
    orderDate: "10.03.2025",
    status: "delivered"
  },
{
    id: 2,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Layla Farah",
    quantity: 3,
    totalPrice: "$752.97",
    orderDate: "28.04.2025",
    status: "cancelled"
  },
{
    id: 3,
    productId: 3,
    productTitle: "Samsung TV 4K SmartTV",
    customerName: "Khaled Malik",
    quantity: 2,
    totalPrice: "$1998.98",
    orderDate: "04.10.2023",
    status: "delivered"
  },
{
    id: 4,
    productId: 6,
    productTitle: "Logitech MX Master 3",
    customerName: "Nour Khan",
    quantity: 2,
    totalPrice: "$118.98",
    orderDate: "26.05.2023",
    status: "shipped"
  },
{
    id: 5,
    productId: 3,
    productTitle: "Samsung TV 4K SmartTV",
    customerName: "Ahmed Farah",
    quantity: 3,
    totalPrice: "$2998.47",
    orderDate: "15.02.2023",
    status: "shipped"
  },
{
    id: 6,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Fatima Tariq",
    quantity: 2,
    totalPrice: "$1598.98",
    orderDate: "09.12.2023",
    status: "pending"
  },
{
    id: 7,
    productId: 2,
    productTitle: "Dell Laptop KR211822",
    customerName: "Zainab Farah",
    quantity: 1,
    totalPrice: "$499.99",
    orderDate: "17.11.2024",
    status: "delivered"
  },
{
    id: 8,
    productId: 7,
    productTitle: "Rode Podcast Microphone",
    customerName: "Nour Osman",
    quantity: 3,
    totalPrice: "$358.47",
    orderDate: "15.01.2024",
    status: "cancelled"
  },
{
    id: 9,
    productId: 2,
    productTitle: "Dell Laptop KR211822",
    customerName: "Zainab Ibrahim",
    quantity: 1,
    totalPrice: "$499.99",
    orderDate: "18.04.2024",
    status: "delivered"
  },
{
    id: 10,
    productId: 5,
    productTitle: "Philips Hue Play Gradient",
    customerName: "Mustafa Abbas",
    quantity: 2,
    totalPrice: "$79.98",
    orderDate: "01.03.2025",
    status: "pending"
  },
{
    id: 11,
    productId: 7,
    productTitle: "Rode Podcast Microphone",
    customerName: "Hassan Zahra",
    quantity: 3,
    totalPrice: "$358.47",
    orderDate: "31.01.2023",
    status: "cancelled"
  },
{
    id: 12,
    productId: 6,
    productTitle: "Logitech MX Master 3",
    customerName: "Mustafa Zahra",
    quantity: 2,
    totalPrice: "$118.98",
    orderDate: "21.05.2023",
    status: "pending"
  },
{
    id: 13,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Zainab Khan",
    quantity: 2,
    totalPrice: "$1598.98",
    orderDate: "27.09.2024",
    status: "shipped"
  },
{
    id: 14,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Zainab Malik",
    quantity: 3,
    totalPrice: "$2398.47",
    orderDate: "04.05.2025",
    status: "cancelled"
  },
{
    id: 15,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Khaled Qureshi",
    quantity: 2,
    totalPrice: "$501.98",
    orderDate: "12.03.2024",
    status: "cancelled"
  },
{
    id: 16,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Khaled Tariq",
    quantity: 1,
    totalPrice: "$250.99",
    orderDate: "22.08.2024",
    status: "delivered"
  },
{
    id: 17,
    productId: 2,
    productTitle: "Dell Laptop KR211822",
    customerName: "Hassan Zahra",
    quantity: 3,
    totalPrice: "$1499.97",
    orderDate: "18.06.2024",
    status: "pending"
  },
{
    id: 18,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Hassan Siddiqui",
    quantity: 2,
    totalPrice: "$501.98",
    orderDate: "22.05.2023",
    status: "delivered"
  },
{
    id: 19,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Mustafa Siddiqui",
    quantity: 1,
    totalPrice: "$799.49",
    orderDate: "25.10.2024",
    status: "cancelled"
  },
{
    id: 20,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Ahmed Said",
    quantity: 1,
    totalPrice: "$799.49",
    orderDate: "09.12.2024",
    status: "cancelled"
  }
];

const posts = [
  {
    id: 1,
    title: "Toshiba Split AC 2 Tips and Tricks",
    content:
      "Discover hidden features and expert advice for your Toshiba Split AC 2. These tips will help you become a power user.",
    author: "Industry Analyst",
    createdAt: "05.07.2023",
    tags: ["tech", "tips", "home", "video", "gadgets"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Apple Iphone 14 Pro Max",
    content:
      "This comprehensive guide covers everything you need to know about the Apple Iphone 14 Pro Max, from setup to advanced usage.",
    author: "Tech Guru",
    createdAt: "08.04.2025",
    tags: ["smart home", "deals", "audio", "comparison", "video"],
  },
  {
    id: 3,
    title: "How to Get the Most Out of Your Playstation 5 Digital Edition",
    content:
      "Own a Playstation 5 Digital Edition? Learn some useful tips and tricks to maximize its potential and enhance your experience.",
    author: "Tech Guru",
    createdAt: "08.04.2025",
    tags: ["audio", "deals", "smart home", "tips", "comparison"],
  },
  {
    id: 4,
    title: "Top 5 Features of the Dell Laptop KR211822",
    content:
      "The Dell Laptop KR211822 comes packed with features. We highlight the top 5 things you need to know about this exciting product.",
    author: "Admin",
    createdAt: "05.04.2024",
    tags: ["tips", "gaming", "deals"],
  },
  {
    id: 5,
    title: "Philips Hue Play Gradient Review: Is It Worth It?",
    content:
      "We recently got our hands on the Philips Hue Play Gradient. Here's our detailed review, covering design, functionality, and value for money.",
    author: "Support Team",
    createdAt: "01.08.2023",
    tags: ["lifestyle", "audio", "news", "review", "mobile"],
  },
  {
    id: 6,
    title: "Top 5 Features of the Rode Podcast Microphone",
    content:
      "The Rode Podcast Microphone comes packed with features. We highlight the top 5 things you need to know about this exciting product.",
    author: "Gamer Zone",
    createdAt: "01.03.2025",
    tags: ["tips", "home", "guide", "mobile", "lifestyle"],
  },
  {
    id: 7,
    title: "Samsung TV 4K SmartTV Tips and Tricks",
    content:
      "Discover hidden features and expert advice for your Samsung TV 4K SmartTV. These tips will help you become a power user.",
    author: "Support Team",
    createdAt: "06.25.2023",
    tags: ["lifestyle", "gadgets"],
  },
  {
    id: 8,
    title: "Exploring the New Philips Hue Play Gradient",
    content:
      "In this post, we take a closer look at the features and performance of the Philips Hue Play Gradient. Find out if it meets your needs.",
    author: "Product Reviewer",
    createdAt: "07.18.2024",
    tags: ["home", "lifestyle"],
  },
  {
    id: 9,
    title: "Samsung TV 4K SmartTV vs Logitech MX Master 3: Which is Better?",
    content:
      "Choosing between the Samsung TV 4K SmartTV and the Logitech MX Master 3? This comparison guide breaks down the key differences to help you decide.",
    author: "Home Expert",
    createdAt: "09.23.2023",
    tags: ["gadgets", "computer", "tech", "smart home"],
  },
  {
    id: 10,
    title: "Why We Love the Philips Hue Play Gradient",
    content:
      "There are many reasons to love the Philips Hue Play Gradient. We share our favorite aspects and why we think it's a great choice.",
    author: "Tech Guru",
    createdAt: "03.02.2025",
    tags: ["deals", "review", "computer", "audio", "guide"],
  },
  {
    id: 11,
    title: "A Deep Dive into Dell Laptop KR211822 Technology",
    content:
      "Let's explore the innovative technology behind the Dell Laptop KR211822. Understand what makes it stand out from the competition.",
    author: "Tech Guru",
    createdAt: "07.25.2024",
    tags: ["video", "updates", "review"],
  },
  {
    id: 12,
    title: "How to Get the Most Out of Your Playstation 5 Digital Edition",
    content:
      "Own a Playstation 5 Digital Edition? Learn some useful tips and tricks to maximize its potential and enhance your experience.",
    author: "Gamer Zone",
    createdAt: "01.13.2024",
    tags: ["tips", "gadgets", "computer", "lifestyle"],
  },
  {
    id: 13,
    title:
      "Playstation 5 Digital Edition vs Apple Iphone 14 Pro Max: Which is Better?",
    content:
      "Choosing between the Playstation 5 Digital Edition and the Apple Iphone 14 Pro Max? This comparison guide breaks down the key differences to help you decide.",
    author: "Home Expert",
    createdAt: "11.05.2023",
    tags: ["tech", "comparison"],
  },
  {
    id: 14,
    title: "Logitech MX Master 3 Tips and Tricks",
    content:
      "Discover hidden features and expert advice for your Logitech MX Master 3. These tips will help you become a power user.",
    author: "Home Expert",
    createdAt: "04.07.2023",
    tags: ["audio", "tech"],
  },
  {
    id: 15,
    title: "The Ultimate Guide to Toshiba Split AC 2",
    content:
      "This comprehensive guide covers everything you need to know about the Toshiba Split AC 2, from setup to advanced usage.",
    author: "Industry Analyst",
    createdAt: "01.28.2025",
    tags: ["home", "deals", "smart home", "audio", "guide"],
  },
  {
    id: 16,
    title: "How to Get the Most Out of Your Logitech MX Master 3",
    content:
      "Own a Logitech MX Master 3? Learn some useful tips and tricks to maximize its potential and enhance your experience.",
    author: "Admin",
    createdAt: "02.25.2023",
    tags: ["video", "computer"],
  },
  {
    id: 17,
    title: "Top 5 Features of the Toshiba Split AC 2",
    content:
      "The Toshiba Split AC 2 comes packed with features. We highlight the top 5 things you need to know about this exciting product.",
    author: "Support Team",
    createdAt: "04.02.2023",
    tags: ["news", "smart home", "tips", "updates", "mobile"],
  },
  {
    id: 18,
    title: "Toshiba Split AC 2 Review: Is It Worth It?",
    content:
      "We recently got our hands on the Toshiba Split AC 2. Here's our detailed review, covering design, functionality, and value for money.",
    author: "Product Reviewer",
    createdAt: "05.21.2025",
    tags: ["updates", "comparison"],
  },
  {
    id: 19,
    title:
      "Playstation 5 Digital Edition vs Philips Hue Play Gradient: Which is Better?",
    content:
      "Choosing between the Playstation 5 Digital Edition and the Philips Hue Play Gradient? This comparison guide breaks down the key differences to help you decide.",
    author: "Gamer Zone",
    createdAt: "02.09.2023",
    tags: ["lifestyle", "smart home", "deals"],
  },
  {
    id: 20,
    title: "Exploring the New Philips Hue Play Gradient",
    content:
      "In this post, we take a closer look at the features and performance of the Philips Hue Play Gradient. Find out if it meets your needs.",
    author: "Tech Guru",
    createdAt: "06.23.2023",
    tags: ["gadgets", "lifestyle", "tech"],
  },
];

export const seedUsers = async () => {
  try {
    await User.insertMany(users);
    console.log("✅ Users seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed users:", error);
    process.exit(1);
  }
};
export const seedProducts = async () => {
  try {
    await product.insertMany(products);
    console.log("✅ products seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed products:", error);
    process.exit(1);
  }
};
export const seedPosts = async () => {
  try {
    await post.insertMany(posts);
    console.log("✅ Posts seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed Posts:", error);
    process.exit(1);
  }
};
export const seedOrders = async () => {
  try {
    await order.insertMany(orders);
    console.log("✅ Orders seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed Orders:", error);
    process.exit(1);
  }
};
