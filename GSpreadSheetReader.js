var sSP = null; 

// Google callback
function doData(json) {
      sSP.spData = json.feed.entry;
      sSP.callback(sSP);
}
// Constructor
function GSpreadSheetReader (name, key, tab, callback){
   this.spData = null;
   this.name = name;
   this.key=key;
   this.url = "https://spreadsheets.google.com/feeds/cells/" + this.key + "/" + tab + "/public/values?alt=json-in-script&callback=doData"
   this.callback = callback;
   sSP = this;
}

// Load google api to retrieve the json data passed to doData.
GSpreadSheetReader.prototype.loadScript = function() {
  let script = document.createElement('script');
  script.src = this.url;
  document.head.append(script);
}

// Returns data from the spreadsheet.
GSpreadSheetReader.prototype.getCell = function(x, y) {
      var data = this.spData;
      
      for(var r=0; r < data.length; r++) {
          var cell = data[r]["gs$cell"];
          var val = cell["$t"];
          console.log(val)
          if (cell.row == x && cell.col == y) {
              return val;
          }
      }
      return "undefined";
  }
