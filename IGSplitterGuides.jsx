var savedRuler= app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;

var doc = app.activeDocument;
var w = doc.width;
var h = doc.height;
var ratio = w/h;
var divisions = Math.ceil(ratio);

var guides = doc.guides;
guides.add(Direction.VERTICAL, w)
for (var i = 0; i < divisions; i++) { 
    guides.add(Direction.VERTICAL, i * h);
}

doc.resizeCanvas (h*divisions, h, AnchorPosition.MIDDLELEFT);
app.preferences.rulerUnits = savedRuler;
