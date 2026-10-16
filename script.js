const imageBase = window.location.pathname.includes("/en/")
    ? "../images/"
    : "./images/";

const projects = {
    "habit-tracker": {
        title: "Habit Tracker",
        images: [
            {
                src: imageBase + "habit-tracker/cadastro.png",
                alt: "Tela de cadastro de Usuario"
            },
            {
                src: imageBase + "habit-tracker/deshboard.png",
                alt: "tela de deshboard de hábitos"
            },
            {
                src: imageBase + "habit-tracker/habitos.png",
                alt: "Visualização dos hábitos cadastrados"
            }
        ]
    },

    "portifolio":{
        title: "Portifólio",
        images: [
            {
                src: imageBase + "portifolio/apresentacao.png",
                alt: "tela de apresentaçao"
            },
            {
                src: imageBase + "portifolio/projetos.png",
                alt: "tela de projetos"
            },
            {
                src: imageBase + "portifolio/sobre.png",
                alt: "tela de sobre e habilidades"
            }
        ]
    }
};

const previewDialog = document.querySelector("#project-preview");
const previewTitle = document.querySelector("#preview-title");
const previewGallery = document.querySelector("#preview-gallery");
const closePreviewButton = document.querySelector("#close-preview");

const previewButtons = document.querySelectorAll(".preview-trigger");

function openProjectPreview(projectId) {
    const project = projects[projectId];

    if (!project) {
        return;
    }

    previewTitle.textContent = project.title;
    previewGallery.replaceChildren();

    project.images.forEach((image) => {
        const img = document.createElement("img");

        img.src = image.src;
        img.alt = image.alt;
        img.className = "w-full h-auto rounded-lg border";

        previewGallery.appendChild(img);
    });

    previewDialog.showModal();
}

previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
        openProjectPreview(button.dataset.project);
    });
});

closePreviewButton.addEventListener("click", () => {
    previewDialog.close();
});

previewDialog.addEventListener("click", (event) => {
    if (event.target === previewDialog) {
        previewDialog.close();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && previewDialog.open) {
        previewDialog.close();
    }
});
