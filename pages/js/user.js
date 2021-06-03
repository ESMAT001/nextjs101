const userData = {
    username: null,
    password: "admin",
    id: null,
    email: null,
    signIn: function (username, email, id) {
        this.username = username;
        this.email = email;
        this.id = id;
        window.localStorage.setItem("userData", JSON.stringify({ username: this.username, email: this.email, id: this.id }));
        return {
            error: null,
            success: true
        }
    },
    signOut: function () {
        window.localStorage.removeItem("userData")
        this.username = null;
        this.email = null;
        this.id = null;
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
        if (data[i].username.toLowerCase() !== username.toLowerCase()) continue;
        return userData.signIn(data[i].username, data[i].email, data[i].id);
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
export default function useAccount() {
    
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