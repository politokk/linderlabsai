/** Base orb image (measured base hue ≈ 205°) */
export const ORB_SRC = "https://raw.githubusercontent.com/politokk/linderlabsai/refs/heads/main/public/orbs/orb-2.webp"

/** Hue values for all themes (relative to base ≈ 205°) */
export const HUE_BY_THEME: Record<string, number> = {
  // defaults
  default: 40,
  // colors
  red: 155,
  orange: 185,
  amber: 200,
  yellow: 215,
  lime: 230,
  green: 275,
  emerald: 295,
  teal: 335,
  cyan: 345,
  sky: 355,
  blue: 5,
  indigo: 40,
  violet: 65,
  purple: 85,
  fuchsia: 105,
  pink: 125,
  rose: 145,
}

export const NEUTRAL_THEMES_LIST = ["slate", "gray", "zinc", "neutral", "stone"]

export const NEUTRAL_BRIGHTNESS: Record<string, number> = {
  slate: 0.85,
  gray: 1.0,
  zinc: 0.75,
  neutral: 1.15,
  stone: 0.65,
}

export type ThemeOverride = {
  img?: React.CSSProperties
  wrapper?: React.CSSProperties
  src?: string
}

export const THEME_OVERRIDES: Record<string, ThemeOverride> = {
  emerald: {
    src: "/orbs/orb-2.webp",
    img: {
      color: "transparent",
      filter: "hue-rotate(316deg) saturate(120%)",
      transform: "rotate(316deg)",
      objectFit: "cover",
      objectPosition: "center center",
    },
  },
  pink: {
    img: {
      color: "transparent",
      filter: "hue-rotate(101deg) saturate(120%)",
      transform: "rotate(101deg)",
      objectFit: "cover",
      objectPosition: "center center",
    },
  },
}

/**
 * Check if a theme has orb configuration (hue mapping, override, or is neutral)
 */
export function hasOrbConfig(themeValue: string | undefined | null): boolean {
  if (!themeValue) return false
  return (
    HUE_BY_THEME[themeValue] !== undefined ||
    THEME_OVERRIDES[themeValue] !== undefined ||
    NEUTRAL_THEMES_LIST.includes(themeValue)
  )
}

/**
 * Get orb props for a given theme value
 */
export function getOrbPropsForTheme(themeValue: string): {
  src: string
  hueDeg: number
  saturate: number
  rotateDeg: number
  imgStyle?: React.CSSProperties
  wrapperStyle?: React.CSSProperties
} {
  const override = THEME_OVERRIDES[themeValue]
  const hue = HUE_BY_THEME[themeValue]
  const isNeutral = NEUTRAL_THEMES_LIST.includes(themeValue)

  // Handle neutral themes with desaturation
  if (isNeutral) {
    const brightness = NEUTRAL_BRIGHTNESS[themeValue] ?? 1.0
    return {
      src: override?.src ?? ORB_SRC,
      hueDeg: 0,
      saturate: 0.15,
      rotateDeg: 0,
      imgStyle: {
        filter: `saturate(0.15) brightness(${brightness})`,
        ...override?.img,
      },
      wrapperStyle: override?.wrapper,
    }
  }

  // Handle color themes with hue rotation
  const hasMapping = hue !== undefined || override
  return {
    src: override?.src ?? ORB_SRC,
    hueDeg: hasMapping ? (hue ?? 0) : 0,
    saturate: 1.2,
    rotateDeg: 149,
    imgStyle: override?.img,
    wrapperStyle: override?.wrapper,
  }
}