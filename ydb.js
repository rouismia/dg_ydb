var bungie_url = "https://bungie.net"

let create_el = (em, name) => {
    let tmp_div = document.createElement('div');
    let tmp_img = document.createElement('img');
    let tmp_p = document.createElement('p');
    tmp_img.src = bungie_url + em;
    tmp_img.classList.add('user_img');
    tmp_p.innerText = name;
    tmp_p.classList.add('user_name');
    tmp_div.appendChild(tmp_img);
    tmp_div.appendChild(tmp_p);
    tmp_div.classList.add('user');

    return tmp_div
}

window.onload = () => {
    // let tt = document.getElementById('ydb');
    // let em = "/img/profile/avatars/default_avatar.gif";
    // tt.appendChild(create_el(em, "Meow"))
    // tt.appendChild(create_el(em, "Meow2"))
    // tt.appendChild(create_el(em, "Meow3"))
    let API_KEY = "32e97ca0d7294ad2a9ca9851f7521e28";
    $.ajax({
        url: "https://www.bungie.net/Platform/GroupV2/3459834/Members/",
        headers: {
            "X-API-Key": API_KEY
        }
    }).done(function(resp) {
        let items = resp.Response.results;

        let tt = document.getElementById('ydb');

        console.log(items);

        items.forEach(element => {
            if (element.isOnline) {
                console.log(element);
                
                let em = element.bungieNetUserInfo.iconPath;
                let name = element.destinyUserInfo.displayName;

                console.log(em, name);

                let tmp_el = create_el(em, name);

                tt.appendChild(tmp_el);
            }
        });
    });  
}