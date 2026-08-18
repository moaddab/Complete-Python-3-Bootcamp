import type {
  Category,
  PortfolioItem,
  Review,
  Service,
  Stylist,
  TabId,
} from "@/lib/types"

export const salon = {
  name: "لوکس بیوتی",
  badge: "سالن زیبایی",
  rating: 4.8,
  reviewCount: 20,
  description:
    "سالن زیبایی لوکس بیوتی با فضایی آرام و تیمی متخصص، خدمات مو، پوست، ناخن و آرایش را با متریال درجه یک ارائه می‌دهد تا هر مراجعه حس خاص‌بودن داشته باشد.",
  phoneDisplay: "۰۲۱-۸۸۷۷ ۶۶۵۵",
  phoneTel: "+982188776655",
  address: "تهران، سعادت‌آباد، خیابان سرو غربی، پلاک ۲۴",
  mapUrl: "https://maps.google.com/?q=سعادت آباد خیابان سرو غربی",
  hours: "شنبه تا پنجشنبه ۹ صبح تا ۹ شب",
  hoursNote: "جمعه‌ها تعطیل",
  about:
    "لوکس بیوتی از سال ۱۳۹۶ با هدف ارائه خدمات زیبایی در فضایی آرام و لوکس شکل گرفت. ما روی مشاوره دقیق، بهداشت کامل و انتخاب متریال مرغوب تمرکز داریم تا نتیجه کار طبیعی، ماندگار و متناسب با چهره شما باشد.",
}

export const galleryImages = [
  { src: "/images/salon-1.jpg", alt: "فضای داخلی سالن لوکس بیوتی" },
  { src: "/images/salon-2.jpg", alt: "صندلی‌های سالن و آینه‌ها" },
  { src: "/images/salon-3.jpg", alt: "بخش اصلاح و کوتاهی مو" },
  { src: "/images/salon-4.jpg", alt: "خدمات رنگ و استایل مو" },
  { src: "/images/salon-5.jpg", alt: "بخش آرایش و میکاپ" },
]

export const navItems: { id: TabId; label: string }[] = [
  { id: "home", label: "خانه" },
  { id: "services", label: "خدمات" },
  { id: "stylists", label: "آرایشگران" },
  { id: "portfolio", label: "نمونه کارها" },
  { id: "about", label: "درباره ما" },
  { id: "reviews", label: "نظرات" },
  { id: "contact", label: "تماس با ما" },
]

export const bottomNavItems: { id: TabId; label: string }[] = [
  { id: "home", label: "خانه" },
  { id: "services", label: "خدمات" },
  { id: "stylists", label: "آرایشگران" },
  { id: "reviews", label: "نظرات" },
  { id: "about", label: "درباره ما" },
]

export const categories: Category[] = [
  { id: "brows", name: "ابرو و مژه", serviceCount: 3 },
  { id: "skin", name: "پوست و زیبایی", serviceCount: 2 },
  { id: "makeup", name: "آرایش", serviceCount: 2 },
  { id: "nails", name: "ناخن", serviceCount: 3 },
  { id: "color", name: "رنگ و مش", serviceCount: 2 },
  { id: "hair", name: "مراقبت مو", serviceCount: 3 },
]

