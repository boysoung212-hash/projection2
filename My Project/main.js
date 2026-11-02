const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".destination-card");
const emptyState = document.getElementById("emptyState");
const clickableSelector = ".brand, .outline-button, .search-bar button, .hero__nav a, .destination-card";
const destinationModal = document.getElementById("destinationModal");
const destinationModalClose = document.getElementById("destinationModalClose");

const modalFields = {
    image: document.getElementById("destinationModalImage"),
    location: document.getElementById("destinationModalLocation"),
    eyebrow: document.getElementById("destinationModalEyebrow"),
    title: document.getElementById("destinationModalTitle"),
    summary: document.getElementById("destinationModalSummary"),
    rating: document.getElementById("destinationModalRating"),
    reviews: document.getElementById("destinationModalReviews"),
    tags: document.getElementById("destinationModalTags"),
    visitTime: document.getElementById("destinationModalVisitTime"),
    bestTime: document.getElementById("destinationModalBestTime"),
    area: document.getElementById("destinationModalArea"),
    travelStyle: document.getElementById("destinationModalTravelStyle"),
    place: document.getElementById("destinationModalPlace"),
    distance: document.getElementById("destinationModalDistance"),
    language: document.getElementById("destinationModalLanguage"),
    food: document.getElementById("destinationModalFood"),
    stayPrice: document.getElementById("destinationModalStayPrice"),
    highlights: document.getElementById("destinationModalHighlights"),
    tip: document.getElementById("destinationModalTip"),
    note: document.getElementById("destinationModalNote"),
    mapLink: document.getElementById("destinationModalMapLink"),
    dots: document.getElementById("destinationModalDots"),
};

const regionalTravelFacts = {
    phnomPenh: {
        distanceFromPhnomPenh: "0 km (inside Phnom Penh)",
        localLanguage: "Khmer; English is common in tourist areas",
        popularFood: "Kuy teav Phnom Penh, nom pang, fish amok",
        averageStayPrice: "Approx. $16-$65 per night",
    },
    siemReap: {
        distanceFromPhnomPenh: "Approx. 315 km by road",
        localLanguage: "Khmer; English is common around tourism services",
        popularFood: "Num banh chok, fish amok, beef lok lak",
        averageStayPrice: "Approx. $16-$85 per night",
    },
    coastalIsland: {
        distanceFromPhnomPenh: "Approx. 215 km to Sihanoukville, plus ferry",
        localLanguage: "Khmer; English is common near resorts and piers",
        popularFood: "Grilled seafood, BBQ, fresh squid",
        averageStayPrice: "Approx. $18-$90 per night",
    },
    kampot: {
        distanceFromPhnomPenh: "Approx. 151 km by road",
        localLanguage: "Khmer; English is common in cafes and guesthouses",
        popularFood: "Seafood, Kampot pepper dishes, Khmer curry",
        averageStayPrice: "Approx. $18-$76 per night",
    },
    kirirom: {
        distanceFromPhnomPenh: "Approx. 120 km by road",
        localLanguage: "Khmer; basic English is available at resorts",
        popularFood: "Grilled chicken, Khmer soup, local BBQ",
        averageStayPrice: "Approx. $30-$90 per night",
    },
    kratie: {
        distanceFromPhnomPenh: "Approx. 241 km by road",
        localLanguage: "Khmer; basic English is common in guesthouses",
        popularFood: "Mekong river fish, krolan, noodle soup",
        averageStayPrice: "Approx. $18-$45 per night",
    },
    battambang: {
        distanceFromPhnomPenh: "Approx. 295 km by road",
        localLanguage: "Khmer; English is common in visitor areas",
        popularFood: "Num banh chok, krolan, Battambang oranges",
        averageStayPrice: "Approx. $10-$55 per night",
    },
    kep: {
        distanceFromPhnomPenh: "Approx. 152 km by road",
        localLanguage: "Khmer; English is common near the coast",
        popularFood: "Kep crab with Kampot pepper, grilled squid, seafood",
        averageStayPrice: "Approx. $35-$99 per night",
    },
    preahVihear: {
        distanceFromPhnomPenh: "Approx. 430 km by road",
        localLanguage: "Khmer; English is limited outside main hotels",
        popularFood: "Grilled meats, sticky rice, Khmer soups",
        averageStayPrice: "Approx. $30-$70 per night",
    },
    kampongThom: {
        distanceFromPhnomPenh: "Approx. 190 km by road",
        localLanguage: "Khmer; basic English is available in town services",
        popularFood: "Prahok dishes, noodle soup, river fish",
        averageStayPrice: "Approx. $9-$35 per night",
    },
};

