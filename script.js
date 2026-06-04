////////////////////////////////  scopr chain ///////////////////////////////

function a() {
    // console.log(b);
    var b = 10;

    c();
    function c() {
        console.log(b);
        d();
        function d() {
            console.log (b);
        }
    }
}


a(); 