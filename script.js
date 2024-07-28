async function fetchContacts(){let e=await fetch("/api/contacts"),t=await e.json();return t}async function displayContacts(){let e=document.getElementById("contactList"),t=await fetchContacts();e.innerHTML="",t.forEach(t=>{let s=document.createElement("div");s.classList.add("contact"),s.innerHTML=`
    <div>
        <strong>${t.name}</strong>
        <span class="${t.status}">${t.status}</span>
        <span class="last-seen">${t.lastSeen}</span>
    </div>
`,s.addEventListener("click",()=>{loadChat(t.id,t.name)}),e.appendChild(s)})}async function loadChat(e,t){let s=await fetch(`/api/chats/${e}`),n=await s.json(),a=document.getElementById("chatArea");a.innerHTML=`<h3>Chat with ${t}</h3>`,n.forEach(e=>{displayMessage(e.sender,e.message,e.time,"You"===e.sender)})}function displayMessage(e,t,s,n){let a=document.getElementById("chatArea"),i=document.createElement("div");i.classList.add("message"),i.classList.add(n?"sent":"received"),i.innerHTML=`
<strong>${e}</strong>
<span>${s}</span>
<p>${t}</p>
`,a.appendChild(i)}function sendMessage(){let e=document.getElementById("messageInput"),t=e.value.trim();""!==t&&(displayMessage("You",t,new Date().toLocaleTimeString(),!0),e.value="")}document.getElementById("sendMessageBtn").addEventListener("click",sendMessage),document.getElementById("messageInput").addEventListener("keydown",function(e){"Enter"===e.key&&sendMessage()}),displayContacts(),document.getElementById("logout").addEventListener("click",()=>{alert("You have logged out."),window.location.href="login.html"});const dummyContacts=[{id:1,name:"Alice",status:"online",lastSeen:""},{id:2,name:"Bob",status:"offline",lastSeen:"Last seen 10 minutes ago"}],dummyMessages={1:[{sender:"Alice",message:"Hello!",time:"10:00 AM"},{sender:"You",message:"Hi Alice!",time:"10:01 AM"}],2:[{sender:"Bob",message:"Good morning!",time:"9:00 AM"},{sender:"You",message:"Good morning Bob!",time:"9:05 AM"}]};async function fetchContacts(){return dummyContacts}async function loadChat(e,t){let s=dummyMessages[e]||[],n=document.getElementById("chatArea");n.innerHTML=`<h3>Chat with ${t}</h3>`,s.forEach(e=>{displayMessage(e.sender,e.message,e.time,"You"===e.sender)})}

