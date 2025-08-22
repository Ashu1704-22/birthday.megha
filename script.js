document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".padded-img");

function createStars(count = 4000) {
    const starsContainer = document.getElementById("stars");

    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = document.documentElement.scrollWidth;

    starsContainer.style.height = pageHeight + "px";
    starsContainer.style.width = pageWidth + "px";

    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * pageHeight + "px";  
        star.style.left = Math.random() * pageWidth + "px";   
        star.style.width = (Math.random() * 2 + 1) + "px";
        star.style.height = star.style.width;
        star.style.animationDuration = (1 + Math.random() * 2) + "s";
        starsContainer.appendChild(star);
    }
}

createStars(4000);
 
window.addEventListener("resize", () => {
    document.getElementById("stars").innerHTML = ""; 
    createStars(500);
});

    const imageStories = {
        "train.jpg": "Her first ride home on the Bande Bharat, and her joy became my own also i can say..!   She rode the Bande Bharat for the first time… and I swear, her smile was faster than the train. 🚄✨",
        "1st pic samaleswari.jpg": "When I looked at this photo of her 📸, I saw the kind of happiness only love can give ❤️. That smile 😊 — the one that lights up her whole face ✨ — appears when she's with me 💑. And deep in my heart ❤️, I know… I can't afford to ever lose it 💕.",
        "2nd pic samaleswari.jpg": "This photo takes me back to our first meet 💕 — her in my specs 🤓, that shy smile 😊, and that little fear 😳 wondering if someone might notice us 👀… and maybe, just maybe, a few not-so-kind eyes lingering around.",
        "3rd pic samaleswari.jpg": "This photo reminds me how irresistibly cute and adorable she is 💕. Even with that little fear in her eyes 😌, she carried herself fearlessly ✨ — all to make my heart feel light and free.",
        "4th pic samalwsawri.jpg": "At this very moment, my heart freezes ❄️💖, captivated by her innocent yet mischievous gaze 😇😏. Every little glance, every playful smirk, sends shivers down my soul ✨. In her eyes, I see the dance of mischief and sweetness 🌸, and I'm lost in the magic of her smile 💕 — a spell I never want to break.",
        "brightness.jpg": "This picture reminds me how and why I love her so deeply 💖. Every little smile, every glance, every playful gesture 🌸 brings brightness ✨ to my heart 💓 and whispers the reasons she is my world. In her presence, even the simplest moments shine with magic 🌟, and I find myself falling for her again and again, endlessly, completely, and without hesitation 💑",
        "class saree.jpg": "🌟 Her sparkling smile ✨😊 gives me every reason to hold her hand ✋💕. That shining face 🌸💖 always reminds me of my promise — that no one could ever dare to hurt her, not even me 😤💪💞. Because when I see her like this 🥰🌈, all my tension 😩🔥, anger 😡💥, and tiredness 😴💨 just vanish, as if they never even existed ✨💫.",
        "click on top samleswari night.jpg": "📸 This shot makes me wonder… how could I ever deny that radiant, smiling gesture? 😊🌸 With a playful spark, she used my height to her advantage and clicked this picture — innocent yet enchanting. What she doesn't realize is that in my eyes, she is endlessly more beautiful, infinitely more gorgeous than the lens could ever capture 💖. Her charm isn't just seen… it's felt ✨, and truly, how can anyone resist looking at her when she carries the glow of magic itself? 🌟💕",
        "college outside.jpg": "🎓 Her university days… the time when we both found little moments to talk with each other ⏳💬. I know, whenever she misses me, she gets a little upset 💔🥺. But at times like these, her friends became the reason behind her smile 🌸🤗. And as always — with that smile 😊✨, she hides the emotion of missing me… but her eyes 👀💖, they tell me everything her lips never say. 🌌❤️",
        "college trip.jpg": "💭 This is a day I'll never forget… 🌅 She was away on a college trip 🎒, in a place completely out of network coverage 📵. I was restless 😟, worried 💔, waiting ⏳. When she finally returned to the hostel 🏡, she knew exactly how I must have felt ❤️. That's why she sent me this picture 📸 — and in a moment, all my worries melted away 🌸✨. It feels like she always knows my heart 💖, always knows my reactions 💭😊 before I even say a word 💕🌌.",
        "flower bush.jpg": "🌸 In that flower shop, she held the bouquet like a queen of blossoms 👑💐 — yet even the flowers looked shy before her beauty ❤️. Perfect — because the truest flower was never in the vase, but standing before me, smiling like she owned the spring itself 🌷✨.",
        "ghanteswari.jpg": "🌊 This place holds the treasure of our love 💖 — moments etched in time, where the world felt still. The way I held her hand as we walked through the flowing waters 🤝, guiding her gently past stones and slippery paths 🌿, protecting her like she was my whole world. And then, that divine sight — her praying to God 🙏, with a smile so pure and serene 😊, it felt as if heaven itself had paused to admire her. At that moment, love wasn't just a feeling — it was a blessing. ✨💫.",
        "gussa on late.jpg": "At this point of time, she is a little bit angry 😅, yet smiling 😊 just to make me feel comfortable and keep me calm 💖. Her care shines even through her frustration ✨, and it makes my heart melt every time 💓.",
        "handson.jpg": "When she holds my hand and leads me her way, with her own rules and rhythm 💕, I feel like I'm flying ✨ — weightless, free, and untouched even by gravity 🌟. In her presence, every worry drifts away, and all that exists is the magic of being with her 💖.",
        "hirakud dam.jpg": "📸 She loves photoshoots in every little moment of life 🌸. And me? I'm her forever photographer 💕 — capturing her smile, her gestures, her existence, so I never miss even a second of her magic ✨. She was born to be a model, a muse of beauty and grace 💖, but destiny placed her in studies 📚. Still, I only wish that every dream she carries finds its way to her 🌟, because she deserves nothing less than everything 💕. Her beautiful soul deserves all the love, success, and happiness this world can give 💫.",
        "hirakud garrden.jpg": "✨ This time, with me and my friends, she plays with the whole environment 🌿, her smiling face spreading joy everywhere 😊💫 — and yes, making them a little jealous too 😉. Here, she even tries to look taller than me 😅, and honestly, she's just so adorable 💖. It's moments like these that make me fall even deeper in love with her, without even realizing it. ❤️",
        "khiri eat.jpg": "✨ Isme kuch aisa hai jo mujhe andar se pata hai… chahe 36 ke 36 gun mile ya na mile, par yeh ek gun sab kuch cover kar lega — FOODIE WALI QUALITY 🍽️💖. Aur wo bhi bina kisi hesitation ke! I know she loves her make-up 💄, but when it comes to food — sab jaaye bhaad mein 😅, hum toh chale khane! 🥰 Uski muskaan tab aur bhi pyaari lagti hai jab woh apne favourite khane ke saath hoti hai ✨.",
        "kiit intern.jpg": "After so much work at the hospital for her internship 🏥, she throws all her tiredness out the window 🌬️ and calls me with that smiling, heartwarming face 😊❤️ — just to make me feel better and wash away all my fatigue 💖. I think that's what love truly looks like — in every small effort and caring gesture ✨.",
        "last meet.jpg": "It makes me wonder… how far can she go for me? 💕 After a night-long journey 🚆, eyes heavy with sleep 😌 and body aching with fatigue, she still came all the way here ✨ just to spend a few precious moments with me 💑… and that beautiful smile on her face 😍 ohhhhhh, it's a sight I'll never forget.",
        "pink saree 1.jpg": "✨ This is the place where time stands still ⏳, and the reason why I admire and cherish her so, so, so much 💖. I know black suits her perfectly, but in pink she is simply stunning 🌸. I still remember the day I first saw this picture — I was astonished, forgetting everything else around me, lost completely in her beauty ✨.",
        "pink saree 2.jpg": "This explains how beauty and brains can coexist within a girl ✨. Yet sometimes, it also includes a touch of rowdy boldness 💥 — especially for those miscreants who try to act oversmart with her.",
        "samaleswari night.jpg": "✨ I don't know if she smiles so much because of me, or if it's just her nature to be a happy soul 😊💖. That night, breaking hostel rules, she stepped out with me 🌙 — a simple act, yet it spoke volumes of the trust she has in me 💫. From that moment, I promised myself… never to break that trust, no matter the cost, no matter the situation 🤍.",
        "sambal pur zoo.jpg": "💫 This picture captures her cuteness — a charm with no boundaries 🌸. At the zoo 🦁🐒, where even the parrots 🦜 and butterflies 🦋 seemed to pause and stare, she wore the very dress I first fell for. In that moment, I couldn't resist taking a photo 📸. I asked her for a mischievous pose 😏💕 — and she gave me one that still makes my heart glow every time.",
        "Saree.jpg": "Since the beginning of our friendship 💕, this has been the photo I cherish most 📸. I told her that, as a small girl 🌸, this saree crowns her with an everlasting title ✨ — “Gorgeous”, one that time could never take away.",
        "Screenshot_2024-02-29-16-49-53-22_1c337646f29875672b5a61192b9010f9.jpg": "That very first photo of her 💖 — the moment I saw it, she found a special place in my heart 💓. Every time I look at it, I'm reminded of just how extremely lovable she is 🌸, and how effortlessly she captured my soul ✨.",
        "temple.jpg": "Here she seems to say, “Hey sun ☀️, don’t pour all your brightness on me — save some for yourself, for I shine brighter than you ✨. My light can warm and brighten the lives of my loved ones for a lifetime 💖.”",
        "yellow kurti.jpg": "Her smile, paired with that yellow dress 💛, makes her so irresistibly attractive that even the Black-hooded Oriole 🐦 seems jealous. But she, as always, remains carefree, confident, and calm — a poise that truly defines her aura ✨.."
    };

    let currentBubble = null;
    let currentImage = null;

    images.forEach(img => {
        const rotate = Math.random() * 20 - 10;
        const translateX = Math.random() * 40 - 20;
        const translateY = Math.random() * 40 - 20;
        img.style.transform = `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;

        img.addEventListener("click", (e) => {
            e.stopPropagation();

            if (currentImage === img && currentBubble) {
                currentBubble.remove();
                currentBubble = null;
                currentImage = null;
                return;
            }

            if (currentBubble) currentBubble.remove();

            const bubble = document.createElement("div");
            bubble.className = "story-bubble";
            bubble.textContent = imageStories[img.getAttribute("src")] || "No story added for this picture yet.";
            document.body.appendChild(bubble);

            const rect = e.target.getBoundingClientRect();
            bubble.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
            bubble.style.top = `${rect.bottom + window.scrollY + 10}px`;
            bubble.style.transform = "translate(-50%, 0%)";

            currentBubble = bubble;
            currentImage = img;

            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createHeart(e.pageX, e.pageY);
                }, i * 200);
            }
        });
    });

    document.body.addEventListener("click", () => {
        if (currentBubble) {
            currentBubble.remove();
            currentBubble = null;
            currentImage = null;
        }
    });

   
    const firstSong = new Audio("Khoobsurat Stree 2 320 Kbps.mp3");
    firstSong.loop = true;

     firstSong.play().catch(() => {

    
    function startMusic() {
        firstSong.play();
        document.removeEventListener("click", startMusic);
    }
    document.addEventListener("click", startMusic);
});

    const secondSong = new Audio("happy-birthday-357371.mp3");
    let firstSongPausedAt = 0;
    let birthdayMessageOpen = false;

    function typeTextParagraphs(element, paragraphs, speed = 40) {
        let pIndex = 0;
        function typeParagraph() {
            if (pIndex >= paragraphs.length) return;
            const p = document.createElement("p");
            element.appendChild(p);
            let i = 0;
            function typing() {
                if (i < paragraphs[pIndex].length) {
                    p.innerHTML += paragraphs[pIndex].charAt(i);
                    i++;
                    setTimeout(typing, speed);
                } else {
                    pIndex++;
                    if (pIndex < paragraphs.length) {
                        setTimeout(typeParagraph, 500); 
                    }
                }
            }
            typing();
        }
        typeParagraph();
    }

    const birthdayBtn = document.getElementById("birthday-btn");
    if (birthdayBtn) {
        birthdayBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            const oldMsg = document.getElementById("birthday-message");

            if (birthdayMessageOpen && oldMsg) {
                oldMsg.remove();
                secondSong.pause();
                secondSong.currentTime = 0;
                firstSong.currentTime = firstSongPausedAt;
                firstSong.play();
                birthdayMessageOpen = false;
                return;
            }

            if (currentBubble) {
                currentBubble.remove();
                currentBubble = null;
                currentImage = null;
            }

            if (oldMsg) oldMsg.remove();

            const message = document.createElement("div");
            message.id = "birthday-message";
            document.body.appendChild(message);

            const paragraphs = [
                "🎉💖 Happy Birthday, my love! 💖🎉", 
                "Even though miles separate us 🌏✈️, my heart is always right there with you 💞. Today is the day the most beautiful soul came into this world 🌸✨ — and I am endlessly grateful that you exist. You're my sunshine ☀️, my safe place 🏡, and the reason my heart smiles even from afar 😊💖.",
                "I may not be there to hold your hand ✋ or see your smile in person 😢, but every thought, every memory, and every wish I send is wrapped in my love for you 💌💫. I promise to care for you, support you, and love you endlessly 💕🌹.",
                "May this year bring you happiness beyond imagination 🌈✨, dreams that turn real 💫, and moments that make your heart glow just like you make mine every day ❤️. Distance is only temporary, but my love for you is forever 💖💫."
            ];

            typeTextParagraphs(message, paragraphs, 40);

            firstSongPausedAt = firstSong.currentTime;
            firstSong.pause();

            secondSong.currentTime = 0;
            secondSong.play();

            birthdayMessageOpen = true;

            function removeMessageOnClickOutside(event) {
                if (!message.contains(event.target) && event.target !== birthdayBtn) {
                    message.remove();
                    secondSong.pause();
                    secondSong.currentTime = 0;
                    firstSong.currentTime = firstSongPausedAt;
                    firstSong.play();
                    birthdayMessageOpen = false;
                    document.removeEventListener("click", removeMessageOnClickOutside);
                }
            }

            setTimeout(() => {
                document.addEventListener("click", removeMessageOnClickOutside);
            }, 0);
        });
    }

     function createHeart(x, y) {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});
