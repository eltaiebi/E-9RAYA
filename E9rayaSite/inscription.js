function envoyer(event) {
    event.preventDefault();
    (function () { emailjs.init("Ednd4UsofRjGWe08u"); })();
    let champs = document.querySelectorAll('[id^="send"]');
    let title = "";
    let str = "";
    let name = ""
    champs.forEach(tag => {
        title = title + tag.id.replace('send-', '') + ";"
        if (tag.type == 'checkbox') 
            str = str + tag.checked + ";"                
        else 
            str = str + tag.value + ";"
        
        if(tag.id == 'send-name')
            name = tag.value;
    });

    emailjs.send("service_ksizq56", "template_cgn8q1q", {
        from_name: name != null ? name.toLocaleUpperCase() : "NULL",
        to_name: "",
        message: str,
        reply_to: title,
    }).then(function (response) {
        alert("Merci pour votre temps, nous vous contacterons dans les plus brefs délais.");
        document.location.href = "Landing-Page.html";
    }, function (error) {
        alert("Nous rencontrons un problème technique sur notre site, merci de réessayer ultérieurement.");
        document.location.href = "E9rayaSite/inscription.html";
    });;
}