function is_Palindrome(S) {
  var rev = S.split("").reverse().join("");
  return S == rev;
}
  
function solution(S){  
  var max_length = 0,
  maxp = '';
  
  for(var i=0; i < S.length; i++) {
    var subs = S.substr(i, S.length);

    for(var j=subs.length; j>=0; j--) {
      var sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1)
      continue;

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }

  if (max_length===1) {
    return "NO";
  } else if(max_length === 2) {
    return "YES";
  } else {
    for(var x = 2; x < max_length; x++) {
      if(max_length % x === 0) {
        return "NO";
      }
    }
    return "YES";
  }
}
console.log(solution("122243323341"));
