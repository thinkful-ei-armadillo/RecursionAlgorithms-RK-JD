// 1: Counting Sheep
function CountSheep(sheep){
  //base case
  if(sheep === 0)
    return 'All sheep jumped over the fence'
    // take the number of sheep and subtract the first sheep over the fence until there are no sheep left.
    //Return a message for each sheep that jumps over the fence.
  return (`${sheep}: Another Sheep jumped over the fence ` +
    CountSheep(sheep - 1))
}
//input
CountSheep(3);
//Output: sheep over fence(repeated)
    
    
    
// 2: Power Calculator
function powerCalculator(base, exponent){
  //base case
  if(exponent <= 0)
    return 'exponent shold be >= 0'
    // if exp equals one return the base number
  if(exponent === 1)
    return base
    //Return the base times base with the exponent subtracting until it reaches 0
  return (base * powerCalculator(base, exponent-1))
}
//inputn
powerCalculator(10, 2);
//output 100
powerCalculator(10, -2);
//output 0
    
    
// 3: Reverse string
function reverseString(str){
  //base case
  if(str.length === 0)
    return ""
    //take the last letter and create a new string with that letter in front
    //repeat for the remaining letters until there are no letters left.
  return(str.slice(-1) + reverseString(str.slice(0, str.length -1)))
}
//input
reverseString('string');
//output
//'gnirts'
    
// 4: nth Triangular number
function triNum(n){
  //return trinum seq
  //base case when it goes down to 0 return nothing
  if(n === 0)
    return 0;
  // 
  return n  + triNum(n - 1)
}
// 9  8 7 6 5 4 3 2 1
//take number of dots for one side of triangle and subtract one from that number until the number of dots equal to 0
// 1 - 3 - 6 - 10
//   2    3   4
triNum(9);
//output === 6
function strSplit(str, seperator){
  if(str.length === 0)
    return ''
  if(str.slice(0,1) === seperator)    
    return  strSplit(str.slice(1), seperator)
  return str.slice(0, 1) + strSplit(str.slice(1), seperator)
    
  //take the string and go through each char. and if the string matches the sereator dont add it to the output
}
    
    
strSplit('02/02/2020', '/');
// output === 02202020