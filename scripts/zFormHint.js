;
(function ($) {
    $
        .fn
        .extend({
            //提示信息定位，传入参数（提示对象，提示信息内容）
            formHint: function (configObj) {
                var $ele = $(this);
                var cfg = $.extend( {
                    arrow: "top",
                    message: $ele.attr("data-msg")
                }, configObj, { message: $ele.attr("data-msg") } );

                //表单验证提示html
                var $tip = $("\
                <div class='form-hint'>\
                    <div class='form-hint-text'>" + cfg.message + "</div>\
                <div class='form-hint-arrow'></div>\
                </div>");
                var $arrow = $tip.find(".form-hint-arrow");
                
                $("body").append($tip);
                var objOffset = $ele.offset();
                var objWidth = $ele.outerWidth();
                var tipWidth = $tip.outerWidth();
                var objHeight = $ele.outerHeight();
                var tipHeight = $tip.outerHeight();
                var hintTop, hintLeft;
                
                // 计算位置
                switch (cfg.arrow) {
                    case "top":
                        $arrow.addClass("arrow-top");
                        hintLeft = objOffset.left + (objWidth - tipWidth) / 2;
                        hintTop = objOffset.top - tipHeight - 15;
                        break;
                    case "left":
                        $arrow.addClass("arrow-left");
                        hintLeft = objOffset.left - tipWidth - 15;
                        hintTop = objOffset.top + (objHeight - tipHeight) / 2;
                        break;
                    case "right":
                        $arrow.addClass("arrow-right");
                        hintLeft = objOffset.left + objWidth + 15;
                        hintTop = objOffset.top + (objHeight - tipHeight) / 2;
                        break;
                    case "bottom":
                        $arrow.addClass("arrow-bottom");
                        hintLeft = objOffset.left + (objWidth - tipWidth) / 2;
                        hintTop = objOffset.top + objHeight + 15;
                        break;
                    default:
                        break;
                }

                $tip.offset({top: hintTop, left: hintLeft});

                $(".form-hint-text")

                //点击后提示隐藏
                $ele.focus(function () {
                    $tip.fadeIn('slow');
                });
                $ele.blur(function () {
                    // $tip.fadeOut('slow');
                });
            }
        })

})(jQuery);