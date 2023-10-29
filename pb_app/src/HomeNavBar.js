import pb from "lib/pocketbase";
import "stylesheets/homenavbar.css";

export default function HomeNavBar() {
    async function updatePage(page) {
        if (page === "Login") {
            localStorage.setItem("currentPage", "Login");
        }
        else if (page === "SearchCate") {
            localStorage.setItem("currentPage", "SearchCate");
        }
        window.location.reload();
    }

    return (
        <>
            <html>
                <head>
                    <link rel="stylesheet" href="homenavbar.css"></link>
                </head>
                <body>
                    <div className="homenavbar-container">
                        <ul>
                            <li><a onClick={updatePage.bind(this, "Login")}>Home</a></li>
                            {/* <li><a onClick={updatePage.bind(this, "SearchCate")}>Search</a></li> */}
                            <li style={{float: "right"}}><a>Logged In As: {pb.authStore.model.username}</a></li>
                        </ul>
                    </div>
                </body>
            </html>
        </>
    );
}