
function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "https://dub01.online.tableau.com/t/bumiasriraman/views/CrimesinIndia/CrimesinIndia?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
            
            var viz = new tableau.Viz(containerDiv, url, options); 
            // Create a viz object and embed it in the container div.
        }


