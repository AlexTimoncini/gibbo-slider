document.addEventListener("DOMContentLoaded", (event) => {
    const lines = [],
        yes = new LeaderLine(
            document.querySelector('#slide_5 .title'),
            document.querySelector('#slide_5 .connection-dot'),
            {
                color: "#fffffd",
                startPlug: "behind",
                endPlug: "arrow1",
                dash: {animation: true},
                opacity: "0.5",
                size: 15,
                hide: true,
                animOptions: {duration: 1000, timing: [0.58, 0, 0.42, 1]}
            }
        ),
        ig = new LeaderLine(
            document.querySelector('#slide_5 .connection-dot'),
            document.querySelector('#slide_5 .instagram'),
            {
                color: "#fffffd",
                startPlug: "behind",
                endPlug: "arrow1",
                dash: {animation: true},
                opacity: "0.5",
                size: 15,
                hide: true,
                animOptions: {duration: 1000, timing: [0.58, 0, 0.42, 1]}
            }
        )
    lines.push(new LeaderLine(
        document.querySelector('#slide_1 .connection-dot'),
        document.querySelector('#slide_2 .connection-dot'),
        {
            color: "#fffffd",
            startPlug: "behind",
            endPlug: "behind",
            dash: {animation: true},
            opacity: "0.5",
            size: 15,
            hide: true,
            animOptions: {duration: 1000, timing: [0.58, 0, 0.42, 1]}
        }
    ));
    lines.push(new LeaderLine(
        document.querySelector('#slide_2 .connection-dot'),
        document.querySelector('#slide_3 .connection-dot'),
        {
            color: "#fffffd",
            startPlug: "behind",
            endPlug: "behind",
            dash: {animation: true},
            opacity: "0.5",
            size: 15,
            hide: true,
            animOptions: {duration: 1000, timing: [0.58, 0, 0.42, 1]}
        }
    ));
    lines.push(new LeaderLine(
        document.querySelector('#slide_3 .connection-dot'),
        document.querySelector('#slide_4 .connection-dot'),
        {
            color: "#fffffd",
            startPlug: "behind",
            endPlug: "behind",
            dash: {animation: true},
            opacity: "0.5",
            size: 15,
            hide: true,
            animOptions: {duration: 1000, timing: [0.58, 0, 0.42, 1]}
        }
    ));
    lines.push(new LeaderLine(
        document.querySelector('#slide_4 .connection-dot'),
        document.querySelector('#slide_5 .connection-dot'),
        {
            color: "#fffffd",
            startPlug: "behind",
            endPlug: "arrow1",
            dash: {animation: true},
            opacity: "0.5",
            size: 15,
            hide: true,
            animOptions: {duration: 1000, timing: [0.58, 0, 0.42, 1]}
        }
    ));

    let index = 1,
        tIndex = 0
    document.getElementById("prev").addEventListener("click", prev)
    document.getElementById("next").addEventListener("click", next)

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key === "ArrowUp") prev()
        else if(key === "ArrowDown") next()
        else if(key === "ArrowRight") nextTravel()
        else if(key === "ArrowLeft") prevTraavel()
        else if(key === " ") {
            document.getElementById("loader").style.opacity = "0"
            setTimeout(()=>{
                document.getElementById("loader").remove()
            }, 330)
        }

    });
    function next() {
        if(index < 5) {
            index++
            lines[index-2].show("draw")
            document.getElementById("slide_"+index).scrollIntoView({behavior: "smooth"})
        }
        if(index === 3) {
            setTimeout(()=>{
                document.getElementById("pilot").classList.add("hide")
                document.querySelector('video').play()
            }, 1500)
        }
        if(index === 4) {
            setTimeout(()=>{
                document.getElementById("pilot").classList.remove("hide")
                document.querySelector('video').pause()
                document.querySelector('video').currentTime = 0
            }, 1500)
        }
        if(index === 5) {
            setTimeout(()=>{
                yes.show("draw")
            }, 500)
            setTimeout(()=>{
                ig.show("draw")
            }, 1000)
        }
    }
    function prev() {
        if(index > 1) {
            lines[index-2].hide("draw")
            index--
            document.getElementById("slide_"+index).scrollIntoView({behavior: "smooth"})
        }
        if(index === 2) {
            setTimeout(()=>{
                document.getElementById("pilot").classList.remove("hide")
                document.querySelector('video').pause()
                document.querySelector('video').currentTime = 0
            }, 1500)
        }
        if(index === 3) {
            setTimeout(()=>{
                document.getElementById("pilot").classList.add("hide")
                document.querySelector('video').play()
            }, 1500)
        }
        if(index === 4) {
            ig.hide("draw")
            yes.hide("draw")
        }
    }
    function nextTravel() {
        if(tIndex < 3) {
            tIndex++
        }
        document.getElementById("travelImage").src = "./images/t"+tIndex+".jpeg"
    }
    function prevTraavel() {
        if(tIndex > 0) {
            tIndex--
        }
        document.getElementById("travelImage").src = "./images/t"+tIndex+".jpeg"
    }

});