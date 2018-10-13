# GSpreadSheetReader
This JS class intends to provide a simple google spreadsheet reader. 

Example:

```
<script src="spreadsheet.js"></script>
<script type="text/javascript">
    function callBackSP (sp) {
        //Get the cell number from the given tab.
        var cell = sp.getCell(1,1);
        document.getElementById("data").textContent = cell; 
    }
    //Change the key id in the second parameter and the tab number "1".
    var sp = new SpreadSheet("test1","1IjTQPoTivCpeGkUrvmBBdUUZGOXv_FfzRfKW_BUD8kA", "1", callBackSP);
    sp.loadScript();
</script>
```
