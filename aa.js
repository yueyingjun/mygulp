VAR MYGULP=REQUIRE("./MAIN.JS");
VAR UP=REQUIRE("./UP.JS");
MYGULP.SRC("INDEX.JS").PIPE(UP()).PIPE(MYGULP.DEST("AA.JS"));









