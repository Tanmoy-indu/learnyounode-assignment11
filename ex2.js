var sum = 0; //always initialize!
for (var i = 2; i < process.argv.length; i++ )
{
	sum = sum + Number(process.argv[i]);
}
console.log(sum); 

