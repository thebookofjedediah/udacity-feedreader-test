/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("should have a URL that is defined", function() {
             allFeeds.forEach((feed) => {
               expect(feed.url).toBeDefined(); // defined spot for URL
               expect(feed.url.length).not.toBe(0); // something is inside the URL space
             });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it("should have a name that is defined", function() {
             allFeeds.forEach((feed) => {
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
             });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function(){

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it("Should have a menu element that is hidden by default", function(){
         expect($("body").hasClass("menu-hidden")).toBe(true);
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it("Should have a menu that toggles when the menu icon is clicked", function(){
          let menuIcon = $(".menu-icon-link");
          menuIcon.click()
          expect($("body").hasClass("menu-hidden")).toBe(false);
          menuIcon.click()
          expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function(){
      // Await async actions in page loading
      beforeEach(function(done){
        loadFeed(0, function(){
          done();
        });
      });
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       it("loads the page with at least a single feed element", function(){
         let entry = document.querySelector(".feed").querySelector(".entry").length; // find first .entry and calculate length
         expect(entry).not.toBe(0); //
       })

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function(){
      let feedOne; // Declare variable to store first feed in
      // call the first loadFeed before running test
      beforeEach(function(done){
        loadFeed(0, function(){
          feedOne = $(".feed").html(); // store the feed in the variable
        });
        done();
      });
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
       it("the content changes when loadFeed is called", function(){
         let feedTwo = $(".feed").html();
         expect(feedOne).not.toBe(feedTwo);
       });
    });

}());