const destinationDetails = {
    "royal-palace": {
        thumbSrc: "https://bizweb.dktcdn.net/100/348/514/products/aerial-view-royal-palace-of-phnom-penh-cambodia-1920x1080.jpg?v=1716181270203",
        thumbAlt: "Royal Palace illustration preview",
        gallery: [
            {
                src: "https://media.istockphoto.com/id/494298363/photo/the-royal-palace-in-phnom-penh-cambodia.jpg?s=170667a&w=0&k=20&c=Xa-I9qwqz1qdAqBEWeBjkJ4RXefCQPRzNn04CA-IiYc=",
                alt: "Royal Palace courtyard illustration",
            },
        ],
        ...regionalTravelFacts.phnomPenh,
        place: "Phnom Penh, Cambodia",
        eyebrow: "Phnom Penh - Capital heritage",
        rating: "Guide score 4.8/5",
        reviews: "Strong pick for first-time visitors",
        tags: ["Khmer architecture", "History", "City landmark"],
        visitTime: "1 to 2 hours",
        bestTime: "Morning or late afternoon",
        area: "Central Phnom Penh near the riverfront",
        travelStyle: "Culture, photography, relaxed city stop",
        highlights: [
            "Royal grounds with formal Khmer-style buildings",
            "A good introduction to Phnom Penh history",
            "Easy to pair with museum and riverside visits",
        ],
        tip: "Combine it with the National Museum and a short riverside walk for a complete half-day plan.",
        note: "This is one of the easiest major landmarks to fit into a city itinerary when you want culture without a long transfer.",
        mapQuery: "Royal Palace Phnom Penh Cambodia",
    },
    "angkor-wat": {
        thumbSrc: "https://visitlocaltravel.com/blog/wp-content/uploads/2024/07/Equinox-Sunrise-Phenomenon.png",
        thumbAlt: "Angkor Wat illustration preview",
        gallery: [
            {
                src: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3854996/original/4c805080-1943-4490-b215-2ed54935c968.jpeg?im_w=720",
                alt: "Angkor Wat reflection illustration",
            },
            {
                src: "https://khmernote.com.kh/wp-content/uploads/2023/09/e8a136ce237493a27f1c8299e42f86d0.jpg",
                alt: "Angkor Wat reflection illustration",
            },
        ],
        ...regionalTravelFacts.siemReap,
        place: "Angkor Archaeological Park, Siem Reap",
        eyebrow: "Siem Reap - UNESCO temple complex",
        rating: "Guide score 5.0/5",
        reviews: "Classic sunrise and heritage favorite",
        tags: ["Sunrise", "Temple trail", "World heritage"],
        visitTime: "Half day to full day",
        bestTime: "Sunrise or early morning",
        area: "Angkor Archaeological Park, Siem Reap",
        travelStyle: "History, photography, full landmark day",
        highlights: [
            "Iconic temple silhouette at sunrise",
            "Detailed bas-reliefs and long stone galleries",
            "Works well with Angkor Thom or Ta Prohm routes",
        ],
        tip: "Start early, carry water, and plan light clothing because the complex is large and the heat builds quickly.",
        note: "Angkor Wat is the signature stop for travelers who want Cambodia's most recognizable historic experience in one place.",
        mapQuery: "Angkor Wat Siem Reap Cambodia",
    },
    "koh-rong": {
        thumbSrc: "assets/images/koh-rong.svg",
        thumbAlt: "Koh Rong illustration preview",
        gallery: [
            {
                src: "assets/images/koh-rong-sunset.svg",
                alt: "Koh Rong sunset illustration",
            },
        ],
        ...regionalTravelFacts.coastalIsland,
        place: "Koh Rong Island, Preah Sihanouk",
        eyebrow: "Sihanoukville coast - Island escape",
        rating: "Guide score 4.7/5",
        reviews: "Beach favorite for slower travel days",
        tags: ["Island stay", "Beach time", "Sea view"],
        visitTime: "1 to 3 days",
        bestTime: "Dry season and bright daytime weather",
        area: "Island off the Sihanoukville coast",
        travelStyle: "Beach break, boat trip, resort stay",
        highlights: [
            "Long sandy beaches and clear water",
            "A slower rhythm than city-based trips",
            "Good choice for overnight island stays",
        ],
        tip: "Keep ferry timing in mind and plan a flexible return schedule if the weather changes.",
        note: "Koh Rong suits travelers who want to slow down after busy temple or city stops and spend time near the water.",
        mapQuery: "Koh Rong Cambodia",
    },
    "bokor-national-park": {
        thumbSrc: "assets/images/bokor-park.svg",
        thumbAlt: "Bokor National Park illustration preview",
        gallery: [
            {
                src: "assets/images/bokor-cloud-view.svg",
                alt: "Bokor mountain cloud view illustration",
            },
        ],
        ...regionalTravelFacts.kampot,
        place: "Bokor plateau, Kampot Province",
        distanceFromPhnomPenh: "Approx. 185 km by road",
        eyebrow: "Kampot - Highland retreat",
        rating: "Guide score 4.6/5",
        reviews: "Scenic drive and cooler-air favorite",
        tags: ["Mountain road", "Nature", "Viewpoint"],
        visitTime: "Half day to full day",
        bestTime: "Morning with clear weather",
        area: "Bokor plateau, Kampot province",
        travelStyle: "Road trip, nature break, viewpoint stop",
        highlights: [
            "Cooler mountain air above the lowlands",
            "Broad viewpoints and winding access roads",
            "A different atmosphere from beach destinations",
        ],
        tip: "Bring a light layer because conditions can feel cooler and mistier than the surrounding province.",
        note: "This stop works best for travelers who want scenery and road views rather than a dense city or temple itinerary.",
        mapQuery: "Bokor National Park Kampot Cambodia",
    },
    "national-museum": {
        thumbSrc: "assets/images/national-museum.svg",
        thumbAlt: "National Museum illustration preview",
        gallery: [
            {
                src: "assets/images/national-museum-courtyard.svg",
                alt: "National Museum courtyard illustration",
            },
        ],
        ...regionalTravelFacts.phnomPenh,
        place: "Phnom Penh, Cambodia",
        eyebrow: "Phnom Penh - Khmer art and history",
        rating: "Guide score 4.7/5",
        reviews: "Strong cultural stop between landmarks",
        tags: ["Museum", "Artifacts", "Khmer history"],
        visitTime: "1 to 2 hours",
        bestTime: "Late morning or mid-afternoon",
        area: "Central Phnom Penh near major civic landmarks",
        travelStyle: "Museum visit, culture, quiet indoor stop",
        highlights: [
            "Khmer sculpture and historical collections",
            "Calmer pace than many outdoor city sites",
            "Easy pairing with palace-focused routes",
        ],
        tip: "Visit after the Royal Palace if you want a more complete cultural overview without changing districts.",
        note: "The museum is a good balance point in Phnom Penh when you want depth and context, not only photo stops.",
        mapQuery: "National Museum Phnom Penh Cambodia",
    },
    "kirirom-national-park": {
        thumbSrc: "assets/images/kirirom.svg",
        thumbAlt: "Kirirom National Park illustration preview",
        gallery: [
            {
                src: "assets/images/kirirom-cabins.svg",
                alt: "Kirirom pine cabin illustration",
            },
        ],
        ...regionalTravelFacts.kirirom,
        place: "Kirirom National Park, Kampong Speu",
        eyebrow: "Kampong Speu - Forest and cabin escape",
        rating: "Guide score 4.6/5",
        reviews: "Popular for forest air and lodge stays",
        tags: ["Forest", "Cabin stay", "Mountain air"],
        visitTime: "Half day to overnight",
        bestTime: "Morning to sunset",
        area: "Mountain zone in Kampong Speu province",
        travelStyle: "Nature break, overnight lodge, road escape",
        highlights: [
            "Forest scenery and elevated viewpoints",
            "A quieter alternative to busier attractions",
            "Good for short nature-focused overnight trips",
        ],
        tip: "This destination feels better when you give it extra time rather than treating it as only a quick stop.",
        note: "Kirirom is most rewarding for travelers who want cooler air, trees, and a calmer mood outside the city.",
        mapQuery: "Kirirom National Park Cambodia",
    },
    "kratie-dolphin-river": {
        thumbSrc: "assets/images/kratie-dolphin.svg",
        thumbAlt: "Kratie dolphin illustration preview",
        gallery: [
            {
                src: "assets/images/kratie-river-boat.svg",
                alt: "Kratie Mekong boat illustration",
            },
        ],
        ...regionalTravelFacts.kratie,
        place: "Kratie Province, Cambodia",
        distanceFromPhnomPenh: "Approx. 245 km by road",
        eyebrow: "Kratie - Mekong river wildlife stop",
        rating: "Guide score 4.5/5",
        reviews: "Quiet-town route with river character",
        tags: ["River trip", "Wildlife", "Sunset view"],
        visitTime: "2 to 4 hours",
        bestTime: "Late afternoon or sunset",
        area: "Mekong-side travel zone near Kratie town",
        travelStyle: "Boat outing, quiet stop, regional route",
        highlights: [
            "Chance to spot Irrawaddy dolphins",
            "Strong river atmosphere and slower pace",
            "A good contrast to crowded tourist hubs",
        ],
        tip: "Pair your river visit with a relaxed evening in town rather than rushing in and out on the same schedule.",
        note: "Kratie works well for travelers who want something softer and more regional than Cambodia's major headline sites.",
        mapQuery: "Kratie Irrawaddy Dolphin Cambodia",
    },
    "tonle-sap-lake": {
        thumbSrc: "assets/images/tonle-sap.svg",
        thumbAlt: "Tonle Sap illustration preview",
        gallery: [
            {
                src: "assets/images/tonle-sap-sunset.svg",
                alt: "Tonle Sap sunset illustration",
            },
        ],
        ...regionalTravelFacts.siemReap,
        place: "Tonle Sap Lake, Siem Reap region",
        eyebrow: "Siem Reap - Floating-village experience",
        rating: "Guide score 4.6/5",
        reviews: "Strong add-on after temple days",
        tags: ["Boat trip", "Lake life", "Floating village"],
        visitTime: "2 to 4 hours",
        bestTime: "Morning or late afternoon light",
        area: "Lake communities accessed from Siem Reap",
        travelStyle: "Boat travel, local life, scenic add-on",
        highlights: [
            "Floating-village scenery unlike temple visits",
            "A different view of daily life on the water",
            "Easy to combine with a Siem Reap stay",
        ],
        tip: "This stop works best as a contrasting half-day experience after one or two days focused on temple sites.",
        note: "Tonle Sap adds variety to a Siem Reap itinerary by showing a completely different landscape and rhythm.",
        mapQuery: "Tonle Sap Lake Siem Reap Cambodia",
    },
    "phnom-penh-riverside": {
        thumbSrc: "assets/images/phnom-penh-city.svg",
        thumbAlt: "Phnom Penh city illustration preview",
        gallery: [
            {
                src: "assets/images/phnom-penh-riverside-night.svg",
                alt: "Phnom Penh riverside night illustration",
            },
        ],
        ...regionalTravelFacts.phnomPenh,
        place: "Phnom Penh Riverside, Cambodia",
        eyebrow: "Phnom Penh - Urban riverfront route",
        rating: "Guide score 4.4/5",
        reviews: "Easy city walk with broad local energy",
        tags: ["Riverfront", "City walk", "Markets"],
        visitTime: "1 to 3 hours",
        bestTime: "Late afternoon into evening",
        area: "Riverside corridor in central Phnom Penh",
        travelStyle: "Walking route, local browsing, city atmosphere",
        highlights: [
            "Good base for casual city walking",
            "Easy access to food, views, and nearby landmarks",
            "A broader look at capital life beyond monuments",
        ],
        tip: "Go later in the day if you want softer light, more activity, and a more comfortable walking temperature.",
        note: "This is a flexible stop for travelers who want to absorb Phnom Penh rather than only check off formal attractions.",
        mapQuery: "Phnom Penh Riverside Cambodia",
    },
    "battambang-bamboo-train": {
        thumbSrc: "assets/images/battambang-train.svg",
        thumbAlt: "Battambang bamboo train illustration preview",
        gallery: [
            {
                src: "assets/images/battambang-fields.svg",
                alt: "Battambang countryside field illustration",
            },
        ],
        ...regionalTravelFacts.battambang,
        place: "Battambang Province, Cambodia",
        eyebrow: "Battambang - Countryside ride",
        rating: "Guide score 4.5/5",
        reviews: "Fun local-style stop outside the city core",
        tags: ["Countryside", "Short ride", "Local experience"],
        visitTime: "1 to 2 hours",
        bestTime: "Morning or late afternoon",
        area: "Rural surroundings of Battambang",
        travelStyle: "Light adventure, quick excursion, local route",
        highlights: [
            "Memorable ride through open countryside",
            "A more playful stop than formal landmarks",
            "Easy to combine with a Battambang day trip",
        ],
        tip: "Treat this as one stop inside a wider Battambang route rather than the only plan for the whole day.",
        note: "The bamboo train is best for travelers who want something casual, local, and a little different from standard sightseeing.",
        mapQuery: "Battambang Bamboo Train Cambodia",
    },
    "kep-beach": {
        thumbSrc: "assets/images/kep-beach.svg",
        thumbAlt: "Kep Beach illustration preview",
        gallery: [
            {
                src: "assets/images/kep-crab-market.svg",
                alt: "Kep coastal market illustration",
            },
        ],
        ...regionalTravelFacts.kep,
        place: "Kep, Cambodia",
        eyebrow: "Kep - Southern coast retreat",
        rating: "Guide score 4.4/5",
        reviews: "Relaxed coastal stop with seafood appeal",
        tags: ["Coast", "Seafood", "Slow pace"],
        visitTime: "Half day to overnight",
        bestTime: "Afternoon into sunset",
        area: "Southern coastline around Kep town",
        travelStyle: "Relaxation, food stop, short getaway",
        highlights: [
            "Easy coastal atmosphere without a heavy itinerary",
            "Known for simple beach time and seafood culture",
            "Good for shorter breaks in the south",
        ],
        tip: "Kep is most enjoyable when you leave space for a slower schedule instead of trying to pack too many stops into one visit.",
        note: "This destination suits travelers who want calm coastal energy more than big-ticket attractions.",
        mapQuery: "Kep Beach Cambodia",
    },
    "preah-vihear-temple": {
        thumbSrc: "assets/images/preah-vihear.svg",
        thumbAlt: "Preah Vihear illustration preview",
        gallery: [
            {
                src: "assets/images/preah-vihear-cliff.svg",
                alt: "Preah Vihear cliff temple illustration",
            },
        ],
        ...regionalTravelFacts.preahVihear,
        place: "Preah Vihear Temple, Cambodia",
        eyebrow: "Preah Vihear - Remote hilltop heritage",
        rating: "Guide score 4.8/5",
        reviews: "Dramatic heritage route with wide views",
        tags: ["Hilltop temple", "Remote route", "Ancient stonework"],
        visitTime: "Half day to full day",
        bestTime: "Clear morning weather",
        area: "Northern Cambodia near the temple escarpment",
        travelStyle: "Heritage trip, remote landmark, viewpoint route",
        highlights: [
            "Long elevated approach and striking setting",
            "Ancient structures with a more remote feel",
            "Broad views that make the journey part of the appeal",
        ],
        tip: "Plan this as a dedicated heritage outing because the approach and travel time matter as much as the temple itself.",
        note: "Preah Vihear is ideal for travelers who want a more dramatic and less urban historic experience than the usual city stops.",
        mapQuery: "Preah Vihear Temple Cambodia",
    },
    "banteay-srei": {
        thumbSrc: "assets/images/banteay-srei.svg",
        thumbAlt: "Banteay Srei illustration preview",
        gallery: [
            {
                src: "assets/images/banteay-srei-gateway.svg",
                alt: "Banteay Srei gateway illustration",
            },
        ],
        ...regionalTravelFacts.siemReap,
        place: "Banteay Srei, Siem Reap",
        distanceFromPhnomPenh: "Approx. 350 km by road",
        eyebrow: "Siem Reap - Carved pink sandstone temple",
        rating: "Guide score 4.8/5",
        reviews: "Popular heritage add-on beyond the main Angkor loop",
        tags: ["Temple detail", "Sandstone carving", "Siem Reap day trip"],
        visitTime: "1 to 2 hours",
        bestTime: "Morning with softer light",
        area: "Northeast of Siem Reap near the Angkor region",
        travelStyle: "Heritage visit, photography, half-day add-on",
        highlights: [
            "Known for highly detailed pink sandstone carvings",
            "Smaller scale and calmer feel than major temple complexes",
            "Easy to combine with countryside or temple-side stops",
        ],
        tip: "Visit earlier in the day if you want gentler heat and better time to look closely at the stonework.",
        note: "Banteay Srei works well for travelers who already plan Siem Reap and want a more detailed, less crowded temple mood.",
        mapQuery: "Banteay Srei Temple Siem Reap Cambodia",
    },
    "phnom-kulen-national-park": {
        thumbSrc: "assets/images/phnom-kulen.svg",
        thumbAlt: "Phnom Kulen National Park illustration preview",
        gallery: [
            {
                src: "assets/images/phnom-kulen-falls.svg",
                alt: "Phnom Kulen waterfall illustration",
            },
        ],
        ...regionalTravelFacts.siemReap,
        place: "Phnom Kulen, Siem Reap",
        distanceFromPhnomPenh: "Approx. 360 km by road",
        eyebrow: "Siem Reap - Waterfall and forest plateau",
        rating: "Guide score 4.7/5",
        reviews: "Strong nature break after temple-heavy days",
        tags: ["Waterfall", "Forest", "River carvings"],
        visitTime: "Half day to full day",
        bestTime: "Morning through early afternoon",
        area: "Phnom Kulen plateau north of Siem Reap",
        travelStyle: "Nature day trip, scenic route, cooler outing",
        highlights: [
            "Waterfalls and forest scenery beyond the urban core",
            "Sacred river carvings add cultural interest to the nature stop",
            "A good contrast after several temple-focused visits",
        ],
        tip: "Wear shoes with grip if you plan to move around wet rocks or waterfall areas.",
        note: "Phnom Kulen is best for travelers who want open air, greenery, and a less built-up day outside Siem Reap.",
        mapQuery: "Phnom Kulen National Park Cambodia",
    },
    "koh-tonsay": {
        thumbSrc: "assets/images/koh-tonsay.svg",
        thumbAlt: "Koh Tonsay illustration preview",
        gallery: [
            {
                src: "assets/images/koh-tonsay-pier.svg",
                alt: "Koh Tonsay pier illustration",
            },
        ],
        ...regionalTravelFacts.kep,
        place: "Koh Tonsay, Kep",
        distanceFromPhnomPenh: "Approx. 152 km by road, plus boat ride",
        averageStayPrice: "Approx. $15-$60 per night",
        eyebrow: "Kep - Short boat trip to Rabbit Island",
        rating: "Guide score 4.4/5",
        reviews: "Simple coastal favorite for quiet beach time",
        tags: ["Island boat ride", "Quiet beach", "Slow travel"],
        visitTime: "Half day to overnight",
        bestTime: "Late morning to sunset",
        area: "Island just off the coast of Kep",
        travelStyle: "Beach day, light island trip, relaxed overnight",
        highlights: [
            "Short boat ride makes it easy to add from Kep town",
            "Quieter beach atmosphere than larger resort islands",
            "Simple stays and a slower pace suit relaxed travelers",
        ],
        tip: "Bring cash and basic essentials because facilities are simpler than on larger tourist islands.",
        note: "Koh Tonsay suits travelers who want a low-pressure coastal break rather than a busy resort schedule.",
        mapQuery: "Koh Tonsay Rabbit Island Cambodia",
    },
    "sambor-prei-kuk": {
        thumbSrc: "assets/images/sambor-prei-kuk.svg",
        thumbAlt: "Sambor Prei Kuk illustration preview",
        gallery: [
            {
                src: "assets/images/sambor-prei-kuk-forest.svg",
                alt: "Sambor Prei Kuk forest path illustration",
            },
        ],
        ...regionalTravelFacts.kampongThom,
        place: "Sambor Prei Kuk, Kampong Thom",
        eyebrow: "Kampong Thom - Forest temple heritage",
        rating: "Guide score 4.7/5",
        reviews: "Quieter ancient site with shaded temple paths",
        tags: ["Brick towers", "Ancient site", "Forest heritage"],
        visitTime: "2 to 4 hours",
        bestTime: "Morning or late afternoon",
        area: "Temple zone in Kampong Thom province",
        travelStyle: "Heritage stop, regional road trip, quiet exploration",
        highlights: [
            "Ancient brick towers set among shaded forest paths",
            "A calmer heritage stop than Cambodia's busiest temple zones",
            "Fits well on routes between Phnom Penh and Siem Reap",
        ],
        tip: "Give yourself unhurried walking time because the site feels best when explored slowly.",
        note: "Sambor Prei Kuk is a strong choice for travelers who want history and atmosphere without large crowds.",
        mapQuery: "Sambor Prei Kuk Cambodia",
    },
};

