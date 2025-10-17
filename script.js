const projects = [
    { 
        name: "Discord 機器人", 
        desc: "一個能播放音樂、管理伺服器與發送公告的多功能 Bot", 
        imgs: ["images/bot1.png", "images/bot2.png", "images/bot3.png"]
    },
    { 
        name: "Discord 爬蟲機器人", 
        desc: "單純爬蟲與自動化功能",
        imgs: ["images/bot1-1.png", "images/bot1-2.png", "images/bot1-3.png"]
    }
];

const projectList = document.getElementById("project-list");
const popup = document.getElementById("popup");
const popupImgs = popup.querySelectorAll(".popup-img");
const closeBtn = popup.querySelector(".close");

// 動態生成作品卡片
projects.forEach((proj, index) => {
    const div = document.createElement("div");
    div.className = "profile-card project-card";
    div.innerHTML = `
        <div class="profile-info">
            <h2>${proj.name}</h2>
            <p class="description">${proj.desc}</p>
        </div>
        <div class="right-side">
            <a href="#" class="yt-button" data-index="${index}">查看詳情</a>
        </div>
    `;
    projectList.appendChild(div);
});

// 點擊查看詳情 → 顯示 popup
document.querySelectorAll(".yt-button").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        const index = e.target.getAttribute("data-index");
        const proj = projects[index];

        if (proj.imgs) {
            popupImgs.forEach((img, i) => {
                img.style.display = proj.imgs[i] ? "block" : "none";
                if (proj.imgs[i]) img.src = proj.imgs[i];
            });
            popup.style.display = "flex";
        }
    });
});

// 關閉彈窗
closeBtn.onclick = () => popup.style.display = "none";
window.onclick = e => { if (e.target === popup) popup.style.display = "none"; };