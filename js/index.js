$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).css({
            backgroundColor: "rgb(160, 160, 160, 0.568)"
        });
        $( ".change>div" ).css({
            transform: "translateX(0px)"
        });
    } else {
        $( "body" ).addClass( "dark" );
        $( ".change" ).css({
            backgroundColor: "#2196F3"
        });
        $( ".change>span" ).css({
            color: "black"
        });
        $( ".change>div" ).css({
            transform: "translateX(40px)"
        });
    }
});
