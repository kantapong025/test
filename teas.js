function loaddata(complete, error) {
    console.log("Loading data");
    const a = Math.random() >= 0.5 ? complete  : error;
    console.log(a);
}
    console.log("a");
let success = function() {
    console.log("success");
};

let failure = function() {
    console.log("failure");
}

loaddata(success, failure);

POPO@
POPPO3.0