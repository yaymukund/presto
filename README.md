# Presto

Presto is a simple Ember library for uploading tracks to S3. It is meant
to work with a MusicRoom server.

```javascript
import Presto from 'presto';

Presto.reopenClass({
  bucketUrl: '...',
  policyUrl: '...'
});

var upload = Presto.upload(data);

upload.get('isDone'); // false
upload.get('progress'); // 20
upload.get('progress'); // 75
upload.get('progress'); // 100
upload.get('isDone'); // true
```
