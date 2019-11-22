        document.onkeydown = function(event) {
            var target, code, tag;
            if (!event) {
                event = window.event; 
                target = event.srcElement;
                code = event.keyCode;
                if (code == 13) {
                    tag = target.tagName;
                    if (tag == "TEXTAREA") { return true; }
                    else { return false; }
                }
            }
            else {
                target = event.target; 
                code = event.keyCode;
                if (code == 13) {
                    tag = target.tagName;
                    if (tag == "INPUT") { return false; }
                    else { return true; }
                }
            }
        };

document.oncontextmenu = function () {
return false;
};
document.oncopy = function () {
return false;
};

document.addEventListener('keydown', function (e) {
try {
e = e || event || window.event;
var keycode = e.keyCode || e.which || e.charCode;
var ctrlKey = e.ctrlKey || e.metaKey;
if (keycode == 123) {//F12
e.preventDefault();
window.event.returnValue = false;
} else if (keycode == 8) {
var act = document.activeElement.tagName.toLowerCase();
if (act.indexOf("body") != -1 || act.indexOf("html") != -1) {
window.history.back();
return false;
}
return true;
} else if (ctrlKey && keycode == 83) {//ctrl+S
e.preventDefault();
window.event.returnValue = false;
} else if (ctrlKey && keycode == 87) {//ctrl+W
e.preventDefault();
window.event.returnValue = false;
} else if (ctrlKey && keycode == 107) {//ctrl++
e.preventDefault();
window.event.returnValue = false;
} else if (ctrlKey && keycode == 109) {//ctrl+-
e.preventDefault();
window.event.returnValue = false;
} else if (keycode == 122) {//F11
$('#switchFullScreenCloseBtn').trigger("click");
}

} catch (e) {
console.error(e);
}
});
