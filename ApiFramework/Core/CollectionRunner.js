
var newman = require('newman')
var filesystem = require('fs');
// call newman.run to pass `options` object and wait for callback
if(fs.existsSync('../Collections/CollectionTest.json')) {
    // Do something
    newman.run({
        collection: require(process.cwd()+'/ApiFramework/Collections/CollectionTest.json'),
        reporters: 'cli'
    }, function (err) {
        if (err) { throw err; }
        console.info('collection run complete!');
    });
}
else
{
  console.log('Collection was not found.' + process.cwd() +);
}
