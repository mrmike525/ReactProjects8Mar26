const body = document.body;
body.style.backgroundColor = "black";

const renderContent = () => {
    const arrayContent = ["😵‍💫", "*"];
    arrayContent.map((item) => {
        const span = document.createElement('span');
        span.innerText = item;
        span.style.position = 'absolute';
        span.style.left = Math.floor(Math.random() * (window.innerWidth - 60)) + "px";
        span.style.top = Math.floor(Math.random() * (window.innerHeight - 60)) + "px";
        span.style.color = "red"
        span.style.fontSize = "50px"
        body.append(span);
        const setIntervalid = setInterval(() => {
            if (span.style.color === "red") { span.style.color = "blue" } else if (span.style.color === "blue") { span.style.color = "red" }
            else{span.style.color = "green"}
        }, 2500);


    })
};
const setIntervalidRender = setInterval(() => {
    renderContent()
}, 2500)