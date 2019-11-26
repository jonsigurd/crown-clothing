Lesson-12 (section: 8, episode 102)
-----------------------------------
We have added redux to our application so we can leverage all the benefits that come with uni-directional data flow. Instead of the prop drilling we would have to do in order to pass our new user object down deeper into our component trees from our app, we can now just connect those components directly to our redux store where we store all our data.


Lesson-13 (section: 8, episode 104)
-----------------------------------
Let's update our app so that after a user signs-in they are redirected to the home page, also if a user is signed into our application, we don't want them to be able to access the signinandsignup page.