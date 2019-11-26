Lesson-17 (section: 8, episode 115)
-----------------------------------
We need to create our cart-item component for our cart and connect our cart component to our cart reducer.


Lesson-18 (section: 8, episode 116)
-----------------------------------
We want to separate all our business logic in our selectors. In this lesson we add a new selector to show our total count of items.


Lesson-19 (section: 8, episode 122)
-----------------------------------
Now that we have our cart, it's time to create our checkout page. We need a checkout component for the page and our checkout-item component. We're going to connect the page to our cart reducer; we're also going to make a selector to get the total price.


Lesson-20 (section: 8, episode 123)
-----------------------------------
We want to be able to remove the item from the cart if the user doesn't want it anymore during checkout so we're going to add the appropriate action and case in our cart reducer.


Lesson-21 (section: 9, episode 125)
-----------------------------------
We also want to be able to update the quantity using buttons to the left and right of the number, so we will add the appropriate code to do so.


Lesson-22 (section: 10, episode 126)
-----------------------------------
We don't want our users to lose their carts whenever they refresh, so we are going to leverage one of the benefits of redux by persisting our store object in localstorage using redux-persist.