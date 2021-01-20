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
CRUP Operations:
- Create blog post
- update blog post
- star post (make the display, need to find current starred and remove star)
- Edit blog post
- Make post hidden (change IsHidden to false, don't show on blog page)
       Can't hide a blog if its currently set to starred



Blog post functionality:
Can have text and images at this time. Stored in DB:
C: Comment
Ds: BPID, BlogContentID, Type (text or image), Contents (text or a url)
      if type=text, append to <p>. if type=image, append to <img>
  
 
