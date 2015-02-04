var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: { type: Number, default: 0 },
  // Hm, I would have used an embedded document for Comments instead...
  // Maybe the point of keeping Comments in a separate collection will be revealed later in the tutorial.
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Post', PostSchema);
