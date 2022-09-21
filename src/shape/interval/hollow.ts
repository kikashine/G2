import { ShapeComponent as SC } from '../../runtime';
import { Color } from './color';

export type HollowOptions = Record<string, any>;

/**
 * Render rect in different coordinate and using color channel for stroke attribute.
 */
export const Hollow: SC<HollowOptions> = (options) => {
  return Color({ colorAttribute: 'stroke', ...options });
};

Hollow.props = {
  ...Color.props,
};
