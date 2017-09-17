;
(function ($, win, doc, undefined) {

    var ZToolTip = function (self, opts) {
        this.$ele = self;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);

    }

    ZToolTip.prototype = {
        toolTip: function () {
            var self = this;
            var $ele = self.$ele;
            var opts = self.options;

            var titleText = $ele.attr("data-title")

            var $tipEle = $("<span></span>")
            $tipEle.text(titleText);
            $('body').append($tipEle)

            return this;
        }
    }

    $
        .fn
        .extend({
            ztooTip: function () {
                var zTip = new ZToolTip(this);
                return zTip.toolTip();
            }
        })

})(jQuery, window, document)