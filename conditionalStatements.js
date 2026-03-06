function launchBrowser(browserName) {
if(browserName === "chrome")
{
    console.log("Success: Launching Chrome browser.");
}
else{
       console.log("Notice: Launching " + browserName + " browser.");
}
}
launchBrowser("chrome");
launchBrowser("safari");
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Executing Smoke Tests...");
            break;
        case "sanity":
            console.log("Executing Sanity Tests...");
            break;
        case "regression":
            console.log("Executing Regression Tests...");
            break;
        default:
            console.log("Defaulting: No specific test type provided. Executing Smoke Tests...");
            break;
    }
}
runTests("sanity");
runTests("regression");
runTests("unknown");