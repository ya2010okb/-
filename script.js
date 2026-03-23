const API_KEY = "AIzaSyBY6i6TlzxRhmORJ28CumtqHyWSn70fnR4";

// محاكاة تسجيل الدخول (للعرض والعمل الفوري)
function loginWithGoogle() {
    // في النسخة الاحترافية نستخدم Firebase Auth هنا
    const userName = prompt("أدخل اسمك للمتابعة عبر Google:");
    if(userName) {
        saveUser(userName, "https://cdn-icons-png.flaticon.com/512/300/300221.png");
    }
}

function loginWithFacebook() {
    const userName = prompt("أدخل اسمك للمتابعة عبر Facebook:");
    if(userName) {
        saveUser(userName, "https://cdn-icons-png.flaticon.com/512/124/124010.png");
    }
}

function saveUser(name, photo) {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'flex';
    document.getElementById('display-name').innerText = name;
    document.getElementById('user-photo').src = photo;
    addMsg(`أهلاً بك يا ${name}! أنا VROOM، مساعدك الميكانيكي. كيف حال سيارتك اليوم؟`, 'ai');
}

async function sendMessage() {
    const input = document.getElementById('user-in');
    const text = input.value.trim();
    if(!text) return;

    addMsg(text, 'user');
    input.value = "";
    const loading = addMsg("VROOM يحلل العطل... ⚡", 'ai');

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: [{ parts: [{ text: "أنت ميكانيكي خبير من الجزائر، أجب بذكاء واحترافية: " + text }] }]
            })
        });

        const data = await response.json();
        if(data.error) {
            loading.innerText = "خطأ في المفتاح! تأكد من تفعيله في Google AI Studio.";
        } else {
            loading.innerText = data.candidates[0].content.parts[0].text;
        }
    } catch (e) {
        loading.innerText = "حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.";
    }
}

function addMsg(t, c) {
    const chatBox = document.getElementById('chat-box');
    const d = document.createElement('div');
    d.className = `msg ${c}`;
    d.innerText = t;
    chatBox.appendChild(d);
    chatBox.scrollTop = chatBox.scrollHeight;
    return d;
}

function logout() {
    location.reload();
}