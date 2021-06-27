Style.scss
style.min.css

git init
.gitignore

npm init
npm i tailwindcss

mkdir scr
touch styles.css
mkdir public

Create your own styles:
CREATE Tailwind Config file: npx tailwindcss init --full
This approach will show you all of the 'default' tailwind css styles being used.

    Then simply add a new CSS Style to tailwind.config.js for example:
    font-size: mammoth: '8rem'

    Reprocess the src/styles.css file by running: npm run build-css

A better way to do this is to generate a 'blank' config file and add our styles to this file. Rename tailwind.config.js -> tailwind-renamed.config.js.

    Then create a the tailwindcss config file again using: npx tailwindcss init
    At this point tailwind still uses all of the default values under the hood, but now we can extend these styles using our values.

theme: {
extend: {
colors:{
primaryColor: '#FF6363',
secondaryColor: {
100: '#E2E2D5',
200: '#888883'
}
}
},
},

    Rebuild the tailwindcss: npm run build-css

    Now we can use the new styles for example:
        <a href="#" class="text-primaryColor">Log in</a>
        or
        <div class="bg-secondaryColor-100 text-secondaryColor-200">Load more</div>

After creating our own tailwindcss.config file, we can now use Tailwind CSS IntelliSense from bradlc.vscode-tailwindcss.

This extension will display the tailwind class using intelliSense.

Using a Custom Font. Let's get a style from Google Fonts (Noto Sans JP).
Open src/styles.css and paste at the top:
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;700;900&display=swap');

Now we need to extend our styles in the tailwind.config.js file by adding the font-family attribute:
theme: {
extend: {
colors:{
primaryColor: '#FF6363',
secondaryColor: {
100: '#E2E2D5',
200: '#888883'
}
},
fontFamily: {
body:['Noto Sans JP']
}
},
},

Let's add the class="text-gray-600 font-body" to the <body> tag.

FLEXBOX
Using Flex in our design. Let's use Flexbox to position our Login and Sign Up buttons by simply adding class="flex" to the surrounding div:

  <div class="flex">...</div>

Not much changes at this point, if we use the class 'justify-end' it will push our elements to the right.

  <div class="flex justify-end">...</div>

Let's look at another example by centering our "Load More" button adding the class="flex justify-center" to the surrounding div:

  <div class="flex justify-center">
  <div class="bg-secondaryColor-100 text-secondaryColor-200">Load more</div>
  </div>

Responsive Classes
Tailwind uses a 'mobile-first' approach to responsiveness by setting the breakpoints to use the 'min-width' attribute. Here are the default breakpoints

sm 640px @media (min-width: 640px) { ... }
md 768px @media (min-width: 768px) { ... }
lg 1024px @media (min-width: 1024px) { ... }
xl 1280px @media (min-width: 1280px) { ... }
2xl 1536px @media (min-width: 1536px) { ... }

To take advantage of these classes all we need to do is specify the breakpoint prefix and the utility class. Let's style our Login and Sign Up buttons again to take advantage of the 'md' and 'sm' breakpoints. If we only add 'md:' to our div, we see that on smaller screen the content is set to 'justify start' by default. This means we need to also tell tailwind that small screens and up to medium screens we want to justify-center like so:

<div class="flex justify-center md:justify-end">...</div>

Card Component
Let's start first by giving bg-gray-100 to the main and bg-white to the card div. Next adding a rounded class gives use a small issue with the image top right and left corners. They are still pointed and this can easily be fixed using the overflow:hidden class. After this we add some font styling to our spans, some margin to the div surrounding the spans and finally, we need to style the image. To accomplish this we add the utility classes 'w-full h-32 sm:h-48 object-cover'.
<img src="./img/stew.jpeg" alt="Stew" class="w-full h-32 sm:h-48 object-cover" />

Badges
Let's add a div with a span to our card just below the div containing the Recipe Name and Recipe By, which will represent the time needed to create the dish.

We want to position this div using 'absolute' in the top corner, which means we need to add the 'relative' class to the parent div. At this point, our new div has disappeared since we haven't specified where. Let's add 'top-0' and our div reappears in the top left corner. A little margin for positioning and we are finnished.

<div class="bg-white rounded overflow-hidden shadow-md relative">
<img>
    <div class="bg-secondaryColor-100 text-secondaryColor-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
      <span>25 Minutes</span>
    </div>
</div>

@Apply Directive
We see that adding these utility classes can get a little bit messy and troublesome if we want to create new cards and need to change a class later. Tailwind allows us to use @apply to directly add these classes from a seperate file. Let's cut the card and badge classes (Card Classes: "bg-white rounded overflow-hidden shadow-md relative") out of the HTML file and them in the styles.css like so:
.card {
@apply bg-white rounded overflow-hidden shadow-md relative
}

.badge {
@apply bg-secondaryColor-100 text-secondaryColor-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2
}

Since we have changed the styles.css file, we will need to rerun our build: npm run build-css.
 In Package.json, make sure that you are using '-i' in the build script.

  "scripts": {
    "build-css": "tailwindcss build -i ./src/styles.css -o ./public/styles.css"
  },

GRID
We start by adding the class grid to container, specifying how many columns we need grid-col-3 and adding a gap-10. To make this responsive and stack our cards on smaller screens, let's add lg: prefix to the grid-col-3.

For the overall layout, we want place the nav and main div's side by side. Let's add grid to the container grid-cols-3. We see that some work still needs to be done. Let's add col-span-1 to the nav container div and col-span-2 to the main element. 

On smaller screens, we want the nav to be on top. Easy, using the md: prefix will tell tailwind we want medium screen and larger we want the elements placed side by side.
    <div class="grid md:grid-cols-3">
      <div class="md:col-span-1">
      <main class="px-16 py-6 bg-gray-100 md:col-span-2">...</main>
      </div> 
      </div>


BUTTONS
Here we want to change our <a> tags to look like buttons. Using the @apply logic will make this easier. 
  .btn{
      @apply rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider; 
  }
