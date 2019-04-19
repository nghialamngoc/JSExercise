// Viết hàm chuyển đổi chuỗi có dấu chữ hoa thành chuỗi không dấu chữ thường.
// e.g: Có Dấu => co dau

function converString (str) {
    var r = str.toLowerCase().replace(/\s+/g, '-');
      non_asciis = {
          '-': '[`~!@#$%^&*()_|+=?;:",.<>/]',
          'a': '[ảàạảãàáâãäåắặẳằẵấầẩẫậâă]',
          'ae': 'æ',
          'c': 'ç',
          'e': '[èéẹẽẻềệếểễê]',
          'd': '[đ]',
          'i': '[ìíîïị]',
          'n': 'ñ',
          'o': '[òóọôõöộồốổỗơởợỡờớôơ]',
          'oe': 'œ',
          'u': '[ùúûűüủụưửựứừữư]',
          'y': '[ýỳỷỵỹ]'
      };
      for (i in non_asciis) {
          r = r.replace(new RegExp(non_asciis[i], 'gi'), i);
      }
      r = r.replace(/[^\w\s]/gi, ' ')
      return r
  }