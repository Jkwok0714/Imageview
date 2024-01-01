"use strict";

if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  // alert('detected File API support!');
  ReactDOM.render(React.createElement(App, null), document.getElementById("App"));
} else {
  alert('The File APIs are not fully supported in this browser.');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZpbGUiLCJGaWxlUmVhZGVyIiwiRmlsZUxpc3QiLCJCbG9iIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsT0FBT0MsSUFBUCxJQUFlRCxPQUFPRSxVQUF0QixJQUFvQ0YsT0FBT0csUUFBM0MsSUFBdURILE9BQU9JLElBQWxFLEVBQXdFO0FBQ3RFO0FBQ0E7QUFDQUMsV0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCO0FBQ0QsQ0FKRCxNQUlPO0FBQ0xDLFFBQU0sd0RBQU47QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmICh3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZVJlYWRlciAmJiB3aW5kb3cuRmlsZUxpc3QgJiYgd2luZG93LkJsb2IpIHtcbiAgLy8gR3JlYXQgc3VjY2VzcyEgQWxsIHRoZSBGaWxlIEFQSXMgYXJlIHN1cHBvcnRlZC5cbiAgLy8gYWxlcnQoJ2RldGVjdGVkIEZpbGUgQVBJIHN1cHBvcnQhJyk7XG4gIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcFwiKSk7XG59IGVsc2Uge1xuICBhbGVydCgnVGhlIEZpbGUgQVBJcyBhcmUgbm90IGZ1bGx5IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIuJyk7XG59XG4iXX0=