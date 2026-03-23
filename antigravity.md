# AI Web Developer Prompt: Mettinahole Swachhathon 5K Website

**Role and Objective:**
Act as an expert Frontend Web Developer and UI/UX Designer. Your task is to build a complete, highly dynamic, and interactive event website for the "Mettinahole Swachhathon 5K". 

**Structural Reference & Design Language:**
* **Structure:** Study the layout architecture of `https://bengalurumarathon.in/`. I want the structural flow to be similar (e.g., sticky navigation, prominent hero section with quick stats, clear call-to-action buttons, and well-sectioned informational areas). 
* **Design & CSS:** DO NOT copy the visual design or colors of the reference site. I want a completely unique, modern, and engaging visual identity. The theme should blend "village heritage/traditional pottery" with "modern fitness and environmental cleanliness." Use an energetic but earthy color palette.
* **Animations:** The website must be highly dynamic. Implement smooth CSS animations, scroll-triggered reveals (using Framer Motion or similar), parallax effects on the hero banner, hover states on cards/buttons, and dynamic number counters for prizes/times.
* **Mobile-First approach (CRITICAL):** Design strictly for mobile screens first, ensuring large touch targets, a smooth hamburger menu, and easily readable text without zooming. It must smoothly scale up to a responsive desktop version using CSS Grid/Flexbox.

**Technical Requirements:**
* Use modern frameworks (e.g., React, Next.js, or standard HTML/Tailwind CSS/JavaScript based on your environment).
* All "Register" or "Register Now" buttons across the entire site MUST redirect externally to this exact URL: `https://docs.google.com/forms/d/e/1FAIpQLSctBddF2yOHPiCJJSam07ADwbaTq9UNQalcG7KZlfSd_G2PrQ/viewform`
* Do not build a custom registration form; just use the link above.

**Content & Page Architecture:**
Please generate the code for a multi-page site or a comprehensive Single Page Application (with smooth scroll navigation) containing the following sections:

**1. Global Elements:**
* **Sticky Header:** Logo/Event Name on the left, Hamburger menu on mobile (expanding to full nav links on desktop), and a prominent, glowing "Register Now" CTA button.
* **Footer:** Links to all sections, contact info, and the tagline: "Organized by Team Mettinahole | Rooted in Heritage, Moving Towards Progress."

**2. HOME PAGE (Hero Section):**
* **Headline:** METTINAHOLE SWACHHATHON 5K
* **Subheadline:** Run • Clean • Serve
* **Description:** Join us for a community-driven event that promotes health, cleanliness, and unity in our village. Be part of a meaningful initiative where every step contributes to a cleaner and stronger Mettinahole.
* **Quick Info Bar (Icons + Text):** 📅 Sunday, April 5 | 🕒 6:30 AM | 📍 Mettinahole School Ground
* **Primary CTA:** Massive "Register Now" button with a pulse animation.

**3. ABOUT THE EVENT (Split layout with image placeholder):**
* **Content:** Mettinahole Swachhathon 5K is a village-level initiative aimed at promoting fitness, environmental awareness, and community participation. Our village has a rich heritage, especially known for its traditional pottery. Through this event, we aim to connect our cultural roots with modern responsibility.
* **Bullet Points:** A 5K run for all age groups, A clean village drive, A fun and engaging treasure hunt.
* **Closing statement:** Together, let’s build a clean, healthy, and united village.

**4. RACE & ACTIVITIES (Card Grid Layout):**
* *Card 1 (5K Run):* Open for all, Separate Men & Women categories, Certificates for all. (Include a running icon/animation).
* *Card 2 (Clean Village Drive):* Community cleanliness activity, Promote awareness about hygiene and environment. (Include a leaf/broom icon).
* *Card 3 (Treasure Hunt):* Clue-based game across the village, Fun and interactive experience, Exciting prizes to win. (Include a map/chest icon).

**5. ROUTE MAP:**
* **Visual:** Create a stylized placeholder for a map graphic.
* **Details:** The 5K run takes place across key roads in Mettinahole village. Starting & Ending Point: Mettinahole School Ground.
* **Instructions:** Follow marked routes, cooperate with volunteers, maintain discipline.

**6. PRIZES & RECOGNITION (Highlight Section):**
* Make this visually pop with gold/silver accents or dynamic counters.
* 🥇 1st Prize: ₹3000
* 🥈 2nd Prize: ₹2000
* *Note:* Separate prizes for Men & Women. Certificates provided to all.

**7. EVENT DETAILS & RULES (Accordion or Tabbed Interface):**
* **Details:** Date: Sunday, April 5 | Time: 6:30 AM (Reporting: 6:00 AM) | Venue: Mettinahole School Ground. (Note: Arrive early for smooth coordination).
* **Rules:** Follow the route, Do not litter, Respect volunteers, Wear sports attire, Maintain discipline. Failure to follow rules leads to disqualification.

**8. FAQ & CONTACT (Bottom Section):**
* **FAQ (Collapsible Accordions):** 1. Who can participate? Anyone. 
    2. Is there a fee? Free. 
    3. What to bring? Sports shoes & comfortable clothes. 
    4. Certificates? Yes, for all. 
    5. Arrival time? 6:00 AM.
* **Contact Info:** 📞 96063 20599 | 📞 93534 93699. "We are happy to assist you."

**Final Instruction to AI:** Please provide the complete frontend code. Focus heavily on crafting a stunning, animated, mobile-responsive UI that feels highly professional and energetic.