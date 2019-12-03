interface Admin {
    id: string;
    role: string;
}

interface User {
    email: string;
}
/**
 * this function will get an Admin or an User
 * @param usr 
 */
function redirect(usr: Admin | User) {
    /**
     * in operator will determine the type of the variable usr 
     * and will check "role" property exists
     */
    if("role" in usr) {
        routeToAdminPage(usr.role);
    } else {
        routeToHomePage(usr.email);
    }
}

function routeToAdminPage(role: string) {
    // redirect user based on role
}

function routeToHomePage(email: string) {
    // redirect user based on email
}