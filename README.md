This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<!-- about this demo -->

here use the latest version of next js 13 this is still in development mode so quit issue are redirection slow 
Technology => Next JS,Tailwind CSS,shade-cn ui,redux-toolkit

okay so here first I have created the home page as a login screen and simply do validation are there fields is username and password like  anyone can enter anything and simply redirect to the post page because just implement the Redux Toolkit state and setup and also 
simply store the true value in localstorage in navbar apply the logout functionality using RTk 


Note => here table not updating because refresh the page fake API is not maintaining DB if CRUD working then simply check in network-tab and check in to payload
after post page I have done the CRUD the operation  of fake api using typicode.com this is render in client side using redux-toolkit 
for state management here options are create-post on that click navigate to that page where enter title,body here in Actions
we have edit and delete functionality

now, in blog I can't Find the fake blog API so ,here i have used Fake Product API I hope it's okay 

so here , in post we have option to go in to blog page 
this page has server side rendering 
after onclick of anyparticular card redirecrt to the their details page and Also this page render in serverside 
I have maintain here Best SEO practices as per requirement using generateMetadata 

Thank You

from start the app -> npm run dev
