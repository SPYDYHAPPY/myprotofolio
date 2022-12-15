const tutorials = [
  {
    learn_date: "28.11.2022",
    learn_title: "New navigation with shrink and scroll added.",
    learn_description:
      "New navigation with shrink and scroll css page has added.",
    learn_link: "",
    learn_icon: "fa fa-css3",
  },
  {
    learn_date: "27.11.2022",
    learn_title: "New offcanvas design added to css design page.",
    learn_description:
      "New homepage has been added. New learning timeline updates with page available. Tutorials page updated.",
    learn_link: "fa fa-css3",
    learn_icon: "fa fa-css3",
  },
  {
    learn_date: "26.11.2022",
    learn_title: "Homepage Updated 1.0",
    learn_description:
      "New homepage has been added. New learning timeline updates with page available. Tutorials page updated.",
    learn_link: "",
    learn_icon: "fa fa-clone",
  },
  {
    learn_date: "26.11.2022",
    learn_title: "All bugs Fixed",
    learn_description: "All the bugs have been fixed for new and old page.",
    learn_link: "",
    learn_icon: "fa fa-bug",
  },
  {
    learn_date: "26.11.2022",
    learn_title: "Awesome Timeline History Added",
    learn_description:
      "A website project timeline should list the most important milestones that represent the major stages of creating the website.",
    learn_link: "/history",
    learn_icon: "fa fa-calendar",
  },
  {
    learn_date: "26.11.2022",
    learn_title: "New Css Designs Page Added",
    learn_description:
      "using bootstrap a webpage has designs to its new look and feel.",
    learn_link: "",
    learn_icon: "fa fa-rocket",
  },
  {
    learn_date: "25.11.2022",
    learn_title: "Git Cli practice",
    learn_description: `GitHub CLI is a command-line tool that brings pull
    requests, issues, GitHub Actions, and other GitHub
    features to your terminal, so you can do all your work
    in one place. <br />
    <i>
        <b>
            git init, git add ., git commit -m "..", git push,
            git checkout, git branch, git log, git pull origin
            master, git clone [url], git merge [branch], git
            status, etc...
        </b>
    </i>`,
    learn_link: "/gitcli",
    learn_icon: "fa fa-rocket",
  },
  {
    learn_date: "25.11.2022",
    learn_title: "New Css Designs Added",
    learn_description: `The CSS snippet collection contains utilities and
    interactive examples for CSS3. It includes modern
    techniques for creating commonly-used layouts, styling
    and animating elements, as well as snippets for
    handling user interactions. Animation. Interactivity.
    Layout.<small>
    <b>bottomnav, rightsidenav, sidenav-overlay,
        sidenavopacity, sidenav_push, sidenavfullwidth,
        topnav, trianglenav</b>
    </small>`,
    learn_link: "",
    learn_icon: "fa fa-css3",
  },
  {
    learn_date: "24.11.2022",
    learn_title: "Git Cli",
    learn_description: `GitHub CLI is a command-line tool that brings pull
    requests, issues, GitHub Actions, and other GitHub
    features to your terminal, so you can do all your work
    in one place. GitHub CLI is an open source tool for
    using GitHub from your computer's command line.
    <i>
        <b>
            git init, git add ., git commit -m "..", git push,
            git checkout, git branch, git log, git pull origin
            master, git clone [url], git merge [branch], git
            status, etc...
        </b>
    </i>`,
    learn_link: "/gitcli",
    learn_icon: "fa fa-git",
  },
  {
    learn_date: "24.11.2022",
    learn_title: "Css Designs",
    learn_description: `The CSS snippet collection contains utilities and
    interactive examples for CSS3. It includes modern
    techniques for creating commonly-used layouts, styling
    and animating elements, as well as snippets for
    handling user interactions. Animation. Interactivity.
    Layout.
    </p>
    <small>
    <b>Tab Headers, Responsive Nav, fullpage tab, hover
        tab , etc....</b>
    </small> `,
    learn_link: "",
    learn_icon: "fa fa-css3",
  },
];

const app = document.getElementById("app");

tutorials.forEach((project) => {
  const teach_dates = `${project.learn_date}`;
  const teach_title = `${project.learn_title}`;
  const teach_icon = `${project.learn_icon}`;
  const teach_desc = `${project.learn_description}`;
  const teach_link = `${project.learn_link}`;

  const projectEl = document.createElement("div");
  projectEl.classList.add("project");
  // projectEl.href = project.learn_link;
  // projectEl.target = "_blank";

  projectEl.innerHTML = `
  
  <div class="single-timeline-area">
              <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style="
                    visibility: visible;
                    animation-delay: 0.1s;
                    animation-name: fadeInLeft;
                  ">
                                <p>${teach_dates}</p>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-12">
                                    <div class="single-timeline-content d-flex wow fadeInLeft shadow"
                                        data-wow-delay="0.3s" style="
                        visibility: visible;
                        animation-delay: 0.3s;
                        animation-name: fadeInLeft;
                      ">
                                        <div class="timeline-icon">
                                            <i class="${teach_icon}" aria-hidden="true"></i>
                                        </div>
                                        <div class="timeline-text">
                                            <h6>${teach_title}</h6>
                                            <p>
                                                ${teach_desc}
                                                <a href="${teach_link}"><i
                                                        class="fa fa-link"></i></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            </div>
    `;

  app.appendChild(projectEl);
});
