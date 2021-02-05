import { theme, scale, animation, annotation, tooltip } from '../../adaptor/common';
import { Params } from '../../core/adaptor';
import { flow, deepAssign } from '../../utils';
import { interval } from '../../adaptor/geometries';
import { X_FIELD, Y_FIELD } from '../tiny-line/constants';
import { getTinyData } from '../tiny-line/utils';
import { adjustYMetaByZero } from '../../utils/data';
import { TinyColumnOptions } from './types';
/**
 * 字段
 * @param params
 */
function geometry(params: Params<TinyColumnOptions>): Params<TinyColumnOptions> {
  const { chart, options } = params;
  const { data, color, columnStyle, columnWidthRatio } = options;

  const seriesData = getTinyData(data);

  chart.data(seriesData);

  const p = deepAssign({}, params, {
    options: {
      xField: X_FIELD,
      yField: Y_FIELD,
      widthRatio: columnWidthRatio,
      interval: {
        style: columnStyle,
        color,
      },
    },
  });
  interval(p);

  chart.axis(false);
  chart.legend(false);
  chart.interaction('element-active');
  return params;
}

/**
 * meta 配置
 * @param params
 */
export function meta(params: Params<TinyColumnOptions>): Params<TinyColumnOptions> {
  const { options } = params;
  const { xAxis, yAxis, data } = options;
  const seriesData = getTinyData(data);

  return flow(
    scale(
      {
        [X_FIELD]: xAxis,
        [Y_FIELD]: yAxis,
      },
      {
        [X_FIELD]: {
          type: 'cat',
        },
        [Y_FIELD]: adjustYMetaByZero(seriesData, Y_FIELD),
      }
    )
  )(params);
}

/**
 * 迷你柱形图适配器
 * @param chart
 * @param options
 */
export function adaptor(params: Params<TinyColumnOptions>) {
  return flow(geometry, meta, tooltip, theme, animation, annotation())(params);
}
