/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

/*
  This file contains various elements used to style the charts.

  bluiColors: an array of Brightlayer UI 500 and 300 level colors
  sizes: an array of font sizes for various chart elements
*/
import * as BLUIColors from '@brightlayer-ui/colors';
export const OpenSans = 'Open Sans';

export const bluiColors: string[] = [
    BLUIColors.blue[500],
    BLUIColors.red[500],
    BLUIColors.green[500],
    BLUIColors.purple[500],
    BLUIColors.orange[500],
    BLUIColors.gold[500],
    BLUIColors.yellow[500],
    BLUIColors.blue[300],
    BLUIColors.red[300],
    BLUIColors.green[300],
    BLUIColors.purple[300],
    BLUIColors.orange[300],
    BLUIColors.gold[300],
    BLUIColors.yellow[300],
];

export const sizes = {
    title: '1.4em',
    subtitle: '1.1em',
    axisTitle: '1em',
    axisLabel: '.8em',
    tooltip: '1em',
};
