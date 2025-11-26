import { Promo } from "@/components/promo"

export default function promo() {
  return (
    <Promo
      title="Get up to 50% off"
      description="All products on sale until April 15th."
      buttonText="Shop now"
      buttonLink="#promo"
      backgroundImage="/assets/promo.png"
    />
  )
}
