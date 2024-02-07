document.addEventListener("DOMContentLoaded", function() {
    const interiorButton = document.getElementById("interior-button");
    const exteriorButton = document.getElementById("exterior-button");
    const colorsButton = document.getElementById("colors-button"); 
    const imageGallery = document.getElementById("image-gallery");

    interiorButton.addEventListener("click", function() {
        
        imageGallery.innerHTML = "";
        
        const interiorImageLinks = [
            "https://imgs.search.brave.com/s7t-I0Jl35rQdGqCt6wP-MFJ8OV9xGXbAobTTzyOS2w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FyYnV6ei5jb20v/Z2FsbGVyeS1pbWFn/ZXMvMjAyMy1ibXct/eDctZGFzaGJvYXJk/LWNhcmJ1enotMTA5/OTYwMy0xNjAwLmpw/Zw",
            "https://imgs.search.brave.com/6jnZl0Sgk6vQn3crnzAxD_6PxthLA4xziGfdMkpxMZs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FyYnV6ei5jb20v/Z2FsbGVyeS1pbWFn/ZXMvMjAyMy1ibXct/eDctaW5zdHJ1bWVu/dC1jbHVzdGVyLWNh/cmJ1enotMTA5OTYw/NS0xNjAwLmpwZw",
            "https://imgs.search.brave.com/JGmbx360SL09KhpR4t96J_QeNX2YqBX-jUQVA7hitYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FyYnV6ei5jb20v/Z2FsbGVyeS1pbWFn/ZXMvMjAyMy1ibXct/eDctYWlyLXZlbnRz/LWNhcmJ1enotMTA5/OTYwOS0xNjAwLmpw/Zw",
            "https://imgs.search.brave.com/rzCzm_F1Fx__wt20ytfurqOjA6kpsNis_E-M3gd2BSw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FyYnV6ei5jb20v/Z2FsbGVyeS1pbWFn/ZXMvMjAyMy1ibXct/eDctaW50ZXJpb3It/b3ZlcnZpZXctY2Fy/YnV6ei05ODI2Mjkt/MTYwMC5qcGc"
        ];

        
        interiorImageLinks.forEach(function(link) {
            const img = document.createElement("img");
            img.src = link;
            img.classList.add("interior-image");
            imageGallery.appendChild(img);
        });
    });

    exteriorButton.addEventListener("click", function() {
        
        imageGallery.innerHTML = "";
        
        const exteriorImageLinks = [
            "https://imgs.search.brave.com/ZaOdE7eKmBILkcmyxW5kd4Ryg8QAnt33dOUsSykq5XQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FyYnV6ei5jb20v/Z2FsbGVyeS1pbWFn/ZXMvMjAyMy1ibXct/eDctZnJvbnQtdmll/dy1jYXJidXp6LTEw/OTk1NzQtMTYwMC5q/cGc",
            "https://imgs.search.brave.com/zV5MVjuy1anBZHaWKn_--0KBEfnqMPvz1vcHgMloPQI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FyYnV6ei5jb20v/Z2FsbGVyeS1pbWFn/ZXMvMjAyMy1ibXct/eDctcmVhci12aWV3/LWNhcmJ1enotMTA5/OTU4My0xNjAwLmpw/Zw",
            "https://imgs.search.brave.com/rrQai4GNCrXU4KQC4yjByOVfVPvD1ViSkIOfFjvIfh8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y2FyYnV6ei5jb20v/Z2FsbGVyeS1pbWFn/ZXMvMjAyMy1ibXct/eDctc2lkZS12aWV3/LWNhcmJ1enotMTA5/OTYxOC0xNjAwLmpw/Zw",
            "https://imgs.search.brave.com/ZkEQtRaOpvChJ9ruJYPAP1xhn4wEGMx3HRE-MuPj0nA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIz/LWJtdy14Ny14ZHJp/dmUtNDBpMTU0LTY0/MWM1YjQ2NDcxZjIu/anBnP2Nyb3A9MC41/ODN4dzowLjUzNXho/OzAuMTc3eHcsMC4z/NTJ4aCZyZXNpemU9/OTgwOio"
        ];

        
        exteriorImageLinks.forEach(function(link) {
            const img = document.createElement("img");
            img.src = link;
            img.classList.add("exterior-image");
            imageGallery.appendChild(img);
        });
    });
    
    colorsButton.addEventListener("click", function() {
        
        imageGallery.innerHTML = "";
        
        const colorImageLinks = [
            "https://stimg.cardekho.com/images/car-images/930x620/BMW/X7/10571/1689839923438/223_Carbon-Black-Metallic_000000.jpg?tr=w-898",
            "https://stimg.cardekho.com/images/car-images/930x620/BMW/X7/11362/1702891261698/Mineral-White.jpg?tr=w-898",
            "https://stimg.cardekho.com/images/car-images/930x620/BMW/X7/10571/1689839923438/224_-Tanzanite-Blue-Metallic_0e182d.jpg?tr=w-898",
            "https://stimg.cardekho.com/images/car-images/930x620/BMW/X7/10571/1689839923438/222_Dravit-Grey-Metallic_22282c.jpg?tr=w-898",
            "https://stimg.cardekho.com/images/car-images/930x620/BMW/X7/11362/1702891261698/Sparkling-Copper-Grey-Metallic.jpg?tr=w-898",
            "https://stimg.cardekho.com/images/car-images/930x620/BMW/X7/11362/1702891261698/Black-Sapphire-(1).jpg?tr=w-898",
            "https://stimg.cardekho.com/images/car-images/930x620/BMW/X7/10571/1689839923438/221_Mineral-White-Metallic_ffffff.jpg?tr=w-898"
        ];


        colorImageLinks.forEach(function(link) {
            const img = document.createElement("img");
            img.src = link;
            img.classList.add("color-image");
            imageGallery.appendChild(img);
        });
    });
});
