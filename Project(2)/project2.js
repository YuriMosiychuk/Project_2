
function Formclick(In) {
    var username = In.username.value;
    var Email = In.Email.value;
    var Password = In.Password.value;
    var form = ``;
    if (username.length < 2)
        form = "Enter  name";
    else if (Email.length < 3)
        form = "Enter Email  ";
    else if (Password.length < 3)
        form = "Enter Password";
    if (form != ``) {
        document.getElementById(`send`)
            .innerText = form;
        return false;
    };
    document.getElementById(`send`).innerText = ``;
    window.location = `https://github.com/YuriMosiychuk/Project_1.git`
    return false;
};



