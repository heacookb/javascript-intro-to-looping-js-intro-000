function maybeTrue()
{
  return Math.random() >= 0.5;
}

function forLoop(array)
{
  for(let i = 0; i<25; i++)
  {
    array.push("I am" + i + " strange loop")
  }
  return array;
}
function whileLoop(n)
{
    while(n > 0)
    {
       console.log(n)
       n--;
    }
}
function doWhileLoop(array)
{
  do{
      array.pop();
  }  while(array.length > 0 && maybeTrue())
    
  
}