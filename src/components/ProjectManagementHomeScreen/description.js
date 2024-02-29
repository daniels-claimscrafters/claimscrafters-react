let description = '   test';

if (description.startsWith(' ')) {
    
    description = description.trimStart();
    console.log(description);
}