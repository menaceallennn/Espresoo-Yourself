const EMAIL = "espressoyourself@email.com";

const menu = {
  signature: [
    { name: "Brown Sugar Oat Latte", price: "$5.75", desc: "Sweet, cozy, and smooth. A total fan favorite.", tags: ["hot/iced", "popular"] },
    { name: "Vanilla Rose Latte", price: "$5.95", desc: "Soft vanilla with a floral twist. Super pretty vibes.", tags: ["hot/iced"] },
    { name: "Caramel Cloud Cold Brew", price: "$5.50", desc: "Cold brew topped with a fluffy caramel foam.", tags: ["iced", "popular"] },
    { name: "Honey Cinnamon Latte", price: "$5.75", desc: "Warm, comforting, and feels like a hug.", tags: ["hot/iced"] },
    { name: "Strawberry Cream Iced Latte", price: "$5.95", desc: "Sweet + cute + photo-worthy.", tags: ["iced"] },
    { name: "Mocha Kiss", price: "$5.75", desc: "Chocolatey, smooth, and always a yes.", tags: ["hot/iced"] }
  ],
  classics: [
    { name: "Espresso (Double)", price: "$3.25", desc: "Rich, bold, and clean.", tags: ["hot"] },
    { name: "Americano", price: "$3.95", desc: "Espresso + water. Simple and strong.", tags: ["hot/iced"] },
    { name: "Latte", price: "$5.25", desc: "Classic espresso with steamed milk.", tags: ["hot/iced"] },
    { name: "Cappuccino", price: "$5.25", desc: "Foamy, classic, and strong.", tags: ["hot"] },
    { name: "Cold Brew", price: "$4.95", desc: "Smooth finish, zero drama.", tags: ["iced"] },
    { name: "Iced Vanilla Latte", price: "$5.50", desc: "The reliable main character.", tags: ["iced", "popular"] }
  ],
  matcha: [
    { name: "Matcha Latte", price: "$5.75", desc: "Creamy matcha, hot or iced.", tags: ["hot/iced", "popular"] },
    { name: "Strawberry Matcha", price: "$6.25", desc: "Aesthetic and delicious. The girls love this one.", tags: ["iced"] },
    { name: "Chai Latte", price: "$5.50", desc: "Spiced and cozy. Always hits.", tags: ["hot/iced"] },
    { name: "Iced Black Tea", price: "$3.95", desc: "Crisp, refreshing, and simple.", tags: ["iced"] },
    { name: "Herbal Tea", price: "$3.75", desc: "Seasonal blend, always cute.", tags: ["hot"] }
  ],
  addons: [
    { name: "Milk Options", price: "Included", desc: "Oat, almond, coconut, or dairy.", tags: ["custom"] },
    { name: "Flavor Syrups", price: "+$0.50", desc: "Vanilla, caramel, hazelnut, lavender (if available).", tags: ["custom"] },
    { name: "Extra Espresso Shot", price: "+$1.25", desc: "For the ones who mean business.", tags: ["boost"] },
    { name: "Cold Foam", price: "+$1.00", desc: "Because pretty drinks taste better.", tags: ["popular"] },
    { name: "Cute Toppings", price: "+$0.50", desc: "Cinnamon, cocoa, drizzle, whipped cream.", tags: ["cute"] },
    { name: "Custom Menu Names", price: "Event add-on", desc: "We can name drinks after your theme or guest of honor.", tags: ["events"] }
  ]
};

function renderMenu(tabKey){
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  grid.innerHTML = "";

  menu[tabKey].forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <div class="itemTop">
        <div class="itemName">${item.name}</div>
        <div class="itemPrice">${item.price}</div>
      </div>
      <p class="itemDesc">${item.desc}</p>
      <div class="badges">
        ${item.tags.map(t => `<span class="badgePill">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(div);
  });
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.tab);
  });
});

// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Form demo: creates an email draft using mailto:
  e.preventDefault();

  const data = new FormData(e.target);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const date = (data.get("date") || "").toString().trim();
  const type = (data.get("type") || "").toString().trim();
  const location = (data.get("location") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const subject = encodeURIComponent(`Event Request: ${type || "Event"} — ${name || "New inquiry"}`);
  const body = encodeURIComponent(
`Hi Espresso Yourself!

Name: ${name}
Email: ${email}
Event type: ${type}
Event date: ${date}
Location: ${location}

Details:
${message}

Thank you!`
  );

  const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  window.location.href = mailto;

  const note = document.getElementById("formNote");
  if (note) note.textContent = "Opening your email app to send your request 💌";
  return false;
}


// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Default tab
renderMenu("signature");
