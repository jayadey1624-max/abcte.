---
name: Atelier Weave
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261900'
  on-tertiary-container: '#a17f3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the intersection of traditional craftsmanship and modern precision. It is designed for a premium audience that values tactile quality, heritage, and the "quiet luxury" of high-end textiles. 

The visual style is **Minimalist** with a **Tactile** edge. It utilizes expansive white space to allow high-resolution textile photography to serve as the primary visual texture. The interface avoids unnecessary decoration, relying instead on structural grid alignment, meticulous typography, and subtle tonal shifts to guide the user. The emotional response should be one of calm authority, professional reliability, and sophisticated elegance.

## Colors

The palette is inspired by raw materials and high-fashion ateliers.

- **Primary (Deep Charcoal):** Used for typography, primary branding, and high-impact structural elements. It provides a grounded, authoritative weight.
- **Secondary (Soft Ivory):** The primary background color. It is warmer than pure white, evoking the natural hue of untreated silk or fine linen.
- **Tertiary (Muted Gold):** Reserved for subtle accents, interactive states, and status indicators. It represents craftsmanship and the premium nature of the products.
- **Neutral:** A range of mid-tone grays used for borders, secondary text, and iconography to maintain a soft contrast against the ivory background.

## Typography

This design system employs a classic high-contrast pairing. **Playfair Display** provides a sophisticated editorial feel for all headings, emphasizing the brand's heritage. **Hanken Grotesk** is used for all functional text, offering a sharp, contemporary counterpoint that ensures legibility in data-heavy dashboard views.

For editorial sections, use generous tracking on uppercase labels to enhance the premium feel. Maintain a strict vertical rhythm, prioritizing ample line height for long-form body copy to ensure a relaxed reading experience.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, magazine-like structure. Content is centered within a 1280px container using a 12-column grid. 

Margins are intentionally oversized to create a sense of exclusivity and focus. On mobile, the grid collapses to 4 columns with significantly reduced margins to maximize screen real estate for fabric imagery. Spacing between sections should be aggressive (96px+) to reinforce the minimalist aesthetic and allow the high-quality textile photography to "breathe."

## Elevation & Depth

To maintain a minimalist and premium feel, this design system avoids heavy shadows. Depth is communicated through:

1.  **Tonal Layering:** Using subtle variations of the Ivory and Charcoal palette to distinguish between background surfaces and container elements.
2.  **Fine Outlines:** UI elements use 0.5px or 1px borders in a soft neutral tone rather than drop shadows. This creates a "tailored" look, mimicking the fine seams of a high-end garment.
3.  **Low-Opacity Overlays:** When modals or temporary surfaces appear, use a very light, soft-focus backdrop blur to maintain the sense of light and space.

## Shapes

The shape language is predominantly **Soft (0.25rem)**. This slight rounding provides a hint of approachability and "softness" synonymous with textiles, while remaining sharp enough to feel professional and architectural. 

Interactive elements like primary buttons should maintain this consistent soft corner, while secondary elements like tags or chips may use a slightly higher roundedness to distinguish them as floating metadata.

## Components

- **Buttons:** Primary buttons are solid Charcoal with Ivory text. Secondary buttons use a fine 1px border. Hover states should feature a subtle transition to the Tertiary gold for text or border color.
- **Fabric Cards:** Used for collection previews. These should be borderless with high-resolution imagery taking up 80% of the card area. Text is placed in a small Ivory overlay or directly below the image in a minimalist serif.
- **Inputs & Forms:** Fields are defined by a bottom border only (1px), creating a clean, modern "form" feel. Labels are small, uppercase, and placed above the field.
- **Product Grids:** Use a strictly aligned masonry or square grid with consistent 24px gutters. Images should be the hero; pricing and titles are secondary.
- **Dashboard Interface:** Uses a "white-on-white" tiered approach. The sidebar is a very light neutral, while the main content area is the primary Ivory. Fine vertical lines separate navigation from content.
- **Swatches:** Interactive color or texture swatches should be circles with a 2px offset border when selected to indicate focus without cluttering the UI.