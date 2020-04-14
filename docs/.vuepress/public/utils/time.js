// 时间戳转换
function transform (timestamp) {
  timestamp = timestamp ? timestamp : new Date().getTime();
  const time = new Date(timestamp),
    y = time.getFullYear(),
    M = time.getMonth() + 1,
    d = time.getDate(),
    h = time.getHours(),
    m = time.getMinutes(),
    s = time.getSeconds();

  return y + '/' + addZero(M) + '/' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
}

export {transform};

// 加 0
function addZero (m) {
  return m < 10 ? '0' + m : m;
}

export {addZero};

// 判断类型
function typeOf (obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}

export {typeOf};

// deepCopy
function deepCopy (data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
      o = [];
  } else if ( t === 'object') {
      o = {};
  } else {
      return data;
  }

  if (t === 'array') {
      for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
      }
  } else if ( t === 'object') {
      for (let i in data) {
      o[i] = deepCopy(data[i]);
      }
  }
  return o;
}

export {deepCopy};