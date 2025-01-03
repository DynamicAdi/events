// All the GROQ queries are executed from the server

// export const initBanner = `*[ _type=="main" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
// export const initToday = `*[ _type=="today" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
// export const initFeatured = `*[ _type=="featured" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
// export const initLatest = `*[ _type=="post" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
// export const initFeeds = `*[ _type=="morenews" ]{title, mainImage, _createdAt, _type, slug, author->{ name, bio}}`;
// export const initHeadlines = `*[ _type=="headlines" ]{title, _type, slug}`;

// // Full page Data
// export const FullLatest = `*[ _type=="post" && slug.current == $slug ]`;

export const about = `*[ _type=="about"]`
export const fullPageAbout = `*[ _type=="about"]{mainDescription, ourPartners, TeamMember}`
export const contactInfo = `*[ _type=="about"]{contactInformation, socialMediaLinks}`

export const pastProjects = `*[ _type=="mainpost"]`

export const blogCard = `*[ _type=="post"]{title, mainImage, _updatedAt, slug, author-> {name}}`
export const fullBlog = `*[ _type=="post"]{..., author-> {name}}`

export const services = `*[ _type=="services"]`