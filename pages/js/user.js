const userData = {
    username: null,
    password: "admin",
    email: null,
    signIn: function (username, email) {
        this.username = username;
        this.email = email;
        return {
            error: null,
            success: true
        }
    },
    signOut: function () {
        this.username = null;
        this.email = null;
        return {
            error: null,
            success: true
        }
    }
}
async function signIn(username) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        if (data[i].username !== username) continue;
        return userData.signIn(data[i].username, data[i].email);
    }
    return {
        error: 'invalid username or password!',
        success: false
    }
}
function signOut() {
    if (userData.username) {
        return userData.signOut();
    }
    else {
        return {
            error: "unkown error!",
            success: false
        }
    }
}
export function useAccount() {
    return {
        signIn,
        signOut,
        userData: function () {
            return {
                username: userData.username,
                email: userData.email
            }
        }
    }
}