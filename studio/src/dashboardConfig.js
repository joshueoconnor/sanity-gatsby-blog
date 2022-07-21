export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d973a48869d40401d615bb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-c9w1fiam",
                  apiId: "1c592022-2a63-49ac-856d-b54f857879a6",
                },
                {
                  buildHookId: "62d973a441b50a0ab7443057",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-naggu855",
                  apiId: "6c7b6d4d-7e2c-456f-9890-df80eaef9b96",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/joshueoconnor/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-naggu855.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
