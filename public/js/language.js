const languageTexts = {
    languageChoiceDropdown: {
        english: "Choose a language",
        indonesian: "Pilih bahasa",
    },
    signInButton: {
        english: "Sign In",
        indonesian: "Masuk",
    },
    signOutButton: {
        english: "Sign Out",
        indonesian: "Keluar",
    },
    introduction: {
        english:
            "First of all, we thank God Almighty for having given us the will from the beginning to create this project until the we finished it. We also thank all our website visitors who want to see our website; we really appreciate it. We also thank our project's supervisors so that this project can be done well. We created this website from the ground up, such as preparing a task list for group members, creating program codes to create a website, designing websites, looking for resources about unity.",
        indonesian:
            "Pertama-tama kami panjatkan puji syukur kehadirat Tuhan Yang Maha Esa karena telah memberikan kami kehendak dari awal pembuatan proyek ini sampai kami selesai. Kami juga berterima kasih kepada semua pengunjung website kami yang ingin melihat website kami; kami sangat menghargainya. Kami juga berterima kasih kepada pembimbing proyek kami sehingga proyek ini dapat diselesaikan dengan baik. Kami membuat website ini dari awal, seperti menyiapkan daftar tugas untuk anggota grup, membuat kode program untuk membuat situs web, merancang situs web, mencari sumber daya tentang persatuan.",
    },
    synopsis: {
        english:
            "We make an outline project planning for 2 weeks, after we determine the project we will make, the web graphic designer team for 1 week. Then continued by the web developer team and project manager in the process of creating a website and concept map + presentation. We took the website as our project material because we have utilized technology by creating a website that contains the stories of the spirit of the unity of the Unitary State of the Republic of Indonesia, and also the purpose of this website is to make the Indonesian nation stronger to build a prosperous future together under one country, even though different types, foster the spirit of unity, and make people aware of diversity and make it a common strength.",
        indonesian:
            "Kami membuat outline perencanaan proyek selama 2 minggu, setelah kami menentukan proyek yang akan kami buat, tim web graphic designer selama 1 minggu. Kemudian dilanjutkan oleh tim web developer dan project manager dalam proses pembuatan website dan peta konsep + presentasi. Website ini kami ambil sebagai bahan project karena kami telah memanfaatkan teknologi dengan membuat website yang berisi cerita-cerita tentang semangat persatuan NKRI, dan juga tujuan dari website ini adalah untuk mencerdaskan bangsa Indonesia. lebih kuat untuk membangun masa depan yang sejahtera bersama di bawah satu negara, meskipun berbeda jenis, menumbuhkan semangat persatuan, dan membuat orang sadar akan keragaman dan menjadikannya kekuatan bersama.",
    },
    submitYourStoryButton: {
        english: "Submit Your Story",
        indonesian: "Kirim Cerita Anda",
    },
    cardsSectionIntroduction: {
        english: "Stories About National Unity",
        indonesian: "Cerita Tentang Persatuan Bangsa",
    },
};

const elementIds = [
    "signInButton",
    "signOutButton",
    "introduction",
    "synopsis",
    "submit-your-story-button",
    "cards-section-introduction",
];

function setLanguage() {
    const language = getCookie("language");

    if (language === "english") {
        document.getElementById("language-choice-dropdown").textContent =
            languageTexts["languageChoiceDropdown"].english;
    } else {
        document.getElementById("language-choice-dropdown").textContent =
            languageTexts["languageChoiceDropdown"].indonesian;
    }

    for (i = 0; i < elementIds.length; i++) {
        switch (elementIds[i]) {
            case "signInButton":
                document.getElementById("sign-in-button").textContent =
                    languageTexts.signInButton[language];
                break;
            case "signOutButton":
                document.getElementById("sign-out-button").textContent =
                    languageTexts.signOutButton[language];
                break;
            case "introduction":
                document.getElementById("introduction").textContent =
                    languageTexts.introduction[language];
                break;
            case "synopsis":
                document.getElementById("synopsis").textContent =
                    languageTexts.synopsis[language];
                break;
            case "submit-your-story-button":
                document.getElementById(
                    "submit-your-story-button"
                ).textContent = languageTexts.submitYourStoryButton[language];
                break;
            case "cards-section-introduction":
                document.getElementById(
                    "cards-section-introduction"
                ).textContent =
                    languageTexts.cardsSectionIntroduction[language];
                break;
        }
    }
}
