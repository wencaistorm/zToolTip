;
(function ($) {
    var pluginName = "formHint",
    defaults = {}

    function FormHint (ele, options) {
        var self = this;
        self.ele = $(ele);
        self.ele.attr("data-msg");
        self.settings = $.extend(defaults, { message: self.ele.attr("data-msg") }, options);
        self.init();
    }
    FormHint.prototype = {

        //提示信息定位，传入参数（提示对象，提示信息内容）
        init: function (configObj) {
            var self = this;
            self.show();
            self.eventsHandler();
            self.computePosition();
        },

        computePosition: function () {
            var self = this;

            var objOffset = self.ele.offset();
            var objWidth  = self.ele.outerWidth();
            var objHeight = self.ele.outerHeight();

            var tipWidth  = self.tip.outerWidth();
            var tipHeight = self.tip.outerHeight();

            var hintTop, hintLeft;

            // 计算位置
            switch (self.settings.arrow) {
                case "top":
                    hintLeft = objOffset.left + (objWidth - tipWidth) / 2;
                    hintTop  = objOffset.top  - tipHeight - 15;
                    break;
                case "left":
                    hintLeft = objOffset.left - tipWidth - 15;
                    hintTop  = objOffset.top  + (objHeight - tipHeight) / 2;
                    break;
                case "right":
                    hintLeft = objOffset.left + objWidth + 15;
                    hintTop  = objOffset.top  + (objHeight - tipHeight) / 2;
                    break;
                case "bottom":
                    hintLeft = objOffset.left + (objWidth - tipWidth) / 2;
                    hintTop  = objOffset.top  + objHeight + 15;
                    break;
                default:
                    break;
            }

            self.tip.offset({ top: hintTop, left: hintLeft });
        },

        _createTip: function () {
            var self = this;
            var className = "arrow-" + this.settings.arrow;
            console.log(this.settings.arrow);
            console.log(className);

            //表单验证提示html
            var $tip = $("<div class='form-hint'><div class='form-hint-text'></div><div class='form-hint-arrow'></div></div>");
            var $text = $tip.find(".form-hint-text");
            var $arrow = $tip.find(".form-hint-arrow");
            $arrow.addClass(className);
            $text.text(self.settings.message);
            
            self.tip = $tip;
            self.tip.css('display', 'none');
        },

        show: function () {
            var self = this;
            self._createTip();
            $("body").append(self.tip);
        },
        
        eventsHandler: function () {
            var self = this;
            if (self.ele[0].tagName === "INPUT") {
                var event = "focus", unevent = "blur";
            } else {
                var event = "mouseenter", unevent = "mouseleave";
            }

            self.ele.on(event, function () {
                // self.computePosition();
                self.tip.fadeIn('slow');
            });
            self.ele.on(unevent, function () {
                self.tip['fadeOut']('slow');
            });
        }

    }

    $.fn.formHint = function (options) {
        this.each(function () {
            new FormHint(this, options);
        })

        return this;
    }
})(jQuery);