module.exports = {
    locals: {
        headerLinks: [
            { title: "about me", path: "", href: "#about" },
            { title: "gallery", path: "", href: "#gallery" },
            { title: "pricing", path: "", href: "#pricing" },
            { title: "testimonials", path: "", href: "./#reviews" },
            { title: "blog", path: "", href: "./#posts" },
        ],
        views: {
            "Home": {
                articles: [
                    {
                        image: "../../../../img/theme3/blog1.jpg",
                        title: "Wedding Videography Packages",
                        body: `You are planning for one of the most memorable days of your life. You have everything in place in your mind regarding how your wedding day will flow. As you use your imagination to configure your wedding day, you are thinking about what wedding songs you will walk down the aisle to while...`,
                    },
                    {
                        image: "../../../../img/theme3/blog2.jpg",
                        title: "Wedding Videography: Romeo and Tami’s Wedding Reel",
                        body: `You are planning for one of the most memorable days of your life. You have everything in place in your mind regarding how your wedding day will flow...`,
                    },
                ],
                reviews: [
                    {
                        rating: 5.0,
                        author: "Josh C",
                        body: `Working with Daryl for the last year of wedding planning was great from beginning to end. He truly made my wedding very personal making sure he captured every special moment.`,
                    },
                    {
                        rating: 5.0,
                        author: "Josh C",
                        body: `My fiancé and I had an absolutely wonderful time having our engagement photos taken with Mr. Hawk. He was kind, generous with his time and knew exactly how to pose us to get the most flattering shots. We were able to examine many of the shots after he took them during the session and given the option to retake any particular shot if we didn’t like positioning. Photos came back in a timely manner and are absolutely beautiful. The editing was done so well the images almost floated off the page. I would recommend Hawk Photography to anyone looking for a professional, knowledgeable and generous`,
                    },
                ],
            },
            "Gallery": {
                items: [
                    "../../../../img/theme3/gallery1.jpg",
                    "../../../../img/theme3/gallery2.jpg",
                    "../../../../img/theme3/gallery3.jpg",
                ]
            },
            "About": {
                messages: {
                    title: `About`,
                    description: `<p>I remember the exact moment I decided to start shooting wedding photos. I photographed a friend’s wedding as a favor and discovered I loved the challenge. I also loved the interaction with the bridal party and their guests and being a part of the day’s proceedings. In a nutshell, the whole experience enthralled and excited me. By the day’s end, I knew that the wedding photos were my calling.</p>
            
                    <p>While that friend’s wedding was the catalyst for my professional aspirations, I wasn’t exactly a “kid with a camera and a dream” when I first started. My educational background is in graphic design. I studied graphic design at the University of Nevada, Las Vegas and was taking photography classes in College of Southern Nevada.</p>`,
                },
                infoList: [
                    {
                        title: "Catering options:",
                        list: ["Additional shooters", "Travel", "Engagement shoot"],
                    },
                    {
                        title: "Services:",
                        list: ["Digital files", "Albums", "Slide shows", "Prints"],
                    },
                ],
            }
        },
        components: {
            "social": {
                items: [
                    {
                        name: "fb",
                        link: "#",
                        icon: `
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 310 310"
                                    style="enable-background: new 0 0 310 310"
                                    xml:space="preserve"
                                  >
                                    <g>
                                      <path
                                        id="XMLID_835_"
                                        d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                            c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                            V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                            C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                            c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                                      />
                                    </g>
                                  </svg>
                      `,
                    },
                    {
                        name: "tw",
                        link: "#",
                        icon: `
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                  c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                  c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                  c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                  c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                  c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                  C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                  C480.224,136.96,497.728,118.496,512,97.248z"
                            />
                          </g>
                        </g>
                      </svg>`,
                    },
                    {
                        name: "insta",
                        link: "#",
                        icon: `
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152   c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M437,0H75C33.6,0,0,33.6,0,75v362   c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M256,392c-74.399,0-135-60.601-135-135   c0-74.401,60.601-135,135-135s135,60.599,135,135C391,331.399,330.399,392,256,392z M421,122c-16.5,0-30-13.5-30-30s13.5-30,30-30   s30,13.5,30,30S437.5,122,421,122z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z    M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152c-57.9,0-105,47.1-105,105   s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z"
                          />
                        </g>
                      </svg>
                    `,
                    },
                ]
            }
        }
    }
};