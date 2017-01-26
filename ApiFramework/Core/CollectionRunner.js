
var newman = require('newman')

// Do something
newman.run({
    collection: require(process.cwd().toString() + '/ApiFramework/Collections/CollectionTest.json'),
    reporters: 'cli'
}, function(err) {
    if (err) {
        throw err;
    }
    console.info('collection run complete!');
});
