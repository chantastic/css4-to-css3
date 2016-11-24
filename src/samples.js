export const customPropertyVar = `

/*
 * custom properties with var()
 * http://cssnext.io/features/#custom-properties-var
 */

:root { --mainColor: red }

a { color: var(--mainColor) }
`

export const customPropertyApply = `

/*
 * custom properties with @apply
 * http://cssnext.io/features/#custom-properties-set-apply
 */

:root {
  --danger-theme: {
    color: white;
    background-color: red;
  };
}

.danger { @apply --danger-theme }
`

export const reducedCalc = `

/*
 * reduced calc
 * http://cssnext.io/features/#reduced-calc
 */

:root { --fontSize: 1rem }

h1 { font-size: calc(var(--fontSize) * 2) }
`

export const customMediaQuery = `

/*
 * custom media query
 * http://cssnext.io/features/#custom-media-queries
 */

@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
  body { font-size: 1.2rem }
}
`

export const mediaQueryRange = `

/*
 * media query range
 * http://cssnext.io/features/#media-queries-ranges
 */

@media (width >= 500px) and (width <= 1200px) {
  body { font-size: 1rem }
}
`
export const customSelector = `

/*
 * custom selectors
 * http://cssnext.io/features/#custom-selectors
 */

@custom-selector :--button button, .button;

:--button { padding: .5em 1em }
`
export const nesting = `

/*
 * nesting
 * http://cssnext.io/features/#nesting
 */

a {
  /* direct nesting */
  & span { color: white }

  /* @nest rule */
  @nest span & { color: blue }

  /* media query automatic */
  @media (min-width: 30em) {
    color: yellow;
  }
}
`

export const colorFunction = `

/*
 * color() function
 * http://cssnext.io/features/#color-function
 */

a { color: color(red alpha(-10%)) }
a:hover { color: color(red blackness(80%)) }
`

export const hwbFunction = `

/*
 * hwb() function
 * http://cssnext.io/features/#hwb-function
 */

 body { color: hwb(90, 0%, 0%, 0.5) }
`
export const grayFunction = `

/*
 * gray() function
 * http://cssnext.io/features/#gray-function
 */

 .foo { color: gray(85) }
 .bar { color: gray(10%, 50%) }
`

export const rrggbbaaColors = `

/*
 * #rrggbbaa color
 * http://cssnext.io/features/#rrggbbaa-colors
 */

body { background: #9d9c }
`
export const filterProperty = `

/*
 * filter property
 * http://cssnext.io/features/#filter-property
 */

.blur { filter: blur(4px) }
`

export const anyLinkPseudoClass = `

/*
 * :any-link pseudo-class
 * http://cssnext.io/features/#any-link-pseudo-class
 */

 nav :any-link { background-color: yellow }
`

export const matchesPseudoClass = `

/*
 * :matches pseudo-class
 * http://cssnext.io/features/#matches-pseudo-class
 */

 p:matches(:first-child, .special) { color: red }
`

export const notPseudoClass = `

/*
 * :not pseudo-class
 * http://cssnext.io/features/#not-pseudo-class
 */

 p:not(:first-child, .special) { color: red }
`
