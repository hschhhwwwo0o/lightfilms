# Pages

In Next.js, a page is a React Component exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the pages directory. Each page is associated with a route based on its file name.

Example: If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.

```js
const AboutPage = () => {
    return <div>About</div>
}

export default About;
```

# Pages with Dynamic Routes

Next.js supports pages with dynamic routes. For example, if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`, etc.

# Useful documentation

- **https://nextjs.org/docs/routing/introduction**
- **https://nextjs.org/docs/routing/shallow-routing**
- **https://nextjs.org/docs/routing/dynamic-routes**