let lastFocusedElement = null;
let activeGallery = [];
let activeGalleryIndex = 0;
let galleryIntervalId = null;
let gallerySwapTimeoutId = null;

function normalizeText(element) {
    return element ? element.textContent.replace(/\s+/g, " ").trim() : "";
}

function stopGalleryAutoplay() {
    if (galleryIntervalId) {
        clearInterval(galleryIntervalId);
        galleryIntervalId = null;
    }

    if (gallerySwapTimeoutId) {
        clearTimeout(gallerySwapTimeoutId);
        gallerySwapTimeoutId = null;
    }

    if (modalFields.image && modalFields.image.parentElement) {
        modalFields.image.parentElement.classList.remove("is-swapping");
    }
}

function setActiveDot(index) {
    if (!modalFields.dots) {
        return;
    }

    const dots = modalFields.dots.querySelectorAll(".destination-modal__dot");

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
        dot.setAttribute("aria-pressed", String(dotIndex === index));
    });
}

function renderGalleryDots() {
    if (!modalFields.dots) {
        return;
    }

    modalFields.dots.replaceChildren();
    modalFields.dots.hidden = activeGallery.length <= 1;

    activeGallery.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "destination-modal__dot";
        dot.setAttribute("aria-label", `Show image ${index + 1}`);
        dot.setAttribute("aria-pressed", "false");
        dot.dataset.galleryIndex = String(index);
        modalFields.dots.appendChild(dot);
    });

    setActiveDot(activeGalleryIndex);
}

