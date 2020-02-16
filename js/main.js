
var object = $('#obj');
var select = $('.selectAnimation');
var button = $('#animate');
var options = $('#anims option');
var valueChange = $('.changeOpt');

const ANIM_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

currentAnimationActive = null;

// functions >> events
valueChange.on('click', function (e) {
    e.preventDefault();

    var data = $(this).attr("data-value");

    var i = options.index(options.filter(":selected"));
    if (i >= 0 && i < options.length - 1) {
        options.eq((data === "next" ? i + 1 : i - 1)).prop("selected", true);
        select.trigger("change");
    }
});

select.on('change', function () {
    var value = $(this).val();

    object.addClass(value).one(ANIM_END, function () {
        setTimeout(function () {
            object.removeClass(value);
        }, 500);

    });

});

button.click(function (e) {
    e.preventDefault();
    listValue = select.val();

    object.addClass(listValue).one(ANIM_END, function () {
        setTimeout(function () {
            object.removeClass(listValue);
        }, 500);
    });

});


var classNames = [];
function extract() {
    $("option").each(function() {
       classNames.push($(this).val()); 
    });
}

extract();

classNames.sort();

var div = $('.names');
for (var i=0; i < classNames.length; i++) {
    div.append("<p>- " + classNames[i] + "</p>");
}


