/*
bucket = ['See Grand Canyon', 'Bungee Jumping']

seeOrAdd = prompt('Type "b" to see your bucket list. Type "a" to add an item to your bucket list.') 

if (seeOrAdd == 'b') {
  for (i = 0; i < bucket.length; i++)
    console.log(bucket[i])
} else if (seeOrAdd == 'a') {
  let addBucket = ''
  let stopper = false
  while (stopper == false) {
    addBucket = prompt('Add a bucket list item.  To stop, type "n".')
    if (addBucket == 'n')
      stopper = true
    else
      bucket.push(addBucket)
  }
}
    
for (j = 0; j < bucket.length; j++)
  console.log(bucket[j])
*/