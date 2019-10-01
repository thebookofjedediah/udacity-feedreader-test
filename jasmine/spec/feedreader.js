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
    // Begin tests for RSS Feed
    describe('RSS Feeds', function(){

        // Make sure the feed loads and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Ensure the RSS Feed has a URL area that is not empty
        it("should have a URL that is defined", function(){
            allFeeds.forEach((feed) => {
              expect(feed.url).toBeDefined(); // defined spot for URL
              expect(feed.url.length).not.toBe(0); // something is inside the URL space
            });
        });

        // Ensure each feed has a name that is not blank/empty
        it("should have a name that is defined", function(){
            allFeeds.forEach((feed) => {
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
            });
        });
    });


    // New test suite for the menu
    describe("The menu", function(){

       // Make sure the element is hidden at first
       it("Should have a menu element that is hidden by default", function(){
         expect($("body").hasClass("menu-hidden")).toBe(true);
       });

        // Ensure the element toggles between hidden and visible when the icon is clicked
        it("Should have a menu that toggles when the menu icon is clicked", function(){
          let menuIcon = $(".menu-icon-link");
          menuIcon.click()
          expect($("body").hasClass("menu-hidden")).toBe(false);
          menuIcon.click()
          expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });


    // Test Suite for Initial Entries
    describe("Initial Entries", function(){
      // Await async actions in page loading
      beforeEach(function(done){
        loadFeed(0, done);
      });
       // On load make sure there is at lease a .entry within each .feed and it is not empty
       it("loads the page with at least a single feed element", function(){
         let entry = document.querySelector(".feed").querySelector(".entry").length; // find first .entry and calculate length
         expect(entry).not.toBe(0); //
       })

    });

    // Test Suite for New Feeds
    describe("New Feed Selection", function(){
      let feedOne;
      let feedTwo;
      // call the first loadFeed before running test
      beforeEach(function(done){
        loadFeed(0, function(){
          feedOne = $(".feed").html(); // store the feed in the variable
          loadFeed(1, function(){
            feedTwo = $(".feed").html();
            done();
          });
        });
      });
       // Check to make sure the new feed is different than the last feed 
       it("the content changes when loadFeed is called", function(){
         expect(feedOne).not.toBe(feedTwo);
       });
    });

}());
