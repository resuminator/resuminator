/**
 * Calculates spacing in the X direction based on spacing tokens.
 * @param spacing Spacing value
 * @returns Adjusted pixel value for spacing
 */
export const getXspacing = (spacing: number) => {
  const BASE_SPACING = 1;
  const SPACE_FACTOR = 4;
  const SPACE_ADJUSTMENT = 1;
  const DEFAULT = 3;

  // These adjustments have been made to return spacing as ["0.125rem", chakra-spacing-1, chakra-spacing-2, chakra-spacing-3]

  return spacing >= BASE_SPACING
    ? spacing * SPACE_FACTOR - SPACE_ADJUSTMENT
    : DEFAULT;
};

/**
 * Calculates spacing in the Y direction based on spacing tokens.
 * @param spacing Spacing value
 * @returns Adjusted pixel value for spacing
 */
export const getYspacing = (spacing: number) => {
  const BASE_SPACING = "0.125rem";
  const SPACE_FACTOR = 2;
  const SPACE_ADJUSTMENT = 1;

  // These adjustments have been made to return spacing as ["0.125rem", chakra-spacing-1, chakra-spacing-2, chakra-spacing-3]

  const spacingInChakraUnits = spacing * SPACE_FACTOR - SPACE_ADJUSTMENT;

  return spacingInChakraUnits === 0 ? BASE_SPACING : spacingInChakraUnits;
};
