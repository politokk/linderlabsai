"use client"

import * as React from "react"
import { Check, Clipboard } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { useColors } from "@/hooks/use-colors"
import { ColorFormat } from "@/lib/colors"

export interface DesignTokenColor {
  name: string
  className: string
  hex: string
  rgb: string
  hsl: string
  oklch: string
  var: string
  foreground: string
}

interface ColorBlockProps {
  name: string
  tokenName: string
  className: string
}

// Helper to convert RGB values to hex
function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(n).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// Helper to convert RGB to HSL
function rgbToHsl(r: number, g: number, b: number): string {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return `hsl(${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`
}

// Helper to convert RGB to OKLCH
function rgbToOklch(r: number, g: number, b: number): string {
  const toLinear = (c: number) => {
    c /= 255
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }

  const lr = toLinear(r)
  const lg = toLinear(g)
  const lb = toLinear(b)

  const x = 0.4124564 * lr + 0.3575761 * lg + 0.1804375 * lb
  const y = 0.2126729 * lr + 0.7151522 * lg + 0.0721750 * lb
  const z = 0.0193339 * lr + 0.1191920 * lg + 0.9503041 * lb

  const l_ = 0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z
  const m_ = 0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z
  const s_ = 0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z

  const l_c = Math.cbrt(l_)
  const m_c = Math.cbrt(m_)
  const s_c = Math.cbrt(s_)

  const L = 0.2104542553 * l_c + 0.7936177850 * m_c - 0.0040720468 * s_c
  const a = 1.9779984951 * l_c - 2.4285922050 * m_c + 0.4505937099 * s_c
  const b_ = 0.0259040371 * l_c + 0.7827717662 * m_c - 0.8086757660 * s_c

  const C = Math.sqrt(a * a + b_ * b_)
  let H = Math.atan2(b_, a) * (180 / Math.PI)
  if (H < 0) H += 360

  return `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(1)})`
}

function getForeground(r: number, g: number, b: number): string {
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? "#000" : "#fff"
}

// Parse any color format to RGB
function parseColorToRgb(colorStr: string): { r: number; g: number; b: number } | null {
  console.log("[parseColorToRgb] Input:", colorStr)
  
  // Try rgb/rgba format: rgb(r, g, b) or rgba(r, g, b, a)
  const rgbMatch = colorStr.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/)
  if (rgbMatch) {
    console.log("[parseColorToRgb] RGB match found:", rgbMatch)
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10),
    }
  }

  // Try rgb with spaces: rgb(r g b) or rgb(r g b / a)
  const rgbSpaceMatch = colorStr.match(/rgba?\s*\(\s*(\d+)\s+(\d+)\s+(\d+)/)
  if (rgbSpaceMatch) {
    console.log("[parseColorToRgb] RGB space match found:", rgbSpaceMatch)
    return {
      r: parseInt(rgbSpaceMatch[1], 10),
      g: parseInt(rgbSpaceMatch[2], 10),
      b: parseInt(rgbSpaceMatch[3], 10),
    }
  }

  // Try hex format
  const hexMatch = colorStr.match(/^#?([a-fA-F0-9]{6})$/)
  if (hexMatch) {
    console.log("[parseColorToRgb] Hex match found:", hexMatch)
    const hex = hexMatch[1]
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    }
  }

  // Try short hex format
  const shortHexMatch = colorStr.match(/^#?([a-fA-F0-9]{3})$/)
  if (shortHexMatch) {
    console.log("[parseColorToRgb] Short hex match found:", shortHexMatch)
    const hex = shortHexMatch[1]
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
    }
  }

  console.log("[parseColorToRgb] No match found for:", colorStr)
  return null
}

