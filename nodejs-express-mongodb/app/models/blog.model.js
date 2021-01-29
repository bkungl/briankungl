module.exports = mongoose => {
    const Blog = mongoose.model(
        "blog",
        mongoose.Schema({
            blogID: Number,
            blogTitle: String,
            isStarred: Boolean,
            isHidden: Boolean
        }, {
            timestamps: true
        })
    );

    return Blog;
};


/*

BlogID, BlogTitle, IsStarred, Comments (show where comment.bpid = blogid), IsHidden

*/
