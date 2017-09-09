;(function ( $, win, doc, undefined ) {

    var Beautifier = function ( ele, opt ) {

        this.$element = ele,
        this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        }
        this.options = $.extend( {}, this.defaults, opt );

    }

    Beautifier.prototype = {
        beautify: function () {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            })
        }
    }

    $.fn.beau = function (options) {
        var beautifier = new Beautifier(this, options);
        return beautifier.beautify();
    }

})( jQuery, window, document )