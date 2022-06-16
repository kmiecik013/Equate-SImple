function quad(a, b, c) {
  let posQuad = -b + Math.round((Math.sqrt((b*b)- (4*a*c))/2*a));

  let negQuad = -b - Math.round((Math.sqrt((b*b)- (4*a*c))/2*a)); 

  return "Your solutions are " + posQuad + " & " + negQuad
}

console.log(quad(10, 40 , 12));