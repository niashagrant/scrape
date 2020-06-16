# scrape

Scrape is a web application that utilizes Mongoose and Cheerio to scrape articles from The Onion, and allows users to save articles and to make notes.

## npm packages Required for Homework:

- express
- express-handlebars
- mongoose
- cheerio
- axios

## Insturctions

Create an app that accomplishes the following:

Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

- Headline - the title of the article

- Summary - a short summary of the article

- URL - the url to the original article

- Feel free to add more content to your database (photos, bylines, and so on).

Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

Beyond these requirements, be creative and have fun with this!

View Demo site: https://pacific-coast-89509.herokuapp.com/
![Screenshot](scrapeImg.png)

## Difficulties Faced

- I could not find a website that had a summary so I decied to scrap an image instead.
- I am also having some difficulty with adding and deleting images to the database.
  - as well as appeding that to the correct article card.