export const services: Service[] = [
  {
    id: "balayage",
    title: "بلایاژ و آمبره",
    subtitle: "با متریال درجه یک",
    price: 1_800_000,
    duration: 120,
    categoryId: "color",
    image: "/images/service-balayage.jpg",
    popular: true,
  },
  {
    id: "keratin",
    title: "کراتین و احیا",
    subtitle: "مراقبت تخصصی مو",
    price: 2_400_000,
    duration: 150,
    categoryId: "hair",
    image: "/images/service-keratin.jpg",
    popular: true,
  },
  {
    id: "bridal-makeup",
    title: "میکاپ عروس",
    subtitle: "آرایش حرفه‌ای و ماندگار",
    price: 3_500_000,
    duration: 180,
    categoryId: "makeup",
    image: "/images/service-makeup.jpg",
    popular: true,
  },
  {
    id: "nail-extension",
    title: "کاشت ناخن",
    subtitle: "طراحی اختصاصی",
    price: 1_200_000,
    duration: 90,
    categoryId: "nails",
    image: "/images/service-nails.jpg",
    popular: true,
  },
  {
    id: "lash-extension",
    title: "اکستنشن مژه",
    subtitle: "حجم‌دهی طبیعی",
    price: 1_500_000,
    duration: 75,
    categoryId: "brows",
    image: "/images/service-lashes.jpg",
  },
  {
    id: "microblading",
    title: "میکروبلیدینگ ابرو",
    subtitle: "فرم‌دهی متناسب با چهره",
    price: 2_800_000,
    duration: 90,
    categoryId: "brows",
    image: "/images/service-brow.jpg",
  },
  {
    id: "lash-lift",
    title: "لیفت و لمینت مژه",
    subtitle: "حالت طبیعی و باز",
    price: 900_000,
    duration: 45,
    categoryId: "brows",
    image: "/images/service-lashes.jpg",
  },
  {
    id: "gold-facial",
    title: "فیشیال طلا",
    subtitle: "درخشش و آبرسانی پوست",
    price: 1_600_000,
    duration: 60,
    categoryId: "skin",
    image: "/images/service-facial.jpg",
  },
  {
    id: "skin-clean",
    title: "پاکسازی پوست",
    subtitle: "درمان جوش و منافذ",
    price: 850_000,
    duration: 50,
    categoryId: "skin",
    image: "/images/service-facial.jpg",
  },
  {
    id: "day-makeup",
    title: "میکاپ روزانه",
    subtitle: "آرایش سبک و شیک",
    price: 1_200_000,
    duration: 60,
    categoryId: "makeup",
    image: "/images/salon-5.jpg",
  },
  {
    id: "nail-repair",
    title: "ترمیم ناخن",
    subtitle: "نگهداری کاشت قبلی",
    price: 700_000,
    duration: 60,
    categoryId: "nails",
    image: "/images/service-nails.jpg",
  },
  {
    id: "nail-art",
    title: "طراحی ناخن",
    subtitle: "طرح‌های فصلی و خاص",
    price: 450_000,
    duration: 40,
    categoryId: "nails",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: "root-color",
    title: "رنگ ریشه",
    subtitle: "پوشش یکدست و براق",
    price: 650_000,
    duration: 45,
    categoryId: "color",
    image: "/images/service-color.jpg",
  },
  {
    id: "haircut",
    title: "کوتاهی و استایل",
    subtitle: "فرم‌دهی متناسب با صورت",
    price: 480_000,
    duration: 40,
    categoryId: "hair",
    image: "/images/salon-3.jpg",
  },
  {
    id: "brushing",
    title: "براشینگ و حالت‌دهی",
    subtitle: "جلوه نهایی مهمانی",
    price: 350_000,
    duration: 30,
    categoryId: "hair",
    image: "/images/salon-4.jpg",
  },
]

export const stylists: Stylist[] = [
  {
    id: "nazanin",
    name: "نازنین احمدی",
    specialty: "میکاپ آرتیست",
    categoryId: "makeup",
    rating: 5,
    image: "/images/stylist-1.jpg",
    bio: "متخصص میکاپ عروس و آرایش‌های خاص با تمرکز روی فرم چهره و ماندگاری بالا.",
  },
  {
    id: "sara",
    name: "سارا محمدی",
    specialty: "متخصص رنگ و مش",
    categoryId: "color",
    rating: 4,
    image: "/images/stylist-2.jpg",
    bio: "اجرای بلایاژ، آمبره و رنگ‌های ترکیبی با متریال بدون آسیب به بافت مو.",
  },
  {
    id: "maryam",
    name: "مریم رضایی",
    specialty: "ناخن‌کار حرفه‌ای",
    categoryId: "nails",
    rating: 5,
    image: "/images/stylist-3.jpg",
    bio: "کاشت، ترمیم و طراحی ناخن با جزئیات دقیق و طرح‌های اختصاصی.",
  },
  {
    id: "elnaz",
    name: "الناز کریمی",
    specialty: "اسکین تراپیست",
    categoryId: "skin",
    rating: 4,
    image: "/images/stylist-4.jpg",
    bio: "فیشیال، پاکسازی و مراقبت پوست حساس با پروتکل‌های بهداشتی کامل.",
  },
]

