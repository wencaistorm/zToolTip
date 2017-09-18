;
(function ($) {
    var pluginName = "formHint",
    defaults = {
        arrow: "top",
        message: "xxxxxx"
    }

    function FormHint (ele, options) {
        var self = this;
        self.ele = ele;
        $(self.ele).attr("data-msg")
        self.settings = $.extend(defaults, { message: $(self.ele).attr("data-msg") }, options);
        self.init();
    }
    FormHint.prototype = {

        //提示信息定位，传入参数（提示对象，提示信息内容）
        init: function (configObj) {

            var $ele = $(this);
            this.render();

            //点击后提示隐藏
            $ele.focus(function () {
                $tip.fadeIn('slow');
            });
            $ele.blur(function () {
                // $tip.fadeOut('slow');
            });
        },

        computePosition: function ($ele, $tip, $arrow) {
            var objOffset = $ele.offset();
            var objWidth = $ele.outerWidth();
            var tipWidth = $tip.outerWidth();
            var objHeight = $ele.outerHeight();
            var tipHeight = $tip.outerHeight();
            var hintTop,
                hintLeft;

            // 计算位置
            switch (this.settings.arrow) {
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

            return {top: hintTop, left: hintLeft};
        },

        render: function () {
            var self = this;
            //表单验证提示html
            var $tip = $("<div class='form-hint'><div class='form-hint-text'></div><div class='form-hint-arrow'></div></div>");
            var $text = $tip.find(".form-hint-text");
            var $arrow = $tip.find(".form-hint-arrow");
            
            $text.text(self.settings.message);
            $("body").append($tip);
            var position = self.computePosition($(self.ele), $tip, $arrow);
            $tip.offset(position);
        }

    }

    $.fn.formHint = function (options) {
        this.each(function () {
            new FormHint(this, options);
        })

        return this;
    }
})(jQuery);