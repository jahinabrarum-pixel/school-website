// HTML থেকে nav-links div-টিকে আইডি দ্বারা ধরে আনা
var navLinks = document.getElementById("navLinks");

// মেনু খোলার ফাংশন (হ্যামবার্গার আইকনে ক্লিক করলে)
function showMenu(){
    // navLinks এর CSS property 'right' কে 0 করে দেওয়া হলো
    // ফলে মেনুটি ডানদিক থেকে স্ক্রিনের মধ্যে চলে আসবে
    navLinks.style.right = "0"; 
}

// মেনু বন্ধ করার ফাংশন (ক্লোজ আইকনে ক্লিক করলে)
function hideMenu(){
    // navLinks এর CSS property 'right' কে -200px (মেনুর প্রস্থ) করে দেওয়া হলো
    // ফলে মেনুটি ডানদিক থেকে স্ক্রিনের বাইরে চলে যাবে (লুকিয়ে যাবে)
    navLinks.style.right = "-200px"; 
}