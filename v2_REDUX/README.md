Lesson-12 (section: 8, episode 102)
-----------------------------------
We have added redux to our application so we can leverage all the benefits that come with uni-directional data flow. Instead of the prop drilling we would have to do in order to pass our new user object down deeper into our component trees from our app, we can now just connect those components directly to our redux store where we store all our data.


Lesson-13 (section: 8, episode 104)
-----------------------------------
Let's update our app so that after a user signs-in they are redirected to the home page, also if a user is signed into our application, we don't want them to be able to access the signinandsignup page.


Lesson-14 (section: 8, episode 107)
-----------------------------------
We now need to create our cart feature in our application. To start, we'll create our cartIcon and cartDropdown components. Then we'll create the necessary reducer, actions, and types associated to handling hiding and showing the carDropdown component.


Lesson-15 (section: 8, episode 109)
-----------------------------------
We have updated our cart redux files to handle adding an item, we have also connected it to our updated collection-item.


Lesson-16 (section: 8, episode 111)
-----------------------------------
Now that we have created all the redux code for storing our data, now we are going to connect our items to add them to our cart.