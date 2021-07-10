/**
 * 进制转换
 * @param {number} num 要处理的数字
 * @param {int} radix 进制
 * @param {int} precision 精度（保留x位小数）
 * @param {function} format 格式化表示
 * @returns {string} 结果
 */
export function transRadix(
  num,
  radix = 64,
  precision = 10,
  format = (arr) => arr.map((item) => `(${item})`).join("")
) {
  const sign = num < 0 ? -1 : 1; // 符号
  let decimal = (sign * num) % 1; // 小数部分
  let integer = sign * num - decimal; // 整数部分

  let digit,
    tmp,
    arrInt = [],
    arrDec = [];
  while (integer > 0) {
    // 处理整数部分
    digit = integer % radix;
    integer = (integer - digit) / radix;
    arrInt.unshift(digit);
  }
  while (precision > 0) {
    // 处理小数部分
    decimal = decimal * radix;
    if (decimal >= 1) {
      tmp = decimal % 1;
      digit = decimal - tmp;
      decimal = tmp;
      arrDec.push(digit);
    } else {
      arrDec.push(0);
    }
    --precision;
  }

  arrInt.length === 0 && arrInt.push(0); // 补位
  const strSign = sign > 0 ? "" : "-";
  const strInt = format(arrInt);
  const strDec = `.${format(arrDec)}`;
  return strSign + strInt + strDec;
}

// const x = -4294966296.99;
// console.log(transRadix(-4.12, 2));
// console.log(transRadix(x, 8));
// console.log(transRadix(x, 16));
// console.log(transRadix(x, 64));
// console.log(transRadix(4294966296.99, 64));
// console.log(transRadix(100, 64));
