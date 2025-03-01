document.addEventListener("DOMContentLoaded", function () {
    const chatbot = document.getElementById("chatbot");
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const closeChat = document.getElementById("close-chat");
    const chatbotIcon = document.getElementById("chatbot-icon");
    const botAvatar = document.querySelector(".bot-avatar");
    let inactivityTimer;

    /** 📌 Show chatbot with greeting after 2 sec */
    setTimeout(() => {
        chatbot.style.display = "flex";
        chatbot.style.animation = "fadeIn 0.8s ease-in-out";
        showGreetingMessage();
    }, 2000);

    /** 📌 Greeting Messages */
    function showGreetingMessage() {
        botAvatar.classList.add("wave");
        const messages = [
            "Hey there! 🤖 I'm your assistant.",
            "Need help? Type ...",
            "About",
            "Home",
            "Experience",
            "Projects",
            "Skills",
            "Contact"
        ];
        let index = 0;

        function showNextMessage() {
            if (index < messages.length) {
                simulateTyping(messages[index], () => {
                    index++;
                    setTimeout(showNextMessage, 100);
                });
            } else {
                botAvatar.classList.remove("wave");
            }
        }

        showNextMessage();
    }

    /** 📌 Handle User Input */
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            processUserInput();
        }
    });

    document.getElementById("send-btn").addEventListener("click", processUserInput);

    function processUserInput() {
        const userMessage = chatInput.value.trim().toLowerCase();
        if (!userMessage) return;

        chatInput.value = "";
        appendMessage("user", userMessage);
        setTimeout(() => handleUserInput(userMessage), 1000);
    }

    /** 📌 Append Chat Messages */
    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add(sender);
        msgDiv.textContent = message;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    /** 📌 Simulate Typing Effect */
    function simulateTyping(message, callback) {
        botAvatar.classList.add("typing");
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("typing-animation");
        typingIndicator.innerHTML = `
            <span class="typing-indicator"></span>
            <span class="typing-indicator"></span>
            <span class="typing-indicator"></span>
        `;
        chatBody.appendChild(typingIndicator);
        chatBody.scrollTop = chatBody.scrollHeight;

        setTimeout(() => {
            chatBody.removeChild(typingIndicator);
            botAvatar.classList.remove("typing");
            appendMessage("bot", message);
            if (callback) callback();
        }, 1000);
    }

    /** 📌 Handle User Input Navigation */
    function handleUserInput(message) {
        const sections = {
            "about": "#about",
            "experience": "#experience",
            "projects": "#projects",
            "skills": "#skills",
            "contact": "#contact"
        };


        const skillKeywords = ["skills", "technologies", "stack", "frameworks", "databases", "languages", "tools"];

        if (message === "home") {
            simulateTyping("Navigating to Home 🏠...", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
            return;
        }
        if(message === "hi"){
            simulateTyping("Hello ! How you doing . . . . ?");
            return;
        }
        if (skillKeywords.some(keyword => message.includes(keyword))) {
            simulateTyping("Let me show you my skills...", () => {
                document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
            });
            return;
        }

        if (sections[message]) {
            simulateTyping(`Taking you to ${message}...`, () => {
                document.querySelector(sections[message]).scrollIntoView({ behavior: "smooth" });
            });
            return;
        }

        simulateTyping("I'm not sure what you mean. Try 'skills' or 'projects'!");
    }

    /** 📌 Auto-hide Chatbot after 60s */
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            chatbot.style.animation = "fadeOut 1s forwards";
            setTimeout(() => {
                chatbot.style.display = "none";
                chatbotIcon.style.display = "block";
                chatbot.style.animation = "";
            }, 1000);
        }, 60000);
    }

    /** 📌 Reset inactivity on user input */
    chatInput.addEventListener("input", resetInactivityTimer);

    /** 📌 Close Chatbot & Show Bot Icon */
    closeChat.addEventListener("click", () => {
        chatbot.style.display = "none";
        chatbotIcon.style.display = "block";
    });

    /** 📌 Click Bot Icon to Reopen */
    chatbotIcon.addEventListener("click", () => {
        chatbot.style.display = "flex";
        chatbotIcon.style.display = "none";
        resetInactivityTimer();
    });

    /** 📌 Start inactivity timer */
    resetInactivityTimer();
});
