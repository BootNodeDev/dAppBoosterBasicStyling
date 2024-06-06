import { css } from 'styled-components'

/**
 * Base, global, general use CSS variables. Don't put any colors here.
 *
 * I suggest your use a --base prefix to indicate that these variables are not
 * theme-specific and to avoid conflicts with other CSS variables.
 */
export const base = css`
  /* Border radius */
  --base-border-radius-xs: 2px;
  --base-border-radius-sm: 4px;
  --base-border-radius: 8px;
  --base-border-radius-xl: 16px;

  /* Grid / flex gap */
  --base-gap-sm: 4px;
  --base-gap: 8px;
  --base-gap-xl: 16px;

  /* Font families */
  --base-font-family: 'Manrope', 'Arial', 'Helvetica Neue', 'Helvetica', sans-serif;
  --base-font-family-code: 'Roboto Mono', 'Courier New', monospace;

  /* Font sizes */
  --base-title-font-size: 2.4rem;
  --base-text-font-size: 1.6rem;

  /* Padding */
  --base-common-padding-sm: 4px;
  --base-common-padding: 8px;
  --base-common-padding-xl: 16px;

  /* Main container horizontal padding */
  --base-padding-mobile: 4px;
  --base-padding-tablet-portrait: 8px;
  --base-padding-tablet-landscape: 8px;
  --base-padding-desktop: 16px;
  --base-padding-desktop-xl: 16px;

  /* Main container max width */
  --base-container-max-width: 1360px;

  /* Button */
  --base-button-border-radius: var(--base-border-radius-sm);
  --base-button-font-size: 1.5rem;
  --base-button-gap: var(--base-gap);
  --base-button-height: 38px;
  --base-button-padding: calc(var(--base-gap) * 2);
`
