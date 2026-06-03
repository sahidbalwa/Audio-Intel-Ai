/**
 * Run `npm run dev` or `npm run build` with `SKIP_ENV_VALIDATION`
 * to skip environment validation.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default config;