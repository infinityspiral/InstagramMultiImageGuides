var savedRuler= app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;

var doc = app.activeDocument;
var w = doc.width;
var h = doc.height;
var ratio = w/h;
var unitVertical = w/ratio
var leftOverSpace = unitVertical - (w - Math.round(ratio) * unitVertical);

var guides = doc.guides;
guides.add(Direction.VERTICAL, w)

for (var i = 0; i < Math.round(ratio)+1; i++) { 
    guides.add(Direction.VERTICAL, i * unitVertical);
}

if(w % h != 0) doc.resizeCanvas (w+leftOverSpace, h, AnchorPosition.MIDDLELEFT);

app.preferences.rulerUnits = savedRuler;
