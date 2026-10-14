"use client";

import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Sparkles,
  ArrowDownCircle,
} from "lucide-react";

export default function Home() {
  const categories = [
    { name: "CLASSIC", img: "/images/cat_classic.png" },
    { name: "DOURMET", img: "/images/cat_gourmet.png" },
    { name: "DESSERTS", img: "/images/cat_desserts.png" },
    { name: "COOKIES", img: "/images/cat_cookies.png" },
  ];

  const bestsellers = [
    {
      id: 1,
      title: "Rich Chocolate Truffle Cake",
      price: "₹500",
      originalPrice: "₹599 (15% OFF)",
      rating: "★★★★★",
      reviews: "369",
      image: "/images/prod_truffle.jpg",
    },
    {
      id: 2,
      title: "Choco Chip Truffle Cake Cake",
      price: "₹589",
      originalPrice: "₹720 (18% OFF)",
      rating: "★★★★★",
      reviews: "390",
      image: "/images/prod_choco_chip.jpg",
    },
    {
      id: 3,
      title: "Tropical Fruit N Almond Cake Cake",
      price: "₹599",
      originalPrice: "₹699 (14% OFF)",
      rating: "★★★★★",
      reviews: "388",
      image: "/images/prod_tropical_fruit.jpg",
    },
    {
      id: 4,
      title: "Rich Butterscotch Crunch Cake",
      price: "₹399",
      originalPrice: "₹499 (20% OFF)",
      rating: "★★★★★",
      reviews: "308",
      image: "/images/prod_butterscotch.jpg",
    },
  ];

  const promiseFeatures = [
    {
      title: "ON TIME",
      subtitle: "DELIVERY",
      img: "/images/icon_delivery.png",
    },
    {
      title: "5100+",
      subtitle: "DESIGNS",
      img: "/images/icon_designs.png",
    },
    {
      title: "2 CR+",
      subtitle: "ORDERS",
      img: "/images/icon_orders.png",
    },
    {
      title: "BAKED",
      subtitle: "FRESH",
      img: "/images/icon_fresh.png",
    },
  ];

  const galleryImages = [
    { src: "/images/gallery_1.jpg", alt: "Tiered cake with gold accents" },
    { src: "/images/gallery_2.jpg", alt: "Customer with celebratory cake" },
    { src: "/images/gallery_3.jpg", alt: "Baker presenting fresh cake" },
    { src: "/images/gallery_4.jpg", alt: "Bakers crafting chocolate gateau" },
    { src: "/images/gallery_5.jpg", alt: "Pastry chefs showcasing multi-tiered cake" },
    { src: "/images/gallery_6.jpg", alt: "Gourmet decorated floral cake" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f2] text-[#4a2e2b] flex flex-col font-sans">
      
      {/* ================= 1. HEADER & NAVBAR ================= */}
      <header className="w-full bg-[#fdf8f4] border-b border-[#f4e0d9] sticky top-0 z-50 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="cursor-pointer">
            <span className="text-3xl font-black text-[#6a2623] tracking-tight font-serif select-none">
              Dakingo
            </span>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-xs sm:text-sm bg-white text-[#444] placeholder:text-neutral-400 border border-[#ecd2cc] rounded-full pl-9 pr-9 py-2 focus:outline-none focus:ring-2 focus:ring-[#80211d]/20 focus:border-[#80211d] shadow-xs"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
            <button
              aria-label="Search"
              className="w-6 h-6 bg-[#80211d] text-white rounded-full flex items-center justify-center absolute right-2 top-1.5 hover:bg-[#6c1b18] transition"
            >
              <Search className="w-3 h-3" />
            </button>
          </div>

          {/* Login / Cart */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6a2623] cursor-pointer hover:opacity-80 transition shrink-0">
            <ShoppingCart className="w-5 h-5 text-[#6a2623]" />
            <span className="hidden sm:inline">Login / Signup</span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between border-t border-[#f8e7e1] text-xs font-semibold text-[#6a2623] overflow-x-auto no-scrollbar gap-4 sm:gap-6">
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Cakes</span>
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Theme Cakes</span>
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Desserts</span>
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Birthday</span>
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Hampers</span>
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Anniversary</span>
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Occasions</span>
          <span className="cursor-pointer hover:text-[#80211d] transition whitespace-nowrap">Occasions</span>
          <button className="bg-[#80211d] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider hover:bg-[#681916] transition uppercase shrink-0 shadow-sm ml-auto">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* ================= 2. HERO BANNER FULL-WIDTH ================= */}
      <section className="w-full bg-[#8c2527] relative overflow-hidden text-white py-10 md:py-14">
        {/* Subtle decorative circles */}
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#5f1719]/40 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Main Hero Circle Cake */}
          <div className="relative shrink-0 flex justify-center">
            <div className="w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] md:w-[270px] md:h-[270px] rounded-full border-[5px] border-white/95 shadow-2xl overflow-hidden bg-[#240b0b]">
              <Image
                src="/images/hero_cake_main.jpg"
                alt="Decadent Chocolate Bliss Cake"
                width={270}
                height={270}
                className="w-full h-full object-cover scale-105"
                priority
              />
            </div>
          </div>

          {/* Center Callout Text */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.08] tracking-tight uppercase drop-shadow-md font-sans">
              DECADENT<br />
              CHOCOLATE<br />
              BLISS!
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-rose-200 mt-2 tracking-wide flex items-center justify-center md:justify-start gap-2">
              <span>Satisfy Your Sweetest Cravings</span>
              <Sparkles className="w-4 h-4 text-rose-200 inline" />
            </p>

            <div className="mt-5 inline-block text-left">
              <span className="text-[11px] block text-rose-200 font-semibold tracking-wider uppercase mb-1">
                Special Offer!
              </span>
              <div className="bg-[#6c1716] border border-rose-300/40 text-white font-extrabold text-sm sm:text-base px-6 py-2 rounded-full shadow-lg tracking-wider inline-block">
                SAVE 20%
              </div>
            </div>
          </div>

          {/* Right Mini Circular Cards */}
          <div className="flex md:flex-col gap-4 shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-3 border-white shadow-xl overflow-hidden bg-neutral-900 group cursor-pointer">
              <Image
                src="/images/hero_cake_mini1.jpg"
                alt="Choco Molten Lava Cake"
                width={112}
                height={112}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-3 border-white shadow-xl overflow-hidden bg-neutral-900 group cursor-pointer">
              <Image
                src="/images/hero_cake_mini2.jpg"
                alt="Fudge Brownie Pastry"
                width={112}
                height={112}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. BODY MAIN CONTENT ================= */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-12">
        
        {/* SECTION: MENU CATEGORIES */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#fae2db] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#6a2623] tracking-tight">
                Menu
              </h2>
              <p className="text-sm text-[#8c6762] font-medium mt-1">
                What will you wish for?
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-7 h-7 rounded-full bg-[#faeae7] border border-[#f3d3cc] flex items-center justify-center p-1">
                  <Image src="/images/badge_1.png" alt="Icon 1" width={16} height={16} className="object-contain" />
                </div>
                <div className="w-7 h-7 rounded-full bg-[#faeae7] border border-[#f3d3cc] flex items-center justify-center p-1">
                  <Image src="/images/badge_2.png" alt="Icon 2" width={16} height={16} className="object-contain" />
                </div>
                <div className="w-7 h-7 rounded-full bg-[#faeae7] border border-[#f3d3cc] flex items-center justify-center p-1">
                  <Image src="/images/badge_3.png" alt="Icon 3" width={16} height={16} className="object-contain" />
                </div>
              </div>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[#fffcfb] border border-[#f3dcd7] rounded-2xl w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center p-2 shadow-xs hover:shadow-md hover:border-[#80211d] cursor-pointer transition group"
                >
                  <div className="w-10 h-10 relative flex items-center justify-center group-hover:scale-110 transition">
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#882522] tracking-wider mt-2 uppercase">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: BESTSELLERS */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#6a2623] tracking-tight">
              Bestsellers from Across the Country
            </h3>
            <button className="bg-[#80211d] text-white text-xs font-bold tracking-wider px-5 py-2 rounded-full uppercase hover:bg-[#681916] transition shadow-sm">
              VIEW ALL
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestsellers.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#f3ded9] rounded-2xl p-4 flex flex-col items-center text-center shadow-xs relative group hover:shadow-lg transition-all duration-300"
              >
                {/* Heart bookmark */}
                <button className="absolute top-3 left-3 text-[#b03030] hover:scale-110 transition">
                  <Heart className="w-4 h-4 fill-[#b03030]" />
                </button>

                {/* Product Image */}
                <div className="w-28 h-28 my-3 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Product Title */}
                <h4 className="text-xs sm:text-sm font-bold text-[#5c2421] leading-snug line-clamp-2 h-10 flex items-center">
                  {item.title}
                </h4>

                {/* Prices */}
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-sm sm:text-base font-black text-[#882522]">{item.price}</span>
                  <span className="text-xs text-neutral-400 line-through font-medium">
                    {item.originalPrice}
                  </span>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center gap-1 mt-1 text-xs text-amber-500">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-[10px] text-gray-500 font-semibold ml-1">
                    ({item.reviews})
                  </span>
                </div>

                {/* Dropdown action pill */}
                <button className="w-6 h-6 bg-[#882522] rounded-full flex items-center justify-center text-white mt-3 shadow-xs group-hover:bg-[#6c1b18] transition">
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: OUR PROMISE (IMPROVED PHOTO BY PHOTO) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#fae2db] shadow-xs">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#6a2623] tracking-tight">
              Our Promise
            </h3>
            <p className="text-xs sm:text-sm text-[#7a4843] font-medium mt-1">
              There&apos;s no secret spell - only honest fine work!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (5 Cols): Features & Ticket */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* 4 Feature Badges with extracted icons */}
              <div className="bg-[#faebe8] border border-[#f3d3cc] rounded-2xl p-4 sm:p-5">
                <p className="text-xs font-bold text-[#882522] text-center mb-4 tracking-wide">
                  A glimpse into our secret spell – only honest world!
                </p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {promiseFeatures.map((feat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-white border border-[#f1d0ca] flex items-center justify-center shadow-xs mb-1.5 p-2">
                        <Image
                          src={feat.img}
                          alt={feat.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-black text-[#6a2623] leading-none">
                        {feat.title}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-[#882522] font-semibold mt-1">
                        {feat.subtitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Magical Ticket Promo Card */}
              <div className="bg-[#fdede9] border border-[#f3d3cc] rounded-2xl p-4 sm:p-5 flex items-center gap-4 relative overflow-hidden">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden shadow-xs flex items-center justify-center">
                  <Image
                    src="/images/ticket_graphic.png"
                    alt="The Magical Ticket"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-black text-[#6a2623] uppercase tracking-wider">
                    THE MAGICAL TICKET
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#703b37] font-medium leading-relaxed mt-1">
                    Add 3 reminders to your account.<br />
                    Win offers worth Rs. 750
                  </p>
                  <button className="bg-[#80211d] text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase mt-2 shadow-sm hover:bg-[#681916] transition">
                    UNLOCK NOW
                  </button>
                </div>
              </div>

              {/* Social Proof Avatars */}
              <div className="flex items-center gap-3 px-1 pt-1">
                <div className="flex -space-x-2 overflow-hidden">
                  {["1", "2", "3", "4", "5"].map((num) => (
                    <div
                      key={num}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden shadow-xs"
                    >
                      <Image
                        src={`/images/avatar_${num}.jpg`}
                        alt={`Customer ${num}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-[#882522]">
                  Follow us on social!
                </span>
              </div>
            </div>

            {/* Right Column (7 Cols): 6 Photo Gallery Grid (EXACT CROP & SHAPE) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-[#f3dcd7] shadow-sm bg-[#faf3ef] group cursor-pointer aspect-[109/80] relative"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION: FSSAI CERTIFIED BANNER */}
        <div className="w-full bg-[#882522] text-white text-center py-4 px-6 rounded-2xl shadow-sm">
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-wide">
            Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </p>
        </div>

      </main>

      {/* ================= 4. FOOTER ================= */}
      <footer className="w-full bg-[#fdf8f4] border-t border-[#f4e0d9] text-[#5b2825] py-10 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-xs mb-8">
            <div className="col-span-2 sm:col-span-1">
              <h5 className="font-black text-2xl text-[#6a2623] mb-3 font-serif">Dakingo</h5>
              <ul className="space-y-1.5 text-[#733e3b] font-medium">
                <li className="cursor-pointer hover:underline">Our Story</li>
                <li className="cursor-pointer hover:underline">Contact Us</li>
                <li className="cursor-pointer hover:underline">Locate Us</li>
                <li className="cursor-pointer hover:underline">Media</li>
                <li className="cursor-pointer hover:underline">Careers</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-xs text-[#6a2623] mb-3 tracking-wider uppercase">
                KNOW US
              </h5>
              <ul className="space-y-1.5 text-[#733e3b] font-medium">
                <li className="cursor-pointer hover:underline">Contact Us</li>
                <li className="cursor-pointer hover:underline">Blog</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-xs text-[#6a2623] mb-3 tracking-wider uppercase">
                NEED HELP
              </h5>
              <ul className="space-y-1.5 text-[#733e3b] font-medium">
                <li className="cursor-pointer hover:underline">Cancellation &amp; Refund</li>
                <li className="cursor-pointer hover:underline">Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-xs text-[#6a2623] mb-3 tracking-wider uppercase">
                MORE INFO
              </h5>
              <ul className="space-y-1.5 text-[#733e3b] font-medium">
                <li className="cursor-pointer hover:underline">Terms &amp; Conditions</li>
                <li className="cursor-pointer hover:underline">Customized Orders</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-xs text-[#6a2623] mb-3 tracking-wider uppercase">
                MORE INFO
              </h5>
              <ul className="space-y-1.5 text-[#733e3b] font-medium">
                <li className="cursor-pointer hover:underline">Coupons &amp; Offers</li>
                <li className="cursor-pointer hover:underline">Download App</li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription form & Help link */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#f0d8d1] pt-6 gap-4">
            <div className="w-full sm:max-w-sm flex gap-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 text-xs bg-white border border-[#eccbc5] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#80211d]/20 focus:border-[#80211d]"
              />
              <button className="bg-[#80211d] text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase hover:bg-[#681916] transition tracking-wider shrink-0 shadow-sm">
                SUBSCRIBE
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#882522] cursor-pointer hover:opacity-80 transition self-center sm:self-auto">
              <ArrowDownCircle className="w-5 h-5 text-[#882522]" />
              <span>Hey, need any help?</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
