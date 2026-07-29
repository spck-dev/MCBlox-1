const notice = document.querySelector(".notice");

const topics = [
"Learn Variables • NBT Data • Custom Items • Bosses • Selectors",
"Master Command Blocks • Functions • Datapacks • Redstone",
"Create Minecraft Projects with Advanced Commands"
];

let topicIndex = 0;

setInterval(() => {
    topicIndex = (topicIndex + 1) % topics.length;
    notice.textContent = topics[topicIndex];
}, 3000);

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        alert(
            "MCBlox Section: " +
            this.textContent +
            "\nMore lessons coming soon!"
        );

    });

});

const copyButton = document.querySelector(".copy-btn");
const codeBox = document.querySelector(".code1");

copyButton.addEventListener("click", async () => {

    try{

        await navigator.clipboard.writeText(codeBox.textContent.trim());

        copyButton.textContent = "Copied!";

    }catch(err){

        copyButton.textContent = "Copy Failed";

        console.error(err);

    }

    setTimeout(() => {

        copyButton.textContent = "Copy Command";

    },2000);

});

document.querySelector("footer p").textContent =
`© ${new Date().getFullYear()} MCBlox`;
