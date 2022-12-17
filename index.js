const shareButtons = document.querySelectorAll(".tile-share-button")

async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute("link")
    try{
        await navigator.clipboard.writeText(link)
        alert("Link copied successfully")
    }catch(err){
        console.log(err)
    }
}

shareButtons.forEach(button => button.addEventListener("click",copyText))