export const reviews: Review[] = [
  {
    id: "r1",
    author: "نگار حسینی",
    rating: 5,
    date: "۱۲ مرداد ۱۴۰۴",
    service: "میکاپ عروس",
    text: "میکاپ عروسم فوق‌العاده طبیعی و ماندگار بود. نازنین خیلی باحوصله کار کرد و نتیجه دقیقاً همان چیزی شد که می‌خواستم.",
  },
  {
    id: "r2",
    author: "آتوسا رضوی",
    rating: 5,
    date: "۲۸ تیر ۱۴۰۴",
    service: "بلایاژ و آمبره",
    text: "رنگ موهام بی‌نقص شد. فضا خیلی مرتب و آرومه و برخورد پرسنل عالی بود.",
  },
  {
    id: "r3",
    author: "سمیرا کاظمی",
    rating: 4,
    date: "۱۵ تیر ۱۴۰۴",
    service: "کاشت ناخن",
    text: "طراحی ناخن خیلی شیک درآمد. فقط کمی نوبت شلوغ بود، اما کیفیت کار ارزش انتظار را داشت.",
  },
  {
    id: "r4",
    author: "هستی مرادی",
    rating: 5,
    date: "۳ تیر ۱۴۰۴",
    service: "فیشیال طلا",
    text: "پوستم بعد از فیشیال واقعاً شفاف شد. توضیح مراحل کار کامل و حرفه‌ای بود.",
  },
  {
    id: "r5",
    author: "پریسا احمدی",
    rating: 4,
    date: "۲۰ خرداد ۱۴۰۴",
    service: "اکستنشن مژه",
    text: "مژه‌ها خیلی طبیعی و سبک هستند. برای ترمیم هم حتماً دوباره می‌آیم.",
  },
  {
    id: "r6",
    author: "یاسمن کریمی",
    rating: 5,
    date: "۸ خرداد ۱۴۰۴",
    service: "کراتین و احیا",
    text: "موهام بعد از کراتین نرم و براق شد. مشاوره قبل از کار خیلی دقیق انجام شد.",
  },
]

export const portfolio: PortfolioItem[] = [
  { id: "p1", title: "بلایاژ روشن", categoryId: "color", image: "/images/service-balayage.jpg" },
  { id: "p2", title: "میکاپ خاص", categoryId: "makeup", image: "/images/service-makeup.jpg" },
  { id: "p3", title: "طراحی ناخن", categoryId: "nails", image: "/images/service-nails.jpg" },
  { id: "p4", title: "اکستنشن مژه", categoryId: "brows", image: "/images/service-lashes.jpg" },
  { id: "p5", title: "مراقبت پوست", categoryId: "skin", image: "/images/service-facial.jpg" },
  { id: "p6", title: "رنگ مو", categoryId: "color", image: "/images/service-color.jpg" },
  { id: "p7", title: "استایل مو", categoryId: "hair", image: "/images/salon-4.jpg" },
  { id: "p8", title: "آرایش ابرو", categoryId: "brows", image: "/images/service-brow.jpg" },
]

export function getServicesByCategory(categoryId: string | null): Service[] {
  if (!categoryId) return services
  return services.filter((service) => service.categoryId === categoryId)
}

export function getPopularServices(categoryId: string | null): Service[] {
  const popular = services.filter((service) => service.popular)
  if (!categoryId) return popular
  const filtered = popular.filter((service) => service.categoryId === categoryId)
  return filtered.length > 0 ? filtered : getServicesByCategory(categoryId).slice(0, 4)
}