export function ColorBlock({ name, tokenName, className }: ColorBlockProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })
  const { format, setLastCopied, lastCopied } = useColors()
  const colorRef = React.useRef<HTMLDivElement>(null)
  const [colorData, setColorData] = React.useState<DesignTokenColor | null>(null)

  React.useEffect(() => {
    const computeColor = () => {
      console.log(`\n========== [${tokenName}] Computing color ==========`)
      console.log(`[${tokenName}] className:`, className)
      console.log(`[${tokenName}] colorRef.current:`, colorRef.current)
      
      if (!colorRef.current) {
        console.log(`[${tokenName}] ERROR: No ref found!`)
        return
      }

      // Log all computed styles for debugging
      const styles = getComputedStyle(colorRef.current)
      const bgColor = styles.backgroundColor
      const bgImage = styles.backgroundImage
      const color = styles.color
      
      console.log(`[${tokenName}] Computed backgroundColor:`, bgColor)
      console.log(`[${tokenName}] Computed backgroundImage:`, bgImage)
      console.log(`[${tokenName}] Computed color:`, color)
      console.log(`[${tokenName}] Element classList:`, colorRef.current.classList.toString())
      console.log(`[${tokenName}] Element style.backgroundColor:`, colorRef.current.style.backgroundColor)

      // Also try to get the CSS variable value directly
      const rootStyles = getComputedStyle(document.documentElement)
      const cssVarValue = rootStyles.getPropertyValue(`--${tokenName}`).trim()
      console.log(`[${tokenName}] CSS variable --${tokenName}:`, cssVarValue)

      // Check body classes for theme
      console.log(`[${tokenName}] Body classes:`, document.body.classList.toString())

      // Parse the background color
      const rgb = parseColorToRgb(bgColor)
      console.log(`[${tokenName}] Parsed RGB:`, rgb)

      if (rgb) {
        const result = {
          name: tokenName,
          className: className,
          hex: rgbToHex(rgb.r, rgb.g, rgb.b),
          rgb: `${rgb.r} ${rgb.g} ${rgb.b}`,
          hsl: rgbToHsl(rgb.r, rgb.g, rgb.b),
          oklch: rgbToOklch(rgb.r, rgb.g, rgb.b),
          var: `var(--${tokenName})`,
          foreground: getForeground(rgb.r, rgb.g, rgb.b),
        }
        console.log(`[${tokenName}] Final colorData:`, result)
        setColorData(result)
      } else {
        console.log(`[${tokenName}] ERROR: Could not parse color!`)
        // Try alternative: use a canvas to get the color
        const canvas = document.createElement("canvas")
        canvas.width = 1
        canvas.height = 1
        const ctx = canvas.getContext("2d")
        if (ctx) {
          // Draw the background color
          ctx.fillStyle = bgColor
          ctx.fillRect(0, 0, 1, 1)
          const imageData = ctx.getImageData(0, 0, 1, 1).data
          console.log(`[${tokenName}] Canvas fallback RGB:`, imageData[0], imageData[1], imageData[2])
          
          const r = imageData[0]
          const g = imageData[1]
          const b = imageData[2]
          
          setColorData({
            name: tokenName,
            className: className,
            hex: rgbToHex(r, g, b),
            rgb: `${r} ${g} ${b}`,
            hsl: rgbToHsl(r, g, b),
            oklch: rgbToOklch(r, g, b),
            var: `var(--${tokenName})`,
            foreground: getForeground(r, g, b),
          })
        } else {
          setColorData({
            name: tokenName,
            className: className,
            hex: "#000000",
            rgb: "0 0 0",
            hsl: "hsl(0 0% 0%)",
            oklch: "oklch(0 0 0)",
            var: `var(--${tokenName})`,
            foreground: "#fff",
          })
        }
      }
    }

    // Run after a delay to ensure styles are applied
    const timeoutId = setTimeout(computeColor, 100)

    // Recompute when theme changes
    const observer = new MutationObserver((mutations) => {
      console.log(`[${tokenName}] Mutation observed:`, mutations.map(m => m.attributeName))
      setTimeout(computeColor, 100)
    })

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [tokenName, className])

  const getValueForFormat = (fmt: ColorFormat): string => {
    if (!colorData) return `var(--${tokenName})`
    
    switch (fmt) {
      case "className":
        return colorData.className
      case "hex":
        return colorData.hex
      case "rgb":
        return colorData.rgb
      case "hsl":
        return colorData.hsl
      case "oklch":
        return colorData.oklch
      case "var":
        return colorData.var
      default:
        return colorData.var
    }
  }

  const copyValue = getValueForFormat(format)

  return (
    <button
      className={cn(
        "group relative flex aspect-[3/1] w-full cursor-pointer flex-col gap-2 sm:aspect-[2/1]",
        "[&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:z-10 [&>svg]:size-4 [&>svg]:opacity-0 [&>svg]:transition-opacity"
      )}
      data-last-copied={lastCopied === copyValue}
      onClick={() => {
        copyToClipboard(copyValue)
        setLastCopied(copyValue)
        toast.success(`Copied ${copyValue} to clipboard.`)
      }}
    >
      {isCopied ? (
        <Check className="text-primary-foreground group-hover:opacity-100 opacity-100 group-data-[last-copied=true]:opacity-100" />
      ) : (
        <Clipboard className="text-primary-foreground group-hover:opacity-100" />
      )}
      <div
        ref={colorRef}
        className={cn(
          "w-full flex-1 rounded-lg border",
          className
        )}
      />
      <div className="flex w-full flex-col items-start gap-0.5">
        <span className="text-foreground font-medium text-sm">
          {name}
        </span>
        <code className="text-muted-foreground group-hover:text-foreground group-data-[last-copied=true]:text-primary font-mono text-xs transition-colors">
          {copyValue}
        </code>
      </div>
    </button>
  )
}
