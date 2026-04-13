# Design System Document: The Kinetic Precision Framework

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Chronometer"**

This design system moves away from the "generic SaaS" aesthetic into a realm of high-end editorial precision. The "Obsidian Chronometer" philosophy treats every interaction as a tactile, premium event. We reject the standard 1px border grid in favor of **Atmospheric Depth**—using light, shadow, and tonal layering to guide the eye. 

The experience is defined by **Intentional Asymmetry**. Instead of centering everything perfectly, we use the massive 6rem numeric display as an anchor point, allowing functional elements (buttons/labels) to breathe in the negative space around it. This creates a "luxury watch" feel where the information is the hero, and the interface is the environment.

---

### 2. Colors & Surface Philosophy
The palette is rooted in a deep, nocturnal base (`#131318`), utilizing a Material Design-inspired tonal scale to create depth without visual clutter.

#### The "No-Line" Rule
Traditional dividers and solid borders are strictly prohibited for sectioning. We define boundaries through **Tonal Shifts**:
- A **Surface Container Low** section sitting on a **Surface** background creates an edge through value contrast alone.
- This creates a seamless, "molded" look rather than a "boxed-in" layout.

#### Surface Hierarchy & Nesting
*   **Base Layer:** `surface` (#131318) - The deep canvas.
*   **Sectioning:** `surface_container_low` (#1b1b20) - Subtle differentiation for secondary zones.
*   **Active Cards:** `surface_container_highest` (#35343a) - Use this for the main counter card to make it "pop" toward the user.

#### The "Glass & Gradient" Rule
To elevate the Turkish localization (e.g., "Sıfırla", "Artır"), main action areas should utilize a **Signature Texture**:
- **Increment (Artır):** A subtle linear gradient from `primary` (#4be277) to `primary_container` (#22c55e) at 135 degrees.
- **Decrement (Azalt):** A soft glow using `secondary_container` (#a40217) with a 20% opacity backdrop-blur.

---

### 3. Typography: Editorial Authority
We utilize a dual-font system to balance technical precision with human readability.

*   **Display Scale (Space Grotesk):** This is our "Technical Soul." At `6rem` (`display-lg`), the numbers should feel architectural. The Turkish "₺" or count symbols should use a thinner weight to emphasize the numeric value.
*   **Body Scale (Manrope):** Our "Functional Voice." Used for labels like "Son Güncelleme" or "Hedef Değer." It provides a clean, sans-serif contrast to the bold display numbers.

**Hierarchy Intent:** 
The massive contrast between `display-lg` (96px) and `label-sm` (11px) is intentional. It creates a "Micro-Macro" layout where the primary data is undeniable, and the metadata is tucked away elegantly.

---

### 4. Elevation & Depth: Tonal Layering
We do not use standard "Drop Shadows." We use **Ambient Radiance**.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface_container_lowest` button placed on a `surface_container_high` card creates a "sunken" tactile feel.
*   **Ambient Shadows:** For floating modals (e.g., settings), use a 40px blur shadow with 6% opacity, tinted with `primary` (#4be277) to simulate light reflecting off the "Success Green" buttons.
*   **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use `outline_variant` (#3d4a3d) at **15% opacity**. It should be felt, not seen.

---

### 5. Components

#### The "Power" Buttons (Artır / Azalt)
*   **Style:** Oversized, `xl` (1.5rem) rounded corners.
*   **Interaction:** On press, the button should shrink slightly (scale: 0.96) and the `surface_tint` should increase in intensity.
*   **Labeling:** "Artır" (Increment) and "Azalt" (Decrement) using `title-lg`.

#### The Counter Display Card
*   **Layout:** Forbid dividers. Use 48px of vertical padding to separate the numeric display from the "Reset" (Sıfırla) utility.
*   **Glow:** Apply a 20% opacity outer glow using the `primary` color only when the counter is actively increasing.

#### Utility Chips (Sıfırla / Ayarlar)
*   **Visual:** `surface_container_low` background with a `label-md` font.
*   **Placement:** Placed asymmetrically in the bottom-right or top-left to avoid the "Standard Web" look.

#### Haptic Input Fields
*   **Style:** No background. Only a `surface_variant` bottom stroke (2px) that transforms into a `primary` color glow upon focus.

---

### 6. Do's and Don'ts

#### Do:
*   **Do** use Turkish characters (İ, ş, ğ) with proper kerning in Space Grotesk.
*   **Do** allow the `display-lg` text to "bleed" or sit very close to the edge of the container for a modern, editorial look.
*   **Do** use `9999px` (full) roundedness for small notification badges or status indicators.

#### Don't:
*   **Don't** use pure white (#FFFFFF) for text. Always use `on_surface` (#e4e1e9) to prevent eye strain in dark mode.
*   **Don't** use standard "Grey" for the Reset button. Use the `tertiary` (#c0c7d7) scale to keep it within the "Obsidian" color temperature.
*   **Don't** use 1px solid lines. If you need a separator, use a 12px gap of empty space.

---

### 7. Localization Note (Turkish)
Ensure all UI strings respect the length of Turkish words. 
*   *Example:* "Sıfırla" is longer than "Reset." Ensure the `tertiary` button container has flexible padding (minimum 24px horizontal) to accommodate text expansion without breaking the "Precision" layout.