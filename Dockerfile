# --- Stage 1: Build ---
FROM node:20-alpine AS build

WORKDIR /app

# Copy and install deps first (for caching)
COPY package*.json ./
RUN npm ci

# Copy rest of app
COPY . .

# Build optimized static files
RUN npm run build


# --- Stage 2: Serve with Nginx ---
FROM nginx:stable-alpine

# Remove default site
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets to the nginx html root so the app is served at '/'
# Built files will be at /usr/share/nginx/html/<assets...>
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional, see below)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
