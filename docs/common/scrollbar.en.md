Go to [ShapeAttrs](/en/docs/api/graphic-style) to learn more about _ShapeAttrs_.

| Properties | Type       | Description                                              |
| --------------- | ----------------                | ------------------ |
| type            | _'horizontal' \| 'vertical'_    | Type of scrollbar      |
| width           | _number_                        | Width，works when `type = 'vertical'`    |
| height          | _number_                        | height，works when `type = 'horizontal'`    |
| padding         | _number \| number[]_            | Padding       |
| categorySize    | _number_                        | For the horizontal scrollbar, it is the width of each category field on the x-axis; for the vertical scroll bar, it is the height of each category field on the x-axis |
| animate         | _boolean_                       | Whether to animate when scrolling, default follows the animation configuration in view  |
