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
                        image: "../../../../img/theme3/foto-pettine-7kfulL-IQgU-unsplash.jpg",
                        title: "Wedding Videography Packages",
                        body: `You are planning for one of the most memorable days of your life. You have everything in place in your mind regarding how your wedding day will flow. As you use your imagination to configure your wedding day, you are thinking about what wedding songs you will walk down the aisle to while...`,
                    },
                    {
                        image: "../../../../img/theme3/foto-pettine-7iC9GVU_I00-unsplash (1).jpg",
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
                    "../../../../img/theme3/foto-pettine-3IA9da9Ohx0-unsplash (3).jpg",
                    "../../../../img/theme3/foto-pettine-IfjHaIoAoqE-unsplash (3).jpg",
                    "../../../../img/theme3/foto-pettine-nkeeRGy_CrI-unsplash (1).jpg",
                ]
            }
        }
    }
};