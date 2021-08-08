var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let c=0;
for(let x in obj1)
{
    if(obj1.x != obj2.x)
    {
        console.log('Both obj doesnot have a same property');
        c++;
        break;
    }
}
if(c===0)
{
    console.log('Both obj have the same property');
}