var checkAccess = async function() {
    const url = "https://9dry6fle9j.execute-api.ap-southeast-1.amazonaws.com/dev/demo-resource";
    try {
        const response = await fetch(url, {
            headers: {
                "auth-token": keycloak.token,
            },
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}