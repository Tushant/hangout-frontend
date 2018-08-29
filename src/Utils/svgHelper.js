// export const fitTextToWidth = (element, width) => {
//   let i = 0;
//   while (true) {
//     // eslint-disable-line no-constant-condition
//     const textWidth = element.getBBox().width;
//     const fontSize = parseInt(element.attr()['font-size'], 10);
//     if (textWidth < width) {
//       // console.log(i, element.getBBox());
//       break;
//     }
//     element.attr({
//       'font-size': fontSize - i,
//     });
//     i += 1;
//   }
// };
