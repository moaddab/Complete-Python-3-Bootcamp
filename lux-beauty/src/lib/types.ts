export type TabId =
  | "home"
  | "services"
  | "stylists"
  | "portfolio"
  | "about"
  | "reviews"
  | "contact"

export type CategoryId =
  | "brows"
  | "skin"
  | "makeup"
  | "nails"
  | "color"
  | "hair"

export type Category = {
  id: CategoryId
  name: string
  serviceCount: number
}

export type Service = {
  id: string
  title: string
  subtitle: string
  price: number
  duration: number
  categoryId: CategoryId
  image: string
  popular?: boolean
}

export type Stylist = {
  id: string
  name: string
  specialty: string
  categoryId: CategoryId
  rating: number
  image: string
  bio: string
}

export type Review = {
  id: string
  author: string
  rating: number
  date: string
  text: string
  service: string
}

export type PortfolioItem = {
  id: string
  title: string
  categoryId: CategoryId
  image: string
}
