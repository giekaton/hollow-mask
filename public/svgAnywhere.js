// 
// SVG Anywhere v.0.0.1
// In-browser SVG vector editor (PoC)
// Author: Gie Katon (giekaton.com)
// 
// References:
// http://svg.dabbles.info/snaptut-drag
// https://www.dashingd3js.com/svg-paths-and-d3js
//

function svgAnywhere(svgId) {
    let colors = [];
    // colors["M"] = "#F81F0000";
    // colors["V"] = "#3EB3E400";
    // colors["L"] = "#F8F30000";
    // colors["C"] = "#EF229000";
    // colors["A"] = "#51D90200";
    // colors["H"] = "#C7F80000";
    // colors["orange"] = "#FF952300";
    // colors["blue"] = "#0694F600";
    // colors["pink"] = "#F6C6CA00";

    let svgMask = document.getElementById(svgId);
    let svgGroupMarkup = document.getElementById("svg-wireframe");
    let svgPaths = document.getElementsByClassName("svg-path");
    let s = Snap('#'+svgId);

    let svgGroup = s.group();
    svgGroup.attr({ id: 'svg-group'});


    function drawHelpers(item, index, indexReal, pathId, pathAbsolute) {


    // DRAGGING: Listeners for moving/editing vectors
    var start = function() {
        // console.log(this.transform());
        this.data("origTransform", this.transform().local);
    };
    var stop = function() {
        console.log("finished dragging");
    };


    // MOVE
    var move = function(dx, dy) {
        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let bBox = this.getBBox();

        let index = this.node.id.substring(2);
        index = index.split('-');
        index = index[0];

        console.log(index);

        pathAbsolute[index][3] = bBox.cx;
        pathAbsolute[index][4] = bBox.cy;

        updatePaths(pathAbsolute, pathId);
    };


    // MOVE A
    var moveA = function(dx, dy) {
        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let bBox = this.getBBox();

        let index = this.node.id.substring(2);
        index = index.split('-');
        index = index[0];

        console.log(index);

        pathAbsolute[index][6] = bBox.cx;
        pathAbsolute[index][7] = bBox.cy;

        updatePaths(pathAbsolute, pathId);
    }


    // MOVE L
    var moveL = function(dx, dy) {
        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let bBox = this.getBBox();

        // this cia yra ne tas, bet tik kartais
        // console.log(this.node.id);
        let index = this.node.id.substring(2);
        index = index.split('-');
        index = index[0];

        console.log(index);

        pathAbsolute[index][1] = bBox.cx;
        pathAbsolute[index][2] = bBox.cy;

        updatePaths(pathAbsolute, pathId);
    };


    // MOVE V
    var moveV = function(dx, dy) {
        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let bBox = this.getBBox();

        let index = this.node.id.substring(2);
        index = index.split('-');
        index = Number(index[0]);

        console.log(index);

        // get last not V index
        let i = -1;
        let lastIndex = index + i;
        while (pathAbsolute[lastIndex][0] == "V") {
        i--;
        lastIndex = index + i;
        }

        lastX = getLastX(index, pathAbsolute);

        beforeType = pathAbsolute[lastIndex][0];

        if (
        beforeType == "M" ||
        beforeType == "L" ||
        beforeType == "H" ||
        beforeType == "T"
        ) {
        pathAbsolute[lastIndex][1] = bBox.cx;
        pathAbsolute[index][1] = bBox.cy;
        } else {
        pathAbsolute[lastIndex][lastIndex.length - 2] = bBox.cx;
        pathAbsolute[index][1] = bBox.cy;
        }

        updatePaths(pathAbsolute, pathId);
    };


    // MOVE H
    var moveH = function(dx, dy) {
        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let bBox = this.getBBox();

        let index = this.node.id.substring(2);
        index = index.split('-');
        index = Number(index[0]);

        console.log(index);

        // get last not V index
        let i = -1;
        let lastIndex = index + i;
        while (pathAbsolute[lastIndex][0] == "V") {
        i--;
        lastIndex = index + i;
        }

        let lastY = getLastY(index, pathAbsolute);

        let beforeType = pathAbsolute[lastIndex][0];

        if (
        beforeType == "M" ||
        beforeType == "L" ||
        beforeType == "V" ||
        beforeType == "T"
        ) {
        pathAbsolute[index][1] = bBox.cx;
        pathAbsolute[lastIndex][1] = bBox.cy;
        } else {
        pathAbsolute[index][index.length - 2] = bBox.cx;
        pathAbsolute[lastIndex][1] = bBox.cy;
        }

        updatePaths(pathAbsolute, pathId);
    };


    // MOVE MMMM
    var moveM = function(dx, dy) {
        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let bBox = this.getBBox();

        let index = this.node.id.substring(2);
        index = index.split('-');
        index = index[0];

        pathAbsolute[index][3] = bBox.cx;
        pathAbsolute[index][4] = bBox.cy;

        updatePaths(pathAbsolute, pathId);
    };


    // MOVE CCCC
    var moveC = function(dx, dy) {
        let bBox = this.getBBox();

        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let helperLine = this.node.previousSibling;
        helperLine.setAttribute("x2", bBox.cx);
        helperLine.setAttribute("y2", bBox.cy);

        let index = this.node.id.substring(2);
        index = index.split('-');
        index = index[0];

        // console.log(index);
        // console.log(pathAbsolute, index, this.node.id)

        if (this.node.id.substring(0, 2) == "c2") {
        pathAbsolute[index][1] = bBox.cx;
        pathAbsolute[index][2] = bBox.cy;
        } else {
        pathAbsolute[index][3] = bBox.cx;
        pathAbsolute[index][4] = bBox.cy;
        }

        updatePaths(pathAbsolute, pathId);
    };

    // MOVE CCCC NODE
    var moveCNode = function(dx, dy) {
        // console.log(this);
        this.attr({
        transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });

        let index = this.node.id.substring(2);
        index = index.split('-');
        index = index[0];

        // console.log(index);

        let bBox = this.getBBox();

        let helperLine = getById("c1" + index + "-line" + "-" + pathId);
        if (helperLine != null) {
        helperLine.setAttribute("x1", bBox.cx);
        helperLine.setAttribute("y1", bBox.cy);
        }

        let newIndex = Number(index) + 1;
        let helperLine2 = getById("c2" + newIndex + "-line" + "-" + pathId);
        if (helperLine2 != null) {
        helperLine2.setAttribute("x1", bBox.cx);
        helperLine2.setAttribute("y1", bBox.cy);
        }

        pathAbsolute[index][5] = bBox.cx;
        pathAbsolute[index][6] = bBox.cy;

        updatePaths(pathAbsolute, pathId);
    };




    // DRAW NODE ICONS, HELPER LINES AND ATTACH MOVE LISTENERS


    // MMMMMMMMMMMMMMMMMMMM 
    // moveTo (x, y) Move the pen to a new location. No line is drawn. All path data must begin with a 'moveto' command.
    if (item[0] == "M" || item[0] == "m") {
        console.log(item[0]);
        let icon = s.circle(item[1], item[2], 3).attr({ fill: "yellow" });
        icon.attr({ id: "m-" + index + "-" + pathId });
        icon.appendTo(svgGroup);
        icon.drag(moveM, start, stop);
    }


    // CCCCCCCCCCCCCCCCCCCC 
    // curveTo (x1 y1 x2 y2 x y) Draw a cubic Bézier curve from the current point to the point (x,y)using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve.
    else if (item[0] == "C" || item[0] == "c") {
        console.log(item[0]);
        // console.log(item[1], item[2], item[3], item[4])

        let node = s.circle(item[5], item[6], 4).attr({ stroke: "red" });
        node.attr({ id: "c-" + indexReal + "-" + pathId });
        node.drag(moveCNode, start, stop);
        node.appendTo(svgGroup);

        let line = s
        .line(item[5], item[6], item[3], item[4])
        .attr({ stroke: "cyan" });
        line.attr({ id: "c1" + indexReal + "-line" + "-" + pathId });
        line.appendTo(svgGroup);

        let circle = s.circle(item[3], item[4], 4).attr({ stroke: "cyan" });
        circle.attr({ id: "c1" + indexReal + "-" + pathId });
        circle.drag(moveC, start, stop);
        circle.appendTo(svgGroup);

        let lastX = getLastX(indexReal, pathAbsolute);
        let lastY = getLastY(indexReal, pathAbsolute);

        // console.log('Coords before: ', lastX, lastY);

        let line2 = s
        .line(lastX, lastY, item[1], item[2])
        .attr({ stroke: "cyan" });
        line2.attr({ id: "c2" + indexReal + "-line" + "-" + pathId });
        line2.appendTo(svgGroup);

        let circle2 = s.circle(item[1], item[2], 4).attr({ stroke: "cyan" });
        circle2.attr({ id: "c2" + indexReal + "-" + pathId });
        circle2.drag(moveC, start, stop);
        circle2.appendTo(svgGroup);
    }


    // HHHHHHHHHHHHHHHHHHHHH
    // horizontal line (x) Draw a horizontal line from the current point to x.
    else if (item[0] == "H" || item[0] == "h") {
        console.log(item[0]);

        let lastY = getLastY(index, pathAbsolute);
        let icon = s
        .circle(item[1], lastY, 3)
        .attr({ fill: colors["orange"] });
        icon.attr({ id: "h-" + index + "-" + pathId });
        icon.appendTo(svgGroup);
        // icon.drag(moveH, start, stop);
    }


    // VVVVVVVVVVVVVVVVVVVVV
    // vertical line (y) Draw a horizontal line from the current point to y.
    else if (item[0] == "V" || item[0] == "v") {
        console.log(item[0]);

        let lastX = getLastX(index, pathAbsolute);

        let icon = s.circle(lastX, item[1], 3)
        .attr({ fill: colors["pink"] });
        icon.attr({ id: "v-" + index + "-" + pathId });
        icon.appendTo(svgGroup);
        // icon.drag(moveV, start, stop);
    }


    // CCCCCCCCCCCCCCCCCCCCC
    // lineTo (x, y)
    else if (item[0] == "L" || item[0] == "l") {
        console.log(item[0]);

        let icon = s.circle(item[1], item[2], 5)
        .attr({ fill: colors["blue"] });
        icon.attr({ id: "l-" + index + "-" + pathId });
        icon.appendTo(svgGroup);
        icon.drag(moveL, start, stop);
    }


    // AAAAAAAAAAAAAAAAAAAAAA
    // elliptical arc (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
    else if (item[0] == "A" || item[0] == "a") {
        console.log(item[0]);

        let icon = s
        .circle(item[item.length - 2], item[item.length - 1], 5)
        .attr({ fill: "#60F80600" }); // lime
        icon.attr({ id: "a-" + index + "-" + pathId });
        icon.appendTo(svgGroup);
        icon.drag(moveA, start, stop);
    }


    // TTTTTTTTTTTTTTTTTTTTTT
    // Smooth curve (x y) Draw a quadratic Bézier curve from the current point to (x,y). The control point is assumed to be the reflection of the control point on the previous command relative to the current point.
    else if (item[0] == "T" || item[0] == "t") {
        console.log(item[0]);

        let icon = s.circle(item[1], item[2], 7)
        .attr({ fill: "#60F80600" });
        icon.attr({ id: "t-" + index + "-" + pathId });
        icon.appendTo(svgGroup);
    }


    // ZZZZZZZZZZZZZZZZZZZZZZZ
    // Closes the path. A line is drawn from the last point to the first point drawn.
    else if (item[0] == "Z" || item[0] == "z") {
        console.log(item[0]);
    }

    }


    // GLOBAL UTILS
    function getCoordBefore(index) {
    let indexBefore = index - 1;
    return Snap.path.getPointAtLength(pathAbsolute[indexBefore], 0);
    }

    function getLastX(index, pathAbsolute) {
    let i = -1;
    let nodeBefore = pathAbsolute[index + i];

    if(typeof(nodeBefore) == 'undefined') {
        return;
    }

    while (nodeBefore[0] == "V") {
        i--;
        nodeBefore = pathAbsolute[index + i];
    }

    if (
        nodeBefore[0] == "M" ||
        nodeBefore[0] == "L" ||
        nodeBefore[0] == "H" ||
        nodeBefore[0] == "T"
    ) {
        let returnValue = nodeBefore[1];
        return returnValue;
    } else {
        let returnValue = nodeBefore[nodeBefore.length - 2];
        return returnValue;
    }
    }

    function getLastY(index, pathAbsolute) {
    // // get last not V index
    // let i = -1;
    // let lastIndex = index + i;
    // while (pathAbsolute[lastIndex][0] == "V") {
    //   i--;
    //   lastIndex = index + i;
    // }

    let nodeBefore = pathAbsolute[index - 1];

    if(typeof(nodeBefore) == 'undefined') {
        return;
    }

    if (
        nodeBefore[0] == "M" ||
        nodeBefore[0] == "L" ||
        nodeBefore[0] == "H" ||
        nodeBefore[0] == "T"
    ) {
        let returnValue = nodeBefore[2];
        return returnValue;
    } else {
        let returnValue = nodeBefore[nodeBefore.length - 1];
        return returnValue;
    }
    }

    function getNextX() {}

    function getNextY() {}

    function updatePaths(pathAbsolute, pathId) {
    pathAbsolute = Snap.path.toRelative(pathAbsolute);
    let newString = "";
    pathAbsolute.forEach((item, index) => {
        let indexBefore = index - 1;
        item.forEach((el, index) => {
        newString += el;
        if (index > 0 && typeof item[index + 1] != "undefined") {
            newString += ",";
        }
        });
    });
    document.getElementById(pathId).setAttribute("d", newString);
    document.getElementById(pathId+'-wire').setAttribute("d", newString);

    // // freeze (top) pt2
    // newString = newString.substring(0, newString.indexOf('86.94')+5);
    // thisReal.mask7.head.top = newString;

    // // freeze (top) pt2
    // newString = newString.substring(0, newString.indexOf('47v0.')+5);
    // thisReal.mask3.head.top = newString;

    // freeze (top) pt2
    // newString = newString.substring(0, newString.indexOf('.1v0.')+5);
    // thisReal.mask9.head.top = newString;

    // freeze (eyes) pt2
    // thisReal.mask7.eyes = '<path id="mask-eyes" class="svg-path" xmlns="http://www.w3.org/2000/svg" d="'+newString+'"  transform="translate(-154 -245)" style="fill-rule:evenodd"/>';
    }


    function getById(id) {
    return document.getElementById(id);
    }


    // Draw path wireframes, node icons, helper lines, attach movement
    for (var i = 0; i < svgPaths.length; i++) {
    let newString = "";
    let pathString = svgPaths[i].getAttribute("d");
    let pathId = svgPaths[i].getAttribute("id");
    // let pathArray = Snap.parsePathString(pathString);
    let pathAbsolute = Snap.path.toAbsolute(pathString);
    // console.log(pathId, pathAbsolute);

    pathAbsolute.forEach((item, index) => {

        let indexReal = index;
        let indexBefore = index - 1;

        // path wireframe (construct path literal from its nodes coords)
        item.forEach((el, index) => {
        newString += el;
        if (index > 0 && typeof item[index + 1] != "undefined") {
            newString += ",";
        }
        });

        if (index+1 == pathAbsolute.length) {
        console.log("DRAWING WIREFRAME")
        // let pathWire = '<path id="'+pathId+'-wire" stroke="red" stroke-width="1" fill="none" d="'+newString+'"></path>';
        
        // @todo
        let pathWire = '<path id="'+pathId+'-wire" stroke="red" stroke-width="0.1" fill="none" d="'+newString+'"></path>';
        
        // console.log(pathWire);
        svgGroupMarkup.innerHTML += pathWire;
        }

        // draw helper icons and lines, and attach dragging listeners
        drawHelpers(item, index, indexReal, pathId, pathAbsolute);

    });

    }

    // let pathString = document.getElementById("path-1").getAttribute("d");
    // let pathArray = Snap.parsePathString(pathString);
    // // console.log(pathArray);

    // let pathAbsolute = Snap.path.toAbsolute(pathString);
    // console.log(pathAbsolute); // VEIKIA
    // // pathAbsolute = pathArray;

    // let newString = "";


    // let sRep = Snap(303.04, 303.04);
    // sRep.attr({id: 'svg-anywhere' });
    // sRep.appendTo(getById('svg-mask'));
}