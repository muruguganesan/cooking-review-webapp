import { Calendar, DollarSign, Users } from "lucide-react";
import CheckIn from "../pages/CheckIn";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import OurStory from "../pages/OurStory";
import Recipes from "../pages/Recipes";


const headerLinks = [
    {
        id: 1,
        label: "Home",
        link: "/",
        element: <Home />,
        menuVisibility: true,
    },
    {
        id: 2,
        label: "Recipes",
        link: "/recipes",
        element: <Recipes />,
        menuVisibility: true,
    },
    {
        id: 3,
        label: "Our Story",
        link: "/our-story",
        element: <OurStory />,
        menuVisibility: true,
    },
    {
        id: 4,
        label: "Gallery",
        link: "/gallery",
        element: <Gallery />,
        menuVisibility: true,
    },
    {
        id: 5,
        label: "Check In",
        link: "/check-in",
        element: <CheckIn />,
        menuVisibility: true,
    },
    {
        id: 6,
        label: "No Page",
        link: "*",
        element: <NoPage />,
        menuVisibility: false,
    },
];

const whatWeOffer = [
    {
        id: 1,
        title: "Cooking Classes",
        desc: "Learn authentic Chinese recipes step-by-step. From beginner basics to signature dishes.",
        elem: <Calendar color="white" width={32} height={32} />,
    },
    {
        id: 2,
        title: "Community Support",
        desc: "Connect with fellow students, share your creations, and cook together.",
        elem: <Users color="white" width={32} height={32} />,
    },
    {
        id: 3,
        title: "Affordable Meals",
        desc: "Cook delicious food using local ingredients that won't break the bank.",
        elem: <DollarSign color="white" width={32} height={32} />,
    },
];

const upcomingClassDetails = [
    {
        id: 1,
        text: "Saturday, June 14, 2026",
        ele: <Calendar color="#e67e22" width={20} height={20} />,
    },
    {
        id: 2,
        text: "8 spots left",
        ele: <Users color="#e67e22" width={20} height={20} />,
    },
];

export { headerLinks , whatWeOffer, upcomingClassDetails };