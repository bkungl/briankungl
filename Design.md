### Design Document for Website Planning

## Home Page
Home Landing:
- about me (info, picture, socials, details)
- clickable unis
  - on click, show picture collage
- interactive scroll sidebar
- consider merging skills (need to fix the mess), blog, resume, etc to this page?



## Blog Page
Home Page:
- featured componenet
- search bar
- blog post





## Database Stuff
Document unless specified

C: Resume
- ResumeID, Resum... todo
C: Blog Post
- BlogID, BlogTitle, IsStarred, Comments (show where comment.bpid = blogid), IsHidden


## Express
https://bezkoder.com/angular-10-mongodb-node-express/
# Organized CRUD:
Home page:
- select statements for displaying the data + images

Blog view page:
- selects to create posts

Blog edit page:
- selects to get data
- update to change data
- select to get metadata (ishidden, isstarrred, etc)
- NO delete post, only delete paragraph/image
- staring a post: select star, update star (for old and new)
- making a post hidden: update ishidden field


**Methods | URLs | Actions**
| :------------- | :---------- | :----------- |
| Get | api/blogs | Gets all blog data (minus starred blog?)|
| Put | api/blogs/:id/:BlogContentID | Updates the blog paragraph or image |
| DELETE | api/blogs/:id/BlogContentID | Deletes the blog paragraph or image |
| Get | api/blogs?isStarred=[true] | Gets the blog post that is currently starred |
| Put | api/blogs/:id/ | (Called twice) Flips the IsStarred Value |     TODO find a way to make this work without having to update the entire document in mongo
More...



## Security
https://bezkoder.com/mean-stack-authentication-angular-10/


Blog post functionality:
Can have text and images at this time. Stored in DB:
C: Comment
Ds: BPID, BlogContentID, Type (text or image), Contents (text or a url); if type=text, append to <p>. if type=image, append to <img>
  
 