function updateGalleryView(index, animate = true) {
    if (!activeGallery.length || !modalFields.image) {
        return;
    }

    activeGalleryIndex = index;
    const activeSlide = activeGallery[index];
    const imageContainer = modalFields.image.parentElement;

    if (gallerySwapTimeoutId) {
        clearTimeout(gallerySwapTimeoutId);
        gallerySwapTimeoutId = null;
    }

    const applySlides = () => {
        modalFields.image.src = activeSlide.src;
        modalFields.image.alt = activeSlide.alt;
        setActiveDot(index);
        gallerySwapTimeoutId = null;

        if (imageContainer) {
            imageContainer.classList.remove("is-swapping");
        }
    };

    if (!animate || !imageContainer) {
        applySlides();
        return;
    }

    imageContainer.classList.add("is-swapping");
    gallerySwapTimeoutId = setTimeout(applySlides, 180);
}

function startGalleryAutoplay() {
    stopGalleryAutoplay();

    if (activeGallery.length <= 1) {
        return;
    }

    galleryIntervalId = setInterval(() => {
        const nextIndex = (activeGalleryIndex + 1) % activeGallery.length;
        updateGalleryView(nextIndex);
    }, 3400);
}

function filterDestinations() {
    if (!searchInput || !emptyState) {
        return;
    }

    const query = searchInput.value.trim().toLowerCase();
    let visibleCards = 0;

    cards.forEach((card) => {
        const text = (card.dataset.keywords + " " + card.textContent).toLowerCase();
        const isVisible = text.includes(query);

        card.hidden = !isVisible;
        if (isVisible) {
            visibleCards += 1;
        }
    });

    emptyState.hidden = visibleCards !== 0;
}

