document.getElementById("contactButton").addEventListener("click", function() {
    // Contact details
    const name =document.getElementById("con-name").innerHTML ;
    const email = document.getElementById("con-emil").innerHTML;
    const phone = document.getElementById("contact_number").innerHTML;
    const website = document.getElementById("con-url").href;
    const address = document.getElementById("con_add").innerText;
    const designation = document.getElementById("con-designation").innerHTML ;;

    console.log(name+ ' '+ email + ' '+ phone + ' '+ website + ' '+ address + ' '+ designation)
    
    // Create vCard data
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:${designation}
TEL:${phone}
EMAIL:${email}
URL:${website}
ADR:${address}
END:VCARD`;

    // Create a Blob containing the vCard data
    const blob = new Blob([vCardData], { type: "text/vcard" });

    // Create a downloadable link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact.vcf";
    link.click();
});