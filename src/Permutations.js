// perumatation using recursive methods
function perumatation(p, up) {
  if (up.length == 0) {
    console.log(p);
    return;
  }
  let char = up.at(0);
  for (let i = 0; i <= p.length; i++) {
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    perumatation(f + char + s, up.substring(1));
  }
}
perumatation("", "abc");