function restartClickAnimation(target) {
    target.classList.remove("is-clicked");
    void target.offsetWidth;
    target.classList.add("is-clicked");
}

function createRipple(target, event) {
    if (typeof event.clientX !== "number" || typeof event.clientY !== "number") {
        return;
    }

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);

    ripple.className = "click-ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function setActiveCard(activeCard) {
    cards.forEach((card) => {
        const isActive = card === activeCard;
        card.classList.toggle("is-selected", isActive);
        card.setAttribute("aria-pressed", String(isActive));
    });
}

function populateTags(tags) {
    if (!modalFields.tags) {
        return;
    }

    modalFields.tags.replaceChildren();

    tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.className = "destination-modal__chip";
        tagElement.textContent = tag;
        modalFields.tags.appendChild(tagElement);
    });
}

function populateHighlights(highlights) {
    if (!modalFields.highlights) {
        return;
    }

    modalFields.highlights.replaceChildren();

    highlights.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        modalFields.highlights.appendChild(listItem);
    });
}

function openDestinationModal(card) {
    if (!destinationModal || !destinationModalClose) {
        return;
    }

    const destinationId = card.dataset.destination;
    const details = destinationDetails[destinationId];

    if (!details) {
        return;
    }

    const image = card.querySelector("img");
    const title = normalizeText(card.querySelector("h3"));
    const summary = normalizeText(card.querySelector(".destination-card__body p"));
    const location = normalizeText(card.querySelector(".location-tag"));
    const imageSrc = image ? image.currentSrc || image.src : "";
    const imageAlt = image ? image.alt : title;
    const thumbSrc = details.thumbSrc || imageSrc;
    const thumbAlt = details.thumbAlt || `${title} preview`;
    const detailGallery = Array.isArray(details.gallery)
        ? details.gallery
            .map((slide) => {
                if (!slide) {
                    return null;
                }

                if (typeof slide === "string") {
                    return { src: slide, alt: `${title} gallery image` };
                }

                return {
                    src: slide.src || "",
                    alt: slide.alt || `${title} gallery image`,
                };
            })
            .filter((slide) => slide && slide.src)
        : [];
    const galleryCandidates = [
        { src: imageSrc, alt: imageAlt },
        ...detailGallery,
        { src: thumbSrc, alt: thumbAlt },
    ].filter((slide) => slide.src);

    activeGallery = galleryCandidates.filter(
        (slide, index, slides) => slides.findIndex((candidate) => candidate.src === slide.src) === index
    );
    activeGalleryIndex = 0;
    renderGalleryDots();
    updateGalleryView(0, false);
    startGalleryAutoplay();

    if (modalFields.location) {
        modalFields.location.textContent = location;
    }

    if (modalFields.eyebrow) {
        modalFields.eyebrow.textContent = details.eyebrow;
    }

    if (modalFields.title) {
        modalFields.title.textContent = title;
    }

    if (modalFields.summary) {
        modalFields.summary.textContent = summary;
    }

    if (modalFields.rating) {
        modalFields.rating.textContent = details.rating;
    }

    if (modalFields.reviews) {
        modalFields.reviews.textContent = details.reviews;
    }

    if (modalFields.visitTime) {
        modalFields.visitTime.textContent = details.visitTime;
    }

    if (modalFields.bestTime) {
        modalFields.bestTime.textContent = details.bestTime;
    }

    if (modalFields.area) {
        modalFields.area.textContent = details.area;
    }

    if (modalFields.travelStyle) {
        modalFields.travelStyle.textContent = details.travelStyle;
    }

    if (modalFields.place) {
        modalFields.place.textContent = details.place || location || details.area;
    }

    if (modalFields.distance) {
        modalFields.distance.textContent = details.distanceFromPhnomPenh || "Approx. distance not listed";
    }

    if (modalFields.language) {
        modalFields.language.textContent = details.localLanguage || "Khmer";
    }

    if (modalFields.food) {
        modalFields.food.textContent = details.popularFood || "Local Khmer food";
    }

    if (modalFields.stayPrice) {
        modalFields.stayPrice.textContent = details.averageStayPrice || "Approx. price not listed";
    }

    if (modalFields.tip) {
        modalFields.tip.textContent = details.tip;
    }

    if (modalFields.note) {
        modalFields.note.textContent = details.note;
    }

    if (modalFields.mapLink) {
        modalFields.mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.mapQuery)}`;
    }

    populateTags(details.tags);
    populateHighlights(details.highlights);

    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    destinationModal.hidden = false;
    destinationModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    destinationModalClose.focus();
}

function closeDestinationModal() {
    if (!destinationModal || destinationModal.hidden) {
        return;
    }

    stopGalleryAutoplay();
    destinationModal.hidden = true;
    destinationModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

cards.forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
});

if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        filterDestinations();
    });
}

if (searchInput) {
    searchInput.addEventListener("input", filterDestinations);
}

document.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-close-modal]");

    if (closeTarget) {
        closeDestinationModal();
        return;
    }

    const galleryDot = event.target.closest(".destination-modal__dot");

    if (galleryDot) {
        const nextIndex = Number(galleryDot.dataset.galleryIndex);

        if (!Number.isNaN(nextIndex)) {
            updateGalleryView(nextIndex);
            startGalleryAutoplay();
        }

        return;
    }

    const target = event.target.closest(clickableSelector);

    if (!target) {
        return;
    }

    if (target.matches(".destination-card") && event.target.closest(".destination-card__body a")) {
        event.preventDefault();
    }

    restartClickAnimation(target);
    createRipple(target, event);

    if (target.matches(".destination-card")) {
        setActiveCard(target);
        openDestinationModal(target);
    }
});

document.addEventListener("animationend", (event) => {
    if (event.target.matches(clickableSelector)) {
        event.target.classList.remove("is-clicked");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDestinationModal();
        return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
        return;
    }

    const card = event.target.closest(".destination-card");

    if (!card) {
        return;
    }

    event.preventDefault();
    restartClickAnimation(card);
    setActiveCard(card);
    openDestinationModal(card);
});
