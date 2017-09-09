;(function ( $, win, doc, undefined ) {

    $.fn.extend( {
        "highLight": function ( options ) {
            var opts = $.extend( {}, defaults, options );
            this.each( function () {

                var $this = $(this);

                $this.css( {
                    backgroundColor: opts.background,
                    color: opts.foreground
                } )
            } )
            return this;
        }
    } );

    var defaults = {
        foreground: 'red',
        background: 'yellow'
    }

})( jQuery, window, document )