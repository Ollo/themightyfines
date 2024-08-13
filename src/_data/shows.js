const shows = [
  // {
  //   date: "October 3rd, 2020",
  //   location: "Front Range Brewing Company",
  //   time: "6:30pm - 8:30pm ",
  //   link: "https://www.frontrangebrewingcompany.com/lafayettebreweryevents",
  //   active: false,
  // },
  // {
  //   date: "October 30th, 2020",
  //   location: "VisionQuest Brewing Company",
  //   time: "6pm - 8pm",
  //   link: "https://www.facebook.com/visionquestbrewery/",
  //   active: false,
  // },
  // {
  //   date: "April 3rd, 2021",
  //   location: "Private Garden Party",
  //   time: "5pm - 8pm",
  //   link: "/",
  //   active: false,
  // },
  // {
  //   date: "May 8th, 2021",
  //   location: "Kettle and Spoke",
  //   time: "5pm - 8pm",
  //   link: "https://www.facebook.com/events/3740126042707909/",
  //   active: false,
  // },
  // {
  //   date: "June 5th, 2021",
  //   location: "VisionQuest Brewing Company",
  //   time: "5pm - 8pm",
  //   link: "http://www.visionquestbrewing.com/events/brandywine-and-the-mighty-fines-2",
  //   active: false,
  // },
  // {
  //   date: "August 13th, 2021",
  //   location: "Cellar West Artisan Ales",
  //   time: "7pm - 9pm",
  //   link: "https://www.cellarwest.com/sunset-concerts",
  //   active: false,
  // },
  // {
  //   date: "August 28th, 2021",
  //   location: "Kettle and Spoke",
  //   time: "6pm - 9pm",
  //   link: "https://www.facebook.com/KettleandSpoke/events/",
  //   active: false,
  // },
  // {
  //   date: "September 18th, 2021",
  //   location: "Rollinsville, CO",
  //   name: "Howlin Wind Brewing and Blending",
  //   time: "3pm - 6pm",
  //   link: "https://www.facebook.com/events/188121240053869",
  //   active: false,
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "October 31st",
  //   location: "Boulder, CO",
  //   name: "Grateful Halloween ~ Kettle and Spoke",
  //   time: "5pm - 8:30pm",
  //   link: "https://www.facebook.com/events/178809114435692",
  //   active: false,
  //   poster: 'images/posters/2021-10-31.jpg'
  // },
  // {
  //   date: "November 6th, 2021",
  //   location: "Boulder, CO",
  //   name: "Beyond the Mountain Brewing Company",
  //   time: "6pm - 9pm",
  //   link: "https://www.facebook.com/events/309177470864776",
  //   active: false,
  //   poster: 'images/posters/2021-11-3.jpg'
  // },
  // {
  //   date: "January 22nd, 2022",
  //   location: "Denver, CO",
  //   name: "Bloodies & Bluegrass @ Mile High Spirits",
  //   time: "2pm - 6pm",
  //   link: "/",
  //   active: false,
  //   poster: 'images/posters/2022-1-22.jpg'
  // },
  // {
  //   date: "February 19th, 2022",
  //   location: "Boulder, CO",
  //   name: "The Fox Theater",
  //   time: "Doors @ 8:30pm",
  //   link: "https://www.axs.com/events/417573/jane-and-matthews-with-graham-good-the-painters-phantom-phare-brandy-tickets?skin=foxtheatre",
  //   active: false,
  //   poster: 'images/posters/2022-2-19.jpg'
  // },
  // {
  //   date: "February 25th, 2022",
  //   location: "Boulder, CO",
  //   name: "Brandywine Trio @ Kettle & Spoke",
  //   time: "7pm - 9pm",
  //   link: "https://www.facebook.com/events/424610889443934",
  //   active: false,
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "March 11th, 2022",
  //   location: "Dillon, CO",
  //   name: "Keystone Winter Bluegrass Weekend",
  //   time: "Doors @ 6:30pm",
  //   link: "https://warrenstation.com/event/winterbluegrass2022/",
  //   active: false,
  //   poster: 'images/posters/2022-3-11.jpg'
  // },
  // {
  //   date: "March 26th, 2022",
  //   location: "Denver, CO",
  //   name: "The Lodge at Wood Boss",
  //   time: "Doors @ 7:00pm",
  //   link: "https://www.eventbrite.com/e/high-lonesome-w-brandywine-and-the-mighty-fines-at-the-lodge-tickets-224966840877?fbclid=IwAR2QAz2Fi7fpd3rf34Y2t8wrTCun8OdftoYCTGoZb5IASigZsAmrq4fKCyg",
  //   active: false,
  //   poster: 'images/posters/2022-3-26.png',
  // },
  // {
  //   date: "April 15th, 2022",
  //   location: "Lyons, CO",
  //   name: "MainStage Brewing",
  //   time: "6pm - 9pm",
  //   link: "https://www.mainstagebrewing.com/music/brandywine-the-mighty-fines",
  //   active: false,
  //   poster: 'images/posters/2022-4-15.png'
  // },
  // {
  //   date: "April 23th, 2022",
  //   location: "Lyons, CO",
  //   name: "FoCoMX ~ Equinox Brewing",
  //   time: "3pm",
  //   link: "https://focomx.focoma.org/artists/brandywine-and-mighty-fines",
  //   active: false,
  //   poster: 'images/posters/2022-4-23.jpg'
  // },
  // {
  //   date: "April 29th, 2022",
  //   location: "Jamestown, CO",
  //   name: "Jamestown Mercantile",
  //   time: "7pm - 9pm",
  //   link: "https://www.jamestownmercantile.com/calendar",
  //   active: false,
  //   poster: 'images/posters/2022-4-29.jpg'
  // },
  // {
  //   date: "May 1st, 2022",
  //   location: "Longmont, CO",
  //   name: "(ECHO) Birthday Party ~ Left Hand Brewery Beer Garden",
  //   link: "https://www.echocolorado.com/news",
  //   active: false,
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "May 28th, 2022",
  //   location: "Estes Park, CO",
  //   name: "Full Throttle Distillery",
  //   link: "https://www.facebook.com/theMightyFines/photos/a.128056302089629/562039912024597",
  //   active: false,
  //   time: '5pm - 8pm',
  //   poster: 'images/posters/2022-5-28.jpg'
  // },
  // {
  //   date: "June 4th, 2022",
  //   location: "Altona, CO",
  //   name: "Private Event",
  //   active: false,
  //   poster: 'images/posters/2022-6-4.png'
  // },
  // {
  //   date: "June 18th, 2022",
  //   location: "Longmont, CO",
  //   name: "Wibby Brewing",
  //   link: "https://www.facebook.com/events/1227315141412371",
  //   time: '6pm - 9pm',
  //   active: false,
  //   poster: 'images/posters/2022-06-18.jpg'
  // },
  // {
  //   date: "June 22nd, 2022",
  //   location: "Denver, CO",
  //   name: "Cervantes Masterpiece ~ Jay Roemer Band, Southbound String Band",
  //   link: "https://www.etix.com/ticket/p/3977797/jay-roemer-band-ftmembers-of-hot-buttered-rum-chain-station-wsouthbound-string-band-ftmembers-of-morsel-clay-stunit-denver-cervantesother-side",
  //   active: false,
  //   time: '7:30pm',
  //   poster: 'images/posters/2022-06-22.jpg'
  // },
  // {
  //   date: "June 25th, 2022",
  //   location: "Littleton, CO",
  //   name: "Breckenridge Brewery Farmhouse",
  //   link: "https://www.facebook.com/events/342620314611644",
  //   active: false,
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "July 23rd, 2022",
  //   location: "Rollinsville, CO",
  //   name: "Stage Stop Pub",
  //   link: "https://www.facebook.com/stagestoppub",
  //   active: false,
  //   poster: 'images/posters/2022-7-23.png'
  // },
  // {
  //   date: "August 12th, 2022",
  //   location: "Guffey, CO",
  //   name: "Humm Family Gathering",
  //   link: "https://hummfamilygathering.ticketleap.com/2022/?fbclid=IwAR2_0C2dreRI0zWLNcCgblCb0dFblxVKG59gQLk1EmMBSCvUTLuYR-gvJDw",
  //   active: false,
  //   poster: 'images/posters/2022-08-12.jpg'
  // },
  // {
  //   date: "August 16th, 2022",
  //   location: "Boulder, CO",
  //   name: "Gloo ~ Company Picnic",
  //   link: "",
  //   active: false,
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "August 26th, 2022",
  //   location: "Lafayette, CO",
  //   name: "Cellar West ~ Summer Concert Series",
  //   link: "https://www.cellarwest.com/events",
  //   active: false,
  //   poster: 'images/posters/2022-8-26.jpg'
  // },
  // {
  //   date: "September 10th, 2022",
  //   location: "Copper Mountain",
  //   name: "Union Peak Festival",
  //   link: "https://www.coppercolorado.com/things-to-do/events/union-peak-festival?fbclid=IwAR2gR-GqvIGCcCcM1PCJ9rccMOtJsy_XxlZsTI2wFmr6Bco5FzFKDn8Y7No",
  //   active: false,
  //   time: "12 - 1:30pm",
  //   poster: 'images/posters/2022-9-10.jpg'
  // },
  // {
  //   date: "September 11th, 2022",
  //   location: "Denver, CO",
  //   name: "Number Thirty Eight",
  //   link: "https://nmbr38.com/events/6snb7y485ekrtea-l7y3n-x6wmn-9cz9x-emzed-njw22-fmh2l-gz8y9-5r6tsf-le2y6-lh5wp-5d9rt-98fr9-2cmhz-2ytkh-ndasd-jd29w-ytkdd-mhjlt-gg936-4wktz-8l7s6-mjaez-ddmhb-6cdmb-t2zey-5cepa-5ma8x-n59k9-smrx4-jk24p",
  //   active: false,
  //   time: "3pm - 5pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "September 17th, 2022",
  //   location: "Palisade, CO",
  //   name: "Palisade Brewing Company",
  //   link: "https://fb.me/e/3vlSKp4PZ",
  //   active: false,
  //   time: "7pm",
  //   poster: 'images/posters/2022-9-17.jpg'
  // },
  // {
  //   date: "October 1st, 2022",
  //   location: "Gunbarrel, CO",
  //   name: "Beyond the Mountain Brewing Company",
  //   link: "https://fb.me/e/1U9S0VDG4",
  //   active: false,
  //   time: "7pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "October 8th, 2022",
  //   location: "Lafayette, CO",
  //   name: "Lafayette Music Fest",
  //   link: "https://fb.me/e/1U9S0VDG4",
  //   active: false,
  //   time: "6:30pm",
  //   poster: 'images/posters/2022-10-8.jpg'
  // },
  // {
  //   date: "October 28th, 2022",
  //   location: "Longmont, CO",
  //   name: "Oskar Blues Taproom",
  //   link: "https://www.facebook.com/events/1057645471566905",
  //   active: false,
  //   time: "6:30pm - 9pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "November 10th, 2022",
  //   location: "Denver, CO",
  //   name: "Lions Lair with Tonewood and Foggy Memory Boys",
  //   link: "https://www.facebook.com/events/1057645471566905",
  //   active: false,
  //   time: "9pm",
  //   poster: 'images/posters/2022-11-10.jpg'
  // },
  // {
  //   date: "December 31st, 2022",
  //   location: "Boulder, CO",
  //   name: "A Mighty Holler ~ New Years w/ Elle Michelles Grateful Holler",
  //   active: false,
  //   time: "6pm - 8pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "January 4th, 2023",
  //   location: "Denver, CO",
  //   name: "Lustre Pearl",
  //   active: false,
  //   time: "7:30pm - 10:30pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "February 9th, 2023",
  //   location: "Denver, CO",
  //   name: "Number 38",
  //   time: "8pm - 10pm",
  //   link: 'https://nmbr38.com/calendar',
  //   active: false,
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "February 24th, 2023",
  //   location: "Englewood, CO",
  //   name: "Sofar Sounds ~ Secret Show",
  //   link: "https://www.sofarsounds.com/events/45630",
  //   active: false,
  //   time: "8pm - 10pm",
  //   poster: 'images/posters/sofar-placeholder.png'
  // },
  // {
  //   date: "March 1st, 2023",
  //   location: "Longmont, CO",
  //   name: "Rosalee's Pizza",
  //   link: "https://www.facebook.com/events/2114974738893421",
  //   active: false,
  //   time: "6pm - 8pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "March 3rd, 2023",
  //   location: "Evergreen, CO",
  //   name: "The WoodCellar",
  //   active: false,
  //   link: "https://www.facebook.com/events/995903278056718",
  //   time: "7:30pm - 10:30pm",
  //   poster: 'images/posters/2023-3-3.jpg'
  // },
  // {
  //   date: "March 10th, 2023",
  //   location: "Denver, CO",
  //   name: "Sofar Sounds ~ Secret Show",
  //   active: false,
  //   link: "https://www.sofarsounds.com/events/46173",
  //   time: "8pm - 10pm",
  //   poster: 'images/posters/sofar-placeholder.png'
  // },
  // {
  //   date: "March 15th, 2023",
  //   location: "Denver, CO",
  //   name: "Lustre Pearl",
  //   active: false,
  //   time: "8pm - 11pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "April 5th, 2023",
  //   location: "Lakewood, CO",
  //   name: "Sofar Sounds ~ Secret Show",
  //   active: false,
  //   link: "https://www.sofarsounds.com/events/46770",
  //   time: "8pm - 10pm",
  //   poster: 'images/posters/sofar-placeholder.png'
  // },
  // {
  //   date: "April 20th - 22nd, 2023",
  //   location: "Palisade, CO",
  //   name: "Palisade Bluegrass Bash",
  //   link: 'https://palisadebluegrass.com/',
  //   active: false,
  //   poster: 'images/posters/2023-4-20.jpg'
  // },
  // {
  //   date: "April 30th, 2023",
  //   location: "Fort Collins, CO",
  //   name: "FoCoMX ~ After Party",
  //   link: 'https://focoma.org/focomx',
  //   active: false,
  //   poster: 'images/posters/2023-4-30.jpg'
  // },
  // {
  //   date: "May 11th - 14th, 2023",
  //   location: "Aztec, NM",
  //   name: "Tico Time Bluegrass Festival",
  //   link: 'https://ticotimeresort.ticketspice.com/tico-time-bluegrass-2023',
  //   active: false,
  //   poster: 'images/posters/2023-5-14.jpg'
  // },
  // {
  //   date: "May 20th, 2023",
  //   location: "Boulder, CO",
  //   name: "Beyond the Mountain Brewing Company w/ The Grass Project",
  //   active: false,
  //   link: "https://fb.me/e/2eBGGXE7E",
  //   time: "6pm - 9pm",
  //   poster: 'images/posters/2023-5-20.jpg'
  // },
  // {
  //   date: "May 28th, 2023",
  //   location: "Boulder, CO",
  //   name: "Boulder Creek Fest",
  //   active: false,
  //   link: "https://bouldercreekfest.com/schedule/",
  //   time: "2pm - 3:30pm",
  //   poster: 'images/posters/2023-5-28.jpg'
  // },
  // {
  //   date: "May 31st, 2023",
  //   location: "Denver, CO",
  //   name: "Lustre Pearl ~ Monthly Residency",
  //   active: false,
  //   link: "https://lustrepearldenver.com/",
  //   time: "8pm - 11pm",
  //   poster: 'images/posters/residency.jpg'
  // },
  // {
  //   date: "June 9th, 2023",
  //   location: "Lafayette, CO",
  //   name: "Lafayette Art Night Out",
  //   link: "https://www.lafayetteco.gov/565/Art-Night-Out",
  //   active: false,
  //   time: "7:30pm - 10:30pm",
  //   poster: 'images/posters/2023-6-9.png'
  // },
  // {
  //   date: "June 19th, 2023",
  //   location: "Denver, CO",
  //   name: "Lustre Pearl ~ Monthly Residency",
  //   active: true,
  //   link: "https://lustrepearldenver.com/",
  //   time: "8pm - 11pm",
  //   poster: 'images/posters/residency.jpg'
  // },
  // {
  //   date: "June 24th, 2023",
  //   location: "Berthoud, CO",
  //   name: "Rail on the River",
  //   active: false,
  //   time: "12:30pm - 1:45pm",
  //   link: "https://www.zeffy.com/en-US/ticketing/884b2895-ec9a-4fc9-ad1a-894a3642924c",
  //   poster: 'images/posters/2023-6-22.jpg'
  // },
  // {
  //   date: "June 30th, 2023",
  //   location: "Lyons, CO",
  //   name: "The Rock Garden ~ Summer Friday Concert Series",
  //   active: false,
  //   time: "6pm - 9pm",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "July 14th - 16th, 2023",
  //   location: "Estes Park, CO",
  //   name: "Snowygrass Music Festival",
  //   link: 'https://www.eventbrite.com/e/snowygrass-music-festival-2023-tickets-448958836967',
  //   active: false,
  //   time: "Saturday 1pm",
  //   poster: 'images/posters/2023-7-14.jpg'
  // },
  // {
  //   date: "July 19th, 2023",
  //   location: "Denver, CO",
  //   name: "Lustre Pearl ~ Monthly Residency",
  //   active: true,
  //   link: "https://lustrepearldenver.com/",
  //   time: "8pm - 11pm",
  //   poster: 'images/posters/residency.jpg'
  // },
  // {
  //   date: "August 3rd, 2023",
  //   location: "Golden, CO",
  //   name: "Backyard Bluegrass Series at the Columbine",
  //   active: false,
  //   time: "7pm - 10pm",
  //   poster: 'images/posters/2023-8-3.jpg'
  // },
  // {
  //   date: "August 9th, 2023",
  //   location: "Longmont, CO",
  //   name: "Sunflower Farms Summer Concert Series",
  //   active: false,
  //   link: "https://www.sunflowerfarminfo.com/farmstoreandtickets/p/summermusic-0809",
  //   time: "5pm - 7:30pm",
  //   poster: 'images/posters/2023-8-9.jpg'
  // },
  // {
  //   date: "August 18th, 2023",
  //   location: "Lyons, CO",
  //   name: "Mainstage Brewing Company ~ Summer Concert Series",
  //   active: false,
  //   link: "https://www.facebook.com/mainstagebrewing/posts/pfbid0mctSK9xSLAP79NuPGN2dMveZgSpn2exadsh6MwQb37ZJsi4QdimgnqZrAva8qg1gl",
  //   time: "6pm - 9pm",
  //   poster: 'images/posters/2023-8-18.jpg'
  // },
  // {
  //   date: "August 25th, 2023",
  //   location: "Broomfield, CO",
  //   name: "Wonderland Brewing Company",
  //   active: false,
  //   link: "https://www.facebook.com/WonderlandBrewingCo/events/?ref=page_internal",
  //   time: "6:30pm - 9pm",
  //   poster: 'images/posters/2023-8-25.jpg'
  // },
  // {
  //   date: "August 30th, 2023",
  //   location: "Denver, CO",
  //   name: "Lustre Pearl ~ Monthly Residency",
  //   active: true,
  //   link: "https://lustrepearldenver.com/",
  //   time: "8pm - 11pm",
  //   poster: 'images/posters/residency.jpg'
  // },
  // {
  //   date: "September 20th, 2023",
  //   location: "Denver, CO",
  //   name: "Hermans Hideaway",
  //   active: false,
  //   time: "7pm",
  //   link: "https://www.facebook.com/events/3402545820011506",
  //   poster: 'images/posters/2023-9-20.png'
  // },
  // {
  //   date: "September 29th, 2023",
  //   location: "Evergreen, CO",
  //   name: "The Woodceller",
  //   active: false,
  //   time: "8pm",
  //   link: "https://www.thewoodcellar.net/",
  //   poster: 'images/posters/placeholder.jpg'
  // },
  // {
  //   date: "October 7th, 2023",
  //   location: "Lone Tree, CO",
  //   name: "Craftoberfest",
  //   active: false,
  //   time: "3:30pm - 5pm",
  //   link: "https://cityoflonetree.com/cityevents/craftoberfest/",
  //   poster: 'images/posters/2023-10-7.png'
  // },
  // // {
  //   date: "October 14th, 2023",
  //   location: "Rollinsville, CO",
  //   name: "Howlin Wind Brewing & Blending",
  //   active: false,
  //   time: "6pm",
  //   link: "https://www.howlinwindbrewing.com/events/",
  //   poster: 'images/posters/2023-10-14.jpg'
  // },
  // {
  //   date: "January 25th, 2023",
  //   location: "Boulder, CO",
  //   name: "The Velvet Elk with Arkansauce",
  //   active: false,
  //   time: "8pm",
  //   link: "https://www.etix.com/ticket/p/69703213/arkansauce-with-brandywine-and-the-mighty-fines-boulder-velvet-elk-lounge?_gl=1*4hlss5*_ga*NDk2Mjk0OTUwLjE3MDU3MDY4MTM.*_ga_X4SJGPT5ZN*MTcwNTcwNjgxMy4xLjAuMTcwNTcwNjgxMy4wLjAuMA..",
  //   poster: 'images/posters/2024-1-25.jpg'
  // },
  // {
  //   date: "February 3rd, 2024",
  //   location: "Keystone, CO",
  //   name: "High Country Hootenanny",
  //   active: false,
  //   time: "6:30pm",
  //   link: "https://www.tixr.com/groups/warrenstation/events/high-country-hootenanny-83526?fbclid=IwAR3OT4SZe-ArBeelWxwTsSKm1mRD_qpceVJtSTEKDibFu2vNkXQW_hRLqNk",
  //   poster: 'images/posters/2024-2-3.jpg'
  // },
  // {
  //   date: "February 3rd, 2024",
  //   location: "Keystone, CO",
  //   name: "High Country Hootenanny",
  //   active: false,
  //   time: "6:30pm",
  //   link: "https://www.tixr.com/groups/warrenstation/events/high-country-hootenanny-83526?fbclid=IwAR3OT4SZe-ArBeelWxwTsSKm1mRD_qpceVJtSTEKDibFu2vNkXQW_hRLqNk",
  //   poster: 'images/posters/2024-2-3.jpg'
  // },
  {
    date: "June 13th, 2024",
    location: "Golden, CO",
    name: "Columbine Cafe",
    active: false,
  },
  {
    date: "June 15th, 2024",
    location: "Broomfield, CO",
    name: "Wonderland Brewing Company",
    active: false,
  },
  {
    date: "June 21st, 2024",
    location: "Evergreen, CO",
    name: "The Woodcellar",
    active: false,
  },
  {
    date: "June 22nd, 2024",
    location: "Gunbarrel, CO",
    name: "Beyond the Mountain | Brandywine Beer Release",
    active: false,
  },
  {
    date: "July 6th, 2024",
    location: "South Park, CO",
    name: "South Park Bluegrass Festival",
    active: false,
  },
  {
    date: "July 18th, 2024",
    location: "Denver, CO",
    name: "Brandywine Trio | Black Buzzard",
    active: false,
  },
  {
    date: "July 19th, 2024",
    location: "Gold Hill, CO",
    name: "Gold Hill Inn",
    active: false,
  },
  {
    date: "August 16th, 2024",
    location: "Boulder, CO",
    name: "Roots Music Project w/ Twang Mountain",
    active: true,
  },
  {
    date: "August 17th, 2024",
    location: "Windsor, CO",
    name: "Brandywine Trio at Windsor Farmers Market",
    active: true,
  },
  {
    date: "August 23rd, 2024",
    location: "Boulder, CO",
    name: "Mountain Sun",
    active: true,
  },
  {
    date: "August 31st, 2024",
    location: "Prague, CZ",
    name: "Europe 24: Beats on Basement",
    active: true,
  },
  {
    date: "September 1st, 2024",
    location: "Prague, CZ",
    name: "Europe 24: Boothill Bar",
    active: true,
  },
  {
    date: "September 3rd, 2024",
    location: "Vöhringen, DE",
    name: "Europe 24: Illertal Cowboys",
    active: true,
  },
  {
    date: "September 5th, 2024",
    location: "Braunschweig, DE",
    name: "Europe 24: Kauf Baur",
    active: true,
  },
  {
    date: "September 7th - 8th, 2024",
    location: "Gundelfingen an der Donau, DE",
    name: "Europe 24: Bluegrass Festival Birkenreid",
    active: true,
  },


]

module.exports = shows
