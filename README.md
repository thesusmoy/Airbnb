# Airbnb Clone

This is a clone of the Airbnb website built with Next.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/thesusmoy/Airbnb.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Create a `.env.local` file in the root of the project and add the following environment variables:
    ```
    NEXT_PUBLIC_GOOGLE_CLIENT_ID=<your_google_client_id>
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run start`

Starts the application in production mode. The application should be compiled with `npm run build` first.

### `npm run lint`

Runs the linter to check for code quality and style issues.

## Dependencies

-   @radix-ui/react-accordion: ^1.2.12
-   @radix-ui/react-dialog: ^1.1.15
-   @radix-ui/react-popover: ^1.1.15
-   @radix-ui/react-select: ^2.2.6
-   @radix-ui/react-separator: ^1.1.7
-   @radix-ui/react-slot: ^1.2.3
-   @radix-ui/react-tabs: ^1.1.13
-   @react-oauth/google: ^0.12.2
-   class-variance-authority: ^0.7.1
-   clsx: ^2.1.1
-   date-fns: ^4.1.0
-   dotenv: ^17.2.2
-   framer-motion: ^12.23.12
-   jwt-decode: ^4.0.0
-   lucide-react: ^0.543.0
-   moment: ^2.30.1
-   next: 15.5.2
-   next-intl: ^4.3.8
-   react: 19.1.0
-   react-day-picker: ^9.9.0
-   react-dom: 19.1.0
-   react-slick: ^0.31.0
-   slick-carousel: ^1.8.1
-   tailwind-merge: ^3.3.1
-   zustand: ^5.0.8

## Dev Dependencies

-   @eslint/eslintrc: ^3
-   @tailwindcss/postcss: ^4
-   @types/node: ^20
-   @types/react: ^19
-   @types/react-dom: ^19
-   @types/react-slick: ^0.23.13
-   eslint: ^9
-   eslint-config-next: 15.5.2
-   tailwindcss: ^4
-   tw-animate-css: ^1.3.8
-   typescript: ^5

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
