// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount() {
    // return this.collection.length % this.itemsPerPage === 0
    //   ? this.collection.length / this.itemsPerPage
    //   : Math.floor(this.collection.length / this.itemsPerPage) + 1;

    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  itemCount() {
    return this.collection.length;
  }

  pageItemCount(page) {
    // return page < this.pageCount() - 1
    //   ? this.itemsPerPage
    //   : page === this.pageCount() - 1
    //   ? this.collection.length % this.itemsPerPage
    //   : -1;
    return page < this.pageCount()
      ? Math.min(
          this.itemsPerPage,
          this.collection.length - pageIndex * this.itemsPerPage
        )
      : -1;
  }

  pageIndex(i) {
    return 0 <= i && i < this.collection.length
      ? Math.floor(i / this.itemsPerPage)
      : -1;
  }
}

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function() {

// }

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function() {
//   return this.collection.length % this.itemsPerPage === 0 ? this.collection.length / this.itemsPerPage : Math.floor(this.collection.length / this.itemsPerPage) + 1;
// }

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function(pageIndex) {

// }

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function (itemIndex) {};

var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1
