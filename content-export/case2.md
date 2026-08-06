# Case Study 2: Designing a Block-Based Feature for Website Customisation

Source: `lib/content/caseStudies.en.ts` (slug: `designing-a-block-based-feature-for-website-customisation`). Text content only — image/video URLs omitted.

**Card title:** Palette - E-learning platform admin
**Card name:** Block Feature and content management
**Card description:** Helps with website customisation.

**Subtitle:** Helps with website customisation.

## Meta

- **Role:** Product designer
- **Team:** Product manager, 2 engineers
- **Skills:** UX design, UI design, Feature Design

## Product

Palette (Renamed to Course-hub) is a service that helps learning providers market, manage, and sell courses. We helped clients set up their websites to sell courses, which included managing course content on their websites, payment solutions, enrollment management, and marketing campaigns.

## User

Our clients are universities or training organisations that need a white-label website aligned with their brand to sell their courses and efficiently manage enrolment.

## User story

As an administrator, I want to add one more testimonial and add one more lecturer to the course description. I can edit the text, but I don't know how to edit HTML to add more information.

## Summary

I led the design of a website customisation feature using reusable content blocks, empowering non-technical users to edit course pages easily and confidently. This improvement significantly enhanced usability and user satisfaction. As our team was still small, efficiently managing resources was crucial during our growth stage — this new feature also helped reduce the setup time for white-label websites for new clients by 50% within two months.

## Problem

Many clients' administrators wanted to add content on course pages, but they were afraid of breaking the layout or needed to rely on our team for small changes. This created inconvenience for both our clients and our development team.

**Challenge:** How can we give administrators confidence to edit layouts without needing design or coding skills?

## Goal

1. **Reduce customer support requests** — Empowered client administrators to independently manage and update content, reducing change requests to customer support.

## Design process

### 1. User research
Talked with client administrators about the kinds of edits they attempted and where they got stuck.

### 2. Exploring layout variations
Analysed past client projects to identify common layout patterns, then transformed frequently used sections into blocks.

### 3. Designing blocks by scenario
General pages: blocks in this category include a broader range of flexible layouts to support marketing and landing pages as needed. Course pages: blocks in this category don't have variations — the purpose is to present course details clearly, such as text, video, accordion, and program.

### 4. Keeping the block number lean
Template-based approaches can limit visual diversity, so I introduced a "style control option" in the block setting. For example, the Hero block offers options like carousel, image ratio, text alignment, and colour style — this ensured diverse design needs while maintaining a lean block number.

### 5. Focusing on content more than visual
Users frequently need to add content with the same visual style. For example, a user wants to add a new teacher bio after the existing one as an update — she doesn't want a new block, just a new item under the same block without any visual changes. The "add item" action under the Author-and-image, List, and Accordion blocks is essential.

### 6. Ensuring proper contrast
We also added manual colour overrides — such as text colour on image backgrounds. For example, when a user applies a background image, they can manually adjust the text colour to ensure proper contrast, improving both accessibility and aesthetics.

## Final solution

Users can add new introductions underneath the existing one and maintain visual consistency without any front-end knowledge. Users can also edit the homepage with blocks designed for different purposes, such as Hero, Testimonial, Carousel, and About.

### Example: adding a teacher bio to the course page
1. Add a block → 2. Click "add item" to edit → 3. Save

### Example: adding a hero section to the homepage
1. Click "add block" → 2. Hover the icon to see the preview → 3. Add

## Outcome

1. **Content-related requests dropped by only 10%** — This fell short of expectations. Many users were unaware of the new feature, highlighting the need for better client education and feature adoption support.

## Flow

Adding a teacher bio → 1. Add a block → 2. Click "add item" to edit → 3. Save
Adding a hero section → 1. Click "add block" → 2. Hover the icon to preview → 3. Add
