import LogIn from "../pages/global/LogInPage";
import Netflix from "../pages/global/NetflixPage";
import NETFLIXPlayerPage from "../pages/auth/NETFLIXPlayerPage";
import SignUp from "../pages/global/SignUpPage";

export const pagesInfo = {
    // global pages
    LOG_IN: {
        pageName: "LOG_IN",
        pagePath: "/log-in",
        routePath: "/log-in",
        component: <LogIn />
    },
    NETFLIX: {
        pageName: "NETFLIX",
        pagePath: "/",
        routePath: "/",
        component: <Netflix />
    },
    NETFLIX_PLAYER_PAGE: {
        pageName: "NETFLIX_PLAYER_PAGE",
        pagePath: "/player",
        routePath: "/player",
        component: <NETFLIXPlayerPage />  
    },
    SIGN_UP: {
        pageName: "SIGN_UP",
        pagePath: "/sign-up",
        routePath: "/sign-up",
        component: <SignUp />
    },
}