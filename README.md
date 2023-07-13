# Katrina Hair Salon
Website for hair salon 

## Setup
Run `npm install` inside directory to install all needed packages.

## Dev
Make sure that the following config is setup for dev mode in `vite.config.ts`

```ts
export default defineConfig({
  base: "",
  plugins: [react()],
})
```

Then you may run `npm run dev` to develop the app.

## Prod
When building, make sure to change the base in `vite.config.ts` to the URL of your app. 
For example, a website being hosted on `https://example.com/BASE_URL/` would look like this:

```ts
export default defineConfig({
  base: "/BASE_URL/",
  plugins: [react()],
})
```
