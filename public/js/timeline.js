const timelines = [
  {
    learn_date: "28.11.2022",
    learn_body: `<h3>New navigation with shrink and scroll added.</h3>
        <p>
          New navigation with shrink and scroll css page has added. Tutorials page updated.
        </p>
        <small>
          <b>navigation with shrink and scroll</b>
        </small>`,
    learn_link: `<a href="./css-designs/Advance _Navs/shrink_nav_scroll.html"><i class="fa fa-link"></i></a>`,
  },
  {
    learn_date: "27.11.2022",
    learn_body: `<h3>New offcanvas design added to css design page.</h3>
    <p>
      New homepage has been added. New learing timeline
      updates with page available. Tutorials page updated.
    </p>
    <small>
      <b>Offcanvas Navigation design</b>
    </small>`,
    learn_link: `<a href="./css-designs/navigation/trianglenav.html"><i class="fa fa-link"></i></a>`,
  },
  {
    learn_date: "26.11.2022",
    learn_body: `<h3> New Css design page v1.0</h3>
    <p>                  
      A website project timeline should list the most important milestones
      that represent the major stages of creating the website.
    </p>
    <small>
      <b>css-deisgns v1</b>
    </small>
    <a href="./css-designv1.html"><i class="fa fa-link"></i></a>
    <h3>Website v1.0 </h3>
    <p>
    Web pages have been changed for controlling with new page's look-and-feel.
  </p>
  <small>
    <b>new Learnign portal, learing timeline history, css design section</b>
  </small>`,
    learn_link: `<a href="./"><i class="fa fa-link"></i></a>`,
  },
  {
    learn_date: "25.11.2022",
    learn_body: ` <h3>New Css Designs added</h3>
    <p>
      The CSS snippet collection contains utilities and
      interactive examples for CSS3. It includes modern
      techniques for creating commonly-used layouts, styling and
      animating elements, as well as snippets for handling user
      interactions. Animation. Interactivity. Layout.
    </p>
    <small>
      <b>bottomnav, rightsidenav, sidenav-overlay, sidenavopacity, sidenav_push, sidenavfullwidth, topnav,
        trianglenav</b>
    </small>
    <h3>Git CLI Practice</h3>
                  <p>
                    <i>
                      <b>
                        git init, git add ., git commit -m "..", git push, git
                        checkout, git branch, git log, git pull origin master,
                        git clone [url], git merge [branch], git status, etc...
                      </b>
                    </i>
                  </p>`,
    learn_link: `<a href="./css-designs.html"><i class="fa fa-link">css design</i></a>
    <a href="/gitcli"><i class="fa fa-link">git-cli</i></a>`,
  },
  {
    learn_date: "24.11.2022",
    learn_body: `<h3>Git CLI</h3>
    <p>
      GitHub CLI is a command-line tool that brings pull
      requests, issues, GitHub Actions, and other GitHub
      features to your terminal, so you can do all your work in
      one place. GitHub CLI is an open source tool for using
      GitHub from your computer's command line.
      <i>
        <b>
          git init, git add ., git commit -m "..", git push, git
          checkout, git branch, git log, git pull origin master,
          git clone [url], git merge [branch], git status, etc...
        </b>
      </i>
      <h3>CSS Designs</h3>
      <p>
        The CSS snippet collection contains utilities and
        interactive examples for CSS3. It includes modern
        techniques for creating commonly-used layouts, styling and
        animating elements, as well as snippets for handling user
        interactions. Animation. Interactivity. Layout.
      </p>
      <i>
        <b>Tab Headers, Responsive Nav, fullpage tab, hover tab .....</b>
      </i>`,
    learn_link: `<a href="/gitcli"><i class="fa fa-link"></i>git-cli</a>
    <a href="/css-designs"><i class="fa fa-link"></i>css design</a>`,
  }
];

const app = document.getElementById("app");

timelines.forEach((project) => {
  const teach_dates = `${project.learn_date}`;
  const teach_body = `${project.learn_body}`;
  const teach_links = `${project.learn_link}`;

  const timelines = document.createElement("li");
  timelines.classList.add("project");

  timelines.innerHTML = `
            <li class="event py-2" data-date="${teach_dates}">
                     ${teach_body}
                     ${teach_links}
             </li>
  `;
  app.appendChild(timelines);
});
